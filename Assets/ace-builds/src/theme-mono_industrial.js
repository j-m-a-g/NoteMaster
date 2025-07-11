define("ace/theme/mono_industrial-css", [
  "require",
  "exports",
  "module"
], function (require, exports, module) {
  module.exports =
    ".ace-mono-industrial .ace_gutter {\n  background: #1d2521;\n  color: #C5C9C9\n}\n\n.ace-mono-industrial .ace_print-margin {\n  width: 1px;\n  background: #555651\n}\n\n.ace-mono-industrial {\n  background-color: #222C28;\n  color: #FFFFFF\n}\n\n.ace-mono-industrial .ace_cursor {\n  color: #FFFFFF\n}\n\n.ace-mono-industrial .ace_marker-layer .ace_selection {\n  background: rgba(145, 153, 148, 0.40)\n}\n\n.ace-mono-industrial.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #222C28;\n}\n\n.ace-mono-industrial .ace_marker-layer .ace_step {\n  background: rgb(102, 82, 0)\n}\n\n.ace-mono-industrial .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgba(102, 108, 104, 0.50)\n}\n\n.ace-mono-industrial .ace_marker-layer .ace_active-line {\n  background: rgba(12, 13, 12, 0.25)\n}\n\n.ace-mono-industrial .ace_gutter-active-line {\n  background-color: rgba(12, 13, 12, 0.25)\n}\n\n.ace-mono-industrial .ace_marker-layer .ace_selected-word {\n  border: 1px solid rgba(145, 153, 148, 0.40)\n}\n\n.ace-mono-industrial .ace_invisible {\n  color: rgba(102, 108, 104, 0.50)\n}\n\n.ace-mono-industrial .ace_string {\n  background-color: #151C19;\n  color: #FFFFFF\n}\n\n.ace-mono-industrial .ace_keyword,\n.ace-mono-industrial .ace_meta {\n  color: #A39E64\n}\n\n.ace-mono-industrial .ace_constant,\n.ace-mono-industrial .ace_constant.ace_character,\n.ace-mono-industrial .ace_constant.ace_character.ace_escape,\n.ace-mono-industrial .ace_constant.ace_numeric,\n.ace-mono-industrial .ace_constant.ace_other {\n  color: #E98800\n}\n\n.ace-mono-industrial .ace_entity.ace_name.ace_function,\n.ace-mono-industrial .ace_keyword.ace_operator,\n.ace-mono-industrial .ace_variable {\n  color: #A8B3AB\n}\n\n.ace-mono-industrial .ace_invalid {\n  color: #FFFFFF;\n  background-color: rgba(153, 0, 0, 0.68)\n}\n\n.ace-mono-industrial .ace_support.ace_constant {\n  color: #C87500\n}\n\n.ace-mono-industrial .ace_fold {\n  background-color: #A8B3AB;\n  border-color: #FFFFFF\n}\n\n.ace-mono-industrial .ace_support.ace_function {\n  color: #588E60\n}\n\n.ace-mono-industrial .ace_entity.ace_name,\n.ace-mono-industrial .ace_support.ace_class,\n.ace-mono-industrial .ace_support.ace_type {\n  color: #5778B6\n}\n\n.ace-mono-industrial .ace_storage {\n  color: #C23B00\n}\n\n.ace-mono-industrial .ace_variable.ace_language,\n.ace-mono-industrial .ace_variable.ace_parameter {\n  color: #648BD2\n}\n\n.ace-mono-industrial .ace_comment {\n  color: #666C68;\n  background-color: #151C19\n}\n\n.ace-mono-industrial .ace_entity.ace_other.ace_attribute-name {\n  color: #909993\n}\n\n.ace-mono-industrial .ace_entity.ace_name.ace_tag {\n  color: #A65EFF\n}\n\n.ace-mono-industrial .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNQ1NbwZfALD/4PAAlTArlEC4r/AAAAAElFTkSuQmCC) right repeat-y\n}\n\n.ace-mono-industrial .ace_indent-guide-active {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\n}\n";
});

define("ace/theme/mono_industrial", [
  "require",
  "exports",
  "module",
  "ace/theme/mono_industrial-css",
  "ace/lib/dom"
], function (require, exports, module) {
  exports.isDark = true;
  exports.cssClass = "ace-mono-industrial";
  exports.cssText = require("./mono_industrial-css");
  var dom = require("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass, false);
});
(function () {
  window.require(["ace/theme/mono_industrial"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
