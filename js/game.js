const QL=(()=>{try{return localStorage.getItem('banq')||'a'}catch(e){return'a'}})();
if(typeof THREE!=='undefined'&&!THREE.__srgb){THREE.__srgb=1;const o=THREE.Color.prototype.set;THREE.Color.prototype.set=function(v){o.call(this,v);if(!(v&&v.isColor))this.convertSRGBToLinear();return this}}
const $=id=>document.getElementById(id),C=$('c'),X=C.getContext('2d'),MM=$('mm'),Y=MM.getContext('2d'),FC=$('fc').getContext('2d');
let N=4,SZ=9000,B=3000;const RW=244,L=68,LOW=QL=='l'||(QL!='h'&&/Android|iPhone|iPad|Mobi/i.test(navigator.userAgent)&&location.hash!='#hq'),DX=[1,0,-1,0],DY=[0,1,0,-1],LN=[[0,-L],[L,0],[0,L],[-L,0]],PI=Math.PI,LO=(d,k)=>{const m=32+36*k,u=LN[d];return[u[0]?Math.sign(u[0])*m:0,u[1]?Math.sign(u[1])*m:0]};
const R=(a,b)=>a+Math.random()*(b-a),RI=n=>Math.floor(Math.random()*n),hs=(i,j,k)=>{const h=Math.sin(i*127.1+j*311.7+k*74.7)*43758.5;return h-Math.floor(h)};
const CITIES=[
{id:'sylhet',sc:6,ex:{"Keane Bridge": [24.9062, 91.8545], "Kajolshah": [24.915, 91.887]},rd:[["M", "Keane Bridge", "Bondor", "Chowhatta", "Zindabazar", "Kumarpara", "Subid Bazar", "Tilagor"], ["M", "Zindabazar", "Modina Market", "Lamabazar"], ["m", "Zindabazar", "Dargah Gate", "Ambarkhana", "Shibganj", "Kajolshah"], ["m", "Ambarkhana", "Tilagor"], ["m", "Chowhatta", "Dargah Gate"], ["m", "Modina Market", "Mirboxtula", "Kumarpara"], ["m", "Mirboxtula", "Subid Bazar"], ["m", "Dargah Gate", "Kumarpara"], ["m", "Lamabazar", "Mirboxtula"]],wt:[["riv", 450, [[24.915, 91.83], [24.91, 91.85], [24.9075, 91.8575], [24.912, 91.87], [24.92, 91.885], [24.923, 91.9]]]],n:'Sylhet',b:'সিলেট',ll:[24.895,91.869],N:5,tr:1,rain:.4,fog:.2,fare:1.1,gnd:'#2f6b3a',pal:['#c9b79c','#b08968','#8d99ae','#a8dadc','#e9c46a','#d4a5a5'],hm:160,tree:'#1f6b3a',pk:.25,wat:'n',cops:6,unl:0,
 stops:[['Zindabazar','জিন্দাবাজার',24.8947,91.8683],['Ambarkhana','আম্বরখানা',24.9050,91.8725],['Subid Bazar','সুবিদবাজার',24.8973,91.8792],['Bondor','বন্দর',24.9035,91.8566],['Tilagor','টিলাগড়',24.9021,91.8801],['Lamabazar','লামাবাজার',24.8862,91.8643],['Kumarpara','কুমারপাড়া',24.8964,91.8733],['Dargah Gate','দরগা গেইট',24.9005,91.8696],['Chowhatta','চৌহাট্টা',24.8993,91.8664],['Modina Market','মদিনা মার্কেট',24.8952,91.8668],['Shibganj','শিবগঞ্জ',24.9120,91.8764],['Mirboxtula','মীরবক্সটুলা',24.8930,91.8726]]},
{id:'rajshahi',sc:5,ex:{"Greater Rd": [24.359, 88.619]},rd:[["M", "Binodpur", "Kazla", "Talaimari", "Shaheb Bazar", "Alupotti", "Boalia", "Rail Gate", "Laxmipur", "Sapura"], ["m", "Rajshahi University", "Kazla"], ["m", "Rajshahi University", "Binodpur"], ["M", "Padma Garden", "Greater Rd", "Talaimari"], ["m", "Padma Garden", "Shaheb Bazar"], ["m", "Padma Garden", "Bhadra", "Alupotti"], ["m", "Bhadra", "Boalia"], ["m", "Shaheb Bazar", "Bhadra"], ["m", "Talaimari", "Rajshahi University"]],wt:[["riv", 1400, [[24.348, 88.56], [24.352, 88.58], [24.354, 88.6], [24.353, 88.62], [24.357, 88.645], [24.365, 88.67]]]],n:'Rajshahi',b:'রাজশাহী',ll:[24.3745,88.6042],N:4,tr:.75,rain:.1,fog:.15,fare:.9,gnd:'#6f8a3d',pal:['#d8c3a5','#e0b88a','#c9d6a3','#e8d9b5'],hm:130,tree:'#4c8a2b',pk:.3,wat:'s',cops:6,unl:0,
 stops:[['Shaheb Bazar','সাহেব বাজার',24.3667,88.6039],['Binodpur','বিনোদপুর',24.3748,88.6402],['Kazla','কাজলা',24.3700,88.6352],['Talaimari','তালাইমারী',24.3702,88.6141],['Laxmipur','লক্ষ্মীপুর',24.3805,88.5922],['Rajshahi University','রাজশাহী বিশ্ববিদ্যালয়',24.3635,88.6380],['Padma Garden','পদ্মা গার্ডেন',24.3600,88.5995],['Bhadra','ভদ্রা',24.3672,88.5943],['Alupotti','আলুপট্টি',24.3700,88.6007],['Sapura','সপুরা',24.3893,88.5758],['Rail Gate','রেলগেট',24.3774,88.5946],['Boalia','বোয়ালিয়া',24.3732,88.5965]]},
{id:'cox',sc:4,ex:{},rd:[["M", "Marine Drive", "Kolatoli", "Hotel-Motel Zone", "Sugandha Point", "Laboni Beach", "Lighthouse", "Burmese Market"], ["M", "Burmese Market", "Bus Terminal", "Jhilongja", "Airport"], ["m", "Lighthouse", "Jhilongja"], ["m", "Court Building", "Kolatoli"], ["m", "Court Building", "Sugandha Point"], ["m", "Court Building", "Medical College"], ["m", "Medical College", "Burmese Market"], ["m", "Medical College", "Bus Terminal"]],wt:[["sea", [[21.39, 91.93], [21.39, 91.9725], [21.416, 91.9715], [21.4258, 91.9735], [21.434, 91.973], [21.448, 91.959], [21.47, 91.945], [21.47, 91.93]]]],n:"Cox's Bazar",b:'কক্সবাজার',ll:[21.4272,92.0058],N:4,tr:.8,rain:.35,fog:.05,fare:1.15,gnd:'#dcc98a',pal:['#f4d6cc','#a8dadc','#f6bd60','#84a59d','#f28482'],hm:180,tree:'#2f8a4a',pk:.2,wat:'w',cops:6,unl:0,
 stops:[['Laboni Beach','লাবণী বিচ',21.4258,91.9764],['Kolatoli','কলাতলী',21.4160,91.9741],['Airport','বিমানবন্দর',21.4522,91.9639],['Medical College','মেডিকেল কলেজ',21.4337,91.9857],['Marine Drive','মেরিন ড্রাইভ',21.4000,91.9800],['Burmese Market','বার্মিজ মার্কেট',21.4345,91.9812],['Bus Terminal','বাস টার্মিনাল',21.4423,91.9889],['Jhilongja','ঝিলংজা',21.4467,91.9778],['Court Building','আদালত ভবন',21.4237,91.9854],['Sugandha Point','সুগন্ধা পয়েন্ট',21.4231,91.9769],['Lighthouse','লাইটহাউস',21.4300,91.9760],['Hotel-Motel Zone','হোটেল মোটেল জোন',21.4180,91.9745]]},
{id:'khulna',sc:3,ex:{},rd:[["M", "Fulbarigate", "Khalishpur", "Shibbari Mor", "Royal Mor", "Dak Bungalow", "Rupsha"], ["M", "Daulatpur", "Khalishpur"], ["m", "Fulbarigate", "Daulatpur"], ["M", "Shibbari Mor", "Boyra", "Dak Bungalow"], ["m", "Nirala", "Royal Mor"], ["M", "Gollamari", "Sonadanga", "Moylapota", "Dak Bungalow"], ["m", "Boyra", "Moylapota"], ["m", "Gollamari", "Khalishpur"], ["m", "Boyra", "Royal Mor"]],wt:[["riv", 900, [[22.9, 89.605], [22.85, 89.595], [22.8, 89.59], [22.76, 89.585]]]],n:'Khulna',b:'খুলনা',ll:[22.8456,89.5403],N:4,tr:1,rain:.3,fog:.1,fare:1,gnd:'#4f7a45',pal:['#b8c0cc','#d6c6a5','#9db4c0','#c4a69b'],hm:150,tree:'#3a7a3a',pk:.15,wat:'e',cops:6,unl:0,
 stops:[['Sonadanga','সোনাডাঙ্গা',22.7960,89.5440],['Daulatpur','দৌলতপুর',22.8681,89.5189],['Khalishpur','খালিশপুর',22.8195,89.5415],['Shibbari Mor','শিববাড়ী মোড়',22.8168,89.5456],['Boyra','বয়রা',22.8159,89.5545],['Fulbarigate','ফুলবাড়ী গেট',22.8693,89.5287],['Royal Mor','রয়েল মোড়',22.8238,89.5528],['Gollamari','গল্লামারী',22.8040,89.5307],['Moylapota','ময়লাপোতা',22.8014,89.5522],['Rupsha','রূপসা',22.7842,89.5826],['Nirala','নিরালা',22.8203,89.5409],['Dak Bungalow','ডাকবাংলা',22.8167,89.5586]]},
{id:'ctg',sc:2.5,ex:{},rd:[["M", "Bahaddarhat", "Muradpur", "2 No Gate", "GEC Circle", "Dampara", "New Market", "Kotwali", "Agrabad", "Halishahar", "Patenga"], ["m", "Pahartali", "GEC Circle"], ["m", "Pahartali", "Agrabad"], ["m", "Chawkbazar", "2 No Gate"], ["m", "Chawkbazar", "Kotwali"], ["m", "Muradpur", "Chawkbazar"], ["m", "Dampara", "Kotwali"], ["m", "Agrabad", "Dampara"]],wt:[["riv", 900, [[22.36, 91.895], [22.338, 91.87], [22.32, 91.845], [22.31, 91.83], [22.28, 91.815], [22.24, 91.8]]], ["sea", [[22.4, 91.7], [22.4, 91.77], [22.35, 91.776], [22.325, 91.779], [22.28, 91.787], [22.23, 91.795], [22.2, 91.8], [22.2, 91.7]]]],n:'Chattogram',b:'চট্টগ্রাম',ll:[22.3569,91.7832],N:5,tr:1.3,rain:.45,fog:.05,fare:1.25,gnd:'#456b45',pal:['#c5b9a8','#9fb1bc','#d4b483','#a5a58d','#8a9bb0'],hm:230,tree:'#2f6b3a',pk:.12,wat:'s',cops:8,unl:0,
 stops:[['GEC Circle','জিইসি মোড়',22.3589,91.8212],['Agrabad','আগ্রাবাদ',22.3250,91.8120],['Pahartali','পাহাড়তলী',22.3719,91.8049],['Chawkbazar','চকবাজার',22.3552,91.8390],['Dampara','দামপাড়া',22.3393,91.8277],['Muradpur','মুরাদপুর',22.3667,91.8324],['Halishahar','হালিশহর',22.3303,91.7813],['Patenga','পতেঙ্গা',22.2480,91.8030],['New Market','নিউ মার্কেট',22.3401,91.8316],['Bahaddarhat','বহদ্দারহাট',22.3789,91.8397],['2 No Gate','২ নম্বর গেট',22.3627,91.8307],['Kotwali','কোতোয়ালী',22.3387,91.8352]]},
{id:'dhaka',sc:2.2,ex:{"Airport": [23.8512, 90.4], "Kuril": [23.821, 90.421], "Gulshan 1": [23.7806, 90.4166], "Badda": [23.7805, 90.426], "Rampura": [23.762, 90.425], "Technical": [23.783, 90.354], "Asad Gate": [23.762, 90.372], "Science Lab": [23.739, 90.3828], "Gulistan": [23.725, 90.4117]},rd:[["M", "Uttara", "Airport", "Banani", "Mohakhali", "Farmgate", "Shahbag", "Gulistan", "Sadarghat"], ["M", "Gulistan", "Motijheel", "Kamalapur"], ["M", "Airport", "Kuril", "Badda", "Gulshan 1", "Mohakhali"], ["m", "Gulshan 1", "Gulshan 2", "Banani"], ["m", "Badda", "Rampura", "Kamalapur"], ["M", "Mirpur 10", "Technical", "Asad Gate", "Dhanmondi 27", "Science Lab", "Shahbag"], ["m", "Gabtoli", "Technical"], ["m", "Mirpur 10", "Mohakhali"], ["m", "Asad Gate", "Farmgate"], ["m", "Mirpur 10", "Airport"], ["m", "Science Lab", "Gulistan"], ["m", "Motijheel", "Shahbag"]],wt:[["riv", 700, [[23.715, 90.33], [23.708, 90.36], [23.706, 90.39], [23.706, 90.408], [23.69, 90.43], [23.68, 90.45]]]],n:'Dhaka',b:'ঢাকা',ll:[23.8103,90.4125],N:5,tr:1.7,rain:.2,fog:.2,fare:1.4,gnd:'#5a6b4a',pal:['#b9b3a7','#9aa5b1','#c5b8a5','#a3aab5','#d0c2a8','#8f9aa6'],hm:340,tree:'#3f7a3a',pk:.08,wat:'s',smog:1,cops:11,unl:0,
 stops:[['Farmgate','ফার্মগেট',23.7561,90.3897],['Gulshan 2','গুলশান ২',23.7925,90.4143],['Motijheel','মতিঝিল',23.7338,90.4175],['Mirpur 10','মিরপুর ১০',23.8069,90.3687],['Shahbag','শাহবাগ',23.7390,90.3958],['Mohakhali','মহাখালী',23.7783,90.4046],['Dhanmondi 27','ধানমন্ডি ২৭',23.7510,90.3735],['Banani','বনানী',23.7937,90.4066],['Uttara','উত্তরা',23.8759,90.3795],['Sadarghat','সদরঘাট',23.7085,90.4072],['Kamalapur','কমলাপুর',23.7311,90.4268],['Gabtoli','গাবতলী',23.7786,90.3447]]}];
let ci=(()=>{try{const v=+localStorage.getItem('bancity');return v>=0&&v<CITIES.length?v:0}catch(e){return 0}})(),CT=CITIES[ci],career=(()=>{try{return+localStorage.getItem('bancareer')||0}catch(e){return 0}})();const PR=105;
const MD=[{n:'City Coach',d:'Balanced',c:'#f97316',s:'#ffffff',mx:520,ac:290,tank:120,cap:50,cf:1,hp:100,fare:1,len:88,turn:1,cd:330,ch:150,eye:44,mass:1.6,pr:105},
{n:'Express AC',d:'Fast, premium fares',c:'#2563eb',s:'#e5e7eb',mx:610,ac:330,tank:140,cap:40,cf:1.1,hp:90,fare:1.6,len:92,turn:.95,cd:330,ch:150,eye:46,mass:1.6,pr:105},
{n:'Mini Bus',d:'Nimble, thrifty',c:'#f59e0b',s:'#111827',mx:495,ac:360,tank:70,cap:25,cf:.6,hp:80,fare:.9,len:70,turn:1.3,cd:300,ch:135,eye:40,mass:1.1,pr:105},
{n:'Double Decker',d:'Heavy, tough, 80 seats',c:'#dc2626',s:'#fde047',mx:430,ac:230,tank:160,cap:80,cf:1.4,hp:150,fare:1.1,len:96,turn:.75,cd:400,ch:190,eye:62,mass:2.2,pr:105},{n:'CNG Auto',d:'Tiny, quick, thrifty',c:'#15803d',s:'#111827',mx:430,ac:380,tank:14,cap:3,cf:.3,hp:60,fare:.9,len:42,turn:1.7,cd:210,ch:105,eye:26,mass:.6,pr:43},{n:'City Car',d:'Quick taxi, 4 seats',c:'#facc15',s:'#111827',mx:560,ac:380,tank:45,cap:4,cf:.35,hp:80,fare:1.3,len:58,turn:1.5,cd:230,ch:105,eye:30,mass:.9,pr:125}];
let sel=(()=>{try{const v=+localStorage.getItem('banveh');return v>=0&&v<6?v:0}catch(e){return 0}})();const MO=()=>MD[sel];
const CC=['#e11d48','#2563eb','#f59e0b','#8b5cf6','#06b6d4','#e5e7eb','#f97316','#14b8a6'],BP=['#c9b79c','#b08968','#8d99ae','#a8dadc','#e9c46a','#d4a5a5','#9db4c0'];
let W,H,Z,dpr,S,stops,stn,cars,peds,cd,keys={},run=false,paused=false,last=0,dp,showMap=false,cops=[],drops=[],DK=document.createElement('canvas'),DKX=DK.getContext('2d');
function rs(){dpr=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;C.width=W*dpr;C.height=H*dpr;DK.width=C.width;DK.height=C.height;Z=Math.max(.55,Math.min(1.3,Math.min(W,H)/640));if(ren){ren.setSize(W,H);cam.aspect=W/H;cam.updateProjectionMatrix()}}
addEventListener('resize',rs);rs();
const best=()=>{try{return+localStorage.getItem(bkey())||0}catch(e){return 0}};
function mission(){let a,b;do{a=RI(stops.length);b=RI(stops.length)}while(a==b);S.m={p:a,d:b,load:0,pax:Math.max(1,Math.round(MO().cap*(.4+.6*Math.random()))),tl:0,hold:0}}
const tgt=()=>S.obj||stops[S.m.load?S.m.d:S.m.p]||{x:S.bus.x,y:S.bus.y};
function toast(t,c){const e=document.createElement('div');e.className='t '+c;e.textContent=t;$('toasts').append(e);setTimeout(()=>e.remove(),2600)}
function cop(){const b=S.bus;return cops.some(c=>Math.hypot(c.x-b.x,c.y-b.y)<300)||cars.some(c=>c.pol&&Math.hypot(c.x-b.x,c.y-b.y)<300)}
function fine(a,why){if(S.nofine)return;if(why!='Towing fee'&&cop()){a*=2;why+=' (traffic police)';[0,1].forEach(i=>tone(1900,.12,'square',.06,i*.18))}S.money-=a;S.fines+=a;toast('−৳'+a.toLocaleString()+' '+why,'bad');tone(220,.35,'square',.12,0,110)}
function fineCd(k,s,a,why){if(S.t>(cd[k]||0)){cd[k]=S.t+s;fine(a,why)}}
function end(why){run=false;const sc=Math.max(0,S.score|0),nb=sc>best();if(MODE=='city'||MODE=='hwy')career+=sc;try{if(nb)localStorage.setItem(bkey(),sc);localStorage.setItem('bancareer',career)}catch(e){}
 const km=(S.dist/260).toFixed(1),fi='৳'+S.fines.toLocaleString(),body={city:`Deliveries ${S.del} · Earned ৳${sc.toLocaleString()} · Fines ${fi}`,free:`Distance ${km} km · Fines ${fi}`,hwy:`Fines ${fi}`,endless:`Distance ${km} km · Near misses ${S.nm} · Score ${sc}`,derby:`Takedowns ${S.kills} · Wave ${S.wave} · Score ${sc.toLocaleString()}`,train:''}[MODE];
 show('Game over',`<p><b>${why}</b></p><p>${body}</p><p>${nb&&sc>0?'New best score!':'Best: '+best().toLocaleString()}</p>`,'Play again','over')}
function arrive(){run=false;const sc=S.score|0,nb=sc>best();career+=sc;try{if(nb)localStorage.setItem(bkey(),sc);localStorage.setItem('bancareer',career)}catch(e){}
 show('Arrived in '+CITIES[DEST].n+'!',`<p>${(S.dist/260).toFixed(0)} km · Earned ৳${sc.toLocaleString()} · Fines ৳${S.fines.toLocaleString()}</p><p>${nb?'New best!':''}</p>`,'Play again','over')}
