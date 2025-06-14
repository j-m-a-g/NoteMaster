define("ace/mode/smithy_highlight_rules", [
  "require",
  "exports",
  "module",
  "ace/lib/oop",
  "ace/mode/text_highlight_rules"
], function (require, exports, module) {
  /* This file was autogenerated from https://raw.githubusercontent.com/awslabs/smithy-vscode/master/syntaxes/smithy.tmLanguage (uuid: ) */
  "use strict";
  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var SmithyHighlightRules = function () {
    this.$rules = {
      start: [
        {
          include: "#comment"
        },
        {
          token: [
            "meta.keyword.statement.smithy",
            "variable.other.smithy",
            "text",
            "keyword.operator.smithy"
          ],
          regex: /^(\$)(\s+.+)(\s*)(=)/
        },
        {
          token: [
            "keyword.statement.smithy",
            "text",
            "entity.name.type.namespace.smithy"
          ],
          regex: /^(namespace)(\s+)([A-Z-a-z0-9_\.#$-]+)/
        },
        {
          token: [
            "keyword.statement.smithy",
            "text",
            "keyword.statement.smithy",
            "text",
            "entity.name.type.smithy"
          ],
          regex: /^(use)(\s+)(shape|trait)(\s+)([A-Z-a-z0-9_\.#$-]+)\b/
        },
        {
          token: [
            "keyword.statement.smithy",
            "variable.other.smithy",
            "text",
            "keyword.operator.smithy"
          ],
          regex: /^(metadata)(\s+.+)(\s*)(=)/
        },
        {
          token: [
            "keyword.statement.smithy",
            "text",
            "entity.name.type.smithy"
          ],
          regex:
            /^(apply|byte|short|integer|long|float|double|bigInteger|bigDecimal|boolean|blob|string|timestamp|service|resource|trait|list|map|set|structure|union|document)(\s+)([A-Z-a-z0-9_\.#$-]+)\b/
        },
        {
          token: [
            "keyword.operator.smithy",
            "text",
            "entity.name.type.smithy",
            "text",
            "text",
            "support.function.smithy",
            "text",
            "text",
            "support.function.smithy"
          ],
          regex:
            /^(operation)(\s+)([A-Z-a-z0-9_\.#$-]+)(\(.*\))(?:(\s*)(->)(\s*[A-Z-a-z0-9_\.#$-]+))?(?:(\s+)(errors))?/
        },
        {
          include: "#trait"
        },
        {
          token: [
            "support.type.property-name.smithy",
            "punctuation.separator.dictionary.pair.smithy"
          ],
          regex: /([A-Z-a-z0-9_\.#$-]+)(:)/
        },
        {
          include: "#value"
        },
        {
          token: "keyword.other.smithy",
          regex: /\->/
        }
      ],
      "#comment": [
        {
          include: "#doc_comment"
        },
        {
          include: "#line_comment"
        }
      ],
      "#doc_comment": [
        {
          token: "comment.block.documentation.smithy",
          regex: /\/\/\/.*/
        }
      ],
      "#line_comment": [
        {
          token: "comment.line.double-slash.smithy",
          regex: /\/\/.*/
        }
      ],
      "#trait": [
        {
          token: [
            "punctuation.definition.annotation.smithy",
            "storage.type.annotation.smithy"
          ],
          regex: /(@)([0-9a-zA-Z\.#-]+)/
        },
        {
          token: [
            "punctuation.definition.annotation.smithy",
            "punctuation.definition.object.end.smithy",
            "meta.structure.smithy"
          ],
          regex: /(@)([0-9a-zA-Z\.#-]+)(\()/,
          push: [
            {
              token: "punctuation.definition.object.end.smithy",
              regex: /\)/,
              next: "pop"
            },
            {
              include: "#value"
            },
            {
              include: "#object_inner"
            },
            {
              defaultToken: "meta.structure.smithy"
            }
          ]
        }
      ],
      "#value": [
        {
          include: "#constant"
        },
        {
          include: "#number"
        },
        {
          include: "#string"
        },
        {
          include: "#array"
        },
        {
          include: "#object"
        }
      ],
      "#array": [
        {
          token: "punctuation.definition.array.begin.smithy",
          regex: /\[/,
          push: [
            {
              token: "punctuation.definition.array.end.smithy",
              regex: /\]/,
              next: "pop"
            },
            {
              include: "#comment"
            },
            {
              include: "#value"
            },
            {
              token: "punctuation.separator.array.smithy",
              regex: /,/
            },
            {
              token: "invalid.illegal.expected-array-separator.smithy",
              regex: /[^\s\]]/
            },
            {
              defaultToken: "meta.structure.array.smithy"
            }
          ]
        }
      ],
      "#constant": [
        {
          token: "constant.language.smithy",
          regex: /\b(?:true|false|null)\b/
        }
      ],
      "#number": [
        {
          token: "constant.numeric.smithy",
          regex: /-?(?:0|[1-9]\d*)(?:(?:\.\d+)?(?:[eE][+-]?\d+)?)?/
        }
      ],
      "#object": [
        {
          token: "punctuation.definition.dictionary.begin.smithy",
          regex: /\{/,
          push: [
            {
              token: "punctuation.definition.dictionary.end.smithy",
              regex: /\}/,
              next: "pop"
            },
            {
              include: "#trait"
            },
            {
              include: "#object_inner"
            },
            {
              defaultToken: "meta.structure.dictionary.smithy"
            }
          ]
        }
      ],
      "#object_inner": [
        {
          include: "#comment"
        },
        {
          include: "#string_key"
        },
        {
          token: "punctuation.separator.dictionary.key-value.smithy",
          regex: /:/,
          push: [
            {
              token: "punctuation.separator.dictionary.pair.smithy",
              regex: /,|(?=\})/,
              next: "pop"
            },
            {
              include: "#value"
            },
            {
              token: "invalid.illegal.expected-dictionary-separator.smithy",
              regex: /[^\s,]/
            },
            {
              defaultToken: "meta.structure.dictionary.value.smithy"
            }
          ]
        },
        {
          token: "invalid.illegal.expected-dictionary-separator.smithy",
          regex: /[^\s\}]/
        }
      ],
      "#string_key": [
        {
          include: "#identifier_key"
        },
        {
          include: "#dquote_key"
        },
        {
          include: "#squote_key"
        }
      ],
      "#identifier_key": [
        {
          token: "support.type.property-name.smithy",
          regex: /[A-Z-a-z0-9_\.#$-]+/
        }
      ],
      "#dquote_key": [
        {
          include: "#dquote"
        }
      ],
      "#squote_key": [
        {
          include: "#squote"
        }
      ],
      "#string": [
        {
          include: "#textblock"
        },
        {
          include: "#dquote"
        },
        {
          include: "#squote"
        },
        {
          include: "#identifier"
        }
      ],
      "#textblock": [
        {
          token: "punctuation.definition.string.begin.smithy",
          regex: /"""/,
          push: [
            {
              token: "punctuation.definition.string.end.smithy",
              regex: /"""/,
              next: "pop"
            },
            {
              token: "constant.character.escape.smithy",
              regex: /\\./
            },
            {
              defaultToken: "string.quoted.double.smithy"
            }
          ]
        }
      ],
      "#dquote": [
        {
          token: "punctuation.definition.string.begin.smithy",
          regex: /"/,
          push: [
            {
              token: "punctuation.definition.string.end.smithy",
              regex: /"/,
              next: "pop"
            },
            {
              token: "constant.character.escape.smithy",
              regex: /\\./
            },
            {
              defaultToken: "string.quoted.double.smithy"
            }
          ]
        }
      ],
      "#squote": [
        {
          token: "punctuation.definition.string.begin.smithy",
          regex: /'/,
          push: [
            {
              token: "punctuation.definition.string.end.smithy",
              regex: /'/,
              next: "pop"
            },
            {
              token: "constant.character.escape.smithy",
              regex: /\\./
            },
            {
              defaultToken: "string.quoted.single.smithy"
            }
          ]
        }
      ],
      "#identifier": [
        {
          token: "storage.type.smithy",
          regex: /[A-Z-a-z_][A-Z-a-z0-9_\.#$-]*/
        }
      ]
    };
    this.normalizeRules();
  };
  SmithyHighlightRules.metaData = {
    name: "Smithy",
    fileTypes: ["smithy"],
    scopeName: "source.smithy",
    foldingStartMarker: "(\\{|\\[)\\s*",
    foldingStopMarker: "\\s*(\\}|\\])"
  };
  oop.inherits(SmithyHighlightRules, TextHighlightRules);
  exports.SmithyHighlightRules = SmithyHighlightRules;
});

define("ace/mode/matching_brace_outdent", [
  "require",
  "exports",
  "module",
  "ace/range"
], function (require, exports, module) {
  "use strict";
  var Range = require("../range").Range;
  var MatchingBraceOutdent = function () {};
  (function () {
    this.checkOutdent = function (line, input) {
      if (!/^\s+$/.test(line)) return false;
      return /^\s*\}/.test(input);
    };
    this.autoOutdent = function (doc, row) {
      var line = doc.getLine(row);
      var match = line.match(/^(\s*\})/);
      if (!match) return 0;
      var column = match[1].length;
      var openBracePos = doc.findMatchingBracket({ row: row, column: column });
      if (!openBracePos || openBracePos.row == row) return 0;
      var indent = this.$getIndent(doc.getLine(openBracePos.row));
      doc.replace(new Range(row, 0, row, column - 1), indent);
    };
    this.$getIndent = function (line) {
      return line.match(/^\s*/)[0];
    };
  }).call(MatchingBraceOutdent.prototype);
  exports.MatchingBraceOutdent = MatchingBraceOutdent;
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

define("ace/mode/smithy", [
  "require",
  "exports",
  "module",
  "ace/lib/oop",
  "ace/mode/text",
  "ace/mode/smithy_highlight_rules",
  "ace/mode/matching_brace_outdent",
  "ace/mode/folding/cstyle"
], function (require, exports, module) {
  "use strict";
  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var SmithyHighlightRules =
    require("./smithy_highlight_rules").SmithyHighlightRules;
  var MatchingBraceOutdent =
    require("./matching_brace_outdent").MatchingBraceOutdent;
  var CStyleFoldMode = require("./folding/cstyle").FoldMode;
  var Mode = function () {
    this.HighlightRules = SmithyHighlightRules;
    this.$outdent = new MatchingBraceOutdent();
    this.$behaviour = this.$defaultBehaviour;
    this.foldingRules = new CStyleFoldMode();
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.lineCommentStart = "//";
    this.$quotes = { '"': '"' };
    this.checkOutdent = function (state, line, input) {
      return this.$outdent.checkOutdent(line, input);
    };
    this.autoOutdent = function (state, doc, row) {
      this.$outdent.autoOutdent(doc, row);
    };
    this.$id = "ace/mode/smithy";
  }).call(Mode.prototype);
  exports.Mode = Mode;
});
(function () {
  window.require(["ace/mode/smithy"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
