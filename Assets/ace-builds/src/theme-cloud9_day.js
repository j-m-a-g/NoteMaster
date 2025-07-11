define("ace/theme/cloud9_day-css", ["require", "exports", "module"], function (
  require,
  exports,
  module
) {
  module.exports =
    '.ace-cloud9-day .ace_gutter {\n    background: #ECECEC;\n    color: #333;\n}\n\n.ace-cloud9-day .ace_print-margin {\n    width: 1px;\n    background: #e8e8e8;\n}\n\n.ace-cloud9-day .ace_fold {\n    background-color: #6B72E6;\n}\n\n.ace-cloud9-day {\n    background-color: #FBFBFB;\n    color: black;\n}\n\n.ace-cloud9-day .ace_cursor {\n    color: black;\n}\n\n.ace-cloud9-day .ace_invisible {\n    color: rgb(191, 191, 191);\n}\n\n.ace-cloud9-day .ace_storage,\n.ace-cloud9-day .ace_keyword {\n    color: rgb(24, 122, 234);\n}\n\n.ace-cloud9-day .ace_constant {\n    color: rgb(197, 6, 11);\n}\n\n.ace-cloud9-day .ace_constant.ace_buildin {\n    color: rgb(88, 72, 246);\n}\n\n.ace-cloud9-day .ace_constant.ace_language {\n    color: rgb(88, 92, 246);\n}\n\n.ace-cloud9-day .ace_constant.ace_library {\n    color: rgb(6, 150, 14);\n}\n\n.ace-cloud9-day .ace_invalid {\n    background-color: rgba(255, 0, 0, 0.1);\n    color: red;\n}\n\n.ace-cloud9-day .ace_support.ace_function {\n    color: rgb(60, 76, 114);\n}\n\n.ace-cloud9-day .ace_support.ace_constant {\n    color: rgb(6, 150, 14);\n}\n\n.ace-cloud9-day .ace_support.ace_type,\n.ace-cloud9-day .ace_support.ace_class {\n    color: rgb(109, 121, 222);\n}\n\n.ace-cloud9-day .ace_keyword.ace_operator {\n    color: rgb(104, 118, 135);\n}\n\n.ace-cloud9-day .ace_string {\n    color: rgb(3, 106, 7);\n}\n\n.ace-cloud9-day .ace_comment {\n    color: rgb(76, 136, 107);\n}\n\n.ace-cloud9-day .ace_comment.ace_doc {\n    color: rgb(0, 102, 255);\n}\n\n.ace-cloud9-day .ace_comment.ace_doc.ace_tag {\n    color: rgb(128, 159, 191);\n}\n\n.ace-cloud9-day .ace_constant.ace_numeric {\n    color: rgb(0, 0, 205);\n}\n\n.ace-cloud9-day .ace_variable {\n    color: rgb(49, 132, 149);\n}\n\n.ace-cloud9-day .ace_xml-pe {\n    color: rgb(104, 104, 91);\n}\n\n.ace-cloud9-day .ace_entity.ace_name.ace_function {\n    color: #0000A2;\n}\n\n\n.ace-cloud9-day .ace_heading {\n    color: rgb(12, 7, 255);\n}\n\n.ace-cloud9-day .ace_list {\n    color: rgb(185, 6, 144);\n}\n\n.ace-cloud9-day .ace_meta.ace_tag {\n    color: rgb(0, 22, 142);\n}\n\n.ace-cloud9-day .ace_string.ace_regex {\n    color: rgb(255, 0, 0)\n}\n\n.ace-cloud9-day .ace_marker-layer .ace_selection {\n    background: rgb(181, 213, 255);\n}\n\n.ace-cloud9-day.ace_multiselect .ace_selection.ace_start {\n    box-shadow: 0 0 3px 0px white;\n}\n\n.ace-cloud9-day .ace_marker-layer .ace_step {\n    background: rgb(247, 237, 137);\n}\n\n.ace-cloud9-day .ace_marker-layer .ace_stack {\n    background: #BAE0A0;\n}\n\n.ace-cloud9-day .ace_marker-layer .ace_bracket {\n    margin: -1px 0 0 -1px;\n    border: 1px solid rgb(192, 192, 192);\n}\n\n.ace-cloud9-day .ace_marker-layer .ace_active-line {\n    background: rgba(0, 0, 0, 0.07);\n}\n\n.ace-cloud9-day .ace_gutter-active-line {\n    background-color: #E5E5E5;\n}\n\n.ace-cloud9-day .ace_marker-layer .ace_selected-word {\n    background: rgb(250, 250, 255);\n    border: 1px solid rgb(200, 200, 250);\n}\n\n.ace-cloud9-day .ace_indent-guide {\n    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;\n}\n\n.ace-cloud9-day .ace_indent-guide-active {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;\n} \n';
});

define("ace/theme/cloud9_day", [
  "require",
  "exports",
  "module",
  "ace/theme/cloud9_day-css",
  "ace/lib/dom"
], function (require, exports, module) {
  "use strict";
  exports.isDark = false;
  exports.cssClass = "ace-cloud9-day";
  exports.cssText = require("./cloud9_day-css");
  var dom = require("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass);
});
(function () {
  window.require(["ace/theme/cloud9_day"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
