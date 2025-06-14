define("ace/theme/github_light_default-css", [
  "require",
  "exports",
  "module"
], function (require, exports, module) {
  module.exports =
    '.ace-github-light-default .ace_gutter {\n    background: #ffffff;\n    color: rgba(27, 31, 35, 0.3);\n}\n\n.ace-github-light-default .ace_print-margin {\n    width: 1px;\n    background: #e8e8e8;\n}\n\n.ace-github-light-default {\n    background-color: #FFFFFF;\n    color: #24292E;\n}\n\n.ace-github-light-default .ace_cursor {\n    color: #044289;\n    background: none;\n}\n\n.ace-github-light-default .ace_marker-layer .ace_selection {\n    background: rgba(3, 102, 214, 0.14);\n}\n\n.ace-github-light-default.ace_multiselect .ace_selection.ace_start {\n    box-shadow: 0 0 3px 0px #FFFFFF;\n    border-radius: 2px;\n}\n\n.ace-github-light-default .ace_marker-layer .ace_step {\n    background: rgb(198, 219, 174);\n}\n\n.ace-github-light-default .ace_marker-layer .ace_bracket {\n    margin: -1px 0 0 -1px;\n    border: 1px solid rgba(52, 208, 88, 0);\n    background: rgba(52, 208, 88, 0.25);\n}\n\n.ace-github-light-default .ace_marker-layer .ace_active-line {\n    background: #f6f8fa;\n    border: 2px solid #eeeeee;\n}\n\n.ace-github-light-default .ace_gutter-active-line {\n    background-color: #f6f8fa;\n    color: #24292e\n}\n\n.ace-github-light-default .ace_marker-layer .ace_selected-word {\n    border: 1px solid rgba(3, 102, 214, 0.14);\n}\n\n.ace-github-light-default .ace_fold {\n    background-color: #D73A49;\n    border-color: #24292E;\n}\n\n.ace_tooltip.ace-github-light-default {\n    background-color: #f6f8fa !important;\n    color: #444d56 !important;\n    border: 1px solid #444d56\n}\n\n.ace-github-light-default .language_highlight_error {\n    border-bottom: dotted 1px #cb2431;\n    background: none;\n}\n\n.ace-github-light-default .language_highlight_warning {\n    border-bottom: solid 1px #f9c513;\n    background: none;\n}\n\n.ace-github-light-default .language_highlight_info {\n    border-bottom: dotted 1px #1a85ff;\n    background: none;\n}\n\n.ace-github-light-default .ace_keyword {\n    color: #D73A49;\n}\n\n.ace-github-light-default .ace_constant {\n    color: #005CC5;\n}\n\n.ace-github-light-default .ace_support {\n    color: #005CC5;\n}\n\n.ace-github-light-default .ace_support.ace_constant {\n    color: #005CC5;\n}\n\n.ace-github-light-default .ace_support.ace_type {\n    color: #D73A49;\n}\n\n.ace-github-light-default .ace_storage {\n    color: #D73A49;\n}\n\n.ace-github-light-default .ace_storage.ace_type {\n    color: #D73A49;\n}\n\n.ace-github-light-default .ace_invalid.ace_illegal {\n    font-style: italic;\n    color: #B31D28;\n}\n\n.ace-github-light-default .ace_invalid.ace_deprecated {\n    font-style: italic;\n    color: #B31D28;\n}\n\n.ace-github-light-default .ace_string {\n    color: #032F62;\n}\n\n.ace-github-light-default .ace_string.ace_regexp {\n    color: #032F62;\n}\n\n.ace-github-light-default .ace_comment {\n    color: #6A737D;\n}\n\n.ace-github-light-default .ace_variable {\n    color: #E36209;\n}\n\n.ace-github-light-default .ace_variable.ace_language {\n    color: #005CC5;\n}\n\n.ace-github-light-default .ace_entity.ace_name {\n    color: #6F42C1;\n}\n\n.ace-github-light-default .ace_entity {\n    color: #6F42C1;\n}\n\n.ace-github-light-default .ace_entity.ace_name.ace_tag {\n    color: #22863A;\n}\n\n.ace-github-light-default .ace_meta.ace_tag {\n    color: #22863A;\n}\n\n.ace-github-light-default .ace_markup.ace_heading {\n    color: #005CC5;\n}\n\n.ace-github-light-default .ace_indent-guide {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;\n}\n\n.ace-github-light-default .ace_indent-guide-active {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;\n}\n';
});

define("ace/theme/github_light_default", [
  "require",
  "exports",
  "module",
  "ace/theme/github_light_default-css",
  "ace/lib/dom"
], function (require, exports, module) {
  exports.isDark = false;
  exports.cssClass = "ace-github-light-default";
  exports.cssText = require("./github_light_default-css");
  var dom = require("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass, false);
});
(function () {
  window.require(["ace/theme/github_light_default"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
