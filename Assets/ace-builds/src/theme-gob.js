define("ace/theme/gob-css", ["require", "exports", "module"], function (
  require,
  exports,
  module
) {
  module.exports =
    ".ace-gob .ace_gutter {\n  background: #0B1818;\n  color: #03EE03\n}\n\n.ace-gob .ace_print-margin {\n  width: 1px;\n  background: #131313\n}\n\n.ace-gob {\n  background-color: #0B0B0B;\n  color: #00FF00\n}\n\n.ace-gob .ace_cursor {\n  border-color: rgba(16, 248, 255, 0.90);\n  background-color: rgba(16, 240, 248, 0.70);\n  opacity: 0.4;\n}\n\n.ace-gob .ace_marker-layer .ace_selection {\n  background: rgba(221, 240, 255, 0.20)\n}\n\n.ace-gob.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #141414;\n}\n\n.ace-gob .ace_marker-layer .ace_step {\n  background: rgb(16, 128, 0)\n}\n\n.ace-gob .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgba(64, 255, 255, 0.25)\n}\n\n.ace-gob .ace_marker-layer .ace_active-line {\n  background: rgba(255, 255, 255, 0.04)\n}\n\n.ace-gob .ace_gutter-active-line {\n  background-color: rgba(255, 255, 255, 0.04)\n}\n\n.ace-gob .ace_marker-layer .ace_selected-word {\n  border: 1px solid rgba(192, 240, 255, 0.20)\n}\n\n.ace-gob .ace_invisible {\n  color: rgba(255, 255, 255, 0.25)\n}\n\n.ace-gob .ace_keyword,\n.ace-gob .ace_meta {\n  color: #10D8E8\n}\n\n.ace-gob .ace_constant,\n.ace-gob .ace_constant.ace_character,\n.ace-gob .ace_constant.ace_character.ace_escape,\n.ace-gob .ace_constant.ace_other,\n.ace-gob .ace_heading,\n.ace-gob .ace_markup.ace_heading,\n.ace-gob .ace_support.ace_constant {\n  color: #10F0A0\n}\n\n.ace-gob .ace_invalid.ace_illegal {\n  color: #F8F8F8;\n  background-color: rgba(86, 45, 86, 0.75)\n}\n\n.ace-gob .ace_invalid.ace_deprecated {\n  text-decoration: underline;\n  font-style: italic;\n  color: #20F8C0\n}\n\n.ace-gob .ace_support {\n  color: #20E8B0\n}\n\n.ace-gob .ace_fold {\n  background-color: #50B8B8;\n  border-color: #70F8F8\n}\n\n.ace-gob .ace_support.ace_function {\n  color: #00F800\n}\n\n.ace-gob .ace_list,\n.ace-gob .ace_markup.ace_list,\n.ace-gob .ace_storage {\n  color: #10FF98\n}\n\n.ace-gob .ace_entity.ace_name.ace_function,\n.ace-gob .ace_meta.ace_tag,\n.ace-gob .ace_variable {\n  color: #00F868\n}\n\n.ace-gob .ace_string {\n  color: #10F060\n}\n\n.ace-gob .ace_string.ace_regexp {\n  color: #20F090;\n}\n\n.ace-gob .ace_comment {\n  font-style: italic;\n  color: #00E060;\n}\n\n.ace-gob .ace_variable {\n  color: #00F888;\n}\n\n.ace-gob .ace_xml-pe {\n  color: #488858;\n}\n\n.ace-gob .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMQERFpYLC1tf0PAAgOAnPnhxyiAAAAAElFTkSuQmCC) right repeat-y\n}\n\n.ace-gob .ace_indent-guide-active {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\n}\n";
});

define("ace/theme/gob", [
  "require",
  "exports",
  "module",
  "ace/theme/gob-css",
  "ace/lib/dom"
], function (require, exports, module) {
  exports.isDark = true;
  exports.cssClass = "ace-gob";
  exports.cssText = require("./gob-css");
  var dom = require("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass, false);
});
(function () {
  window.require(["ace/theme/gob"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
