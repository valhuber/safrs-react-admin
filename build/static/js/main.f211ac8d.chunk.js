(this["webpackJsonpreact-apilogicserver"]=this["webpackJsonpreact-apilogicserver"]||[]).push([[3],{1315:function(e,t){},1348:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(72),c=r.n(o),i=r(20),s=r(253),l=r(1481),u=r(1467),d=r(1485),b=r(102),j=r(575),m=r(284),f=r(710),p=r(1),h=r(2),O=r(6),g=r(7),v=r(209),y=r(450),x=(Error,function(e){Object(O.a)(r,e);var t=Object(g.a)(r);function r(e,n,a){var o;return Object(h.a)(this,r),(o=t.call(this,e,n,a)).name="SafrsHttpError",o}return Object(p.a)(r)}(y.a)),S={total:"total",headers:{Accept:"application/vnd.api+json; charset=utf-8","Content-Type":"application/vnd.api+json; charset=utf-8"},updateMethod:"PATCH",arrayFormat:"brackets",includeRelations:[],errorHandler:function(e){var t=e.body;return(null===t||void 0===t?void 0:t.errors.length)>0?(alert("Error "+t.errors[0].title),new x(t.errors[0].title,e.status,t.errors[0].code)):(console.log("Unsopported Http Error Body",e.body),e)},endpointToTypeStripLastLetters:["Model","s"]},w=r(8),N=r(25),_=function(){function e(t){if(Object(h.a)(this,e),this.lookup=void 0,this.includes=void 0,this.lookup=new Map,this.includes=[],"object"===typeof t){var r;r=Object.prototype.hasOwnProperty.call(t,"included")?[].concat(Object(N.a)(t.data),Object(N.a)(t.included)):t.data;var n,a=Object(w.a)(r);try{for(a.s();!(n=a.n()).done;){var o=n.value,c=this.getKey(o);this.lookup.set(c,o)}}catch(i){a.e(i)}finally{a.f()}}}return Object(p.a)(e,[{key:"getKey",value:function(e){return"".concat(e.type,":").concat(e.id)}},{key:"get",value:function(e){return this.has(e)?this.lookup.get(this.getKey(e)):e}},{key:"has",value:function(e){return this.lookup.has(this.getKey(e))}},{key:"unwrapData",value:function(e,t){var r=Object.assign({id:e.id,ja_type:e.type},e.attributes);return 0===t.length||Object.prototype.hasOwnProperty.call(e,"relationships")&&(r.relationships=e.relationships),r}}]),e}();var k=r(315),C=r(711),L=function(){!1 in localStorage&&(console.log("Init Configuration"),localStorage.setItem("raconf",JSON.stringify(k)),window.location.reload());var e={},t=localStorage.getItem("raconf");try{e=JSON.parse(t)||(JSON.parse(JSON.stringify(k))||{}),Object.entries(e.resources)}catch(E){console.warn("Failed to parse config ".concat(t)),localStorage.setItem("raconf",JSON.stringify(k))}e.resources||(e.resources={});for(var r=e.resources,n=0,a=Object.entries(r||{});n<a.length;n++){var o,c=Object(i.a)(a[n],2),s=c[0],l=c[1];if(l.relationships=l.relationships||[],l.tab_groups instanceof Array){var u,d=Object(w.a)(l.tab_groups);try{for(d.s();!(u=d.n()).done;){var j=u.value;j.target=j.resource}}catch(I){d.e(I)}finally{d.f()}l.relationships=l.relationships.concat(l.tab_groups)}else for(var m=0,f=Object.entries(l.tab_groups||{});m<f.length;m++){var p=Object(i.a)(f[m],2),h=p[0],O=p[1];l.relationships.push(Object.assign(O,{name:h,target:O.resource}))}if(l.attributes instanceof Array||l.relationships instanceof Array){l.type||(l.type=s),l.search_cols=[],l.sort_attr_names=[],e.resources[s].name=s;var g,v=l.attributes||[],y=Object(w.a)(v);try{for(y.s();!(g=y.n()).done;){var x=g.value;if(x.constructor==Object){var S,N=Object(w.a)(l.relationships||[]);try{for(N.s();!(S=N.n()).done;){var _,C=S.value,L=Object(w.a)(C.fks||[]);try{for(L.s();!(_=L.n()).done;){var J=_.value;x.name==J&&(x.relationship=C,x.relationship.target_resource=e.resources[x.relationship.target])}}catch(I){L.e(I)}finally{L.f()}}}catch(I){N.e(I)}finally{N.f()}x.search&&l.search_cols.push(x),x.sort&&(l.sort_attr_names.push(x.name),l.sort=l.sort_attr_names.join(","))}else console.warn("Invalid attribute ".concat(x))}}catch(I){y.e(I)}finally{y.f()}l.max_list_columns=l.max_list_columns||(null===(o=e.settings)||void 0===o?void 0:o.max_list_columns)||8,console.log("Loaded config resource ".concat(s),l)}}return e.settings.locale=e.settings.locale||function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={languageCodeOnly:!1},r=Object(b.a)(Object(b.a)({},t),e),n=void 0===navigator.languages?[navigator.language]:navigator.languages;if(n)return n.map((function(e){var t=e.trim();return r.languageCodeOnly?t.split(/-|_/)[0]:t}))}()[0]||"fr-FR",e||P()},P=function(e){return console.log("Resetting conf",k),localStorage.setItem("raconf",JSON.stringify(k)),localStorage.setItem("raconfigs",JSON.stringify({})),e&&window.location.reload(),k},J=[C,k],E=(L(),L()),I=1e3;var T=r(758),D=r.n(T),R=r(1445),A=r(1446),M=r(1453),H=r(1455),U=r(1478),F=r(1477),q=r(1452),B=r(1503),W=r(1500),G=r(1501),K=r(278),V=r(1487),z=r(1479),Q=r(1464),X=r(1490),Y=r(1504),Z=r(586),$=r(1465),ee=r(1466),te=r(1488),re=r(283),ne=r(1359),ae=r(1454),oe=r(255),ce=r.n(oe),ie=r(740),se=r.n(ie),le=r(741),ue=r.n(le),de=r(576),be=r(1357),je=r(1482),me=r(1493),fe=r(24),pe={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"75%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,textAlign:"left"};function he(e){var t=e.label,r=e.content,a=e.resource_name,o=n.useState(!1),c=Object(i.a)(o,2),s=c[0],l=c[1];return Object(fe.jsxs)("div",{children:[Object(fe.jsxs)("span",{onClick:function(e){l(!0),e.stopPropagation()},className:"JoinedField",title:a,children:[t," "]}),Object(fe.jsx)(me.a,{open:s,onClose:function(e){e.stopPropagation(),l(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(fe.jsxs)(je.a,{sx:pe,children:[Object(fe.jsx)(re.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:t}),Object(fe.jsx)(re.a,{id:"modal-modal-description",sx:{mt:2},children:r})]})})]})}var Oe=r(1484),ge=r(1489),ve=r(762),ye=(r(827),r(252)),xe=r(473),Se=r(1458),we=r(340),Ne=(r(828),r(835),L()),_e=Object(we.a)({join_attr:{color:"#3f51b5;"}}),ke=[Object(fe.jsx)(G.a,{source:"q",label:"Search",alwaysOn:!0})],Ce=function(e){for(var t=0,r=Object.entries(null===Ne||void 0===Ne?void 0:Ne.resources);t<r.length;t++){var n=Object(i.a)(r[t],2),a=n[0];if(n[1].type===e)return a}return console.warn('No resource for type "'.concat(e)),Ne[e]},Le=function(e){var t=e.attribute,n=t.component,a=t.style||{},o=Object(fe.jsx)(R.a,{source:t.name,style:a},t.name);if("DATE"==t.type&&(o=Object(fe.jsx)(A.a,{source:t.name,style:a,locales:Ne.settings.locale},t.name)),!n)return o;try{var c=Object(de.a)((function(){return r.e(0).then(r.bind(null,1512))}),{resolveComponent:function(e){return e[n]}});o=Object(fe.jsx)(c,{attribute:t})}catch(i){alert("Custom component error"),console.error("Custom component error",i)}return o},Pe=function(e){var t,n,a=e.attribute,o=e.join,c=Object(K.b)();null!==c&&void 0!==c&&c.attributes&&Object.assign(c,c.attributes);var i=o.name,s=o.target,l=o.fks[0],u=null===(t=Ne.resources[o.target])||void 0===t?void 0:t.user_key,d=Object(ye.a)({type:"getOne",resource:s,payload:{id:c?c[l]:null}}),b=d.data;d.loading,d.error;if(!c)return null;var j=b||c[i],m=null===(n=Ne.resources[o.target])||void 0===n?void 0:n.user_component,f=null===j||void 0===j?void 0:j.id;if(j&&m)f=function(e,t){try{var n=Object(de.a)((function(){return r.e(0).then(r.bind(null,1512))}),{resolveComponent:function(t){return t["".concat(e)]}});return Object(fe.jsx)(n,{instance:t})}catch(a){alert("Custom component error"),console.error("Custom component error",a)}return null}(m,j);else if(null!==j&&void 0!==j&&j.attributes&&u){a.relationship.target_resource.attributes.filter((function(e){return e.name==u}));f=Object(fe.jsx)("span",{children:j.attributes[u]||j.id})}var p=Object(fe.jsx)(Ue,{instance:j,resource_name:o.target});return Object(fe.jsx)(he,{label:f,content:p,resource_name:o.target},a.name)},Je=function(e){return!e instanceof Array?(console.warn("Invalid attributes",e),[]):e.map((function(e){if(e.hidden)return null;if(e.relationship){console.log(e.relationship.resource);var t=e.label?e.label:e.relationship.resource||e.name;return Object(fe.jsx)(Pe,{attribute:e,join:e.relationship,label:t},e.name)}return Object(fe.jsx)(Le,{attribute:e,label:e.label?e.label:e.name,style:e.header_style},e.name)}))},Ee=function(e){return Object(fe.jsx)(ve.a,Object(b.a)({rowsPerPageOptions:[10,25,50,100],perPage:e.perPage||25},e))},Ie=function(e){var t=e.attributes;return Object(fe.jsx)(q.a,{container:!0,spacing:3,margin:5,m:40,children:t.map((function(e){return Object(fe.jsx)(Ae,{source:e})}))})},Te=function(e,t,r,n){console.log("Delete",r),e.delete(t,r).then((function(){n()})).catch((function(e){return alert("error")}))},De=function(e){var t,r=e.attribute,n=(e.resource,Object(fe.jsx)(G.a,{source:r.name,fullWidth:!0}));if("DATE"==r.type&&(n=Object(fe.jsx)(Q.a,{source:r.name,fullWidth:!0})),"toone"==(null===(t=r.relationship)||void 0===t?void 0:t.direction)&&r.relationship.target){var a=Ne.resources[r.relationship.target].search_cols,o=Object(fe.jsx)(Oe.a,{optionText:""},r.name);a?0==a.length?console.warn("no searchable attributes configured for ".concat(r.relationship.target)):o=Object(fe.jsx)(Oe.a,{optionText:a[0].name},r.name):console.error("no searchable attributes configured"),n=Object(fe.jsx)(ge.a,{source:r.name,label:"".concat(r.relationship.name," (").concat(r.name,")"),reference:r.relationship.target,fullWidth:!0,children:o})}return Object(fe.jsx)(q.a,{item:!0,xs:4,spacing:4,margin:5,children:n})},Re=function(e){var t=e.record;return Object(fe.jsx)("span",{children:t?"".concat(t.type?t.type+" ":""," #").concat(t.id," "):""})},Ae=function(e){var t=e.source,r=Object(K.b)(),n=(_e(),t.name),a=t.label||n,o=r[n];if(!r)return null;if(!t.relationship)return Object(fe.jsx)(Me,{label:a,value:o});var c=Object(fe.jsx)(Pe,{attribute:t,join:t.relationship},t.name);return Object(fe.jsx)(Me,{label:t.label?t.label:t.name+" (R)",value:c})},Me=function(e){var t=e.label,r=e.value;return Object(fe.jsxs)(q.a,{item:!0,xs:3,children:[Object(fe.jsx)(re.a,{variant:"body2",color:"textSecondary",component:"p",children:t}),Object(fe.jsx)(re.a,{variant:"body2",component:"p",children:r})]})},He=function(e){var t=e.attributes,r=e.relationships,a=e.resource_name,o=e.id,c=Object(fe.jsxs)(re.a,{variant:"h5",component:"h5",style:{margin:"30px 0px 30px"},children:[a,Object(fe.jsxs)("i",{style:{color:"#ccc"},children:[" #",o]})]}),l=Object(fe.jsx)(W.a,{tabs:Object(fe.jsx)(Z.a,{variant:"scrollable",scrollButtons:"auto"}),children:r.map((function(e){return"tomany"===e.direction?function(e,t,r){var a=Object(n.useState)(!0),o=Object(i.a)(a,2),c=(o[0],o[1]),l=Object(n.useState)(),u=Object(i.a)(l,2),d=(u[0],u[1]),b=Object(n.useState)(!1),j=Object(i.a)(b,2),m=(j[0],j[1]),f=Object(s.a)();Object(n.useEffect)((function(){f.getOne(e,{id:t}).then((function(e){var t=e.data;m(t.relationships),c(!1)})).catch((function(e){d(e),c(!1)}))}),[]);var p=Ne.resources[r.target];if(!p)return console.warn("".concat(e,": No resource conf for ").concat(p)),null;if(null===p||void 0===p||!p.attributes)return console.log("No target resource attributes"),null;var h=p.attributes.filter((function(t){var r;return(null===(r=t.relationship)||void 0===r?void 0:r.target)!==e})),O=Je(h);r.source=e;var g=p.col_nr,v=r.fks[0];return Object(fe.jsx)(B.a,{label:r.label||r.name,children:Object(fe.jsx)(Y.a,{reference:r.target,target:v,addLabel:!1,pagination:Object(fe.jsx)(Ee,{}),perPage:p.perPage||10,children:Object(fe.jsxs)(F.a,{rowClick:"show",expand:Object(fe.jsx)(Ie,{attributes:p.attributes}),children:[O.slice(0,g),Object(fe.jsx)(M.a,{})]})})})}(a,o,e):function(e,t,r){var a=Object(n.useState)(!0),o=Object(i.a)(a,2),c=(o[0],o[1]),l=Object(n.useState)(),u=Object(i.a)(l,2),d=(u[0],u[1]),b=Object(n.useState)(!1),j=Object(i.a)(b,2),m=j[0],f=j[1],p=Object(s.a)();return Object(n.useEffect)((function(){p.getOne(e,{id:t}).then((function(e){var t,n,a=e.data;return{rel_resource:Ce(null===(t=a[r.name])||void 0===t?void 0:t.data.type),rel_id:null===(n=a[r.name])||void 0===n?void 0:n.data.id}})).then((function(e){var t=e.rel_resource,r=e.rel_id;console.log(t,r),p.getOne(t,{id:r}).then((function(e){var t=e.data;return console.log(t),f(t)})).then((function(){return console.log(m)})),c(!1)})).catch((function(e){d(e),c(!1)}))}),[]),Object(fe.jsx)(B.a,{label:r.label||r.name,children:Object(fe.jsx)(Ue,{instance:m})},r.name)}(a,o,e)}))});return Object(fe.jsxs)($.a,{children:[c,Object(fe.jsx)(q.a,{container:!0,spacing:3,margin:5,m:40,children:t.map((function(e){return Object(fe.jsx)(Ae,{source:e})}))}),Object(fe.jsx)("hr",{style:{margin:"30px 0px 30px"}}),l]})},Ue=function(e){var t=e.instance,r=Ce(null===t||void 0===t?void 0:t.type);if(!t||!r)return Object(fe.jsx)("span",{children:"..."});var n=Ne.resources[r],a=(null===n||void 0===n?void 0:n.attributes)||[];null===n||void 0===n||n.relationships;return Object(fe.jsxs)("div",{style:{left:"-16px",position:"relative"},children:[Object(fe.jsxs)("div",{style:{textAlign:"right",width:"100%"},children:[Object(fe.jsxs)(be.a,{title:"edit",component:ee.a,to:{pathname:"".concat(r,"/").concat(t.id)},label:"Link",children:[Object(fe.jsx)(se.a,{}),"Edit"]}),Object(fe.jsxs)(be.a,{title:"view",component:ee.a,to:{pathname:"/".concat(r,"/").concat(t.id,"/show")},label:"Link",children:[Object(fe.jsx)(ue.a,{}),"View"]})]}),Object(fe.jsx)(q.a,{container:!0,title:"qsd",children:a.map((function(e){return Object(fe.jsx)(Me,{label:e.name,value:t.attributes[e.name]},e.name)}))})]})},Fe=function(e){window.addEventListener("storage",(function(){return window.location.reload()}));var t=a.a.useState(),r=(Object(i.a)(t,2)[1],Object(n.useState)(Ne.resources[e.name])),o=Object(i.a)(r,2),c=o[0],l=(o[1],Object(n.useMemo)((function(){return e=c,function(t){var r=function(t){var r=Object(s.a)(),n=Object(ne.a)();return[!1!==e.edit?Object(fe.jsx)(M.a,Object(b.a)({title:"Edit",label:""},t),"".concat(e.name,"_edit")):null,!1!==e.delete?Object(fe.jsx)(ae.a,Object(b.a)({title:"Delete",onClick:function(e){e.stopPropagation()},render:function(e){return Object(fe.jsxs)(be.a,{children:[" ",Object(fe.jsx)(ce.a,{style:{fill:"#3f51b5"},onClick:function(a){return Te(r,t.resource,e,n)}})," "]})}},t),"".concat(e.name,"_delete")):null,Object(fe.jsx)(H.a,Object(b.a)({title:"Show",label:""},t))]},n=e.attributes,a=Je(n),o=e.max_list_columns;return Object(fe.jsx)(U.a,Object(b.a)(Object(b.a)({filters:ke,perPage:e.perPage||25,pagination:Object(fe.jsx)(Ee,{}),sort:e.sort||""},t),{},{children:Object(fe.jsxs)(F.a,{rowClick:"show",expand:Object(fe.jsx)(Ie,{attributes:n}),children:[a.slice(0,o),Object(fe.jsx)(r,Object(b.a)({resource:e},t))]})}))};var e}),[c])),d=Object(n.useMemo)((function(){return e=c,function(t){return Object(fe.jsx)(X.a,Object(b.a)(Object(b.a)({},t),{},{children:Object(fe.jsx)(z.a,{children:Object(fe.jsx)(q.a,{container:!0,spacing:3,margin:5,m:400,style:{width:"100%"},children:e.attributes.map((function(t){return Object(fe.jsx)(De,{attribute:t,resource:e},t.name)}))})})}))};var e}),[c]),j=Object(n.useMemo)((function(){return function(e){var t=e.attributes;return function(e){Object(xe.a)();var r=Object(ne.a)(),n=Object(Se.a)();return Object(fe.jsx)(V.a,Object(b.a)(Object(b.a)({},e),{},{onFailure:function(t){n("edit",e.basePath,e.id),r()},children:Object(fe.jsx)(z.a,{children:Object(fe.jsx)(q.a,{container:!0,spacing:2,margin:2,m:40,style:{width:"100%"},children:t.map((function(e){return Object(fe.jsx)(De,{attribute:e},e.name)}))})})}))}}(c)}),[c]),m=Object(n.useMemo)((function(){return function(e){return function(t){var r=e.attributes,n=e.relationships;return Object(fe.jsx)(te.a,Object(b.a)(Object(b.a)({title:Object(fe.jsx)(Re,{})},t),{},{children:Object(fe.jsx)(He,{attributes:r,relationships:n,resource_name:t.resource,id:t.id})}))}}(c)}),[c]);return Object(fe.jsx)(u.a,Object(b.a)(Object(b.a)({},e),{},{list:l,edit:j,create:d,show:m}),e.name)},qe=r(1461),Be=r(1358),We=r(221),Ge=r(744),Ke=r.n(Ge),Ve=function(){return Object(fe.jsxs)("div",{children:[Object(fe.jsx)("h2",{children:"APILogicServer"}),Object(fe.jsxs)("p",{children:["Creates API endpoints exposing database tables and relationships.",Object(fe.jsx)("br",{}),"Provides a ReactJS frontend that connects to the API.",Object(fe.jsx)("br",{}),Object(fe.jsx)("br",{}),"This stack is easily extendible:",Object(fe.jsx)("br",{}),Object(fe.jsxs)("ul",{children:[Object(fe.jsx)("li",{children:"Business logic can be implemented using"}),Object(fe.jsxs)("ul",{children:[Object(fe.jsx)("li",{children:"Python database logic rule engine (constraint enforcement, triggers, multi-table derivations)"}),Object(fe.jsx)("li",{children:"Custom API hooks and endpoints"})]}),Object(fe.jsx)("li",{children:"Custom ReactJS components can be added to the webapp"})]})]})]})},ze=function(e){var t=e.ready,r=Object(n.useState)(!1),a=Object(i.a)(r,2),o=a[0],c=a[1];return t&&!o&&window.getContent&&c(window.getContent()),o?Object(fe.jsx)("div",{dangerouslySetInnerHTML:{__html:o}}):Object(fe.jsx)(Ve,{})},Qe=function(){var e,t=L(),r=Object(n.useState)(!1),a=Object(i.a)(r,2),o=a[0],c=a[1];return Object(fe.jsxs)(qe.a,{children:[Object(fe.jsx)(We.b,{title:"Home"}),Object(fe.jsxs)(Be.a,{children:[Object(fe.jsx)(Ke.a,{url:null===(e=t.settings)||void 0===e?void 0:e.HomeJS,onError:function(e){c(!1),console.error(e)},onLoad:function(){return c(!0)}}),Object(fe.jsx)(ze,{ready:o})]})]})},Xe=r(1367),Ye=r(1351),Ze=r(1491),$e=r(307),et=r.n($e),tt=r(1474),rt=r(760),nt=r(1497),at=r(1495),ot=r(1483),ct=r(1494),it=r(1476),st=r(1299),lt="/ui/admin/admin.yaml";window.location.href.includes(":3000")&&(lt="http://localhost:5656/ui/admin/admin.yaml");var ut=Object(we.a)((function(e){return{widget:{border:"1px solid #3f51b5",marginRight:"1em",marginTop:"1em",marginBottom:"1em"},textInput:{width:"80%"},modal:{position:"absolute",top:"15%",left:"50%",transform:"translate(-50%, -50%)",width:"75%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,textAlign:"left"}}})),dt=function(e){null==e&&(e=lt);var t=function(e){try{!function(e){console.log(e);var t=JSON.parse(localStorage.getItem("raconfigs"));e.api_root?(t[e.api_root]=e,localStorage.setItem("raconf",JSON.stringify(e)),localStorage.setItem("raconfigs",JSON.stringify(t)),window.location.reload()):console.warn("Config has no api_root",e)}(st.load(e))}catch(t){console.warn("Failed to load yaml",e),console.error(t)}};fetch(e,{cache:"no-store"}).then((function(e){return e.text()})).then((function(e){return t(e)})).catch((function(t){return alert("Failed to download yaml from ".concat(e,": ").concat(t))}))},bt=function(){var e=n.useState(!1),t=Object(i.a)(e,2),r=t[0],a=t[1],o=[];try{o=JSON.parse(localStorage.getItem("raconfigs","{}"))}catch(u){alert("Localstorage error")}var c=ut(),s=o?Object.entries(o).map((function(e){var t=Object(i.a)(e,2),r=t[0];t[1];return Object(fe.jsxs)("li",{children:[r," ",Object(fe.jsx)(et.a,{onClick:function(){return function(e){if(window.confirm('Delete configuration "'.concat(e,'" ?')))try{var t=JSON.parse(localStorage.getItem("raconfigs","{}"));delete t[e],localStorage.setItem("raconfigs",JSON.stringify(t)),window.location.reload()}catch(u){alert("Localstorage error")}}(r)}},r)]},r)})):Object(fe.jsx)("span",{}),l=Object(n.useRef)();return[Object(fe.jsx)(be.a,{className:c.widget,onClick:function(){a(!0)},color:"primary",children:"Manage"}),Object(fe.jsx)(me.a,{open:r,onClose:function(e){a(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(fe.jsxs)(nt.a,{sx:{position:"absolute",top:"25%",left:"50%",transform:"translate(-50%, -50%)",width:"75%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,textAlign:"left"},children:[Object(fe.jsx)(re.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Manage Configurations"}),Object(fe.jsx)(re.a,{id:"modal-modal-description",sx:{mt:2},children:Object(fe.jsx)("ul",{children:s})}),Object(fe.jsx)(re.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Load Configuration from URL"}),Object(fe.jsxs)(re.a,{id:"modal-modal-description",sx:{mt:2},children:[Object(fe.jsx)(Xe.a,{label:"Config URL",style:{margin:16,width:"100%"},inputRef:l}),Object(fe.jsx)(be.a,{className:c.widget,onClick:function(e){return dt(l.current.value)},color:"primary",children:"Load"})]})]})})]},jt=function(){var e=[];try{e=JSON.parse(localStorage.getItem("raconfigs","{}"))}catch(s){alert("Localstorage error")}var t=JSON.parse(localStorage.getItem("raconf","")),r=n.useState(t.api_root),a=Object(i.a)(r,2),o=a[0],c=a[1];return Object(fe.jsx)(nt.a,{sx:{minWidth:120},children:Object(fe.jsxs)(ct.a,{fullWidth:!0,children:[Object(fe.jsx)(at.a,{id:"demo-simple-select-label",children:"Saved Configurations"}),Object(fe.jsx)(it.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:o,label:"Configs",size:"small",onChange:function(t){c(t.target.value);var r=e[t.target.value];r&&(localStorage.setItem("raconf",JSON.stringify(r)),window.location.reload())},defaultValue:o,children:e?Object.entries(e).map((function(e){var t=Object(i.a)(e,2),r=t[0];t[1];return Object(fe.jsx)(ot.a,{value:r,children:r},r)})):null})]})})},mt=function(){var e,t=function(e){try{if(e){var t=JSON.parse(e);y(t.api_root)}m("#ddeedd"),localStorage.setItem("raconf",e),l||window.location.reload()}catch(r){m("red")}u(e)},r=function(){var e,t={},r=Object(w.a)(J);try{for(r.s();!(e=r.n()).done;)t=e.value}catch(n){r.e(n)}finally{r.f()}return localStorage.setItem("raconf",JSON.stringify({})),localStorage.setItem("raconfigs",JSON.stringify({})),dt(lt),t},a=ut(),o=localStorage.getItem("raconf")||JSON.stringify(r()),c=Object(n.useState)(o?JSON.stringify(JSON.parse(o),null,4):""),s=Object(i.a)(c,2),l=s[0],u=s[1],d=Object(n.useState)("black"),b=Object(i.a)(d,2),j=b[0],m=b[1],f=Object(n.useState)(!0),p=Object(i.a)(f,2),h=p[0],O=p[1],g=Object(n.useState)(null===(e=JSON.parse(o))||void 0===e?void 0:e.api_root),v=Object(i.a)(g,2),y=(v[0],v[1]);return Object(fe.jsxs)("div",{children:[Object(fe.jsxs)("div",{children:[Object(fe.jsx)(jt,{}),Object(fe.jsx)(bt,{}),Object(fe.jsx)(be.a,{className:a.widget,onClick:function(){return t("{}")},color:"primary",children:"Clear"}),Object(fe.jsx)(be.a,{className:a.widget,onClick:function(){return r()},color:"primary",children:"Reset"}),Object(fe.jsx)(be.a,{className:a.widget,onClick:function(){return window.location.reload()},color:"primary",children:"Apply"}),Object(fe.jsx)(be.a,{className:a.widget,onClick:function(){return function(){var e=JSON.parse(localStorage.getItem("raconf")),t=e.api_root;if(t){var r=JSON.parse(localStorage.getItem("raconfigs","{}"));r||(r={}),r[t]=e,localStorage.setItem("raconfigs",JSON.stringify(r)),window.location.reload()}else alert("Can't save: no 'api_root' set in config")}()},color:"primary",children:"Save"}),Object(fe.jsx)(tt.a,{control:Object(fe.jsx)(Ze.a,{checked:h,onChange:function(e){O(e.target.checked)}}),label:"Auto Save Config"})]}),Object(fe.jsx)("div",{children:Object(fe.jsxs)(W.a,{children:[Object(fe.jsx)(B.a,{label:"yaml",children:Object(fe.jsx)(rt.a,{language:"yaml",value:st.dump(JSON.parse(l)),options:{theme:"vs-dark"},height:"1000px",style:{borderLeft:"8px solid ".concat(j)},onChange:function(e,r){return function(e,r){try{var n=st.load(e);t(JSON.stringify(n)),m("black")}catch(a){console.warn("Failed to process",e),m("red")}}(e)}})}),Object(fe.jsx)(B.a,{label:"json",children:Object(fe.jsx)(Ye.a,{variant:"outlined",minRows:3,style:{width:"80%",backgroundColor:"white"},value:JSON.stringify(JSON.parse(l),null,4),onChange:function(e){return t(e.target.value)}})})]})})]})},ft=r(1480),pt=r(52),ht=r(329),Ot=r(747),gt=r(494),vt=r(748),yt=r(495),xt=r.n(yt),St=function(e){},wt=function(e){var t=Object(pt.f)(ht.b);return Object(fe.jsxs)(Ot.a,Object(b.a)(Object(b.a)({},e),{},{children:[t.map((function(e){return Object(fe.jsx)(gt.a,{to:"/".concat(e.name),primaryText:e.options&&e.options.label||e.name,leftIcon:e.icon?Object(fe.jsx)(e.icon,{}):Object(fe.jsx)(xt.a,{}),onClick:St,sidebarIsOpen:true},e.name)})),Object(fe.jsx)(vt.a,{to:"/Configuration"})]}))},Nt=function(e){return Object(fe.jsx)(ft.a,Object(b.a)(Object(b.a)({},e),{},{menu:wt}))},_t=r(51),kt=r(13),Ct=r.n(kt),Lt=r(154),Pt=r(270),Jt=r(692),Et=r(502),It=(r(139),r(374)),Tt=r(339),Dt=r(1486),Rt=L();var At=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;t.type,t.payload;return e},Mt=function(e){for(var t=0,r=Object.entries(Rt.resources);t<r.length;t++){var n=Object(i.a)(r[t],2),a=n[0];if(n[1].type===e)return a}return!1},Ht=function(e,t){var r,n,a,o,c=Object(It.a)(e,t),s=new Date(Date.now()+1e3);if("CRUD_GET_ONE_SUCCESS"==t.type)return c;var l,u=new Set,d=Object(w.a)((null===(o=t.payload)||void 0===o?void 0:o.included)||[]);try{for(d.s();!(l=d.n()).done;){var b=l.value,j=Mt(b.type);void 0!==b.type&&void 0!==b.id&&j&&(c.resources[j]||(c.resources[j]={}),b.validUntil=s,c.resources[j][b.id]=b,u.add(j))}}catch(S){d.e(S)}finally{d.f()}var m,f=Object(w.a)(u);try{for(f.s();!(m=f.n()).done;)m.value}catch(S){f.e(S)}finally{f.f()}if(Array.isArray(null===(r=t.payload)||void 0===r?void 0:r.data)){var p=t.payload.data;t.payload.validUntil=s,Array.isArray(t.payload.included);var h,O=Object(w.a)(p);try{for(O.s();!(h=O.n()).done;){var g=h.value;if(g.validUntil=s,g.relationships)for(var v=function(){var e,t,r=Object(i.a)(x[y],2),n=r[0],a=r[1],o=Mt(null===(e=a.data)||void 0===e?void 0:e.type);o&&(Array.isArray(a.data)?g.relationships[n]=g[n]=a.data.map((function(e){return c.resources[o][e.id]})):null!==(t=a.data)&&void 0!==t&&t.id&&(g.relationships[n]=g[n]=c.resources[o][a.data.id]))},y=0,x=Object.entries(g.relationships);y<x.length;y++)v()}}catch(S){O.e(S)}finally{O.f()}}else null!==(n=t.payload)&&void 0!==n&&null!==(a=n.data)&&void 0!==a&&a.type;return c},Ut=function(e){var t=e.authProvider,r=e.dataProvider,n=e.history,a=Object(Lt.b)({admin:Ht,router:Object(Pt.b)(n),sReducer:At}),o=Ct.a.mark((function e(){return Ct.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_t.a)([Object(Dt.a)(r,t)].map(_t.f));case 2:case"end":return e.stop()}}),e)})),c=Object(Et.a)(),i=Lt.c,s=Object(Lt.d)((function(e,t){return a(t.type!==Tt.f?e:void 0,t)}),{},i(Object(Lt.a)(c,Object(Jt.a)(n))));return c.run(o),s},Ft=r(151),qt=r(759),Bt=r.n(qt),Wt=Object(Ft.b)(),Gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;return"RA/CRUD_GET_LIST_SUCCESS"===r&&(console.log("bcR",r,n),console.log(e)),e},Kt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{conf:{}},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m.a.fetchJson,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Content-Range",a=Object(f.a)(S,t);t.conf;return{getList:function(t,n){var o,c=t,i=n.pagination,s=i.page,l=i.perPage,u=E.resources[c],d=u.sort,b={"page[number]":s,"page[size]":l,"page[offset]":(s-1)*l,"page[limit]":l};if(d&&(b.sort=d),console.log(n),null!==(o=n.filter)&&void 0!==o&&o.q&&"resources"in E){var m=u.attributes.filter((function(e){return e.search})).map((function(e){return{name:e.name,op:e.op?e.op:"ilike",val:e.val?e.val.format(n.filter.q):"%".concat(n.filter.q,"%")}}));b.filter=JSON.stringify(m)}else Object.keys(n.filter||{}).forEach((function(e){b["filter[".concat(e,"]")]=n.filter[e]}));if(n.sort&&n.sort.field){var f="ASC"===n.sort.order?"":"-";b.sort="".concat(f).concat(n.sort.field)}var p=(E.resources[c].relationships||[]).map((function(e){return e.name}));b.include=p.join(",");var h="".concat(e,"/").concat(t,"?").concat(Object(j.stringify)(b));return r(h).then((function(e){var t=e.json,r=0;t.meta&&a.total&&(r=t.meta[a.total]),r=r||t.data.length;var n=new _(t),o=t.data.map((function(e){return n.unwrapData(e,p)}));return{data:o,included:t.included,validUntil:new Date(Date.now()+I),total:r}})).catch((function(e){console.log("catch Error",e.body);var t=a.errorHandler;return Promise.reject(t(e))}))},getOne:function(t,n){var a=E.resources[t];if(!a)return console.warn("Invalid resource ".concat(t)),new Promise((function(){}));var o=((null===a||void 0===a?void 0:a.relationships)||[]).map((function(e){return e.name})).join(","),c="".concat(e,"/").concat(t,"/").concat(n.id,"?include=").concat(o);return r(c).then((function(e){var t=e.json.data,r=t.id,n=t.attributes,a=t.relationships,o=t.type;return Object.assign(n,a,{type:o},{relationships:a},{attributes:Object(b.a)({},n)}),{data:Object(b.a)({id:r,validUntil:new Date(Date.now()+I)},n)}}))},getMany:function(t,n){t=t;var o="filter[id]="+JSON.stringify(n.ids),c="".concat(e,"/").concat(t,"?").concat(o);return r(c).then((function(e){var t=e.json;console.log("gtMany",t);var r=0;return t.meta&&a.total&&(r=t.meta[a.total]),r=r||t.data.length,{data:t.data.map((function(e){return Object.assign({id:e.id,type:e.type},e.attributes)})),validUntil:new Date(Date.now()+I),total:r}}))},getManyReference:function(t,o){console.log("GMR",o),console.log(t,o.target);var c=o.target,i=o.pagination,s=i.page,l=i.perPage,u=o.sort,d=u.field,b=u.order,m={sort:JSON.stringify([d,b])};m["filter[".concat(c,"]")]=o.id,m["page[limit]"]=l,m["page[offset]"]=(s-1)*l;var f=E.resources[t],p=((null===f||void 0===f?void 0:f.relationships)||[]).map((function(e){return e.name})).join(","),h="".concat(e,"/").concat(t,"?").concat(Object(j.stringify)(m),"&include=").concat(p);return r(h,{}).then((function(e){var t,r=e.headers,o=e.json;r.has(n)||console.debug("The ".concat(n," header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare ").concat(n," in the Access-Control-Expose-Headers header?"));var c=null===(t=o.meta)||void 0===t?void 0:t.total;o.meta&&a.total&&(c=o.meta[a.total]),c=c||o.data.length;var i=new _(o),s=o.data.map((function(e){return i.unwrapData(e,p)}));return{data:s,total:c}}))},update:function(t,n){var o=E.resources[t].type,c=a.endpointToTypeStripLastLetters;for(var i in c)if(t.endsWith(c[i])){o=t.slice(0,-1*c[i].length);break}var s={data:{id:n.id,type:o,attributes:n.data}};return r("".concat(e,"/").concat(t,"/").concat(n.id),{method:a.updateMethod,body:JSON.stringify(s)}).then((function(e){var t=e.json.data,r=t.id,n=t.attributes;return{data:Object(b.a)({id:r},n)}})).catch((function(e){console.log("catch Error",e.body);var t=a.errorHandler;return Promise.reject(t(e))}))},updateMany:function(t,n){return Promise.all(n.ids.map((function(a){return r("".concat(e,"/").concat(t,"/").concat(a),{method:"PUT",body:JSON.stringify(n.data)})}))).then((function(e){return{data:e.map((function(e){return e.json.id}))}}))},create:function(t,n){var o=t,c=a.endpointToTypeStripLastLetters;for(var i in c)if(t.endsWith(c[i])){o=t.slice(0,-1*c[i].length);break}var s={data:{type:o,attributes:n.data}};return r("".concat(e,"/").concat(t),{method:"POST",body:JSON.stringify(s)}).then((function(e){var t=e.json.data,r=t.id,n=t.attributes;return{data:Object(b.a)({id:r},n)}})).catch((function(e){console.log("catch Error",e.body);var t=a.errorHandler;return Promise.reject(t(e))}))},delete:function(t,n){return r("".concat(e,"/").concat(t,"/").concat(n.id),{method:"DELETE",headers:new Headers({"Content-Type":"text/plain"})}).then((function(e){return{data:e.json}}))},deleteMany:function(t,n){return Promise.all(n.ids.map((function(n){return r("".concat(e,"/").concat(t,"/").concat(n),{method:"DELETE",headers:new Headers({"Content-Type":"text/plain"})})}))).then((function(e){return{data:e.map((function(e){return e.json.id}))}}))},getResources:function(){return E?Promise.resolve({data:E}):r("".concat(e,"/schema"),{method:"GET"}).then((function(e){var t=e.json;return localStorage.setItem("raconf",JSON.stringify(t)),{data:t}})).catch((function(){return{data:{}}}))}}}(L().api_root,{}),Vt=function(){return Promise.resolve()},zt=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),r=t[0],a=t[1],o=Object(s.a)();return Object(n.useEffect)((function(){o.getResources().then((function(e){var t=Object.keys(e.data.resources).map((function(e){return{name:e}}));a(t)})).catch((function(e){console.warn(e),a([])}))}),[]),!1===r?Object(fe.jsx)("div",{children:"Loading..."}):Object(fe.jsx)(pt.a,{store:Ut({authProvider:Vt,dataProvider:o,history:Wt}),children:Object(fe.jsxs)(l.a,{layout:Nt,children:[Object(fe.jsx)(u.a,{name:"Home",show:Qe,list:Qe,options:{label:"Home"},icon:D.a}),Object(fe.jsx)(u.a,{name:"Configuration",show:mt,list:mt,options:{label:"Configuration"},icon:Bt.a}),r.map((function(e){return Object(fe.jsx)(Fe,{name:e.name},e.name)}))]})})},Qt=function(){return localStorage.getItem("raconf")||dt(null),Object(fe.jsx)(d.a,{dataProvider:Kt,customReducers:{admin2:Gt},children:Object(fe.jsx)(zt,{})})},Xt=function(e){e&&e instanceof Function&&r.e(84).then(r.bind(null,1588)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),o(e),c(e)}))};c.a.render(Object(fe.jsx)(Qt,{}),document.getElementById("root")),Xt()},315:function(e){e.exports=JSON.parse('{"api_root":null,"resources":{"Databases":{"type":"DB","user_key":"name","attributes":[{"name":"name","hidden":true}]}}}')},602:function(e,t){function r(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=602},603:function(e,t){},711:function(e){e.exports=JSON.parse('{"about":{"date":"December 06, 2021 04:42:12","recent_changes":"works with modified safrs-react-admin","version":"3.50.29"},"api_root":"//ApiLogicServer.pythonanywhere.com/api","info":{"number_relationships":8,"number_tables":8},"properties_ref":{"attribute":{"group":"name","hidden":"exp","label":"caption for display","search":"true | false","style":{"color":"blue","font_weight":0}},"resource":{"allow_delete":"exp","allow_insert":"exp","allow_update":"exp","info":"long html / rich text","menu":"False | name"},"tab":{"label":"text","lookup":"boolean"}},"resources":{"customers":{"attributes":[{"label":"customerName*","name":"customerName","search":true},{"name":"salesRepEmployeeNumber"},{"name":"customerNumber"},{"name":"contactLastName"},{"name":"contactFirstName"},{"name":"phone"},{"name":"addressLine1"},{"name":"addressLine2"},{"name":"city"},{"name":"state"},{"name":"postalCode"},{"name":"country"},{"name":"creditLimit"}],"tab_groups":{"OrderList":{"direction":"tomany","fks":["customerNumber"],"resource":"orders"},"PaymentList":{"direction":"tomany","fks":["customerNumber"],"resource":"payments"},"employee":{"direction":"toone","fks":["salesRepEmployeeNumber"],"resource":"employees"}},"type":"Customer","user_key":"customerName"},"employees":{"attributes":[{"label":"lastName*","name":"lastName","search":true},{"name":"officeCode"},{"name":"reportsTo"},{"name":"employeeNumber"},{"name":"firstName"},{"name":"extension"},{"name":"email"},{"name":"jobTitle"}],"tab_groups":{"CustomerList":{"direction":"tomany","fks":["salesRepEmployeeNumber"],"resource":"customers"},"EmployeeList":{"direction":"tomany","fks":["reportsTo"],"resource":"employees"},"office":{"direction":"toone","fks":["officeCode"],"resource":"offices"},"parent":{"direction":"toone","fks":["reportsTo"],"resource":"employees"}},"type":"Employee","user_key":"lastName"},"offices":{"attributes":[{"label":"officeCode*","name":"officeCode","search":true},{"name":"city"},{"name":"phone"},{"name":"addressLine1"},{"name":"addressLine2"},{"name":"state"},{"name":"country"},{"name":"postalCode"},{"name":"territory"}],"tab_groups":{"EmployeeList":{"direction":"tomany","fks":["officeCode"],"resource":"employees"}},"type":"Office","user_key":"officeCode"},"orderdetails":{"attributes":[{"label":"orderNumber*","name":"orderNumber","search":true},{"name":"orderNumber"},{"name":"productCode"},{"name":"quantityOrdered"},{"name":"priceEach"},{"name":"orderLineNumber"}],"tab_groups":{"order":{"direction":"toone","fks":["orderNumber"],"resource":"orders"},"product":{"direction":"toone","fks":["productCode"],"resource":"products"}},"type":"Orderdetail","user_key":"orderNumber"},"orders":{"attributes":[{"label":"orderNumber*","name":"orderNumber","search":true},{"name":"customerNumber"},{"name":"orderDate"},{"name":"requiredDate"},{"name":"shippedDate"},{"name":"status"},{"name":"comments"}],"tab_groups":{"OrderdetailList":{"direction":"tomany","fks":["orderNumber"],"resource":"orderdetails"},"customer":{"direction":"toone","fks":["customerNumber"],"resource":"customers"}},"type":"Order","user_key":"orderNumber"},"payments":{"attributes":[{"label":"customerNumber*","name":"customerNumber","search":true},{"name":"customerNumber"},{"name":"checkNumber"},{"name":"paymentDate"},{"name":"amount"}],"tab_groups":{"customer":{"direction":"toone","fks":["customerNumber"],"resource":"customers"}},"type":"Payment","user_key":"customerNumber"},"productlines":{"attributes":[{"label":"textDescription*","name":"textDescription","search":true},{"name":"productLine"},{"name":"htmlDescription"},{"name":"image"}],"tab_groups":{"ProductList":{"direction":"tomany","fks":["productLine"],"resource":"products"}},"type":"Productline","user_key":"textDescription"},"products":{"attributes":[{"label":"productName*","name":"productName","search":true},{"name":"productLine"},{"name":"productCode"},{"name":"productScale"},{"name":"productVendor"},{"name":"productDescription"},{"name":"quantityInStock"},{"name":"buyPrice"},{"name":"MSRP"}],"tab_groups":{"OrderdetailList":{"direction":"tomany","fks":["productCode"],"resource":"orderdetails"},"productline":{"direction":"toone","fks":["productLine"],"resource":"productlines"}},"type":"Product","user_key":"productName"}},"settings":{"max_list_columns":"7"}}')},827:function(e,t,r){},829:function(e,t){},830:function(e,t){},831:function(e,t){},832:function(e,t){},833:function(e,t){},834:function(e,t){}},[[1348,4,5]]]);
//# sourceMappingURL=main.f211ac8d.chunk.js.map