define("ace/theme/tomorrow_night_blue-css", [
  "require",
  "exports",
  "module"
], function (require, exports, module) {
  module.exports =
    ".ace-tomorrow-night-blue .ace_gutter {\n  background: #00204b;\n  color: #7388b5\n}\n\n.ace-tomorrow-night-blue .ace_print-margin {\n  width: 1px;\n  background: #00204b\n}\n\n.ace-tomorrow-night-blue {\n  background-color: #002451;\n  color: #FFFFFF\n}\n\n.ace-tomorrow-night-blue .ace_constant.ace_other,\n.ace-tomorrow-night-blue .ace_cursor {\n  color: #FFFFFF\n}\n\n.ace-tomorrow-night-blue .ace_marker-layer .ace_selection {\n  background: #003F8E\n}\n\n.ace-tomorrow-night-blue.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #002451;\n}\n\n.ace-tomorrow-night-blue .ace_marker-layer .ace_step {\n  background: rgb(127, 111, 19)\n}\n\n.ace-tomorrow-night-blue .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid #404F7D\n}\n\n.ace-tomorrow-night-blue .ace_marker-layer .ace_active-line {\n  background: #00346E\n}\n\n.ace-tomorrow-night-blue .ace_gutter-active-line {\n  background-color: #022040\n}\n\n.ace-tomorrow-night-blue .ace_marker-layer .ace_selected-word {\n  border: 1px solid #003F8E\n}\n\n.ace-tomorrow-night-blue .ace_invisible {\n  color: #404F7D\n}\n\n.ace-tomorrow-night-blue .ace_keyword,\n.ace-tomorrow-night-blue .ace_meta,\n.ace-tomorrow-night-blue .ace_storage,\n.ace-tomorrow-night-blue .ace_storage.ace_type,\n.ace-tomorrow-night-blue .ace_support.ace_type {\n  color: #EBBBFF\n}\n\n.ace-tomorrow-night-blue .ace_keyword.ace_operator {\n  color: #99FFFF\n}\n\n.ace-tomorrow-night-blue .ace_constant.ace_character,\n.ace-tomorrow-night-blue .ace_constant.ace_language,\n.ace-tomorrow-night-blue .ace_constant.ace_numeric,\n.ace-tomorrow-night-blue .ace_keyword.ace_other.ace_unit,\n.ace-tomorrow-night-blue .ace_support.ace_constant,\n.ace-tomorrow-night-blue .ace_variable.ace_parameter {\n  color: #FFC58F\n}\n\n.ace-tomorrow-night-blue .ace_invalid {\n  color: #FFFFFF;\n  background-color: #F99DA5\n}\n\n.ace-tomorrow-night-blue .ace_invalid.ace_deprecated {\n  color: #FFFFFF;\n  background-color: #EBBBFF\n}\n\n.ace-tomorrow-night-blue .ace_fold {\n  background-color: #BBDAFF;\n  border-color: #FFFFFF\n}\n\n.ace-tomorrow-night-blue .ace_entity.ace_name.ace_function,\n.ace-tomorrow-night-blue .ace_support.ace_function,\n.ace-tomorrow-night-blue .ace_variable {\n  color: #BBDAFF\n}\n\n.ace-tomorrow-night-blue .ace_support.ace_class,\n.ace-tomorrow-night-blue .ace_support.ace_type {\n  color: #FFEEAD\n}\n\n.ace-tomorrow-night-blue .ace_heading,\n.ace-tomorrow-night-blue .ace_markup.ace_heading,\n.ace-tomorrow-night-blue .ace_string {\n  color: #D1F1A9\n}\n\n.ace-tomorrow-night-blue .ace_entity.ace_name.ace_tag,\n.ace-tomorrow-night-blue .ace_entity.ace_other.ace_attribute-name,\n.ace-tomorrow-night-blue .ace_meta.ace_tag,\n.ace-tomorrow-night-blue .ace_string.ace_regexp,\n.ace-tomorrow-night-blue .ace_variable {\n  color: #FF9DA4\n}\n\n.ace-tomorrow-night-blue .ace_comment {\n  color: #7285B7\n}\n\n.ace-tomorrow-night-blue .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYJDzqfwPAANXAeNsiA+ZAAAAAElFTkSuQmCC) right repeat-y\n}\n\n.ace-tomorrow-night-blue .ace_indent-guide-active {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;\n}\n";
});

define("ace/theme/tomorrow_night_blue", [
  "require",
  "exports",
  "module",
  "ace/theme/tomorrow_night_blue-css",
  "ace/lib/dom"
], function (require, exports, module) {
  exports.isDark = true;
  exports.cssClass = "ace-tomorrow-night-blue";
  exports.cssText = require("./tomorrow_night_blue-css");
  var dom = require("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass, false);
});
(function () {
  window.require(["ace/theme/tomorrow_night_blue"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
