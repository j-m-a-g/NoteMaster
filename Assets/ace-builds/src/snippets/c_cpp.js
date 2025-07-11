define("ace/snippets/c_cpp.snippets", [
  "require",
  "exports",
  "module"
], function (require, exports, module) {
  module.exports =
    "## STL Collections\n# std::array\nsnippet array\n\tstd::array<${1:T}, ${2:N}> ${3};${4}\n# std::vector\nsnippet vector\n\tstd::vector<${1:T}> ${2};${3}\n# std::deque\nsnippet deque\n\tstd::deque<${1:T}> ${2};${3}\n# std::forward_list\nsnippet flist\n\tstd::forward_list<${1:T}> ${2};${3}\n# std::list\nsnippet list\n\tstd::list<${1:T}> ${2};${3}\n# std::set\nsnippet set\n\tstd::set<${1:T}> ${2};${3}\n# std::map\nsnippet map\n\tstd::map<${1:Key}, ${2:T}> ${3};${4}\n# std::multiset\nsnippet mset\n\tstd::multiset<${1:T}> ${2};${3}\n# std::multimap\nsnippet mmap\n\tstd::multimap<${1:Key}, ${2:T}> ${3};${4}\n# std::unordered_set\nsnippet uset\n\tstd::unordered_set<${1:T}> ${2};${3}\n# std::unordered_map\nsnippet umap\n\tstd::unordered_map<${1:Key}, ${2:T}> ${3};${4}\n# std::unordered_multiset\nsnippet umset\n\tstd::unordered_multiset<${1:T}> ${2};${3}\n# std::unordered_multimap\nsnippet ummap\n\tstd::unordered_multimap<${1:Key}, ${2:T}> ${3};${4}\n# std::stack\nsnippet stack\n\tstd::stack<${1:T}> ${2};${3}\n# std::queue\nsnippet queue\n\tstd::queue<${1:T}> ${2};${3}\n# std::priority_queue\nsnippet pqueue\n\tstd::priority_queue<${1:T}> ${2};${3}\n##\n## Access Modifiers\n# private\nsnippet pri\n\tprivate\n# protected\nsnippet pro\n\tprotected\n# public\nsnippet pub\n\tpublic\n# friend\nsnippet fr\n\tfriend\n# mutable\nsnippet mu\n\tmutable\n## \n## Class\n# class\nsnippet cl\n\tclass ${1:`Filename('$1', 'name')`} \n\t{\n\tpublic:\n\t\t$1(${2});\n\t\t~$1();\n\n\tprivate:\n\t\t${3:/* data */}\n\t};\n# member function implementation\nsnippet mfun\n\t${4:void} ${1:`Filename('$1', 'ClassName')`}::${2:memberFunction}(${3}) {\n\t\t${5:/* code */}\n\t}\n# namespace\nsnippet ns\n\tnamespace ${1:`Filename('', 'my')`} {\n\t\t${2}\n\t} /* namespace $1 */\n##\n## Input/Output\n# std::cout\nsnippet cout\n\tstd::cout << ${1} << std::endl;${2}\n# std::cin\nsnippet cin\n\tstd::cin >> ${1};${2}\n##\n## Iteration\n# for i \nsnippet fori\n\tfor (int ${2:i} = 0; $2 < ${1:count}; $2${3:++}) {\n\t\t${4:/* code */}\n\t}${5}\n\n# foreach\nsnippet fore\n\tfor (${1:auto} ${2:i} : ${3:container}) {\n\t\t${4:/* code */}\n\t}${5}\n# iterator\nsnippet iter\n\tfor (${1:std::vector}<${2:type}>::${3:const_iterator} ${4:i} = ${5:container}.begin(); $4 != $5.end(); ++$4) {\n\t\t${6}\n\t}${7}\n\n# auto iterator\nsnippet itera\n\tfor (auto ${1:i} = $1.begin(); $1 != $1.end(); ++$1) {\n\t\t${2:std::cout << *$1 << std::endl;}\n\t}${3}\n##\n## Lambdas\n# lamda (one line)\nsnippet ld\n\t[${1}](${2}){${3:/* code */}}${4}\n# lambda (multi-line)\nsnippet lld\n\t[${1}](${2}){\n\t\t${3:/* code */}\n\t}${4}\n";
});

define("ace/snippets/c_cpp", [
  "require",
  "exports",
  "module",
  "ace/snippets/c_cpp.snippets"
], function (require, exports, module) {
  "use strict";
  exports.snippetText = require("./c_cpp.snippets");
  exports.scope = "c_cpp";
});
(function () {
  window.require(["ace/snippets/c_cpp"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
