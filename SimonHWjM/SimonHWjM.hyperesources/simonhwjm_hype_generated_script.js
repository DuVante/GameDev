//	HYPE.documents["SimonHWjM"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="SimonHWjM.hyperesources",c="SimonHWjM",e="simonhwjm_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/simonhwjm_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_596","HYPE_dtl_596",!0==(null!=a&&10>a||false==!0)?"HYPE-596.full.min.js":"HYPE-596.thin.min.js"),false==!0&&(a=a||l("HYPE_w_596","HYPE_wdtl_596","HYPE-596.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"colorClicked",source:"function(hypeDocument, element, event) {\t\n\tif (window.buttonsClickable == true) {\n\t\n\t\tif (element.id == \"redDetect\") {\n\t\t\tif (window.colorSequence[window.currentElement] == \"red\") {\n\t\t\t\thypeDocument.startTimelineNamed('redBeep');\n\t\t\t\twindow.currentElement++;\n\t\t\t} else {\n\t\t\t\twindow.gameOver = true;\n\t\t\t}\n\t\t} else if (element.id == \"greenDetect\") {\n\t\t\tif (window.colorSequence[window.currentElement] == \"green\") {\n\t\t\t\thypeDocument.startTimelineNamed('greenBeep');\n\t\t\t\twindow.currentElement++;\n\t\t\t} else {\n\t\t\t\twindow.gameOver = true;\n\t\t\t}\n\t\t} else if (element.id == \"blueDetect\") {\n\t\t\tif (window.colorSequence[window.currentElement] == \"blue\") {\n\t\t\t\thypeDocument.startTimelineNamed('blueBeep');\n\t\t\t\twindow.currentElement++;\n\t\t\t} else {\n\t\t\t\twindow.gameOver = true;\n\t\t\t}\n\t\t} else if (element.id == \"yellowDetect\") {\n\t\t\tif (window.colorSequence[window.currentElement] == \"yellow\") {\n\t\t\t\thypeDocument.startTimelineNamed('yellowBeep');\n\t\t\t\twindow.currentElement++;\n\t\t\t} else {\n\t\t\t\twindow.gameOver = true;\n\t\t\t}\t\n\t\t}\n\n\t\tif (window.gameOver == true ) { \n\t\t\twindow.buttonsClickable = false;\n\t\t\thypeDocument.startTimelineNamed('gameOver');\n\t\t}\n\n\t\tif ((window.currentElement) == window.sequenceCount) {\n\t\t\twindow.currentElement = 0;\n\t\t\tdocument.getElementById(\"sequenceValue\").innerHTML = \"SCORE<br/>\" + window.sequenceCount;\n\t\t\twindow.buttonsClickable = false;\n\t\t\tif ((window.sequenceCount%5) != 0) {\n\t\t\t\twindow.sequenceCount++;\n\t\t\t\tsetTimeout(function(){ hypeDocument.startTimelineNamed('roundComplete'); }, 500);\n\t\t\t\tsetTimeout(function(){ window.playInterval = setInterval(selectColor, window.intervalSpeed); }, 1500);\n\t\t\t} else {\n\t\t\t\tvar tempString = window.sequenceCount + \" ROUNDS<br/>\";\n\t\t\t\tif (window.sequenceCount == (5 || 25 || 50 || 75 || 100)) { \n\t\t\t\t\ttempString += \"BRILLIANT!\";\n\t\t\t\t} else if (window.sequenceCount == (10 || 30 || 55 || 80)) {\n\t\t\t\t\ttempString += \"AMAZING!\";\n\t\t\t\t} else if (window.sequenceCount == (15 || 35 || 60 || 85)) {\n\t\t\t\t\ttempString += \"GENIUS!\";\n\t\t\t\t} else if (window.sequenceCount == (20 || 40 || 65 || 90)) {\n\t\t\t\t\ttempString += \"OUTSTANDING!\";\n\t\t\t\t} else if (window.sequenceCount == (25 || 45 || 70 || 95)) {\n\t\t\t\t\ttempString += \"EXTRAOURDINARY!\";\n\t\t\t\t} \n\t\t\t\tdocument.getElementById(\"badgeMessage\").innerHTML = tempString;\n\t\t\t\twindow.sequenceCount++;\n\t\t\t\tsetTimeout(function(){ hypeDocument.startTimelineNamed('showBadge'); }, 500);\n\t\t\t}\n\t\t}\n\t}\n\t\n}",identifier:"49"},{name:"initializeMain",source:"function(hypeDocument, element, event) {\t\n\twindow.selectColor = function() {\n\t\tvar color = window.colorSequence[window.currentElement];\n\t\tif (color == \"blue\") { \n\t\t\thypeDocument.startTimelineNamed('blueBeep');   \n\t\t} else if (color == \"red\") { \n\t\t\thypeDocument.startTimelineNamed('redBeep');    \n\t\t} else if (color == \"green\") { \n\t\t\thypeDocument.startTimelineNamed('greenBeep');  \n\t\t} else if (color == \"yellow\") { \n\t\t\thypeDocument.startTimelineNamed('yellowBeep'); \n\t\t}\n\t\t\n\t\tif (window.currentElement < (window.sequenceCount - 1)) {\n\t\t\twindow.currentElement++;\n\t\t} else {\n\t\t\tclearInterval(window.playInterval);\n\t\t\tlistenSequence();\n\t\t}\n\t};\n\n\twindow.listenSequence = function() {\n\t\twindow.buttonsClickable = true;\n\t\twindow.currentElement = 0;\n\t};\n\t\n\tclearInterval(window.playInterval);\n\t\n\twindow.sequenceCount = 1;\n\twindow.currentElement = 0;\n\twindow.buttonsClickable = false;\n\tvar i; \n\tvar temp1;\n\tvar temp2 = new Array();\n\tfor (i = 0; i < 100; i++) {\n\t\ttemp1 = Math.floor(Math.random()*4);\n\t\tif (temp1 == 0) { \t\ttemp2[i] = \"red\"; }\n\t\telse if (temp1 == 1) {\ttemp2[i] = \"blue\"; }\n\t\telse if (temp1 == 2) {\ttemp2[i] = \"yellow\"; }\n\t\telse if (temp1 == 3) {\ttemp2[i] = \"green\"; }\n\t}\n\twindow.colorSequence = temp2;\n\tconsole.log(\"The color sequence is \" + window.colorSequence);\n\t\n\twindow.gameOver = false;\n\twindow.buttonsClickable = false;\n\tdocument.getElementById(\"sequenceValue\").innerHTML = \"SCORE<br/>\" + window.sequenceCount;\n\twindow.playInterval = setInterval(selectColor, window.intervalSpeed);\n\t\n}",identifier:"52"},{name:"resumeGame",source:"function(hypeDocument, element, event) {\t\n\thypeDocument.startTimelineNamed('hideBadge');\n\tsetTimeout(function(){ window.playInterval = setInterval(selectColor, window.intervalSpeed); }, 1500);\n\t\n}",identifier:"97"},{name:"chooseSpeed",source:"function(hypeDocument, element, event) {\t\n\tif (element.id == \"easyButton\") {\n\t\twindow.intervalSpeed = 1000;\n\t} else {\n\t\twindow.intervalSpeed = 400;\n\t}\n\thypeDocument.showSceneNamed('main');\n\t\n}",identifier:"102"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_596(c,e,{"10":{p:1,n:"simon1.jpg",g:"5",o:true,t:"@1x"},"2":{p:2,n:"tone3.mp3",g:"29",t:"audio/mpeg"},"-2":{n:"blank.gif"},"3":{p:2,n:"tone4.mp3",g:"30",t:"audio/mpeg"},"11":{p:1,n:"simonred.jpg",g:"9",o:true,t:"@1x"},"4":{p:2,n:"gameOver.mp3",g:"58",t:"audio/mpeg"},"5":{p:2,n:"roundComplete.mp3",g:"61",t:"audio/mpeg"},"12":{p:1,n:"simongreen.jpg",g:"13",o:true,t:"@1x"},"6":{p:1,n:"splashStencil.png",g:"65",t:"@1x"},"13":{p:1,n:"simonblue.jpg",g:"11",o:true,t:"@1x"},"7":{p:1,n:"background1.png",g:"71",t:"@1x"},"-1":{n:"PIE.htc"},"0":{p:2,n:"tone1.mp3",g:"27",t:"audio/mpeg"},"8":{p:2,n:"badgeFanfare.mp3",g:"77",t:"audio/mpeg"},"1":{p:2,n:"tone2.mp3",g:"28",t:"audio/mpeg"},"9":{p:1,n:"simonyellow.jpg",g:"15",o:true,t:"@1x"}},h,[],d,[{n:"splash",o:"62",X:[0]},{n:"main",o:"1",X:[1]}],[{o:"64",p:"600px",cA:false,Y:800,Z:600,L:[],c:"#000000",bY:1,d:800,U:{},T:{"70_hover":{i:"70_hover",n:"70_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"G",e:"#FFFB00",s:"#FF2600",o:"188"},{f:"c",y:0,z:1,i:"B",e:"#FFFB00",s:"#FF2600",o:"188"},{f:"c",y:0,z:1,i:"C",e:"#FFFB00",s:"#FF2600",o:"188"},{f:"c",y:0,z:1,i:"D",e:"#FFFB00",s:"#FF2600",o:"188"},{f:"c",y:0,z:1,i:"A",e:"#FFFB00",s:"#FF2600",o:"188"},{y:1,i:"G",s:"#FFFB00",z:0,o:"188",f:"c"},{y:1,i:"B",s:"#FFFB00",z:0,o:"188",f:"c"},{y:1,i:"C",s:"#FFFB00",z:0,o:"188",f:"c"},{y:1,i:"D",s:"#FFFB00",z:0,o:"188",f:"c"},{y:1,i:"A",s:"#FFFB00",z:0,o:"188",f:"c"}],f:30},"103_hover":{i:"103_hover",n:"103_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"A",e:"#FFFB00",s:"#FF2600",o:"187"},{f:"c",y:0,z:1,i:"G",e:"#FFFB00",s:"#FF2600",o:"187"},{f:"c",y:0,z:1,i:"C",e:"#FFFB00",s:"#FF2600",o:"187"},{f:"c",y:0,z:1,i:"B",e:"#FFFB00",s:"#FF2600",o:"187"},{f:"c",y:0,z:1,i:"D",e:"#FFFB00",s:"#FF2600",o:"187"},{y:1,i:"A",s:"#FFFB00",z:0,o:"187",f:"c"},{y:1,i:"G",s:"#FFFB00",z:0,o:"187",f:"c"},{y:1,i:"C",s:"#FFFB00",z:0,o:"187",f:"c"},{y:1,i:"B",s:"#FFFB00",z:0,o:"187",f:"c"},{y:1,i:"D",s:"#FFFB00",z:0,o:"187",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:16,b:[],a:[{f:"a",y:0,z:1,i:"G",e:"#00EE00",s:"#FF0000",o:"190"},{f:"a",y:0,z:1,i:"G",e:"#00EE00",s:"#FF0000",o:"195"},{f:"a",y:0,z:1,i:"G",e:"#EED800",s:"#00EE00",o:"192"},{f:"a",y:0,z:1,i:"G",e:"#00ABF0",s:"#EED800",o:"193"},{f:"a",y:0,z:1,i:"G",e:"#FF0000",s:"#00ABF0",o:"194"},{f:"c",y:0,z:4,i:"e",e:0,s:1,o:"199"},{f:"c",y:0,z:4,i:"cY",e:"1",s:"0",o:"199"},{f:"a",y:1,z:1,i:"G",e:"#EED800",s:"#00EE00",o:"190"},{f:"a",y:1,z:1,i:"G",e:"#EED800",s:"#00EE00",o:"195"},{f:"a",y:1,z:1,i:"G",e:"#00ABF0",s:"#EED800",o:"192"},{f:"a",y:1,z:1,i:"G",e:"#FF0000",s:"#00ABF0",o:"193"},{f:"a",y:1,z:1,i:"G",e:"#00EE00",s:"#FF0000",o:"194"},{f:"a",y:2,z:1,i:"G",e:"#00ABF0",s:"#EED800",o:"190"},{f:"a",y:2,z:1,i:"G",e:"#00ABF0",s:"#EED800",o:"195"},{f:"a",y:2,z:1,i:"G",e:"#FF0000",s:"#00ABF0",o:"192"},{f:"a",y:2,z:1,i:"G",e:"#00EE00",s:"#FF0000",o:"193"},{f:"a",y:2,z:1,i:"G",e:"#EED800",s:"#00EE00",o:"194"},{f:"a",y:3,z:1,i:"G",e:"#FF0000",s:"#00ABF0",o:"190"},{f:"a",y:3,z:1,i:"G",e:"#FF0000",s:"#00ABF0",o:"195"},{f:"a",y:3,z:1,i:"G",e:"#00EE00",s:"#FF0000",o:"192"},{f:"a",y:3,z:1,i:"G",e:"#EED800",s:"#00EE00",o:"193"},{f:"a",y:3,z:1,i:"G",e:"#00ABF0",s:"#EED800",o:"194"},{y:4,i:"e",s:0,z:0,o:"199",f:"c"},{y:4,i:"cY",s:"1",z:0,o:"199",f:"c"},{f:"a",y:4,z:1,i:"G",e:"#00EE00",s:"#FF0000",o:"190"},{f:"a",y:4,z:1,i:"G",e:"#00EE00",s:"#FF0000",o:"195"},{f:"a",y:4,z:1,i:"G",e:"#EED800",s:"#00EE00",o:"192"},{f:"a",y:4,z:1,i:"G",e:"#00ABF0",s:"#EED800",o:"193"},{f:"a",y:4,z:1,i:"G",e:"#FF0000",s:"#00ABF0",o:"194"},{f:"a",y:5,z:1,i:"G",e:"#EED800",s:"#00EE00",o:"190"},{f:"a",y:5,z:1,i:"G",e:"#EED800",s:"#00EE00",o:"195"},{f:"a",y:5,z:1,i:"G",e:"#00ABF0",s:"#EED800",o:"192"},{f:"a",y:5,z:1,i:"G",e:"#FF0000",s:"#00ABF0",o:"193"},{f:"a",y:5,z:1,i:"G",e:"#00EE00",s:"#FF0000",o:"194"},{f:"a",y:6,z:1,i:"G",e:"#00ABF0",s:"#EED800",o:"190"},{f:"a",y:6,z:1,i:"G",e:"#00ABF0",s:"#EED800",o:"195"},{f:"a",y:6,z:1,i:"G",e:"#FF0000",s:"#00ABF0",o:"192"},{f:"a",y:6,z:1,i:"G",e:"#00EE00",s:"#FF0000",o:"193"},{f:"a",y:6,z:1,i:"G",e:"#EED800",s:"#00EE00",o:"194"},{f:"a",y:7,z:1,i:"G",e:"#FF0000",s:"#00ABF0",o:"190"},{f:"a",y:7,z:1,i:"G",e:"#FF0000",s:"#00ABF0",o:"195"},{f:"a",y:7,z:1,i:"G",e:"#00EE00",s:"#FF0000",o:"192"},{f:"a",y:7,z:1,i:"G",e:"#EED800",s:"#00EE00",o:"193"},{f:"a",y:7,z:1,i:"G",e:"#00ABF0",s:"#EED800",o:"194"},{f:"a",y:8,z:1,i:"G",e:"#00EE00",s:"#FF0000",o:"190"},{f:"a",y:8,z:1,i:"G",e:"#00EE00",s:"#FF0000",o:"195"},{f:"a",y:8,z:1,i:"G",e:"#EED800",s:"#00EE00",o:"192"},{f:"a",y:8,z:1,i:"G",e:"#00ABF0",s:"#EED800",o:"193"},{f:"a",y:8,z:1,i:"G",e:"#FF0000",s:"#00ABF0",o:"194"},{f:"a",y:9,z:1,i:"G",e:"#EED800",s:"#00EE00",o:"190"},{f:"a",y:9,z:1,i:"G",e:"#EED800",s:"#00EE00",o:"195"},{f:"a",y:9,z:1,i:"G",e:"#00ABF0",s:"#EED800",o:"192"},{f:"a",y:9,z:1,i:"G",e:"#FF0000",s:"#00ABF0",o:"193"},{f:"a",y:9,z:1,i:"G",e:"#00EE00",s:"#FF0000",o:"194"},{f:"a",y:10,z:1,i:"G",e:"#00ABF0",s:"#EED800",o:"190"},{f:"a",y:10,z:1,i:"G",e:"#00ABF0",s:"#EED800",o:"195"},{f:"a",y:10,z:1,i:"G",e:"#FF0000",s:"#00ABF0",o:"192"},{f:"a",y:10,z:1,i:"G",e:"#00EE00",s:"#FF0000",o:"193"},{f:"a",y:10,z:1,i:"G",e:"#EED800",s:"#00EE00",o:"194"},{f:"a",y:11,z:1,i:"G",e:"#FF0000",s:"#00ABF0",o:"190"},{f:"a",y:11,z:1,i:"G",e:"#FF0000",s:"#00ABF0",o:"195"},{f:"a",y:11,z:1,i:"G",e:"#00EE00",s:"#FF0000",o:"192"},{f:"a",y:11,z:1,i:"G",e:"#EED800",s:"#00EE00",o:"193"},{f:"a",y:11,z:1,i:"G",e:"#00ABF0",s:"#EED800",o:"194"},{f:"a",y:12,z:1,i:"G",e:"#00EE00",s:"#FF0000",o:"190"},{f:"a",y:12,z:1,i:"G",e:"#00EE00",s:"#FF0000",o:"195"},{f:"a",y:12,z:1,i:"G",e:"#EED800",s:"#00EE00",o:"192"},{f:"a",y:12,z:1,i:"G",e:"#00ABF0",s:"#EED800",o:"193"},{f:"a",y:12,z:1,i:"G",e:"#FF0000",s:"#00ABF0",o:"194"},{f:"a",y:13,z:1,i:"G",e:"#EED800",s:"#00EE00",o:"190"},{f:"a",y:13,z:1,i:"G",e:"#EED800",s:"#00EE00",o:"195"},{f:"a",y:13,z:1,i:"G",e:"#00ABF0",s:"#EED800",o:"192"},{f:"a",y:13,z:1,i:"G",e:"#FF0000",s:"#00ABF0",o:"193"},{f:"a",y:13,z:1,i:"G",e:"#00EE00",s:"#FF0000",o:"194"},{f:"a",y:14,z:1,i:"G",e:"#00ABF0",s:"#EED800",o:"190"},{f:"a",y:14,z:1,i:"G",e:"#00ABF0",s:"#EED800",o:"195"},{f:"a",y:14,z:1,i:"G",e:"#FF0000",s:"#00ABF0",o:"192"},{f:"a",y:14,z:1,i:"G",e:"#EFD600",s:"#00EE00",o:"194"},{f:"a",y:14,z:1,i:"G",e:"#00EE00",s:"#FF0000",o:"193"},{y:15,i:"G",s:"#00ABF0",z:0,o:"190",f:"c"},{y:15,i:"G",s:"#00ABF0",z:0,o:"195",f:"c"},{y:15,i:"G",s:"#EFD600",z:0,o:"194",f:"c"},{y:15,i:"G",s:"#00EE00",z:0,o:"193",f:"c"},{y:15,i:"G",s:"#FF0000",z:0,o:"192",f:"c"},{f:"c",p:2,y:16,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"63"}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["186","199","190","197","192","193","194","195","189","196","198","191","188","187"],n:"Untitled Layout","_":0,v:{"198":{k:"div",x:"visible",c:506,d:203,z:2,a:378,j:"absolute",bF:"199",b:341},"187":{b:450,z:4,K:"Solid",c:168,L:"Solid",d:68,aS:6,M:10,bD:"none",N:10,aT:6,dB:"button",O:10,aU:6,P:10,i:"hardButton",aV:6,j:"absolute",k:"div",aI:0,aJ:0,aK:0,aL:0,A:"#FF2600",B:"#FF2600",aM:"103_hover",Z:"break-word",C:"#FF2600",r:"inline",s:"'Arial Black',Gadget,Sans-Serif",D:"#FF2600",t:48,aA:{a:[{p:4,h:"102"}]},F:"center",G:"#FF2600",aP:"pointer",w:"HARD",x:"visible",I:"Solid",a:450,y:"preserve",J:"Solid"},"193":{G:"#EED800",aU:8,aV:8,r:"inline",s:"Copperplate,sans-serif",t:144,Z:"break-word",v:"bold",w:"M",bF:"197",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:3,aS:8,aT:8,a:218,b:0},"196":{aV:8,w:"_____",x:"visible",a:0,Z:"break-word",b:3,y:"preserve",j:"absolute",z:1,yy:"nowrap",s:"Chalkduster,Papyrus,fantasy",aT:8,k:"div",bF:"198",aS:8,t:144,aU:8,G:"#FF0000",r:"inline"},"191":{aV:8,w:"SAYS",x:"visible",a:12,Z:"break-word",b:0,y:"preserve",j:"absolute",z:2,yy:"nowrap",s:"Copperplate,sans-serif",aT:8,k:"div",bF:"198",aS:8,t:144,aU:8,G:"#FF0000",r:"inline"},"199":{x:"visible",cY:"0",k:"div",c:884,d:600,z:5,e:1,a:0,j:"absolute",b:0},"188":{b:450,z:3,K:"Solid",c:168,L:"Solid",d:68,aS:6,M:10,bD:"none",N:10,aT:6,dB:"button",O:10,aU:6,P:10,i:"easyButton",aV:6,j:"absolute",k:"div",aI:0,aJ:0,aK:0,aL:0,A:"#FF2600",B:"#FF2600",aM:"70_hover",Z:"break-word",C:"#FF2600",r:"inline",s:"'Arial Black',Gadget,Sans-Serif",D:"#FF2600",t:48,aA:{a:[{p:4,h:"102"}]},F:"center",G:"#FF2600",aP:"pointer",w:"EASY",x:"visible",I:"Solid",a:150,y:"preserve",J:"Solid"},"194":{G:"#00ABF0",aU:8,aV:8,r:"inline",s:"Copperplate,sans-serif",t:144,Z:"break-word",v:"bold",w:"O<br>",bF:"197",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:2,aS:8,aT:8,a:371,b:0},"197":{k:"div",x:"visible",c:637,d:165,z:6,a:37,j:"absolute",b:33},"186":{p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"199",z:1,k:"div",dB:"img",d:600,c:800,r:"inline",g:"#000000"},"192":{G:"#00EE00",aU:8,aV:8,r:"inline",s:"Copperplate,sans-serif",t:144,Z:"break-word",v:"bold",w:"I",bF:"197",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:4,aS:8,aT:8,a:129,b:0},"189":{G:"#FFFFFF",aU:8,c:584,aV:8,d:184,r:"inline",s:"'Arial Black',Gadget,Sans-Serif",t:36,Z:"break-word",i:"splashDirections",w:"Can You Do What Simon Says And Follow The Pattern Of Lights and Sounds?",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:100,F:"center",b:220},"190":{G:"#FF0000",aU:8,aV:8,r:"inline",s:"Copperplate,sans-serif",t:144,Z:"break-word",v:"bold",w:"S",bF:"197",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:5,aS:8,aT:8,a:0,b:0},"195":{G:"#FF0000",aU:8,aV:8,r:"inline",s:"Copperplate,sans-serif",t:144,Z:"break-word",v:"bold",w:"N",bF:"197",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:1,aS:8,aT:8,a:508,b:0}}},{A:{a:[{p:4,h:"52"}]},o:"3",p:"600px",cA:false,Y:800,Z:600,c:"#000000",L:[],bY:1,d:800,U:{},T:{"31":{i:"31",n:"blueBeep",z:0.15,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"27",q:false}]},o:"31"},{f:"a",y:0,z:0.01,i:"e",e:1,s:0,o:"201"},{y:0,i:"cY",s:"0",z:0,o:"209",f:"a"},{y:0,i:"cY",s:"0",z:0,o:"214",f:"a"},{y:0,i:"cY",s:"0",z:0,o:"204",f:"a"},{f:"a",y:0.01,z:0.14,i:"e",e:0,s:1,o:"201"},{y:0.15,i:"e",s:0,z:0,o:"201",f:"c"}],f:30},"74_hover":{i:"74_hover",n:"74_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#FF0000",o:"203"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#FF0000",o:"203"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#FF0000",o:"203"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#FF0000",o:"203"},{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#FF0000",o:"203"},{y:1,i:"G",s:"#FF2600",z:0,o:"203",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"203",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"203",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"203",f:"c"},{y:1,i:"A",s:"#FF2600",z:0,o:"203",f:"c"}],f:30},"76":{i:"76",n:"showBadge",z:1,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"77",q:false}]},o:"76"},{f:"f",y:0,z:1,i:"b",e:299,s:-226,o:"212"},{f:"f",y:0,z:1,i:"b",e:305,s:-220,o:"217"},{f:"f",y:0,z:1,i:"b",e:435,s:-90,o:"203"},{y:1,i:"b",s:299,z:0,o:"212",f:"c"},{y:1,i:"b",s:305,z:0,o:"217",f:"c"},{y:1,i:"b",s:435,z:0,o:"203",f:"c"}],f:30},"45":{i:"45",n:"yellowBeep",z:0.15,b:[],a:[{f:"a",y:0,z:0.01,i:"e",e:1,s:0,o:"210"},{y:0,i:"e",s:0,z:0,o:"215",f:"c"},{y:0,i:"e",s:0,z:0,o:"201",f:"c"},{y:0,i:"e",s:0,z:0,o:"205",f:"c"},{y:0,i:"cY",s:"0",z:0,o:"204",f:"a"},{y:0,i:"cY",s:"0",z:0,o:"200",f:"a"},{y:0,i:"cY",s:"0",z:0,o:"214",f:"a"},{f:"c",p:2,y:0.01,z:0,i:"ActionHandler",s:{a:[{p:12,o:"30",q:false}]},o:"45"},{f:"a",y:0.01,z:0.14,i:"e",e:0,s:1,o:"210"},{y:0.15,i:"e",s:0,z:0,o:"210",f:"c"}],f:30},"35":{i:"35",n:"redBeep",z:0.15,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"28",q:false}]},o:"35"},{f:"a",y:0,z:0.01,i:"e",e:1,s:0,o:"205"},{y:0,i:"cY",s:"0",z:0,o:"200",f:"a"},{y:0,i:"cY",s:"0",z:0,o:"214",f:"a"},{y:0,i:"cY",s:"0",z:0,o:"209",f:"a"},{f:"a",y:0.01,z:0.14,i:"e",e:0,s:1,o:"205"},{y:0.15,i:"e",s:0,z:0,o:"205",f:"c"}],f:30},"101_hover":{i:"101_hover",n:"101_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#FFFFFF",o:"206"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#FFFFFF",o:"206"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#FFFFFF",o:"206"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#FFFFFF",o:"206"},{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#FFFFFF",o:"206"},{y:1,i:"G",s:"#FF2600",z:0,o:"206",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"206",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"206",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"206",f:"c"},{y:1,i:"A",s:"#FF2600",z:0,o:"206",f:"c"}],f:30},"90":{i:"90",n:"hideBadge",z:1,b:[],a:[{f:"e",y:0,z:1,i:"b",e:-90,s:435,o:"203"},{f:"e",y:0,z:1,i:"b",e:-220,s:305,o:"217"},{f:"e",y:0,z:1,i:"b",e:-226,s:299,o:"212"},{y:1,i:"b",s:-226,z:0,o:"212",f:"c"},{y:1,i:"b",s:-220,z:0,o:"217",f:"c"},{y:1,i:"b",s:-90,z:0,o:"203",f:"c"}],f:30},"59":{i:"59",n:"roundComplete",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"61",q:false}]},o:"59"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:16,b:[],a:[{f:"c",y:0,z:2,i:"G",e:"#FFFFFF",s:"#FF2600",o:"213"},{f:"c",y:2,z:2,i:"G",e:"#0433FF",s:"#FFFFFF",o:"213"},{f:"c",y:4,z:2,i:"G",e:"#FFFFFF",s:"#0433FF",o:"213"},{f:"c",y:6,z:2,i:"G",e:"#FFFB00",s:"#FFFFFF",o:"213"},{f:"c",y:8,z:2,i:"G",e:"#FFFFFF",s:"#FFFB00",o:"213"},{f:"c",y:10,z:2,i:"G",e:"#00F900",s:"#FFFFFF",o:"213"},{f:"c",y:12,z:2,i:"G",e:"#FFFFFF",s:"#00F900",o:"213"},{f:"c",y:14,z:2,i:"G",e:"#FF2600",s:"#FFFFFF",o:"213"},{f:"c",p:2,y:16,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"2"}]},o:"kTimelineDefaultIdentifier"},{y:16,i:"G",s:"#FF2600",z:0,o:"213",f:"c"}],f:30},"41":{i:"41",n:"greenBeep",z:0.15,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"29",q:false}]},o:"41"},{f:"a",y:0,z:0.01,i:"e",e:1,s:0,o:"215"},{y:0,i:"cY",s:"0",z:0,o:"209",f:"a"},{y:0,i:"cY",s:"0",z:0,o:"200",f:"a"},{y:0,i:"cY",s:"0",z:0,o:"204",f:"a"},{f:"a",y:0.01,z:0.14,i:"e",e:0,s:1,o:"215"},{y:0.15,i:"e",s:0,z:0,o:"215",f:"c"}],f:30},"57":{i:"57",n:"gameOver",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"58",q:false}]},o:"57"}],f:30}},bZ:180,O:["212","217","203","213","210","209","215","214","201","200","205","204","211","216","202","208","218","207","206"],n:"Untitled Layout","_":1,v:{"216":{c:285,d:257,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,i:"yellowDetect",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"49"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:10,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:16,b:27},"205":{h:"9",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",i:"red",z:1,k:"div",dB:"img",d:588,bF:"204",c:1045,e:0,r:"inline"},"200":{x:"hidden",cY:"0",k:"div",c:1045,d:588,z:4,i:"blueGroup",a:-223,j:"absolute",b:6},"211":{h:"5",p:"no-repeat",x:"visible",i:"outline",q:"100% 100%",b:6,a:-223,j:"absolute",z:1,k:"div",dB:"img",d:588,c:1045,r:"inline"},"208":{b:231,z:16,K:"Solid",c:172,L:"Solid",d:110,aS:8,M:6,N:6,aT:8,O:6,g:"#000000",aU:8,P:6,aV:8,i:"sequenceValue",j:"absolute",k:"div",A:"#FFFFFF",B:"#FFFFFF",Z:"break-word",r:"inline",C:"#FFFFFF",s:"Impact,'Arial Narrow Bold',Sans-Serif",D:"#FFFFFF",t:48,F:"center",G:"#FFFFFF",w:"SCORE<br>0\n",x:"visible",I:"Solid",a:598,y:"preserve",J:"Solid"},"203":{b:-90,z:19,K:"Solid",c:58,L:"Solid",d:58,aS:6,M:5,bD:"none",N:5,aT:6,dB:"button",O:5,g:"#000000",aU:6,P:5,i:"badgeButton",aV:6,j:"absolute",k:"div",aI:50,aJ:50,aK:50,aL:50,A:"#FF0000",Y:55,B:"#FF0000",aM:"74_hover",Z:"break-word",C:"#FF0000",r:"inline",s:"'Arial Black',Gadget,Sans-Serif",D:"#FF0000",t:18,aA:{a:[{p:4,h:"97"}]},F:"center",G:"#FF0000",aP:"pointer",w:"NEXT",x:"visible",I:"Solid",a:261,y:"preserve",J:"Solid"},"214":{x:"hidden",cY:"0",k:"div",c:1045,d:588,z:6,i:"greenGroup",r:"inline",a:-223,j:"absolute",b:6},"217":{G:"#FF0000",bB:2,aU:8,c:348,d:104,bC:2,aV:8,r:"inline",s:"'Arial Black',Gadget,Sans-Serif",t:36,Z:"break-word",i:"badgeMessage",w:"5 ROUND<br>\nSTREAK!\n",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:18,aS:8,aT:8,a:118,bA:"#000000",F:"center",b:-220},"206":{b:520,z:21,K:"Solid",c:122,L:"Solid",d:32,aS:6,M:8,bD:"none",N:8,aT:6,dB:"button",O:8,g:"#000000",aU:6,P:8,i:"quitButton",aV:6,j:"absolute",k:"div",aI:30,aJ:30,aK:30,aL:30,A:"#FFFFFF",B:"#FFFFFF",aM:"101_hover",Z:"break-word",C:"#FFFFFF",r:"inline",s:"Impact,'Arial Narrow Bold',Sans-Serif",D:"#FFFFFF",t:24,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"62"}]},F:"center",G:"#FFFFFF",aP:"pointer",w:"QUIT",x:"visible",I:"Solid",a:625,y:"preserve",J:"Solid"},"201":{h:"11",p:"no-repeat",x:"visible",a:-0,q:"100% 100%",b:0,j:"absolute",i:"blue",z:1,k:"div",dB:"img",d:588,bF:"200",c:1045,e:0,r:"inline"},"212":{w:"",p:"no-repeat",x:"visible",i:"badgeBackground",q:"100% 100%",b:-226,a:194,j:"absolute",z:17,k:"div",dB:"img",d:226,c:212,r:"inline",g:"#000000"},"209":{x:"hidden",cY:"0",k:"div",c:1045,d:588,z:8,i:"yellowGroup",a:-223,j:"absolute",b:6},"204":{x:"hidden",cY:"0",k:"div",c:1045,d:588,z:2,i:"redGroup",r:"inline",a:-223,j:"absolute",b:6},"210":{h:"15",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",i:"yellow",z:1,k:"div",dB:"img",d:588,bF:"209",c:1045,e:0,r:"inline"},"215":{h:"13",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",i:"green",z:1,k:"div",dB:"img",d:588,bF:"214",c:1045,e:0,r:"inline"},"218":{c:273,d:273,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,i:"greenDetect",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"49"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:13,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:309,b:284},"207":{c:285,d:257,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,i:"redDetect",w:"",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"49"}]},j:"absolute",O:0,k:"div",dB:"button",z:14,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:16,b:300},"202":{c:281,d:257,I:"None",J:"None",K:"None",L:"None",aP:"pointer",M:0,i:"blueDetect",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"49"}]},B:"#D8DDE4",j:"absolute",O:0,dB:"button",z:12,C:"#D8DDE4",D:"#D8DDE4",k:"div",P:0,a:301,b:27},"213":{G:"#FF2600",bB:2,aU:8,c:184,d:73,bC:2,aV:8,r:"inline",s:"Impact,'Arial Narrow Bold',Sans-Serif",t:64,Z:"break-word",i:"title",w:"SIMON<br><br>",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:20,aS:8,aT:8,a:598,bA:"#000000",F:"center",b:0}}}],{},g,{f:[[0,0,0.1971,0,0.3391,0.8944,0.3636,1],[0.3636,1,0.3636,1,0.4425,0.75,0.5455,0.75],[0.5455,0.75,0.6519,0.75,0.7273,1,0.7273,1],[0.7273,1,0.7273,1,0.7718,0.9375,0.8182,0.9375],[0.8182,0.9375,0.8646,0.9375,0.9091,1,0.9091,1],[0.9091,1,0.9091,1,0.9294,0.9844,0.9546,0.9844],[0.9546,0.9844,0.9798,0.9844,1,1,1,1]]},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