function loc(o){const b=S.bus,dx=o.x-b.x,dy=o.y-b.y,c=Math.cos(b.a),s=Math.sin(b.a);return[dx*c+dy*s,-dx*s+dy*c]}
function hr(){return((S.h0==null?7:S.h0)+S.t*(S.rate||.1))%24}
var ren,scn,cam,wld,dyn,busM,tail,arrow,beam,tring,mh,mv,HM,SU,SP,WT,WE,RT,matB=[],camA=0,cockpit=false,ws=0,DT=.016,lastDk=-1,MB={};
const bm=c=>MB[c]||(MB[c]=new THREE.MeshLambertMaterial({color:c})),em=c=>MB['e'+c]||(MB['e'+c]=new THREE.MeshBasicMaterial({color:c}));
function bx(w,h,d,c,x,y,z,p){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),typeof c=='string'?bm(c):c);m.position.set(x,y,z);if(p)p.add(m);return m}
function cy(r,h,c,x,y,z,p,n=10){const m=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,n),typeof c=='string'?bm(c):c);m.position.set(x,y,z);if(p)p.add(m);return m}
function wh(x,z,r,p){const m=cy(r,5,'#111827',x,r,z,p,12);m.rotation.x=PI/2;return m}
function im(g,m,pts,grp){const I=new THREE.InstancedMesh(g,m,pts.length),d=new THREE.Object3D();pts.forEach((p,i)=>{d.scale.setScalar(p[3]||1);d.rotation.y=p[4]||0;d.position.set(p[0],p[1],p[2]);d.updateMatrix();I.setMatrixAt(i,d.matrix)});I.frustumCulled=false;(grp||wld).add(I)}
function wtex(e){const c=document.createElement('canvas');c.width=c.height=64;const g=c.getContext('2d');g.fillStyle=e?'#000':'#d5dbe2';g.fillRect(0,0,64,64);g.fillStyle=e?'#ffd37a':'#3b4a5c';for(let i=0;i<2;i++)for(let j=0;j<2;j++)g.fillRect(7+i*32,8+j*32,18,18);const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;return t}
function label(t1,t2,w){const c=document.createElement('canvas');c.width=256;c.height=96;const g=c.getContext('2d');g.fillStyle='#000a';g.fillRect(0,0,256,96);g.fillStyle='#fff';g.textAlign='center';g.font='bold 28px system-ui';g.fillText(t1,128,38,240);g.font='26px system-ui';g.fillStyle='#fde68a';g.fillText(t2||'',128,76,240);const s=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(c),depthWrite:false}));s.scale.set(w,w*96/256,1);return s}
var sky,sunS,cm,GT,BK,BM={};
const BS=(c,r,m)=>MB['s'+c+r+m]||(MB['s'+c+r+m]=new THREE.MeshStandardMaterial({color:c,roughness:r,metalness:m}));
function mtex(f,w,h){const c=document.createElement('canvas');c.width=w;c.height=h;f(c.getContext('2d'),w,h);const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.anisotropy=4;t.encoding=THREE.sRGBEncoding;return t}
function fac(g,e){g.fillStyle=e?'#000':'#e6e1d6';g.fillRect(0,0,128,128);for(let i=0;i<4;i++)for(let j=0;j<4;j++){const x=8+i*30,y=8+j*30;if(e){g.fillStyle=Math.random()<.45?'#ffd27a':'#000';g.fillRect(x,y,20,22)}else{const q=g.createLinearGradient(0,y,0,y+22);q.addColorStop(0,'#a9d3f2');q.addColorStop(1,'#3d6a8f');g.fillStyle=q;g.fillRect(x,y,20,22);g.fillStyle='#00000040';g.fillRect(x,y+20,20,3)}}}
function init3(){
 if(typeof THREE=='undefined')return;
 try{ren=new THREE.WebGLRenderer({antialias:!LOW,powerPreference:'high-performance'})}catch(e){ren=null;return}ren.outputEncoding=THREE.sRGBEncoding;ren.toneMapping=THREE.ACESFilmicToneMapping;ren.toneMappingExposure=1.0;
 ren.setPixelRatio(LOW?Math.min(dpr,1.5):dpr);ren.setSize(W,H);if(!LOW){ren.shadowMap.enabled=true;ren.shadowMap.type=THREE.PCFSoftShadowMap}
 const e=ren.domElement;e.style.cssText='position:fixed;inset:0;width:100%;height:100%';C.before(e);
 scn=new THREE.Scene();scn.fog=new THREE.Fog(0xe8f4ff,1400,4500);cam=new THREE.PerspectiveCamera(60,W/H,3,5200);scn.add(cam);
 HM=new THREE.HemisphereLight(0xdfeeff,0x6b7a55,1);SU=new THREE.DirectionalLight(0xfff3d6,.9);SP=new THREE.SpotLight(0xfff2c0,0,800,.55,.5);
 if(!LOW){SU.castShadow=true;SU.shadow.mapSize.set(2048,2048);const q=SU.shadow.camera;q.left=-900;q.right=900;q.top=900;q.bottom=-900;q.near=100;q.far=2800;SU.shadow.bias=-.0004}
 scn.add(HM);scn.add(SU);scn.add(SU.target);scn.add(SP);scn.add(SP.target);wld=new THREE.Group();dyn=new THREE.Group();scn.add(wld);scn.add(dyn);
 WT=mtex((g)=>fac(g,0),128,128);WE=mtex((g)=>fac(g,1),128,128);
 RT=mtex((g,w,h)=>{g.fillStyle='#32363d';g.fillRect(0,0,w,h);for(let k=0;k<500;k++){g.fillStyle=Math.random()<.5?'#383d44':'#2d3136';g.fillRect(Math.random()*w,Math.random()*h,2,2)}g.fillStyle='#f5c518';g.fillRect(111,0,3,h);g.fillRect(142,0,3,h);g.fillStyle='#fff';[75,181,38,218].forEach(x=>g.fillRect(x-1,0,3,80));g.fillStyle='#ffffffdd';g.fillRect(4,0,4,h);g.fillRect(248,0,4,h)},256,160);
 GT=mtex((g,w,h)=>{g.fillStyle='#e0e0e0';g.fillRect(0,0,w,h);for(let k=0;k<500;k++){g.fillStyle=Math.random()<.5?'#c4c4c4':'#f4f4f4';g.fillRect(Math.random()*w,Math.random()*h,3,3)}},128,128);
 BK=mtex((g,w,h)=>{g.fillStyle='#d9a98a';g.fillRect(0,0,64,64);g.strokeStyle='#b9825f';g.lineWidth=2;for(let y=0;y<64;y+=16){g.strokeRect(-1,y,33,16);g.strokeRect(31,y+8,33,16)}},64,64);
 sky=new THREE.Mesh(new THREE.SphereGeometry(4000,24,16),new THREE.MeshBasicMaterial({map:mtex((g,w,h)=>{const q=g.createLinearGradient(0,0,0,h);q.addColorStop(0,'#2a78dc');q.addColorStop(.3,'#6db4fb');q.addColorStop(.5,'#e8f4ff');q.addColorStop(1,'#e8f4ff');g.fillStyle=q;g.fillRect(0,0,w,h)},4,256),side:THREE.BackSide,fog:false,depthWrite:false}));scn.add(sky);
 sunS=new THREE.Sprite(new THREE.SpriteMaterial({map:mtex((g)=>{const q=g.createRadialGradient(64,64,0,64,64,64);q.addColorStop(0,'rgba(255,250,220,1)');q.addColorStop(.25,'rgba(255,240,190,.7)');q.addColorStop(1,'rgba(255,230,160,0)');g.fillStyle=q;g.fillRect(0,0,128,128)},128,128),fog:false,depthWrite:false,transparent:true}));sunS.scale.set(800,800,1);scn.add(sunS);
 WT.wrapS=WT.wrapT=WE.wrapS=WE.wrapT=THREE.RepeatWrapping;
 RT2=mtex((g,w,h)=>{g.fillStyle='#32363d';g.fillRect(0,0,w,h);for(let k=0;k<400;k++){g.fillStyle=Math.random()<.5?'#383d44':'#2d3136';g.fillRect(Math.random()*w,Math.random()*h,2,2)}g.fillStyle='#f5c518';g.fillRect(61,0,2,h);g.fillRect(65,0,2,h);g.fillStyle='#fff';[32,96].forEach(x=>g.fillRect(x-1,0,3,80));g.fillStyle='#ffffffdd';g.fillRect(3,0,3,h);g.fillRect(122,0,3,h)},128,160);
 GLOW=mtex((g)=>{const q=g.createRadialGradient(64,64,0,64,64,64);q.addColorStop(0,'rgba(255,248,210,1)');q.addColorStop(.3,'rgba(255,240,190,.5)');q.addColorStop(1,'rgba(255,230,160,0)');g.fillStyle=q;g.fillRect(0,0,128,128)},128,128);
 {const n=900,pos=new Float32Array(n*6);rainD=[];for(let i=0;i<n;i++)rainD.push({x:R(-700,700),y:R(-250,450),z:R(-700,700)});const gm=new THREE.BufferGeometry();gm.setAttribute('position',new THREE.BufferAttribute(pos,3));rainL=new THREE.LineSegments(gm,new THREE.LineBasicMaterial({color:'#cfe3ff',transparent:true,opacity:.3,fog:false,depthWrite:false}));rainL.frustumCulled=false;rainL.visible=false;scn.add(rainL)}
mh=em('#22c55e').clone();mv=em('#ef4444').clone()}
function shd(g){g.traverse(o=>{if(o.isMesh&&!o.userData.gh)o.castShadow=true})}
function pl(w,h,c,x,y,z,rz){const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),typeof c=='string'?bm(c):c);m.rotation.set(-PI/2,0,rz||0);m.position.set(x,y,z);wld.add(m);return m}
function clouds(){if(cl)scn.remove(cl);cl=new THREE.Group();const t=mtex((g)=>{for(let k=0;k<9;k++){const x=40+Math.random()*176,y=44+Math.random()*40,r=26+Math.random()*26,q=g.createRadialGradient(x,y,0,x,y,r);q.addColorStop(0,'rgba(255,255,255,.95)');q.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=q;g.beginPath();g.arc(x,y,r,0,7);g.fill()}},256,128);
 cm=new THREE.SpriteMaterial({map:t,fog:false,depthWrite:false,transparent:true});for(let k=0;k<22;k++){const s=new THREE.Sprite(cm),a=Math.random()*6.28,r=1500+Math.random()*1800;s.position.set(Math.cos(a)*r,500+Math.random()*350,Math.sin(a)*r);s.scale.set(900+Math.random()*600,450+Math.random()*250,1);cl.add(s)}scn.add(cl)}
function mkPed(p){const g=new THREE.Group();g.scale.setScalar(1.4);cy(3.6,16,p.col,0,9,0,g,8);const h=new THREE.Mesh(new THREE.SphereGeometry(3.6,8,6),bm('#f1c6a0'));h.position.y=20;g.add(h);return g}
function mkCop(){const g=new THREE.Group(),ar=new THREE.Group();cy(10,5,'#e5e7eb',0,2.5,0,g);cy(4.5,18,'#7dd3fc',0,14,0,g);const h=new THREE.Mesh(new THREE.SphereGeometry(3.8,8,6),bm('#f1c6a0'));h.position.y=26;g.add(h);cy(4.2,2,'#1e3a8a',0,29,0,g);ar.position.y=21;bx(20,3,3,'#7dd3fc',10,0,0,ar);g.add(ar);const lb=label('Police','পুলিশ',70);lb.position.y=48;g.add(lb);return{g,ar}}
var gear=1,engine=true,door=false,haz=false,lights=false,belt=true,fnav=false,camD=0,ind=[],HELP='',cl;
(function(){const tg=(id,fn)=>{$(id).onclick=()=>{const on=fn();$(id).classList.toggle('on',on);tone(520,.06,'square',.04)}};
 tg('bh',()=>haz=!haz);tg('bl',()=>lights=!lights);tg('bf',()=>fnav=!fnav);
 tg('bk',()=>{engine=!engine;toast(engine?'Engine started':'Engine off','good');return engine});
 $('bg').onclick=()=>{gear=-gear;$('bg').textContent=gear>0?'D':'R';$('bg').classList.toggle('on',gear<0);toast(gear>0?'Drive':'Reverse','good')};
 $('bv').onclick=()=>{camD=(camD+1)%3};
 $('bq').onclick=()=>{if(run)paused=true;show('How to play',HELP,'Resume','help')};
 document.querySelectorAll('button').forEach(b=>b.addEventListener('pointerup',()=>b.blur()));
 const KB={KeyL:'bl',KeyK:'bk',KeyR:'bg',KeyZ:'bh',KeyF:'bf',KeyV:'bv',KeyT:'bauto'};
 addEventListener('keydown',e=>{if(KB[e.code]&&!e.repeat)$(KB[e.code]).click()})})();
var ROUTE=[],FRM=0,chev,BCOL=(()=>{try{return localStorage.getItem('bancolor')||''}catch(e){return''}})();
function nearStn(){const b=S.bus;if(!stn.length)return{x:b.x,y:b.y};return stn.reduce((a,c)=>Math.hypot(c.x-b.x,c.y-b.y)<Math.hypot(a.x-b.x,a.y-b.y)?c:a)}
const lum=c=>{const n=parseInt(c.slice(1),16);return(.299*(n>>16)+.587*(n>>8&255)+.114*(n&255))/255};
function colorUI(){const s=$('colr');s.innerHTML='';const cur=(BCOL||MO().c).toLowerCase();const d=document.createElement('button');d.textContent='Default';d.className='dflt'+(BCOL?'':' on');d.onclick=()=>setCol('');s.append(d);
 ['#f97316','#16a34a','#2563eb','#dc2626','#facc15','#f3f4f6','#1f2937','#7c3aed','#0d9488','#ec4899'].forEach(c=>{const b=document.createElement('button');b.className='sw'+(BCOL&&c==cur?' on':'');b.style.background=c;b.setAttribute('aria-label','Bus colour '+c);b.onclick=()=>setCol(c);s.append(b)});
 const i=document.createElement('input');i.type='color';i.value=BCOL||MO().c;i.setAttribute('aria-label','Custom colour');i.oninput=()=>setCol(i.value);s.append(i)}
function setCol(c){BCOL=c;try{localStorage.setItem('bancolor',c)}catch(e){}colorUI();rebuildBus()}
function rebuildBus(){if(!ren||!busM)return;dyn.remove(busM);busM=mkBus();shd(busM);dyn.add(busM);buildInterior()}
var MODE='city',DEST=1,HL=60000,rv=[],fxs=[],OB=[],OBS=[],OVK='menu';
const isCity=()=>MODE=='city'||MODE=='free'||MODE=='train',HWY=()=>MODE=='hwy'||MODE=='endless',bkey=()=>MODE=='city'?'banbest'+CT.id:'banbest_'+MODE,cl2=(v,a,c)=>Math.max(a,Math.min(c,v));
const trafficN=()=>MODE=='train'||MODE=='derby'?0:MODE=='scenic'?Math.round(CT.tr*9):MODE=='hwy'?12:MODE=='endless'?14:Math.round(CT.tr*16);
const trafficCap=()=>MODE=='train'||MODE=='derby'?0:MODE=='scenic'?Math.round(CT.tr*10):MODE=='hwy'?20:MODE=='endless'?Math.min(46,16+Math.floor(S.dist/9000)*2):Math.min(56,Math.round(CT.tr*16)+S.lvl*3);
function DIST(a,b){const p=CITIES[a].ll,q=CITIES[b].ll,r=PI/180,dl=(q[0]-p[0])*r,dn=(q[1]-p[1])*r,h=Math.sin(dl/2)**2+Math.cos(p[0]*r)*Math.cos(q[0]*r)*Math.sin(dn/2)**2;return Math.round(12742*Math.asin(Math.sqrt(h))*1.25)}
function modeInit(){const mo=MO();S.nomis=MODE!='city'&&MODE!='hwy';S.nofine=MODE=='train'||MODE=='endless'||MODE=='derby'||MODE=='scenic';S.nofuel=S.nofine;S.obj=null;S.nm=0;S.kills=0;S.wave=0;S.rage=0;S.rageT=0;S.combo=0;S.dist=0;S.cams=[];rv=[];fxs=[];OBS=[];if(MODE=='scenic'){S.h0=16.8;S.rate=.025;S.vis={}}
 if(MODE=='city')mission();else{S.m={p:0,d:0,load:0,pax:0,tl:0,hold:0,fp:0};
  if(MODE=='hwy'){const m=S.m,km=DIST(ci,DEST);m.load=1;m.pax=Math.max(1,Math.round(mo.cap*.85));m.fp=Math.round(km*2.2*mo.fare);m.tl=HL/420+45;for(let x=8000;x<HL-6000;x+=9000)S.cams.push(x)}
  if(MODE=='train')trainNext(0);if(MODE=='derby')spawnWave()}}
const TS=['Hold W or ↑ to reach 30 km/h','Press A / D (← →) to change lanes','Brake to a stop: S, ↓ or Space','Drive through the glowing ring','Reverse: hold S or ↓ while stopped','Park inside the ring and stop','Press L for headlights, then H to honk'];
function trainStep(dt){const t=S.tr,b=S.bus,k=keys,kmh=Math.abs(b.v)*.13;if(!t)return;let ok=false;
 switch(t.i){case 0:t.t=kmh>=30?t.t+dt:0;ok=t.t>1;break;case 1:ok=t.lc>=2;break;case 2:if(kmh>12)t.sp=1;ok=t.sp&&Math.abs(b.v)<3;break;
  case 3:ok=Math.hypot(S.obj.x-b.x,S.obj.y-b.y)<110;break;case 4:if(b.v<-20)t.rev+=-b.v*dt;ok=t.rev>160;break;
  case 5:t.t=(Math.hypot(S.obj.x-b.x,S.obj.y-b.y)<110&&Math.abs(b.v)<4)?t.t+dt:0;ok=t.t>1.5;break;case 6:ok=lights&&t.h;break}
 if(ok){toast('✔ Done','good');tone(880,.15,'sine',.12);if(t.i>=6){run=false;show('Training complete','<p>Nice driving! You are ready for the road.</p>','Play again','over')}else trainNext(t.i+1)}}
function spawnWave(){S.wave++;const n=Math.min(10,2+S.wave),b=S.bus;for(let i=0;i<n;i++){let x,y;do{x=R(200,SZ-200);y=R(200,SZ-200)}while(Math.hypot(x-b.x,y-b.y)<1100);const ty=[0,0,2,3][RI(4)];rv.push({x,y,a:R(0,6.28),an:0,v:0,hp:70+S.wave*15,ty,l:[28,17,21,42][ty],col:CC[RI(CC.length)],kx:0,ky:0,cd:0,prov:0,id:i+S.wave*10,sp:260+S.wave*18})}toast('Wave '+S.wave,'good')}
function provoke(){if(MODE!='derby'||!S||!rv.length)return;const b=S.bus;let n=0;rv.forEach(r=>{if(Math.hypot(r.x-b.x,r.y-b.y)<700&&r.prov<=0){r.prov=5;n++}});if(n){S.rage=Math.min(100,S.rage+6*n);S.score+=25*n;toast('😤 Taunt +'+25*n,'good')}}
function boom(x,y){for(let k=0;k<5;k++)fxs.push({x:x+R(-30,30),y:y+R(-30,30),t:-k*.06,m:null})}
function derbyStep(dt){const b=S.bus,mo=MO(),rg=S.rageT>0;S.rage=Math.max(0,S.rage-(rg?0:5)*dt);if(rg){S.rageT-=dt;if(S.rageT<=0)S.rage=0}
 if(Math.abs(b.v)>260&&(keys.left||keys.right))S.rage=Math.min(100,S.rage+9*dt);S.combo=Math.max(0,S.combo-dt);
 if((b.x<=41||b.x>=SZ-41||b.y<=41||b.y>=SZ-41)&&Math.abs(b.v)>140&&S.t>(cd.wall||0)){cd.wall=S.t+.6;S.hp-=3;b.v*=-.35;S.shake=.25;noise(.2,.2,500)}
 for(const o of OBS){const dx=b.x-o.x,dy=b.y-o.y,d=Math.hypot(dx,dy)||1;if(d<o.r+mo.len*.35){if(Math.abs(b.v)>120&&S.t>(cd.ob||0)){cd.ob=S.t+.5;S.hp-=2;S.shake=.2;noise(.15,.2,700)}b.v*=-.4;b.x+=dx/d*10;b.y+=dy/d*10}}
 for(const r of rv){const dx=b.x-r.x,dy=b.y-r.y,dist=Math.hypot(dx,dy)||1;let ta=Math.atan2(dy,dx);if(dist>500)ta+=Math.sin(S.t*1.3+r.id)*.5;
  const da=((ta-r.a+PI*3)%(2*PI))-PI;r.a+=Math.max(-1,Math.min(1,da*2))*1.9*dt*Math.min(1,r.v/80+.3);
  const tv=(r.prov>0?r.sp*1.35:r.sp)*(dist<260?1.15:1);r.v+=(tv-r.v)*Math.min(1,dt*1.4);r.prov-=dt;r.cd-=dt;
  r.x=cl2(r.x+Math.cos(r.a)*r.v*dt+r.kx*dt,40,SZ-40);r.y=cl2(r.y+Math.sin(r.a)*r.v*dt+r.ky*dt,40,SZ-40);r.kx*=.92;r.ky*=.92;
  const[lx,ly]=loc(r);if(Math.abs(lx)<mo.len/2+r.l&&Math.abs(ly)<(mo.len>50?34:26)&&r.cd<=0){r.cd=.45;
   const imp=Math.hypot(Math.cos(b.a)*b.v-Math.cos(r.a)*r.v,Math.sin(b.a)*b.v-Math.sin(r.a)*r.v),mult=rg?3:1+Math.min(2,S.combo*.25);
   r.hp-=imp*.1*mo.mass*(rg?2:1);S.hp-=imp*.02/Math.sqrt(mo.mass)*(rg?.5:1);r.kx=-dx/dist*imp*.9;r.ky=-dy/dist*imp*.9;r.v*=.4;b.v*=.7;S.shake=Math.min(.5,imp/700);noise(.25,.3,600+imp);
   const pts=Math.round(Math.max(10,imp*.3)*mult);S.score+=pts;S.combo=Math.min(8,S.combo+1);S.rage=Math.min(100,S.rage+Math.min(22,imp/22));toast('+'+pts+(S.combo>1?'  ×'+S.combo:''),'good');
   if(S.rage>=100&&!rg){S.rageT=8;toast('🔥 ROAD RAGE! ×3 points','good')}
   if(r.hp<=0){r.dead=true;S.kills++;const bo=Math.round(300*mult);S.score+=bo;toast('💥 Takedown +'+bo,'good');boom(r.x,r.y)}}}
 rv=rv.filter(r=>{if(r.dead&&r.m)dyn.remove(r.m);return!r.dead});
 if(!rv.length){S.score+=500*S.wave;S.hp=Math.min(mo.hp,S.hp+25);toast('Wave cleared +'+500*S.wave,'good');spawnWave()}}
