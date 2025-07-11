define("ace/mode/yaml_highlight_rules", [
  "require",
  "exports",
  "module",
  "ace/lib/oop",
  "ace/mode/text_highlight_rules"
], function (require, exports, module) {
  "use strict";
  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var YamlHighlightRules = function () {
    this.$rules = {
      start: [
        {
          token: "comment",
          regex: "#.*$"
        },
        {
          token: "list.markup",
          regex: /^(?:-{3}|\.{3})\s*(?=#|$)/
        },
        {
          token: "list.markup",
          regex: /^\s*[\-?](?:$|\s)/
        },
        {
          token: "constant",
          regex: "!![\\w//]+"
        },
        {
          token: "constant.language",
          regex: "[&\\*][a-zA-Z0-9-_]+"
        },
        {
          token: ["meta.tag", "keyword"],
          regex: /^(\s*\w[^\s:]*?)(:(?=\s|$))/
        },
        {
          token: ["meta.tag", "keyword"],
          regex: /(\w[^\s:]*?)(\s*:(?=\s|$))/
        },
        {
          token: "keyword.operator",
          regex: "<<\\w*:\\w*"
        },
        {
          token: "keyword.operator",
          regex: "-\\s*(?=[{])"
        },
        {
          token: "string", // single line
          regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
        },
        {
          token: "string", // multi line string start
          regex: /[|>][-+\d]*(?:$|\s+(?:$|#))/,
          onMatch: function (val, state, stack, line) {
            line = line.replace(/ #.*/, "");
            var indent = /^ *((:\s*)?-(\s*[^|>])?)?/
              .exec(line)[0]
              .replace(/\S\s*$/, "").length;
            var indentationIndicator = parseInt(/\d+[\s+-]*$/.exec(line));
            if (indentationIndicator) {
              indent += indentationIndicator - 1;
              this.next = "mlString";
            } else {
              this.next = "mlStringPre";
            }
            if (!stack.length) {
              stack.push(this.next);
              stack.push(indent);
            } else {
              stack[0] = this.next;
              stack[1] = indent;
            }
            return this.token;
          },
          next: "mlString"
        },
        {
          token: "string", // single quoted string
          regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
        },
        {
          token: "constant.numeric", // float
          regex:
            /(\b|[+\-\.])[\d_]+(?:(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)(?=[^\d-\w]|$)$/
        },
        {
          token: "constant.numeric", // other number
          regex: /[+\-]?\.inf\b|NaN\b|0x[\dA-Fa-f_]+|0b[10_]+/
        },
        {
          token: "constant.language.boolean",
          regex: "\\b(?:true|false|TRUE|FALSE|True|False|yes|no)\\b"
        },
        {
          token: "paren.lparen",
          regex: "[[({]"
        },
        {
          token: "paren.rparen",
          regex: "[\\])}]"
        },
        {
          token: "text",
          regex: /[^\s,:\[\]\{\}]+/
        }
      ],
      mlStringPre: [
        {
          token: "indent",
          regex: /^ *$/
        },
        {
          token: "indent",
          regex: /^ */,
          onMatch: function (val, state, stack) {
            var curIndent = stack[1];
            if (curIndent >= val.length) {
              this.next = "start";
              stack.shift();
              stack.shift();
            } else {
              stack[1] = val.length - 1;
              this.next = stack[0] = "mlString";
            }
            return this.token;
          },
          next: "mlString"
        },
        {
          defaultToken: "string"
        }
      ],
      mlString: [
        {
          token: "indent",
          regex: /^ *$/
        },
        {
          token: "indent",
          regex: /^ */,
          onMatch: function (val, state, stack) {
            var curIndent = stack[1];
            if (curIndent >= val.length) {
              this.next = "start";
              stack.splice(0);
            } else {
              this.next = "mlString";
            }
            return this.token;
          },
          next: "mlString"
        },
        {
          token: "string",
          regex: ".+"
        }
      ]
    };
    this.normalizeRules();
  };
  oop.inherits(YamlHighlightRules, TextHighlightRules);
  exports.YamlHighlightRules = YamlHighlightRules;
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

define("ace/mode/folding/yaml", [
  "require",
  "exports",
  "module",
  "ace/lib/oop",
  "ace/mode/folding/coffee",
  "ace/range"
], function (require, exports, module) {
  "use strict";
  var oop = require("../../lib/oop");
  var CoffeeFoldMode = require("./coffee").FoldMode;
  var Range = require("../../range").Range;
  var FoldMode = (exports.FoldMode = function () {});
  oop.inherits(FoldMode, CoffeeFoldMode);
  (function () {
    this.getFoldWidgetRange = function (session, foldStyle, row) {
      var re = /\S/;
      var line = session.getLine(row);
      var startLevel = line.search(re);
      var isCommentFold = line[startLevel] === "#";
      var isDashFold = line[startLevel] === "-";
      if (startLevel == -1) return;
      var startColumn = line.length;
      var maxRow = session.getLength();
      var startRow = row;
      var endRow = row;
      if (isCommentFold) {
        var range = this.commentBlock(session, row);
        if (range) return range;
      } else if (isDashFold) {
        var range = this.indentationBlock(session, row);
        if (range) return range;
      } else {
        while (++row < maxRow) {
          var line = session.getLine(row);
          var level = line.search(re);
          if (level == -1) continue;
          if (level <= startLevel && line[startLevel] !== "-") {
            var token = session.getTokenAt(row, 0);
            if (!token || token.type !== "string") break;
          }
          endRow = row;
        }
      }
      if (endRow > startRow) {
        var endColumn = session.getLine(endRow).length;
        return new Range(startRow, startColumn, endRow, endColumn);
      }
    };
    this.getFoldWidget = function (session, foldStyle, row) {
      var line = session.getLine(row);
      var indent = line.search(/\S/);
      var next = session.getLine(row + 1);
      var prev = session.getLine(row - 1);
      var prevIndent = prev.search(/\S/);
      var nextIndent = next.search(/\S/);
      var lineStartsWithDash = line[indent] === "-";
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
      if (prevIndent != -1 && prevIndent < indent) {
        session.foldWidgets[row - 1] = "start";
      } else if (
        prevIndent != -1 &&
        prevIndent == indent &&
        lineStartsWithDash
      ) {
        session.foldWidgets[row - 1] = "start";
      } else {
        session.foldWidgets[row - 1] = "";
      }
      if (indent < nextIndent) return "start";
      else return "";
    };
  }).call(FoldMode.prototype);
});

define("ace/mode/yaml", [
  "require",
  "exports",
  "module",
  "ace/lib/oop",
  "ace/mode/text",
  "ace/mode/yaml_highlight_rules",
  "ace/mode/matching_brace_outdent",
  "ace/mode/folding/yaml",
  "ace/worker/worker_client"
], function (require, exports, module) {
  "use strict";
  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var YamlHighlightRules = require("./yaml_highlight_rules").YamlHighlightRules;
  var MatchingBraceOutdent =
    require("./matching_brace_outdent").MatchingBraceOutdent;
  var FoldMode = require("./folding/yaml").FoldMode;
  var WorkerClient = require("../worker/worker_client").WorkerClient;
  var Mode = function () {
    this.HighlightRules = YamlHighlightRules;
    this.$outdent = new MatchingBraceOutdent();
    this.foldingRules = new FoldMode();
    this.$behaviour = this.$defaultBehaviour;
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.lineCommentStart = ["#"];
    this.getNextLineIndent = function (state, line, tab) {
      var indent = this.$getIndent(line);
      if (state == "start") {
        var match = line.match(/^.*[\{\(\[]\s*$/);
        if (match) {
          indent += tab;
        }
      }
      return indent;
    };
    this.checkOutdent = function (state, line, input) {
      return this.$outdent.checkOutdent(line, input);
    };
    this.autoOutdent = function (state, doc, row) {
      this.$outdent.autoOutdent(doc, row);
    };
    this.createWorker = function (session) {
      var worker = new WorkerClient(
        ["ace"],
        "ace/mode/yaml_worker",
        "YamlWorker"
      );
      worker.attachToDocument(session.getDocument());
      worker.on("annotate", function (results) {
        session.setAnnotations(results.data);
      });
      worker.on("terminate", function () {
        session.clearAnnotations();
      });
      return worker;
    };
    this.$id = "ace/mode/yaml";
  }).call(Mode.prototype);
  exports.Mode = Mode;
});
(function () {
  window.require(["ace/mode/yaml"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
