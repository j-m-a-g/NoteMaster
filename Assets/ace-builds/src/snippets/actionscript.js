define("ace/snippets/actionscript.snippets", [
  "require",
  "exports",
  "module"
], function (require, exports, module) {
  module.exports =
    'snippet main\n\tpackage {\n\t\timport flash.display.*;\n\t\timport flash.Events.*;\n\t\n\t\tpublic class Main extends Sprite {\n\t\t\tpublic function Main (\t) {\n\t\t\t\ttrace("start");\n\t\t\t\tstage.scaleMode = StageScaleMode.NO_SCALE;\n\t\t\t\tstage.addEventListener(Event.RESIZE, resizeListener);\n\t\t\t}\n\t\n\t\t\tprivate function resizeListener (e:Event):void {\n\t\t\t\ttrace("The application window changed size!");\n\t\t\t\ttrace("New width:  " + stage.stageWidth);\n\t\t\t\ttrace("New height: " + stage.stageHeight);\n\t\t\t}\n\t\n\t\t}\n\t\n\t}\nsnippet class\n\t${1:public|internal} class ${2:name} ${3:extends } {\n\t\tpublic function $2 (\t) {\n\t\t\t("start");\n\t\t}\n\t}\nsnippet all\n\tpackage name {\n\n\t\t${1:public|internal|final} class ${2:name} ${3:extends } {\n\t\t\tprivate|public| static const FOO = "abc";\n\t\t\tprivate|public| static var BAR = "abc";\n\n\t\t\t// class initializer - no JIT !! one time setup\n\t\t\tif Cababilities.os == "Linux|MacOS" {\n\t\t\t\tFOO = "other";\n\t\t\t}\n\n\t\t\t// constructor:\n\t\t\tpublic function $2 (\t){\n\t\t\t\tsuper2();\n\t\t\t\ttrace("start");\n\t\t\t}\n\t\t\tpublic function name (a, b...){\n\t\t\t\tsuper.name(..);\n\t\t\t\tlable:break\n\t\t\t}\n\t\t}\n\t}\n\n\tfunction A(){\n\t\t// A can only be accessed within this file\n\t}\nsnippet switch\n\tswitch(${1}){\n\t\tcase ${2}:\n\t\t\t${3}\n\t\tbreak;\n\t\tdefault:\n\t}\nsnippet case\n\t\tcase ${1}:\n\t\t\t${2}\n\t\tbreak;\nsnippet package\n\tpackage ${1:package}{\n\t\t${2}\n\t}\nsnippet wh\n\twhile ${1:cond}{\n\t\t${2}\n\t}\nsnippet do\n\tdo {\n\t\t${2}\n\t} while (${1:cond})\nsnippet while\n\twhile ${1:cond}{\n\t\t${2}\n\t}\nsnippet for enumerate names\n\tfor (${1:var} in ${2:object}){\n\t\t${3}\n\t}\nsnippet for enumerate values\n\tfor each (${1:var} in ${2:object}){\n\t\t${3}\n\t}\nsnippet get_set\n\tfunction get ${1:name} {\n\t\treturn ${2}\n\t}\n\tfunction set $1 (newValue) {\n\t\t${3}\n\t}\nsnippet interface\n\tinterface name {\n\t\tfunction method(${1}):${2:returntype};\n\t}\nsnippet try\n\ttry {\n\t\t${1}\n\t} catch (error:ErrorType) {\n\t\t${2}\n\t} finally {\n\t\t${3}\n\t}\n# For Loop (same as c.snippet)\nsnippet for for (..) {..}\n\tfor (${2:i} = 0; $2 < ${1:count}; $2${3:++}) {\n\t\t${4:/* code */}\n\t}\n# Custom For Loop\nsnippet forr\n\tfor (${1:i} = ${2:0}; ${3:$1 < 10}; $1${4:++}) {\n\t\t${5:/* code */}\n\t}\n# If Condition\nsnippet if\n\tif (${1:/* condition */}) {\n\t\t${2:/* code */}\n\t}\nsnippet el\n\telse {\n\t\t${1}\n\t}\n# Ternary conditional\nsnippet t\n\t${1:/* condition */} ? ${2:a} : ${3:b}\nsnippet fun\n\tfunction ${1:function_name}(${2})${3}\n\t{\n\t\t${4:/* code */}\n\t}\n# FlxSprite (usefull when using the flixel library)\nsnippet FlxSprite\n\tpackage\n\t{\n\t\timport org.flixel.*\n\n\t\tpublic class ${1:ClassName} extends ${2:FlxSprite}\n\t\t{\n\t\t\tpublic function $1(${3: X:Number, Y:Number}):void\n\t\t\t{\n\t\t\t\tsuper(X,Y);\n\t\t\t\t${4: //code...}\n\t\t\t}\n\n\t\t\toverride public function update():void\n\t\t\t{\n\t\t\t\tsuper.update();\n\t\t\t\t${5: //code...}\n\t\t\t}\n\t\t}\n\t}\n\n';
});

define("ace/snippets/actionscript", [
  "require",
  "exports",
  "module",
  "ace/snippets/actionscript.snippets"
], function (require, exports, module) {
  "use strict";
  exports.snippetText = require("./actionscript.snippets");
  exports.scope = "actionscript";
});
(function () {
  window.require(["ace/snippets/actionscript"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