function msgText(){const m=S.m,T=tgt(),b=S.bus,d=Math.hypot(T.x-b.x,T.y-b.y)/UM()|0;if(S.fuel<10&&!S.ref&&!S.nofuel&&stn.length)return'⚠ Low fuel · press F for ⛽';
 switch(MODE){case'city':return hint()+(m.load?`Drop off · ${T.n} · ${d} m · ⏱ ${m.tl|0}s`:`Pick up · ${T.n} · ${d} m`)+(m.hold>0?' · boarding…':'');
  case'free':return(autop?'🤖 Auto-drive · ':'Free drive · ')+(S.dist/260).toFixed(1)+' km';
  case'hwy':return`${CITIES[DEST].n} · ${Math.max(0,(HL-b.x)/260).toFixed(0)} km left · ⏱ ${m.tl|0}s`+(m.hold>0?' · arriving…':'');
  case'endless':return`Endless drive · ${(S.dist/260).toFixed(1)} km · near misses ${S.nm}`;
  case'train':return S.tr?`Step ${S.tr.i+1}/7 · ${TS[S.tr.i]}`:'';
  case'scenic':return autop?'Scenic auto-drive · '+CT.n+' · C: change view · T: take control':'Scenic drive · manual · T: auto-drive';
  case'derby':return`Wave ${S.wave} · ${rv.length} rivals · honk to taunt`}return''}
function map2(g,s,big){const b=S.bus,dy=MODE=='derby';g.fillStyle=dy?'#3b3f46':'#2f6b3a';g.fillRect(0,0,s,s);
 const tri=(x,y,a,r)=>{g.save();g.translate(x,y);g.rotate(a);g.fillStyle='#fff';g.beginPath();g.moveTo(r,0);g.lineTo(-r,-r*.7);g.lineTo(-r,r*.7);g.fill();g.restore()};
 if(dy){const k=s/SZ;g.strokeStyle='#e5e7eb';g.lineWidth=3;g.strokeRect(2,2,s-4,s-4);g.fillStyle='#9ca3af';OBS.forEach(o=>g.fillRect(o.x*k-2,o.y*k-2,4,4));g.fillStyle='#ef4444';rv.forEach(r=>{g.beginPath();g.arc(r.x*k,r.y*k,big?6:4,0,7);g.fill()});tri(b.x*k,b.y*k,b.a,big?11:7);return}
 if(big){const k=(s-80)/SZ,y=s/2;g.strokeStyle='#cbd5e1';g.lineWidth=12;g.beginPath();g.moveTo(40,y);g.lineTo(s-40,y);g.stroke();g.fillStyle='#38bdf8';stn.forEach(t=>{g.beginPath();g.arc(40+t.x*k,y,7,0,7);g.fill()});
  if(MODE=='hwy'){g.fillStyle='#fbbf24';g.beginPath();g.arc(s-40,y,12,0,7);g.fill();g.fillStyle='#fff';g.font='16px system-ui';g.textAlign='center';g.fillText(CITIES[DEST].n,s-70,y-24);g.fillText(CT.n,70,y-24)}tri(40+(b.x%SZ)*k,y,0,12);return}
 const kk=s/3600;g.save();g.translate(s/2-b.x*kk,s/2-b.y*kk);g.strokeStyle='#cbd5e1';g.lineWidth=RW*kk;g.beginPath();g.moveTo(-1e5,0);g.lineTo(1e5,0);g.stroke();
 g.fillStyle='#cbd5e1';cars.forEach(c=>g.fillRect(c.x*kk-2,c.y*kk-2,4,4));g.fillStyle='#38bdf8';stn.forEach(t=>{g.beginPath();g.arc(t.x*kk,t.y*kk,5,0,7);g.fill()});
 if(MODE=='hwy'){const T=tgt();g.fillStyle='#fbbf24';g.beginPath();g.arc(T.x*kk,T.y*kk,8,0,7);g.fill()}g.restore();tri(s/2,s/2,0,7)}
function buildArena(){const T0=2.6,mid=SZ/2;
 pl(16000,16000,'#8a7a5a',mid,0,mid);
 pl(SZ,SZ,new THREE.MeshLambertMaterial({map:mtex((g,w,h)=>{g.fillStyle='#4a4e55';g.fillRect(0,0,w,h);for(let k=0;k<900;k++){g.fillStyle=Math.random()<.5?'#51555c':'#42464c';g.fillRect(Math.random()*w,Math.random()*h,3,3)}g.strokeStyle='#e5e7eb';g.lineWidth=6;g.setLineDash([30,24]);g.beginPath();g.arc(w/2,h/2,w*.32,0,7);g.stroke();g.beginPath();g.moveTo(w/2,0);g.lineTo(w/2,h);g.moveTo(0,h/2);g.lineTo(w,h/2);g.stroke()},512,512)}),mid,1.5,mid);
 [[mid,-10,SZ+120,50],[mid,SZ+10,SZ+120,50],[-10,mid,50,SZ+120],[SZ+10,mid,50,SZ+120]].forEach(([x,z,w,d])=>{bx(w,44,d,'#b91c1c',x,22,z,wld);bx(w+2,6,d+2,'#f1f5f9',x,46,z,wld)});
 for(let k=0;k<16;k++){let x,y;do{x=R(300,SZ-300);y=R(300,SZ-300)}while(Math.hypot(x-mid,y-mid)<450);OBS.push({x,y,r:55});bx(90,60,90,['#2563eb','#f59e0b','#16a34a','#dc2626'][k%4],x,T0+30,y,wld)}
 for(let k=0;k<10;k++){let x,y;do{x=R(300,SZ-300);y=R(300,SZ-300)}while(Math.hypot(x-mid,y-mid)<450);OBS.push({x,y,r:45});cy(30,30,'#111827',x,T0+15,y,wld,12);cy(30,30,'#1f2937',x,T0+45,y,wld,12)}
 [[100,100],[SZ-100,100],[100,SZ-100],[SZ-100,SZ-100]].forEach(([x,z])=>{cy(8,300,'#4b5563',x,150,z,wld);bx(70,30,12,em('#fff6d0'),x,305,z,wld)})}
function mkCNG(){const mo=MO(),g=new THREE.Group(),bc=BCOL||mo.c;
 bx(40,5,22,'#2b2f36',0,7,0,g);bx(34,16,22,BS(bc,.35,.2),-3,17,0,g);bx(26,3,24,'#111827',-3,27,0,g);const w=bx(2,13,20,BS('#16212c',.08,.5),13,19,0,g);w.rotation.z=-.2;bx(10,10,16,'#111827',-14,16,0,g);
 bx(5,10,6,'#2563eb',6,17,6,g);bx(5,5,5,'#f1c6a0',6,25,6,g);wh(15,0,6,g);wh(-12,-12,7,g);wh(-12,12,7,g);bx(1.5,4,6,em('#fff7c2'),19.5,12,0,g);
 tail=em('#7f1d1d').clone();bx(1,4,10,tail,-20.5,12,0,g);ind=[];[[19.5,-9],[19.5,9],[-20.5,-9],[-20.5,9]].forEach(([x,z])=>{const m=bx(1.5,3,4,em('#fb923c'),x,15,z,g);m.visible=false;ind.push(m)});
 const gh=new THREE.Mesh(new THREE.BoxGeometry(46,34,28),new THREE.MeshBasicMaterial({color:bc,transparent:true,opacity:.4,depthFunc:THREE.GreaterDepth,depthWrite:false}));gh.position.y=18;gh.renderOrder=999;gh.userData.gh=1;g.add(gh);g.rotation.order='YXZ';return g}
function hud(){const m=S.m,b=S.bus,pts=MODE=='derby'||MODE=='endless';
 $('moi').textContent=pts?'★':MODE=='train'?'🎓':'🪙';$('mo').textContent=pts?(S.score|0).toLocaleString('en-US'):MODE=='train'?'Training':'৳'+(S.money|0).toLocaleString('en-US');
 $('lv').textContent=MODE=='city'?`Lv ${S.lvl} · ${S.del} trips`:'';$('sp').innerHTML=`<b>${S.kmh|0}</b><small>km/h</small>`;$('lim').textContent=S.lim||60;$('lim').style.display=S.nofine?'none':'';
 const tk=MO().tank,hh=hr()|0,mi=(hr()%1)*60|0;$('wx').textContent=['☀','🌧','🌫'][S.wx]+' '+String(hh).padStart(2,'0')+':'+String(mi).padStart(2,'0')+(hh>=19||hh<5?' 🌙':'');
 $('fp').hidden=!!S.nofuel;$('fl').textContent=S.fuel.toFixed(0)+' L'+(S.ref?' ⛽':'');$('fb').style.width=S.fuel/tk*100+'%';$('hb').style.width=Math.max(0,S.hp)/MO().hp*100+'%';
 $('rg').hidden=MODE!='derby';$('rb').style.width=S.rage+'%';document.body.classList.toggle('rage',S.rageT>0);document.body.classList.toggle('scenic',MODE=='scenic'&&autop);$('msg').textContent=msgText();
 if(!$('fm').hidden)map(FC,700,1);map(Y,MM.width,0)}
const horn=()=>{tone(310,.4,'square',.1);tone(370,.4,'square',.1);if(S&&S.tr)S.tr.h=1;provoke()};
function loop(ts){requestAnimationFrame(loop);const dt=Math.min(.05,(ts-last)/1000||0);last=ts;if(run&&!paused)upd(dt);DT=dt;draw3();hud();snd()}
const KM={ArrowUp:'up',KeyW:'up',ArrowDown:'down',KeyS:'down',Space:'down',ArrowLeft:'left',KeyA:'left',ArrowRight:'right',KeyD:'right'};
addEventListener('keydown',e=>{const k=KM[e.code];if(k){keys[k]=1;if(k=='down'&&e.code!='Space')keys.kd=1;if(!e.repeat){if(k=='left')laneChange(1);if(k=='right')laneChange(-1)}e.preventDefault()}if(e.code=='KeyH')horn();if(e.code=='KeyP'||e.code=='Escape')pause();if(e.code=='KeyM')$('bm').click();if(e.code=='KeyC')$('bc').click()});
addEventListener('keyup',e=>{const k=KM[e.code];if(k){keys[k]=0;if(k=='down')keys.kd=0}});addEventListener('contextmenu',e=>e.preventDefault());
document.querySelectorAll('.b').forEach(b=>{const k=b.dataset.k,u=()=>{if(k!='horn')keys[k]=0};b.onpointerdown=e=>{e.preventDefault();b.setPointerCapture(e.pointerId);if(k=='horn')horn();else{keys[k]=1;if(k=='left')laneChange(1);if(k=='right')laneChange(-1)}};b.onpointerup=u;b.onpointercancel=u;b.onlostpointercapture=u});
function pause(){if(!run)return;paused=!paused;if(paused)show('Paused','','Resume','pause');else $('ov').hidden=true}
$('bp').onclick=pause;$('bm').onclick=()=>{showMap=!showMap;$('fm').hidden=!showMap};$('fm').onclick=()=>$('bm').click();
$('bs').onclick=()=>radioPanel();
$('go').onclick=()=>{audio();if(OVK=='pause'){paused=false;$('ov').hidden=true}else if(OVK=='help'){if(run){paused=false;$('ov').hidden=true}else mainMenu(1)}else startMode(MODE)};$('mq').onclick=()=>mainMenu();$('bmore').onclick=()=>document.body.classList.toggle('more');
addEventListener('beforeinstallprompt',e=>{e.preventDefault();dp=e;$('inst').hidden=false});
$('inst').onclick=async()=>{if(dp){dp.prompt();await dp.userChoice;dp=null;$('inst').hidden=true}};
addEventListener('blur',()=>{keys={};if(run&&!paused)pause()});
try{if('serviceWorker'in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register('sw.js').catch(()=>{})}catch(e){}
const ios=/iphone|ipad|ipod/i.test(navigator.userAgent)&&!navigator.standalone;
selUI();
cityUI();colorUI();$('bc').onclick=()=>{if(directorOn()){DIR.t=99;return}cockpit=!cockpit;document.body.classList.toggle('cp',cockpit)};
var RT2;
/* ===== audio + weather ===== */
var AC,MG,CMP,EN,TRG,WNG,RG,mute=false,lastTick=0,WX={rain:0,fog:0,wet:0,flash:0,nl:0},rainL=null,rainD=[],GLOW=null,busGlow=null;
function audio(){if(AC){AC.resume();return}AC=new(window.AudioContext||window.webkitAudioContext)();CMP=AC.createDynamicsCompressor();MG=AC.createGain();MG.gain.value=mute?0:1;MG.connect(CMP);CMP.connect(AC.destination);
 const nb=AC.createBuffer(1,AC.sampleRate*2,AC.sampleRate),a=nb.getChannelData(0);for(let i=0;i<a.length;i++)a[i]=Math.random()*2-1;
 const lp=(type,fr,q,v)=>{const s=AC.createBufferSource(),f=AC.createBiquadFilter(),g=AC.createGain();s.buffer=nb;s.loop=true;f.type=type;f.frequency.value=fr;if(q)f.Q.value=q;g.gain.value=v||0;s.connect(f);f.connect(g);g.connect(MG);s.start();return{g,f}};
 TRG=lp('bandpass',700,.8);WNG=lp('highpass',900);RG=lp('highpass',1800);lp('lowpass',260,0,.035);
 const o1=AC.createOscillator(),o2=AC.createOscillator(),f=AC.createBiquadFilter(),g=AC.createGain();o1.type='sawtooth';o2.type='square';f.type='lowpass';f.frequency.value=380;g.gain.value=0;o1.connect(f);o2.connect(f);f.connect(g);g.connect(MG);o1.start();o2.start();EN={o1,o2,f,g};
 setInterval(()=>{if(run&&!paused)pad()},6500);setInterval(()=>{if(run&&!paused)amb()},500)}
function tone(f,d,ty,v,dl,f2){if(!AC)return;ty=ty||'sine';v=v==null?.15:v;const t=AC.currentTime+(dl||0),o=AC.createOscillator(),g=AC.createGain();o.type=ty;o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+d);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g);g.connect(MG);o.start(t);o.stop(t+d)}
function noise(d,v,fr){if(!AC)return;const n=AC.sampleRate*d,bf=AC.createBuffer(1,n,AC.sampleRate),a=bf.getChannelData(0);for(let i=0;i<n;i++)a[i]=(Math.random()*2-1)*(1-i/n);const s=AC.createBufferSource(),f=AC.createBiquadFilter(),g=AC.createGain();s.buffer=bf;f.type='lowpass';f.frequency.value=fr;g.gain.value=v;s.connect(f);f.connect(g);g.connect(MG);s.start()}
function pad(){if(!AC)return;const r=[110,123.5,146.8,164.8,196][RI(5)],t=AC.currentTime;[1,1.5,2].forEach(m=>{const o=AC.createOscillator(),g=AC.createGain();o.type='sine';o.frequency.value=r*m;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.014,t+2.5);g.gain.linearRampToValueAtTime(0,t+7);o.connect(g);g.connect(MG);o.start(t);o.stop(t+7.2)})}
function thunder(){noise(2.6,.5,150);tone(55,1.8,'sine',.22,0,28)}
function amb(){const r=Math.random(),h=hr(),d=h>6&&h<18;if(r<.04){tone(2400,.1,'sine',.04);tone(2400,.1,'sine',.04,.16)}else if(r<.09&&!S.nofine||r<.06){const f=R(260,420);tone(f,.3,'square',.02);tone(f*1.2,.3,'square',.015)}else if(r<.12&&d&&WX.rain<.2)tone(R(500,620),.15,'sawtooth',.03,0,380);
 if((h>19||h<5)&&r>.55)tone(4200,.05,'sine',.01);if(WX.rain>.5&&r>.9)noise(.3,.05,900)}
function crash(){noise(.5,.45,1200);tone(90,.4,'sine',.3,0,40)}
function snd(){if(!EN||!S)return;const b=S.bus,mo=MO(),on=run&&!paused&&S.fuel>0&&engine,go=run&&!paused,vm=mo.mx*(HWY()?1.4:1),vn=Math.min(1.2,Math.abs(b.v)/vm),g5=Math.min(4,Math.floor(vn*5)),fr=vn*5-g5,hz=46+fr*64+g5*5+(UPK()?9:0);
 EN.o1.frequency.value=hz;EN.o2.frequency.value=hz*.5;EN.f.frequency.value=260+vn*500+(UPK()?160:0);EN.g.gain.value=on?.035+(UPK()?.04:0)+vn*.02:0;
 TRG.g.gain.value=go?Math.pow(vn,1.2)*.07*(1+WX.wet*.8):0;TRG.f.frequency.value=500+vn*500+WX.wet*300;WNG.g.gain.value=go?vn*vn*.05:0;RG.g.gain.value=go?WX.rain*.09:0;
 if(haz&&AC.currentTime>lastTick){lastTick=AC.currentTime+.5;tone(1300,.02,'square',.03)}if(b.br&&Math.abs(b.v)>180&&Math.random()<.1)tone(1700+R(0,200),.12,'sawtooth',.012)}
function wxStep(dt){const tr=S.wx==1?(S.storm?1:.6):0,tf=S.wx==2?1:0;WX.rain+=(tr-WX.rain)*Math.min(1,dt*.4);WX.fog+=(tf-WX.fog)*Math.min(1,dt*.35);WX.wet+=((WX.rain>.25?1:0)-WX.wet)*Math.min(1,dt*(WX.rain>.25?.15:.03));
 if(S.storm&&WX.rain>.6&&S.t>WX.nl){WX.nl=S.t+R(7,18);WX.flash=1;setTimeout(()=>{if(run)thunder()},R(500,2400))}WX.flash=Math.max(0,WX.flash-dt*2.2);
 const v=1-.3*WX.wet;roadMats.forEach(m=>{m.roughness=.92-.55*WX.wet;m.color.setRGB(v,v,v)});$('flash').style.opacity=WX.flash*.55;document.body.classList.toggle('rainy',WX.rain>.3)}
function rainStep(dt){if(!rainL)return;const I=WX.rain;rainL.visible=I>.03;if(!rainL.visible)return;rainL.material.opacity=.12+.3*I;const p=rainL.geometry.attributes.position.array,c=cam.position;
 for(let i=0;i<rainD.length;i++){const d=rainD[i];d.y-=900*dt;if(d.y<-250){d.y=450;d.x=R(-700,700);d.z=R(-700,700)}const o=i*6;p[o]=c.x+d.x;p[o+1]=c.y+d.y;p[o+2]=c.z+d.z;p[o+3]=p[o]-6;p[o+4]=p[o+1]-26;p[o+5]=p[o+2]}rainL.geometry.attributes.position.needsUpdate=true}

