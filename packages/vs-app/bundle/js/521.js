(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[521],{61501:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var l=a(66219),n=a(96909),r=a(2388),i=a(41659),o=a(86980),s=a(6559);const u=async function(e){const t=await e.getModuleBySymbol(n.y.SETTINGS),a=t.addPanel(l.s.TITLE,l.s.HOTKEYS,{width:350});await t.loadPromise.then((()=>{const l="meshtextures";[{panel:a,header:l,setting:"disableTextureStreamBelowLod",initialValue:()=>r.ZP.disableTextureStreamBelowLod,onChange:e=>{r.ZP.disableTextureStreamBelowLod=e,(0,s.qT)().limitStreamingBelow(r.ZP.disableTextureStreamBelowLod)},urlParam:!0,rangePrecision:0,range:[0,10]},{panel:a,header:l,setting:"textureStreamPause",initialValue:()=>r.ZP.debugPauseTexStream,onChange:e=>{r.ZP.debugPauseTexStream=e},urlParam:!0},{panel:a,header:l,setting:"textureStreamRaycastHits",initialValue:()=>r.ZP.debugLOD,onChange:e=>{r.ZP.debugLOD=e,e||(0,o.d)()},urlParam:!0},{panel:a,header:l,setting:"debugRTTQuality",initialValue:()=>r.ZP.debugRttQuality,onChange:t=>{r.ZP.debugRttQuality=t,t||e.commandBinder.issueCommand(new i.u({color:null},{style:i.u.selectBy.all}))},urlParam:!0},{panel:a,header:l,setting:"debugRTTScores",initialValue:()=>r.ZP.debugRttScores,onChange:t=>{r.ZP.debugRttScores=t,t||e.commandBinder.issueCommand(new i.u({color:null},{style:i.u.selectBy.all}))},urlParam:!0}].forEach((e=>t.registerMenuEntry(e)))}))}},45364:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>C,tiledMeshDebugMenu:()=>M});var l=a(88512),n=a(96909),r=a(10757),i=a(84933),o=a(55356),s=a(66219),u=a(59855),d=a(2388),g=a(84303),c=a(2212),m=a(6559),h=a(44283);function p(e,t=16){let a;const l=(0,h.k1)((()=>a=window.setInterval((()=>e()),t)),(()=>{a&&clearInterval(a)}));return l.cancel(),l}const y=new l.Z("tiled-mesh");let x,T=null;function b(e,t,a){T||(T=document.createElement("div"),T.style.color="#FFFFFF",T.style.fontFamily="Roboto",T.style.fontWeight="300",T.style.fontSize="12px",T.style.position="absolute",T.style.top="50px",T.style.width="500px",T.style.pointerEvents="none",T.style.whiteSpace="pre",T.style.zIndex="99999",T.style.textShadow="0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",document.body.appendChild(T));let l=u.t.statsTiles?function(e,t){const a=e.tilesRenderer,l=a.visibleTiles,n={};l.forEach((e=>{var t;const a=`lod${null===(t=e.extras)||void 0===t?void 0:t.level}`,l=n[a]||0;n[a]=l+1}));const r=t.threeRenderer.info,{stats:i,downloadQueue:o,parseQueue:s,lruCache:u}=a,{active:d,downloading:g,inFrustum:c,parsing:m,used:h,visible:p}=i;return`\nthree:\n    drawCalls: ${r.render.calls}\n    geometries: ${r.memory.geometries}\n    textures: ${r.memory.textures}\n    triangles: ${r.render.triangles}\n    memory allocated (megs): ${Math.floor(t.estimatedGPUMemoryAllocated()/2**20)}\ntiles:\n    tiles in frustum: ${c}\n    visible: ${p}\n      lod0 tiles: ${n.lod0||0}\n      lod1 tiles: ${n.lod1||0}\n      lod2 tiles: ${n.lod2||0}\n      lod3 tiles: ${n.lod3||0}\n    downloading gltf: ${g}\n    parsing gltf: ${m}\n    active: ${d}\n    used: ${h}\n    queues:\n      download: ${o.currJobs} running, ${o.items.length} waiting\n      parse: ${s.currJobs} running, ${s.items.length} waiting\n    lruCache: ${u.itemSet.size}\n`}(e,a):"";l+=u.t.statsTextureStream?function(e){const t="downloaded:\n"+Object.keys(e.totalTextures).map((t=>`    ${t}: ${e.totalTextures[t]} `)).join("\n")+"\n";return`textureStreaming:\n    downloadingTiles: ${e.downloadingTiles} / ${e.totalTiles}\n    downloadingTextures: ${e.loadingTextures}\n`+t}(t):"",l+=u.t.statsTextures?function(e){if(x)return x;const t=e.tilesRenderer;if(!t)return"";const a={};function l(e,t,a){const l=a.extras.maxTextureSize||0,n=e[t]||new Map;e[t]=n,n.set(l,(n.get(l)||new Set).add(a.extras.textureName))}return t.traverse((e=>{if(e.extras&&void 0!==e.extras.maxTextureSize&&void 0!==e.extras.level){const t=`lod${e.extras.level}`;l(a,t,e)}return!1}),(()=>!1)),x="texturesPerLod:\n"+Object.keys(a).map((e=>`    ${e}:${[...a[e].entries()].map((([e,t])=>` ${e}px: ${t.size}`))} `)).join("\n"),x}(e):"",T.textContent=l}async function M(e){if(!u.t.debug)return;const t=await e.getModuleBySymbol(n.y.SETTINGS),a=await e.getModuleBySymbol(n.y.INPUT),l=await e.getModuleBySymbol(n.y.WEBGL_RENDERER),g=l.getScene(),c=await e.getModuleBySymbol(n.y.MODEL_MESH),h=c.modelTextureLoader,x=c.modelMesh.tileLoader,T=t.tryGetProperty(d.iT,!1);T&&u.t.statsTiles&&setInterval((()=>b(x,h,l)),150);const M=t.addPanel(s.s.TITLE,s.s.HOTKEYS,{width:350}),C={viz:"visualize",stats:"stats",tile:"tileset",log:"log"},P=function(e,t,a,l,n){const r=S(a,n,((e,t)=>e.setWireframe(t))),s=function(e,t){const a={scale:1},l=(t,l)=>{if(!t)return;const n=e.container.tilesByChunkId.get(t.id),r=(null==n?void 0:n.__error)||1e-4,i=t.lod!==u.t.maxLOD&&r>u.t.errorTarget?1:.5,o=Math.max(0,Math.min(1,1-a.scale/r)),s=l?v(t.lod,o,i):null;t.setColorOverlay(s)},n=S(e,t,l),r=p((()=>n.colorize(e.container.chunks)));return{toggle:e=>{e?r.renew():r.cancel(),n.toggle(e)},colorize:n.colorize,subscription:r,config:a}}(a,n),d=S(a,n,((e,t)=>{e.setColorOverlay(t?v(e.lod,1,.5):null)})),g=S(a,n,((e,t)=>{e.setColorOverlay(t?(0,o.G1)(.5,e.id||0):null)})),c=S(a,n,((e,t)=>{var l;const n=a.container.tilesByChunkId.get(e.id);e.setColorOverlay(t?(0,o.G1)(.5,(0,i.un)((null===(l=null==n?void 0:n.content)||void 0===l?void 0:l.uri)||"missing")||0):null)})),h=S(a,n,((e,t)=>{e.setColorOverlay(t?(0,o.G1)(.5,(e.meshGroup<<16)+e.meshSubgroup||0):null)})),x=S(a,n,((e,t)=>{e.setColorOverlay(t?(0,o.G1)(.5,e.meshSubgroup||0):null)})),T=S(a,n,((e,t)=>{e.setColorOverlay(t?(0,o.G1)(.5,e.meshGroup||0):null)})),b=S(a,n,((e,t)=>{e.setColorOverlay(t?(0,o.G1)(.5,(0,i.un)(e.textureName)||0):null)})),M=S(a,n,((e,t)=>{const l=a.container.tilesByChunkId.get(e.id);e.setColorOverlay(t?(0,o.G1)(.5,(null==l?void 0:l.geometricError)||0):null)})),C=l.slots,P=(0,m.qT)(),w=S(a,n,((e,t)=>{const a=C.find((t=>t.textureName===e.textureName));if(a){const l=a.loading?1:a.quality>P.min(e.lod)?.7:.3,n=P.maxTexelSize/P.get(a.quality).texelSize;e.setColorOverlay(t?v(e.lod,n,l):null)}})),f=p((()=>w.colorize(a.container.chunks)));let O="none";const E={none:void 0,byError:s,byGeometricError:M,byTile:c,bySubgroup:x,byMeshgroup:T,bySubAndMeshgroup:h,byTexture:b,byStreamedTextures:{subscription:f,toggle:e=>{e?f.renew():f.cancel(),e&&y.info("colorize=byStreamedTextures solid color: loading, dark color: streamed, light color: basis"),w.toggle(e)}},byChunk:g,byLod:d};return[{panel:e,header:t.viz,setting:"disableTileUpdates",initialValue:()=>u.t.disableTileUpdates,onChange:e=>{u.t.disableTileUpdates=e},urlParam:!0},{panel:e,header:t.viz,setting:"wireframe",initialValue:()=>!1,onChange:r.toggle,urlParam:!0},{panel:e,header:t.viz,setting:"colorize",initialValue:()=>"none",onChange:e=>{var t,a;null===(t=E[O])||void 0===t||t.toggle(!1),null===(a=E[e])||void 0===a||a.toggle(!0),O=e},options:Object.keys(E),urlParam:!0},{panel:e,header:t.viz,setting:"colorizeByErrorScale",initialValue:()=>1,onChange:e=>{s.config.scale=e},range:[0,6],rangePrecision:3,urlParam:!0}]}(M,C,x,h,e),w=[{panel:M,header:C.stats,setting:"tileStatsOverlay",initialValue:()=>u.t.statsTiles,onChange:e=>{u.t.statsTiles=e},urlParam:!0},{panel:M,header:C.stats,setting:"textureStatsOverlay",initialValue:()=>u.t.statsTextures,onChange:e=>{u.t.statsTextures=e},urlParam:!0},{panel:M,header:C.stats,setting:"textureStreamingOverlay",initialValue:()=>u.t.statsTextureStream,onChange:e=>{u.t.statsTextureStream=e},urlParam:!0}],f=[{panel:M,header:C.log,buttonName:"Log: App State",callback:()=>{y.warn(c),y.warn(a),y.warn(g),y.warn(t)}}];T&&(u.t.hideMenu||await(0,r.gw)(1e3).then((()=>{t.getSettingsGui().loadGuiPackage().then((()=>{t.getSettingsGui().toggle(t.getMainPanelId()),t.getSettingsGui().toggle(t.getMainPanelId())}))})),await(0,r.gw)(16),P.forEach((e=>t.registerMenuEntry(e))),await(0,r.gw)(16),function(e,t){return[{panel:e,header:t.tile,setting:"maxLOD",initialValue:()=>u.t.maxLOD,onChange:e=>{u.t.maxLOD=e},range:[0,3],rangePrecision:0,urlParam:!0},{panel:e,header:t.tile,setting:"errorTarget",initialValue:()=>u.t.errorTarget,onChange:e=>{u.t.errorTarget=e},range:[0,20],rangePrecision:1,urlParam:!0},{panel:e,header:t.tile,setting:"displayActiveTiles",initialValue:()=>u.t.displayActiveTiles,onChange:e=>{u.t.displayActiveTiles=e},urlParam:!0},{panel:e,header:t.tile,setting:"loadSiblings",initialValue:()=>u.t.loadSiblings,onChange:e=>{u.t.loadSiblings=e},urlParam:!0},{panel:e,header:t.tile,setting:"autoDisableRendererCulling",initialValue:()=>u.t.autoDisableRendererCulling,onChange:e=>{u.t.autoDisableRendererCulling=e},urlParam:!0},{panel:e,header:t.tile,setting:"stopAtEmptyTiles",initialValue:()=>u.t.stopAtEmptyTiles,onChange:e=>{u.t.stopAtEmptyTiles=e},urlParam:!0},{panel:e,header:t.tile,setting:"disableTileUpdates",initialValue:()=>u.t.disableTileUpdates,onChange:e=>{u.t.disableTileUpdates=e},urlParam:!0},{panel:e,header:t.tile,setting:"disposeModel",initialValue:()=>u.t.disposeModel,onChange:e=>{u.t.disposeModel=e},urlParam:!0},{panel:e,header:t.tile,setting:"limitMemoryUsage",initialValue:()=>u.t.limitMemoryUsage,onChange:e=>{u.t.limitMemoryUsage=e},urlParam:!0},{panel:e,header:t.tile,setting:"allocatedMegsBeforeLimitingLod",initialValue:()=>u.t.allocatedMegsBeforeLimitingLod,onChange:e=>{u.t.allocatedMegsBeforeLimitingLod=e},urlParam:!0,range:[100,1e3]},{panel:e,header:t.tile,setting:"lruMinExtraTiles",initialValue:()=>u.t.lruMinExtraTiles,onChange:e=>{u.t.lruMinExtraTiles=e},urlParam:!0,range:[0,2e3]},{panel:e,header:t.tile,setting:"lruMaxTiles",initialValue:()=>u.t.lruMaxTiles,onChange:e=>{u.t.lruMaxTiles=e},urlParam:!0,range:[0,2e3]},{panel:e,header:t.tile,setting:"lruUnloadPercent",initialValue:()=>u.t.lruUnloadPercent,onChange:e=>{u.t.lruUnloadPercent=e},urlParam:!0,range:[0,1]},{panel:e,header:"Priority",setting:"errorMultiplierRaycastOcclusion",initialValue:()=>u.t.errorMultiplierRaycastOcclusion,onChange:e=>{u.t.errorMultiplierRaycastOcclusion=e},urlParam:!0,range:[.001,1],rangePrecision:2},{panel:e,header:"Priority",setting:"errorMultiplierHiddenFloors",initialValue:()=>u.t.errorMultiplierHiddenFloors,onChange:e=>{u.t.errorMultiplierHiddenFloors=e},urlParam:!0,range:[.001,1],rangePrecision:2}]}(M,C).forEach((e=>t.registerMenuEntry(e))),w.forEach((e=>t.registerMenuEntry(e))),f.forEach((e=>t.registerMenuButton(e))))}function S(e,t,a){let l=!1;const n=e=>{t.after(g.A.End).then((()=>{e.forEach((e=>{e&&a(e,l)}))}))},r=e.notifyOnChunksLoaded(n);r.cancel();return{toggle:t=>{t?r.renew():r.cancel(),t!==l&&(l=t,n([...e.container.chunks]))},colorize:n,subscription:r}}function v(e,t,a){const l=0===e||3===e?1:0,n=1===e||3===e?1:0,r=2===e||3===e?1:0;return new c.Vector4(l*t,n*t,r*t,a)}const C=M},66219:(e,t,a)=>{"use strict";a.d(t,{s:()=>l});const l={TITLE:"streamed-mesh (T)",HOTKEYS:[a(81507).R.T]}},41659:(e,t,a)=>{"use strict";a.d(t,{u:()=>SetMeshOverlayCommand});var l,n,r=a(17386);!function(e){e.all="all",e.byMeshGroup="byMeshGroup",e.byMeshSubGroup="byMeshSubGroup"}(l||(l={})),function(e){e.explicit="explicit",e.random="random"}(n||(n={}));class SetMeshOverlayCommand extends r.m{constructor(e,t){super(),this.id="SET_MESH_OVERLAY_COLOR",this.payload={selectBy:(null==t?void 0:t.style)||l.all,colorStyle:(null==e?void 0:e.style)||n.explicit,color:(null==e?void 0:e.color)||null,alpha:(null==e?void 0:e.alpha)||.5,index:null==t?void 0:t.index}}}SetMeshOverlayCommand.selectBy=l,SetMeshOverlayCommand.colorBy=n,SetMeshOverlayCommand.COLOR_DIM={x:0,y:0,z:0,w:.3}},59855:(e,t,a)=>{"use strict";a.d(t,{t:()=>o});var l=a(17597),n=a(20331),r=a(60771),i=a(17916);const o={urlTemplateToken:"<file>",hideMenu:"1"!==(0,l.eY)("dmenu","0"),debug:"1"===(0,l.eY)("debugTiles","0"),displayBoxBounds:!1,initialMaxLOD:0,maxLOD:(0,l.eY)("maxLOD",i.V.High),loadSiblings:!0,displayActiveTiles:!1,autoDisableRendererCulling:!0,optimizeRaycast:!1,stopAtEmptyTiles:!1,statsTiles:!0,statsTextures:!1,statsTextureStream:!1,errorTarget:Number((0,l.eY)("errorTarget",4)),disableTileUpdates:!1,errorMultiplierRaycastOcclusion:.1,errorMultiplierHiddenFloors:.01,disposeModel:!1,limitMemoryUsage:(0,r.tq)(),allocatedMegsBeforeLimitingLod:350,lruMinExtraTiles:(0,r.tq)()?0:100,lruMaxTiles:800,lruUnloadPercent:.05,tileAssetRequestPriority:n.RequestPriority.MEDIUM,downloadQueueConcurrency:8,parseQueueConcurrency:10,snappingMaxLOD:i.V.Standard}},86980:(e,t,a)=>{"use strict";a.d(t,{e:()=>s,d:()=>u});var l=a(2212);const n=a(2388).ZP.sightingMaxAge,r=new l.Color;let i,o=-1;const s=(e,t)=>{i||(i=new l.InstancedMesh(new l.SphereBufferGeometry(.005,8,4),new l.MeshBasicMaterial,n),d(i));const a=new l.Matrix4;return({point:l,distance:s})=>{a.makeScale(s,s,s).setPosition(l),i.setMatrixAt(++o%n,a),i.instanceMatrix.needsUpdate=!0;for(let t=n;t--;)i.setColorAt((o-t+n)%n,r.set(e).multiplyScalar(1-t/n));i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.parent||t.scene.add(i)}},u=()=>{var e;i&&(null===(e=i.parent)||void 0===e||e.remove(i),d(i))};function d(e){const t=(new l.Matrix4).makeScale(0,0,0);for(let a=0;a<n;a++)e.setMatrixAt(a,t)}}}]);