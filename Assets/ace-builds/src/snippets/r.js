define("ace/snippets/r.snippets", ["require", "exports", "module"], function (
  require,
  exports,
  module
) {
  module.exports =
    'snippet #!\n\t#!/usr/bin/env Rscript\n\n# includes\nsnippet lib\n\tlibrary(${1:package})\nsnippet req\n\trequire(${1:package})\nsnippet source\n\tsource(\'${1:file}\')\n\n# conditionals\nsnippet if\n\tif (${1:condition}) {\n\t\t${2:code}\n\t}\nsnippet el\n\telse {\n\t\t${1:code}\n\t}\nsnippet ei\n\telse if (${1:condition}) {\n\t\t${2:code}\n\t}\n\n# functions\nsnippet fun\n\t${1:name} = function (${2:variables}) {\n\t\t${3:code}\n\t}\nsnippet ret\n\treturn(${1:code})\n\n# dataframes, lists, etc\nsnippet df\n\t${1:name}[${2:rows}, ${3:cols}]\nsnippet c\n\tc(${1:items})\nsnippet li\n\tlist(${1:items})\nsnippet mat\n\tmatrix(${1:data}, nrow=${2:rows}, ncol=${3:cols})\n\n# apply functions\nsnippet apply\n\tapply(${1:array}, ${2:margin}, ${3:function})\nsnippet lapply\n\tlapply(${1:list}, ${2:function})\nsnippet sapply\n\tsapply(${1:list}, ${2:function})\nsnippet vapply\n\tvapply(${1:list}, ${2:function}, ${3:type})\nsnippet mapply\n\tmapply(${1:function}, ${2:...})\nsnippet tapply\n\ttapply(${1:vector}, ${2:index}, ${3:function})\nsnippet rapply\n\trapply(${1:list}, ${2:function})\n\n# plyr functions\nsnippet dd\n\tddply(${1:frame}, ${2:variables}, ${3:function})\nsnippet dl\n\tdlply(${1:frame}, ${2:variables}, ${3:function})\nsnippet da\n\tdaply(${1:frame}, ${2:variables}, ${3:function})\nsnippet d_\n\td_ply(${1:frame}, ${2:variables}, ${3:function})\n\nsnippet ad\n\tadply(${1:array}, ${2:margin}, ${3:function})\nsnippet al\n\talply(${1:array}, ${2:margin}, ${3:function})\nsnippet aa\n\taaply(${1:array}, ${2:margin}, ${3:function})\nsnippet a_\n\ta_ply(${1:array}, ${2:margin}, ${3:function})\n\nsnippet ld\n\tldply(${1:list}, ${2:function})\nsnippet ll\n\tllply(${1:list}, ${2:function})\nsnippet la\n\tlaply(${1:list}, ${2:function})\nsnippet l_\n\tl_ply(${1:list}, ${2:function})\n\nsnippet md\n\tmdply(${1:matrix}, ${2:function})\nsnippet ml\n\tmlply(${1:matrix}, ${2:function})\nsnippet ma\n\tmaply(${1:matrix}, ${2:function})\nsnippet m_\n\tm_ply(${1:matrix}, ${2:function})\n\n# plot functions\nsnippet pl\n\tplot(${1:x}, ${2:y})\nsnippet ggp\n\tggplot(${1:data}, aes(${2:aesthetics}))\nsnippet img\n\t${1:(jpeg,bmp,png,tiff)}(filename="${2:filename}", width=${3}, height=${4}, unit="${5}")\n\t${6:plot}\n\tdev.off()\n\n# statistical test functions\nsnippet fis\n\tfisher.test(${1:x}, ${2:y})\nsnippet chi\n\tchisq.test(${1:x}, ${2:y})\nsnippet tt\n\tt.test(${1:x}, ${2:y})\nsnippet wil\n\twilcox.test(${1:x}, ${2:y})\nsnippet cor\n\tcor.test(${1:x}, ${2:y})\nsnippet fte\n\tvar.test(${1:x}, ${2:y})\nsnippet kvt \n\tkv.test(${1:x}, ${2:y})\n';
});

define("ace/snippets/r", [
  "require",
  "exports",
  "module",
  "ace/snippets/r.snippets"
], function (require, exports, module) {
  "use strict";
  exports.snippetText = require("./r.snippets");
  exports.scope = "r";
});
(function () {
  window.require(["ace/snippets/r"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