/* ===== road graph engine ===== */
const CLS={M:{w:244,nl:3,med:28},m:{w:144,nl:2,med:0}};
var G={n:[],e:[],sea:[],riv:[],ix:{},bb:{x0:-1,y0:-1,x1:1,y1:1}},ROUTE=[],RSEG=[],HINT='';
const laneOff=(E,k)=>E.med/2+18+36*k,UM=()=>isCity()?CT.sc:4,redOf=(nd,eid,ph)=>nd.grp[eid]==0?ph==1:ph==0;
function gAdd(x,y){G.n.push({x,y,ed:[],r:60,sig:0,g0:0,grp:{}});return G.n.length-1}
function gEdge(a,b,c,mn){if(a==b)return;if(G.e.some(e=>(e.a==a&&e.b==b)||(e.a==b&&e.b==a)))return;const A=G.n[a],Z=G.n[b],dx=Z.x-A.x,dy=Z.y-A.y,len=Math.hypot(dx,dy);if(len<(mn||300))return;const q=CLS[c]||CLS.m,id=G.e.length;G.e.push({id,a,b,len,ux:dx/len,uy:dy/len,cls:c,w:q.w,nl:q.nl,med:q.med});A.ed.push(id);Z.ed.push(id)}
function gFinal(){let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;G.n.forEach(n=>{x0=Math.min(x0,n.x);x1=Math.max(x1,n.x);y0=Math.min(y0,n.y);y1=Math.max(y1,n.y)});G.bb={x0,y0,x1,y1};
 G.n.forEach((n,i)=>{let w=0;n.ed.forEach(j=>w=Math.max(w,G.e[j].w));n.r=n.ed.length>=3?w/2+36:w/2;n.sig=n.ed.length>=3?1:0;
  if(n.ed.length){const E0=G.e[n.ed[0]];n.g0=Math.atan2(E0.a==i?E0.uy:-E0.uy,E0.a==i?E0.ux:-E0.ux)}
  n.ed.forEach(ei=>{const E=G.e[ei],an=Math.atan2(E.a==i?E.uy:-E.uy,E.a==i?E.ux:-E.ux),d=Math.abs(((an-n.g0)%PI+PI)%PI);n.grp[ei]=(d<PI/4||d>3*PI/4)?0:1})});
 G.ix={};G.e.forEach(E=>{const A=G.n[E.a],Z=G.n[E.b],m=E.w;for(let i=Math.floor((Math.min(A.x,Z.x)-m)/1500);i<=Math.floor((Math.max(A.x,Z.x)+m)/1500);i++)for(let j=Math.floor((Math.min(A.y,Z.y)-m)/1500);j<=Math.floor((Math.max(A.y,Z.y)+m)/1500);j++){const k=i+','+j;(G.ix[k]||(G.ix[k]=[])).push(E.id)}});G.e.forEach(E=>{const A=G.n[E.a],Z=G.n[E.b],mx=(A.x+Z.x)/2,my=(A.y+Z.y)/2;E.wat=[-900,-450,450,900].some(o=>inWater(mx-E.uy*o,my+E.ux*o))?1:0})}
function nearE(x,z,r){const out=new Set,i0=Math.floor((x-r)/1500),i1=Math.floor((x+r)/1500),j0=Math.floor((z-r)/1500),j1=Math.floor((z+r)/1500);for(let i=i0;i<=i1;i++)for(let j=j0;j<=j1;j++){const l=G.ix[i+','+j];if(l)l.forEach(id=>out.add(id))}return[...out].map(id=>G.e[id])}
function dSeg(x,z,a,b){const dx=b[0]-a[0],dz=b[1]-a[1],l2=dx*dx+dz*dz||1,t=Math.max(0,Math.min(1,((x-a[0])*dx+(z-a[1])*dz)/l2));return Math.hypot(x-a[0]-dx*t,z-a[1]-dz*t)}
function inWater(x,z){for(const p of G.sea){let c=false;for(let i=0,j=p.length-1;i<p.length;j=i++){const a=p[i],b=p[j];if(((a[1]>z)!=(b[1]>z))&&(x<(b[0]-a[0])*(z-a[1])/(b[1]-a[1])+a[0]))c=!c}if(c)return true}
 for(const r of G.riv)for(let i=1;i<r.pts.length;i++)if(dSeg(x,z,r.pts[i-1],r.pts[i])<r.w/2+60)return true;return false}
function clearOf(px,pz,rad,eid){for(const E of nearE(px,pz,rad+400)){if(E.id==eid)continue;if(dSeg(px,pz,[G.n[E.a].x,G.n[E.a].y],[G.n[E.b].x,G.n[E.b].y])<E.w/2+rad+34)return false}
 for(const E of nearE(px,pz,rad+400)){for(const ni of[E.a,E.b]){const n=G.n[ni];if(Math.hypot(px-n.x,pz-n.y)<n.r+rad+30)return false}}return true}
function buildGraph(){G={n:[],e:[],sea:[],riv:[],ix:{},bb:{x0:-1,y0:-1,x1:1,y1:1},id:{}};
 if(HWY()){const a=gAdd(0,0),b=gAdd(SZ,0);gEdge(a,b,'M',10);G.e[0].hw=1;gFinal();return}
 if(MODE=='derby')return;
 const nm={};CT.stops.forEach(q=>nm[q[0]]=[q[2],q[3]]);Object.assign(nm,CT.ex||{});
 const rl=CT.real;let la0=1e9,la1=-1e9,lo0=1e9,lo1=-1e9;const pp=rl?rl.nodes:Object.values(nm);for(const p of pp){la0=Math.min(la0,p[0]);la1=Math.max(la1,p[0]);lo0=Math.min(lo0,p[1]);lo1=Math.max(lo1,p[1])}
 const c0=[(la0+la1)/2,(lo0+lo1)/2],P=(la,lo)=>[(lo-c0[1])*Math.cos(c0[0]*PI/180)*111320*CT.sc,-(la-c0[0])*111320*CT.sc];
 if(rl){const ids=rl.nodes.map(n=>{const q=P(n[0],n[1]);return gAdd(q[0],q[1])});rl.edges.forEach(e=>gEdge(ids[e[0]],ids[e[1]],e[2],40));
  CT.stops.forEach(q=>{const t=P(q[2],q[3]);let bi=0,bd=1e18;G.n.forEach((n,i)=>{const d=(n.x-t[0])**2+(n.y-t[1])**2;if(d<bd&&n.ed.length){bd=d;bi=i}});G.id[q[0]]=bi})}
 else{for(const k in nm){const q=P(nm[k][0],nm[k][1]);G.id[k]=gAdd(q[0],q[1])};CT.rd.forEach(ch=>{for(let i=1;i<ch.length-1;i++)gEdge(G.id[ch[i]],G.id[ch[i+1]],ch[0])})}
 const wt=rl?(rl.water||[]):(CT.wt||[]);wt.forEach(w=>{if(w[0]=='sea')G.sea.push(w[1].map(p=>P(p[0],p[1])));else G.riv.push({w:w[1],pts:w[2].map(p=>P(p[0],p[1]))})});
 gFinal()}
function place(o){const E=G.e[o.e],A=G.n[E.a],t=o.d>0?o.s:E.len-o.s,hx=E.ux*o.d,hy=E.uy*o.d;o.x=A.x+E.ux*t+hy*o.lat+(o.jx||0);o.y=A.y+E.uy*t-hx*o.lat+(o.jy||0);o.ba=Math.atan2(hy,hx)}
function adv(o,dt,pick){let E=G.e[o.e],sw=0;o.s+=o.v*dt;
 if(o.s>=E.len){const nd=o.d>0?E.b:E.a,r=pick(nd,o);if(r){o.pe=o.e;o.pd=o.d;o.s-=E.len;o.e=r.e;o.d=r.d;sw=1}else{o.s=E.len;o.v=Math.min(o.v,0)}}
 else if(o.s<0){if(o.pe!=null){const E2=G.e[o.pe];o.e=o.pe;o.d=o.pd;o.s+=E2.len;o.pe=null;sw=1}else{o.s=0;o.v=Math.max(o.v,0)}}
 if(sw){const px=o.x,py=o.y;E=G.e[o.e];o.k=Math.min(o.k,E.nl-1);o.jx=0;o.jy=0;place(o);o.jx=px-o.x;o.jy=py-o.y}
 const lr=o.lcr||4;o.lat+=(laneOff(E,o.k)-o.lat)*Math.min(1,dt*lr);const j=Math.exp(-dt*5);o.jx*=j;o.jy*=j;place(o);
 const lv=(laneOff(E,o.k)-o.lat)*lr,yaw=Math.atan2(lv,Math.max(80,Math.abs(o.v)+80)),da=((o.ba-yaw-o.an+PI*3)%(2*PI))-PI;o.an+=da*Math.min(1,dt*(sw?9:12))}
function pickCar(nd,o){const N=G.n[nd],cand=N.ed.filter(i=>i!=o.e);if(!cand.length)return{e:o.e,d:-o.d};const E=G.e[o.e],h1x=E.ux*o.d,h1y=E.uy*o.d,
 opts=cand.map(i=>{const E2=G.e[i],d2=E2.a==nd?1:-1,h2x=E2.ux*d2,h2y=E2.uy*d2;return{e:i,d:d2,ang:Math.atan2(h1x*h2y-h1y*h2x,h1x*h2x+h1y*h2y)}}),ws=opts.map(q=>Math.abs(q.ang)<.5?4:1);
 let r=Math.random()*ws.reduce((a,c)=>a+c,0),i=0;while(i<ws.length-1&&r>ws[i]){r-=ws[i];i++}return opts[i]}
class Heap{constructor(){this.a=[]}push(k,v){const a=this.a;a.push([k,v]);let i=a.length-1;while(i>0){const p=(i-1)>>1;if(a[p][0]<=a[i][0])break;[a[p],a[i]]=[a[i],a[p]];i=p}}pop(){const a=this.a,t=a[0],l=a.pop();if(a.length){a[0]=l;let i=0;for(;;){let m=i,L=2*i+1,R2=L+1;if(L<a.length&&a[L][0]<a[m][0])m=L;if(R2<a.length&&a[R2][0]<a[m][0])m=R2;if(m==i)break;[a[m],a[i]]=[a[i],a[m]];i=m}}return t}get size(){return this.a.length}}
function dij(src,ban){const n=G.n.length,d=new Array(n).fill(1e12),pv=new Array(n).fill(-1),pe=new Array(n).fill(-1),h=new Heap;d[src]=0;h.push(0,src);
 while(h.size){const[du,u]=h.pop();if(du>d[u])continue;for(const ei of G.n[u].ed){if(u==src&&ei==ban)continue;const E=G.e[ei],v=E.a==u?E.b:E.a,nd=du+E.len;if(nd<d[v]){d[v]=nd;pv[v]=u;pe[v]=ei;h.push(nd,v)}}}return{d,pv,pe}}
function pathTo(src,ban,T){const R0=dij(src,ban),TE=G.e[T.e];let cA=R0.d[TE.a]+T.t,cB=R0.d[TE.b]+(TE.len-T.t);if(TE.id==ban){if(TE.a==src)cA=1e12;if(TE.b==src)cB=1e12}if(T.d!=null){if(T.d>0)cB=1e12;else cA=1e12}if(Math.min(cA,cB)>=1e11)return null;
 const viaA=cA<=cB,end=viaA?TE.a:TE.b,nodes=[end],edges=[];let u=end;while(u!=src&&R0.pv[u]>=0){edges.unshift(R0.pe[u]);u=R0.pv[u];nodes.unshift(u)}return{nodes,edges,end,fd:viaA?1:-1}}
function nextTo(nd,ein,T){const p=pathTo(nd,ein,T);if(!p)return null;if(p.edges.length)return{e:p.edges[0],d:G.e[p.edges[0]].a==nd?1:-1};return{e:T.e,d:p.fd}}
function pickBus(nd,o){const N=G.n[nd],cand=N.ed.filter(i=>i!=o.e);if(!cand.length)return{e:o.e,d:-o.d};if(MODE=='scenic'||(autop&&MODE=='free'))return pickScenic(nd,o);const T=(S.nomis&&!S.obj)?null:tgt();
 if(T&&T.e!=null){const r=nextTo(nd,o.e,T);if(r)return r}
 const E=G.e[o.e],h1x=E.ux*o.d,h1y=E.uy*o.d,opts=cand.map(i=>{const E2=G.e[i],d2=E2.a==nd?1:-1,h2x=E2.ux*d2,h2y=E2.uy*d2;return{e:i,d:d2,ang:Math.atan2(h1x*h2y-h1y*h2x,h1x*h2x+h1y*h2y)}}),want=E.nl>1?(o.k>=E.nl-1?-1:o.k==0?1:0):0;let p=null;
 if(want<0)p=opts.filter(q=>q.ang<-.4).sort((a,b)=>a.ang-b.ang)[0];else if(want>0)p=opts.filter(q=>q.ang>.4).sort((a,b)=>b.ang-a.ang)[0];
 return p||opts.sort((a,b)=>Math.abs(a.ang)-Math.abs(b.ang))[0]}
function laneChange(dir,auto){if((autop&&!auto)||MODE=='derby'||!run||paused||!G.e.length||!S||!S.bus||S.bus.e==null)return;const b=S.bus,E=G.e[b.e];if(S.t<(b.lcd||0))return;const nk=cl2(b.k+dir,0,E.nl-1);if(nk==b.k)return;b.k=nk;b.lcd=S.t+.28;noise(.14,.05,2600);if(S.tr)S.tr.lc++}
function driveBus(dt,ph){const b=S.bus;if(b.e==null)return;adv(b,dt,pickBus);b.a=b.an;const E=G.e[b.e],rem=E.len-b.s,nd=G.n[b.d>0?E.b:E.a],key=b.e*2+(b.d>0?1:0);
 if(rem<nd.r&&b.rlk!==key){b.rlk=key;if(nd.sig&&redOf(nd,E.id,ph)&&Math.abs(b.v)>70)fine(500,'Red light')}}
function newBus(){return{e:null,d:1,s:0,k:1,lat:0,jx:0,jy:0,pe:null,v:0,inN:0,br:0,x:0,y:0,a:0,an:0,ba:0,lcr:3.4,rlk:-1,lcd:0}}
function setBusAt(b,e,d,t,k){const E=G.e[e];b.e=e;b.d=d;b.s=d>0?t:E.len-t;b.k=Math.min(k==null?1:k,E.nl-1);b.lat=laneOff(E,b.k);b.jx=b.jy=0;b.pe=null;place(b);b.an=b.ba;b.a=b.an}
function initBus(){const b=newBus();if(MODE=='derby'){b.x=SZ/2;b.y=SZ/2;b.a=-PI/2;b.an=b.a;return b}
 if(HWY()){setBusAt(b,0,1,400,1);return b}let best=0;G.e.forEach((E,i)=>{if(E.cls=='M'&&E.len>G.e[best].len)best=i});setBusAt(b,best,1,G.e[best].len*.35,1);return b}
function makeSites(){stops=[];stn=[];if(MODE=='derby')return;
 const ZL=(E,d,t)=>{const o={e:E.id,d,s:d>0?t:E.len-t,k:E.nl-1,lat:laneOff(E,E.nl-1),jx:0,jy:0};place(o);return{x:o.x,y:o.y,e:E.id,d,t,nx:E.uy*d,ny:-E.ux*d}};
 if(HWY()){const E=G.e[0];if(MODE=='hwy')stops=[Object.assign(ZL(E,1,E.len-500),{n:CITIES[DEST].n,b:CITIES[DEST].b})];const n=MODE=='hwy'?Math.max(2,Math.round(E.len/20000)):0;for(let k=1;k<=n;k++)stn.push(ZL(E,1,E.len*k/(n+1)));return}
 CT.stops.forEach(q=>{const ni=G.id[q[0]],N=G.n[ni];let E=null;N.ed.forEach(i=>{const e2=G.e[i];if(!E||e2.len>E.len)E=e2});const dist=Math.min(N.r+520,E.len*.5),toB=E.b==ni;stops.push(Object.assign(ZL(E,toB?1:-1,toB?E.len-dist:dist),{n:q[0],b:q[1],ni}))});
 const cand=G.e.filter(E=>E.len>2200&&E.cls=='M').sort(()=>Math.random()-.5);for(const E of cand){if(stn.length>=4)break;const st=ZL(E,RI(2)?1:-1,E.len*.3);if(stops.every(s=>Math.hypot(s.x-st.x,s.y-st.y)>900))stn.push(st)}
 if(!stn.length){const E=G.e.reduce((a,c)=>c.len>a.len?c:a);stn.push(ZL(E,1,E.len*.4))}}
function makePeds(){peds=[];if(!(MODE=='city'||MODE=='free'||MODE=='scenic'))return;const sg=G.n.map((n,i)=>i).filter(i=>G.n[i].sig);if(!sg.length)return;
 for(let k=0;k<Math.min(70,sg.length*3);k++){const ni=sg[RI(sg.length)],N=G.n[ni],E=G.e[N.ed[RI(N.ed.length)]],out=E.a==ni?1:-1,ox=E.ux*out,oy=E.uy*out,dd=N.r+90,cx=N.x+ox*dd,cy2=N.y+oy*dd,px=-oy,py=ox,hw=E.w/2+14;
  const p={ax:cx-px*hw,ay:cy2-py*hw,bx:cx+px*hw,by:cy2+py*hw,g:N.grp[E.id]==0?1:0,ang:Math.atan2(oy,ox),len:2*hw,t:RI(2),p:R(0,5),mv:0,hide:0,col:CC[RI(CC.length)]};p.dir=p.t?-1:1;peds.push(p)}}
function makeCops(){cops=[];if(!(MODE=='city'||MODE=='free'))return;const sg=G.n.map((n,i)=>i).filter(i=>G.n[i].sig);for(let k=0;k<Math.min(CT.cops,sg.length);k++){const ni=sg[RI(sg.length)],N=G.n[ni],E=G.e[N.ed[0]],out=E.a==ni?1:-1;cops.push({x:N.x+E.ux*out*(N.r+30)-E.uy*out*(E.w/2+20),y:N.y+E.uy*out*(N.r+30)+E.ux*out*(E.w/2+20)})}}
function spawn(){if(!G.e.length)return;const b=S.bus,pool=nearE(b.x,b.y,2200);if(!pool.length)return;
 for(let t=0;t<14;t++){const E=pool[RI(pool.length)],A=G.n[E.a],t0=cl2((b.x-A.x)*E.ux+(b.y-A.y)*E.uy,0,E.len);if(Math.hypot(A.x+E.ux*t0-b.x,A.y+E.uy*t0-b.y)>2200)continue;
  const lo=G.n[E.a].r+80,hi=E.len-G.n[E.b].r-80;if(hi<=lo)continue;const tt=cl2(t0+R(-2200,2200),lo,hi),d=RI(2)?1:-1,r0=Math.random(),
  ty=HWY()?(r0<.2?3:r0<.4?4:0):(r0<.3?1:r0<.5?2:r0<.6?3:r0<.68?4:0),pol=ty==0&&RI(7)==0,k=Math.min(E.nl-1,ty>=1&&ty<=3?1+RI(2):RI(2));
  const c={e:E.id,d,s:d>0?tt:E.len-tt,k,lat:laneOff(E,k),jx:0,jy:0,pe:null,ty,pol,l:[28,17,21,42,44][ty],sp:[R(120,210),R(70,110),R(130,180),R(90,135),R(105,150)][ty]*(HWY()?1.45:1),v:0,w:0,g:0,hit:0,col:pol?'#1e3a8a':CC[RI(CC.length)],an:0};
  place(c);c.an=c.ba;if(Math.hypot(c.x-b.x,c.y-b.y)<600)continue;cars.push(c);return}}
