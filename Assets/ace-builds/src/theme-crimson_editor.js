define("ace/theme/crimson_editor-css", [
  "require",
  "exports",
  "module"
], function (require, exports, module) {
  module.exports =
    '.ace-crimson-editor .ace_gutter {\n  background: #ebebeb;\n  color: #333;\n  overflow : hidden;\n}\n\n.ace-crimson-editor .ace_gutter-layer {\n  width: 100%;\n  text-align: right;\n}\n\n.ace-crimson-editor .ace_print-margin {\n  width: 1px;\n  background: #e8e8e8;\n}\n\n.ace-crimson-editor {\n  background-color: #FFFFFF;\n  color: rgb(64, 64, 64);\n}\n\n.ace-crimson-editor .ace_cursor {\n  color: black;\n}\n\n.ace-crimson-editor .ace_invisible {\n  color: rgb(191, 191, 191);\n}\n\n.ace-crimson-editor .ace_identifier {\n  color: black;\n}\n\n.ace-crimson-editor .ace_keyword {\n  color: blue;\n}\n\n.ace-crimson-editor .ace_constant.ace_buildin {\n  color: rgb(88, 72, 246);\n}\n\n.ace-crimson-editor .ace_constant.ace_language {\n  color: rgb(255, 156, 0);\n}\n\n.ace-crimson-editor .ace_constant.ace_library {\n  color: rgb(6, 150, 14);\n}\n\n.ace-crimson-editor .ace_invalid {\n  text-decoration: line-through;\n  color: rgb(224, 0, 0);\n}\n\n.ace-crimson-editor .ace_fold {\n}\n\n.ace-crimson-editor .ace_support.ace_function {\n  color: rgb(192, 0, 0);\n}\n\n.ace-crimson-editor .ace_support.ace_constant {\n  color: rgb(6, 150, 14);\n}\n\n.ace-crimson-editor .ace_support.ace_type,\n.ace-crimson-editor .ace_support.ace_class {\n  color: rgb(109, 121, 222);\n}\n\n.ace-crimson-editor .ace_keyword.ace_operator {\n  color: rgb(49, 132, 149);\n}\n\n.ace-crimson-editor .ace_string {\n  color: rgb(128, 0, 128);\n}\n\n.ace-crimson-editor .ace_comment {\n  color: rgb(76, 136, 107);\n}\n\n.ace-crimson-editor .ace_comment.ace_doc {\n  color: rgb(0, 102, 255);\n}\n\n.ace-crimson-editor .ace_comment.ace_doc.ace_tag {\n  color: rgb(128, 159, 191);\n}\n\n.ace-crimson-editor .ace_constant.ace_numeric {\n  color: rgb(0, 0, 64);\n}\n\n.ace-crimson-editor .ace_variable {\n  color: rgb(0, 64, 128);\n}\n\n.ace-crimson-editor .ace_xml-pe {\n  color: rgb(104, 104, 91);\n}\n\n.ace-crimson-editor .ace_marker-layer .ace_selection {\n  background: rgb(181, 213, 255);\n}\n\n.ace-crimson-editor .ace_marker-layer .ace_step {\n  background: rgb(252, 255, 0);\n}\n\n.ace-crimson-editor .ace_marker-layer .ace_stack {\n  background: rgb(164, 229, 101);\n}\n\n.ace-crimson-editor .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgb(192, 192, 192);\n}\n\n.ace-crimson-editor .ace_marker-layer .ace_active-line {\n  background: rgb(232, 242, 254);\n}\n\n.ace-crimson-editor .ace_gutter-active-line {\n    background-color : #dcdcdc;\n}\n\n.ace-crimson-editor .ace_meta.ace_tag {\n  color:rgb(28, 2, 255);\n}\n\n.ace-crimson-editor .ace_marker-layer .ace_selected-word {\n  background: rgb(250, 250, 255);\n  border: 1px solid rgb(200, 200, 250);\n}\n\n.ace-crimson-editor .ace_string.ace_regex {\n  color: rgb(192, 0, 192);\n}\n\n.ace-crimson-editor .ace_indent-guide {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;\n}\n\n.ace-crimson-editor .ace_indent-guide-active {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;\n} \n';
});

define("ace/theme/crimson_editor", [
  "require",
  "exports",
  "module",
  "ace/theme/crimson_editor-css",
  "ace/lib/dom"
], function (require, exports, module) {
  exports.isDark = false;
  exports.cssText = require("./crimson_editor-css");
  exports.cssClass = "ace-crimson-editor";
  var dom = require("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass, false);
});
(function () {
  window.require(["ace/theme/crimson_editor"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
