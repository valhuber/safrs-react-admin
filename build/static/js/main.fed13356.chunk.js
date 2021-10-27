(this["webpackJsonpreact-apilogicserver"]=this["webpackJsonpreact-apilogicserver"]||[]).push([[1],{131:function(e){e.exports=JSON.parse('{"api_root":"https://apilogicserver.pythonanywhere.com/","resources":{"Category":{"type":"Category","columns":[{"name":"Id","hidden":true},{"name":"CategoryName","label":"Custom Column Name","component":"SampleColumnField"},{"name":"Description","style":{"font-weight":"bold","color":"blue"}}],"relationships":[],"label":"null"},"Customer":{"type":"Customer","user_component":"CustomerLabel","columns":[{"name":"Id"},{"name":"CompanyName"},{"name":"ContactName"},{"name":"ContactTitle"},{"name":"Address"},{"name":"City"},{"name":"Region"},{"name":"PostalCode"},{"name":"Country"},{"name":"Phone"},{"name":"Fax"},{"name":"Balance"},{"name":"CreditLimit"},{"name":"OrderCount"},{"name":"UnpaidOrderCount"}],"relationships":[{"name":"CustomerCustomerDemoList","target":"CustomerCustomerDemo","fks":["CustomerTypeId"],"direction":"tomany"},{"name":"OrderList","target":"Order","fks":["CustomerId"],"direction":"tomany"}],"label":null},"CustomerDemographic":{"type":"CustomerDemographic","columns":[{"name":"Id"},{"name":"CustomerDesc"}],"relationships":[],"label":null},"Employee":{"type":"Employee","label":"emps","user_component":"EmployeeLabel","columns":[{"name":"Id"},{"name":"LastName"},{"name":"FirstName"},{"name":"Title"},{"name":"TitleOfCourtesy"},{"name":"BirthDate"},{"name":"HireDate"},{"name":"Address"},{"name":"City"},{"name":"Region"},{"name":"PostalCode"},{"name":"Country"},{"name":"HomePhone"},{"name":"Extension"},{"name":"Photo"},{"name":"Notes"},{"name":"ReportsTo"},{"name":"PhotoPath"},{"name":"IsCommissioned"},{"name":"Salary"}],"relationships":[{"name":"Manager","target":"Employee","fks":["ReportsTo"],"direction":"toone"},{"name":"Manages","target":"Employee","fks":["ReportsTo"],"direction":"tomany"},{"name":"EmployeeAuditList","target":"EmployeeAudit","fks":["EmployeeId"],"direction":"tomany"},{"name":"EmployeeTerritoryList","target":"EmployeeTerritory","fks":["EmployeeId"],"direction":"tomany"},{"name":"OrderList","target":"Order","fks":["EmployeeId"],"direction":"tomany"}]},"Product":{"type":"Product","user_key":"ProductName","columns":[{"name":"Id"},{"name":"ProductName","search":true},{"name":"SupplierId"},{"name":"CategoryId"},{"name":"QuantityPerUnit"},{"name":"UnitPrice"},{"name":"UnitsInStock"},{"name":"UnitsOnOrder"},{"name":"ReorderLevel"},{"name":"Discontinued"},{"name":"UnitsShipped"}],"relationships":[{"name":"OrderDetailList","target":"OrderDetail","fks":["ProductId"],"direction":"tomany"}],"label":null},"Region":{"type":"Region","columns":[{"name":"Id"},{"name":"RegionDescription"}],"relationships":[],"label":null},"Shipper":{"type":"Shipper","columns":[{"name":"Id"},{"name":"CompanyName"},{"name":"Phone"}],"relationships":[],"label":null},"Supplier":{"type":"Supplier","columns":[{"name":"Id"},{"name":"CompanyName"},{"name":"ContactName"},{"name":"ContactTitle"},{"name":"Address"},{"name":"City"},{"name":"Region"},{"name":"PostalCode"},{"name":"Country"},{"name":"Phone"},{"name":"Fax"},{"name":"HomePage"}],"relationships":[],"label":null},"Territory":{"type":"Territory","columns":[{"name":"Id"},{"name":"TerritoryDescription"},{"name":"RegionId"}],"relationships":[{"name":"EmployeeTerritoryList","target":"EmployeeTerritory","fks":["TerritoryId"],"direction":"tomany"}],"label":null},"CustomerCustomerDemo":{"type":"CustomerCustomerDemo","columns":[{"name":"Id"},{"name":"CustomerTypeId"}],"relationships":[{"name":"Customer","target":"Customer","fks":["CustomerTypeId"],"direction":"toone"}],"label":null},"EmployeeAudit":{"type":"EmployeeAudit","columns":[{"name":"Id"},{"name":"Title"},{"name":"Salary"},{"name":"LastName"},{"name":"FirstName"},{"name":"EmployeeId"},{"name":"CreatedOn"}],"relationships":[{"name":"Employee","target":"Employee","fks":["EmployeeId"],"direction":"toone"}],"label":null},"EmployeeTerritory":{"type":"EmployeeTerritory","columns":[{"name":"Id"},{"name":"EmployeeId"},{"name":"TerritoryId"}],"relationships":[{"name":"Employee","target":"Employee","fks":["EmployeeId"],"direction":"toone"},{"name":"Territory","target":"Territory","fks":["TerritoryId"],"direction":"toone"}],"label":null},"Order":{"type":"Order","columns":[{"name":"Id"},{"name":"CustomerId"},{"name":"EmployeeId"},{"name":"OrderDate"},{"name":"RequiredDate"},{"name":"ShippedDate"},{"name":"ShipVia"},{"name":"Freight"},{"name":"ShipName"},{"name":"ShipAddress"},{"name":"ShipCity"},{"name":"ShipRegion"},{"name":"ShipPostalCode"},{"name":"ShipCountry"},{"name":"AmountTotal"}],"relationships":[{"name":"Customer","target":"Customer","fks":["CustomerId"],"direction":"toone"},{"name":"Employee","target":"Employee","fks":["EmployeeId"],"direction":"toone"},{"name":"OrderDetailList","target":"OrderDetail","fks":["OrderId"],"direction":"tomany"}],"label":null},"OrderDetail":{"type":"OrderDetail","columns":[{"name":"Id"},{"name":"OrderId"},{"name":"ProductId"},{"name":"UnitPrice"},{"name":"Quantity"},{"name":"Discount"},{"name":"Amount"},{"name":"ShippedDate"}],"relationships":[{"name":"Order","target":"Order","fks":["OrderId"],"direction":"toone"},{"name":"Product","target":"Product","fks":["ProductId"],"direction":"toone"}],"label":null}}}')},541:function(e,t){},576:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(17),o=n.n(a),i=n(34),c=n(75),s=n(667),l=n(659),u=n(662),d=n(242),m=n(163),p=n(88);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var y=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===O}(e)}(e)};var O="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function g(e,t){return!1!==t.clone&&t.isMergeableObject(e)?x((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function v(e,t,n){return e.concat(t).map((function(e){return g(e,n)}))}function x(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||v,n.isMergeableObject=n.isMergeableObject||y;var r=Array.isArray(t);return r===Array.isArray(e)?r?n.arrayMerge(e,t,n):function(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach((function(t){r[t]=g(e[t],n)})),Object.keys(t).forEach((function(a){n.isMergeableObject(t[a])&&e[a]?r[a]=x(e[a],t[a],n):r[a]=g(t[a],n)})),r}(e,t,n):g(t,n)}x.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return x(e,n,t)}),{})};var C=x,S=function(e){var t,n;function r(t,n,r){var a;return(a=e.call(this,t,n,r)||this).name="SafrsHttpError",a}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,b(t,n),r}(m.a),I={total:"total",headers:{Accept:"application/vnd.api+json; charset=utf-8","Content-Type":"application/vnd.api+json; charset=utf-8"},updateMethod:"PATCH",arrayFormat:"brackets",includeRelations:[],errorHandler:function(e){var t=e.body;return(null===t||void 0===t?void 0:t.errors.length)>0?new S(t.errors[0].title,e.status,t.errors[0].code):(console.log("Unsopported Http Error Body",e.body),e)},endpointToTypeStripLastLetters:["Model","s"]},E=function(){function e(e){if(this.lookup=new Map,this.includes=[],"object"===typeof e)for(var t,n=h(Object.prototype.hasOwnProperty.call(e,"included")?[].concat(e.data,e.included):e.data);!(t=n()).done;){var r=t.value,a=this.getKey(r);this.lookup.set(a,r)}}var t=e.prototype;return t.getKey=function(e){return e.type+":"+e.id},t.get=function(e){return this.has(e)?this.lookup.get(this.getKey(e)):e},t.has=function(e){return this.lookup.has(this.getKey(e))},t.unwrapData=function(e,t){var n,r=this,a=Object.assign({id:e.id},e.attributes);if(0===t.length)return a;if(Object.prototype.hasOwnProperty.call(e,"relationships"))for(var o=0,i=Object.keys(e.relationships);o<i.length;o++){var c=i[o];if(t.includes(c)&&(!t||!(c in t))){var s=e.relationships[c].data;if(Array.isArray(s))a[c]=s.map((function(e){var t=r.get(e);return Object.assign({id:t.id},t.attributes)}));else{if(null==s)continue;var l=this.get(s),u=Object.assign({id:l.id},l.attributes);a[(n=s.type,n[0].toLowerCase()+n.slice(1))]=u}}}return a},e}();var k=n(365),T=n.n(k),w=n(41),P=n(111),N=n(640),A=n(646),D=n(665),L=n(664),_=n(656),R=n(684),J=n(670),M=n(681),H=n(99),F=n(671),U=n(663),B=n(674),q=n(657),K=n(685),$=n(672),z=n(658),Q=n(132),V=n(587),W=n(647),G=n(77),X=n.n(G),Y=n(131),Z=function(){var e=null,t=localStorage.getItem("raconf");try{e=JSON.parse(t)}catch(O){console.warn("Failed to parse config ".concat(t)),localStorage.setItem("raconf",JSON.stringify(Y))}var n=e||(JSON.parse(JSON.stringify(Y))||{});n.api_root=(null===n||void 0===n?void 0:n.api_root)?n.api_root:"https://apilogicserver.pythonanywhere.com/";for(var r=n.resources,a=0,o=Object.entries(r||{});a<o.length;a++){var c=Object(i.a)(o[a],2),s=c[0],l=c[1];if(l.columns instanceof Array||l.relationships instanceof Array){l.search=[],n.resources[s].name=s;var u,d=Object(P.a)(l.columns);try{for(d.s();!(u=d.n()).done;){var m,p=u.value,f=Object(P.a)(l.relationships);try{for(f.s();!(m=f.n()).done;){var b,j=m.value,h=Object(P.a)(j.fks||[]);try{for(h.s();!(b=h.n()).done;){var y=b.value;p.name==y&&(p.relationship=j,p.relationship.target_resource=n.resources[p.relationship.target])}}catch(g){h.e(g)}finally{h.f()}}}catch(g){f.e(g)}finally{f.f()}p.search&&l.search.push(p)}}catch(g){d.e(g)}finally{d.f()}}}return n||ee()},ee=function(e){return console.log("Resetting conf",Y),localStorage.setItem("raconf",JSON.stringify(Y)),e&&window.location.reload(),Y},te=(Z(),n(243)),ne=n(577),re=n(668),ae=n(676),oe=n(7),ie={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"75%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function ce(e){var t=e.label,n=e.content,a=r.useState(!1),o=Object(i.a)(a,2),c=o[0],s=o[1];return Object(oe.jsxs)("div",{children:[Object(oe.jsx)(ne.a,{onClick:function(e){s(!0),e.stopPropagation()},children:t}),Object(oe.jsx)(ae.a,{open:c,onClose:function(e){e.stopPropagation(),s(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(oe.jsxs)(re.a,{sx:ie,children:[Object(oe.jsx)(Q.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:t}),Object(oe.jsx)(Q.a,{id:"modal-modal-description",sx:{mt:2},children:n})]})})]})}var se=n(673),le=n(669),ue=(n(366),Z()),de=[Object(oe.jsx)(M.a,{source:"q",label:"Search",alwaysOn:!0})],me=function(e){var t=e.column,r=t.component,a=t.style||{},o=Object(oe.jsx)(N.a,{source:t.name,style:a},t.name);if(!r)return o;try{var i=Object(te.a)((function(){return n.e(0).then(n.bind(null,688))}),{resolveComponent:function(e){return e[r]}});return Object(oe.jsx)(i,{column:t})}catch(c){alert("Custom component error"),console.error("Custom component error",c)}return o},pe=function(e){var t,a,o=e.column,s=e.join,l=Object(H.b)(),u=l.id,d=s.target,m=Object(r.useState)(!1),p=Object(i.a)(m,2),f=p[0],b=p[1],j=Object(c.a)(),h=s.fks[0];Object(r.useEffect)((function(){j.getOne(d,{id:l[h]}).then((function(e){var t=e.data;b(t)}))}),[]);var y=null===(t=ue.resources[s.target])||void 0===t?void 0:t.user_key,O=null===(a=ue.resources[s.target])||void 0===a?void 0:a.user_component,g=u;if(f&&O)g=function(e,t){try{var r=Object(te.a)((function(){return n.e(0).then(n.bind(null,688))}),{resolveComponent:function(t){return t["".concat(e)]}});return Object(oe.jsx)(r,{instance:t})}catch(a){alert("Custom component error"),console.error("Custom component error",a)}return Object(oe.jsx)("span",{})}(O,f);else if(f&&y){o.relationship.target_resource.columns.filter((function(e){return e.name==y}));g=Object(oe.jsx)("span",{children:f[y]||u})}var v=Object(oe.jsx)(ge,{instance:f,resource_name:s.target});return Object(oe.jsx)(ce,{label:g,content:v},o.name)},fe=function(e){return function(t){var n=e.columns,r=e.relationships,a=Object(c.a)(),o=Object(V.a)(),i=function(e,t){var n=t.filter((function(e){return"toone"===e.direction}));return e.map((function(e){if(e.hidden)return null;var t,r=Object(P.a)(n);try{for(r.s();!(t=r.n()).done;){var a,o=t.value,i=Object(P.a)(o.fks);try{for(i.s();!(a=i.n()).done;){var c=a.value;if(e.name==c)return Object(oe.jsx)(pe,{column:e,join:o,label:e.label?e.label:e.name},e.name)}}catch(s){i.e(s)}finally{i.f()}}}catch(s){r.e(s)}finally{r.f()}return Object(oe.jsx)(me,{column:e,label:e.label?e.label:e.name,style:e.header_style},e.name)}))}(n,r),s=[!1!==e.edit?Object(oe.jsx)(A.a,{label:""},e.name):null,!1!==e.delete?Object(oe.jsx)(W.a,{onClick:function(e){e.stopPropagation()},render:function(e){return Object(oe.jsx)(X.a,{style:{fill:"#3f51b5"},onClick:function(n){return be(a,t.resource,e,o)}})}},e.name):null];return Object(oe.jsx)(D.a,Object(w.a)(Object(w.a)({filters:de,perPage:10},t),{},{children:Object(oe.jsxs)(L.a,{rowClick:"show",children:[i,s]})}))}},be=function(e,t,n,r){console.log(n),e.delete(t,n).then((function(){r()})).catch((function(e){return alert("error")}))},je=function(e){var t,n=e.column,r=e.resource;if("toone"==(null===(t=n.relationship)||void 0===t?void 0:t.direction)&&n.relationship.target){var a=ue.resources[r].search_cols||["name"];return a||console.error("no searchable columns configured"),Object(oe.jsx)(se.a,{label:n.name,source:n.name,reference:n.relationship.target,children:Object(oe.jsx)(le.a,{optionText:a[0]})})}return Object(oe.jsx)(M.a,{source:n.name})},he=function(e){var t=e.record;return Object(oe.jsx)("span",{children:t?"".concat(t.type?t.type:null,', ID: "').concat(t.id,'"'):""})},ye=function(e){var t=e.source,n=Object(H.b)();return n?Object(oe.jsx)(Oe,{label:t,value:n[t]}):null},Oe=function(e){var t=e.label,n=e.value;return Object(oe.jsxs)(_.a,{item:!0,xs:3,children:[Object(oe.jsx)(Q.a,{variant:"body2",color:"textSecondary",component:"p",children:t}),Object(oe.jsx)(Q.a,{variant:"body2",component:"p",children:n})]})},ge=function(e){var t=e.instance,n=e.resource_name;if(!t)return null;var r=ue.resources[n],a=(null===r||void 0===r?void 0:r.columns)?null===r||void 0===r?void 0:r.columns:[];return[Object(oe.jsx)(_.a,{container:!0,spacing:3,margin:5,m:40,children:a.map((function(e){return Object(oe.jsx)(Oe,{label:e.name,value:t[e.name]})}))}),Object(oe.jsx)("div",{style:{textAlign:"left",width:"100%"},children:Object(oe.jsx)(ne.a,{component:q.a,to:{pathname:"".concat(n,"/").concat(t.id)},label:"Link",children:Object(oe.jsx)(A.a,{})})})]},ve=function(e){return function(t){var n=e.columns,a=e.relationships;return Object(oe.jsx)($.a,Object(w.a)(Object(w.a)({title:Object(oe.jsx)(he,{})},t),{},{children:Object(oe.jsxs)(z.a,{children:[Object(oe.jsx)(Q.a,{variant:"h5",component:"h5",style:{margin:"30px 0px 30px"},children:"Instance Data"}),Object(oe.jsx)(_.a,{container:!0,spacing:3,margin:5,m:40,children:n.map((function(e){return Object(oe.jsx)(ye,{source:e.name})}))}),Object(oe.jsx)("hr",{style:{margin:"30px 0px 30px"}}),Object(oe.jsx)(Q.a,{variant:"h5",component:"h5",style:{margin:"30px 0px 30px"},children:"Related Data"}),Object(oe.jsx)(J.a,{children:a.map((function(e){return"tomany"===e.direction?function(e,t,n){var a,o=Object(r.useState)(!0),s=Object(i.a)(o,2),l=(s[0],s[1]),u=Object(r.useState)(),d=Object(i.a)(u,2),m=(d[0],d[1]),p=Object(r.useState)(!1),f=Object(i.a)(p,2),b=(f[0],f[1]),j=Object(c.a)();Object(r.useEffect)((function(){j.getOne(e,{id:t}).then((function(e){var t=e.data;b(t.relationships),l(!1)})).catch((function(e){m(e),l(!1)}))}),[]);var h=null===(a=ue.resources[n.target])||void 0===a?void 0:a.columns;return Object(oe.jsx)(R.a,{label:n.name,children:Object(oe.jsx)(K.a,{reference:n.target,target:n.fks[0],addLabel:!1,children:Object(oe.jsxs)(L.a,{rowClick:"show",children:[null===h||void 0===h?void 0:h.map((function(e){return Object(oe.jsx)(W.a,{label:e.name,render:function(t){return Object(oe.jsx)("span",{children:(null===t||void 0===t?void 0:t.attributes)?null===t||void 0===t?void 0:t.attributes[e.name]:""})}},e.name)})),Object(oe.jsx)(A.a,{})]})})})}(t.resource,t.id,e):function(e,t,n){var a=Object(r.useState)(!0),o=Object(i.a)(a,2),s=(o[0],o[1]),l=Object(r.useState)(),u=Object(i.a)(l,2),d=(u[0],u[1]),m=Object(r.useState)(!1),p=Object(i.a)(m,2),f=p[0],b=p[1],j=Object(c.a)();return Object(r.useEffect)((function(){j.getOne(e,{id:t}).then((function(e){var t,r,a=e.data;return console.log("data",a),{rel_resource:null===(t=a[n.target])||void 0===t?void 0:t.data.type,rel_id:null===(r=a[n.target])||void 0===r?void 0:r.data.id}})).then((function(e){var t=e.rel_resource,n=e.rel_id;console.log(t,n),j.getOne(t,{id:n}).then((function(e){var t=e.data;return b(t)})),s(!1)})).catch((function(e){d(e),s(!1)}))}),[]),Object(oe.jsx)(R.a,{label:n.name,children:Object(oe.jsx)(ge,{instance:f,resource_name:n.target})})}(t.resource,t.id,e)}))})]})}))}},xe=function(e){window.addEventListener("storage",(function(){return window.location.reload()}));var t=ue.resources[e.name],n=Object(r.useMemo)((function(){return fe(t)}),[t]),a=Object(r.useMemo)((function(){return e=t,function(t){return Object(oe.jsx)(B.a,Object(w.a)(Object(w.a)({},t),{},{children:Object(oe.jsx)(U.a,{children:e.columns.map((function(t){return Object(oe.jsx)(je,{column:t,resource:e},t.name)}))})}))};var e}),[t]),o=Object(r.useMemo)((function(){return function(e){var t=e.columns;return function(e){return console.log(e),Object(oe.jsx)(F.a,Object(w.a)(Object(w.a)({},e),{},{children:Object(oe.jsx)(U.a,{children:t.map((function(e){return Object(oe.jsx)(je,{column:e},e.name)}))})}))}}(t)}),[t]),i=Object(r.useMemo)((function(){return ve(t)}),[t]);return Object(oe.jsx)(l.a,Object(w.a)(Object(w.a)({},e),{},{list:n,edit:o,create:a,show:i}),e.name)},Ce=n(682),Se=n(580),Ie=n(675),Ee=n(113),ke=n(660),Te=Object(Ee.a)((function(e){return{widget:{border:"1px solid #3f51b5",marginRight:"1em",marginTop:"1em",marginBottom:"1em"},textInput:{width:"80%"}}})),we=function(){var e,t=Te(),n=function(e){try{if(e){var t=JSON.parse(e);v(t.api_root)}p("#ddeedd"),localStorage.setItem("raconf",e),s||window.location.reload()}catch(n){p("#eedddd")}l(e)},a=localStorage.getItem("raconf")||JSON.stringify(ee()),o=Object(r.useState)(a?JSON.stringify(JSON.parse(a),null,4):""),c=Object(i.a)(o,2),s=c[0],l=c[1],u=Object(r.useState)("#ddeedd"),d=Object(i.a)(u,2),m=d[0],p=d[1],f=Object(r.useState)(!0),b=Object(i.a)(f,2),j=b[0],h=b[1],y=Object(r.useState)(null===(e=JSON.parse(a))||void 0===e?void 0:e.api_root),O=Object(i.a)(y,2),g=O[0],v=O[1];return Object(oe.jsxs)("div",{children:[Object(oe.jsxs)("div",{children:[Object(oe.jsx)(Ce.a,{className:t.textInput,variant:"outlined",id:"outlined-helperText",label:"API root URL",size:"small",defaultValue:g}),Object(oe.jsx)("br",{}),Object(oe.jsx)(ne.a,{className:t.widget,onClick:function(){return n("")},color:"primary",children:"Clear"}),Object(oe.jsx)(ne.a,{className:t.widget,onClick:function(){return n(JSON.stringify(ee(),null,4))},color:"primary",children:"Reset"}),Object(oe.jsx)(ne.a,{className:t.widget,onClick:function(){return window.location.reload()},color:"primary",children:"Apply"}),Object(oe.jsx)(ke.a,{control:Object(oe.jsx)(Ie.a,{checked:j,onChange:function(e){h(e.target.checked)}}),label:"Auto Save Config"})]}),Object(oe.jsx)(Se.a,{variant:"outlined",minRows:3,className:t.textInput,style:{backgroundColor:m},value:s,onChange:function(e){return n(e.target.value)}})]})},Pe=n(666),Ne=n(8),Ae=n(110),De=n(354),Le=n(196),_e=n(355),Re=n(197),Je=n.n(Re),Me=function(e){},He=function(e){var t=Object(Ne.f)(Ae.b);return Object(oe.jsxs)(De.a,Object(w.a)(Object(w.a)({},e),{},{children:[t.map((function(e){return Object(oe.jsx)(Le.a,{to:"/".concat(e.name),primaryText:e.options&&e.options.label||e.name,leftIcon:e.icon?Object(oe.jsx)(e.icon,{}):Object(oe.jsx)(Je.a,{}),onClick:Me,sidebarIsOpen:true},e.name)})),Object(oe.jsx)(_e.a,{})]}))},Fe=function(e){return Object(oe.jsx)(Pe.a,Object(w.a)(Object(w.a)({},e),{},{menu:He}))},Ue=Z();console.log(Ue.api_root);var Be=function(e,t,n,r){void 0===t&&(t={}),void 0===n&&(n=p.a.fetchJson),void 0===r&&(r="Content-Range");var a=C(I,t),o=JSON.parse(localStorage.getItem("raconf")||"")||{resources:{}};return{getList:function(t,r){var i,c=r.pagination,s=c.page,l=c.perPage;console.log(s,l);var u={"page[number]":s,"page[size]":l,"page[offset]":(s-1)*l,"page[limit]":l,sort:" "};if(null!==(i=r.filter)&&void 0!==i&&i.q){var m=o.resources[t].search_cols||[];u.filter=JSON.stringify(m.map((function(e){return{name:e,op:"like",val:r.filter.q+"%"}})))}else Object.keys(r.filter||{}).forEach((function(e){u["filter["+e+"]"]=r.filter[e]}));if(r.sort&&r.sort.field){var p="ASC"===r.sort.order?"":"-";u.sort=""+p+r.sort.field}for(var f,b=[],j=h(a.includeRelations);!(f=j()).done;){var y=f.value;if(t===y.resource){u.include=y.includes.join(",");for(var O,g=h(y.includes);!(O=g()).done;){var v=O.value;b.push(v)}break}}var x=e+"/"+t+"?"+Object(d.stringify)(u);return n(x).then((function(e){var t=e.json,n=0;t.meta&&a.total&&(n=t.meta[a.total]),n=n||t.data.length;var r=new E(t);return{data:t.data.map((function(e){return r.unwrapData(e,b)})),total:n}})).catch((function(e){console.log("catch Error",e.body);var t=a.errorHandler;return Promise.reject(t(e))}))},getOne:function(t,r){var a=e+"/"+t+"/"+r.id+"?include=%2Ball&page[limit]=50";return n(a).then((function(e){var t=e.json.data,n=t.id,r=t.attributes,a=t.relationships;return Object.assign(r,a),{data:f({id:n},r)}}))},getMany:function(t,r){var o;t=(o=t)[0].toUpperCase()+o.slice(1);var i="filter[id]="+JSON.stringify(r.ids);return n(e+"/"+t+"?"+i).then((function(e){var t=e.json,n=0;return t.meta&&a.total&&(n=t.meta[a.total]),n=n||t.data.length,{data:t.data.map((function(e){return Object.assign({id:e.id},e.attributes)})),total:n}}))},getManyReference:function(t,a){var o=a.pagination,i=o.page,c=o.perPage,s=a.sort,l=s.field,u=s.order,m={sort:JSON.stringify([l,u]),range:JSON.stringify([(i-1)*c,i*c-1]),filter_:JSON.stringify(f({},a.filter))};m["filter["+a.target+"]"]=a.id;var p=e+"/"+t+"?"+Object(d.stringify)(m);return n(p,{}).then((function(e){var t=e.headers,n=e.json;return t.has(r)||console.debug("The "+r+" header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare "+r+" in the Access-Control-Expose-Headers header?"),{data:n.data,total:100}}))},update:function(t,r){var i=o.resources[t].type,c=a.endpointToTypeStripLastLetters;for(var s in c)if(t.endsWith(c[s])){i=t.slice(0,-1*c[s].length);break}var l={data:{id:r.id,type:i,attributes:r.data}};return n(e+"/"+t+"/"+r.id,{method:a.updateMethod,body:JSON.stringify(l)}).then((function(e){var t=e.json.data;return{data:f({id:t.id},t.attributes)}})).catch((function(e){console.log("catch Error",e.body);var t=a.errorHandler;return Promise.reject(t(e))}))},updateMany:function(t,r){return Promise.all(r.ids.map((function(a){return n(e+"/"+t+"/"+a,{method:"PUT",body:JSON.stringify(r.data)})}))).then((function(e){return{data:e.map((function(e){return e.json.id}))}}))},create:function(t,r){var o=t,i=a.endpointToTypeStripLastLetters;for(var c in i)if(t.endsWith(i[c])){o=t.slice(0,-1*i[c].length);break}var s={data:{type:o,attributes:r.data}};return n(e+"/"+t,{method:"POST",body:JSON.stringify(s)}).then((function(e){var t=e.json.data;return{data:f({id:t.id},t.attributes)}})).catch((function(e){console.log("catch Error",e.body);var t=a.errorHandler;return Promise.reject(t(e))}))},delete:function(t,r){return n(e+"/"+t+"/"+r.id,{method:"DELETE",headers:new Headers({"Content-Type":"text/plain"})}).then((function(e){return{data:e.json}}))},deleteMany:function(t,r){return Promise.all(r.ids.map((function(r){return n(e+"/"+t+"/"+r,{method:"DELETE",headers:new Headers({"Content-Type":"text/plain"})})}))).then((function(e){return{data:e.map((function(e){return e.json.id}))}}))},getResources:function(){return o?Promise.resolve({data:o}):n(e+"/schema",{method:"GET"}).then((function(e){var t=e.json;return localStorage.setItem("raconf",JSON.stringify(t)),{data:t}})).catch((function(){return{data:{}}}))}}}(Ue.api_root),qe=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],o=Object(c.a)();return Object(r.useEffect)((function(){o.getResources().then((function(e){var t=Object.keys(e.data.resources).map((function(e){return{name:e}}));a(t)})).catch((function(e){console.warn(e),a([])}))}),[]),!1===n?Object(oe.jsx)("div",{children:"Loading..."}):Object(oe.jsxs)(s.a,{layout:Fe,children:[Object(oe.jsx)(l.a,{name:"Home",show:we,list:we,options:{label:"Home"},icon:T.a}),n.map((function(e){return Object(oe.jsx)(xe,{name:e.name},e.name)}))]})},Ke=function(){return Object(oe.jsx)(u.a,{dataProvider:Be,children:Object(oe.jsx)(qe,{})})},$e=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,689)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)}))};o.a.render(Object(oe.jsx)(Ke,{}),document.getElementById("root")),$e()}},[[576,2,3]]]);
//# sourceMappingURL=main.fed13356.chunk.js.map