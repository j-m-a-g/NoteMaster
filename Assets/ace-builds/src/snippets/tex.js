define("ace/snippets/tex.snippets", ["require", "exports", "module"], function (
  require,
  exports,
  module
) {
  module.exports =
    "#PREAMBLE\n#newcommand\nsnippet nc\n\t\\newcommand{\\${1:cmd}}[${2:opt}]{${3:realcmd}}${4}\n#usepackage\nsnippet up\n\t\\usepackage[${1:[options}]{${2:package}}\n#newunicodechar\nsnippet nuc\n\t\\newunicodechar{${1}}{${2:\\ensuremath}${3:tex-substitute}}}\n#DeclareMathOperator\nsnippet dmo\n\t\\DeclareMathOperator{${1}}{${2}}\n\n#DOCUMENT\n# \\begin{}...\\end{}\nsnippet begin\n\t\\begin{${1:env}}\n\t\t${2}\n\t\\end{$1}\n# Tabular\nsnippet tab\n\t\\begin{${1:tabular}}{${2:c}}\n\t${3}\n\t\\end{$1}\nsnippet thm\n\t\\begin[${1:author}]{${2:thm}}\n\t${3}\n\t\\end{$1}\nsnippet center\n\t\\begin{center}\n\t\t${1}\n\t\\end{center}\n# Align(ed)\nsnippet ali\n\t\\begin{align${1:ed}}\n\t\t${2}\n\t\\end{align$1}\n# Gather(ed)\nsnippet gat\n\t\\begin{gather${1:ed}}\n\t\t${2}\n\t\\end{gather$1}\n# Equation\nsnippet eq\n\t\\begin{equation}\n\t\t${1}\n\t\\end{equation}\n# Equation\nsnippet eq*\n\t\\begin{equation*}\n\t\t${1}\n\t\\end{equation*}\n# Unnumbered Equation\nsnippet \\\n\t\\[\n\t\t${1}\n\t\\]\n# Enumerate\nsnippet enum\n\t\\begin{enumerate}\n\t\t\\item ${1}\n\t\\end{enumerate}\n# Itemize\nsnippet itemize\n\t\\begin{itemize}\n\t\t\\item ${1}\n\t\\end{itemize}\n# Description\nsnippet desc\n\t\\begin{description}\n\t\t\\item[${1}] ${2}\n\t\\end{description}\n# Matrix\nsnippet mat\n\t\\begin{${1:p/b/v/V/B/small}matrix}\n\t\t${2}\n\t\\end{$1matrix}\n# Cases\nsnippet cas\n\t\\begin{cases}\n\t\t${1:equation}, &\\text{ if }${2:case}\\\\\n\t\t${3}\n\t\\end{cases}\n# Split\nsnippet spl\n\t\\begin{split}\n\t\t${1}\n\t\\end{split}\n# Part\nsnippet part\n\t\\part{${1:part name}} % (fold)\n\t\\label{prt:${2:$1}}\n\t${3}\n\t% part $2 (end)\n# Chapter\nsnippet cha\n\t\\chapter{${1:chapter name}}\n\t\\label{cha:${2:$1}}\n\t${3}\n# Section\nsnippet sec\n\t\\section{${1:section name}}\n\t\\label{sec:${2:$1}}\n\t${3}\n# Sub Section\nsnippet sub\n\t\\subsection{${1:subsection name}}\n\t\\label{sub:${2:$1}}\n\t${3}\n# Sub Sub Section\nsnippet subs\n\t\\subsubsection{${1:subsubsection name}}\n\t\\label{ssub:${2:$1}}\n\t${3}\n# Paragraph\nsnippet par\n\t\\paragraph{${1:paragraph name}}\n\t\\label{par:${2:$1}}\n\t${3}\n# Sub Paragraph\nsnippet subp\n\t\\subparagraph{${1:subparagraph name}}\n\t\\label{subp:${2:$1}}\n\t${3}\n#References\nsnippet itd\n\t\\item[${1:description}] ${2:item}\nsnippet figure\n\t${1:Figure}~\\ref{${2:fig:}}${3}\nsnippet table\n\t${1:Table}~\\ref{${2:tab:}}${3}\nsnippet listing\n\t${1:Listing}~\\ref{${2:list}}${3}\nsnippet section\n\t${1:Section}~\\ref{${2:sec:}}${3}\nsnippet page\n\t${1:page}~\\pageref{${2}}${3}\nsnippet index\n\t\\index{${1:index}}${2}\n#Citations\nsnippet cite\n\t\\cite[${1}]{${2}}${3}\nsnippet fcite\n\t\\footcite[${1}]{${2}}${3}\n#Formating text: italic, bold, underline, small capital, emphase ..\nsnippet it\n\t\\textit{${1:text}}\nsnippet bf\n\t\\textbf{${1:text}}\nsnippet under\n\t\\underline{${1:text}}\nsnippet emp\n\t\\emph{${1:text}}\nsnippet sc\n\t\\textsc{${1:text}}\n#Choosing font\nsnippet sf\n\t\\textsf{${1:text}}\nsnippet rm\n\t\\textrm{${1:text}}\nsnippet tt\n\t\\texttt{${1:text}}\n#misc\nsnippet ft\n\t\\footnote{${1:text}}\nsnippet fig\n\t\\begin{figure}\n\t\\begin{center}\n\t    \\includegraphics[scale=${1}]{Figures/${2}}\n\t\\end{center}\n\t\\caption{${3}}\n\t\\label{fig:${4}}\n\t\\end{figure}\nsnippet tikz\n\t\\begin{figure}\n\t\\begin{center}\n\t\\begin{tikzpicture}[scale=${1:1}]\n\t\t${2}\n\t\\end{tikzpicture}\n\t\\end{center}\n\t\\caption{${3}}\n\t\\label{fig:${4}}\n\t\\end{figure}\n#math\nsnippet stackrel\n\t\\stackrel{${1:above}}{${2:below}} ${3}\nsnippet frac\n\t\\frac{${1:num}}{${2:denom}}\nsnippet sum\n\t\\sum^{${1:n}}_{${2:i=1}}{${3}}";
});

define("ace/snippets/tex", [
  "require",
  "exports",
  "module",
  "ace/snippets/tex.snippets"
], function (require, exports, module) {
  "use strict";
  exports.snippetText = require("./tex.snippets");
  exports.scope = "tex";
});
(function () {
  window.require(["ace/snippets/tex"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
