define("ace/theme/pastel_on_dark-css", [
  "require",
  "exports",
  "module"
], function (require, exports, module) {
  module.exports =
    ".ace-pastel-on-dark .ace_gutter {\n  background: #353030;\n  color: #8F938F\n}\n\n.ace-pastel-on-dark .ace_print-margin {\n  width: 1px;\n  background: #353030\n}\n\n.ace-pastel-on-dark {\n  background-color: #2C2828;\n  color: #8F938F\n}\n\n.ace-pastel-on-dark .ace_cursor {\n  color: #A7A7A7\n}\n\n.ace-pastel-on-dark .ace_marker-layer .ace_selection {\n  background: rgba(221, 240, 255, 0.20)\n}\n\n.ace-pastel-on-dark.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #2C2828;\n}\n\n.ace-pastel-on-dark .ace_marker-layer .ace_step {\n  background: rgb(102, 82, 0)\n}\n\n.ace-pastel-on-dark .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgba(255, 255, 255, 0.25)\n}\n\n.ace-pastel-on-dark .ace_marker-layer .ace_active-line {\n  background: rgba(255, 255, 255, 0.031)\n}\n\n.ace-pastel-on-dark .ace_gutter-active-line {\n  background-color: rgba(255, 255, 255, 0.031)\n}\n\n.ace-pastel-on-dark .ace_marker-layer .ace_selected-word {\n  border: 1px solid rgba(221, 240, 255, 0.20)\n}\n\n.ace-pastel-on-dark .ace_invisible {\n  color: rgba(255, 255, 255, 0.25)\n}\n\n.ace-pastel-on-dark .ace_keyword,\n.ace-pastel-on-dark .ace_meta {\n  color: #757aD8\n}\n\n.ace-pastel-on-dark .ace_constant,\n.ace-pastel-on-dark .ace_constant.ace_character,\n.ace-pastel-on-dark .ace_constant.ace_character.ace_escape,\n.ace-pastel-on-dark .ace_constant.ace_other {\n  color: #4FB7C5\n}\n\n.ace-pastel-on-dark .ace_keyword.ace_operator {\n  color: #797878\n}\n\n.ace-pastel-on-dark .ace_constant.ace_character {\n  color: #AFA472\n}\n\n.ace-pastel-on-dark .ace_constant.ace_language {\n  color: #DE8E30\n}\n\n.ace-pastel-on-dark .ace_constant.ace_numeric {\n  color: #CCCCCC\n}\n\n.ace-pastel-on-dark .ace_invalid,\n.ace-pastel-on-dark .ace_invalid.ace_illegal {\n  color: #F8F8F8;\n  background-color: rgba(86, 45, 86, 0.75)\n}\n\n.ace-pastel-on-dark .ace_invalid.ace_deprecated {\n  text-decoration: underline;\n  font-style: italic;\n  color: #D2A8A1\n}\n\n.ace-pastel-on-dark .ace_fold {\n  background-color: #757aD8;\n  border-color: #8F938F\n}\n\n.ace-pastel-on-dark .ace_support.ace_function {\n  color: #AEB2F8\n}\n\n.ace-pastel-on-dark .ace_string {\n  color: #66A968\n}\n\n.ace-pastel-on-dark .ace_string.ace_regexp {\n  color: #E9C062\n}\n\n.ace-pastel-on-dark .ace_comment {\n  color: #A6C6FF\n}\n\n.ace-pastel-on-dark .ace_variable {\n  color: #BEBF55\n}\n\n.ace-pastel-on-dark .ace_variable.ace_language {\n  color: #C1C144\n}\n\n.ace-pastel-on-dark .ace_xml-pe {\n  color: #494949\n}\n\n.ace-pastel-on-dark .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYIiPj/8PAARgAh2NTMh8AAAAAElFTkSuQmCC) right repeat-y\n}\n\n.ace-pastel-on-dark .ace_indent-guide-active {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\n}\n";
});

define("ace/theme/pastel_on_dark", [
  "require",
  "exports",
  "module",
  "ace/theme/pastel_on_dark-css",
  "ace/lib/dom"
], function (require, exports, module) {
  exports.isDark = true;
  exports.cssClass = "ace-pastel-on-dark";
  exports.cssText = require("./pastel_on_dark-css");
  var dom = require("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass, false);
});
(function () {
  window.require(["ace/theme/pastel_on_dark"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