function routeCalc(T){const b=S.bus;ROUTE=[];RSEG=[];HINT='';if(!T||T.e==null||!G.e.length||b.e==null)return;const E=G.e[b.e],tb=b.d>0?b.s:E.len-b.s;
 if(T.e==b.e&&(T.d==null||T.d==b.d)&&(b.d>0?T.t>tb:T.t<tb)){ROUTE=[[b.x,b.y],[T.x,T.y]];RSEG=[{e:b.e,d:b.d,s0:b.s,s1:b.d>0?T.t:E.len-T.t}];HINT='⬆ Straight ahead · ';return}
 const src=b.d>0?E.b:E.a,p=pathTo(src,b.e,T);if(!p)return;ROUTE=[[b.x,b.y]];RSEG=[{e:b.e,d:b.d,s0:b.s,s1:E.len}];p.nodes.forEach(i=>ROUTE.push([G.n[i].x,G.n[i].y]));
 p.edges.forEach((ei,i)=>{const e2=G.e[ei];RSEG.push({e:ei,d:e2.a==p.nodes[i]?1:-1,s0:0,s1:e2.len})});const TE=G.e[T.e];RSEG.push({e:T.e,d:p.fd,s0:0,s1:Math.max(0,p.fd>0?T.t:TE.len-T.t)});ROUTE.push([T.x,T.y]);
 const nx=RSEG[1],E2=G.e[nx.e],h1x=E.ux*b.d,h1y=E.uy*b.d,h2x=E2.ux*nx.d,h2y=E2.uy*nx.d,ang=Math.atan2(h1x*h2y-h1y*h2x,h1x*h2x+h1y*h2y),rem=Math.max(0,E.len-b.s)/UM()|0;
 HINT=Math.abs(ang)<.45?'⬆ Straight ahead · ':(ang>0?'↱ Turn right':'↰ Turn left')+' in '+rem+' m · '}
function hint(){return HINT}
function updChev(){if(!chev)return;const d=new THREE.Object3D();let n=0,acc=0,next=140;
 for(const sg of RSEG){if(n>=64||acc>4200)break;const E=G.e[sg.e];if(!E)continue;const A=G.n[E.a],len=Math.max(0,sg.s1-sg.s0),lo=laneOff(E,Math.min(1,E.nl-1)),hx=E.ux*sg.d,hy=E.uy*sg.d;
  for(;next<acc+len&&n<64;next+=90){const s=sg.s0+(next-acc),t=sg.d>0?s:E.len-s;d.position.set(A.x+E.ux*t+hy*lo,4.2,A.y+E.uy*t-hx*lo);d.rotation.set(0,-Math.atan2(hy,hx),0);d.updateMatrix();chev.setMatrixAt(n++,d.matrix)}acc+=len}
 chev.count=n;chev.instanceMatrix.needsUpdate=true}
function objAhead(dist){const b=S.bus,E=G.e[b.e],s=cl2(b.s+dist,0,E.len-80),o={e:b.e,d:b.d,s,k:b.k,lat:laneOff(E,b.k),jx:0,jy:0};place(o);return{x:o.x,y:o.y,e:b.e,t:b.d>0?s:E.len-s}}

/* ===== world building (graph based, chunked scenery) ===== */
var CH={},roadMats=[],BM={};const CS=2200;
function strip(x1,z1,x2,z2,w,y,c){const L=Math.hypot(x2-x1,z2-z1)||1,m=new THREE.Mesh(new THREE.PlaneGeometry(w,L),typeof c=='string'?bm(c):c);m.rotation.order='YXZ';m.rotation.set(-PI/2,Math.atan2(-(x2-x1)/L,-(z2-z1)/L),0);m.position.set((x1+x2)/2,y,(z1+z2)/2);wld.add(m);return m}
function obox(len,h,wd,c,x,y,z,ang,p){const m=bx(len,h,wd,c,x,y,z,p||wld);m.rotation.y=-ang;return m}
function brickMat(rep){const t=BK.clone();t.needsUpdate=true;t.repeat.set(rep,.5);return new THREE.MeshLambertMaterial({map:t})}
function bldAt(g,ob,x,z,w,d,h,ang,c){const rx=Math.max(1,Math.round(w/120)),ry=Math.max(1,Math.round(h/120)),k=c+'|'+rx+'|'+ry;let m=BM[k];
 if(!m){const t1=WT.clone(),t2=WE.clone();t1.repeat.set(rx,ry);t2.repeat.set(rx,ry);t1.needsUpdate=t2.needsUpdate=true;m=BM[k]=new THREE.MeshStandardMaterial({color:c,map:t1,roughness:.7,metalness:.08,emissive:0xffffff,emissiveMap:t2,emissiveIntensity:0});matB.push(m)}
 const b=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);b.position.set(x,h/2+2.6,z);b.rotation.y=-ang;g.add(b);const r=Math.hypot(w,d)/2;ob.push([x-r,x+r,z-r,z+r,h+8]);
 if(hs(x|0,z|0,3)>.6)cy(9,16,'#2563eb',x,h+11,z,g,10)}
function mosqueAt(g,ob,x,z,ang){const mg=new THREE.Group();mg.position.set(x,2.6,z);mg.rotation.y=-ang;bx(150,44,150,'#e8e4d8',0,22,0,mg);const dm=new THREE.Mesh(new THREE.SphereGeometry(62,16,8,0,PI*2,0,PI/2),bm('#15803d'));dm.position.y=44;mg.add(dm);
 [[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([a,c])=>{cy(8,170,'#e5e7eb',a*100,85,c*100,mg,10);const t=new THREE.Mesh(new THREE.ConeGeometry(11,26,10),bm('#15803d'));t.position.set(a*100,183,c*100);mg.add(t)});g.add(mg);ob.push([x-120,x+120,z-120,z+120,190])}
function palmsG(pt,g){if(!pt.length)return;const tgm=new THREE.CylinderGeometry(3,5,1,7),fg=new THREE.BoxGeometry(40,1.4,10);fg.translate(20,0,0);
 const TR=new THREE.InstancedMesh(tgm,bm('#a98a5f'),pt.length),FR=new THREE.InstancedMesh(fg,bm('#2f9e44'),pt.length*7),d=new THREE.Object3D();
 pt.forEach(([x,z,r,h],i)=>{d.rotation.set(0,0,0);d.scale.set(1,h,1);d.position.set(x,2.9+h/2,z);d.updateMatrix();TR.setMatrixAt(i,d.matrix);for(let k=0;k<7;k++){d.scale.set(1,1,1);d.position.set(x,2.9+h,z);d.rotation.set(0,r+k*.898,-.5);d.updateMatrix();FR.setMatrixAt(i*7+k,d.matrix)}});
 TR.frustumCulled=FR.frustumCulled=false;g.add(TR);g.add(FR)}
function buildChunk(ci,cj){const g=new THREE.Group(),x0=ci*CS,z0=cj*CS,x1=x0+CS,z1=z0+CS,ob=[],tp=[],cp=[],pm=[],lp=[],T0=2.6,inC=(x,z)=>x>=x0&&x<x1&&z>=z0&&z<z1;
 for(const E of nearE(x0+CS/2,z0+CS/2,CS)){const A=G.n[E.a],Zn=G.n[E.b];if(Math.max(A.x,Zn.x)<x0-500||Math.min(A.x,Zn.x)>x1+500||Math.max(A.y,Zn.y)<z0-500||Math.min(A.y,Zn.y)>z1+500)continue;
  const ra=A.r,rb=Zn.r,L=E.len,ux=E.ux,uy=E.uy,ang=Math.atan2(uy,ux),hw=E.hw;
  if(E.med)for(let t=ra+150;t<L-rb-150;t+=170){const x=A.x+ux*t,z=A.y+uy*t;if(inC(x,z))pm.push([x,z,hs(E.id,t|0,1)*6.28,62+hs(E.id,t|0,2)*28])}
  for(let t=ra+110;t<L-rb-110;t+=220)for(const sd of[-1,1]){const x=A.x+ux*t-uy*sd*(E.w/2+8),z=A.y+uy*t+ux*sd*(E.w/2+8);if(inC(x,z))lp.push([x,z])}
  const step=hw?150:E.cls=='M'?210:180,lo=ra+(hw?0:130),hi=L-rb-(hw?0:130);
  for(let t=lo,i=0;t<hi;t+=step,i++){if(hw){const ts=((t%9000)+9000)%9000;if(ts<3500||ts>4800)continue}
   for(const sd of[-1,1]){const q=E.id*977+i*13+(sd>0?5:0),w=110+hs(q,1,1)*90,d=100+hs(q,2,2)*110,h=40+hs(q,3,3)*CT.hm*(hs(q,4,4)>.8?1.7:1),off=E.w/2+28+d/2+hs(q,5,5)*20+(hw?60:0),
    px=A.x+ux*t-uy*sd*off,pz=A.y+uy*t+ux*sd*off;if(!inC(px,pz)||hs(q,6,6)>.9)continue;const rad=Math.hypot(w,d)/2;if(inWater(px,pz)||!clearOf(px,pz,rad,E.id))continue;
    if(hs(q,7,7)>.965&&!hw)mosqueAt(g,ob,px,pz,ang);else bldAt(g,ob,px,pz,w,d,h,ang,CT.pal[hs(q,8,8)*CT.pal.length|0])}}
  for(let t=ra+60;t<L-rb-60;t+=34){const q=E.id*1301+(t|0),x=A.x+ux*t,z=A.y+uy*t,sd=hs(q,1,1)>.5?1:-1,off=E.w/2+90+hs(q,2,2)*520,px=x-uy*sd*off,pz=z+ux*sd*off;
   if(!inC(px,pz)||hs(q,3,3)>.55||inWater(px,pz)||!clearOf(px,pz,12,E.id)||ob.some(o=>px>o[0]&&px<o[1]&&pz>o[2]&&pz<o[3]))continue;const s=20+hs(q,4,4)*22;tp.push([px,T0+s*.55,pz,s*1.1]);cp.push([px,T0+s*1.15,pz,s*.9])}}
 if(tp.length){im(new THREE.CylinderGeometry(.1,.16,1,6),bm('#6b4a2b'),tp,g);im(new THREE.SphereGeometry(1,8,6),bm(CT.tree),cp,g)}
 palmsG(pm,g);if(lp.length){im(new THREE.CylinderGeometry(1.6,2.2,72,6),bm('#4b5563'),lp.map(q=>[q[0],2.6+36,q[1]]),g);im(new THREE.SphereGeometry(5,8,6),em('#fff6d0'),lp.map(q=>[q[0],2.6+74,q[1]]),g)}
 if(!LOW)g.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true}});return{g,ob}}
function updChunks(b,all){if(!G.e.length||!wld)return;const ci0=Math.floor(b.x/CS),cj0=Math.floor(b.y/CS);let ch=0;
 outer:for(let di=-1;di<=1;di++)for(let dj=-1;dj<=1;dj++){const k=(ci0+di)+','+(cj0+dj);if(!CH[k]){CH[k]=buildChunk(ci0+di,cj0+dj);wld.add(CH[k].g);ch=1;if(!all)break outer}}
 for(const k in CH){const[i,j]=k.split(',').map(Number);if(Math.abs(i-ci0)>2||Math.abs(j-cj0)>2){CH[k].g.traverse(o=>{if(o.geometry)o.geometry.dispose()});wld.remove(CH[k].g);delete CH[k];ch=1}}
 if(ch)OB=[].concat(...Object.values(CH).map(c=>c.ob))}
function placeAt(s,off){return[s.x+s.nx*off,s.y+s.ny*off]}
function build3(){
 if(!ren)return;[wld,dyn].forEach(g=>{while(g.children.length)g.remove(g.children[0])});matB=[];BM={};OB=[];CH={};roadMats=[];lastDk=-1;
 if(MODE=='derby')buildArena();else buildCity();
 clouds();
 if(!LOW)wld.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true}});
 busM=mkBus();shd(busM);dyn.add(busM);buildInterior();
 beam=new THREE.Mesh(new THREE.CylinderGeometry(40,40,900,16,1,true),new THREE.MeshBasicMaterial({color:'#fbbf24',transparent:true,opacity:.28,side:THREE.DoubleSide,depthWrite:false}));dyn.add(beam);
 tring=new THREE.Mesh(new THREE.RingGeometry(88,110,32),new THREE.MeshBasicMaterial({color:'#fbbf24',side:THREE.DoubleSide}));tring.rotation.x=-PI/2;dyn.add(tring);
 const cg=new THREE.CylinderGeometry(0,20,34,3);cg.rotateZ(-PI/2);cg.scale(1,.12,1);chev=new THREE.InstancedMesh(cg,new THREE.MeshBasicMaterial({color:'#22d3ee'}),64);chev.frustumCulled=false;chev.count=0;dyn.add(chev);
 if(G.e.length)updChunks(S.bus,1)}
function buildCity(){const T0=2.6,bb=G.bb,mx=(bb.x0+bb.x1)/2,mz=(bb.y0+bb.y1)/2,ext=Math.max(bb.x1-bb.x0,bb.y1-bb.y0)+60000;
 const gt=GT.clone();gt.needsUpdate=true;gt.repeat.set(ext/40,ext/40);pl(ext,ext,new THREE.MeshLambertMaterial({map:gt,color:CT.gnd}),mx,0,mz);
 G.sea.forEach(poly=>{const sh=new THREE.Shape();poly.forEach((p,i)=>i?sh.lineTo(p[0],-p[1]):sh.moveTo(p[0],-p[1]));const m=new THREE.Mesh(new THREE.ShapeGeometry(sh),bm('#2aa7e8'));m.rotation.x=-PI/2;m.position.y=.6;wld.add(m)});
 G.riv.forEach(r=>{r.pts.forEach((p,i)=>{const c=new THREE.Mesh(new THREE.CircleGeometry(r.w/2,16),bm('#2aa7e8'));c.rotation.x=-PI/2;c.position.set(p[0],.6,p[1]);wld.add(c);if(i)strip(r.pts[i-1][0],r.pts[i-1][1],p[0],p[1],r.w,.6,'#2aa7e8')})});
 G.e.forEach(E=>{const A=G.n[E.a],Zn=G.n[E.b],t=(E.cls=='m'?RT2:RT).clone();t.needsUpdate=true;t.repeat.set(1,E.len/160);const mat=new THREE.MeshStandardMaterial({map:t,roughness:.92,metalness:0});roadMats.push(mat);strip(A.x,A.y,Zn.x,Zn.y,E.w,1.5,mat);
  const ra=A.r,rb=Zn.r,L2=E.len-ra-rb,cx=(A.x+Zn.x)/2+E.ux*(ra-rb)/2,cz=(A.y+Zn.y)/2+E.uy*(ra-rb)/2,ang=Math.atan2(E.uy,E.ux);
  if(E.med&&L2>120)obox(L2-120,1.4,24,'#6f8f5a',cx,2.2,cz,ang);
  if(L2>60)[-1,1].forEach(sd=>{const off=sd*(E.w/2+14);obox(L2,T0,28,brickMat(L2/60),cx-E.uy*off,T0/2,cz+E.ux*off,ang)})});
 G.n.forEach(n=>{const m=new THREE.Mesh(new THREE.CircleGeometry(n.r,24),bm('#2f343b'));m.rotation.x=-PI/2;m.position.set(n.x,1.7,n.y);wld.add(m)});
 const pts=[],hb=[],vb=[];G.n.forEach((n,i)=>{if(!n.sig)return;n.ed.forEach(ei=>{const E=G.e[ei],out=E.a==i?1:-1,ox=E.ux*out,oy=E.uy*out,dd=n.r+14,x=n.x+ox*dd-oy*(E.w/2+8),z=n.y+oy*dd+ox*(E.w/2+8);pts.push([x,48,z]);(n.grp[ei]?vb:hb).push([x,98,z])})});
 if(pts.length){im(new THREE.CylinderGeometry(2.6,2.6,96,6),bm('#374151'),pts);im(new THREE.SphereGeometry(9,10,8),mh,hb);im(new THREE.SphereGeometry(9,10,8),mv,vb)}
 const z1=[];peds.forEach(p=>{const cx=(p.ax+p.bx)/2,cz=(p.ay+p.by)/2,ex=(p.bx-p.ax)/p.len,ez=(p.by-p.ay)/p.len,zs=(p.len/2-16)/4;for(let k=-4;k<=4;k++)z1.push([cx+ex*k*zs,1.9,cz+ez*k*zs,1,-p.ang])});
 if(z1.length)im(new THREE.BoxGeometry(34,.4,9),bm('#f1f5f9'),z1);
 stn.forEach(s=>{const g=new THREE.Group(),[gx,gz]=placeAt(s,120);g.position.set(gx,T0,gz);g.rotation.y=Math.atan2(-s.nx,-s.ny);bx(130,7,76,'#1e88e5',0,64,0,g);bx(132,2,78,'#e5e7eb',0,60,0,g);[[-52,-28],[52,-28],[-52,28],[52,28]].forEach(([a,c])=>cy(4,60,'#e5e7eb',a,30,c,g));
  [-30,30].forEach(a=>{bx(10,26,14,'#e5e7eb',a,14,0,g);bx(10,7,14,'#1e88e5',a,28,0,g)});bx(130,46,40,'#8b7765',0,24,-110,g);bx(116,20,1,'#7dd3fc',0,28,-89.6,g);const lb=label('FUEL','ফুয়েল স্টেশন',200);lb.position.set(0,110,0);g.add(lb);wld.add(g);
  const r=new THREE.Mesh(new THREE.RingGeometry(96,110,32),new THREE.MeshBasicMaterial({color:'#38bdf8',side:THREE.DoubleSide}));r.rotation.x=-PI/2;r.position.set(s.x,2.4,s.y);wld.add(r)});
 if(!HWY())stops.forEach(s=>{const g=new THREE.Group(),[gx,gz]=placeAt(s,36);g.position.set(gx,T0,gz);g.rotation.y=Math.atan2(-s.nx,-s.ny);g.scale.setScalar(1.3);
  bx(46,3,14,'#2563eb',0,30,0,g);[[-20,-5],[20,-5]].forEach(([a,c])=>cy(1.5,30,'#e5e7eb',a,15,c,g,6));bx(36,3,6,'#8d6e4a',0,8,-3,g);const lb=label(s.n,s.b,170);lb.position.set(0,84,0);g.add(lb);
  for(let k=0;k<4;k++){const q=mkPed({col:CC[(k*3)%CC.length]});q.position.set(-14+k*9,0,-9);g.add(q)}wld.add(g);
  const r=new THREE.Mesh(new THREE.RingGeometry(86,106,32),new THREE.MeshBasicMaterial({color:'#ffffff',transparent:true,opacity:.55,side:THREE.DoubleSide}));r.rotation.x=-PI/2;r.position.set(s.x,2.4,s.y);wld.add(r)});
 if(HWY())buildGates()}
function buildGates(){const E=G.e[0],hw=E.w/2,gate=(x,a,b2)=>{[-1,1].forEach(sd=>bx(8,120,8,'#4b5563',x,60,sd*(hw+30),wld));bx(10,16,2*(hw+30)+8,'#1e40af',x,126,0,wld);const l=label(a,b2,330);l.position.set(x,172,0);wld.add(l)};
 if(MODE=='hwy'){gate(400,'Leaving '+CT.n,CT.b);gate(E.len-300,'Welcome to '+CITIES[DEST].n,CITIES[DEST].b);for(let x=6000;x<E.len-4000;x+=12000)gate(x,CITIES[DEST].n+' '+Math.round((E.len-x)/260)+' km','');
  S.cams.forEach(x=>{[-1,1].forEach(sd=>bx(6,100,6,'#374151',x,50,sd*(hw+30),wld));bx(8,10,2*(hw+30),'#9ca3af',x,100,0,wld);[-50,50].forEach(z=>bx(14,14,14,'#111827',x,112,z,wld));const l=label('📷 Speed camera','',200);l.position.set(x,150,0);wld.add(l)})}
 if(MODE=='hwy'){const s=stops[0],r=new THREE.Mesh(new THREE.RingGeometry(86,106,32),new THREE.MeshBasicMaterial({color:'#fff',transparent:true,opacity:.55,side:THREE.DoubleSide}));r.rotation.x=-PI/2;r.position.set(s.x,2.4,s.y);wld.add(r)}}

/* ===== vehicles (modern extruded profiles) ===== */
function prof(pts,wd,mat,bv){bv=bv||2;const sh=new THREE.Shape();pts.forEach((p,i)=>i?sh.lineTo(p[0],p[1]):sh.moveTo(p[0],p[1]));
 const g=new THREE.ExtrudeGeometry(sh,{depth:wd-2*bv,bevelEnabled:true,bevelThickness:bv,bevelSize:bv,bevelSegments:2,curveSegments:6});g.translate(0,0,-(wd-2*bv)/2);return new THREE.Mesh(g,mat)}
