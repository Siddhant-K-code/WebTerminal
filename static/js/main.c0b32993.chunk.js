(this.webpackJsonpwebterminal=this.webpackJsonpwebterminal||[]).push([[0],{11:function(e,t,n){e.exports=n(31)},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),r=n(8),i=n.n(r),a=n(2),h=n(3),s=n(10),l=n(9),u=n(5),f=n.n(u),d=(n(16),n(28),n(6)),m=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],p=["[[b;#ff3300;]Not Completed]","[[b;#44D544;]Completed]"],b=["lterm"],y=[],v=[],w=6,g={lterm:"0",Documents:"1",Downloads:"2",Music:"3",Pictures:"4",Videos:"5"};v[0]=["hello.txt"],y[0]=["Documents","Downloads","Music","Pictures","Videos"],y[1]=[],v[1]=[],y[2]=[],v[2]=[],y[3]=[],v[3]=[],y[4]=[],v[4]=[],y[5]=[],v[5]=[];var D=n(4),F=n.n(D),k=new(function(){function e(){Object(a.a)(this,e),this.path="/",this.fs=[{level:0,root:"/",contents:["Documents","Downloads"]}],this.level=0}return Object(h.a)(e,[{key:"getPath",value:function(){return F.a.find(this.fs,{level:this.level}).contents}},{key:"changeDir",value:function(e){var t=F.a.find(this.fs,{level:this.level});if(!F.a.includes(t.contents,e))return"directoy not present";var n={level:this.level+1,root:e,contents:[]};return this.level++,this.fs.push(n),n.contents}}]),e}()),T=function(e){var t=function(e){return{help:function(){e.echo("Hello"),e.echo("\nList of commands available:"),e.echo("===========================\n"),e.echo("> [[b;#44D544;]about]"),e.echo("> [[b;#44D544;]contribute]"),e.echo("> echo ----------- "+p[m[0]]),e.echo("> pwd ------------ "+p[m[1]]),e.echo("> ls ------------- "+p[m[2]]),e.echo("> cd ------------- "+p[m[3]]),e.echo("> cd .. ---------- "+p[m[4]]),e.echo("> cd ~ ----------- "+p[m[5]]),e.echo("> cat ------------ "+p[m[6]]),e.echo("> touch ---------- "+p[m[7]]),e.echo("> cp ------------- "+p[m[8]]),e.echo("> rm ------------- "+p[m[9]]),e.echo("> mkdir ---------- "+p[m[10]]),e.echo("> clear ---------- "+p[m[11]]),e.echo("> uname ---------- "+p[m[12]]),e.echo("> date  ---------- "+p[m[13]]),e.echo("> ifconfig ------- "+p[m[14]]),e.echo("> tty ------------ "+p[m[15]]),e.echo("> history -------- "+p[m[16]]),e.echo("\n")},echo:function(t){m[0]=1,e.echo(t+"\n"),e.echo("> The [[b;#ff3300;]echo] command prints back your arguments."),e.echo("> Type [[b;#ff3300;]help] and check your first task is completed."),e.echo("> Now type [[b;#ff3300;]pwd] to continue.")},mkdir:function(t){m[10]=1,e.echo("> The [[b;#ff3300;]mkdir] command (Make Directory) creates a directory if it doesn\u2019t already exist."),e.echo("> Type [[b;#ff3300;]ls] to see the new directory created.");var n=g[b[b.length-1]];g[t]=w,y[n].push(t),y[w]=[],v[w]=[],n=0,w++},ls:function(){m[2]=1;var e=g[b[b.length-1]],t=("[[b;#44D544;]"+y[e]+"],"+v[e]).replace(/,/g,"        ").split();this.echo(t),e=0,this.echo("> The [[b;#ff3300;]ls] command will list directories and files in the current directory by default,\nhowever you can specify which path you want to list the directories of."),this.echo("> Now type [[b;#ff3300;]cd Documents] to enter a sub directory.")}}}(e),n=function(e){return{ls:function(){e.echo(k.getPath())},cd:function(t){e.echo(k.changeDir(t))}}}(e);return Object(d.a)(Object(d.a)({},t),n)},j={prompt:"[[b;#44D544;]imabp@localhost:~$] ",greetings:'All rights reserved to the owner \xa9 [[b;#FFFFFF;]imabp]\n\nThis is part of project under [[b;#FFFF00;]Ninja Developers ] \n We [[b;#FF0000;]\u2764 ]  Open Source \nIf you want to contribute, you can at github @imabp. \n Type  [[b;#FFFFFF;]help] to get started \n> The shell is basically a program that takes your commands from the keyboard and sends them to the operating system to perform.\n> The [[b;#44D544;]Terminal] is a program that launches a shell for you.\n> Type [[b;#ff3300;]help] to see the list of [[b;#44D544;]commands/tasks].\n\n> Start with [[b;#ff3300;]echo "any string"].\n',onBlur:function(){return!1}},O=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.$el=f()(this.el),this.$el.terminal(T(this.$el),j)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{style:{width:"100%"},ref:function(t){return e.el=t}})}}]),n}(c.a.Component);var E=function(){return c.a.createElement("div",null,c.a.createElement(O,null))};n(30);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.c0b32993.chunk.js.map