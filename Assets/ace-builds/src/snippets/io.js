define("ace/snippets/io", ["require", "exports", "module"], function (
  require,
  exports,
  module
) {
  "use strict";
  exports.snippets = [
    {
      content: "assertEquals(${1:expected}, ${2:expr})",
      name: "assertEquals",
      scope: "io",
      tabTrigger: "ae"
    },
    {
      content: "${1:${2:newValue} := ${3:Object} }clone do(\n\t$0\n)",
      name: "clone do",
      scope: "io",
      tabTrigger: "cdo"
    },
    {
      content: 'docSlot("${1:slotName}", "${2:documentation}")',
      name: "docSlot",
      scope: "io",
      tabTrigger: "ds"
    },
    {
      content: "(${1:header,}\n\t${2:body}\n)$0",
      keyEquivalent: "@(",
      name: "Indented Bracketed Line",
      scope: "io",
      tabTrigger: "("
    },
    {
      content: "\n\t$0\n",
      keyEquivalent: "\r",
      name: "Special: Return Inside Empty Parenthesis",
      scope: "io meta.empty-parenthesis.io, io meta.comma-parenthesis.io"
    },
    {
      content: "${1:methodName} := method(${2:args,}\n\t$0\n)",
      name: "method",
      scope: "io",
      tabTrigger: "m"
    },
    {
      content:
        'newSlot("${1:slotName}", ${2:defaultValue}, "${3:docString}")$0',
      name: "newSlot",
      scope: "io",
      tabTrigger: "ns"
    },
    {
      content: "${1:name} := Object clone do(\n\t$0\n)",
      name: "Object clone do",
      scope: "io",
      tabTrigger: "ocdo"
    },
    {
      content: "test${1:SomeFeature} := method(\n\t$0\n)",
      name: "testMethod",
      scope: "io",
      tabTrigger: "ts"
    },
    {
      content: "${1:Something}Test := ${2:UnitTest} clone do(\n\t$0\n)",
      name: "UnitTest",
      scope: "io",
      tabTrigger: "ut"
    }
  ];
  exports.scope = "io";
});
(function () {
  window.require(["ace/snippets/io"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
