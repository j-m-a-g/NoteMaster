define("ace/theme/cloud_editor-css", [
  "require",
  "exports",
  "module"
], function (require, exports, module) {
  module.exports =
    "\n.ace-cloud_editor .ace_gutter {\n    background: #ffffff;\n    color: #3a3a42;\n}\n\n.ace-cloud_editor .ace_tooltip-marker-error.ace_tooltip-marker {\n    background-color: #d13212;\n}\n.ace-cloud_editor .ace_tooltip-marker-security.ace_tooltip-marker {\n    background-color: #d13212;\n}\n.ace-cloud_editor .ace_tooltip-marker-warning.ace_tooltip-marker {\n    background-color: #906806;\n}\n\n.ace-cloud_editor .ace_print-margin {\n    width: 1px;\n    background: #697077;\n}\n\n.ace-cloud_editor {\n    background-color: #ffffff;\n    color: #3a3a42;\n}\n\n.ace-cloud_editor .ace_cursor {\n    color: #3a3a42;\n}\n\n.ace-cloud_editor .ace_marker-layer .ace_selection {\n    background: #bfceff;\n}\n\n.ace-cloud_editor.ace_multiselect .ace_selection.ace_start {\n    box-shadow: 0 0 3px 0px #ffffff;\n    border-radius: 2px;\n}\n\n.ace-cloud_editor .ace_marker-layer .ace_step {\n    background: #697077;\n}\n\n.ace-cloud_editor .ace_marker-layer .ace_bracket {\n    margin: 0 0 0 -1px;\n    border: 1px solid #697077;\n}\n\n.ace-cloud_editor .ace_marker-layer .ace_active-line {\n    box-sizing: border-box;\n    border-top: 1px solid #9191ac;\n    border-bottom: 1px solid #9191ac;\n}\n\n.ace-cloud_editor .ace_gutter-cell_svg-icons {\n    box-sizing: border-box;\n    border-top: 1px solid #ffffff;\n    border-bottom: 1px solid #ffffff;\n}\n\n.ace-cloud_editor .ace_gutter-active-line {\n    background-repeat: no-repeat;\n    box-sizing: border-box;\n    border-top: 1px solid #9191ac;\n    border-bottom: 1px solid #9191ac;\n}\n\n.ace-cloud_editor .ace_marker-layer .ace_selected-word {\n    border: 1px solid #bfceff;\n}\n\n.ace-cloud_editor .ace_fold {\n    background-color: #0E45B4;\n    border-color: #3a3a42;\n}\n\n.ace-cloud_editor .ace_keyword {\n    color: #9749d1;\n}\n\n.ace-cloud_editor .ace_meta.ace_tag {\n    color: #0E45B4;\n}\n\n.ace-cloud_editor .ace_constant {\n    color: #A16101;\n}\n\n.ace-cloud_editor .ace_constant.ace_numeric {\n    color: #A16101;\n}\n\n.ace-cloud_editor .ace_constant.ace_character.ace_escape {\n    color: #BD1880;\n}\n\n.ace-cloud_editor .ace_support.ace_function {\n    color: #A81700;\n}\n\n.ace-cloud_editor .ace_support.ace_class {\n    color: #A16101;\n}\n\n.ace-cloud_editor .ace_storage {\n    color: #9749d1;\n}\n\n.ace-cloud_editor .ace_invalid.ace_illegal {\n    color: #ffffff;\n    background-color: #0E45B4;\n}\n\n.ace-cloud_editor .ace_invalid.ace_deprecated {\n    color: #ffffff;\n    background-color: #A16101;\n}\n\n.ace-cloud_editor .ace_string {\n    color: #207A7F;\n}\n\n.ace-cloud_editor .ace_string.ace_regexp {\n    color: #207A7F;\n}\n\n.ace-cloud_editor .ace_comment,\n.ace-cloud_editor .ace_ghost_text {\n    color: #697077;\n    opacity: 1;\n}\n\n.ace-cloud_editor .ace_variable {\n    color: #0E45B4;\n}\n\n.ace-cloud_editor .ace_meta.ace_selector {\n    color: #9749d1;\n}\n\n.ace-cloud_editor .ace_entity.ace_other.ace_attribute-name {\n    color: #A16101;\n}\n\n.ace-cloud_editor .ace_entity.ace_name.ace_function {\n    color: #A81700;\n}\n\n.ace-cloud_editor .ace_entity.ace_name.ace_tag {\n    color: #0E45B4;\n}\n\n.ace-cloud_editor .ace_heading {\n    color: #A81700;\n}\n\n.ace-cloud_editor .ace_xml-pe {\n    color: #A16101;\n}\n.ace-cloud_editor .ace_doctype {\n    color: #0E45B4;\n}\n\n.ace-cloud_editor .ace_tooltip {\n    background-color: #ffffff;\n    color: #3a3a42;\n}\n\n.ace-cloud_editor .ace_icon_svg.ace_error,\n.ace-cloud_editor .ace_icon_svg.ace_error_fold {\n    background-color: #d13212;\n}\n.ace-cloud_editor .ace_icon_svg.ace_security,\n.ace-cloud_editor .ace_icon_svg.ace_security_fold {\n    background-color: #d13212;\n}\n.ace-cloud_editor .ace_icon_svg.ace_warning,\n.ace-cloud_editor .ace_icon_svg.ace_warning_fold {\n    background-color: #906806;\n}\n.ace-cloud_editor .ace_icon_svg.ace_info {\n    background-color: #0073bb;\n}\n.ace-cloud_editor .ace_icon_svg.ace_hint {\n    background-color: #0073bb;\n}\n.ace-cloud_editor .ace_highlight-marker {\n    background: none;\n    border: #0E45B4 1px solid;\n}\n.ace-cloud_editor .ace_tooltip.ace_hover-tooltip:focus > div {\n    outline: 1px solid #0073bb;\n}\n.ace-cloud_editor .ace_snippet-marker {\n    background-color: #CED6E0;\n    border: 0;\n}\n\n.ace-cloud_editor.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {\n    background-color: #f2f3f3;\n    border: #0F68AE 1.5px solid;\n}\n.ace-cloud_editor.ace_editor.ace_autocomplete .ace_line-hover {\n    border: 1px solid #16191f;\n    background: #f2f3f3;\n}\n.ace-cloud_editor.ace_editor.ace_autocomplete .ace_completion-meta {\n    color: #545b64;\n    opacity: 1;\n}\n.ace-cloud_editor.ace_editor.ace_autocomplete .ace_completion-highlight{\n    color: #0F68AE;\n}\n.ace-cloud_editor.ace_editor.ace_autocomplete {\n    box-shadow: 0 1px 1px 0 #001c244d, 1px 1px 1px 0 #001c2426, -1px 1px 1px 0 #001c2426;\n    line-height: 1.5;\n    border: 1px solid #eaeded;\n    background: #ffffff;\n    color: #16191f;\n}\n\n";
});

define("ace/theme/cloud_editor", [
  "require",
  "exports",
  "module",
  "ace/theme/cloud_editor-css",
  "ace/lib/dom"
], function (require, exports, module) {
  exports.isDark = false;
  exports.cssClass = "ace-cloud_editor";
  exports.cssText = require("./cloud_editor-css");
  var dom = require("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass, false);
});
(function () {
  window.require(["ace/theme/cloud_editor"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
