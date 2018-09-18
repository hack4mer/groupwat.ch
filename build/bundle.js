var GWatch=function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/build/",i(i.s=2)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();t.Utilities=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.logging=!1}return n(e,null,[{key:"log",value:function(){this.logging&&console.log("GWatch: ",[].slice.call(arguments).join(","))}},{key:"notifyError",value:function(e){console.error(e+", See https://groupwat.ch/")}}]),e}()},function(e,t){e.exports=$},function(e,t,i){"use strict";var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=i(3),r=c(i(1)),s=i(6),l=i(0),a=i(7);c(i(8));function c(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config={container:t.container||!1,src:t.src||!1,videoCall:t.videoCall||!1,devmode:t.devmode||!1,socket_server:t.socket_server||!1,localSource:t.localSource||!1,onSocketConnected:t.onSocketConnected||function(){console.log("socket connected")},onSocketError:t.onSocketError||function(){l.Utilities.notifyError("socket connection failed")},mainPlayerId:"GWatch_mainPlayer",mainPlayerSrcId:"GWatch_mainPlayerSrc",containerClass:"GWatch_container"},this.config.container?this.config.socket_server?(this.containerEle=document.getElementById(t.container),this.video=null,this.showVideoContainer(),this.initializeUIElements(),l.Utilities.config=this.config,l.Utilities.logging=this.config.devmode,l.Utilities.session_identifier=this.generateConnectionId(),l.Utilities.onSocketConnected=this.config.onSocketConnected,l.Utilities.onSocketError=this.config.onSocketError,l.Utilities.mSocket=new s.Socket(this.config.socket_server),l.Utilities.websocket=l.Utilities.mSocket.websocket,this.config.videoCall?(this.videoCallPanelRemoteStream=[],this.initializeVideoCallUI(),this.webRTC=new a.WebRTC):document.getElementById("GWatch_playerContainer").style.width="100%",this.enablePanelResizer(),this.config.src&&this.changePlayerSource(this.config.src),this.config.localSource&&this.initializeLocalFileSelector()):l.Utilities.notifyError("GWatch: Please specify the socket_server option."):l.Utilities.notifyError("GWatch: Please specify the container option.")}return n(e,[{key:"initializeUIElements",value:function(){this.containerEle.classList.add(this.config.containerClass),this.mainVideoPlayerContainer=document.createElement("div"),this.mainVideoPlayerContainer.setAttribute("id","GWatch_playerContainer"),this.mainVideoPlayer=document.createElement("video"),this.mainVideoPlayer.setAttribute("controls",!0),this.mainVideoPlayer.setAttribute("id",this.config.mainPlayerId),this.mainVideoPlayer.setAttribute("class","video-js"),this.mainVideoPlayer.setAttribute("preload","auto"),this.mainVideoPlayerSrc=document.createElement("source"),this.mainVideoPlayerSrc.setAttribute("class",this.config.mainVideoPlayerSrcId),this.mainVideoPlayerSrc.setAttribute("src",""),this.mainVideoPlayerSrc.setAttribute("type","video/mp4"),this.mainVideoPlayerP=document.createElement("p"),this.mainVideoPlayerP.setAttribute("class","vjs-no-js"),this.mainVideoPlayerP.innerHTML='To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>',this.mainVideoPlayer.appendChild(this.mainVideoPlayerSrc),this.mainVideoPlayer.appendChild(this.mainVideoPlayerP),this.mainVideoPlayerContainer.appendChild(this.mainVideoPlayer),this.containerEle.appendChild(this.mainVideoPlayerContainer)}},{key:"initializeVideoCallUI",value:function(){this.videoCallPanel=document.createElement("div"),this.videoCallPanel.setAttribute("id","GWatch_camContainer"),this.videoCallPanelResizer=document.createElement("div"),this.videoCallPanelResizer.setAttribute("id","GWatch_panResizer"),this.videoCallPanelStartBtn=document.createElement("button"),this.videoCallPanelStartBtn.onclick=function(){this.webRTC.startVideoCall(!0)}.bind(this),this.videoCallPanelStartBtn.innerHTML="Start Video",this.videoCallPanelLocalStream=this.createVideoStreamHolder({id:"localVideo",autoplay:""}),this.videoCallPanelLocalStream.muted="muted",this.videoCallPanelRemoteStream[0]=this.createVideoStreamHolder({id:"remoteVideo",autoplay:""}),this.chatBox=document.createElement("div"),this.chatBoxInput=document.createElement("input"),this.chatBoxInput.setAttribute("type","text"),this.chatBox.appendChild(this.chatBoxInput),this.chatBoxPaper=document.createElement("p"),this.chatBoxPaper.setAttribute("id","GWatch_chatBoxPaper"),this.videoCallPanel.appendChild(this.videoCallPanelStartBtn),this.videoCallPanel.appendChild(this.videoCallPanelResizer),this.videoCallPanel.appendChild(this.videoCallPanelLocalStream),this.videoCallPanel.appendChild(this.videoCallPanelRemoteStream[0]),this.containerEle.appendChild(this.videoCallPanel)}},{key:"initializeLocalFileSelector",value:function(){this.localFileSelector=document.createElement("input"),this.localFileSelector.setAttribute("type","file"),this.localFileSelector.setAttribute("class","GWatch_localFileSeletor"),this.localFileSelector.onchange=function(e){this.onSrcSelected(e)}.bind(this),this.containerEle.appendChild(this.localFileSelector)}},{key:"createVideoStreamHolder",value:function(e){var t=document.createElement("video");for(var i in t.classList.add("mirrored_video"),e)t.setAttribute(i,e[i]);return t}},{key:"enablePanelResizer",value:function(){this.isResizing=!1,this.lastDownX=0;var e=(0,r.default)("#"+l.Utilities.config.container),t=(0,r.default)("#GWatch_playerContainer","#"+l.Utilities.config.container),i=(0,r.default)("#GWatch_camContainer","#"+l.Utilities.config.container);(0,r.default)("#GWatch_panResizer","#"+l.Utilities.config.container).on("mousedown",function(e){this.isResizing=!0,this.lastDownX=e.clientX}.bind(this)),(0,r.default)(document).on("mousemove",function(n){if(this.isResizing){var o=n.clientX,r=e.width()-o;o>e.width()||(t.css("width",o),i.css("width",r))}}.bind(this)).on("mouseup",function(e){this.isResizing=!1}.bind(this))}},{key:"onSrcSelected",value:function(e){var t=e.target.files[0],i=window.URL.createObjectURL(t);l.Utilities.log("New source file selected"),this.changePlayerSource(i)}},{key:"changePlayerSource",value:function(e){l.Utilities.log("Changing player's source"),this.containerEle.getElementsByClassName(this.config.mainVideoPlayerSrcId)[0].setAttribute("src",e),void 0===l.Utilities.player?(l.Utilities.video=new o.VideoPlayer,l.Utilities.player=l.Utilities.video.player):(l.Utilities.player.src({type:"video/mp4",src:e}),l.Utilities.player.load())}},{key:"showVideoContainer",value:function(){}},{key:"generateConnectionId",value:function(){var e=new Date;return btoa(unescape(encodeURIComponent(e.getTime()+Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)))).slice(0,-2)}}]),e}();e.exports=d},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VideoPlayer=void 0;var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=l(i(4)),r=i(0),s=l(i(5));function l(e){return e&&e.__esModule?e:{default:e}}t.VideoPlayer=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);this.fullscreenmode=!1,this.lastSeekValue=0,this.videoSeeking=0,this.notifyPeers=!0,this.player=(0,o.default)(r.Utilities.config.mainPlayerId,{controlBar:{fullscreenToggle:!1,allowFullscreen:!1}},this.onPlayerReady.bind(this)),this.containerEle=document.getElementById(r.Utilities.config.container),this.containerEle.getElementsByClassName("vjs-tech")[0].classList.add("vjs-modal-dialog"),this.addAllControlBtns(),r.Utilities.config.videoCall&&["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","msfullscreenchange"].forEach(function(e){return document.addEventListener(e,t.fullScreenChanged.bind(t),!1)})}return n(e,[{key:"addAllControlBtns",value:function(){this.subtitleBtn=this.addNewButton({id:"addSubsBtn",icon:"icon-speech",title:"Add subtitle"},this.onAddSubBtnClicked.bind(this)),this.fullScreenBtn=this.addNewButton({id:"fullScreenToogleBtn",icon:"icon-size-fullscreen",title:"Toggle fullscreen mode"},this.toggleFullScreen.bind(this))}},{key:"fullScreenChanged",value:function(e){document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen||this.switchedOffFullscreen()}},{key:"toggleFullScreen",value:function(){this.fullscreenmode?this.exitFullscreenMode():this.enterFullScreenMode()}},{key:"exitFullscreenMode",value:function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen(),this.switchedOffFullscreen()}},{key:"enterFullScreenMode",value:function(){this.containerEle.requestFullscreen?(this.containerEle.requestFullscreen(),this.switchedOnFullscreen()):this.containerEle.mozRequestFullScreen?(this.containerEle.mozRequestFullScreen(),this.switchedOnFullscreen()):this.containerEle.webkitRequestFullscreen&&(this.containerEle.webkitRequestFullscreen(),this.switchedOnFullscreen())}},{key:"hideLocalFileSelector",value:function(){this.containerEle.getElementsByClassName("GWatch_localFileSeletor")[0].style.display="none"}},{key:"showLocalFileSelector",value:function(){this.containerEle.getElementsByClassName("GWatch_localFileSeletor")[0].style.display="block"}},{key:"switchedOffFullscreen",value:function(){this.fullscreenmode=!1,this.containerEle.classList.remove("fullscreen_vidjs"),r.Utilities.config.localSource&&this.showLocalFileSelector(),r.Utilities.config.videoCall&&(document.getElementById("GWatch_playerContainer").style.width="80%",document.getElementById("GWatch_camContainer").style.width="20%")}},{key:"switchedOnFullscreen",value:function(){this.fullscreenmode=!0,this.containerEle.classList.add("fullscreen_vidjs"),r.Utilities.config.localSource&&this.hideLocalFileSelector(),r.Utilities.config.videoCall&&(document.getElementById("GWatch_playerContainer").style.width="80%",document.getElementById("GWatch_camContainer").style.width="20%")}},{key:"addNewButton",value:function(e,t){this.player;var i,n,o=document.createElement("div"),r=document.createElement("a");return o.id=e.id,o.className="vjs-custom-icon vjs-control",r.innerHTML="<i title='"+e.title+"' class='icon "+e.icon+" line-height' aria-hidden='true'></i>",o.appendChild(r),i=this.containerEle.getElementsByClassName("vjs-control-bar")[0],n=this.containerEle.getElementsByClassName("vjs-fullscreen-control")[0],i.insertBefore(o,n),void 0!==t&&(o.onclick=t),o}},{key:"onAddSubBtnClicked",value:function(){var e=$("<input/>").attr("type","file").attr("accept",".vtt,.srt");e.change(this.onSubChanged.bind(this)),e.trigger("click")}},{key:"onSubChanged",value:function(e){var t,i=e.target.files[0],n=i.name.slice(-3);"srt"==n?this.setSrtSubtitle(i):"vtt"==n?(t=window.URL.createObjectURL(i),this.setSubtitle(t)):r.Utilities.notifyError("Only .srt and .vtt files are supported as subtitles")}},{key:"setSubtitle",value:function(e){for(var t=this.player.remoteTextTracks(),i=t.length;i--;)this.player.removeRemoteTextTrack(t[i]);this.player.addRemoteTextTrack({src:e,kind:"captions",label:"captions on"}),this.player.remoteTextTracks()[0].mode="showing"}},{key:"setSrtSubtitle",value:function(e){var t=this;new s.default(e).getURL().then(function(e){t.setSubtitle(e)}).catch(function(e){r.Utilities.notifyError("Selected .srt file seems to be invalid"),console.error(e)})}},{key:"onPlayerReady",value:function(){r.Utilities.log("Your player is ready!"),this.player.on("seeking",function(e){this.videoSeeking=!0,r.Utilities.log("Video seeking: "+this.player.currentTime())}.bind(this)),this.player.on("pause",function(e){var t={name:r.Utilities.session_identifier,key:"pause",value:!0};this.notifyPeers&&(r.Utilities.log("Video paused","Sending socket message"),r.Utilities.logging&&console.log(t),r.Utilities.websocket.send(JSON.stringify(t))),this.notifyPeers=!0}.bind(this)),this.player.on("play",function(){if(!this.videoSeeking){var e={name:r.Utilities.session_identifier,key:"play",value:!0};this.notifyPeers&&(r.Utilities.log("Video played","Sending socket message"),r.Utilities.logging&&console.log(e),r.Utilities.websocket.send(JSON.stringify(e))),this.notifyPeers=!0}}.bind(this)),this.player.on("seeked",function(e){this.videoSeeking=!1;var t=this.player.currentTime();if(t!=this.lastSeekValue){r.Utilities.log("Video seeked");var i={name:r.Utilities.session_identifier,key:"seek_value",value:{time:t,play:!this.player.paused()}};this.lastSeekValue=t,this.notifyPeers&&(r.Utilities.log("Sending seeked singal message"),r.Utilities.logging&&console.log(i),r.Utilities.websocket.send(JSON.stringify(i))),this.notifyPeers=!0}}.bind(this))}}]),e}()},function(e,t){e.exports=videojs},function(e,t,i){"use strict";i.r(t);class n{constructor(e){this.resource=e}blobToBuffer(){return new Promise((e,t)=>{const i=new FileReader;i.addEventListener("loadend",t=>{const i=t.target.result;e(new Uint8Array(i))}),i.addEventListener("error",()=>t("Error while reading the Blob object")),i.readAsArrayBuffer(this.resource)})}static blobToString(e,t,i){const n=new FileReader;n.addEventListener("loadend",e=>{const i=e.target.result;t(i)}),n.addEventListener("error",()=>i()),n.readAsText(e)}static toVTT(e){return e.replace(/\{\\([ibu])\}/g,"</$1>").replace(/\{\\([ibu])1\}/g,"<$1>").replace(/\{([ibu])\}/g,"<$1>").replace(/\{\/([ibu])\}/g,"</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g,"$1.$2").concat("\r\n\r\n")}static toTypedArray(e){const t=[];return e.split("").forEach(e=>{t.push(parseInt(e.charCodeAt(),16))}),Uint8Array.from(t)}getURL(){return new Promise((e,t)=>this.resource instanceof Blob?FileReader?TextDecoder?n.blobToString(this.resource,t=>{const i="WEBVTT FILE\r\n\r\n".concat(n.toVTT(t)),o=new Blob([i],{type:"text/vtt"});return this.objectURL=URL.createObjectURL(o),e(this.objectURL)},()=>{this.blobToBuffer().then(t=>{const i=new TextDecoder("utf-8").decode(t),o="WEBVTT FILE\r\n\r\n".concat(n.toVTT(i)),r=new Blob([o],{type:"text/vtt"});return this.objectURL=URL.createObjectURL(r),e(this.objectURL)})}):t("No TextDecoder constructor found"):t("No FileReader constructor found"):t("Expecting resource to be a Blob but something else found."))}release(){URL.createObjectURL(this.objectURL)}}window.WebVTTConverter=n,t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Socket=void 0;!function(e){e&&e.__esModule}(i(1));var n=i(0);var o=t.Socket=function(e){this.wsUri=e,this.websocket=new WebSocket(this.wsUri),this.websocket.onopen=n.Utilities.onSocketConnected.bind(this),this.websocket.onmessage=this.onMessage,this.websocket.onerror=n.Utilities.onSocketError.bind(this),this.websocket.onclose=n.Utilities.onSocketError.bind(this)};o.prototype.onMessage=function(e){if(n.Utilities.video){var t=JSON.parse(e.data);n.Utilities.video.notifyPeers=!1,n.Utilities.log("Socket message received:",n.Utilities.video.notifyPeers),n.Utilities.logging&&console.log(t),"seek_value"==t.key?(n.Utilities.player.currentTime(t.value.time),t.value.play&&n.Utilities.player.play()):"pause"!=t.key||n.Utilities.player.paused()?"play"==t.key&&n.Utilities.player.paused()?n.Utilities.player.play():n.Utilities.video.notifyPeers=!0:n.Utilities.player.pause()}},o.prototype.onError=n.Utilities.onSocketError},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WebRTC=void 0;var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=i(0);t.WebRTC=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.peerConnectionConfig={iceServers:[{urls:"stun:stun.stunprotocol.org:3478"},{urls:"stun:stun.l.google.com:19302"}]},this.uuid=this.createUUID(),this.localVideo=document.getElementById("localVideo"),this.remoteVideo=document.getElementById("remoteVideo"),this.serverConnection=o.Utilities.websocket,this.serverConnection.onmessage=this.gotMessageFromServer.bind(this),this.constraints={video:!0,audio:!0},navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia(this.constraints).then(this.getUserMediaSuccess.bind(this)).catch(this.errorHandler):alert("Your browser does not support getUserMedia API")}return n(e,[{key:"getUserMediaSuccess",value:function(e){this.localStream=e,this.localVideo.srcObject=e}},{key:"startVideoCall",value:function(e){this.peerConnection=new RTCPeerConnection(this.peerConnectionConfig),this.peerConnection.onicecandidate=this.gotIceCandidate.bind(this),this.peerConnection.ontrack=this.gotRemoteStream.bind(this),this.peerConnection.addStream(this.localStream),e&&this.peerConnection.createOffer().then(this.createdDescription.bind(this)).catch(this.errorHandler)}},{key:"gotMessageFromServer",value:function(e){o.Utilities.mSocket.onMessage(e);var t=JSON.parse(e.data);this.peerConnection||this.startVideoCall(!1),t.sdp?this.peerConnection.setRemoteDescription(new RTCSessionDescription(t.sdp)).then(function(){"offer"==t.sdp.type&&this.peerConnection.createAnswer().then(this.createdDescription.bind(this)).catch(this.errorHandler)}.bind(this)).catch(this.errorHandler):t.ice&&(console.log(e),console.log("Adding : ",t.ice.candidate),this.peerConnection.addIceCandidate(new RTCIceCandidate(t.ice)).catch(this.errorHandler))}},{key:"gotIceCandidate",value:function(e){null!=e.candidate&&this.serverConnection.send(JSON.stringify({ice:e.candidate,uuid:this.uuid}))}},{key:"createdDescription",value:function(e){console.log("got description"),this.peerConnection.setLocalDescription(e).then(function(){this.serverConnection.send(JSON.stringify({sdp:this.peerConnection.localDescription,uuid:this.uuid}))}.bind(this)).catch(this.errorHandler)}},{key:"gotRemoteStream",value:function(e){console.log("got remote stream"),this.remoteVideo.srcObject=e.streams[0]}},{key:"errorHandler",value:function(e){console.error(e)}},{key:"createUUID",value:function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}},{key:"pauseVideoCall",value:function(){this.pauseVideo(),this.pauseAudio()}},{key:"pauseVideo",value:function(){this.localStream.getVideoTracks()[0].enabled=!1}},{key:"pauseAudio",value:function(){this.localStream.getAudioTracks()[0].enabled=!1}},{key:"resumeVideoCall",value:function(){this.resumeVideo(),this.resumeAudio()}},{key:"resumeVideo",value:function(){this.localStream.getVideoTracks()[0].enabled=!0}},{key:"resumeAudio",value:function(){this.localStream.getAudioTracks()[0].enabled=!0}}]),e}()},function(e,t){}]);