function mkBus(){if(sel==4)return mkCNG();if(sel==5)return mkSedan();const mo=MO(),g=new THREE.Group(),L2=mo.len,H=sel==3?66:46,hl=L2/2,dd=sel==3,bc=BCOL||mo.c,st=lum(bc)>.72?'#1f2937':mo.s,glass=BS('#101c28',.06,.55);
 g.add(prof([[-hl,6],[hl-3,6],[hl,11],[hl,H*.3],[hl-2,H*.52],[hl-L2*.07,H-2],[hl-L2*.1,H],[-hl+9,H],[-hl+1,H-4],[-hl,H-12]],34,BS(bc,.26,.3),2.2));
 bx(L2-10,8,34,'#23272e',-2,6,0,g);
 [-1,1].forEach(sd=>{bx(L2*.52,H*.26,.9,st,-L2*.22,H*.38,sd*17.5,g);bx(L2*.3,3,.9,st,-L2*.06,H*.6,sd*17.5,g)});
 bx(L2-30,H*.24,34.9,glass,-8,H-12,0,g);if(dd)bx(L2-30,H*.16,34.9,glass,-8,H*.52,0,g);
 const w=bx(2,H*.4,30,glass,hl-L2*.035,H*.66,0,g);w.rotation.z=-.2;
 bx(1,6,20,'#9ca3af',hl+2.4,10,0,g);[-12,12].forEach(z=>bx(1.5,5,8,em('#fff7c2'),hl+2.2,19,z,g));bx(.8,4,10,'#facc15',hl+2.4,5,0,g);
 [-1,1].forEach(sd=>bx(2,10,3,'#111827',hl-7,H*.55,sd*21,g));
 tail=em('#7f1d1d').clone();[-12,12].forEach(z=>bx(1,5,7,tail,-hl-1.4,14,z,g));
 (L2>=88?[.3,-.26,-.36]:[.3,-.3]).forEach(k=>[-1,1].forEach(sd=>{wh(k*L2,sd*18,8,g);const r=cy(4.4,5.6,'#cbd5e1',k*L2,8,sd*18,g,8);r.rotation.x=PI/2}));
 ind=[];[[hl+1.5,-16],[hl+1.5,16],[-hl-1.5,-16],[-hl-1.5,16]].forEach(([x,z])=>{const m=bx(1.5,4,5,em('#fb923c'),x,22,z,g);m.visible=false;ind.push(m)});
 const gh=new THREE.Mesh(new THREE.BoxGeometry(L2+6,H+3,38),new THREE.MeshBasicMaterial({color:bc,transparent:true,opacity:.4,depthFunc:THREE.GreaterDepth,depthWrite:false}));gh.position.y=H/2+2;gh.renderOrder=999;gh.userData.gh=1;g.add(gh);
 const hg=new THREE.Sprite(new THREE.SpriteMaterial({map:GLOW,color:0xfff2c0,blending:THREE.AdditiveBlending,transparent:true,depthWrite:false,fog:false}));hg.scale.set(90,90,1);hg.position.set(hl+30,16,0);hg.userData.gh=1;hg.visible=false;g.add(hg);busGlow=hg;
 g.rotation.order='YXZ';return g}
function mkCar(c){const g=new THREE.Group(),t=c.ty,glass=BS('#101c28',.06,.55);
 if(t==1){bx(26,7,14,'#fbbf24',-4,10,0,g);bx(20,3,17,c.col,-6,27,0,g);[-8,8].forEach(z=>cy(1.2,16,'#374151',-12,19,z,g,5));bx(5,12,6,'#2563eb',9,16,0,g);bx(5,5,5,'#f1c6a0',9,25,0,g);wh(-8,-8,7,g);wh(-8,8,7,g);wh(12,0,6,g)}
 else if(t==2){bx(38,18,22,'#15803d',0,13,0,g);bx(26,3,22,'#111827',-3,26,0,g);bx(2,12,18,glass,14,18,0,g);wh(-12,-11,7,g);wh(-12,11,7,g);wh(14,0,6,g);bx(1,3,4,em('#fde68a'),19,12,0,g)}
 else if(t==4){g.add(prof([[-44,6],[41,6],[44,11],[44,24],[41,34],[-43,34],[-44,26]],34,bm(c.col),2));bx(88,7,34.4,'#f8fafc',0,12,0,g);bx(64,10,34.8,glass,-6,28,0,g);bx(2,13,30,glass,44,27,0,g);[-26,28].forEach(a=>{wh(a,-17,8,g);wh(a,17,8,g)});[-12,12].forEach(z=>bx(1,5,7,em('#fde68a'),45,13,z,g))}
 else if(t==3){bx(84,8,30,'#374151',0,8,0,g);bx(56,34,32,c.col,-10,28,0,g);bx(56,4,33,'#fbbf24',-10,18,0,g);bx(56,4,33,'#ef4444',-10,36,0,g);bx(24,28,30,'#1d4ed8',30,22,0,g);bx(2,12,26,glass,42,28,0,g);[-30,-8,14,34].forEach(a=>{wh(a,-15,8,g);wh(a,15,8,g)});[-10,10].forEach(z=>bx(1,3,5,em('#fde68a'),42,12,z,g))}
 else{const bc=c.pol?'#f8fafc':c.col;g.add(prof([[-27,6],[26,6],[29,10],[28,15],[17,17],[9,27],[-9,27],[-19,18],[-28,15],[-29,10]],28,BS(bc,.3,.25),2));bx(26,8,28.6,glass,-2,22,0,g);
  [-9,9].forEach(z=>{bx(1,3,5,em('#fde68a'),29.5,11,z,g);bx(1,3,5,em('#ef4444'),-29.5,11,z,g)});[18,-18].forEach(a=>{wh(a,-14,6,g);wh(a,14,6,g)});
  if(c.pol){bx(54,4,28.5,'#1e3a8a',0,10,0,g);c.lb=[bx(6,4,10,em('#ef4444'),-3,29,-6,g),bx(6,4,10,em('#3b82f6'),-3,29,6,g)]}}
 return g}

function reset(){CT=CITIES[ci];ROUTE=[];RSEG=[];HINT='';setWorld();buildGraph();makeSites();const mo0=MO();
 S={t:0,money:15000,fuel:mo0.tank,hp:mo0.hp,lvl:1,del:0,score:0,fines:0,sp:0,shake:0,wx:0,wt:50,storm:0,bus:initBus(),m:null,ref:0};
 cd={};cars=[];makePeds();makeCops();for(let k=0;k<trafficN();k++)spawn();modeInit();camA=S.bus.a;build3()}
function setWorld(){if(MODE=='hwy'){HL=Math.min(110000,DIST(ci,DEST)*260);SZ=HL}else if(MODE=='endless')SZ=63000;else if(MODE=='derby')SZ=3600;else SZ=40000;B=SZ;N=2}
function trainNext(i){S.tr={i,t:0,lc:0,sp:0,rev:0,h:0};S.obj=(i==3||i==5)?objAhead(900):null}
function endlessStep(dt){const b=S.bus,E=G.e[b.e];S.score=Math.round(S.dist/260*100)+S.nm*50;if(b.d>0&&b.s>E.len-4000){const sh=36000;b.s-=sh;cars.forEach(c=>{c.s+=c.d>0?-sh:sh})}}
function upd(dt){
 const b=S.bus,k=keys,mo=MO(),ph=Math.floor(S.t/8)%2,gm=MODE!='derby';S.t+=dt;S.shake=Math.max(0,S.shake-dt);
 if(S.t>S.wt){S.wt=S.t+R(45,90);const q=Math.random(),w=q<CT.rain?1:q<CT.rain+CT.fog?2:0;S.storm=(w==1&&Math.random()<.35)?1:0;if(w==1&&S.wx!=1)noise(1.6,.35,220);S.wx=w;toast(['☀ Clear skies',S.storm?'⛈ Thunderstorm: slippery roads':'🌧 Monsoon rain: slippery roads','🌫 Fog: low visibility'][w],'good')}
 const ap=autop&&gm&&(MODE=='scenic'||MODE=='free'),gr=S.wx==1?.7:1,mx=mo.mx*(S.wx==1?.92:1)*(HWY()?1.4:1)*(S.rageT>0?1.2:1);if(ap)autoStep(ph,mx);const gas=(ap?AP.gas:k.up)&&S.fuel>0&&engine,br=ap?AP.br:k.down;b.br=br&&b.v>5;
 if(gas){if(gear<0)b.v=Math.max(-130,b.v-230*dt);else b.v+=(b.v<0?500:mo.ac)*dt}
 if(br){if(b.v>4)b.v=Math.max(0,b.v-620*gr*dt);else if(keys.kd&&gear>0)b.v=Math.max(-150,b.v-240*dt);else b.v=Math.min(0,b.v+620*gr*dt)}
 b.v-=b.v*.28*dt;if(!gas&&!br&&Math.abs(b.v)<8)b.v=0;if(b.v>mx)b.v=Math.max(mx,b.v-300*dt);
 if(gm)driveBus(dt,ph);else{b.a+=((k.right?1:0)-(k.left?1:0))*1.7*mo.turn*(S.wx==1?.85:1)*dt*Math.max(-1,Math.min(1,b.v/110))*(1-Math.min(.5,Math.abs(b.v)/900));b.x=cl2(b.x+Math.cos(b.a)*b.v*dt,40,SZ-40);b.y=cl2(b.y+Math.sin(b.a)*b.v*dt,40,SZ-40)}
 S.fuel=Math.max(0,S.fuel-(.012+Math.abs(b.v)/520*.17*(gas?1:.4))*mo.cf*(engine&&!S.nofuel?1:0)*dt);
 if(S.fuel<=0&&Math.abs(b.v)<8&&stn.length){const s=stn.reduce((a,c)=>Math.hypot(c.x-b.x,c.y-b.y)<Math.hypot(a.x-b.x,a.y-b.y)?c:a);fine(1000,'Towing fee');setBusAt(b,s.e,s.d,cl2(s.t-s.d*350,100,G.e[s.e].len-100),1);b.v=0;S.fuel=20}
 const kmh=Math.abs(b.v)*.13,lim=HWY()?80:Math.hypot(b.x,b.y)<1800?40:60;S.lim=lim;S.kmh=kmh;
 if(HWY()){S.sp=0;if(kmh>lim+8&&S.cams.some(c=>Math.abs(c-b.x)<90))fineCd('cam',6,600,'Speed camera')}else{S.sp=kmh>lim+8?S.sp+dt:0;if(S.sp>1.2)fineCd('spd',8,lim==40?450:300,'Speeding')}
 S.ref=0;for(const s of stn)if(Math.hypot(s.x-b.x,s.y-b.y)<110&&Math.abs(b.v)<60){S.ref=1;const a=Math.min(10*dt,mo.tank-S.fuel,Math.max(0,S.money)/mo.pr);if(a>0){S.fuel+=a;S.money-=a*mo.pr;if(Math.random()<.1)tone(600+S.fuel*3,.08,'sine',.05)}const r=Math.min(6*dt,mo.hp-S.hp,Math.max(0,S.money)/80);if(r>0){S.hp+=r;S.money-=r*80}}
 const m=S.m,T=tgt();if(m.load){m.tl-=dt}
 if(Math.hypot(T.x-b.x,T.y-b.y)<110&&Math.abs(b.v)<40&&!S.nomis){m.hold+=dt;if(m.hold>1.2){m.hold=0;if(!m.load){m.load=1;const dd=Math.hypot(stops[m.p].x-stops[m.d].x,stops[m.p].y-stops[m.d].y)*1.25;m.fp=Math.round((20+dd/CT.sc/45)*CT.fare*mo.fare/5)*5;m.tl=dd/330+30-Math.min(12,S.lvl);toast('🧍 '+m.pax+' passengers boarded (৳'+m.fp+' each)','good');tone(660,.15,'sine',.15);tone(880,.2,'sine',.15,.12)}
  else{let f=m.pax*m.fp,bo=Math.max(0,m.tl)*10|0;if(m.tl<0){f*=.5;bo=0;toast('Late arrival: half fare','bad')}f|=0;S.money+=f+bo;S.score+=f+bo;S.del++;toast(`+৳${f+bo} delivered${bo?' (bonus ৳'+bo+')':''}`,'good');[660,880,1100].forEach((q,i)=>tone(q,.2,'sine',.15,i*.1));if(MODE=='hwy'){arrive();return}if(S.del%3==0){S.lvl++;toast('Level '+S.lvl+': heavier traffic','good')}mission()}}}else m.hold=0;
 if(cars.length<trafficCap())spawn();
 for(const c of cars){const E=G.e[c.e],hx=E.ux*c.d,hy=E.uy*c.d,rem=E.len-c.s,nd=G.n[c.d>0?E.b:E.a];let go=c.sp,bl=0;const lt=nd.sig&&redOf(nd,E.id,ph)&&rem>nd.r-10&&rem<nd.r+80;if(lt||c.hit>0)go=0;c.hit-=dt;
  for(const o of cars.concat([b])){if(o===c)continue;const rx=o.x-c.x,ry=o.y-c.y,f=rx*hx+ry*hy,l=Math.abs(rx*hy-ry*hx);if(f>0&&f<110&&l<24){if(f<70){go=0;bl=1}else go=Math.min(go,c.sp*.4)}}
  if(bl){c.w+=dt;if(c.w>5){c.g=2.5;c.w=0}}else c.w=0;if(c.g>0){c.g-=dt;go=lt?0:c.sp}
  c.v+=(go-c.v)*Math.min(1,dt*3);adv(c,dt,pickCar);
  const[lx,ly]=loc(c);if(MODE!='scenic'&&Math.abs(lx)<mo.len/2+c.l&&Math.abs(ly)<34&&S.t>(cd.car||0)){cd.car=S.t+1.5;fine(800,'Collision');S.hp-=6+Math.abs(b.v)*.03;S.shake=.4;b.v*=-.3;c.v=0;c.hit=1.2;crash()}
  if(MODE=='endless'&&!c.nm&&Math.abs(b.v)>250){const dd=Math.hypot(c.x-b.x,c.y-b.y);if(dd<100&&dd>56&&Math.abs(ly)>22){c.nm=1;S.nm++;S.score+=50;toast('Near miss +50','good')}}
  if(Math.hypot(c.x-b.x,c.y-b.y)>2600){c.dead=1}}
 cars=cars.filter(c=>{if(c.dead&&c.m)dyn.remove(c.m);return!c.dead});
 for(const p of peds){if(p.hide>0){p.hide-=dt;continue}
  if(!p.mv){p.p-=dt;if(p.p<=0&&ph===p.g)p.mv=1}else{p.t+=p.dir*36/p.len*dt;if(p.t>=1||p.t<=0){p.t=Math.max(0,Math.min(1,p.t));p.dir*=-1;p.mv=0;p.p=R(2,6)}}
  p.x=p.ax+(p.bx-p.ax)*p.t;p.y=p.ay+(p.by-p.ay)*p.t;const[lx,ly]=loc(p);
  if(Math.abs(lx)<mo.len/2+8&&Math.abs(ly)<(mo.len>50?26:20)&&Math.abs(b.v)>20&&MODE!='scenic'){fine(5000,'Pedestrian hit');S.hp-=10;S.shake=.5;crash();p.hide=8;b.v*=.3}}
 S.dist+=Math.abs(b.v)*dt;if(MODE=='derby')derbyStep(dt);if(MODE=='train')trainStep(dt);if(MODE=='endless')endlessStep(dt);
 if(S.hp<=0)end('Your vehicle was wrecked.');else if(S.money<-3000)end('You went bankrupt from fines and fuel.')}
function map(g,s,big){if(MODE=='derby'||HWY()){map2(g,s,big);return}
 const bb=G.bb,b=S.bus,k=big?(s-60)/Math.max(bb.x1-bb.x0,bb.y1-bb.y0,1):s/7000,tx=big?s/2-(bb.x0+bb.x1)/2*k:s/2-b.x*k,ty=big?s/2-(bb.y0+bb.y1)/2*k:s/2-b.y*k,X2=x=>tx+x*k,Y2=y=>ty+y*k;
 g.fillStyle='#2f6b3a';g.fillRect(0,0,s,s);g.lineCap='round';g.lineJoin='round';g.fillStyle='#2aa7e8';
 G.sea.forEach(p=>{g.beginPath();p.forEach((q,i)=>i?g.lineTo(X2(q[0]),Y2(q[1])):g.moveTo(X2(q[0]),Y2(q[1])));g.closePath();g.fill()});
 g.strokeStyle='#2aa7e8';G.riv.forEach(r=>{g.lineWidth=Math.max(3,r.w*k);g.beginPath();r.pts.forEach((q,i)=>i?g.lineTo(X2(q[0]),Y2(q[1])):g.moveTo(X2(q[0]),Y2(q[1])));g.stroke()});
 G.e.forEach(E=>{const A=G.n[E.a],Z=G.n[E.b];g.strokeStyle=E.cls=='M'?'#f1f5f9':'#cbd5e1';g.lineWidth=Math.max(2,E.w*k*(big?1.2:1));g.beginPath();g.moveTo(X2(A.x),Y2(A.y));g.lineTo(X2(Z.x),Y2(Z.y));g.stroke()});
 if(ROUTE.length>1){g.strokeStyle='#22d3ee';g.lineWidth=big?5:4;g.beginPath();ROUTE.forEach((q,i)=>i?g.lineTo(X2(q[0]),Y2(q[1])):g.moveTo(X2(q[0]),Y2(q[1])));g.stroke()}
 const T=tgt();g.font='12px system-ui';g.textAlign='center';
 stops.forEach(t=>{g.fillStyle=(t===T&&!S.nomis)?'#fbbf24':'#60a5fa';g.beginPath();g.arc(X2(t.x),Y2(t.y),big?6:4,0,7);g.fill();if(big){g.fillStyle='#fff';g.fillText(t.n,X2(t.x),Y2(t.y)-9)}});
 g.fillStyle='#38bdf8';stn.forEach(t=>{g.fillRect(X2(t.x)-4,Y2(t.y)-4,8,8)});if(!big){g.fillStyle='#cbd5e1';cars.forEach(c=>g.fillRect(X2(c.x)-1.5,Y2(c.y)-1.5,3,3))}
 g.save();g.translate(X2(b.x),Y2(b.y));g.rotate(b.a);g.fillStyle='#fff';const r=big?10:7;g.beginPath();g.moveTo(r,0);g.lineTo(-r,-r*.7);g.lineTo(-r,r*.7);g.fill();g.restore()}
