//	HYPE.documents["memoryJM"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="memoryJM.hyperesources",c="memoryJM",e="memoryjm_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/memoryjm_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_596","HYPE_dtl_596",!0==(null!=a&&10>a||false==!0)?"HYPE-596.full.min.js":"HYPE-596.thin.min.js"),false==!0&&(a=a||l("HYPE_w_596","HYPE_wdtl_596","HYPE-596.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"cardClicked",source:"function(hypeDocument, element, event) {\n\tvar bgString = hypeDocument.getElementById(element.id).style.backgroundImage.search(\"Card_back_05\");\n\tif ((window.gameState != 0) && (window.gameState != 3) && (bgString != -1)) {\n\t\tvar temp1 = element.id;\n\t\tvar temp2 = temp1.slice(8);\n\t\tvar temp3 = \"url('\" + hypeDocument.resourcesFolderURL() + \"/\" + window.shuffledList[temp2] + \"')\";\n\t\tif (window.gameState == 1) { // CLICKED FIRST CARD\n\t\t\thypeDocument.getElementById(element.id).style.backgroundImage = temp3;\n\t\t\twindow.match1 = window.shuffledList[temp2];\n\t\t\twindow.position1 = element.id;\n\t\t\thypeDocument.startTimelineNamed('match1');\n\t\t\twindow.gameState = 2;\n\t\t} else if (window.gameState == 2) { // CLICKED SECOND CARD\n\t\t\twindow.match2 = window.shuffledList[temp2];\n\t\t\tif (window.match1 == window.match2) { // FOUND A MATCH\n\t\t\t\thypeDocument.getElementById(element.id).style.backgroundImage = temp3;\n\t\t\t\twindow.pairsRemaining--;\n\t\t\t\tif (window.pairsRemaining == 0) { // ALL 10 PAIRS ARE SHOWING\n\t\t\t\t\tclearInterval(window.timerInverval);\n\t\t\t\t\twindow.finalScore = parseInt(hypeDocument.getElementById(\"timerValue\").innerHTML);\n\t\t\t\t\tvar messageString = \"YOU FINISHED IN<br/>\" + window.finalScore + \" SECONDS!\";\n\t\t\t\t\thypeDocument.getElementById(\"finishedMessage\").innerHTML = messageString;\n\t\t\t\t\twindow.gameState = 0;\n\t\t\t\t\thypeDocument.startTimelineNamed('gameOver');\n\t\t\t\t} else { // MATCH FOUND. KEEP PLAYING\n\t\t\t\t\thypeDocument.startTimelineNamed('match2');\n\t\t\t\t}\n\t\t\t\twindow.gameState = 1;\n\t\t\t} else { // CARDS DID NOT MATCH\n\t\t\t\thypeDocument.startTimelineNamed('badMatch');\n\t\t\t\thypeDocument.getElementById(element.id).style.backgroundImage = temp3;\n\t\t\t\twindow.gameState = 3;\n\t\t\t\twindow.position2 = element.id;\n\t\t\t\twindow.cardBack = \"url('\" + hypeDocument.resourcesFolderURL() + \"/Card_back_05.svg')\";\n\t\t\t\t\n\t\t\t\tsetTimeout(function() { \n\t\t\t\t\thypeDocument.getElementById(window.position1).style.backgroundImage = window.cardBack; \n\t\t\t\t\thypeDocument.getElementById(window.position2).style.backgroundImage = window.cardBack; \n\t\t\t\t\thypeDocument.startTimelineNamed('cardFlip');\n\t\t\t\t\twindow.gameState = 1; \n\t\t\t\t}, 1500);\n\t\t\t}\n\t\t}\n\t}\n\n}",identifier:"48"},{name:"initializeMain",source:"function(hypeDocument, element, event) {\t\n\twindow.orderedList = new Array( \"card0.svg\", \"card0.svg\", \"card1.svg\", \"card1.svg\", \"card2.svg\", \"card2.svg\", \n\t\t\t\t\t\t\t\t\t\"card3.svg\", \"card3.svg\", \"card4.svg\", \"card4.svg\", \"card5.svg\", \"card5.svg\", \n\t\t\t\t\t\t\t\t\t\"card6.svg\", \"card6.svg\", \"card7.svg\", \"card7.svg\", \"card8.svg\", \"card8.svg\", \n\t\t\t\t\t\t\t\t\t\"card9.svg\", \"card9.svg\");\n\t\n\twindow.shuffledList = new Array();\n\tvar i = 0; \n\tfor (i=0; i < 20; i++) {\n\t\tvar temp1 = Math.floor(Math.random()*(window.orderedList.length));\n\t\twindow.shuffledList[i] = window.orderedList[temp1];\n\t\twindow.orderedList[temp1] = window.orderedList[0];\n\t\twindow.orderedList.shift(); \n\t}\n\tconsole.log(\"The shuffled list is \" + window.shuffledList);\n\twindow.gameState = 0;\n\twindow.match1 = \"\";\n\twindow.match2 = \"\";\n\twindow.position1 = \"\";\n\twindow.position2 = \"\";\n\twindow.pairsRemaining = 10;\n\t\n\t// NEW CODE FOR PART 12\n\t\n\twindow.index1 = 19;\n \twindow.dealInterval = setInterval(moveIt, 200);\n\tsetTimeout(function() { // START OF 6 SECOND WAIT TIMEOUT\n\t\thypeDocument.startTimelineNamed('background');\n\t\t\n\t// END OF NEW CODE FOR PART 12\n\t\tsetTimeout(function() {\n\t\t\tvar i = 0; \n\t\t\tfor (i=0; i < 20; i++) { // SHOW ALL 20 CARDS INITIALLY\n\t\t\t\tdisplayCards(i, \"show\");\n\t\t\t}\n\t\t}, 1000);\n\t\tsetTimeout(function() { // CHANGE BACKGROND IMAGES TO Card_back_05.svg AFTER 1.5 SECONDS\n\t\t\tvar i = 0; \n\t\t\tfor (i=0; i < 20; i++) {\n\t\t\t\tdisplayCards(i, \"hide\");\n\t\t\t}\n\t\t\twindow.gameState = 1;\n\t\t\twindow.timerInverval = setInterval(function() { \n\t\t\t\tvar temp1 = parseInt(hypeDocument.getElementById(\"timerValue\").innerHTML) + 1;\n\t\t\t\thypeDocument.getElementById(\"timerValue\").innerHTML = temp1;\n\t\t\t}, 1000);\n\t\t}, 2500);\n\t// NEW CODE FOR PART 12\t\n\t\n\t}, 6000); // END OF 6 SECOND WAIT TIMEOUT\n\t\n\t// END OF NEW CODE FOR PART 12\n\t\n\tfunction displayCards(index, display) { // THIS FUNCTION WILL EITHER SHOW OR HIDE THE CARDS\n\t\twindow.temp1 = \"position\" + index;\n\t\tif (display == \"show\") {\n\t\t\twindow.temp2 = \"url('\" + hypeDocument.resourcesFolderURL() + \"/\" + window.shuffledList[index] + \"')\";\n\t\t} else {\n\t\t\twindow.temp2 = \"url('\" + hypeDocument.resourcesFolderURL() + \"/Card_back_05.svg')\";\n\t\t}\n\t\thypeDocument.getElementById(window.temp1).style.backgroundImage = window.temp2;\n\t}\n\t\n\t// NEW CODE FOR PART 12\n\tfunction moveIt() {\n\t\tvar temp1 = 'position' + window.index1;\n\t\tvar temp2 = document.getElementById(temp1);\n\t\tvar temp3;\n\t\tvar temp4;\n\t\tif (window.index1 < 5) { temp3 = 50; }\n\t\telse if (window.index1 < 10) { temp3 = 185; }\n\t\telse if (window.index1 < 15) { temp3 = 320; }\n\t\telse { temp3 = 455}\n\t\tif ((window.index1%5) == 0) { temp4 = 60; }\n\t\telse if ((window.index1%5) == 1) { temp4 = 160; }\n\t\telse if ((window.index1%5) == 2) { temp4 = 260; }\n\t\telse if ((window.index1%5) == 3) { temp4 = 360; }\n\t\telse { temp4 = 460; }\n\t\thypeDocument.setElementProperty(temp2, 'top', temp3, 0.5, 'linear');\n\t\thypeDocument.setElementProperty(temp2, 'left', temp4, 0.5, 'linear');\n\t\thypeDocument.startTimelineNamed('cardFlip');\n\t\twindow.index1--;\n\t\tif (window.index1 == -1) {\n\t\t\tclearInterval(window.dealInterval);\n\t\t}\n\t}\n\t// END OF NEW CODE FOR PART 12\n\t\t\n}",identifier:"78"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_596(c,e,{"-2":{n:"blank.gif"},"25":{p:1,n:"card9.svg",g:"77",t:"image/svg+xml"},"18":{p:1,n:"card2.svg",g:"70",t:"image/svg+xml"},"10":{p:2,n:"badMatch.mp3",g:"85",t:"audio/mpeg"},"26":{p:1,n:"card0.svg",g:"68",t:"image/svg+xml"},"19":{p:1,n:"card3.svg",g:"71",t:"image/svg+xml"},"11":{p:2,n:"background.mp3",g:"86",t:"audio/mpeg"},"27":{p:1,n:"card1.svg",g:"69",t:"image/svg+xml"},"0":{p:1,n:"card2.png",g:"70",t:"@1x"},"12":{p:2,n:"gameOver.mp3",g:"97",t:"audio/mpeg"},"1":{p:1,n:"card3.png",g:"71",t:"@1x"},"28":{p:1,n:"tabletop.svg",g:"153",t:"image/svg+xml"},"20":{p:1,n:"card4.svg",g:"72",t:"image/svg+xml"},"2":{p:1,n:"card4.png",g:"72",t:"@1x"},"13":{p:2,n:"cardFlip.mp3",g:"118",t:"audio/mpeg"},"3":{p:1,n:"card5.png",g:"73",t:"@1x"},"21":{p:1,n:"card5.svg",g:"73",t:"image/svg+xml"},"14":{p:2,n:"credits.mp3",g:"145",t:"audio/mpeg"},"4":{p:1,n:"card6.png",g:"74",t:"@1x"},"5":{p:1,n:"card7.png",g:"75",t:"@1x"},"15":{p:1,n:"Card_back_05.svg",g:"27",t:"image/svg+xml"},"22":{p:1,n:"card6.svg",g:"74",t:"image/svg+xml"},"6":{p:1,n:"card8.png",g:"76",t:"@1x"},"23":{p:1,n:"card7.svg",g:"75",t:"image/svg+xml"},"16":{p:1,n:"card1.png",g:"69",t:"@1x"},"7":{p:1,n:"card9.png",g:"77",t:"@1x"},"-1":{n:"PIE.htc"},"8":{p:2,n:"match1.mp3",g:"81",t:"audio/mpeg"},"24":{p:1,n:"card8.svg",g:"76",t:"image/svg+xml"},"17":{p:1,n:"card0.png",g:"68",t:"@1x"},"9":{p:2,n:"match2.mp3",g:"83",t:"audio/mpeg"}},h,["<link href='https://fonts.googleapis.com/css?family=Monoton&subset=latin' rel='stylesheet' type='text/css'>"],d,[{n:"splash",o:"120",X:[0]},{n:"main",o:"1",X:[1]},{n:"credits",o:"134",X:[2]}],[{o:"122",p:"600px",cA:false,Y:800,Z:600,L:[],c:"#000000",bY:1,d:800,U:{},T:{"133_hover":{i:"133_hover",n:"133_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"G",e:"#FFFB00",s:"#FF2600",o:"175"},{y:1,i:"G",s:"#FFFB00",z:0,o:"175",f:"c"}],f:30},"157":{i:"157",n:"title",z:2,b:[],a:[{f:"b",y:0,z:1,i:"bJ",e:2.9999999999999991,s:1,o:"174"},{f:"b",y:1,z:1,i:"bJ",e:1,s:2.9999999999999991,o:"174"},{f:"c",p:2,y:2,z:0,i:"ActionHandler",s:{a:[{b:"157",p:3,z:false,symbolOid:"121"}]},o:"157"},{y:2,i:"bJ",s:1,z:0,o:"174",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:4,b:[],a:[{f:"c",p:2,y:0,z:4,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"121"}]},s:{a:[{b:"157",p:3,z:false,symbolOid:"121"}]},o:"kTimelineDefaultIdentifier"},{f:"c",p:2,y:4,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"121"}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["171","176","174","180","177","179","178","181","172","175","173"],n:"Untitled Layout","_":0,v:{"174":{bJ:1,G:"#FF0108",aU:8,c:492,bS:18,bK:1,d:150,aV:8,r:"inline",s:"Monoton",bL:4,aW:0,t:96,BDbG:0,aX:0,Z:"break-word",w:"MEMORY",bF:"171",j:"absolute",x:"visible",bG:0,y:"preserve",k:"div",z:4,bH:0,aS:8,bI:1,a:146,aT:8,b:48},"177":{k:"div",x:"visible",c:401,d:130,z:9,a:199,j:"absolute",bS:18,b:230},"180":{p:"no-repeat",c:88,q:"100% 100%",bS:18,d:128,I:"None",J:"None",K:"None",L:"None",h:"27",M:0,N:0,bF:"177",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:1,b:1},"173":{G:"#FF2600",bB:2,aU:8,c:97,bS:18,d:44,bC:2,aV:8,r:"inline",s:"Zapfino,Script,Cursive",bL:0,t:18,BDbL:0,Z:"break-word",BDbJ:1,w:"by Jesse",bF:"171",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:1,aS:8,aT:8,a:677,bA:"#FFFFFF",F:"center",b:530},"176":{G:"#FFFFFF",aU:8,c:492,bS:18,d:150,aV:8,r:"inline",e:0.85062302215189878,s:"Monoton",t:96,Z:"break-word",w:"MEMORY",bF:"171",j:"absolute",x:"visible",k:"div",y:"preserve",z:5,aS:8,aT:8,a:146,b:48},"179":{p:"no-repeat",c:88,q:"100% 100%",bS:18,d:128,I:"None",J:"None",K:"None",L:"None",h:"27",M:0,N:0,bF:"177",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,P:0,D:"#D8DDE4",a:106,b:1},"172":{G:"#FFFFFF",aU:8,c:784,bS:18,d:44,aV:8,r:"inline",s:"Impact,'Arial Narrow Bold',Sans-Serif",t:36,Z:"break-word",w:"How fast can you match the cards?",bF:"171",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:0,F:"center",b:421},"175":{b:490,z:3,K:"None",c:188,L:"None",d:68,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,bS:18,aU:6,P:0,bF:"171",aV:6,j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",aM:"133_hover",Z:"break-word",C:"#A0A0A0",r:"inline",s:"Monoton",D:"#A0A0A0",t:48,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",G:"#FF2600",aP:"pointer",w:"START",x:"visible",I:"None",a:300,y:"preserve",J:"None"},"178":{p:"no-repeat",c:88,q:"100% 100%",bS:18,d:128,I:"None",J:"None",K:"None",L:"None",h:"27",M:0,N:0,bF:"177",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:3,P:0,D:"#D8DDE4",a:211,b:1},"181":{p:"no-repeat",c:88,q:"100% 100%",bS:18,d:128,I:"None",J:"None",K:"None",L:"None",h:"27",M:0,w:"",N:0,A:"#D8DDE4",x:"visible",j:"absolute",k:"div",B:"#D8DDE4",O:0,C:"#D8DDE4",z:4,bF:"177",D:"#D8DDE4",P:0,a:316,b:1},"171":{k:"div",x:"visible",c:800,d:600,z:3,a:0,j:"absolute",bS:63,b:0}}},{A:{a:[{p:4,h:"78"}]},o:"3",p:"600px",cA:false,Y:800,Z:600,c:"#AE6652",L:[],bY:1,d:800,U:{},T:{"94_hover":{i:"94_hover",n:"94_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"G",e:"#FFFB00",s:"#FF2600",o:"193"},{y:1,i:"G",s:"#FFFB00",z:0,o:"193",f:"c"}],f:30},"84":{i:"84",n:"badMatch",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"85",q:false}]},o:"84"}],f:30},"95_hover":{i:"95_hover",n:"95_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"G",e:"#FFFB00",s:"#FF2600",o:"196"},{y:1,i:"G",s:"#FFFB00",z:0,o:"196",f:"c"}],f:30},"82":{i:"82",n:"match2",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"83",q:false}]},o:"82"}],f:30},"117":{i:"117",n:"cardFlip",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"118",q:false}]},o:"117"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30},"80":{i:"80",n:"match1",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"81",q:false}]},o:"80"}],f:30},"146":{i:"146",n:"background",z:0,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"86",q:true}]},o:"146"}],f:30},"96":{i:"96",n:"gameOver",z:6.15,b:[],a:[{f:"c",p:2,y:0,z:0.02,i:"ActionHandler",e:{a:[{}]},s:{a:[{p:13,o:"86",q:false}]},o:"96"},{f:"h",y:0,z:0.15,i:"b",e:230,s:-370,o:"188"},{f:"c",y:0,z:5,i:"e",e:0,s:0,o:"193"},{f:"h",y:0,z:0.15,i:"b",e:470,s:-130,o:"193"},{f:"h",y:0,z:0.15,i:"b",e:50,s:-550,o:"183"},{f:"h",y:0,z:0.15,i:"b",e:0,s:-600,o:"211"},{f:"h",y:0,z:0.15,i:"b",e:470,s:-130,o:"196"},{f:"c",p:2,y:0.02,z:0,i:"ActionHandler",s:{a:[{p:12,o:"97",q:false}]},o:"96"},{y:0.15,i:"b",s:230,z:0,o:"188",f:"c"},{y:0.15,i:"b",s:470,z:0,o:"193",f:"c"},{y:0.15,i:"b",s:50,z:0,o:"183",f:"c"},{y:0.15,i:"b",s:0,z:0,o:"211",f:"c"},{y:0.15,i:"b",s:470,z:0,o:"196",f:"c"},{f:"c",y:5,z:1,i:"e",e:1,s:0,o:"193"},{f:"c",y:5.15,z:1,i:"e",e:1,s:0,o:"196"},{y:6,i:"e",s:1,z:0,o:"193",f:"c"},{y:6.15,i:"e",s:1,z:0,o:"196",f:"c"}],f:30}},bZ:180,O:["211","183","188","193","196","194","205","189","187","210","208","206","203","198","202","197","192","190","184","191","186","182","209","207","204","200","195","185","199","201"],n:"Untitled Layout","_":1,v:{"200":{p:"no-repeat",c:75,q:"100% 100%",bS:36,d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"27",M:0,i:"position18",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"48"}]},O:0,j:"absolute",k:"div",dB:"button",z:26,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:38,b:10},"194":{h:"153",p:"no-repeat",x:"visible",a:-4,q:"100% 100%",b:0,j:"absolute",bS:36,z:1,k:"div",dB:"img",d:605,c:958,r:"inline"},"186":{p:"no-repeat",c:75,q:"100% 100%",bS:36,d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"27",M:0,i:"position15",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"48"}]},O:0,j:"absolute",k:"div",dB:"button",z:23,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:32,b:10},"205":{c:200,bS:36,d:600,I:"None",J:"None",K:"None",g:"#000000",L:"None",M:0,i:"sidebar",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,P:0,D:"#D8DDE4",a:600,b:0},"199":{G:"#FFFFFF",aU:8,c:184,bS:36,d:44,aV:8,r:"inline",s:"'Arial Black',Gadget,Sans-Serif",t:32,Z:"break-word",i:"timerTitle",w:"TIME",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,aT:8,a:600,F:"center",b:80},"190":{p:"no-repeat",c:75,q:"100% 100%",bS:36,d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"27",M:0,i:"position8",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"48"}]},O:0,j:"absolute",k:"div",dB:"button",z:16,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:18,b:10},"182":{p:"no-repeat",c:75,q:"100% 100%",bS:36,d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"27",M:0,i:"position14",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"48"}]},O:0,j:"absolute",k:"div",dB:"button",z:22,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:30,b:10},"201":{G:"#FFFFFF",aU:8,c:184,bS:36,d:44,aV:8,r:"inline",s:"'Arial Black',Gadget,Sans-Serif",t:32,Z:"break-word",i:"timerValue",w:"0\n",j:"absolute",x:"visible",k:"div",y:"preserve",z:5,aS:8,aT:8,a:600,F:"center",b:140},"195":{p:"no-repeat",c:75,q:"100% 100%",bS:36,d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"27",M:0,i:"position17",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"48"}]},O:0,j:"absolute",k:"div",dB:"button",z:25,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:36,b:10},"187":{p:"no-repeat",c:75,q:"100% 100%",bS:36,d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"27",M:0,i:"position0",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"48"}]},O:0,j:"absolute",k:"div",dB:"button",z:8,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:2,b:10},"206":{p:"no-repeat",c:75,q:"100% 100%",bS:36,d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"27",M:0,i:"position4",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"48"}]},O:0,j:"absolute",k:"div",dB:"button",z:12,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:10,b:10},"191":{p:"no-repeat",c:75,q:"100% 100%",bS:36,d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"27",M:0,i:"position16",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"48"}]},O:0,j:"absolute",k:"div",dB:"button",z:24,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:34,b:10},"183":{G:"#FF2600",bB:3,aU:8,c:584,bS:36,d:164,bC:3,aV:8,r:"inline",s:"Impact,'Arial Narrow Bold',Sans-Serif",t:120,Z:"break-word",i:"finishedTitle",w:"CONGRATS!",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:29,aS:8,aT:8,a:0,bA:"#FFFFFF",F:"center",b:-550},"202":{p:"no-repeat",c:75,q:"100% 100%",bS:36,d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"27",M:0,i:"position11",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"48"}]},O:0,j:"absolute",k:"div",dB:"button",z:19,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:24,b:10},"210":{p:"no-repeat",c:75,q:"100% 100%",bS:36,d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"27",M:0,i:"position6",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"48"}]},O:0,j:"absolute",k:"div",dB:"button",z:14,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:14,b:10},"196":{b:-130,z:32,K:"None",c:228,bC:0,L:"None",d:48,aS:6,M:0,e:0,bD:"none",N:0,aT:6,dB:"button",O:0,bS:36,aU:6,P:0,J:"None",i:"creditsButton",aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aZ:0,aL:4,A:"#A0A0A0",B:"#A0A0A0",aM:"95_hover",Z:"break-word",C:"#A0A0A0",r:"inline",s:"Impact,'Arial Narrow Bold',Sans-Serif",D:"#A0A0A0",t:36,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"134"}]},F:"center",G:"#FF2600",aP:"pointer",w:"CREDITS",bA:"#000000",x:"visible",I:"None",a:320,y:"preserve",bB:0},"188":{G:"#FF2600",bB:2,aU:8,c:584,bS:36,d:164,bC:2,aV:8,r:"inline",s:"Impact,'Arial Narrow Bold',Sans-Serif",t:64,Z:"break-word",i:"finishedMessage",w:"YOU FINISHED IN<br>\n100 SECONDS!",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:30,aS:8,aT:8,a:0,bA:"#FFFFFF",F:"center",b:-370},"207":{p:"no-repeat",c:75,q:"100% 100%",bS:36,d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"27",M:0,i:"position12",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"48"}]},O:0,j:"absolute",k:"div",dB:"button",z:20,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:26,b:10},"192":{p:"no-repeat",c:75,q:"100% 100%",bS:36,d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"27",M:0,i:"position9",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"48"}]},O:0,j:"absolute",k:"div",dB:"button",z:17,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:20,b:10},"184":{p:"no-repeat",c:75,q:"100% 100%",bS:36,d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"27",M:0,i:"position7",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"48"}]},O:0,j:"absolute",k:"div",dB:"button",z:15,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:16,b:10},"203":{p:"no-repeat",c:75,q:"100% 100%",bS:36,d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"27",M:0,i:"position3",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"48"}]},O:0,j:"absolute",k:"div",dB:"button",z:11,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:8,b:10},"211":{c:600,bS:36,d:600,I:"None",J:"None",K:"None",g:"#000000",L:"None",M:0,i:"finishedBackground",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:28,P:0,D:"#D8DDE4",a:0,b:-600},"197":{p:"no-repeat",c:75,q:"100% 100%",bS:36,d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"27",M:0,i:"position10",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"48"}]},O:0,j:"absolute",k:"div",dB:"button",z:18,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:22,b:10},"189":{p:"no-repeat",c:75,q:"100% 100%",bS:36,d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"27",M:0,i:"position1",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"48"}]},O:0,j:"absolute",k:"div",dB:"button",z:9,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:4,b:10},"208":{p:"no-repeat",c:75,q:"100% 100%",bS:36,d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"27",M:0,i:"position5",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"48"}]},O:0,j:"absolute",k:"div",dB:"button",z:13,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:12,b:10},"193":{b:-130,z:31,K:"None",c:228,bC:0,L:"None",d:48,aS:6,M:0,e:0,bD:"none",N:0,aT:6,dB:"button",O:0,bS:36,aU:6,P:0,J:"None",i:"playAgainButton",aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aZ:0,aL:4,A:"#A0A0A0",B:"#A0A0A0",aM:"94_hover",Z:"break-word",C:"#A0A0A0",r:"inline",s:"Impact,'Arial Narrow Bold',Sans-Serif",D:"#A0A0A0",t:36,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",G:"#FF2600",aP:"pointer",w:"PLAY AGAIN?",bA:"#000000",x:"visible",I:"None",a:40,y:"preserve",bB:0},"185":{G:"#FFFFFF",aU:8,c:184,bS:36,d:44,aV:8,r:"inline",s:"'Arial Black',Gadget,Sans-Serif",t:32,Z:"break-word",i:"title",w:"MEMORY",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:600,F:"center",b:20},"204":{p:"no-repeat",c:75,q:"100% 100%",bS:36,d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"27",M:0,i:"position19",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"48"}]},O:0,j:"absolute",k:"div",dB:"button",z:27,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:40,b:10},"198":{p:"no-repeat",c:75,q:"100% 100%",bS:36,d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"27",M:0,i:"position2",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"48"}]},O:0,j:"absolute",k:"div",dB:"button",z:10,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:6,b:10},"209":{p:"no-repeat",c:75,q:"100% 100%",bS:36,d:110,I:"None",J:"None",K:"None",L:"None",aP:"pointer",h:"27",M:0,i:"position13",N:0,A:"#D8DDE4",x:"visible",aA:{a:[{p:4,h:"48"}]},O:0,j:"absolute",k:"div",dB:"button",z:21,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",P:0,a:28,b:10}}},{A:{a:[{p:12,o:"145",q:false}]},o:"136",p:"600px",cA:false,Y:800,Z:600,B:{a:[{p:13,o:"145",q:false}]},c:"#000000",L:[],bY:1,d:800,U:{},T:{"144_hover":{i:"144_hover",n:"144_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"G",e:"#FFFB00",s:"#FF2600",o:"212"},{y:1,i:"G",s:"#FFFB00",z:0,o:"212",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:21,b:[],a:[{f:"b",y:0,z:20,i:"b",e:-800,s:600,o:"213"},{f:"c",y:0,z:20,i:"e",e:0,s:0,o:"212"},{y:20,i:"b",s:-800,z:0,o:"213",f:"c"},{f:"c",y:20,z:1,i:"e",e:1,s:0,o:"212"},{y:21,i:"e",s:1,z:0,o:"212",f:"c"}],f:30}},bZ:180,O:["212","213"],n:"Untitled Layout","_":2,v:{"212":{b:400,z:2,K:"None",c:388,bC:2,L:"None",d:108,aS:6,M:0,e:0,bD:"none",N:0,aT:6,dB:"button",O:0,J:"None",aU:6,P:0,aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aZ:0,aL:4,A:"#A0A0A0",B:"#A0A0A0",aM:"144_hover",Z:"break-word",C:"#A0A0A0",r:"inline",s:"Impact,'Arial Narrow Bold',Sans-Serif",D:"#A0A0A0",t:72,aA:{a:[{d:1.1000000000000001,p:1,g:1,e:"1"}]},F:"center",G:"#FF2600",aP:"pointer",w:"PLAY AGAIN?",bA:"#FFFFFF",x:"visible",I:"None",a:200,y:"preserve",bB:2},"213":{G:"#FFFFFF",aU:8,c:584,aV:8,d:1184,r:"inline",s:"Impact,'Arial Narrow Bold',Sans-Serif",t:24,Z:"break-word",w:"<h1 style=\"text-align: center;\"><span style=\"font-size: 96px; text-shadow: rgb(0, 0, 0) 2px 2px 0px;\"><font color=\"#ff2600\">MEMORY</font></span></h1>\n<br>\n<style>\n\ttr { height: 60px; }\n</style>\n<table>\n\t<tbody>\n\t<tr>\n\t\t<td style=\"width: 300px;\"><font color=\"#ffffff\">MODDED BY</font></td>\n\t\t<td><font color=\"#ffffff\">Jesse M</font></td>\n\t</tr>\n\t<tr>\n\t\t<td><font color=\"#ffffff\">JAVASCRIPT CODE BY</font></td>\n\t\t<td><font color=\"#ffffff\">Darren Pearson</font></td>\n\t</tr>\n\t<tr>\n\t\t<td><font color=\"#ffffff\">BACKGROUND MUSIC BY</font></td>\n\t\t<td><a href=\"https://twitter.com/RoccoWNL\" target=\"_blank\"><font color=\"#ffffff\">RoccoWNL</font></a></td>\n\t</tr>\n\t<tr>\n\t\t<td><font color=\"#ffffff\">SOFTWARE</font></td>\n\t\t<td><a href=\"https://tumult.com/hype/\" target=\"_blank\"><font color=\"#ffffff\">Tumult Hype</font></a></td>\n\t</tr>\n\t<tr>\n\t\t<td><font color=\"#fffb00\">SPECIAL THANKS TO:</font></td>\n\t\t<td><font color=\"#fffb00\">Saint Paul College</font></td>\n\t</tr>\n\t<tr>\n\t\t<td></td>\n\t\t<td><font color=\"#fffb00\">Mom</font></td>\n\t</tr>\n\t<tr>\n\t\t<td></td>\n\t\t<td><font color=\"#fffb00\">Dad</font></td>\n\t</tr>\n\t<tr>\n\t\t<td></td>\n\t\t<td><font color=\"#fffb00\">Fiance</font></td>\n\t</tr>\n\t<tr>\n\t\t<td></td>\n\t\t<td><font color=\"#fffb00\">Miko</font></td>\n\t</tr>\n\t<tr>\n\t\t<td></td>\n\t\t<td><font color=\"#fffb00\">Kiko</font></td>\n\t</tr>\n</tbody>\n</table>\n<font color=\"#fffb00\"><br>\n</font><hr style=\"width: 80%; height: 5px; background-color: white;\"> \n<font color=\"#fffb00\"><br>\n</font><h3 style=\"text-align: center;\"><font color=\"#fffb00\">Please Check Out More Student Games At:</font></h3>\n<h3 style=\"text-align: center;\"><a href=\"http://www.darrenscorner.com/retrogamedesign/less/student/index.html\" target=\"_blank\"><font color=\"#fffb00\">RetroGameDesign.com</font></a></h3>\n<font color=\"#fffb00\"><br>\n</font><hr style=\"width: 80%; height: 5px; background-color: white;\"> \n<br>\n\t\n",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,aT:8,a:100,F:"left",b:600}}}],{},g,{h:[[0,0,0.175,0.885,0.32,1.25,1,1]]},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
