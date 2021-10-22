(this["webpackJsonpreact-apilogicserver"]=this["webpackJsonpreact-apilogicserver"]||[]).push([[1],{146:function(e){e.exports=JSON.parse('{"api_root":"https://apilogicserver.pythonanywhere.com/","resources":{"Category":{"type":"Category","columns":[{"name":"Id","hidden":true},{"name":"CategoryName","label":"Cat Name","component":"SampleColumnField"},{"name":"Description"}],"relationships":[],"label":"null"},"Customer":{"type":"Customer","user_key":"CustomerLabel","columns":[{"name":"Id"},{"name":"CompanyName"},{"name":"ContactName"},{"name":"ContactTitle"},{"name":"Address"},{"name":"City"},{"name":"Region"},{"name":"PostalCode"},{"name":"Country"},{"name":"Phone"},{"name":"Fax"},{"name":"Balance"},{"name":"CreditLimit"},{"name":"OrderCount"},{"name":"UnpaidOrderCount"}],"relationships":[{"name":"CustomerCustomerDemoList","target":"CustomerCustomerDemo","fks":["CustomerTypeId"],"direction":"tomany"},{"name":"OrderList","target":"Order","fks":["CustomerId"],"direction":"tomany"}],"label":null},"CustomerDemographic":{"type":"CustomerDemographic","columns":[{"name":"Id"},{"name":"CustomerDesc"}],"relationships":[],"label":null},"Employee":{"type":"Employee","label":"emps","user_key":"EmployeeLabel","columns":[{"name":"Id"},{"name":"LastName"},{"name":"FirstName"},{"name":"Title"},{"name":"TitleOfCourtesy"},{"name":"BirthDate"},{"name":"HireDate"},{"name":"Address"},{"name":"City"},{"name":"Region"},{"name":"PostalCode"},{"name":"Country"},{"name":"HomePhone"},{"name":"Extension"},{"name":"Photo"},{"name":"Notes"},{"name":"ReportsTo"},{"name":"PhotoPath"},{"name":"IsCommissioned"},{"name":"Salary"}],"relationships":[{"name":"Manager","target":"Employee","fks":["ReportsTo"],"direction":"toone"},{"name":"Manages","target":"Employee","fks":["ReportsTo"],"direction":"tomany"},{"name":"EmployeeAuditList","target":"EmployeeAudit","fks":["EmployeeId"],"direction":"tomany"},{"name":"EmployeeTerritoryList","target":"EmployeeTerritory","fks":["EmployeeId"],"direction":"tomany"},{"name":"OrderList","target":"Order","fks":["EmployeeId"],"direction":"tomany"}]},"Product":{"type":"Product","user_key":"ProductName","columns":[{"name":"Id"},{"name":"ProductName","search":true},{"name":"SupplierId"},{"name":"CategoryId"},{"name":"QuantityPerUnit"},{"name":"UnitPrice"},{"name":"UnitsInStock"},{"name":"UnitsOnOrder"},{"name":"ReorderLevel"},{"name":"Discontinued"},{"name":"UnitsShipped"}],"relationships":[{"name":"OrderDetailList","target":"OrderDetail","fks":["ProductId"],"direction":"tomany"}],"label":null},"Region":{"type":"Region","columns":[{"name":"Id"},{"name":"RegionDescription"}],"relationships":[],"label":null},"Shipper":{"type":"Shipper","columns":[{"name":"Id"},{"name":"CompanyName"},{"name":"Phone"}],"relationships":[],"label":null},"Supplier":{"type":"Supplier","columns":[{"name":"Id"},{"name":"CompanyName"},{"name":"ContactName"},{"name":"ContactTitle"},{"name":"Address"},{"name":"City"},{"name":"Region"},{"name":"PostalCode"},{"name":"Country"},{"name":"Phone"},{"name":"Fax"},{"name":"HomePage"}],"relationships":[],"label":null},"Territory":{"type":"Territory","columns":[{"name":"Id"},{"name":"TerritoryDescription"},{"name":"RegionId"}],"relationships":[{"name":"EmployeeTerritoryList","target":"EmployeeTerritory","fks":["TerritoryId"],"direction":"tomany"}],"label":null},"CustomerCustomerDemo":{"type":"CustomerCustomerDemo","columns":[{"name":"Id"},{"name":"CustomerTypeId"}],"relationships":[{"name":"Customer","target":"Customer","fks":["CustomerTypeId"],"direction":"toone"}],"label":null},"EmployeeAudit":{"type":"EmployeeAudit","columns":[{"name":"Id"},{"name":"Title"},{"name":"Salary"},{"name":"LastName"},{"name":"FirstName"},{"name":"EmployeeId"},{"name":"CreatedOn"}],"relationships":[{"name":"Employee","target":"Employee","fks":["EmployeeId"],"direction":"toone"}],"label":null},"EmployeeTerritory":{"type":"EmployeeTerritory","columns":[{"name":"Id"},{"name":"EmployeeId"},{"name":"TerritoryId"}],"relationships":[{"name":"Employee","target":"Employee","fks":["EmployeeId"],"direction":"toone"},{"name":"Territory","target":"Territory","fks":["TerritoryId"],"direction":"toone"}],"label":null},"Order":{"type":"Order","columns":[{"name":"Id"},{"name":"CustomerId"},{"name":"EmployeeId"},{"name":"OrderDate"},{"name":"RequiredDate"},{"name":"ShippedDate"},{"name":"ShipVia"},{"name":"Freight"},{"name":"ShipName"},{"name":"ShipAddress"},{"name":"ShipCity"},{"name":"ShipRegion"},{"name":"ShipPostalCode"},{"name":"ShipCountry"},{"name":"AmountTotal"}],"relationships":[{"name":"Customer","target":"Customer","fks":["CustomerId"],"direction":"toone"},{"name":"Employee","target":"Employee","fks":["EmployeeId"],"direction":"toone"},{"name":"OrderDetailList","target":"OrderDetail","fks":["OrderId"],"direction":"tomany"}],"label":null},"OrderDetail":{"type":"OrderDetail","columns":[{"name":"Id"},{"name":"OrderId"},{"name":"ProductId"},{"name":"UnitPrice"},{"name":"Quantity"},{"name":"Discount"},{"name":"Amount"},{"name":"ShippedDate"}],"relationships":[{"name":"Order","target":"Order","fks":["OrderId"],"direction":"toone"},{"name":"Product","target":"Product","fks":["ProductId"],"direction":"toone"}],"label":null}}}')},541:function(e,t){},576:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(17),o=n.n(a),i=n(34),c=n(75),s=n(666),l=n(658),u=n(661),d=n(242),m=n(163),p=n(88);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var y=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===O}(e)}(e)};var O="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function g(e,t){return!1!==t.clone&&t.isMergeableObject(e)?x((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function v(e,t,n){return e.concat(t).map((function(e){return g(e,n)}))}function x(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||v,n.isMergeableObject=n.isMergeableObject||y;var r=Array.isArray(t);return r===Array.isArray(e)?r?n.arrayMerge(e,t,n):function(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach((function(t){r[t]=g(e[t],n)})),Object.keys(t).forEach((function(a){n.isMergeableObject(t[a])&&e[a]?r[a]=x(e[a],t[a],n):r[a]=g(t[a],n)})),r}(e,t,n):g(t,n)}x.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return x(e,n,t)}),{})};var C=x,S=function(e){var t,n;function r(t,n,r){var a;return(a=e.call(this,t,n,r)||this).name="SafrsHttpError",a}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,b(t,n),r}(m.a),I={total:"total",headers:{Accept:"application/vnd.api+json; charset=utf-8","Content-Type":"application/vnd.api+json; charset=utf-8"},updateMethod:"PATCH",arrayFormat:"brackets",includeRelations:[],errorHandler:function(e){var t=e.body;return(null===t||void 0===t?void 0:t.errors.length)>0?new S(t.errors[0].title,e.status,t.errors[0].code):(console.log("Unsopported Http Error Body",e.body),e)},endpointToTypeStripLastLetters:["Model","s"]},k=function(){function e(e){if(this.lookup=new Map,this.includes=[],"object"===typeof e)for(var t,n=h(Object.prototype.hasOwnProperty.call(e,"included")?[].concat(e.data,e.included):e.data);!(t=n()).done;){var r=t.value,a=this.getKey(r);this.lookup.set(a,r)}}var t=e.prototype;return t.getKey=function(e){return e.type+":"+e.id},t.get=function(e){return this.has(e)?this.lookup.get(this.getKey(e)):e},t.has=function(e){return this.lookup.has(this.getKey(e))},t.unwrapData=function(e,t){var n,r=this,a=Object.assign({id:e.id},e.attributes);if(0===t.length)return a;if(Object.prototype.hasOwnProperty.call(e,"relationships"))for(var o=0,i=Object.keys(e.relationships);o<i.length;o++){var c=i[o];if(t.includes(c)&&(!t||!(c in t))){var s=e.relationships[c].data;if(Array.isArray(s))a[c]=s.map((function(e){var t=r.get(e);return Object.assign({id:t.id},t.attributes)}));else{if(null==s)continue;var l=this.get(s),u=Object.assign({id:l.id},l.attributes);a[(n=s.type,n[0].toLowerCase()+n.slice(1))]=u}}}return a},e}();var E=n(365),T=n.n(E),P=n(41),w=n(111),N=n(640),A=n(646),D=n(664),_=n(663),L=n(656),R=n(683),J=n(669),M=n(680),H=n(99),F=n(670),U=n(662),B=n(673),q=n(684),K=n(671),$=n(657),z=n(130),Q=n(587),V=n(647),W=n(77),G=n.n(W),X=n(146),Y=function(){var e=null,t=localStorage.getItem("raconf");try{e=JSON.parse(t)}catch(O){console.warn("Failed to parse config ".concat(t)),localStorage.setItem("raconf",JSON.stringify(X))}var n=e||JSON.parse(JSON.stringify(X));n.api_root=n.api_root?n.api_root:"https://apilogicserver.pythonanywhere.com/",n.api_root="https://apilogicserver.pythonanywhere.com/",n.api_root=n.api_root?n.api_root:"https://apilogicserver.pythonanywhere.com/";for(var r=n.resources,a=0,o=Object.entries(r);a<o.length;a++){var c=Object(i.a)(o[a],2),s=c[0],l=c[1];if(l.columns instanceof Array||l.relationships instanceof Array){l.search=[],n.resources[s].name=s;var u,d=Object(w.a)(l.columns);try{for(d.s();!(u=d.n()).done;){var m,p=u.value,f=Object(w.a)(l.relationships);try{for(f.s();!(m=f.n()).done;){var b,j=m.value,h=Object(w.a)(j.fks||[]);try{for(h.s();!(b=h.n()).done;){var y=b.value;p.name==y&&(p.relationship=j,p.relationship.target_resource=n.resources[p.relationship.target])}}catch(g){h.e(g)}finally{h.f()}}}catch(g){f.e(g)}finally{f.f()}p.search&&l.search.push(p)}}catch(g){d.e(g)}finally{d.f()}}}return n}(),Z=n(243),ee=n(667),te=n(577),ne=n(675),re=n(7),ae={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function oe(e){var t=e.label,n=e.content,a=r.useState(!1),o=Object(i.a)(a,2),c=o[0],s=o[1];return Object(re.jsxs)("div",{children:[Object(re.jsx)(te.a,{onClick:function(e){s(!0),e.stopPropagation()},children:t}),Object(re.jsx)(ne.a,{open:c,onClose:function(e){s(!1),e.stopPropagation()},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(re.jsxs)(ee.a,{sx:ae,children:[Object(re.jsx)(z.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:t}),Object(re.jsx)(z.a,{id:"modal-modal-description",sx:{mt:2},children:n})]})})]})}var ie=n(672),ce=n(668),se=(n(366),[Object(re.jsx)(M.a,{source:"q",label:"Search",alwaysOn:!0})]),le=function(e){var t=e.column,r=t.component,a=t.style||{};console.log(a);var o=Object(re.jsx)(N.a,{source:t.name,style:a},t.name);if(!r)return o;try{var i=Object(Z.a)((function(){return n.e(0).then(n.bind(null,687))}),{resolveComponent:function(e){return e["".concat(r)]}});return Object(re.jsx)(i,{column:t})}catch(c){alert("Custom component error"),console.error("Custom component error",c)}return o},ue=function(e){var t,a=e.column,o=e.join,s=Object(H.b)(),l=s.id,u=o.target,d=Object(r.useState)(!1),m=Object(i.a)(d,2),p=m[0],f=m[1],b=Object(c.a)(),j=o.fks[0];Object(r.useEffect)((function(){b.getOne(u,{id:s[j]}).then((function(e){var t=e.data;f(t)}))}),[]);var h=null===(t=Y.resources[o.target])||void 0===t?void 0:t.user_key,y=l;p&&h&&(a.relationship.target_resource.columns.filter((function(e){return e.name==h}))?(console.log(p),y=Object(re.jsx)("span",{children:p[h]||l})):y=function(e,t){try{var r=Object(Z.a)((function(){return n.e(0).then(n.bind(null,687))}),{resolveComponent:function(t){return t["".concat(e)]}});return Object(re.jsx)(r,{instance:t})}catch(a){alert("Custom component error"),console.error("Custom component error",a)}return null}(h,p));var O=Object(re.jsx)(je,{instance:p,resource_name:o.target});return Object(re.jsx)(oe,{label:y,content:O},a.name)},de=function(e){return function(t){var n=e.columns,r=e.relationships,a=Object(c.a)(),o=Object(Q.a)(),i=function(e,t){var n=t.filter((function(e){return"toone"===e.direction}));return e.map((function(e){if(e.hidden)return null;var t,r=Object(w.a)(n);try{for(r.s();!(t=r.n()).done;){var a,o=t.value,i=Object(w.a)(o.fks);try{for(i.s();!(a=i.n()).done;){var c=a.value;if(e.name==c)return Object(re.jsx)(ue,{column:e,join:o,label:e.label?e.label:e.name},e.name)}}catch(s){i.e(s)}finally{i.f()}}}catch(s){r.e(s)}finally{r.f()}return Object(re.jsx)(le,{column:e,label:e.label?e.label:e.name},e.name)}))}(n,r),s=[!1!==e.edit?Object(re.jsx)(A.a,{label:""},e.name):null,!1!==e.delete?Object(re.jsx)(V.a,{onClick:function(e){e.stopPropagation()},render:function(e){return Object(re.jsx)(G.a,{style:{fill:"#3f51b5"},onClick:function(n){return me(a,t.resource,e,o)}})}},e.name):null];return Object(re.jsx)(D.a,Object(P.a)(Object(P.a)({filters:se,perPage:10},t),{},{children:Object(re.jsxs)(_.a,{rowClick:"show",children:[i,s]})}))}},me=function(e,t,n,r){console.log(n),e.delete(t,n).then((function(){r()})).catch((function(e){return alert("error")}))},pe=function(e){var t,n=e.column;e.resource;if(console.log(n),"toone"==(null===(t=n.relationship)||void 0===t?void 0:t.direction)&&n.relationship.target){return Object(re.jsx)(ie.a,{label:n.name,source:n.name,reference:n.relationship.target,children:Object(re.jsx)(ce.a,{optionText:"ProductName"})})}return Object(re.jsx)(M.a,{source:n.name})},fe=function(e){var t=e.record;return Object(re.jsxs)("span",{children:["Post ",t?'ID: "'.concat(t.id,'" ContactName: "').concat(t.ContactName,'"'):""]})},be=function(e){var t=e.source,n=Object(H.b)();return n?Object(re.jsxs)(L.a,{item:!0,xs:3,children:[Object(re.jsx)(z.a,{variant:"body2",color:"textSecondary",component:"p",children:t}),Object(re.jsx)(z.a,{variant:"body2",component:"p",children:n[t]})]}):null},je=function(e){var t=e.instance,n=e.resource_name,r=Y[n],a=(null===r||void 0===r?void 0:r.columns)?null===r||void 0===r?void 0:r.columns:[];return Object(re.jsx)("dl",{children:a.map((function(e){return Object(re.jsxs)("div",{children:[Object(re.jsx)("dt",{children:Object(re.jsx)("b",{children:e.name})}),Object(re.jsx)("dd",{children:t[e.name]})]},e.name)}))})},he=function(e,t){return function(n){return Object(re.jsx)(K.a,Object(P.a)(Object(P.a)({title:Object(re.jsx)(fe,{})},n),{},{children:Object(re.jsxs)($.a,{children:[Object(re.jsx)(z.a,{variant:"h5",component:"h5",style:{margin:"30px 0px 30px"},children:"Instance Data:"}),Object(re.jsx)(L.a,{container:!0,spacing:3,margin:5,m:40,children:e.map((function(e){return Object(re.jsx)(be,{source:e.name})}))}),Object(re.jsx)("hr",{style:{margin:"30px 0px 30px"}}),Object(re.jsx)(J.a,{children:t.map((function(e){return"tomany"===e.direction?function(e,t,n){var a,o=Object(r.useState)(!0),s=Object(i.a)(o,2),l=(s[0],s[1]),u=Object(r.useState)(),d=Object(i.a)(u,2),m=(d[0],d[1]),p=Object(r.useState)(!1),f=Object(i.a)(p,2),b=(f[0],f[1]),j=Object(c.a)();Object(r.useEffect)((function(){j.getOne(e,{id:t}).then((function(e){var t=e.data;b(t.relationships),l(!1)})).catch((function(e){m(e),l(!1)}))}),[]);var h=null===(a=Y[n.target])||void 0===a?void 0:a.columns;return Object(re.jsx)(R.a,{label:n.name,children:Object(re.jsx)(q.a,{reference:n.target,target:n.fks[0],addLabel:!1,children:Object(re.jsxs)(_.a,{rowClick:"show",children:[null===h||void 0===h?void 0:h.map((function(e){return Object(re.jsx)(V.a,{label:e.name,render:function(t){return Object(re.jsx)("span",{children:(null===t||void 0===t?void 0:t.attributes)?null===t||void 0===t?void 0:t.attributes[e.name]:""})}},e.name)})),Object(re.jsx)(A.a,{})]})})})}(n.resource,n.id,e):function(e,t,n){var a=Object(r.useState)(!0),o=Object(i.a)(a,2),s=(o[0],o[1]),l=Object(r.useState)(),u=Object(i.a)(l,2),d=(u[0],u[1]),m=Object(r.useState)(!1),p=Object(i.a)(m,2),f=p[0],b=p[1],j=Object(c.a)();return Object(r.useEffect)((function(){j.getOne(e,{id:t}).then((function(e){var t,r,a=e.data;return console.log("data",a),{rel_resource:null===(t=a[n.target])||void 0===t?void 0:t.data.type,rel_id:null===(r=a[n.target])||void 0===r?void 0:r.data.id}})).then((function(e){var t=e.rel_resource,n=e.rel_id;console.log(t,n),j.getOne(t,{id:n}).then((function(e){var t=e.data;return b(t)})),s(!1)})).catch((function(e){d(e),s(!1)}))}),[]),Object(re.jsx)(R.a,{label:n.name,children:Object(re.jsx)(je,{instance:f,resource_name:n.target})})}(n.resource,n.id,e)}))})]})}))}},ye=function(e){var t=Y.resources[e.name],n=Object(r.useMemo)((function(){return de(t)}),[t]),a=Object(r.useMemo)((function(){return e=t,function(t){return Object(re.jsx)(B.a,Object(P.a)(Object(P.a)({},t),{},{children:Object(re.jsx)(U.a,{children:e.columns.map((function(t){return Object(re.jsx)(pe,{column:t,resource:e},t.name)}))})}))};var e}),[t]),o=Object(r.useMemo)((function(){return function(e){var t=e.columns;return function(e){return console.log(e),Object(re.jsx)(F.a,Object(P.a)(Object(P.a)({},e),{},{children:Object(re.jsx)(U.a,{children:t.map((function(e){return Object(re.jsx)(pe,{column:e},e.name)}))})}))}}(t)}),[t]),i=Object(r.useMemo)((function(){return he(t.columns,t.relationships)}),[t]);return Object(re.jsx)(l.a,Object(P.a)(Object(P.a)({},e),{},{list:n,edit:o,create:a,show:i}),e.name)},Oe=n(681),ge=n(580),ve=n(674),xe=n(131),Ce=n(659),Se=Object(xe.a)((function(e){return{widget:{border:"1px solid #3f51b5",marginRight:"1em",marginTop:"1em",marginBottom:"1em"},textInput:{width:"80%"}}})),Ie=function(){var e=Se(),t=function(e){try{if(e){var t=JSON.parse(e);g(t.api_root)}m("#ddeedd"),localStorage.setItem("raconf",e),c||window.location.reload()}catch(n){m("#eedddd")}s(e)},n=localStorage.getItem("raconf"),a=Object(r.useState)(n?JSON.stringify(JSON.parse(n),null,4):""),o=Object(i.a)(a,2),c=o[0],s=o[1],l=Object(r.useState)("#ddeedd"),u=Object(i.a)(l,2),d=u[0],m=u[1],p=Object(r.useState)(!0),f=Object(i.a)(p,2),b=f[0],j=f[1],h=Object(r.useState)(JSON.parse(n).api_root),y=Object(i.a)(h,2),O=y[0],g=y[1];return Object(re.jsxs)("div",{children:[Object(re.jsxs)("div",{children:[Object(re.jsx)(Oe.a,{className:e.textInput,variant:"outlined",id:"outlined-helperText",label:"API root URL",size:"small",defaultValue:O}),Object(re.jsx)("br",{}),Object(re.jsx)(te.a,{className:e.widget,onClick:function(){return t("")},color:"primary",children:"Clear"}),Object(re.jsx)(te.a,{className:e.widget,onClick:function(){return console.log("Resetting conf",X),localStorage.setItem("raconf",JSON.stringify(X)),void window.location.reload()},color:"primary",children:"Reset"}),Object(re.jsx)(te.a,{className:e.widget,onClick:function(){return window.location.reload()},color:"primary",children:"Apply"}),Object(re.jsx)(Ce.a,{control:Object(re.jsx)(ve.a,{checked:b,onChange:function(e){j(e.target.checked)}}),label:"Auto Save Config"})]}),Object(re.jsx)(ge.a,{variant:"outlined",minRows:3,className:e.textInput,style:{backgroundColor:d},value:c,onChange:function(e){return t(e.target.value)}})]})},ke=n(665),Ee=n(8),Te=n(110),Pe=n(354),we=n(196),Ne=n(355),Ae=n(197),De=n.n(Ae),_e=function(e){console.log("Menu Click",e)},Le=function(e){var t=Object(Ee.f)(Te.b);return Object(re.jsxs)(Pe.a,Object(P.a)(Object(P.a)({},e),{},{children:[t.map((function(e){return Object(re.jsx)(we.a,{to:"/".concat(e.name),primaryText:e.options&&e.options.label||e.name,leftIcon:e.icon?Object(re.jsx)(e.icon,{}):Object(re.jsx)(De.a,{}),onClick:_e,sidebarIsOpen:true},e.name)})),Object(re.jsx)(Ne.a,{})]}))},Re=function(e){return Object(re.jsx)(ke.a,Object(P.a)(Object(P.a)({},e),{},{menu:Le}))},Je=function(e,t,n,r){void 0===t&&(t={}),void 0===n&&(n=p.a.fetchJson),void 0===r&&(r="Content-Range");var a=C(I,t);return{getList:function(t,r){var o,i=r.pagination,c=i.page,s=i.perPage;console.log(c,s);var l={"page[number]":c,"page[size]":s,"page[offset]":(c-1)*s,"page[limit]":s,sort:" "};if(null!==(o=r.filter)&&void 0!==o&&o.q?l.filter=JSON.stringify([{name:"ProductName",op:"like",val:r.filter.q+"%"}]):Object.keys(r.filter||{}).forEach((function(e){l["filter["+e+"]"]=r.filter[e]})),r.sort&&r.sort.field){var u="ASC"===r.sort.order?"":"-";l.sort=""+u+r.sort.field}for(var m,p=[],f=h(a.includeRelations);!(m=f()).done;){var b=m.value;if(t===b.resource){l.include=b.includes.join(",");for(var j,y=h(b.includes);!(j=y()).done;){var O=j.value;p.push(O)}break}}var g=e+"/"+t+"?"+Object(d.stringify)(l);return n(g).then((function(e){var t=e.json,n=0;t.meta&&a.total&&(n=t.meta[a.total]),n=n||t.data.length;var r=new k(t);return{data:t.data.map((function(e){return r.unwrapData(e,p)})),total:n}})).catch((function(e){console.log("catch Error",e.body);var t=a.errorHandler;return Promise.reject(t(e))}))},getOne:function(t,r){var a=e+"/"+t+"/"+r.id+"?include=%2Ball&page[limit]=50";return n(a).then((function(e){var t=e.json.data,n=t.id,r=t.attributes,a=t.relationships;return Object.assign(r,a),{data:f({id:n},r)}}))},getMany:function(t,r){var o;t=(o=t)[0].toUpperCase()+o.slice(1);var i="filter[id]="+JSON.stringify(r.ids);return n(e+"/"+t+"?"+i).then((function(e){var t=e.json,n=0;return t.meta&&a.total&&(n=t.meta[a.total]),n=n||t.data.length,{data:t.data.map((function(e){return Object.assign({id:e.id},e.attributes)})),total:n}}))},getManyReference:function(t,a){var o=a.pagination,i=o.page,c=o.perPage,s=a.sort,l=s.field,u=s.order,m={sort:JSON.stringify([l,u]),range:JSON.stringify([(i-1)*c,i*c-1]),filter_:JSON.stringify(f({},a.filter))};m["filter["+a.target+"]"]=a.id;var p=e+"/"+t+"?"+Object(d.stringify)(m);return n(p,{}).then((function(e){var t=e.headers,n=e.json;return t.has(r)||console.debug("The "+r+" header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare "+r+" in the Access-Control-Expose-Headers header?"),{data:n.data,total:100}}))},update:function(t,r){var o=t,i=a.endpointToTypeStripLastLetters;for(var c in i)if(t.endsWith(i[c])){o=t.slice(0,-1*i[c].length);break}var s={data:{id:r.id,type:o,attributes:r.data}};return n(e+"/"+t+"/"+r.id,{method:a.updateMethod,body:JSON.stringify(s)}).then((function(e){var t=e.json.data;return{data:f({id:t.id},t.attributes)}})).catch((function(e){console.log("catch Error",e.body);var t=a.errorHandler;return Promise.reject(t(e))}))},updateMany:function(t,r){return Promise.all(r.ids.map((function(a){return n(e+"/"+t+"/"+a,{method:"PUT",body:JSON.stringify(r.data)})}))).then((function(e){return{data:e.map((function(e){return e.json.id}))}}))},create:function(t,r){var o=t,i=a.endpointToTypeStripLastLetters;for(var c in i)if(t.endsWith(i[c])){o=t.slice(0,-1*i[c].length);break}var s={data:{type:o,attributes:r.data}};return n(e+"/"+t,{method:"POST",body:JSON.stringify(s)}).then((function(e){var t=e.json.data;return{data:f({id:t.id},t.attributes)}})).catch((function(e){console.log("catch Error",e.body);var t=a.errorHandler;return Promise.reject(t(e))}))},delete:function(t,r){return n(e+"/"+t+"/"+r.id,{method:"DELETE",headers:new Headers({"Content-Type":"text/plain"})}).then((function(e){return{data:e.json}}))},deleteMany:function(t,r){return Promise.all(r.ids.map((function(r){return n(e+"/"+t+"/"+r,{method:"DELETE",headers:new Headers({"Content-Type":"text/plain"})})}))).then((function(e){return{data:e.map((function(e){return e.json.id}))}}))},getResources:function(){var t=localStorage.getItem("raconf");return t&&JSON.parse(t)?Promise.resolve({data:JSON.parse(t)}):n(e+"/schema",{method:"GET"}).then((function(e){var t=e.json;return localStorage.setItem("raconf",JSON.stringify(t)),{data:t}}))}}}(Y.api_root),Me=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],o=Object(c.a)();return Object(r.useEffect)((function(){o.getResources().then((function(e){var t=Object.keys(e.data.resources).map((function(e){return{name:e}}));a(t)})).catch((function(e){console.warn(e),alert("failed to fetch schema, no resources available for api ".concat(Y.api_root)),a([])}))}),[]),!1===n?Object(re.jsx)("div",{children:"Loading..."}):Object(re.jsxs)(s.a,{layout:Re,children:[Object(re.jsx)(l.a,{name:"Home",show:Ie,list:Ie,options:{label:"Home"},icon:T.a}),n.map((function(e){return Object(re.jsx)(ye,{name:e.name},e.name)}))]})},He=function(){return Object(re.jsx)(u.a,{dataProvider:Je,children:Object(re.jsx)(Me,{})})},Fe=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,688)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)}))};o.a.render(Object(re.jsx)(He,{}),document.getElementById("root")),Fe()}},[[576,2,3]]]);
//# sourceMappingURL=main.cb3c2093.chunk.js.map