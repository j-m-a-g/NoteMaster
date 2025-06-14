define("ace/snippets/jsp.snippets", ["require", "exports", "module"], function (
  require,
  exports,
  module
) {
  module.exports =
    'snippet @page\n\t<%@page contentType="text/html" pageEncoding="UTF-8"%>\nsnippet jstl\n\t<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>\n\t<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>\nsnippet jstl:c\n\t<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>\nsnippet jstl:fn\n\t<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>\nsnippet cpath\n\t${pageContext.request.contextPath}\nsnippet cout\n\t<c:out value="${1}" default="${2}" />\nsnippet cset\n\t<c:set var="${1}" value="${2}" />\nsnippet cremove\n\t<c:remove var="${1}" scope="${2:page}" />\nsnippet ccatch\n\t<c:catch var="${1}" />\nsnippet cif\n\t<c:if test="${${1}}">\n\t\t${2}\n\t</c:if>\nsnippet cchoose\n\t<c:choose>\n\t\t${1}\n\t</c:choose>\nsnippet cwhen\n\t<c:when test="${${1}}">\n\t\t${2}\n\t</c:when>\nsnippet cother\n\t<c:otherwise>\n\t\t${1}\n\t</c:otherwise>\nsnippet cfore\n\t<c:forEach items="${${1}}" var="${2}" varStatus="${3}">\n\t\t${4:<c:out value="$2" />}\n\t</c:forEach>\nsnippet cfort\n\t<c:set var="${1}">${2:item1,item2,item3}</c:set>\n\t<c:forTokens var="${3}" items="${$1}" delims="${4:,}">\n\t\t${5:<c:out value="$3" />}\n\t</c:forTokens>\nsnippet cparam\n\t<c:param name="${1}" value="${2}" />\nsnippet cparam+\n\t<c:param name="${1}" value="${2}" />\n\tcparam+${3}\nsnippet cimport\n\t<c:import url="${1}" />\nsnippet cimport+\n\t<c:import url="${1}">\n\t\t<c:param name="${2}" value="${3}" />\n\t\tcparam+${4}\n\t</c:import>\nsnippet curl\n\t<c:url value="${1}" var="${2}" />\n\t<a href="${$2}">${3}</a>\nsnippet curl+\n\t<c:url value="${1}" var="${2}">\n\t\t<c:param name="${4}" value="${5}" />\n\t\tcparam+${6}\n\t</c:url>\n\t<a href="${$2}">${3}</a>\nsnippet credirect\n\t<c:redirect url="${1}" />\nsnippet contains\n\t${fn:contains(${1:string}, ${2:substr})}\nsnippet contains:i\n\t${fn:containsIgnoreCase(${1:string}, ${2:substr})}\nsnippet endswith\n\t${fn:endsWith(${1:string}, ${2:suffix})}\nsnippet escape\n\t${fn:escapeXml(${1:string})}\nsnippet indexof\n\t${fn:indexOf(${1:string}, ${2:substr})}\nsnippet join\n\t${fn:join(${1:collection}, ${2:delims})}\nsnippet length\n\t${fn:length(${1:collection_or_string})}\nsnippet replace\n\t${fn:replace(${1:string}, ${2:substr}, ${3:replace})}\nsnippet split\n\t${fn:split(${1:string}, ${2:delims})}\nsnippet startswith\n\t${fn:startsWith(${1:string}, ${2:prefix})}\nsnippet substr\n\t${fn:substring(${1:string}, ${2:begin}, ${3:end})}\nsnippet substr:a\n\t${fn:substringAfter(${1:string}, ${2:substr})}\nsnippet substr:b\n\t${fn:substringBefore(${1:string}, ${2:substr})}\nsnippet lc\n\t${fn:toLowerCase(${1:string})}\nsnippet uc\n\t${fn:toUpperCase(${1:string})}\nsnippet trim\n\t${fn:trim(${1:string})}\n';
});

define("ace/snippets/jsp", [
  "require",
  "exports",
  "module",
  "ace/snippets/jsp.snippets"
], function (require, exports, module) {
  "use strict";
  exports.snippetText = require("./jsp.snippets");
  exports.scope = "jsp";
});
(function () {
  window.require(["ace/snippets/jsp"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
