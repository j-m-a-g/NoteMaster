define("ace/theme/github_dark-css", ["require", "exports", "module"], function (
  require,
  exports,
  module
) {
  module.exports =
    ".ace-github-dark .ace_gutter {\n  background: #24292e;\n  color: #7388b5\n}\n\n.ace-github-dark .ace_print-margin {\n  width: 1px;\n  background: #00204b\n}\n\n.ace-github-dark {\n  background-color: #24292e;\n  color: #FFFFFF\n}\n\n.ace-github-dark .ace_constant.ace_other,\n.ace-github-dark .ace_cursor {\n  color: #FFFFFF\n}\n\n.ace-github-dark .ace_marker-layer .ace_selection {\n  background: #003F8E\n}\n\n.ace-github-dark.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #24292e;\n}\n\n.ace-github-dark .ace_marker-layer .ace_step {\n  background: rgb(127, 111, 19)\n}\n\n.ace-github-dark .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid #404F7D\n}\n\n.ace-github-dark .ace_marker-layer .ace_active-line {\n  background: #00346E\n}\n\n.ace-github-dark .ace_gutter-active-line {\n  background-color: #24292e\n}\n\n.ace-github-dark .ace_marker-layer .ace_selected-word {\n  border: 1px solid #003F8E\n}\n\n.ace-github-dark .ace_invisible {\n  color: #404F7D\n}\n\n.ace-github-dark .ace_keyword,\n.ace-github-dark .ace_meta,\n.ace-github-dark .ace_storage,\n.ace-github-dark .ace_storage.ace_type,\n.ace-github-dark .ace_support.ace_type {\n  color: #ff7b72\n}\n\n.ace-github-dark .ace_keyword.ace_operator {\n  color: #79c0ff\n}\n\n.ace-github-dark .ace_constant.ace_character,\n.ace-github-dark .ace_constant.ace_language,\n.ace-github-dark .ace_constant.ace_numeric,\n.ace-github-dark .ace_keyword.ace_other.ace_unit,\n.ace-github-dark .ace_support.ace_constant,\n.ace-github-dark .ace_variable.ace_parameter {\n  color: #FFC58F\n}\n\n.ace-github-dark .ace_invalid {\n  color: #FFFFFF;\n  background-color: #F99DA5\n}\n\n.ace-github-dark .ace_invalid.ace_deprecated {\n  color: #FFFFFF;\n  background-color: #ff7b72\n}\n\n.ace-github-dark .ace_fold {\n  background-color: #BBDAFF;\n  border-color: #FFFFFF\n}\n\n.ace-github-dark .ace_entity.ace_name.ace_function,\n.ace-github-dark .ace_support.ace_function,\n.ace-github-dark .ace_variable {\n  color: #BBDAFF\n}\n\n.ace-github-dark .ace_support.ace_class,\n.ace-github-dark .ace_support.ace_type {\n  color: #FFEEAD\n}\n\n.ace-github-dark .ace_heading,\n.ace-github-dark .ace_markup.ace_heading,\n.ace-github-dark .ace_string {\n  color: #9fcef6\n}\n\n.ace-github-dark .ace_entity.ace_name.ace_tag,\n.ace-github-dark .ace_entity.ace_other.ace_attribute-name,\n.ace-github-dark .ace_meta.ace_tag,\n.ace-github-dark .ace_string.ace_regexp,\n.ace-github-dark .ace_variable {\n  color: #FF9DA4\n}\n\n.ace-github-dark .ace_comment {\n  color: #7285B7\n}\n\n.ace-github-dark .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYJDzqfwPAANXAeNsiA+ZAAAAAElFTkSuQmCC) right repeat-y\n}\n\n.ace-github-dark .ace_indent-guide-active {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\n}\n\n.ace-github-dark .ace_constant.ace_buildin {\n  color: #0086B3;\n}\n\n.ace-github-dark .ace_variable.ace_language {\n  color: #ffffff;\n}\n  ";
});

define("ace/theme/github_dark", [
  "require",
  "exports",
  "module",
  "ace/theme/github_dark-css",
  "ace/lib/dom"
], function (require, exports, module) {
  exports.isDark = true;
  exports.cssClass = "ace-github-dark";
  exports.cssText = require("./github_dark-css");
  var dom = require("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass, false);
});
(function () {
  window.require(["ace/theme/github_dark"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
