define("ace/mode/doc_comment_highlight_rules", [
  "require",
  "exports",
  "module",
  "ace/lib/oop",
  "ace/mode/text_highlight_rules"
], function (require, exports, module) {
  "use strict";
  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var DocCommentHighlightRules = function () {
    this.$rules = {
      start: [
        {
          token: "comment.doc.tag",
          regex: "@\\w+(?=\\s|$)"
        },
        DocCommentHighlightRules.getTagRule(),
        {
          defaultToken: "comment.doc.body",
          caseInsensitive: true
        }
      ]
    };
  };
  oop.inherits(DocCommentHighlightRules, TextHighlightRules);
  DocCommentHighlightRules.getTagRule = function (start) {
    return {
      token: "comment.doc.tag.storage.type",
      regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"
    };
  };
  DocCommentHighlightRules.getStartRule = function (start) {
    return {
      token: "comment.doc", // doc comment
      regex: /\/\*\*(?!\/)/,
      next: start
    };
  };
  DocCommentHighlightRules.getEndRule = function (start) {
    return {
      token: "comment.doc", // closing comment
      regex: "\\*\\/",
      next: start
    };
  };
  exports.DocCommentHighlightRules = DocCommentHighlightRules;
});

define("ace/mode/edifact_highlight_rules", [
  "require",
  "exports",
  "module",
  "ace/lib/oop",
  "ace/mode/doc_comment_highlight_rules",
  "ace/mode/text_highlight_rules"
], function (require, exports, module) {
  "use strict";
  var oop = require("../lib/oop");
  var DocCommentHighlightRules =
    require("./doc_comment_highlight_rules").DocCommentHighlightRules;
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
  var EdifactHighlightRules = function () {
    var header = "UNH";
    var segment =
      "ADR|AGR|AJT|ALC|ALI|APP|APR|ARD|ARR|ASI|ATT|AUT|" +
      "BAS|BGM|BII|BUS|" +
      "CAV|CCD|CCI|CDI|CDS|CDV|CED|CIN|CLA|CLI|CMP|CNI|CNT|COD|COM|COT|CPI|CPS|CPT|CST|CTA|CUX|" +
      "DAM|DFN|DGS|DII|DIM|DLI|DLM|DMS|DOC|DRD|DSG|DSI|DTM|" +
      "EDT|EFI|ELM|ELU|ELV|EMP|EQA|EQD|EQN|ERC|ERP|EVE|FCA|FII|FNS|FNT|FOR|FSQ|FTX|" +
      "GDS|GEI|GID|GIN|GIR|GOR|GPO|GRU|HAN|HYN|ICD|IDE|IFD|IHC|IMD|IND|INP|INV|IRQ|" +
      "LAN|LIN|LOC|MEA|MEM|MKS|MOA|MSG|MTD|NAD|NAT|" +
      "PAC|PAI|PAS|PCC|PCD|PCI|PDI|PER|PGI|PIA|PNA|POC|PRC|PRI|PRV|PSD|PTY|PYT|" +
      "QRS|QTY|QUA|QVR|" +
      "RCS|REL|RFF|RJL|RNG|ROD|RSL|RTE|" +
      "SAL|SCC|SCD|SEG|SEL|SEQ|SFI|SGP|SGU|SPR|SPS|STA|STC|STG|STS|" +
      "TAX|TCC|TDT|TEM|TMD|TMP|TOD|TPL|TRU|TSR|" +
      "UNB|UNZ|UNT|UGH|UGT|UNS|" +
      "VLI";
    var header = "UNH";
    var buildinConstants = "null|Infinity|NaN|undefined";
    var langClasses = "";
    var keywords = "BY|SE|ON|INV|JP|UNOA";
    var keywordMapper = this.createKeywordMapper(
      {
        "variable.language": "this",
        keyword: keywords,
        "entity.name.segment": segment,
        "entity.name.header": header,
        "constant.language": buildinConstants,
        "support.function": langClasses
      },
      "identifier"
    );
    this.$rules = {
      start: [
        {
          token: "punctuation.operator",
          regex: "\\+.\\+"
        },
        {
          token: "constant.language.boolean",
          regex: "(?:true|false)\\b"
        },
        {
          token: keywordMapper,
          regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
        },
        {
          token: "keyword.operator",
          regex: "\\+"
        },
        {
          token: "punctuation.operator",
          regex: "\\:|'"
        },
        {
          token: "identifier",
          regex: "\\:D\\:"
        }
      ]
    };
    this.embedRules(DocCommentHighlightRules, "doc-", [
      DocCommentHighlightRules.getEndRule("start")
    ]);
  };
  EdifactHighlightRules.metaData = {
    fileTypes: ["edi"],
    keyEquivalent: "^~E",
    name: "Edifact",
    scopeName: "source.edifact"
  };
  oop.inherits(EdifactHighlightRules, TextHighlightRules);
  exports.EdifactHighlightRules = EdifactHighlightRules;
});

define("ace/mode/edifact", [
  "require",
  "exports",
  "module",
  "ace/lib/oop",
  "ace/mode/text",
  "ace/mode/edifact_highlight_rules"
], function (require, exports, module) {
  "use strict";
  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var EdifactHighlightRules =
    require("./edifact_highlight_rules").EdifactHighlightRules;
  var Mode = function () {
    this.HighlightRules = EdifactHighlightRules;
    this.$behaviour = this.$defaultBehaviour;
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.$id = "ace/mode/edifact";
    this.snippetFileId = "ace/snippets/edifact";
  }).call(Mode.prototype);
  exports.Mode = Mode;
});
(function () {
  window.require(["ace/mode/edifact"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