function draw3(){if(!ren)return;const b=S.bus,mo=MO(),h=hr(),ph=Math.floor(S.t/8)%2,dk=h>=20||h<5?1:h>=18?(h-18)/2:h<7?(7-h)/2:0,ca=Math.cos(b.a),sa=Math.sin(b.a);
 wxStep(DT);rainStep(DT);
 const tc=new THREE.Color(1,1,1).lerp(new THREE.Color(.6,.65,.72),WX.rain).lerp(CT.smog?new THREE.Color(.85,.78,.62):new THREE.Color(.82,.86,.9),WX.fog).lerp(new THREE.Color(.03,.05,.13),dk*.94);
 scn.fog.color.set('#e8f4ff').multiply(tc);sky.material.color.copy(tc);sky.position.copy(cam.position);cm.color.copy(tc);cl.position.set(cam.position.x,0,cam.position.z);cl.rotation.y=S.t*.003;
 sunS.visible=dk<.5&&WX.rain<.2&&WX.fog<.3;sunS.position.set(cam.position.x+1300,cam.position.y+3000,cam.position.z+880);SU.position.set(b.x+500,900,b.y+330);SU.target.position.set(b.x,0,b.y);
 const nr=1400+(600-1400)*WX.rain,fr=4500+(3000-4500)*WX.rain;scn.fog.near=nr+(80-nr)*WX.fog;scn.fog.far=fr+(1100-fr)*WX.fog;
 HM.intensity=.45+.55*(1-dk)+WX.flash*1.6;SU.intensity=(.1+1.35*(1-dk))*(1-.45*WX.rain);
 if(Math.abs(dk-lastDk)>.02){lastDk=dk;matB.forEach(m=>m.emissiveIntensity=dk*.9)}
 mh.color.set(ph?'#ef4444':'#22c55e');mv.color.set(ph?'#22c55e':'#ef4444');
 ind.forEach(m=>m.visible=haz&&Math.floor(S.t*3)%2==0);if(busGlow)busGlow.visible=(lights||dk>.2)&&!cockpit;
 const st=(keys.right?1:0)-(keys.left?1:0);ws+=(st-ws)*Math.min(1,DT*8);const roll=(MODE!='derby'&&b.e!=null)?(laneOff(G.e[b.e],b.k)-b.lat)/36:-ws;
 busM.position.set(b.x,1.5,b.y);busM.rotation.y=-b.a;busM.rotation.x=roll*Math.min(1,Math.abs(b.v)/300)*.05;busM.visible=!cockpit;tail.color.set(b.br?'#ff3030':'#7f1d1d');
 SP.intensity=(lights||dk>.1)?2.2*Math.max(dk,.4):0;SP.position.set(b.x+ca*mo.len/2,22,b.y+sa*mo.len/2);SP.target.position.set(b.x+ca*400,0,b.y+sa*400);
 const sh=S.shake*14*(Math.random()-.5);const da=((b.a-camA+PI*3)%(2*PI))-PI;camA+=da*Math.min(1,DT*3.5);
 if(cockpit){const L2=mo.len/2-18,ey=mo.eye;cam.position.set(b.x+ca*L2-sa*13,ey+sh,b.y+sa*L2+ca*13);cam.lookAt(cam.position.x+ca*300,ey-4,cam.position.z+sa*300);cam.fov=72}
 else if(directorOn())directorCam(b);
 else if(!run&&OVK=='menu')menuCam(b,mo);
 else{const k2=[.8,1,1.5][camD],d=mo.cd*k2,hy=mo.ch*k2,c2=Math.cos(camA),s2=Math.sin(camA),tx=b.x-c2*d,tz=b.y-s2*d;let ft=1;
  if(OB.length){const nb=OB.filter(o=>o[1]>b.x-d-200&&o[0]<b.x+d+200&&o[3]>b.y-d-200&&o[2]<b.y+d+200);for(;ft>.3;ft-=.1){let ok=true;for(let q=1;q<=4&&ok;q++){const f=q/4*ft,px=b.x+(tx-b.x)*f,pz=b.y+(tz-b.y)*f,py=10+(hy-10)*f;for(const o of nb)if(px>o[0]&&px<o[1]&&pz>o[2]&&pz<o[3]&&py<o[4]){ok=false;break}}if(ok)break}}
  cam.position.set(b.x+(tx-b.x)*ft+sh,hy*Math.max(ft,.45)+sh,b.y+(tz-b.y)*ft);cam.lookAt(b.x+ca*170,18,b.y+sa*170);cam.fov=60+Math.min(14,Math.abs(b.v)/40)}
 if(run||OVK!='menu')cam.clearViewOffset();cam.updateProjectionMatrix();updChunks(b);updInterior(-roll*1.6,dk);
 for(const c of cars){if(!c.m){c.m=mkCar(c);shd(c.m);dyn.add(c.m)}c.m.position.set(c.x,1.5,c.y);c.m.rotation.y=-c.an;if(c.lb){const f=Math.floor(S.t*4)%2==0;c.lb[0].visible=f;c.lb[1].visible=!f}}
 for(const p of peds){if(!p.m){p.m=mkPed(p);shd(p.m);dyn.add(p.m)}p.m.visible=p.hide<=0;p.m.position.set(p.x??p.ax,1.5,p.y??p.ay)}
 for(const q of cops){if(!q.m){const k=mkCop();q.m=k.g;q.ar=k.ar;q.m.position.set(q.x,2.6,q.y);shd(q.m);dyn.add(q.m)}q.ar.rotation.y=Math.sin(S.t*2)*.8}
 for(const r of rv){if(!r.m){r.m=mkCar(r);shd(r.m);dyn.add(r.m)}r.m.position.set(r.x,1.5,r.y);r.m.rotation.y=-r.a}
 for(const f of fxs){f.t+=DT;if(f.t<0)continue;if(!f.m){f.m=new THREE.Mesh(new THREE.SphereGeometry(1,8,6),new THREE.MeshBasicMaterial({color:'#fb923c',transparent:true}));dyn.add(f.m)}const q=f.t/.7;f.m.position.set(f.x,20+q*40,f.y);f.m.scale.setScalar(10+q*50);f.m.material.opacity=Math.max(0,1-q);if(f.t>.7){dyn.remove(f.m);f.dead=1}}fxs=fxs.filter(f=>!f.dead);
 const T=tgt(),col=S.m.load?0x38bdf8:0xfbbf24,sv=!S.nomis||!!S.obj;beam.visible=tring.visible=chev.visible=sv;beam.position.set(T.x,450,T.y);beam.material.color.setHex(col);tring.position.set(T.x,3,T.y);tring.material.color.setHex(col);tring.scale.setScalar(1+Math.sin(S.t*5)*.08);
 if(!(FRM++%(G.e.length>300?40:12))){const rt=fnav&&stn.length?nearStn():sv?T:null;routeCalc(rt)}updChev();ren.render(scn,cam);
 $('wl').style.transform='rotate('+ws*70+'deg)'}

(function(){if(typeof fetch=='function')CITIES.forEach(c=>fetch('cities/'+c.id+'.json').then(r=>r.ok?r.json():null).then(j=>{if(j&&j.nodes)c.real=j}).catch(()=>{}))})();
/* ===== in-car radio: synthesized stations + your own music ===== */
var MUS,NBUF,GIT,RAD={on:false,st:1,vol:.7,files:[],fi:0,el:null,src:null,url:null,tmr:null,step:0,next:0,ready:false},master=1;
const RST=[{n:'Rock FM',f:'98.3',ic:'🎸',bpm:126},{n:'Lo-fi Chill',f:'91.5',ic:'☕',bpm:78},{n:'Pop Hits',f:'104.2',ic:'🎤',bpm:112},{n:'Bangla Folk',f:'88.8',ic:'🪕',bpm:96},{n:'Ambient Night',f:'101.0',ic:'🌙',bpm:60}];
const m2f=n=>440*Math.pow(2,(n-69)/12),nStations=()=>RST.length+(RAD.files.length?1:0);
function radioName(){if(RAD.st>=RST.length){const f=RAD.files[RAD.fi];return{t:f?f.name.replace(/\.[^.]+$/,'').slice(0,18):'My music',f:'Your files',ic:'🎵'}}const s=RST[RAD.st];return{t:s.n,f:s.f+' FM',ic:s.ic}}
function radioInit(){if(RAD.ready||!AC||!MUS)return;RAD.ready=true;const n=AC.sampleRate*2,b=AC.createBuffer(1,n,AC.sampleRate),a=b.getChannelData(0);for(let i=0;i<n;i++)a[i]=Math.random()*2-1;NBUF=b;
 GIT=AC.createGain();const ws=AC.createWaveShaper(),c=new Float32Array(1024);for(let i=0;i<1024;i++){const x=i/512-1;c[i]=Math.tanh(x*9)}ws.curve=c;ws.oversample='4x';const lp=AC.createBiquadFilter();lp.type='lowpass';lp.frequency.value=3200;GIT.connect(ws);ws.connect(lp);lp.connect(MUS)}
function env(g,t,v,a,d){g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+(a||.005));g.gain.exponentialRampToValueAtTime(.0008,t+d)}
function tn(t,f,d,ty,v,a,dest){const o=AC.createOscillator(),g=AC.createGain();o.type=ty;o.frequency.value=f;env(g,t,v,a,d);o.connect(g);g.connect(dest||MUS);o.start(t);o.stop(t+d+.05)}
function nh(t,d,v,f,ty){const s=AC.createBufferSource(),fl=AC.createBiquadFilter(),g=AC.createGain();s.buffer=NBUF;fl.type=ty;fl.frequency.value=f;g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.0008,t+d);s.connect(fl);fl.connect(g);g.connect(MUS);s.start(t,Math.random());s.stop(t+d+.02)}
function kick(t,v,lo){const o=AC.createOscillator(),g=AC.createGain();o.frequency.setValueAtTime(lo?110:150,t);o.frequency.exponentialRampToValueAtTime(lo?38:42,t+.13);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+.24);o.connect(g);g.connect(MUS);o.start(t);o.stop(t+.27)}
const snare=(t,v)=>{nh(t,.17,v,1900,'bandpass');tn(t,185,.1,'triangle',v*.4,.002)},hat=(t,v,op)=>nh(t,op?.2:.05,v,7500,'highpass'),clap=(t,v)=>{[0,.012,.026].forEach(o=>nh(t+o,.09,v,1500,'bandpass'))},tick=(t,v)=>nh(t,.06,v,2600,'bandpass');
function gtr(t,fs,d,v){fs.forEach(f=>{const o=AC.createOscillator(),g=AC.createGain();o.type='sawtooth';o.frequency.value=f;o.detune.value=R(-6,6);env(g,t,v/fs.length,.004,d);o.connect(g);g.connect(GIT);o.start(t);o.stop(t+d+.05)})}
const bass=(t,f,d,v,ty)=>tn(t,f,d,ty||'triangle',v,.004);
function playStep(i,t){const s=i%16,bar=(i>>4)%4;
 switch(RAD.st){
 case 0:{const r=[40,43,45,38][bar],hz=m2f(r),vel=[1,0,.6,0,1,0,.6,.8,1,0,.6,0,1,0,.8,.6][s];if(vel)gtr(t,[hz,hz*1.4983,hz*2],s%8==0?.32:.11,.34*vel);
  if(s==0||s==8||s==10)kick(t,.9);if(s==4||s==12)snare(t,.6);if(s%2==0)hat(t,.16,s%8==6);if(s%4==0||s==7||s==14)bass(t,hz/2,.2,.3);if(bar==3&&s==15)gtr(t,[m2f(r+7),m2f(r+14)],.12,.2);break}
 case 1:{const ch=[[50,53,57,60],[55,59,62,65],[48,52,55,59],[57,60,64,67]][bar];if(s==0)ch.forEach((n,k)=>tn(t+k*.014,m2f(n),3.3,'sine',.07,.04));
  if(s==6||s==11)tn(t,m2f(ch[(s>>1)%4]+12),.5,'triangle',.06,.01);if(s==0||s==10)kick(t,.5,1);if(s==4||s==12)snare(t,.25);if(s%2==0)hat(t+(s%4==2?.03:0),.06);if(s==0||s==7||s==10)tn(t,m2f(ch[0]-24),.45,'sine',.2,.01);break}
 case 2:{const ch=[[60,64,67],[55,59,62],[57,60,64],[53,57,60]][bar];if(s%4==0)kick(t,.8);if(s==4||s==12)clap(t,.45);if(s%4==2)hat(t,.12,true);else if(s%2==0)hat(t,.06);
  if(s%2==0)bass(t,m2f(ch[0]-24),.18,.2,'sawtooth');tn(t,m2f(ch[s%3]+12),.13,'sawtooth',.04,.003);if(s==0)ch.forEach(n=>tn(t,m2f(n),1.5,'square',.022,.01));break}
 case 3:{const sc=[0,2,3,7,8,10,12],root=50,m=[0,2,3,2,4,3,2,0][s>>1]+(bar==3?1:0);if(s%2==0){const n=root+12+sc[m%7];tn(t,m2f(n),.4,'triangle',.13,.003);tn(t,m2f(n)*2,.22,'sine',.04,.003)}
  if(s==0){tn(t,m2f(root-12),2.6,'sine',.12,.1);tn(t,m2f(root-5),2.6,'sine',.07,.1)}if(s==0||s==6||s==10)kick(t,.6,1);if(s==4||s==12)tick(t,.3);if(s%2==1&&s>8)tick(t,.1);break}
 default:{const ch=[[48,55,60,64],[46,53,58,65],[45,52,57,64],[43,50,55,62]][bar];if(s==0)ch.forEach((n,k)=>tn(t+k*.05,m2f(n),4.7,'sine',.06,1.6));if(s==8&&bar%2==0)tn(t,m2f(ch[3]+12),3,'triangle',.035,.3);if(s==5&&bar==1)tn(t,m2f(ch[1]+24),1.6,'sine',.03,.01)}}}
function radioTick(){if(!RAD.on||!AC||RAD.st>=RST.length||!NBUF)return;const dt=60/RST[RAD.st].bpm/4;while(RAD.next<AC.currentTime+.18){playStep(RAD.step,RAD.next);RAD.next+=dt;RAD.step++}}
function playFile(){const f=RAD.files[RAD.fi];if(!f||!AC||!MUS)return;if(!RAD.el){RAD.el=new Audio();RAD.src=AC.createMediaElementSource(RAD.el);RAD.src.connect(MUS);RAD.el.onended=()=>{RAD.fi=(RAD.fi+1)%RAD.files.length;if(RAD.on&&RAD.st>=RST.length){playFile();radioUI()}}}
 if(RAD.url)URL.revokeObjectURL(RAD.url);RAD.url=URL.createObjectURL(f);RAD.el.src=RAD.url;RAD.el.play().catch(()=>{})}
function stopFile(){if(RAD.el)RAD.el.pause()}
function radioOn(v){audio();if(!AC)return;RAD.on=v;if(MUS)MUS.gain.value=v?RAD.vol:0;if(v){radioInit();RAD.next=AC.currentTime+.1;RAD.step=0;if(!RAD.tmr)RAD.tmr=setInterval(radioTick,40);if(RAD.st>=RST.length)playFile();else stopFile()}else stopFile();radioUI()}
function radioPick(i){audio();RAD.st=Math.max(0,Math.min(nStations()-1,i));RAD.step=0;RAD.next=AC?AC.currentTime+.1:0;if(!RAD.on){radioOn(true);return}if(RAD.st>=RST.length)playFile();else stopFile();radioUI();const n=radioName();toast(n.ic+' '+n.t+' · '+n.f,'good')}
function radioNext(d){radioPick((RAD.st+d+nStations())%nStations())}
function radioVol(v){RAD.vol=v;if(MUS&&RAD.on)MUS.gain.value=v}
function setMaster(v){master=v;if(MG)MG.gain.value=mute?0:v}
function radioUI(){const l=$('rlist');if(!l)return;l.innerHTML='';const all=RST.map(s=>({n:s.n,f:s.f+' FM',ic:s.ic}));if(RAD.files.length)all.push({n:'My music',f:RAD.files.length+' file'+(RAD.files.length>1?'s':''),ic:'🎵'});
 all.forEach((s,i)=>{const b=document.createElement('button');b.className='rs'+(i==RAD.st&&RAD.on?' on':'');b.innerHTML=`<span>${s.ic}</span><b>${s.n}</b><small>${s.f}</small>`;b.onclick=()=>radioPick(i);l.append(b)});
 const n=radioName();$('rtn').textContent=RAD.on?n.ic+' '+n.t:'📻 Radio off';$('rplay').textContent=RAD.on?'⏸':'▶';$('rvol').value=RAD.vol}
function radioPanel(){const p=$('radio');p.hidden=!p.hidden;if(!p.hidden)radioUI()}
(function(){$('rx').onclick=()=>{$('radio').hidden=true};$('rplay').onclick=()=>radioOn(!RAD.on);$('rnext').onclick=()=>radioNext(1);$('rprev').onclick=()=>radioNext(-1);$('rvol').oninput=e=>radioVol(+e.target.value);
 $('rfile').onchange=e=>{RAD.files=[...e.target.files].filter(f=>f.type.startsWith('audio'));RAD.fi=0;if(RAD.files.length){RAD.st=RST.length;radioOn(true);radioPick(RST.length)}radioUI()};
 addEventListener('keydown',e=>{if(e.repeat)return;if(e.code=='KeyN')radioNext(e.shiftKey?-1:1);if(e.code=='KeyO')radioOn(!RAD.on)})})();

/* ===== 3D cockpit interiors, tailored per vehicle ===== */
var INT=null,CAB=null,ICL=null,IRD=null,iWheel=null,iT=0;
const IMat=(c,o)=>new THREE.MeshLambertMaterial(Object.assign({color:c,fog:false},o||{}));
function cvs(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;const t=new THREE.CanvasTexture(c);t.encoding=THREE.sRGBEncoding;return{c,x:c.getContext('2d'),t,m:new THREE.MeshBasicMaterial({map:t,fog:false})}}
function ib(g,w,h,d,m,x,y,z,rx,ry,rz){const o=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);o.position.set(x,y,z);o.rotation.set(rx||0,ry||0,rz||0);g.add(o);return o}
function ipl(g,w,h,m,x,y,z,rx,ry){const o=new THREE.Mesh(new THREE.PlaneGeometry(w,h),m);o.position.set(x,y,z);o.rotation.set(rx||0,ry||0,0);g.add(o);return o}
function wheel3(r,tube,col,spokes){const g=new THREE.Group(),m=IMat(col);g.add(new THREE.Mesh(new THREE.TorusGeometry(r,tube,8,28),m));const hub=new THREE.Mesh(new THREE.CylinderGeometry(r*.3,r*.32,tube*1.8,14),IMat('#15171b'));hub.rotation.x=PI/2;g.add(hub);
 for(let i=0;i<spokes;i++){const a=i*2*PI/spokes+PI/2,sp=new THREE.Mesh(new THREE.BoxGeometry(r*.95,tube*1.3,tube*1.3),m);sp.position.set(Math.cos(a)*r*.48,Math.sin(a)*r*.48,0);sp.rotation.z=a;g.add(sp)}return g}
function buildInterior(){if(!cam)return;if(INT)cam.remove(INT);INT=new THREE.Group();const g=INT,kind=sel==4?'cng':sel==5?'car':sel==3?'dd':sel==2?'mini':'bus';
 CAB=new THREE.PointLight(0xffe2b8,0,110);CAB.position.set(0,10,-8);g.add(CAB);ICL=cvs(256,128);IRD=cvs(128,64);
 const dk=IMat('#1a1d23'),dk2=IMat('#262a31'),roof=IMat('#2a2d33'),met=IMat('#b9bec6'),gl=new THREE.MeshBasicMaterial({color:'#0b1620',fog:false,transparent:true,opacity:.85});
 const mirror=(x,y,z,w,h,ry)=>{ib(g,w+1,h+1,.8,dk,x,y,z,0,ry);ipl(g,w,h,gl,x,y,z+.5,0,ry)};
 iWheel=null;
 if(kind=='car'){
  ib(g,66,4,22,dk,0,-9.5,-22,-.1);ib(g,66,10,6,dk2,0,-14.5,-14);ib(g,20,5,9,dk,0,-6.8,-18,.15);ipl(g,14,6.6,ICL.m,0,-6.2,-16.6,-.38);
  const t=new THREE.Group();t.position.set(0,-9.8,-13.5);t.rotation.x=-.5;iWheel=wheel3(8.2,.95,'#14161a',3);t.add(iWheel);g.add(t);
  ib(g,15,6,11,dk2,-13,-12,-16);ipl(g,10.5,4.8,IRD.m,-13,-8.8,-16.4,-.4,.3);ib(g,2.5,8,2.5,met,-5,-12,-9);
  ib(g,3,36,3,roof,-27.5,5,-20,0,0,-.28);ib(g,3,36,3,roof,27.5,5,-20,0,0,.28);ib(g,72,3,26,roof,0,16,-16,.12);ib(g,3,10,34,dk2,-32,-9,-8);ib(g,3,10,34,dk2,32,-9,-8);
  mirror(0,11.5,-13,8,2.4);mirror(-34,-1,-14,5,3.6,.5);mirror(34,-1,-14,5,3.6,-.5)}
 else if(kind=='cng'){
  ib(g,31,1.3,1.3,met,0,-8,-13);[-1,1].forEach(s=>{const gp=new THREE.Mesh(new THREE.CylinderGeometry(1.2,1.2,5,10),IMat('#101216'));gp.rotation.z=PI/2;gp.position.set(s*17,-8,-13);g.add(gp)});
  const pod=new THREE.Mesh(new THREE.CylinderGeometry(5,5,3,18),dk);pod.rotation.x=PI/2-.3;pod.position.set(0,-7,-14);g.add(pod);ipl(g,9.5,4.8,ICL.m,0,-6.2,-12.4,-.3);
  const t=new THREE.Group();t.position.set(0,-8,-13);iWheel=t;g.add(t);iWheel.add(new THREE.Mesh(new THREE.BoxGeometry(.1,.1,.1),dk));
  ib(g,8,4.5,3.5,dk2,-14,-3,-14);ipl(g,6.8,3,IRD.m,-14,-3,-12.1);const f=new THREE.Mesh(new THREE.CylinderGeometry(1.1,1.1,16,8),met);f.position.set(0,-14,-15);g.add(f);
  [-1,1].forEach(s=>ib(g,1.2,32,1.2,met,s*26,5,-17,0,0,-s*.18));ib(g,54,1.3,1.3,met,0,19,-18);ib(g,66,1,36,IMat('#101216'),0,19.5,-10);ib(g,.8,6,.8,met,-23,7,-14,0,0,.9);mirror(-26,4.5,-13,4.6,3.2,.4)}
 else{
  const big=kind=='bus'||kind=='dd',s=kind=='mini'?.88:1;g.scale.setScalar(s);
  ib(g,80,5,26,dk,0,-12,-24,-.08);ib(g,80,13,6,dk2,0,-17,-15);ib(g,22,6,10,dk,0,-8.8,-19,.2);ipl(g,17,8,ICL.m,0,-8.2,-17.6,-.3);
  const t=new THREE.Group();t.position.set(0,-11.5,-15);t.rotation.x=-1.08;iWheel=wheel3(10.6,1,'#17191d',4);t.add(iWheel);g.add(t);
  ib(g,9,6,7,dk2,19,-9.5,-19);ipl(g,6.5,3.2,IRD.m,19,-8,-15.4,-.2,-.25);ib(g,12,6,10,dk2,-19,-11.5,-18);ipl(g,10,4.4,IRD.m,-19,-8.6,-13.4,-.3,.3);
  ib(g,1.5,44,1.5,roof,0,6,-27);ib(g,4,42,4,roof,-31,3,-23,0,0,-.12);ib(g,4,42,4,roof,31,3,-23,0,0,.12);ib(g,80,3,28,roof,0,19,-16,.1);ib(g,34,3.4,3,IMat('#0a0c10'),0,15.5,-17);
  [-1,1].forEach(sd=>{ib(g,.8,12,.8,met,sd*35,3,-20,0,0,sd*.2);mirror(sd*39,3,-20,6,11,sd*.45)});mirror(0,12.5,-14,10,2.6);if(kind=='dd')ib(g,40,1.5,16,IMat('#16181d'),0,17.5,-12)}
 g.traverse(o=>{o.renderOrder=20;if(o.material&&o.material.depthTest!==undefined)o.frustumCulled=false});INT.visible=false;cam.add(INT)}
