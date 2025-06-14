define("ace/ext/statusbar", [
  "require",
  "exports",
  "module",
  "ace/lib/dom",
  "ace/lib/lang"
], function (require, exports, module) {
  "use strict";
  var dom = require("../lib/dom");
  var lang = require("../lib/lang");
  var StatusBar = /** @class */ (function () {
    function StatusBar(editor, parentNode) {
      this.element = dom.createElement("div");
      this.element.className = "ace_status-indicator";
      this.element.style.cssText = "display: inline-block;";
      parentNode.appendChild(this.element);
      var statusUpdate = lang
        .delayedCall(
          function () {
            this.updateStatus(editor);
          }.bind(this)
        )
        .schedule.bind(null, 100);
      editor.on("changeStatus", statusUpdate);
      editor.on("changeSelection", statusUpdate);
      editor.on("keyboardActivity", statusUpdate);
    }

    StatusBar.prototype.updateStatus = function (editor) {
      var status = [];

      function add(str, separator) {
        str && status.push(str, separator || "|");
      }

      add(editor.keyBinding.getStatusText(editor));
      if (editor.commands.recording) add("REC");
      var sel = editor.selection;
      var c = sel.lead;
      if (!sel.isEmpty()) {
        var r = editor.getSelectionRange();
        add(
          "(" +
            (r.end.row - r.start.row) +
            ":" +
            (r.end.column - r.start.column) +
            ")",
          " "
        );
      }
      add(c.row + ":" + c.column, " ");
      if (sel.rangeCount) add("[" + sel.rangeCount + "]", " ");
      status.pop();
      this.element.textContent = status.join("");
    };
    return StatusBar;
  })();
  exports.StatusBar = StatusBar;
});
(function () {
  window.require(["ace/ext/statusbar"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
