define("ace/mode/sql_highlight_rules", [
  "require",
  "exports",
  "module",
  "ace/lib/oop",
  "ace/mode/text_highlight_rules"
], function (require, exports, module) {
  "use strict";
  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var SqlHighlightRules = function () {
    var keywords =
      "select|insert|update|delete|from|where|and|or|group|by|order|limit|offset|having|as|case|" +
      "when|then|else|end|type|left|right|join|on|outer|desc|asc|union|create|table|primary|key|if|" +
      "foreign|not|references|default|null|inner|cross|natural|database|drop|grant|distinct|is|in|" +
      "all|alter|any|array|at|authorization|between|both|cast|check|collate|column|commit|constraint|" +
      "cube|current|current_date|current_time|current_timestamp|current_user|describe|escape|except|" +
      "exists|external|extract|fetch|filter|for|full|function|global|grouping|intersect|interval|" +
      "into|leading|like|local|no|of|only|out|overlaps|partition|position|range|revoke|rollback|rollup|" +
      "row|rows|session_user|set|some|start|tablesample|time|to|trailing|truncate|unique|unknown|" +
      "user|using|values|window|with";
    var builtinConstants = "true|false";
    var builtinFunctions =
      "avg|count|first|last|max|min|sum|ucase|lcase|mid|len|round|rank|now|format|" +
      "coalesce|ifnull|isnull|nvl";
    var dataTypes =
      "int|numeric|decimal|date|varchar|char|bigint|float|double|bit|binary|text|set|timestamp|" +
      "money|real|number|integer|string";
    var keywordMapper = this.createKeywordMapper(
      {
        "support.function": builtinFunctions,
        keyword: keywords,
        "constant.language": builtinConstants,
        "storage.type": dataTypes
      },
      "identifier",
      true
    );
    this.$rules = {
      start: [
        {
          token: "comment",
          regex: "--.*$"
        },
        {
          token: "comment",
          start: "/\\*",
          end: "\\*/"
        },
        {
          token: "string", // " string
          regex: '".*?"'
        },
        {
          token: "string", // ' string
          regex: "'.*?'"
        },
        {
          token: "string", // ` string (apache drill)
          regex: "`.*?`"
        },
        {
          token: "constant.numeric", // float
          regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
        },
        {
          token: keywordMapper,
          regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
        },
        {
          token: "keyword.operator",
          regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
        },
        {
          token: "paren.lparen",
          regex: "[\\(]"
        },
        {
          token: "paren.rparen",
          regex: "[\\)]"
        },
        {
          token: "text",
          regex: "\\s+"
        }
      ]
    };
    this.normalizeRules();
  };
  oop.inherits(SqlHighlightRules, TextHighlightRules);
  exports.SqlHighlightRules = SqlHighlightRules;
});

