define("ace/theme/dawn-css", ["require", "exports", "module"], function (
  require,
  exports,
  module
) {
  module.exports =
    '.ace-dawn .ace_gutter {\n  background: #ebebeb;\n  color: #333\n}\n\n.ace-dawn .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8\n}\n\n.ace-dawn {\n  background-color: #F9F9F9;\n  color: #080808\n}\n\n.ace-dawn .ace_cursor {\n  color: #000000\n}\n\n.ace-dawn .ace_marker-layer .ace_selection {\n  background: rgba(39, 95, 255, 0.30)\n}\n\n.ace-dawn.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #F9F9F9;\n}\n\n.ace-dawn .ace_marker-layer .ace_step {\n  background: rgb(255, 255, 0)\n}\n\n.ace-dawn .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgba(75, 75, 126, 0.50)\n}\n\n.ace-dawn .ace_marker-layer .ace_active-line {\n  background: rgba(36, 99, 180, 0.12)\n}\n\n.ace-dawn .ace_gutter-active-line {\n  background-color : #dcdcdc\n}\n\n.ace-dawn .ace_marker-layer .ace_selected-word {\n  border: 1px solid rgba(39, 95, 255, 0.30)\n}\n\n.ace-dawn .ace_invisible {\n  color: rgba(75, 75, 126, 0.50)\n}\n\n.ace-dawn .ace_keyword,\n.ace-dawn .ace_meta {\n  color: #794938\n}\n\n.ace-dawn .ace_constant,\n.ace-dawn .ace_constant.ace_character,\n.ace-dawn .ace_constant.ace_character.ace_escape,\n.ace-dawn .ace_constant.ace_other {\n  color: #811F24\n}\n\n.ace-dawn .ace_invalid.ace_illegal {\n  text-decoration: underline;\n  font-style: italic;\n  color: #F8F8F8;\n  background-color: #B52A1D\n}\n\n.ace-dawn .ace_invalid.ace_deprecated {\n  text-decoration: underline;\n  font-style: italic;\n  color: #B52A1D\n}\n\n.ace-dawn .ace_support {\n  color: #691C97\n}\n\n.ace-dawn .ace_support.ace_constant {\n  color: #B4371F\n}\n\n.ace-dawn .ace_fold {\n  background-color: #794938;\n  border-color: #080808\n}\n\n.ace-dawn .ace_list,\n.ace-dawn .ace_markup.ace_list,\n.ace-dawn .ace_support.ace_function {\n  color: #693A17\n}\n\n.ace-dawn .ace_storage {\n  font-style: italic;\n  color: #A71D5D\n}\n\n.ace-dawn .ace_string {\n  color: #0B6125\n}\n\n.ace-dawn .ace_string.ace_regexp {\n  color: #CF5628\n}\n\n.ace-dawn .ace_comment {\n  font-style: italic;\n  color: #5A525F\n}\n\n.ace-dawn .ace_heading,\n.ace-dawn .ace_markup.ace_heading {\n  color: #19356D\n}\n\n.ace-dawn .ace_variable {\n  color: #234A97\n}\n\n.ace-dawn .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYLh/5+x/AAizA4hxNNsZAAAAAElFTkSuQmCC) right repeat-y\n}\n\n.ace-dawn .ace_indent-guide-active {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;\n} \n';
});

define("ace/theme/dawn", [
  "require",
  "exports",
  "module",
  "ace/theme/dawn-css",
  "ace/lib/dom"
], function (require, exports, module) {
  exports.isDark = false;
  exports.cssClass = "ace-dawn";
  exports.cssText = require("./dawn-css");
  var dom = require("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass, false);
});
(function () {
  window.require(["ace/theme/dawn"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
