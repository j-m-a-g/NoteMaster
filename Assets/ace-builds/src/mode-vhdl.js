define("ace/mode/vhdl_highlight_rules", [
  "require",
  "exports",
  "module",
  "ace/lib/oop",
  "ace/mode/text_highlight_rules"
], function (require, exports, module) {
  "use strict";
  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var VHDLHighlightRules = function () {
    var keywords =
      "access|after|alias|all|architecture|assert|attribute|" +
      "begin|block|body|buffer|bus|case|component|configuration|" +
      "context|disconnect|downto|else|elsif|end|entity|exit|" +
      "file|for|force|function|generate|generic|group|guarded|" +
      "if|impure|in|inertial|inout|is|label|library|linkage|" +
      "literal|loop|map|new|next|of|on|or|open|others|out|" +
      "package|parameter|port|postponed|procedure|process|" +
      "protected|pure|range|record|register|reject|release|" +
      "report|return|select|severity|shared|signal|subtype|then|" +
      "to|transport|type|unaffected|units|until|use|variable|" +
      "wait|when|while|with";
    var storageType =
      "bit|bit_vector|boolean|character|integer|line|natural|" +
      "positive|real|register|signed|std_logic|" +
      "std_logic_vector|string||text|time|unsigned";
    var storageModifiers = "array|constant";
    var keywordOperators =
      "abs|and|mod|nand|nor|not|rem|rol|ror|sla|sll|sra" + "srl|xnor|xor";
    var builtinConstants = "true|false|null";
    var keywordMapper = this.createKeywordMapper(
      {
        "keyword.operator": keywordOperators,
        keyword: keywords,
        "constant.language": builtinConstants,
        "storage.modifier": storageModifiers,
        "storage.type": storageType
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
          token: "string", // " string
          regex: '".*?"'
        },
        {
          token: "string", // ' string
          regex: "'.*?'"
        },
        {
          token: "constant.numeric", // float
          regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
        },
        {
          token: "keyword", // pre-compiler directives
          regex: "\\s*(?:library|package|use)\\b"
        },
        {
          token: keywordMapper,
          regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
        },
        {
          token: "keyword.operator",
          regex: "&|\\*|\\+|\\-|\\/|<|=|>|\\||=>|\\*\\*|:=|\\/=|>=|<=|<>"
        },
        {
          token: "punctuation.operator",
          regex: "\\'|\\:|\\,|\\;|\\."
        },
        {
          token: "paren.lparen",
          regex: "[[(]"
        },
        {
          token: "paren.rparen",
          regex: "[\\])]"
        },
        {
          token: "text",
          regex: "\\s+"
        }
      ]
    };
  };
  oop.inherits(VHDLHighlightRules, TextHighlightRules);
  exports.VHDLHighlightRules = VHDLHighlightRules;
});

define("ace/mode/vhdl", [
  "require",
  "exports",
  "module",
  "ace/lib/oop",
  "ace/mode/text",
  "ace/mode/vhdl_highlight_rules"
], function (require, exports, module) {
  "use strict";
  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var VHDLHighlightRules = require("./vhdl_highlight_rules").VHDLHighlightRules;
  var Mode = function () {
    this.HighlightRules = VHDLHighlightRules;
    this.$behaviour = this.$defaultBehaviour;
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.lineCommentStart = "--";
    this.$id = "ace/mode/vhdl";
  }).call(Mode.prototype);
  exports.Mode = Mode;
});
(function () {
  window.require(["ace/mode/vhdl"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
