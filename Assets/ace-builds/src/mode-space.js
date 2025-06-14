define("ace/mode/folding/coffee", [
  "require",
  "exports",
  "module",
  "ace/lib/oop",
  "ace/mode/folding/fold_mode",
  "ace/range"
], function (require, exports, module) {
  "use strict";
  var oop = require("../../lib/oop");
  var BaseFoldMode = require("./fold_mode").FoldMode;
  var Range = require("../../range").Range;
  var FoldMode = (exports.FoldMode = function () {});
  oop.inherits(FoldMode, BaseFoldMode);
  (function () {
    this.commentBlock = function (session, row) {
      var re = /\S/;
      var line = session.getLine(row);
      var startLevel = line.search(re);
      if (startLevel == -1 || line[startLevel] != "#") return;
      var startColumn = line.length;
      var maxRow = session.getLength();
      var startRow = row;
      var endRow = row;
      while (++row < maxRow) {
        line = session.getLine(row);
        var level = line.search(re);
        if (level == -1) continue;
        if (line[level] != "#") break;
        endRow = row;
      }
      if (endRow > startRow) {
        var endColumn = session.getLine(endRow).length;
        return new Range(startRow, startColumn, endRow, endColumn);
      }
    };
    this.getFoldWidgetRange = function (session, foldStyle, row) {
      var range = this.indentationBlock(session, row);
      if (range) return range;
      range = this.commentBlock(session, row);
      if (range) return range;
    };
    this.getFoldWidget = function (session, foldStyle, row) {
      var line = session.getLine(row);
      var indent = line.search(/\S/);
      var next = session.getLine(row + 1);
      var prev = session.getLine(row - 1);
      var prevIndent = prev.search(/\S/);
      var nextIndent = next.search(/\S/);
      if (indent == -1) {
        session.foldWidgets[row - 1] =
          prevIndent != -1 && prevIndent < nextIndent ? "start" : "";
        return "";
      }
      if (prevIndent == -1) {
        if (
          indent == nextIndent &&
          line[indent] == "#" &&
          next[indent] == "#"
        ) {
          session.foldWidgets[row - 1] = "";
          session.foldWidgets[row + 1] = "";
          return "start";
        }
      } else if (
        prevIndent == indent &&
        line[indent] == "#" &&
        prev[indent] == "#"
      ) {
        if (session.getLine(row - 2).search(/\S/) == -1) {
          session.foldWidgets[row - 1] = "start";
          session.foldWidgets[row + 1] = "";
          return "";
        }
      }
      if (prevIndent != -1 && prevIndent < indent)
        session.foldWidgets[row - 1] = "start";
      else session.foldWidgets[row - 1] = "";
      if (indent < nextIndent) return "start";
      else return "";
    };
  }).call(FoldMode.prototype);
});

define("ace/mode/space_highlight_rules", [
  "require",
  "exports",
  "module",
  "ace/lib/oop",
  "ace/mode/text_highlight_rules"
], function (require, exports, module) {
  "use strict";
  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var SpaceHighlightRules = function () {
    this.$rules = {
      start: [
        {
          token: "empty_line",
          regex: / */,
          next: "key"
        },
        {
          token: "empty_line",
          regex: /$/,
          next: "key"
        }
      ],
      key: [
        {
          token: "variable",
          regex: /\S+/
        },
        {
          token: "empty_line",
          regex: /$/,
          next: "start"
        },
        {
          token: "keyword.operator",
          regex: / /,
          next: "value"
        }
      ],
      value: [
        {
          token: "keyword.operator",
          regex: /$/,
          next: "start"
        },
        {
          token: "string",
          regex: /[^$]/
        }
      ]
    };
  };
  oop.inherits(SpaceHighlightRules, TextHighlightRules);
  exports.SpaceHighlightRules = SpaceHighlightRules;
});

define("ace/mode/space", [
  "require",
  "exports",
  "module",
  "ace/lib/oop",
  "ace/mode/text",
  "ace/mode/folding/coffee",
  "ace/mode/space_highlight_rules"
], function (require, exports, module) {
  "use strict";
  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var FoldMode = require("./folding/coffee").FoldMode;
  var SpaceHighlightRules =
    require("./space_highlight_rules").SpaceHighlightRules;
  var Mode = function () {
    this.HighlightRules = SpaceHighlightRules;
    this.foldingRules = new FoldMode();
    this.$behaviour = this.$defaultBehaviour;
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.$id = "ace/mode/space";
  }).call(Mode.prototype);
  exports.Mode = Mode;
});
(function () {
  window.require(["ace/mode/space"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
