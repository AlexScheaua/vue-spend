(function(t){function e(e){for(var r,s,c=e[0],i=e[1],l=e[2],f=0,p=[];f<c.length;f++)s=c[f],o[s]&&p.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"0bee":function(t,e,n){"use strict";var r=n("ce75"),o=n.n(r);o.a},"17d0":function(t,e,n){"use strict";var r=n("55ed"),o=n.n(r);o.a},"1a2e":function(t,e,n){},"1ee8":function(t,e,n){"use strict";var r=n("1a2e"),o=n.n(r);o.a},"207b":function(t,e,n){},2625:function(t,e,n){},"31f0":function(t,e,n){},"3dc9":function(t,e,n){"use strict";var r=n("4d60"),o=n.n(r);o.a},"4d60":function(t,e,n){},"55ed":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("14c6"),n("08c1"),n("4842"),n("d9fc");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),c=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach(function(e){Object(s["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var u={name:"App",created:function(){this.getThisMonth()},methods:l({},Object(c["b"])(["setDate"]),{getThisMonth:function(){var t=new Date;this.setDate(t.toISOString().substr(0,7))}})},f=u,p=(n("034f"),n("2877")),d=Object(p["a"])(f,o,a,!1,null,null,null),m=d.exports,b=(n("7f7f"),n("28a5"),{url:"https://vspend.firebaseio.com",collection:"",authUser:function(t){var e=this;return fetch("/auth",{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then(function(t){return t.json()}).then(function(t){return e.collection=t})},getTotalSavings:function(){return fetch("/savings/".concat(this.collection),{method:"PUT",headers:{"Content-type":"application/json"},body:""}).then(function(t){return t.json()}).catch(function(t){return console.log(t,"You are offline...")})},getMonth:function(t,e){return fetch("".concat(this.url,"/").concat(this.collection,"/").concat(t,"/").concat(e,".json")).then(function(t){return t.json()})},addTransaction:function(t){return fetch("".concat(this.url,"/").concat(this.collection,"/").concat(t.date[0],"/").concat(t.date[1],"/").concat(t.date[2],"/.json"),{method:"POST",body:JSON.stringify(t.newItem)}).then(function(t){return t.json()})},editTransaction:function(t,e){return fetch("".concat(this.url,"/").concat(this.collection,"/").concat(t[0],"/").concat(t[1],"/").concat(t[2],"/").concat(t[3],".json"),{method:"PUT",body:JSON.stringify(e)}).then(function(t){return t.json()})},deleteTransaction:function(t){return fetch("".concat(this.url,"/").concat(this.collection,"/").concat(t[0],"/").concat(t[1],"/").concat(t[2],"/").concat(t[3],".json"),{method:"DELETE"}).then(function(t){return t.json()})}});n("fff7");r["default"].use(c["a"]);var g=new c["a"].Store({state:{user:{name:""},monthData:{},date:"",categories:[{text:"Shopping",value:"shopping"},{text:"Fuel",value:"fuel"},{text:"Clothes",value:"clothes"},{text:"Rent",value:"rent"},{text:"Bills",value:"bills"},{text:"Gifts",value:"gifts"},{text:"General",value:"general"},{text:"Travel",value:"travel"},{text:"Owed",value:"owed"},{text:"Sport",value:"sport"},{text:"Going out",value:"goingOut"},{text:"Eating out",value:"eatingOut"},{text:"Holidays",value:"holidays"},{text:"Health",value:"health"}],types:[{text:"Actual expenses",value:"Actual"},{text:"Planned expenses",value:"Planned"},{text:"Income",value:"Income"},{text:"Savings",value:"Savings"}],categoryColor:{Actual:"color: var(--danger)",Planned:"color: var(--warning)",Income:"color: var(--success)",Savings:"color: var(--info)"},userColor:{Andreea:"background: #680084bb",Alex:"background: #0041ffbb",Geo:"background: #0041ffbb",Ionel:"background: #ff00ffbb"},currency:localStorage.vSpendCurrency||"Lei"},mutations:{SET_NEW_TRANSACTION:function(t,e){b.addTransaction(e)},EDIT_TRANSACTION:function(t,e){b.editTransaction(e[0],e[1]).then(t.monthData[e[0][2]][e[0][3]]=e[1])},DELETE_TRANSACTION:function(t,e){b.deleteTransaction(e).then(delete t.monthData[e[2]][e[3]])},GENERATE_MONTH_DATA:function(t,e){var n=e.split("-")[0],r=e.split("-")[1];b.getMonth(n,r).then(function(e){return t.monthData=e})},SET_DATE:function(t,e){t.date=e},SET_CURRENCY:function(t,e){t.currency=e}},actions:{authUser:function(t,e){var n=this;t.commit;return b.authUser(e).then(function(t){return n.state.user.name=e.name,n.state.user.collection=t,t})},setNewTransaction:function(t,e){var n=t.commit;n("SET_NEW_TRANSACTION",e)},editTransaction:function(t,e,n){var r=t.commit;r("EDIT_TRANSACTION",e,n)},deleteTransaction:function(t,e){var n=t.commit;n("DELETE_TRANSACTION",e)},generateMonthData:function(t,e){var n=t.commit;n("GENERATE_MONTH_DATA",e)},setDate:function(t,e){var n=t.commit;n("SET_DATE",e)},setCurrency:function(t,e){var n=t.commit;n("SET_CURRENCY",e)}},getters:{getUserName:function(t){return t.user.name},monthData:function(t){return t.monthData},getUserColor:function(t){return t.userColor},getCategoryColor:function(t){return t.categoryColor},getCategories:function(t){return t.categories},getTypes:function(t){return t.types},getCurrency:function(t){return t.currency}}}),y=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"login-container d-flex flex-column justify-content-center align-items-center",attrs:{fluid:""}},[n("b-alert",{staticClass:"offline-alert",attrs:{variant:"dark",fade:"",dismissible:""},model:{value:t.alert.isAlert,callback:function(e){t.$set(t.alert,"isAlert",e)},expression:"alert.isAlert"}},[t._v("\n    "+t._s(t.alert.errorMessage)+"\n  ")]),n("div",{staticClass:"mb-5 d-flex"},[n("span",{staticClass:"title-v"},[t._v("V")]),n("span",{staticClass:"title-spend"},[t._v("SPEND")])]),n("b-row",{staticClass:"mb-1"},[n("b-col",{attrs:{cols:"12"}},[n("b-form-input",{attrs:{state:t.login,placeholder:"Enter your name"},model:{value:t.credentials.name,callback:function(e){t.$set(t.credentials,"name",e)},expression:"credentials.name"}}),n("b-form-input",{attrs:{type:"password",state:t.login,placeholder:"Enter your code"},model:{value:t.credentials.collection,callback:function(e){t.$set(t.credentials,"collection",e)},expression:"credentials.collection"}})],1)],1),n("b-row",{staticClass:"mt-1"},[n("button",{staticClass:"btn btn-outline-dark",on:{click:t.validateUser}},[t._v("Login")])])],1)},h=[];function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(n,!0).forEach(function(e){Object(s["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var C={name:"Login",computed:j({},Object(c["d"])(["date"])),data:function(){return{credentials:{name:"",collection:""},login:"",alert:{errorMessage:"",isAlert:!1}}},created:function(){localStorage.vSpendUserName&&(this.credentials.name=localStorage.vSpendUserName,this.credentials.collection=localStorage.vSpendCollection,this.validateUser())},methods:j({},Object(c["b"])(["authUser","generateMonthData"]),{validateUser:function(){var t=this;""!==this.credentials.name&&""!==this.credentials.collection?this.authUser(this.credentials).catch(function(e){console.log(e),t.alert.errorMessage="No internet connection...",t.alert.isAlert=!0}).then(function(e){"wrong credentials"===e?(t.alert.errorMessage="Username or Password wrong...",t.alert.isAlert=!0):e&&(t.login=!0,t.generateMonthData(t.date),t.$router.push({name:"app"}),localStorage.setItem("vSpendUserName",t.credentials.name),localStorage.setItem("vSpendCollection",t.credentials.collection))}):this.login=!1}})},w=C,x=(n("ec52"),Object(p["a"])(w,v,h,!1,null,"26ccb9d4",null)),_=x.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"top-header mt-2 mx-3 d-flex justify-content-between align-items-center"},[n("p",{staticClass:"text-dark"},[t._v(t._s(t.getUserName))]),t._m(0),n("button",{directives:[{name:"b-modal",rawName:"v-b-modal.settings-modal",modifiers:{"settings-modal":!0}}],staticClass:"settings-icon"},[n("font-awesome-icon",{attrs:{icon:"cog"}})],1)]),n("AppHeader",{on:{changeComponent:t.changeComponent}}),n(t.currentComponent,{tag:"div",staticClass:"content",attrs:{totalSavings:t.totalSavings}}),n("Settings")],1)},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex"},[n("span",{staticClass:"title-v"},[t._v("V")]),n("span",{staticClass:"title-spend"},[t._v("SPEND")])])}],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-nav",{staticClass:"header",attrs:{tabs:""}},[n("div",{staticClass:"d-flex w-100 justify-content-around"},[n("b-nav-item",{staticClass:"b-item",on:{click:function(e){return t.$emit("changeComponent","Balance")}}},[n("font-awesome-icon",{attrs:{icon:"balance-scale-right"}}),t._v(" Balance")],1),n("b-nav-item",{staticClass:"b-item",on:{click:function(e){return t.$emit("changeComponent","Transactions")}}},[n("font-awesome-icon",{attrs:{icon:"clipboard"}}),t._v(" Transactions")],1),n("b-nav-item",{staticClass:"b-item",on:{click:function(e){return t.$emit("changeComponent","AddTransaction")}}},[n("font-awesome-icon",{attrs:{icon:"notes-medical"}}),t._v(" Add")],1)],1)])},D=[],E={name:"AppHeader"},k=E,A=(n("aefe"),Object(p["a"])(k,T,D,!1,null,"75265f1e",null)),N=A.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex py-2 flex-column align-items-center"},[n("MonthPicker"),t.monthData?t._e():n("div",{staticClass:"w-100"},[n("h2",{staticClass:"text-center text-secondary"},[t._v("No data this month")])]),n("div",{staticClass:"w-100 d-flex justify-content-center flex-column align-items-center"},[t.balance.Income?n("b-progress",{staticClass:"mt-2 w-90",attrs:{max:t.balance.Income.amount,"show-value":""}},[n("b-progress-bar",{attrs:{striped:"",value:t.balance.Actual.amount,variant:"danger"}}),n("b-progress-bar",{attrs:{striped:"",value:t.balance.Savings.amount,variant:"info"}}),n("b-progress-bar",{attrs:{value:t.balance.Income.amount-t.balance.Actual.amount-t.balance.Savings.amount,variant:"success"}})],1):t._e(),t.balance.Savings?n("b-progress",{staticClass:"mt-2 w-90",attrs:{max:t.balance.Income.amount,"show-value":""}},[n("b-progress-bar",{attrs:{value:t.totalSavings,variant:"info"}})],1):t._e()],1),t.balance.Income?n("div",{staticClass:"category"},[n("div",{staticClass:"d-flex justify-content-between"},[n("span",[t._v("Income:")]),n("span",{style:t.getCategoryColor.Income},[t._v(t._s(t.balance.Income.amount)+" "+t._s(t.getCurrency))])])]):t._e(),t.balance.Actual?n("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.categ-clps",modifiers:{"categ-clps":!0}}],staticClass:"category"},[n("div",{staticClass:"d-flex justify-content-between"},[n("span",[t._v("+ Actual:")]),n("span",{style:t.getCategoryColor.Actual},[t._v("-"+t._s(t.balance.Actual.amount)+" "+t._s(t.getCurrency))])]),n("b-collapse",{attrs:{id:"categ-clps"}},t._l(t.balance.Actual,function(e,r){return n("div",{key:r+e,staticClass:"categ-item d-flex justify-content-between",style:"amount"===r?"display: none !important":""},[n("span",[t._v(t._s(r)+":")]),n("span",{style:t.getCategoryColor.Actual},[t._v("-"+t._s(e)+" "+t._s(t.getCurrency))])])}),0)],1):t._e(),t.balance.Savings?n("div",{staticClass:"category"},[n("div",{staticClass:"d-flex justify-content-between"},[n("span",[t._v("Savings:")]),n("span",{style:t.getCategoryColor.Savings},[t._v(t._s(t.balance.Savings.amount)+" "+t._s(t.getCurrency))])])]):t._e(),t.balance.Planned?n("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle.planned-clps",modifiers:{"planned-clps":!0}}],staticClass:"category"},[n("div",{staticClass:"d-flex justify-content-between"},[n("span",[t._v("+ Planned:")]),n("span",{style:t.getCategoryColor.Planned},[t._v(t._s(t.balance.Planned.amount)+" "+t._s(t.getCurrency))])]),n("b-collapse",{attrs:{id:"planned-clps"}},t._l(t.balance.Planned,function(e,r){return n("div",{key:r+e,staticClass:"categ-item d-flex justify-content-between",style:"amount"===r?"display: none !important":""},[n("span",[t._v(t._s(r)+":")]),n("span",{style:t.getCategoryColor.Planned},[t._v(t._s(e)+" "+t._s(t.getCurrency))])])}),0)],1):t._e()],1)},M=[],U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-form-group",{staticClass:"m-0",attrs:{id:"input-group-month","label-for":"input-month"}},[n("b-form-input",{attrs:{id:"input-month",type:"month"},on:{change:function(e){t.setDate(t.transactionDate),t.generateMonthData(t.date)}},model:{value:t.transactionDate,callback:function(e){t.transactionDate=e},expression:"transactionDate"}})],1)},$=[];function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?B(n,!0).forEach(function(e){Object(s["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var L={name:"month-picker",computed:R({},Object(c["d"])(["date"])),mounted:function(){this.transactionDate=this.date},data:function(){return{transactionDate:""}},methods:R({},Object(c["b"])(["setDate","generateMonthData"]))},H=L,q=(n("1ee8"),Object(p["a"])(H,U,$,!1,null,"7640046c",null)),F=q.exports;function G(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?G(n,!0).forEach(function(e){Object(s["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):G(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var Y={name:"Balance",components:{MonthPicker:F},props:["totalSavings"],computed:J({},Object(c["c"])(["monthData","getCategoryColor","getCurrency"]),{balance:function(){return this.generateBalances()}}),methods:{generateBalances:function(){var t={Actual:{amount:0},Planned:{amount:0},Income:{amount:0},Savings:{amount:0}};for(var e in this.monthData)for(var n in this.monthData[e]){var r=this.monthData[e][n];t[r.type]?t[r.type].amount+=parseInt(r.amount):t[r.type]={amount:parseInt(r.amount)},r.category&&!t[r.type][r.category]?t[r.type][r.category]=parseInt(r.amount):r.category&&(t[r.type][r.category]+=parseInt(r.amount))}return t}}},V=Y,W=(n("5f97"),Object(p["a"])(V,I,M,!1,null,"ac7db7d6",null)),z=W.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"content",staticClass:"content d-flex align-items-center flex-column"},[n("div",{staticClass:"w-100 d-flex py-2 justify-content-around align-items-center"},[n("MonthPicker"),n("font-awesome-icon",{directives:[{name:"b-modal",rawName:"v-b-modal.filter-modal",modifiers:{"filter-modal":!0}}],staticClass:"filter-icon",attrs:{icon:"filter"}})],1),n("div",{staticClass:"w-100 d-flex flex-column-reverse"},t._l(t.sortedMonth(),function(e){return n("div",{key:e,staticClass:"day-list d-flex flex-column-reverse"},[t._l(t.monthData[e],function(r,o){return n("TransactionItem",{directives:[{name:"b-modal",rawName:"v-b-modal.edit-modal",modifiers:{"edit-modal":!0}}],key:o,style:t.filterTransactions(r),attrs:{transaction:r,id:o,day:[e,t.date.split("-")[1],t.date.split("-")[0]]},on:{modal:t.setModalData}})}),n("p",{staticClass:"day-categ mt-2 mb-1"},[t._v(t._s(e)+" "+t._s(t.date.split("-")[1])+" "+t._s(t.date.split("-")[0]))])],2)}),0),t.monthData?t._e():n("div",{staticClass:"w-100"},[n("h2",{staticClass:"text-center text-secondary"},[t._v("No data this month")])]),n("EditModal",{attrs:{transaction:this.modalData}}),n("b-modal",{attrs:{id:"filter-modal",title:"Filter"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var r=e.ok;return[n("b-button",{attrs:{variant:"outline-dark"},on:{click:function(t){return r()}}},[t._v("ok")])]}}])},[n("b-form-group",{attrs:{label:"Filter by"}},[n("b-form-radio-group",{staticClass:"my-1 w-100",attrs:{id:"select-type",options:t.filterOptions,buttons:"","button-variant":"outline-dark",name:"radios-btn-outline"},model:{value:t.filterType,callback:function(e){t.filterType=e},expression:"filterType"}}),n("b-form-radio-group",{attrs:{id:"filter-radios",options:t.showFilterOptions(),stacked:"",name:"radios-btn-default"},model:{value:t.filterBy,callback:function(e){t.filterBy=e},expression:"filterBy"}})],1)],1)],1)},Q=[],X=(n("55dd"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item my-05",class:t.transaction.user===t.getUserName?"d-flex flex-row-reverse":"d-flex",on:{click:function(e){return t.$emit("modal",[t.transaction,t.id,t.day])}}},[n("div",{staticClass:"user-color",style:t.iconColorClass(t.transaction.user)}),n("div",{staticClass:"items-text justify-content-between",class:t.iconLocationClass(t.transaction.user)},[n("div",{staticClass:"px-3 d-flex flex-column align-items-center"},[n("p",{staticClass:"amount m-0",style:t.getCategoryColor[t.transaction.type]},[t._v(t._s(t.transaction.amount)+" "+t._s(t.getCurrency))]),n("p",{staticClass:"category m-0"},[t._v(t._s(t.transaction.category||t.transaction.type))])]),n("p",{staticClass:"note m-0 align-self-center"},[t._v(t._s(t.transaction.note))])])])}),Z=[];function tt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function et(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?tt(n,!0).forEach(function(e){Object(s["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tt(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var nt={name:"TransactionItem",props:["transaction","id","day"],computed:et({},Object(c["c"])(["getUserName","getUserColor","getCategoryColor","getCurrency"])),methods:{iconColorClass:function(t){return console.log(this.getUserColor[t]),this.getUserColor[t]},iconLocationClass:function(t){return t===this.getUserName?"d-flex flex-row-reverse":"d-flex"}}},rt=nt,ot=(n("17d0"),Object(p["a"])(rt,X,Z,!1,null,"5827c5b3",null)),at=ot.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{id:"edit-modal",title:"Edit transaction"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var r=e.ok,o=e.cancel;return[n("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){t.saveTransaction(),t.amount&&r()}}},[n("font-awesome-icon",{attrs:{icon:"check"}})],1),n("b-button",{attrs:{variant:"outline-danger"},on:{click:function(e){t.removeTransaction(),o()}}},[n("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)]}}])},[n("b-form-radio-group",{staticClass:"my-1 w-100",attrs:{id:"select-type",options:t.typeOptions,buttons:"","button-variant":"outline-dark",name:"radios-btn-outline"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}}),"Actual"===t.type||"Planned"===t.type?n("b-form-group",{attrs:{id:"select-category",label:"Category:","label-for":"input-4"}},[n("b-form-select",{attrs:{id:"input-4",options:t.getCategories,required:""},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}})],1):t._e(),n("b-form-group",{attrs:{id:"input-group-2",label:"Note:","label-for":"input-2"}},[n("b-form-input",{attrs:{id:"input-2",type:"text",required:""},model:{value:t.note,callback:function(e){t.note=e},expression:"note"}})],1),n("b-form-group",{attrs:{id:"input-group-3",label:"Amount:","label-for":"input-3"}},[n("b-form-input",{attrs:{id:"input-3",type:"number",required:""},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1)],1)},ct=[];function it(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function lt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?it(n,!0).forEach(function(e){Object(s["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):it(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var ut={name:"EditModal",props:["transaction"],data:function(){return{type:"",category:"",note:"",amount:"",user:"",typeOptions:[{text:"Actual",value:"Actual"},{text:"Planned",value:"Planned"},{text:"Income",value:"Income"},{text:"Savings",value:"Savings"}]}},computed:lt({},Object(c["c"])(["getCategories"])),methods:lt({},Object(c["b"])(["editTransaction","deleteTransaction"]),{},Object(c["c"])(["getUserName"]),{saveTransaction:function(){if(this.amount){var t=[this.transaction[2][2],this.transaction[2][1],this.transaction[2][0],this.transaction[1]];"Savings"!==this.type&&"Income"!==this.type||(this.category="");var e={type:this.type,category:this.category,note:this.note,amount:this.amount,user:this.user,editedBy:this.getUserName()};this.editTransaction([t,e])}},removeTransaction:function(){var t=[this.transaction[2][2],this.transaction[2][1],this.transaction[2][0],this.transaction[1]];this.deleteTransaction(t)}}),watch:{transaction:function(){this.type=this.transaction[0].type,this.category=this.transaction[0].category,this.note=this.transaction[0].note,this.amount=this.transaction[0].amount,this.user=this.transaction[0].user}}},ft=ut,pt=(n("3dc9"),Object(p["a"])(ft,st,ct,!1,null,"7613d542",null)),dt=pt.exports;function mt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function bt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?mt(n,!0).forEach(function(e){Object(s["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mt(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var gt={name:"Transactions",components:{TransactionItem:at,EditModal:dt,MonthPicker:F},computed:bt({},Object(c["c"])(["monthData","getCategories","getTypes"]),{},Object(c["d"])(["date"])),data:function(){return{modalData:"",filterType:"",filterBy:"",filterOptions:[{text:"No Filter",value:""},{text:"Type options",value:"type"},{text:"Category options",value:"category"}]}},mounted:function(){this.scrollTopNow()},watch:{monthData:function(){var t=this;setTimeout(function(){t.scrollTopNow()},200)},filterType:function(){this.filterBy=""}},methods:{filterTransactions:function(t){return t.type===this.filterBy||t.category===this.filterBy||""===this.filterBy?"":"display: none !important"},showFilterOptions:function(){return"type"===this.filterType?this.getTypes:"category"===this.filterType?this.getCategories:[]},scrollTopNow:function(t){this.$refs.content.scrollTop=0},setModalData:function(t){this.modalData=t},sortedMonth:function(){return this.monthData?Object.keys(this.monthData).sort():[]}}},yt=gt,vt=(n("9a6f"),n("0bee"),Object(p["a"])(yt,K,Q,!1,null,"7927efbe",null)),ht=vt.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-form",{staticClass:"d-flex py-2 flex-column align-items-center",on:{submit:function(e){return e.preventDefault(),t.clickHandler(e)}}},[n("b-form-radio-group",{staticClass:"my-1 w-100",attrs:{id:"btn-radios-1",options:t.typeOptions,buttons:"","button-variant":"outline-dark",name:"radios-btn-outline"},model:{value:t.selectedType,callback:function(e){t.selectedType=e},expression:"selectedType"}}),"Expense"===t.selectedType?n("b-form-radio-group",{staticClass:"my-1 w-75",attrs:{id:"btn-radios-2",options:t.expenseOptions,buttons:"","button-variant":"outline-dark",name:"radios-btn-outline"},model:{value:t.selectedExpense,callback:function(e){t.selectedExpense=e},expression:"selectedExpense"}}):t._e(),t.selectedExpense||"Income"===t.selectedType||"Savings"===t.selectedType?n("div",["Expense"===t.selectedType?n("b-form-group",{attrs:{id:"input-group-4",label:"Category:","label-for":"input-4"}},[n("b-form-select",{attrs:{id:"input-4",options:t.getCategories,required:""},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}})],1):t._e(),n("b-form-group",{attrs:{id:"input-group-1",label:"Date:","label-for":"input-1"}},[n("b-form-input",{attrs:{id:"input-1",type:"date",required:""},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1),n("b-form-group",{attrs:{id:"input-group-2",label:"Note:","label-for":"input-2"}},[n("b-form-input",{attrs:{id:"input-2",type:"text",required:""},model:{value:t.form.note,callback:function(e){t.$set(t.form,"note",e)},expression:"form.note"}})],1),n("b-form-group",{attrs:{id:"input-group-3",label:"Amount:","label-for":"input-3"}},[n("b-form-input",{attrs:{id:"input-3",type:"number",required:""},model:{value:t.form.amount,callback:function(e){t.$set(t.form,"amount",e)},expression:"form.amount"}})],1),n("button",{staticClass:"btn btn-outline-dark w-100"},[t._v("Add")])],1):t._e(),n("b-modal",{attrs:{id:"transaction-success"}},[t._v("\n    Transaction Added...\n    "),n("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"})])],1)},jt=[],Ct=n("5118");function wt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function xt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?wt(n,!0).forEach(function(e){Object(s["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):wt(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var _t={name:"AddTransaction",created:function(){this.setDefaults()},computed:xt({},Object(c["d"])(["date"]),{},Object(c["c"])(["getCategories"])),data:function(){return{selectedType:"",typeOptions:[{text:"Expense",value:"Expense"},{text:"Income",value:"Income"},{text:"Savings",value:"Savings"}],selectedExpense:"",expenseOptions:[{text:"Actual",value:"Actual"},{text:"Planned",value:"Planned"}],form:{user:this.getUserName()}}},methods:xt({},Object(c["c"])(["getUserName"]),{},Object(c["b"])(["setNewTransaction","generateMonthData"]),{setDefaults:function(){var t=new Date;this.form.date=t.toISOString().substr(0,10),this.form.user=this.getUserName()},clickHandler:function(){var t=this,e={date:this.form.date.split("-"),newItem:{type:this.selectedExpense||this.selectedType,category:this.form.category,amount:this.form.amount,note:this.form.note,user:this.form.user}};this.setNewTransaction(e).then(function(e){t.generateMonthData(t.date)}).then(function(){t.$bvModal.show("transaction-success"),Object(Ct["setTimeout"])(function(){t.$bvModal.hide("transaction-success")},800)}),this.form={},this.setDefaults()}})},Pt=_t,St=Object(p["a"])(Pt,Ot,jt,!1,null,"f39f802e",null),Tt=St.exports,Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{id:"settings-modal",title:"Settings"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var r=e.ok,o=e.cancel;return[n("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){t.saveSettings(),r()}}},[n("font-awesome-icon",{attrs:{icon:"check"}})],1),n("b-button",{attrs:{variant:"outline-danger"},on:{click:function(e){t.logout(),o()}}},[t._v("Logout")])]}}])},[n("b-form-group",{attrs:{label:"Currency"}},[n("b-form-radio-group",{staticClass:"my-1 w-100",attrs:{id:"select-type",options:[{text:"LEI",value:"Lei"},{text:"Euro",value:"€"}],buttons:"","button-variant":"outline-dark",size:"sm",name:"radios-btn-outline"},model:{value:t.currency,callback:function(e){t.currency=e},expression:"currency"}})],1)],1)},Et=[];function kt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function At(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?kt(n,!0).forEach(function(e){Object(s["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):kt(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var Nt={name:"Settings",computed:At({},Object(c["c"])(["getCurrency"])),data:function(){return{currency:""}},methods:At({},Object(c["b"])(["setCurrency"]),{saveSettings:function(){localStorage.setItem("vSpendCurrency","".concat(this.currency)),this.setCurrency(this.currency)},logout:function(){localStorage.setItem("vSpendCollection",""),localStorage.setItem("vSpendUserName",""),location.reload()}}),created:function(){this.currency=this.getCurrency}},It=Nt,Mt=Object(p["a"])(It,Dt,Et,!1,null,"e7cb3028",null),Ut=Mt.exports;function $t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function Bt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$t(n,!0).forEach(function(e){Object(s["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$t(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var Rt={name:"AppContainer",components:{AppHeader:N,Balance:z,Transactions:ht,AddTransaction:Tt,Settings:Ut},computed:Bt({},Object(c["c"])(["getUserName"])),data:function(){return{currentComponent:"Balance",totalSavings:0}},created:function(){var t=this;this.getUserName||this.$router.push({name:"login"}),b.collection&&b.getTotalSavings().then(function(e){return t.totalSavings=e})},methods:{changeComponent:function(t){this.currentComponent=t}}},Lt=Rt,Ht=(n("997c"),Object(p["a"])(Lt,P,S,!1,null,"28f13e55",null)),qt=Ht.exports;r["default"].use(y["a"]);var Ft=new y["a"]({mode:"history",base:"/",routes:[{path:"/login",name:"login",component:_},{path:"/app",name:"app",component:qt},{path:"*",redirect:"/login"}]}),Gt=n("ecee"),Jt=n("c074"),Yt=n("ad3d"),Vt=n("5f5b"),Wt=(n("f9e3"),n("2dd8"),n("9483"));Object(Wt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["default"].use(Vt["a"]),Gt["c"].add(Jt["a"],Jt["c"],Jt["f"],Jt["g"],Jt["b"],Jt["e"],Jt["d"]),r["default"].component("font-awesome-icon",Yt["a"]),r["default"].config.productionTip=!1,new r["default"]({store:g,router:Ft,render:function(t){return t(m)}}).$mount("#app")},"5f97":function(t,e,n){"use strict";var r=n("b5fa"),o=n.n(r);o.a},"64a9":function(t,e,n){},7232:function(t,e,n){},"997c":function(t,e,n){"use strict";var r=n("2625"),o=n.n(r);o.a},"9a6f":function(t,e,n){"use strict";var r=n("7232"),o=n.n(r);o.a},aefe:function(t,e,n){"use strict";var r=n("31f0"),o=n.n(r);o.a},b5fa:function(t,e,n){},ce75:function(t,e,n){},ec52:function(t,e,n){"use strict";var r=n("207b"),o=n.n(r);o.a},fff7:function(t){t.exports={}}});
//# sourceMappingURL=app.4be6d096.js.map