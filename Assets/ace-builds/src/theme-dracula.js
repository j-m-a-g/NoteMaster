define("ace/theme/dracula-css", ["require", "exports", "module"], function (
  require,
  exports,
  module
) {
  module.exports =
    '/*\n * Copyright \u00A9 2017 Zeno Rocha <hi@zenorocha.com>\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \u201CSoftware\u201D), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \u201CAS IS\u201D, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n */\n\n.ace-dracula .ace_gutter {\n  background: #282a36;\n  color: rgb(144,145,148)\n}\n\n.ace-dracula .ace_print-margin {\n  width: 1px;\n  background: #44475a\n}\n\n.ace-dracula {\n  background-color: #282a36;\n  color: #f8f8f2\n}\n\n.ace-dracula .ace_cursor {\n  color: #f8f8f0\n}\n\n.ace-dracula .ace_marker-layer .ace_selection {\n  background: #44475a\n}\n\n.ace-dracula.ace_multiselect .ace_selection.ace_start {\n  box-shadow: 0 0 3px 0px #282a36;\n  border-radius: 2px\n}\n\n.ace-dracula .ace_marker-layer .ace_step {\n  background: rgb(198, 219, 174)\n}\n\n.ace-dracula .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid #a29709\n}\n\n.ace-dracula .ace_marker-layer .ace_active-line {\n  background: #44475a\n}\n\n.ace-dracula .ace_gutter-active-line {\n  background-color: #44475a\n}\n\n.ace-dracula .ace_marker-layer .ace_selected-word {\n  box-shadow: 0px 0px 0px 1px #a29709;\n  border-radius: 3px;\n}\n\n.ace-dracula .ace_fold {\n  background-color: #50fa7b;\n  border-color: #f8f8f2\n}\n\n.ace-dracula .ace_keyword {\n  color: #ff79c6\n}\n\n.ace-dracula .ace_constant.ace_language {\n  color: #bd93f9\n}\n\n.ace-dracula .ace_constant.ace_numeric {\n  color: #bd93f9\n}\n\n.ace-dracula .ace_constant.ace_character {\n  color: #bd93f9\n}\n\n.ace-dracula .ace_constant.ace_character.ace_escape {\n  color: #ff79c6\n}\n\n.ace-dracula .ace_constant.ace_other {\n  color: #bd93f9\n}\n\n.ace-dracula .ace_support.ace_function {\n  color: #8be9fd\n}\n\n.ace-dracula .ace_support.ace_constant {\n  color: #6be5fd\n}\n\n.ace-dracula .ace_support.ace_class {\n  font-style: italic;\n  color: #66d9ef\n}\n\n.ace-dracula .ace_support.ace_type {\n  font-style: italic;\n  color: #66d9ef\n}\n\n.ace-dracula .ace_storage {\n  color: #ff79c6\n}\n\n.ace-dracula .ace_storage.ace_type {\n  font-style: italic;\n  color: #8be9fd\n}\n\n.ace-dracula .ace_invalid {\n  color: #F8F8F0;\n  background-color: #ff79c6\n}\n\n.ace-dracula .ace_invalid.ace_deprecated {\n  color: #F8F8F0;\n  background-color: #bd93f9\n}\n\n.ace-dracula .ace_string {\n  color: #f1fa8c\n}\n\n.ace-dracula .ace_comment {\n  color: #6272a4\n}\n\n.ace-dracula .ace_variable {\n  color: #50fa7b\n}\n\n.ace-dracula .ace_variable.ace_parameter {\n  font-style: italic;\n  color: #ffb86c\n}\n\n.ace-dracula .ace_entity.ace_other.ace_attribute-name {\n  color: #50fa7b\n}\n\n.ace-dracula .ace_entity.ace_name.ace_function {\n  color: #50fa7b\n}\n\n.ace-dracula .ace_entity.ace_name.ace_tag {\n  color: #ff79c6\n}\n.ace-dracula .ace_invisible {\n  color: #626680;\n}\n\n.ace-dracula .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y\n}\n\n.ace-dracula .ace_indent-guide-active {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACAQMAAACjTyRkAAAABlBMVEUAAADCwsK76u2xAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjYGBoAAAAhACBGFbxzQAAAABJRU5ErkJggg==") right repeat-y;\n}\n';
});

define("ace/theme/dracula", [
  "require",
  "exports",
  "module",
  "ace/theme/dracula-css",
  "ace/lib/dom"
], function (require, exports, module) {
  exports.isDark = true;
  exports.cssClass = "ace-dracula";
  exports.cssText = require("./dracula-css");
  exports.$selectionColorConflict = true;
  var dom = require("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass, false);
});
(function () {
  window.require(["ace/theme/dracula"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