function drawCluster(){const x=ICL.x,mo=MO(),sp=S.kmh||0,cng=sel==4;x.fillStyle='#06080c';x.fillRect(0,0,256,128);
 const dial=(cx,cy,r,v,mxv,lab,col)=>{x.lineWidth=6;x.strokeStyle='#2b323c';x.beginPath();x.arc(cx,cy,r,PI*.75,PI*2.25);x.stroke();x.strokeStyle=col;x.beginPath();x.arc(cx,cy,r,PI*.75,PI*.75+PI*1.5*Math.min(1,v/mxv));x.stroke();
  for(let i=0;i<=6;i++){const a=PI*.75+PI*1.5*i/6;x.strokeStyle='#8b93a0';x.lineWidth=2;x.beginPath();x.moveTo(cx+Math.cos(a)*(r-10),cy+Math.sin(a)*(r-10));x.lineTo(cx+Math.cos(a)*(r-3),cy+Math.sin(a)*(r-3));x.stroke()}
  const a=PI*.75+PI*1.5*Math.min(1,v/mxv);x.strokeStyle='#ff5a36';x.lineWidth=3;x.beginPath();x.moveTo(cx,cy);x.lineTo(cx+Math.cos(a)*(r-5),cy+Math.sin(a)*(r-5));x.stroke();x.fillStyle='#e5e7eb';x.font='bold 21px system-ui';x.textAlign='center';x.fillText(lab,cx,cy+r*.62)};
 if(!cng){dial(70,62,50,sp,120,String(sp|0),'#22d3ee');dial(194,66,35,S.fuel,mo.tank,'⛽','#fbbf24');x.fillStyle='#8b93a0';x.font='11px system-ui';x.fillText('km/h',70,86)}
 else{x.fillStyle='#22d3ee';x.font='bold 46px system-ui';x.textAlign='center';x.fillText(String(sp|0),84,66);x.font='15px system-ui';x.fillStyle='#8b93a0';x.fillText('km/h',84,88);x.fillStyle='#fbbf24';x.fillRect(150,46,Math.max(2,88*S.fuel/mo.tank),14);x.strokeStyle='#8b93a0';x.lineWidth=1;x.strokeRect(150,46,88,14);x.font='12px system-ui';x.fillText('CNG',194,40)}
 x.font='19px system-ui';x.textAlign='left';x.fillStyle=lights?'#38bdf8':'#334155';x.fillText('💡',10,120);x.fillStyle=(haz&&Math.floor(S.t*3)%2==0)?'#fb923c':'#334155';x.fillText('⚠',44,120);x.fillStyle=engine?'#22c55e':'#ef4444';x.fillText('●',80,120);x.fillStyle='#e5e7eb';x.font='bold 18px system-ui';x.textAlign='right';x.fillText(gear>0?'D':'R',246,120);ICL.t.needsUpdate=true}
function drawRadioScr(){const x=IRD.x;x.fillStyle='#06121a';x.fillRect(0,0,128,64);const n=radioName();x.fillStyle=RAD.on?'#38bdf8':'#475569';x.font='bold 14px system-ui';x.textAlign='left';x.fillText((RAD.on?'♪ ':'⏻ ')+n.t,6,20);x.font='11px system-ui';x.fillStyle='#94a3b8';x.fillText(n.f,6,36);
 if(RAD.on)for(let i=0;i<14;i++){const h=5+Math.abs(Math.sin(performance.now()/170+i*1.35))*16;x.fillStyle='#22d3ee';x.fillRect(6+i*8,62-h,5,h)}IRD.t.needsUpdate=true}
function updInterior(steer,dk){if(!INT)return;INT.visible=!!cockpit;if(!cockpit)return;if(iWheel)iWheel.rotation.z=-steer*1.2;CAB.intensity=dk*1.1;iT+=DT;if(iT>.07){iT=0;drawCluster();drawRadioScr()}}

/* ===== auto-drive, scenic camera director, menu showcase, sedan ===== */
var autop=false,AP={gas:false,br:false},DIR={shot:0,t:0,init:false,pos:null,look:null};
const UPK=()=>autop?AP.gas:keys.up,directorOn=()=>MODE=='scenic'&&autop;
function autoStep(ph,mx){const b=S.bus,E=G.e[b.e],hx=E.ux*b.d,hy=E.uy*b.d,rem=E.len-b.s,nd=G.n[b.d>0?E.b:E.a];let vt=Math.min(mx*.55,320);
 if(nd.sig&&redOf(nd,E.id,ph)&&rem>nd.r-5&&rem<nd.r+420)vt=Math.min(vt,Math.max(0,(rem-nd.r-30)*.9));if(rem<nd.r+260)vt=Math.min(vt,210);
 for(const c of cars){const rx=c.x-b.x,ry=c.y-b.y,f=rx*hx+ry*hy,l=Math.abs(rx*hy-ry*hx);if(f>20&&f<260&&l<26)vt=Math.min(vt,Math.max(0,c.v+(f-110)*.8))}
 for(const p of peds){if(p.hide>0||!p.mv||p.x==null)continue;const rx=p.x-b.x,ry=p.y-b.y,f=rx*hx+ry*hy,l=Math.abs(rx*hy-ry*hx);if(f>20&&f<240&&l<90)vt=Math.min(vt,Math.max(0,(f-100)*.8))}
 {const tt=.9,px=b.x+hx*b.v*tt,py=b.y+hy*b.v*tt;for(const c of cars){const rx=c.x-b.x,ry=c.y-b.y,f=rx*hx+ry*hy;if(f<-20||f>420)continue;const cx=c.x+Math.cos(c.an)*c.v*tt,cy=c.y+Math.sin(c.an)*c.v*tt;if(Math.hypot(cx-px,cy-py)<85)vt=Math.min(vt,Math.max(0,b.v*.25))}}
 AP.gas=b.v<vt-6;AP.br=b.v>vt+12||(vt<5&&b.v>3);
 const free=(dir)=>!cars.some(c=>{const rx=c.x-b.x,ry=c.y-b.y,f=rx*hx+ry*hy,l=rx*hy-ry*hx;return f>-130&&f<300&&Math.abs(l-dir*36)<26}),
  blk=cars.some(c=>{const rx=c.x-b.x,ry=c.y-b.y,f=rx*hx+ry*hy,l=rx*hy-ry*hx;return f>20&&f<230&&Math.abs(l)<24&&c.v<b.v-35});
 if(S.t>(b.lcd||0)+.7){if(blk){for(const dir of[1,-1]){const nk=b.k+dir;if(nk>=0&&nk<=E.nl-1&&free(dir)){laneChange(dir,1);break}}}
  else if(S.t>(b.lcd||0)+5){const mid=Math.min(1,E.nl-1);if(b.k!=mid){const dir=mid>b.k?1:-1;if(free(dir))laneChange(dir,1)}}}}
function pickScenic(nd,o){const N=G.n[nd],cand=N.ed.filter(i=>i!=o.e);if(!cand.length)return{e:o.e,d:-o.d};S.vis=S.vis||{};
 const sc=cand.map(i=>{const E2=G.e[i];return{e:i,d:E2.a==nd?1:-1,sc:E2.len*(E2.cls=='M'?1.3:1)+(E2.wat?4000:0)+Math.random()*1500-(S.vis[i]||0)*3000}}).sort((a,b)=>b.sc-a.sc),p=sc[0];S.vis[p.e]=(S.vis[p.e]||0)+1;return p}
function directorCam(b){const mo=MO(),ca=Math.cos(b.a),sa=Math.sin(b.a),rx=-sa,rz=ca,sc=mo.len/88+.4,T=S.t;DIR.t+=DT;if(DIR.t>13){DIR.t=0;DIR.shot=(DIR.shot+1)%5}
 let px,py,pz,lx=b.x+ca*60,ly=22,lz=b.y+sa*60;
 switch(DIR.shot){case 0:px=b.x-ca*mo.cd*1.2;py=mo.ch*1.1;pz=b.y-sa*mo.cd*1.2;lx=b.x+ca*140;lz=b.y+sa*140;break;
  case 1:{const a=T*.22;px=b.x+Math.cos(a)*330*sc;pz=b.y+Math.sin(a)*330*sc;py=95*sc+30;lx=b.x;lz=b.y;break}
  case 2:px=b.x+rx*360*sc+ca*40;pz=b.y+rz*360*sc+sa*40;py=70*sc+20;lx=b.x+ca*30;lz=b.y+sa*30;break;
  case 3:px=b.x-ca*260;pz=b.y-sa*260;py=520;lx=b.x+ca*220;lz=b.y+sa*220;ly=0;break;
  default:px=b.x+ca*300*sc;pz=b.y+sa*300*sc;py=48*sc+14;lx=b.x;lz=b.y;ly=26}
 if(!DIR.init){DIR.pos=new THREE.Vector3(px,py,pz);DIR.look=new THREE.Vector3(lx,ly,lz);DIR.init=true}
 const k=Math.min(1,DT*2.2);DIR.pos.x+=(px-DIR.pos.x)*k;DIR.pos.y+=(py-DIR.pos.y)*k;DIR.pos.z+=(pz-DIR.pos.z)*k;DIR.look.x+=(lx-DIR.look.x)*k*1.6;DIR.look.y+=(ly-DIR.look.y)*k;DIR.look.z+=(lz-DIR.look.z)*k*1.6;
 cam.position.copy(DIR.pos);cam.lookAt(DIR.look);cam.fov=52}
function menuCam(b,mo){const a=performance.now()/4200,r=mo.cd*.62,hy=mo.ch*.42;cam.position.set(b.x+Math.cos(a)*r,hy,b.y+Math.sin(a)*r);cam.lookAt(b.x,mo.eye*.5,b.y);cam.fov=46;if(W>H)cam.setViewOffset(W,H,-W*.2,0,W,H);else cam.clearViewOffset()}
function mkSedan(){const mo=MO(),g=new THREE.Group(),bc=BCOL||mo.c,glass=BS('#101c28',.06,.55);
 g.add(prof([[-29,6],[27,6],[30,10],[29,16],[18,18],[9,29],[-10,29],[-20,19],[-29,16],[-30,10]],30,BS(bc,.24,.35),2.2));
 bx(24,9,30.6,glass,-3,24,0,g);const ws=bx(2,10,26,glass,10.5,24,0,g);ws.rotation.z=-.6;const rw=bx(2,9,26,glass,-17,24,0,g);rw.rotation.z=.75;[-9,1].forEach(x=>bx(1.6,10,30.9,'#15181d',x,24,0,g));
 [-1,1].forEach(sd=>{bx(3,3,5,bc,8,19,sd*17.5,g);bx(14,.7,.8,'#e5e7eb',-2,13,sd*17.2,g)});
 [-9.5,9.5].forEach(z=>{bx(1,3.4,6,em('#fff7c2'),30.6,11,z,g);bx(1,3,6,em('#ef4444'),-30.6,12,z,g)});bx(.8,3.6,10,'#f8fafc',31,6.6,0,g);
 tail=em('#7f1d1d').clone();bx(1,2,16,tail,-30.8,14,0,g);
 [-1,1].forEach(sd=>[19,-19].forEach(a=>{wh(a,sd*15,7,g);const r=cy(3.8,5.4,'#cbd5e1',a,7,sd*15,g,8);r.rotation.x=PI/2}));
 ind=[];[[30.5,-12],[30.5,12],[-30.5,-12],[-30.5,12]].forEach(([x,z])=>{const m=bx(1.5,3,4,em('#fb923c'),x,15,z,g);m.visible=false;ind.push(m)});
 const gh=new THREE.Mesh(new THREE.BoxGeometry(66,32,36),new THREE.MeshBasicMaterial({color:bc,transparent:true,opacity:.4,depthFunc:THREE.GreaterDepth,depthWrite:false}));gh.position.y=17;gh.renderOrder=999;gh.userData.gh=1;g.add(gh);
 const hg=new THREE.Sprite(new THREE.SpriteMaterial({map:GLOW,color:0xfff2c0,blending:THREE.AdditiveBlending,transparent:true,depthWrite:false,fog:false}));hg.scale.set(80,80,1);hg.position.set(60,14,0);hg.userData.gh=1;hg.visible=false;g.add(hg);busGlow=hg;g.rotation.order='YXZ';return g}

/* ===== modern home screen ===== */
const HOMEM=[['city','🚌','City · Passengers','Pick up and drop off','#16a34a,#065f46'],['free','🧭','Free drive','Explore the city','#0ea5e9,#0c4a6e'],['scenic','🌅','Scenic auto-drive','Sit back and enjoy the views','#f97316,#9a3412'],['hwy','🛣','Highway','Drive between cities','#8b5cf6,#4c1d95'],['endless','♾','Endless drive','Go as far as you can','#14b8a6,#115e59'],['train','🎓','Training','Learn the controls','#eab308,#854d0e'],['derby','💥','Demolition derby','Ram rivals, build rage','#ef4444,#7f1d1d']];
function show(t,h,b,k){OVK=k||'pause';$('home').hidden=true;document.body.classList.remove('home');$('ot').textContent=t;$('ob').innerHTML=h;$('go').hidden=false;$('go').textContent=b;$('mq').hidden=false;$('ov').hidden=false}
function homeTab(id){document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('on',t.id==id));document.querySelectorAll('.hnav button').forEach(b=>b.classList.toggle('on',b.dataset.t==id));if(id=='tGarage'){selUI();cityUI();colorUI()}}
function renderHome(){const m=$('hmodes');m.innerHTML='';HOMEM.forEach(([id,ic,n,d,gr])=>{const c=gr.split(','),b=document.createElement('button');b.className='mc';b.style.background=`linear-gradient(135deg,${c[0]}cc,${c[1]}ee)`;b.innerHTML=`<span>${ic}</span><b>${n}</b><small>${d}</small>`;b.onclick=()=>pickMode(id);m.append(b)});
 $('hcoin').textContent='৳'+career.toLocaleString('en-US');$('hsub').textContent=`${MO().n} · ${CT.n}`;$('qsel').value=QL}
function mainMenu(skip){run=false;paused=false;OVK='menu';autop=false;cockpit=false;if(!skip){MODE='city';reset()}if(S)S.h0=17.4;document.body.classList.add('home');document.body.classList.remove('scenic','cp');$('ov').hidden=true;$('home').hidden=false;$('dsheet').hidden=true;renderHome();homeTab('tPlay')}
function destMenu(){const l=$('dlist');l.innerHTML='';$('dtitle').textContent='Drive from '+CT.n+' to…';CITIES.forEach((c,i)=>{if(i==ci)return;const b=document.createElement('button');b.className='mc';b.style.background='linear-gradient(135deg,#8b5cf6cc,#4c1d95ee)';b.innerHTML=`<span>🛣</span><b>${c.n}</b><small>about ${DIST(ci,i)} km</small>`;b.onclick=()=>{DEST=i;$('dsheet').hidden=true;startMode('hwy')};l.append(b)});$('dsheet').hidden=false}
function pickMode(id){if(id=='hwy')destMenu();else startMode(id)}
function startMode(id){MODE=id;try{localStorage.setItem('banlast',id)}catch(e){}audio();paused=false;DIR.init=false;DIR.t=0;DIR.shot=0;cockpit=false;document.body.classList.remove('home','cp');$('home').hidden=true;$('ov').hidden=true;reset();autop=(id=='scenic');run=true;
 if(id=='scenic'){S.h0=16.8;S.rate=.025;S.vis={};if(!RAD.on){RAD.st=1;radioOn(true)}}const k=$('kh');k.classList.remove('on');void k.offsetWidth;k.classList.add('on')}
function selUI(){const s=$('hcars');s.innerHTML='';const bar=v=>`<u><i style="width:${Math.round(Math.max(.06,Math.min(1,v))*100)}%"></i></u>`;
 MD.forEach((m,i)=>{const b=document.createElement('button');b.className='vc'+(i==sel?' on':'');b.innerHTML=`<div class="vh"><b>${m.n}</b><span style="background:${m.c}"></span></div><small>${m.d}</small><div class="st"><label>Speed${bar(m.mx/700)}</label><label>Seats${bar(Math.log(m.cap+1)/Math.log(82))}</label><label>Handling${bar(m.turn/1.8)}</label><label>Tough${bar(m.hp/150)}</label></div>`;
  b.onclick=()=>{sel=i;try{localStorage.setItem('banveh',i)}catch(e){}selUI();colorUI();rebuildBus();renderHome()};s.append(b)})}
function cityUI(){const s=$('cs');s.innerHTML='';CITIES.forEach((c,i)=>{const b=document.createElement('button');b.className='chip'+(i==ci?' on':'');b.innerHTML=`<b>${c.n}</b><small>${c.b}</small>`;b.onclick=()=>{ci=i;try{localStorage.setItem('bancity',i)}catch(e){}CT=CITIES[i];cityUI();renderHome();if(!run){MODE='city';reset();S.h0=17.4}};s.append(b)})}
function gbl(){renderHome()}
function helpHtml(){return`<p><b>Drive</b> · W/↑ accelerate · S/↓ brake, then reverse · A/D or ←/→ change lane · H horn</p><p><b>More</b> · L lights · Z hazards · R gear · C cockpit view · V camera distance · F find fuel · M map · T auto-drive · P pause</p><p><b>Radio</b> · O on/off · N next station (Shift+N previous). Rock, lo-fi, pop, folk and ambient are built in, or play your own music files.</p><p><b>Touch</b> · « » change lane, pedals on the right, ⋯ for more buttons. In Demolition Derby A/D steer freely.</p><p>Left lane (curb) turns left at junctions, right lane turns right, middle goes straight. In missions the vehicle follows the cyan route. Fines apply in City and Highway modes.</p><p class="sub">Landmarks and main roads follow real geography approximately; side streets are simplified. 🇧🇩 City Drive BN · by Tasmon Islam${ios?' · iPhone: Share → Add to Home Screen':''}</p>`}
(function(){document.querySelectorAll('.hnav button').forEach(b=>b.onclick=()=>homeTab(b.dataset.t));$('hplay').onclick=()=>{let m='city';try{m=localStorage.getItem('banlast')||'city'}catch(e){}pickMode(m)};$('hhelp').onclick=()=>show('How to play',HELP,'Back','help');$('dclose').onclick=()=>{$('dsheet').hidden=true};
 $('svol').oninput=e=>setMaster(+e.target.value);$('mvol').oninput=e=>{$('rvol').value=e.target.value;radioVol(+e.target.value)};
 $('qsel').onchange=e=>{try{localStorage.setItem('banq',e.target.value)}catch(x){}toast('Applying graphics setting…','good');setTimeout(()=>location.reload(),500)};
 $('smute').onclick=()=>{mute=!mute;if(MG)MG.gain.value=mute?0:master;$('smute').textContent=mute?'🔇 Off':'🔊 On'};$('rfile2').onchange=e=>$('rfile').onchange(e);
 $('bauto').onclick=()=>{if(MODE!='scenic'&&MODE!='free'){toast('Auto-drive works in Scenic and Free drive','bad');return}autop=!autop;$('bauto').classList.toggle('on',autop);toast(autop?'🤖 Auto-drive on':'Manual control','good');DIR.init=false}})();

init3();reset();
HELP=helpHtml();mainMenu(1);if(!ren){$('ob').insertAdjacentHTML('beforeend','<p style="color:var(--bad)">The 3D engine could not load. Check your connection and reload.</p>');$('hmodes').querySelectorAll('button').forEach(b=>b.disabled=true)}
requestAnimationFrame(loop);