define("ace/mode/folding/cstyle", [
  "require",
  "exports",
  "module",
  "ace/lib/oop",
  "ace/range",
  "ace/mode/folding/fold_mode"
], function (require, exports, module) {
  "use strict";
  var oop = require("../../lib/oop");
  var Range = require("../../range").Range;
  var BaseFoldMode = require("./fold_mode").FoldMode;
  var FoldMode = (exports.FoldMode = function (commentRegex) {
    if (commentRegex) {
      this.foldingStartMarker = new RegExp(
        this.foldingStartMarker.source.replace(
          /\|[^|]*?$/,
          "|" + commentRegex.start
        )
      );
      this.foldingStopMarker = new RegExp(
        this.foldingStopMarker.source.replace(
          /\|[^|]*?$/,
          "|" + commentRegex.end
        )
      );
    }
  });
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function (session, foldStyle, row) {
      var line = session.getLine(row);
      if (this.singleLineBlockCommentRe.test(line)) {
        if (
          !this.startRegionRe.test(line) &&
          !this.tripleStarBlockCommentRe.test(line)
        )
          return "";
      }
      var fw = this._getFoldWidgetBase(session, foldStyle, row);
      if (!fw && this.startRegionRe.test(line)) return "start"; // lineCommentRegionStart
      return fw;
    };
    this.getFoldWidgetRange = function (
      session,
      foldStyle,
      row,
      forceMultiline
    ) {
      var line = session.getLine(row);
      if (this.startRegionRe.test(line))
        return this.getCommentRegionBlock(session, line, row);
      var match = line.match(this.foldingStartMarker);
      if (match) {
        var i = match.index;
        if (match[1])
          return this.openingBracketBlock(session, match[1], row, i);
        var range = session.getCommentFoldRange(row, i + match[0].length, 1);
        if (range && !range.isMultiLine()) {
          if (forceMultiline) {
            range = this.getSectionRange(session, row);
          } else if (foldStyle != "all") range = null;
        }
        return range;
      }
      if (foldStyle === "markbegin") return;
      var match = line.match(this.foldingStopMarker);
      if (match) {
        var i = match.index + match[0].length;
        if (match[1])
          return this.closingBracketBlock(session, match[1], row, i);
        return session.getCommentFoldRange(row, i, -1);
      }
    };
    this.getSectionRange = function (session, row) {
      var line = session.getLine(row);
      var startIndent = line.search(/\S/);
      var startRow = row;
      var startColumn = line.length;
      row = row + 1;
      var endRow = row;
      var maxRow = session.getLength();
      while (++row < maxRow) {
        line = session.getLine(row);
        var indent = line.search(/\S/);
        if (indent === -1) continue;
        if (startIndent > indent) break;
        var subRange = this.getFoldWidgetRange(session, "all", row);
        if (subRange) {
          if (subRange.start.row <= startRow) {
            break;
          } else if (subRange.isMultiLine()) {
            row = subRange.end.row;
          } else if (startIndent == indent) {
            break;
          }
        }
        endRow = row;
      }
      return new Range(
        startRow,
        startColumn,
        endRow,
        session.getLine(endRow).length
      );
    };
    this.getCommentRegionBlock = function (session, line, row) {
      var startColumn = line.search(/\s*$/);
      var maxRow = session.getLength();
      var startRow = row;
      var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
      var depth = 1;
      while (++row < maxRow) {
        line = session.getLine(row);
        var m = re.exec(line);
        if (!m) continue;
        if (m[1]) depth--;
        else depth++;
        if (!depth) break;
      }
      var endRow = row;
      if (endRow > startRow) {
        return new Range(startRow, startColumn, endRow, line.length);
      }
    };
  }).call(FoldMode.prototype);
});

define("ace/mode/folding/sql", [
  "require",
  "exports",
  "module",
  "ace/lib/oop",
  "ace/mode/folding/cstyle"
], function (require, exports, module) {
  "use strict";
  var oop = require("../../lib/oop");
  var BaseFoldMode = require("./cstyle").FoldMode;
  var FoldMode = (exports.FoldMode = function () {});
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {}).call(FoldMode.prototype);
});

define("ace/mode/sql", [
  "require",
  "exports",
  "module",
  "ace/lib/oop",
  "ace/mode/text",
  "ace/mode/sql_highlight_rules",
  "ace/mode/folding/sql"
], function (require, exports, module) {
  "use strict";
  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var SqlHighlightRules = require("./sql_highlight_rules").SqlHighlightRules;
  var SqlFoldMode = require("./folding/sql").FoldMode;
  var Mode = function () {
    this.HighlightRules = SqlHighlightRules;
    this.foldingRules = new SqlFoldMode();
    this.$behaviour = this.$defaultBehaviour;
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.lineCommentStart = "--";
    this.blockComment = { start: "/*", end: "*/" };
    this.$id = "ace/mode/sql";
    this.snippetFileId = "ace/snippets/sql";
  }).call(Mode.prototype);
  exports.Mode = Mode;
});
(function () {
  window.require(["ace/mode/sql"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
