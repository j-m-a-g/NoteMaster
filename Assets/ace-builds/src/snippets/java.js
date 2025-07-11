define("ace/snippets/java.snippets", [
  "require",
  "exports",
  "module"
], function (require, exports, module) {
  module.exports =
    '## Access Modifiers\nsnippet po\n\tprotected\nsnippet pu\n\tpublic\nsnippet pr\n\tprivate\n##\n## Annotations\nsnippet before\n\t@Before\n\tstatic void ${1:intercept}(${2:args}) { ${3} }\nsnippet mm\n\t@ManyToMany\n\t${1}\nsnippet mo\n\t@ManyToOne\n\t${1}\nsnippet om\n\t@OneToMany${1:(cascade=CascadeType.ALL)}\n\t${2}\nsnippet oo\n\t@OneToOne\n\t${1}\n##\n## Basic Java packages and import\nsnippet im\n\timport\nsnippet j.b\n\tjava.beans.\nsnippet j.i\n\tjava.io.\nsnippet j.m\n\tjava.math.\nsnippet j.n\n\tjava.net.\nsnippet j.u\n\tjava.util.\n##\n## Class\nsnippet cl\n\tclass ${1:`Filename("", "untitled")`} ${2}\nsnippet in\n\tinterface ${1:`Filename("", "untitled")`} ${2:extends Parent}${3}\nsnippet tc\n\tpublic class ${1:`Filename()`} extends ${2:TestCase}\n##\n## Class Enhancements\nsnippet ext\n\textends \nsnippet imp\n\timplements\n##\n## Comments\nsnippet /*\n\t/*\n\t * ${1}\n\t */\n##\n## Constants\nsnippet co\n\tstatic public final ${1:String} ${2:var} = ${3};${4}\nsnippet cos\n\tstatic public final String ${1:var} = "${2}";${3}\n##\n## Control Statements\nsnippet case\n\tcase ${1}:\n\t\t${2}\nsnippet def\n\tdefault:\n\t\t${2}\nsnippet el\n\telse\nsnippet elif\n\telse if (${1}) ${2}\nsnippet if\n\tif (${1}) ${2}\nsnippet sw\n\tswitch (${1}) {\n\t\t${2}\n\t}\n##\n## Create a Method\nsnippet m\n\t${1:void} ${2:method}(${3}) ${4:throws }${5}\n##\n## Create a Variable\nsnippet v\n\t${1:String} ${2:var}${3: = null}${4};${5}\n##\n## Enhancements to Methods, variables, classes, etc.\nsnippet ab\n\tabstract\nsnippet fi\n\tfinal\nsnippet st\n\tstatic\nsnippet sy\n\tsynchronized\n##\n## Error Methods\nsnippet err\n\tSystem.err.print("${1:Message}");\nsnippet errf\n\tSystem.err.printf("${1:Message}", ${2:exception});\nsnippet errln\n\tSystem.err.println("${1:Message}");\n##\n## Exception Handling\nsnippet as\n\tassert ${1:test} : "${2:Failure message}";${3}\nsnippet ca\n\tcatch(${1:Exception} ${2:e}) ${3}\nsnippet thr\n\tthrow\nsnippet ths\n\tthrows\nsnippet try\n\ttry {\n\t\t${3}\n\t} catch(${1:Exception} ${2:e}) {\n\t}\nsnippet tryf\n\ttry {\n\t\t${3}\n\t} catch(${1:Exception} ${2:e}) {\n\t} finally {\n\t}\n##\n## Find Methods\nsnippet findall\n\tList<${1:listName}> ${2:items} = ${1}.findAll();${3}\nsnippet findbyid\n\t${1:var} ${2:item} = ${1}.findById(${3});${4}\n##\n## Javadocs\nsnippet /**\n\t/**\n\t * ${1}\n\t */\nsnippet @au\n\t@author `system("grep \\`id -un\\` /etc/passwd | cut -d \\":\\" -f5 | cut -d \\",\\" -f1")`\nsnippet @br\n\t@brief ${1:Description}\nsnippet @fi\n\t@file ${1:`Filename()`}.java\nsnippet @pa\n\t@param ${1:param}\nsnippet @re\n\t@return ${1:param}\n##\n## Logger Methods\nsnippet debug\n\tLogger.debug(${1:param});${2}\nsnippet error\n\tLogger.error(${1:param});${2}\nsnippet info\n\tLogger.info(${1:param});${2}\nsnippet warn\n\tLogger.warn(${1:param});${2}\n##\n## Loops\nsnippet enfor\n\tfor (${1} : ${2}) ${3}\nsnippet for\n\tfor (${1}; ${2}; ${3}) ${4}\nsnippet wh\n\twhile (${1}) ${2}\n##\n## Main method\nsnippet main\n\tpublic static void main (String[] args) {\n\t\t${1:/* code */}\n\t}\n##\n## Print Methods\nsnippet print\n\tSystem.out.print("${1:Message}");\nsnippet printf\n\tSystem.out.printf("${1:Message}", ${2:args});\nsnippet println\n\tSystem.out.println(${1});\n##\n## Render Methods\nsnippet ren\n\trender(${1:param});${2}\nsnippet rena\n\trenderArgs.put("${1}", ${2});${3}\nsnippet renb\n\trenderBinary(${1:param});${2}\nsnippet renj\n\trenderJSON(${1:param});${2}\nsnippet renx\n\trenderXml(${1:param});${2}\n##\n## Setter and Getter Methods\nsnippet set\n\t${1:public} void set${3:}(${2:String} ${4:}){\n\t\tthis.$4 = $4;\n\t}\nsnippet get\n\t${1:public} ${2:String} get${3:}(){\n\t\treturn this.${4:};\n\t}\n##\n## Terminate Methods or Loops\nsnippet re\n\treturn\nsnippet br\n\tbreak;\n##\n## Test Methods\nsnippet t\n\tpublic void test${1:Name}() throws Exception {\n\t\t${2}\n\t}\nsnippet test\n\t@Test\n\tpublic void test${1:Name}() throws Exception {\n\t\t${2}\n\t}\n##\n## Utils\nsnippet Sc\n\tScanner\n##\n## Miscellaneous\nsnippet action\n\tpublic static void ${1:index}(${2:args}) { ${3} }\nsnippet rnf\n\tnotFound(${1:param});${2}\nsnippet rnfin\n\tnotFoundIfNull(${1:param});${2}\nsnippet rr\n\tredirect(${1:param});${2}\nsnippet ru\n\tunauthorized(${1:param});${2}\nsnippet unless\n\t(unless=${1:param});${2}\n';
});

define("ace/snippets/java", [
  "require",
  "exports",
  "module",
  "ace/snippets/java.snippets"
], function (require, exports, module) {
  "use strict";
  exports.snippetText = require("./java.snippets");
  exports.scope = "java";
});
(function () {
  window.require(["ace/snippets/java"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
