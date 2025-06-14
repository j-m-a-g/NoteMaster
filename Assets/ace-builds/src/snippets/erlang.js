define("ace/snippets/erlang.snippets", [
  "require",
  "exports",
  "module"
], function (require, exports, module) {
  module.exports =
    "# module and export all\nsnippet mod\n\t-module(${1:`Filename('', 'my')`}).\n\t\n\t-compile([export_all]).\n\t\n\tstart() ->\n\t    ${2}\n\t\n\tstop() ->\n\t    ok.\n# define directive\nsnippet def\n\t-define(${1:macro}, ${2:body}).${3}\n# export directive\nsnippet exp\n\t-export([${1:function}/${2:arity}]).\n# include directive\nsnippet inc\n\t-include(\"${1:file}\").${2}\n# behavior directive\nsnippet beh\n\t-behaviour(${1:behaviour}).${2}\n# if expression\nsnippet if\n\tif\n\t    ${1:guard} ->\n\t        ${2:body}\n\tend\n# case expression\nsnippet case\n\tcase ${1:expression} of\n\t    ${2:pattern} ->\n\t        ${3:body};\n\tend\n# anonymous function\nsnippet fun\n\tfun (${1:Parameters}) -> ${2:body} end${3}\n# try...catch\nsnippet try\n\ttry\n\t    ${1}\n\tcatch\n\t    ${2:_:_} -> ${3:got_some_exception}\n\tend\n# record directive\nsnippet rec\n\t-record(${1:record}, {\n\t    ${2:field}=${3:value}}).${4}\n# todo comment\nsnippet todo\n\t%% TODO: ${1}\n## Snippets below (starting with '%') are in EDoc format.\n## See http://www.erlang.org/doc/apps/edoc/chapter.html#id56887 for more details\n# doc comment\nsnippet %d\n\t%% @doc ${1}\n# end of doc comment\nsnippet %e\n\t%% @end\n# specification comment\nsnippet %s\n\t%% @spec ${1}\n# private function marker\nsnippet %p\n\t%% @private\n# OTP application\nsnippet application\n\t-module(${1:`Filename('', 'my')`}).\n\n\t-behaviour(application).\n\n\t-export([start/2, stop/1]).\n\n\tstart(_Type, _StartArgs) ->\n\t    case ${2:root_supervisor}:start_link() of\n\t        {ok, Pid} ->\n\t            {ok, Pid};\n\t        Other ->\n\t\t          {error, Other}\n\t    end.\n\n\tstop(_State) ->\n\t    ok.\t\n# OTP supervisor\nsnippet supervisor\n\t-module(${1:`Filename('', 'my')`}).\n\n\t-behaviour(supervisor).\n\n\t%% API\n\t-export([start_link/0]).\n\n\t%% Supervisor callbacks\n\t-export([init/1]).\n\n\t-define(SERVER, ?MODULE).\n\n\tstart_link() ->\n\t    supervisor:start_link({local, ?SERVER}, ?MODULE, []).\n\n\tinit([]) ->\n\t    Server = {${2:my_server}, {$2, start_link, []},\n\t      permanent, 2000, worker, [$2]},\n\t    Children = [Server],\n\t    RestartStrategy = {one_for_one, 0, 1},\n\t    {ok, {RestartStrategy, Children}}.\n# OTP gen_server\nsnippet gen_server\n\t-module(${1:`Filename('', 'my')`}).\n\n\t-behaviour(gen_server).\n\n\t%% API\n\t-export([\n\t         start_link/0\n\t        ]).\n\n\t%% gen_server callbacks\n\t-export([init/1, handle_call/3, handle_cast/2, handle_info/2,\n\t         terminate/2, code_change/3]).\n\n\t-define(SERVER, ?MODULE).\n\n\t-record(state, {}).\n\n\t%%%===================================================================\n\t%%% API\n\t%%%===================================================================\n\n\tstart_link() ->\n\t    gen_server:start_link({local, ?SERVER}, ?MODULE, [], []).\n\n\t%%%===================================================================\n\t%%% gen_server callbacks\n\t%%%===================================================================\n\n\tinit([]) ->\n\t    {ok, #state{}}.\n\n\thandle_call(_Request, _From, State) ->\n\t    Reply = ok,\n\t    {reply, Reply, State}.\n\n\thandle_cast(_Msg, State) ->\n\t    {noreply, State}.\n\n\thandle_info(_Info, State) ->\n\t    {noreply, State}.\n\n\tterminate(_Reason, _State) ->\n\t    ok.\n\n\tcode_change(_OldVsn, State, _Extra) ->\n\t    {ok, State}.\n\n\t%%%===================================================================\n\t%%% Internal functions\n\t%%%===================================================================\n\n";
});

define("ace/snippets/erlang", [
  "require",
  "exports",
  "module",
  "ace/snippets/erlang.snippets"
], function (require, exports, module) {
  "use strict";
  exports.snippetText = require("./erlang.snippets");
  exports.scope = "erlang";
});
(function () {
  window.require(["ace/snippets/erlang"], function (m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
