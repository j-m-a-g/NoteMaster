define("ace/mode/csv_highlight_rules", [
  "require",
  "exports",
  "module",
  "ace/lib/oop",
  "ace/mode/text_highlight_rules"
], function (require, exports, module) {
  "use strict";
  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var CsvHighlightRules = function () {
    TextHighlightRules.call(this);
  };
  oop.inherits(CsvHighlightRules, TextHighlightRules);
  exports.CsvHighlightRules = CsvHighlightRules;
});

define("ace/mode/csv", [
  "require",
  "exports",
  "module",
  "ace/lib/oop",
  "ace/mode/text",
  "ace/lib/lang",
  "ace/mode/csv_highlight_rules"
], function (require, exports, module) {
  "use strict";
  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var escapeRegExp = require("../lib/lang").escapeRegExp;
  var CsvHighlightRules = require("./csv_highlight_rules").CsvHighlightRules;
  var Mode = function (options) {
    this.HighlightRules = CsvHighlightRules;
    if (!options) options = {};
    var separatorRegex = [options.splitter || ",", options.quote || '"']
      .map(escapeRegExp)
      .join("|");
    this.$tokenizer = {
      getLineTokens: function (line, state, row) {
        return tokenizeCsv(line, state, this.options);
      },
      options: {
        quotes: options.quote || '"',
        separatorRegex: new RegExp("(" + separatorRegex + ")"),
        spliter: options.splitter || ","
      },
      states: {}
    };
    this.$highlightRules = new this.HighlightRules();
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.getTokenizer = function () {
      return this.$tokenizer;
    };
    this.$id = "ace/mode/csv";
  }).call(Mode.prototype);
  exports.Mode = Mode;
  var classNames = [
    "keyword",
    "text",
    "string",
    "string.regex",
    "variable",
    "constant.numeric"
  ];

  function tokenizeCsv(line, state, options) {
    var result = [];
    var parts = line.split(options.separatorRegex);
    var spliter = options.spliter;
    var quote = options.quote || '"';
    var stateParts = (state || "start").split("-");
    var column = parseInt(stateParts[1]) || 0;
    var inString = stateParts[0] == "string";
    var atColumnStart = !inString;
    for (var i = 0; i < parts.length; i++) {
      var value = parts[i];
      if (value) {
        var isSeparator = false;
        if (value == spliter && !inString) {
          column++;
          atColumnStart = true;
          isSeparator = true;
        } else if (value == quote) {
          if (atColumnStart) {
            inString = true;
            atColumnStart = false;
          } else if (inString) {
            if (parts[i + 1] == "" && parts[i + 2] == quote) {
              value = quote + quote;
              i += 2;
            } else {
              inString = false;
            }
          }
        } else {
          atColumnStart = false;
        }
        result.push({
          value: value,
          type:
            classNames[column % classNames.length] +
            ".csv_" +
            column +
            (isSeparator ? ".csv_separator" : "")
        });
      }
    }
    return { tokens: result, state: inString ? "string-" + column : "start" };
  }
});

define("ace/mode/tsv_highlight_rules", [
  "require",
  "exports",
  "module",
  "ace/lib/oop",
  "ace/mode/text_highlight_rules"
], function (require, exports, module) {
  "use strict";
  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var TsvHighlightRules = function () {
    TextHighlightRules.call(this);
  };
  oop.inherits(TsvHighlightRules, TextHighlightRules);
  exports.TsvHighlightRules = TsvHighlightRules;
});

define("ace/mode/tsv", [
  "require",
  "exports",
  "module",
  "ace/mode/csv",
  "ace/mode/tsv_highlight_rules"
], function (require, exports, module) {
  "use strict";
  var CSVMode = require("./csv").Mode;
  var TsvHighlightRules = require("./tsv_highlight_rules").TsvHighlightRules;
  var Mode = function (options) {
    var mode = new CSVMode({
      splitter: "\t",
      quote: '"'
    });
    mode.HighlightRules = TsvHighlightRules;
    mode.$id = "ace/mode/tsv";
    return mode;
  };
  exports.Mode = Mode;
});
(function () {
  window.require(["ace/mode/tsv"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
