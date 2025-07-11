define("ace/theme/terminal-css", ["require", "exports", "module"], function (
  require,
  exports,
  module
) {
  module.exports =
    ".ace-terminal-theme .ace_gutter {\n  background: #1a0005;\n  color: steelblue\n}\n\n.ace-terminal-theme .ace_print-margin {\n  width: 1px;\n  background: #1a1a1a\n}\n\n.ace-terminal-theme {\n  background-color: black;\n  color: #DEDEDE\n}\n\n.ace-terminal-theme .ace_cursor {\n  color: #9F9F9F\n}\n\n.ace-terminal-theme .ace_marker-layer .ace_selection {\n  background: #424242\n}\n\n.ace-terminal-theme.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px black;\n}\n\n.ace-terminal-theme .ace_marker-layer .ace_step {\n  background: rgb(0, 0, 0)\n}\n\n.ace-terminal-theme .ace_marker-layer .ace_bracket {\n  background: #090;\n}\n\n.ace-terminal-theme .ace_marker-layer .ace_bracket-start {\n  background: #090;\n}\n\n.ace-terminal-theme .ace_marker-layer .ace_bracket-unmatched {\n  margin: -1px 0 0 -1px;\n  border: 1px solid #900\n}\n\n.ace-terminal-theme .ace_marker-layer .ace_active-line {\n  background: #2A2A2A\n}\n\n.ace-terminal-theme .ace_gutter-active-line {\n  background-color: #2A112A\n}\n\n.ace-terminal-theme .ace_marker-layer .ace_selected-word {\n  border: 1px solid #424242\n}\n\n.ace-terminal-theme .ace_invisible {\n  color: #343434\n}\n\n.ace-terminal-theme .ace_keyword,\n.ace-terminal-theme .ace_meta,\n.ace-terminal-theme .ace_storage,\n.ace-terminal-theme .ace_storage.ace_type,\n.ace-terminal-theme .ace_support.ace_type {\n  color: tomato\n}\n\n.ace-terminal-theme .ace_keyword.ace_operator {\n  color: deeppink\n}\n\n.ace-terminal-theme .ace_constant.ace_character,\n.ace-terminal-theme .ace_constant.ace_language,\n.ace-terminal-theme .ace_constant.ace_numeric,\n.ace-terminal-theme .ace_keyword.ace_other.ace_unit,\n.ace-terminal-theme .ace_support.ace_constant,\n.ace-terminal-theme .ace_variable.ace_parameter {\n  color: #E78C45\n}\n\n.ace-terminal-theme .ace_constant.ace_other {\n  color: gold\n}\n\n.ace-terminal-theme .ace_invalid {\n  color: yellow;\n  background-color: red\n}\n\n.ace-terminal-theme .ace_invalid.ace_deprecated {\n  color: #CED2CF;\n  background-color: #B798BF\n}\n\n.ace-terminal-theme .ace_fold {\n  background-color: #7AA6DA;\n  border-color: #DEDEDE\n}\n\n.ace-terminal-theme .ace_entity.ace_name.ace_function,\n.ace-terminal-theme .ace_support.ace_function,\n.ace-terminal-theme .ace_variable {\n  color: #7AA6DA\n}\n\n.ace-terminal-theme .ace_support.ace_class,\n.ace-terminal-theme .ace_support.ace_type {\n  color: #E7C547\n}\n\n.ace-terminal-theme .ace_heading,\n.ace-terminal-theme .ace_string {\n  color: #B9CA4A\n}\n\n.ace-terminal-theme .ace_entity.ace_name.ace_tag,\n.ace-terminal-theme .ace_entity.ace_other.ace_attribute-name,\n.ace-terminal-theme .ace_meta.ace_tag,\n.ace-terminal-theme .ace_string.ace_regexp,\n.ace-terminal-theme .ace_variable {\n  color: #D54E53\n}\n\n.ace-terminal-theme .ace_comment {\n  color: orangered\n}\n\n.ace-terminal-theme .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYLBWV/8PAAK4AYnhiq+xAAAAAElFTkSuQmCC) right repeat-y;\n}\n\n.ace-terminal-theme .ace_indent-guide-active {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\n}\n";
});

define("ace/theme/terminal", [
  "require",
  "exports",
  "module",
  "ace/theme/terminal-css",
  "ace/lib/dom"
], function (require, exports, module) {
  exports.isDark = true;
  exports.cssClass = "ace-terminal-theme";
  exports.cssText = require("./terminal-css");
  var dom = require("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass, false);
});
(function () {
  window.require(["ace/theme/terminal"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
