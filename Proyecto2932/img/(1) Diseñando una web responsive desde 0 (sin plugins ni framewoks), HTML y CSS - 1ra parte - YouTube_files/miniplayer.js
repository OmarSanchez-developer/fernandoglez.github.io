(function(g){var window=this;var B5=function(a){g.lD.call(this,{B:"div",G:"ytp-miniplayer-ui"});this.player=a;this.H=!1;this.F=this.A=this.l=void 0;this.K(a,"minimized",this.GJ);this.K(a,"onStateChange",this.FM)},C5=function(a){g.aL.call(this,a);
this.g=new B5(this.player);this.g.hide();g.NK(this.player,this.g.element,4);a.app.F.g&&(this.load(),g.I(a.getRootNode(),"ytp-player-minimized",!0))};
g.t(B5,g.lD);g.h=B5.prototype;
g.h.show=function(){this.l=new g.vo(this.PF,null,this);this.l.start();if(!this.H){this.D=new g.xW(this.player,this);g.B(this,this.D);g.NK(this.player,this.D.element,4);this.D.A=.6;this.P=new g.AV(this.player);g.B(this,this.P);this.C=new g.W({B:"div",G:"ytp-miniplayer-scrim"});g.B(this,this.C);this.C.g(this.element);this.K(this.C.element,"click",this.iz);var a=new g.W({B:"button",W:["ytp-miniplayer-close-button","ytp-button"],L:{"aria-label":"Cerrar"},J:[g.RP()]});g.B(this,a);a.g(this.C.element);this.K(a.element,
"click",this.Hx);this.u=new g.W({B:"div",G:"ytp-miniplayer-controls"});g.B(this,this.u);this.u.g(this.C.element);this.K(this.u.element,"click",this.iz);var b=new g.W({B:"div",G:"ytp-miniplayer-button-container"});g.B(this,b);b.g(this.u.element);a=new g.W({B:"div",G:"ytp-miniplayer-play-button-container"});g.B(this,a);a.g(this.u.element);var c=new g.W({B:"div",G:"ytp-miniplayer-button-container"});g.B(this,c);c.g(this.u.element);this.M=new g.CT(this.player,this,!1);g.B(this,this.M);this.M.g(b.element);
b=new g.zT(this.player,this);g.B(this,b);b.g(a.element);this.I=new g.CT(this.player,this,!0);g.B(this,this.I);this.I.g(c.element);this.F=new g.VU(this.player,this);g.B(this,this.F);this.F.g(this.C.element);this.A=new g.IT(this.player,this);g.B(this,this.A);g.NK(this.player,this.A.element,4);this.o=new g.W({B:"div",G:"ytp-miniplayer-buttons"});g.B(this,this.o);g.NK(this.player,this.o.element,4);this.o.hide();a=new g.W({B:"button",W:["ytp-miniplayer-close-button","ytp-button"],L:{"aria-label":"Cerrar"},
J:[g.RP()]});g.B(this,a);a.g(this.o.element);this.K(a.element,"click",this.Hx);a=new g.W({B:"button",W:["ytp-miniplayer-replay-button","ytp-button"],L:{"aria-label":"Cerrar"},J:[g.dQ()]});g.B(this,a);a.g(this.o.element);this.K(a.element,"click",this.CK);this.K(this.player,"presentingplayerstatechange",this.QF);this.K(this.player,"appresize",this.Ua);this.K(this.player,"fullscreentoggled",this.Ua);this.Ua();this.H=!0}0!=this.player.getPlayerState()&&g.lD.prototype.show.call(this);this.A.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.l&&(this.l.dispose(),this.l=void 0);g.lD.prototype.hide.call(this);this.player.app.F.g||(this.H&&this.A.hide(),this.player.loadModule("annotations_module"))};
g.h.U=function(){this.l&&(this.l.dispose(),this.l=void 0);g.lD.prototype.U.call(this)};
g.h.Hx=function(){this.player.stopVideo();this.player.la("onCloseMiniplayer")};
g.h.CK=function(){this.player.playVideo()};
g.h.iz=function(a){if(a.target==this.C.element||a.target==this.u.element)g.O(g.X(this.player).experiments,"kevlar_miniplayer_scrim_pause")?2==this.player.getPlayerState()?this.player.playVideo():this.player.pauseVideo():this.player.la("onExpandMiniplayer")};
g.h.GJ=function(){g.I(this.player.getRootNode(),"ytp-player-minimized",this.player.app.F.g);this.player.app.F.g&&0==this.player.getPlayerState()?this.o.show():this.o.hide()};
g.h.PF=function(){this.A.Lc();this.F.Lc();this.l&&this.l.start()};
g.h.QF=function(a){g.S(a.state,32)&&this.D.hide()};
g.h.Ua=function(){var a=this.A,b=g.zK(this.player).getPlayerSize().width;a.Ca=0;a.A=b;a.D=!1;g.KT(a)};
g.h.FM=function(a){this.player.app.F.g&&(0==a?(this.hide(),this.o.show()):(this.show(),this.o.hide()))};
g.h.Xa=function(){return this.D};
g.h.ec=function(){return!1};
g.h.ug=function(){return!1};
g.h.hi=function(){return!1};
g.h.Ls=function(){};
g.h.Tg=function(){};
g.h.yj=function(){};
g.h.mn=function(){return null};
g.h.sr=function(){return new g.oh(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.Jk=function(a,b,c,d,e){var f=0,k=d=0,l=g.Th(a);if(b){c=g.jo(b,"ytp-prev-button")||g.jo(b,"ytp-next-button");var m=g.jo(b,"ytp-play-button");c?f=k=12:m&&(b=g.Qh(b,this.element),k=b.x,f=b.y-12)}else k=c-l.width/2,d=25+(e||0);b=g.zK(this.player).getPlayerSize().width;e=f+(e||0);k=g.pd(k,0,b-l.width);e?(a.style.top=e+"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=k+"px"};
g.h.showControls=function(){};
g.h.tr=function(){};
g.h.Oh=function(){};g.t(C5,g.aL);C5.prototype.init=function(){};
C5.prototype.load=function(){this.player.hideControls();this.g.show()};
C5.prototype.unload=function(){this.player.showControls();this.g.hide()};g.wV.miniplayer=C5;})(_yt_player);
