(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{125:function(e,t,c){},279:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),r=c(27),s=c.n(r),i=(c(125),c(20)),j=c(11),l=c(281),d=c(282),o=c(283),b=c(284),u=c(285),h=c(1);function x(){var e=Object(j.f)();return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(l.a,{style:{width:"100%"},children:[Object(h.jsx)("h2",{children:"\u0412\u0445\u043e\u0434"}),Object(h.jsxs)(d.a,{children:[Object(h.jsx)(o.a,{for:"exampleEmail",children:"\u041b\u043e\u0433\u0438\u043d"}),Object(h.jsx)(b.a,{type:"numbers",name:"login",id:"exampleEmail",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d"})]}),Object(h.jsxs)(d.a,{style:{marginTop:"2em"},children:[Object(h.jsx)(o.a,{for:"examplePassword",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(h.jsx)(b.a,{type:"password",name:"password",id:"examplePassword",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"})]}),Object(h.jsx)(u.a,{style:{marginTop:"10%",width:"100%"},onClick:function(){return e.push("/")},children:"\u0412\u043e\u0439\u0442\u0438"})]})})}var O=c(10),p=c.n(O),f=c(15),m=c(9),g=c(19),v=c.n(g),y=c(286);function w(){var e=new URLSearchParams(window.location.search);e=e.get("id");var t=Object(j.f)(),c=Object(a.useState)(""),n=Object(m.a)(c,2),r=n[0],s=n[1],i=Object(a.useState)(0),x=Object(m.a)(i,2),O=x[0],g=x[1],w=Object(a.useState)(!1),k=Object(m.a)(w,2),C=k[0],S=k[1];function N(e){var t=parseInt(e);return isFinite(t)&&t>0?(S(!0),!0):(S(!1),!1)}var T=function(){var t=Object(f.a)(p.a.mark((function t(){var c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://6099651699011f0017140ca7.mockapi.io/students/"+e);case 2:return c=t.sent,t.abrupt("return",c.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){var e=function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:N((t=e.sent).id)&&(s(t.stName),g(t.id));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();0===r.length&&e()}));var A=Object(a.useState)(""),E=Object(m.a)(A,2),F=E[0],I=E[1],B=Object(a.useState)(""),P=Object(m.a)(B,2),D=P[0],R=P[1],W=Object(a.useState)(!1),L=Object(m.a)(W,2),J=L[0],M=L[1],U=Object(a.useState)(0),_=Object(m.a)(U,2),q=_[0],z=_[1];return Object(a.useEffect)((function(){0===F.length?M(!1):M(!0),D!==F&&z(2),0===D.length?z(1):z(D!==F?2:0)}),[F,D,J,M]),Object(h.jsx)("div",{className:"container",children:C?Object(h.jsxs)(l.a,{style:{width:"100%"},onSubmit:function(e){e.preventDefault(),0!==F.length?0!==D.length?F===D?console.log(O,F,D):alert("\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f"):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c")},children:[Object(h.jsx)("h2",{children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(h.jsxs)(o.a,{children:["\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439, ",r]}),Object(h.jsx)("br",{}),Object(h.jsxs)(o.a,{children:["\u0412\u0430\u0448 \u0431\u0443\u0434\u0443\u0449\u0438\u0439 \u043b\u043e\u0433\u0438\u043d - ",e]}),Object(h.jsxs)(d.a,{style:{marginTop:"2em"},children:[Object(h.jsx)(o.a,{for:"pwEnter",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(h.jsx)(b.a,{invalid:!J,type:"password",name:"password",id:"pwEnter",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){I(e.target.value)}}),Object(h.jsx)(y.a,{children:"\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u043e\u0439"})]}),Object(h.jsxs)(d.a,{style:{marginTop:"2em"},children:[Object(h.jsx)(o.a,{for:"pwConfirm",children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(h.jsx)(b.a,{invalid:q>0,type:"password",name:"password",id:"pwConfirm",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){R(e.target.value)}}),1===q&&Object(h.jsx)(y.a,{children:"\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u043e\u0439"}),2===q&&Object(h.jsx)(y.a,{children:"\u041f\u0430\u0440\u043e\u043b\u0438 \u043e\u0442\u043b\u0438\u0447\u0430\u044e\u0442\u0441\u044f"})]}),Object(h.jsx)(u.a,{style:{marginTop:"10%",width:"100%"},type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(h.jsx)(u.a,{style:{marginTop:"10%",width:"100%"},onClick:function(){return t.push("/login")},children:"\u041d\u0430\u0437\u0430\u0434"})]}):Object(h.jsxs)(l.a,{children:[Object(h.jsx)("h1",{style:{textAlign:"center"},children:"\u041e\u0448\u0438\u0431\u043b\u0438\u0441\u044c \u0441\u0441\u044b\u043b\u043a\u043e\u0439?"}),Object(h.jsx)(u.a,{style:{marginTop:"10%",width:"100%"},onClick:function(){return t.push("/login")},children:"\u041d\u0430\u0437\u0430\u0434"})]})})}var k=c(289),C=c(290),S=c(297),N=c(298),T=c(299),A=c(288),E=c(287),F=c(291),I=c.p+"static/media/addSt.7ac91716.svg",B=c.p+"static/media/edit.cbb14456.svg",P=c.p+"static/media/exit.f6ba0030.svg",D=c.p+"static/media/give_task.cee06c92.svg",R=c(4),W=c.n(R),L=c(292),J=c(293),M=c(39);function U(e){var t=e.student,c=Object(a.useState)([]),n=Object(m.a)(c,2),r=n[0],s=n[1],i=Object(a.useState)([]),j=Object(m.a)(i,2),l=j[0],d=j[1],o=Object(a.useState)(0),b=Object(m.a)(o,2),u=b[0],x=b[1],O=Object(a.useState)(0),g=Object(m.a)(O,2),y=g[0],w=g[1],S=function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://6099651699011f0017140ca7.mockapi.io/theories/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://6099651699011f0017140ca7.mockapi.io/stats/"+(y+1));case 2:return t=e.sent,e.abrupt("return",t.data.stat);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){(w(parseInt(t.id)),y!==parseInt(t.id))&&function(){var e=Object(f.a)(p.a.mark((function e(){var t,c,a,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:return t=e.sent,e.next=5,S();case 5:for(c=e.sent,d(c),a={id:"0",Total:[0,0,0],Correct:[0,0,0],TotalAttempts:0},n=0;n<t.length;n++)for(a.TotalAttempts+=t[n].TotalAttempts,r=0;r<3;r++)a.Total[r]+=t[n].Total[r],a.Correct[r]+=t[n].Correct[r];t.unshift(a),s(t);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t]);var T=function(e){var t=e.datum;e.myLabel;if(void 0===t)return Object(h.jsx)(h.Fragment,{});var c=["\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e","\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e"],a=["rgba(75, 192, 192, 0.5)","rgba(255, 99, 132, 0.5)"],n={maintainAspectRatio:!1},r={labels:c,datasets:[{data:[t.Correct.reduce((function(e,t){return e+t}),0),t.Total.reduce((function(e,t){return e+t}),0)-t.Correct.reduce((function(e,t){return e+t}),0)],backgroundColor:a}]},s={labels:c,label:"\u041b\u0435\u0433\u043a\u0438\u0439",datasets:[{data:[t.Correct[0],t.Total[0]-t.Correct[0]],backgroundColor:a}]},i={labels:c,datasets:[{data:[t.Correct[1],t.Total[1]-t.Correct[1]],backgroundColor:a}]},j={labels:c,datasets:[{data:[t.Correct[2],t.Total[2]-t.Correct[2]],backgroundColor:a}]};return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{style:{maxWidth:"300px",display:"inline-block"},children:Object(h.jsxs)(E.a,{children:[Object(h.jsx)(A.a,{style:{textAlign:"center"},children:"\u0421\u0443\u043c\u043c\u0430"}),Object(h.jsx)(A.a,{children:Object(h.jsx)(M.a,{data:r,width:200,height:200,options:n})})]})}),Object(h.jsx)("div",{style:{maxWidth:"300px",display:"inline-block"},children:Object(h.jsxs)(E.a,{children:[Object(h.jsx)(A.a,{style:{textAlign:"center"},children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439"}),Object(h.jsx)(A.a,{children:Object(h.jsx)(M.a,{data:s,width:200,height:200,options:n})})]})}),Object(h.jsx)("div",{style:{maxWidth:"300px",display:"inline-block"},children:Object(h.jsxs)(E.a,{children:[Object(h.jsx)(A.a,{style:{textAlign:"center"},children:"\u041f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0439"}),Object(h.jsx)(A.a,{children:Object(h.jsx)(M.a,{data:i,width:200,height:200,options:n})})]})}),Object(h.jsx)("div",{style:{maxWidth:"300px",display:"inline-block"},children:Object(h.jsxs)(E.a,{children:[Object(h.jsx)(A.a,{style:{textAlign:"center"},children:"\u0412\u044b\u0441\u043e\u043a\u0438\u0439"}),Object(h.jsx)(A.a,{children:Object(h.jsx)(M.a,{data:j,width:200,height:200,options:n})})]})}),Object(h.jsxs)("div",{style:{paddingTop:"40px"},children:["\u0421\u0443\u043c\u043c\u0430 \u043f\u043e \u0432\u0441\u0435\u043c \u0443\u0440\u043e\u0432\u043d\u044f\u043c (\u0432\u0441\u0435\u0433\u043e / \u043f\u0440\u0430\u0432. / \u043d\u0435\u043f\u0440\u0430\u0432.): ",r.datasets[0].data[0]+r.datasets[0].data[1]," / ",r.datasets[0].data[0]," / ",r.datasets[0].data[1],Object(h.jsx)("br",{}),"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c: ",s.datasets[0].data[0]+s.datasets[0].data[1]," / ",s.datasets[0].data[0]," / ",s.datasets[0].data[1],Object(h.jsx)("br",{}),"\u041f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c: ",i.datasets[0].data[0]+i.datasets[0].data[1]," / ",i.datasets[0].data[0]," / ",i.datasets[0].data[1],Object(h.jsx)("br",{}),"\u0412\u044b\u0441\u043e\u043a\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c: ",j.datasets[0].data[0]+j.datasets[0].data[1]," / ",j.datasets[0].data[0]," / ",j.datasets[0].data[1],Object(h.jsx)("br",{}),Object(h.jsxs)("b",{children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0435\u0443\u0434\u0430\u0447\u043d\u044b\u0445 \u043f\u043e\u043f\u044b\u0442\u043e\u043a: ",t.TotalAttempts]})]})]})},I=function(){return Object(h.jsx)(h.Fragment,{children:l.map((function(e){return Object(h.jsx)(k.a,{className:u===e.id?"chosenSidebar":"",style:{maxWidth:"300px"},children:Object(h.jsx)(C.a,{onClick:function(){return x(e.id)},children:e.title})},e.id)}))})};return Object(h.jsx)("div",{children:Object(h.jsxs)(A.a,{children:[Object(h.jsx)(E.a,{className:"sidebar",children:Object(h.jsxs)(F.a,{vertical:!0,children:[Object(h.jsx)(k.a,{className:0===u&&"chosenSidebar",children:Object(h.jsx)(C.a,{onClick:function(){return x(0)},children:"\u041e\u0431\u0449\u0435\u0435"})}),Object(h.jsx)(I,{})]})}),Object(h.jsx)(E.a,{children:Object(h.jsx)(T,{datum:r[u]})})]})})}function _(e){var t=e.student,c=Object(a.useState)(1),n=Object(m.a)(c,2),r=n[0],s=n[1],i=function(e){r!==e&&s(e)};return Object(h.jsxs)(E.a,{children:[Object(h.jsxs)(F.a,{tabs:!0,style:{marginBottom:"25px",flexDirection:"column"},children:[Object(h.jsx)(k.a,{style:{width:"100%",textAlign:"center"},children:Object(h.jsx)(C.a,{className:W()({active:1===r}),style:1===r?{color:"#fff",backgroundColor:"#343a40"}:{},onClick:function(){i(1)},children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"})}),Object(h.jsx)(k.a,{style:{width:"100%",textAlign:"center"},children:Object(h.jsx)(C.a,{className:W()({active:2===r}),style:2===r?{color:"#fff",backgroundColor:"#343a40"}:{},onClick:function(){i(2)},children:"\u0417\u0430\u0434\u0430\u043d\u0438\u044f"})})]}),Object(h.jsxs)(L.a,{activeTab:r,children:[Object(h.jsx)(J.a,{tabId:1,children:Object(h.jsx)(U,{student:t})}),Object(h.jsx)(J.a,{tabId:2,children:t.stName})]})]})}var q=c(300),z=c(294),G=c(295),H=c(296);function K(e){var t=e.isOpen,c=e.toggle,n=Object(a.useState)(""),r=Object(m.a)(n,2),s=r[0],i=r[1],j=Object(a.useState)(""),x=Object(m.a)(j,2),O=x[0],p=x[1];return Object(h.jsx)(q.a,{isOpen:t,toggle:c,children:Object(h.jsxs)(l.a,{onSubmit:function(e){e.preventDefault(),""!==s?function(){if(""===s)return;v.a.post("https://6099651699011f0017140ca7.mockapi.io/students",{stName:s}).then((function(e){console.log(e.data.id),p("".concat(window.location.origin+"/register?id="+e.data.id))})).catch((function(e){console.log(e)}))}():alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f")},children:[Object(h.jsx)(z.a,{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430"}),Object(h.jsx)(G.a,{children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(o.a,{for:"fullname",children:"\u0418\u043c\u044f \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430"}),Object(h.jsx)(b.a,{type:"textarea",id:"fullname",style:{height:"80px"},onChange:function(e){return i(e.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424\u0418\u041e \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430"}),Object(h.jsx)("br",{}),0!==O.length&&Object(h.jsxs)(o.a,{onClick:function(){navigator.clipboard.writeText(O)},children:["\u0421\u0441\u044b\u043b\u043a\u0430-\u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 (\u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0434\u043b\u044f \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f): ",O]})]})}),Object(h.jsxs)(H.a,{children:[Object(h.jsx)(u.a,{onClick:c,className:"redBtn",style:{float:"left"},children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(h.jsx)(u.a,{type:"submit",style:{float:"right"},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430"})]})]})})}function Q(){var e=Object(a.useState)(-1),t=Object(m.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),s=Object(m.a)(r,2),i=s[0],j=s[1],l=Object(a.useState)({id:"0",stName:""}),d=Object(m.a)(l,2),o=d[0],b=d[1],u=Object(a.useState)(!1),x=Object(m.a)(u,2),O=x[0],g=x[1],y=function(){return g(!O)};Object(a.useEffect)((function(){(function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var w=function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://6099651699011f0017140ca7.mockapi.io/students/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){return Object(h.jsx)(h.Fragment,{children:i.map((function(e){return Object(h.jsx)(k.a,{className:c===e.id&&"chosenSidebar",children:Object(h.jsx)(C.a,{onClick:function(){n(e.id),b(i[e.id])},children:e.stName})},e.id)}))})};return Object(h.jsxs)("div",{children:[Object(h.jsxs)(S.a,{color:"dark",dark:!0,children:[Object(h.jsx)(N.a,{href:"/",children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"}),Object(h.jsxs)("div",{className:"iconRow",children:[Object(h.jsx)("img",{src:D,alt:"\u0412\u044b\u0434\u0430\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u0438\u044f",id:"giveic"}),Object(h.jsx)("img",{src:B,alt:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0431\u0430\u0437\u0443 \u0437\u0430\u0434\u0430\u043d\u0438\u0439",id:"editic"}),Object(h.jsx)("img",{src:I,alt:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430",id:"addst",onClick:y}),Object(h.jsx)("img",{src:P,alt:"\u0412\u044b\u0439\u0442\u0438",id:"exitic"}),Object(h.jsx)(T.a,{placement:"bottom",target:"addst",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430"}),Object(h.jsx)(T.a,{placement:"bottom",target:"editic",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0431\u0430\u0437\u0443 \u0437\u0430\u0434\u0430\u043d\u0438\u0439"}),Object(h.jsx)(T.a,{placement:"bottom",target:"giveic",children:"\u0412\u044b\u0434\u0430\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u0438\u044f"}),Object(h.jsx)(T.a,{placement:"bottom",target:"exitic",children:"\u0412\u044b\u0439\u0442\u0438"})]})]}),Object(h.jsxs)(A.a,{style:{marginRight:"0"},children:[Object(h.jsx)(E.a,{className:"sidebar",children:Object(h.jsxs)(F.a,{vertical:!0,children:[Object(h.jsx)(k.a,{children:Object(h.jsx)(C.a,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432"})}),Object(h.jsx)(k.a,{children:Object(h.jsx)("div",{className:"dropdown-divider"})}),Object(h.jsx)(R,{})]})}),-1!==c?Object(h.jsx)(_,{student:o}):Object(h.jsx)(E.a,{className:"notChosenPlaceholder",children:Object(h.jsx)("p",{children:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0441\u043b\u0435\u0432\u0430 \u0434\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u0431\u043e\u0442\u044b"})})]}),Object(h.jsx)(K,{isOpen:O,toggle:y})]})}function V(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)(S.a,{color:"dark",dark:!0,children:[Object(h.jsx)(N.a,{href:"/",children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"}),Object(h.jsxs)("div",{className:"iconRow",children:[Object(h.jsx)(i.b,{id:"tasktxt",to:"/student",style:{color:"white",paddingTop:"2px"},children:"\u0417\u0430\u0434\u0430\u043d\u0438\u044f"}),Object(h.jsx)(T.a,{placement:"bottom",target:"tasktxt",children:"\u0420\u0435\u0448\u0430\u0439\u0442\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u044f, \u0432\u044b\u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0435\u043c"}),Object(h.jsx)("img",{src:P,alt:"\u0412\u044b\u0439\u0442\u0438",id:"exitic"}),Object(h.jsx)(T.a,{placement:"bottom",target:"exitic",children:"\u0412\u044b\u0439\u0442\u0438"})]})]}),Object(h.jsx)(U,{student:{id:3}})]})}var X=c.p+"static/media/plus.11fdb7a9.svg";function Y(e){var t=e.theory;void 0===t&&(t={title:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u043c\u044b",id:"0",text:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430"});var c=Object(a.useState)(""),n=Object(m.a)(c,2),r=n[0],s=n[1],i=Object(a.useState)(""),j=Object(m.a)(i,2),x=j[0],O=j[1];return Object(h.jsx)(E.a,{children:Object(h.jsxs)(l.a,{onSubmit:function(e){e.preventDefault(),console.log(t.id,r,x),r||alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u043e\u0440\u0438\u0438!"),x||alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0442\u0435\u043e\u0440\u0438\u0438!")},style:{marginTop:"10px"},children:[Object(h.jsxs)(d.a,{children:[Object(h.jsx)(o.a,{for:"title",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u043c\u044b"}),Object(h.jsx)(b.a,{type:"textarea",placeholder:t.title,onChange:function(e){return s(e.target.value)}})]}),Object(h.jsxs)(d.a,{children:[Object(h.jsx)(o.a,{for:"title",children:"\u0422\u0435\u043a\u0441\u0442 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430"}),Object(h.jsx)(b.a,{type:"textarea",placeholder:t.text,onChange:function(e){return O(e.target.value)},style:{height:"500px"}})]}),Object(h.jsx)("br",{}),"0"!==t.id&&Object(h.jsx)(u.a,{type:"submit",className:"redBtn",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u0435\u043e\u0440\u0438\u044e"}),Object(h.jsx)(u.a,{type:"submit",style:{float:"right"},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0435\u043e\u0440\u0438\u044e"})]})})}function Z(e){var t=e.task;void 0===t&&(t={id:"0",text:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u043d\u0438\u044f",answer:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u0442\u0432\u0435\u0442",isOpen:!1,difficulty:2});var c=Object(a.useState)(""),n=Object(m.a)(c,2),r=n[0],s=n[1],i=Object(a.useState)(t.isOpen),j=Object(m.a)(i,2),x=j[0],O=j[1],p=Object(a.useState)(["\u0411\u0430\u0437\u043e\u0432\u044b\u0439","\u041f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0439","\u0412\u044b\u0441\u043e\u043a\u0438\u0439"][t.difficulty]),f=Object(m.a)(p,2),g=f[0],v=f[1],y=Object(a.useState)(""),w=Object(m.a)(y,2),k=w[0],C=w[1];return Object(a.useEffect)((function(){}),[t]),Object(h.jsx)(E.a,{children:Object(h.jsxs)(l.a,{onSubmit:function(e){e.preventDefault(),console.log(t.id,r,x,g,k),r||alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u043d\u0438\u044f!"),k||x||alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u0442\u0432\u0435\u0442 \u043d\u0430 \u0437\u0430\u0434\u0430\u043d\u0438\u0435!"),x&&k&&C("")},style:{marginTop:"10px"},children:[Object(h.jsxs)(d.a,{children:[Object(h.jsx)(o.a,{for:"diff",children:"\u0421\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u0438\u044f"}),Object(h.jsxs)(b.a,{type:"select",id:"diff",onChange:function(e){return v(e.target.value)},children:[Object(h.jsx)("option",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439"}),Object(h.jsx)("option",{children:"\u041f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0439"}),Object(h.jsx)("option",{children:"\u0412\u044b\u0441\u043e\u043a\u0438\u0439"})]})]}),Object(h.jsxs)(d.a,{children:[Object(h.jsx)(o.a,{for:"text",children:"\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u043d\u0438\u044f"}),Object(h.jsx)(b.a,{type:"textarea",placeholder:t.text,id:"text",style:{height:"250px"},onChange:function(e){return s(e.target.value)}})]}),Object(h.jsx)(d.a,{check:!0,inline:!0,style:{marginBottom:"25px"},children:Object(h.jsxs)(o.a,{check:!0,children:[Object(h.jsx)(b.a,{type:"checkbox",value:x,onChange:function(e){return O(e.currentTarget.checked)}}),"\u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0439 \u0432\u043e\u043f\u0440\u043e\u0441 (\u043e\u0442\u0432\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044e)"]})}),!x&&Object(h.jsxs)(d.a,{children:[Object(h.jsx)(o.a,{for:"answ",children:"\u041e\u0442\u0432\u0435\u0442 \u043d\u0430 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"}),Object(h.jsx)(b.a,{type:"textarea",placeholder:t.answer,id:"answ",style:{height:"250px"},onChange:function(e){return C(e.target.value)}})]}),Object(h.jsx)("br",{}),"0"!==t.id&&Object(h.jsx)(u.a,{type:"submit",className:"redBtn",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u0438\u0435"}),Object(h.jsx)(u.a,{type:"submit",style:{float:"right"},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u0438\u0435"})]})})}function $(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),s=Object(m.a)(r,2),i=s[0],j=s[1],l=Object(a.useState)(-1),d=Object(m.a)(l,2),o=d[0],b=d[1],u=Object(a.useState)(-1),x=Object(m.a)(u,2),O=x[0],g=x[1],y=Object(a.useState)(1),w=Object(m.a)(y,2),S=w[0],N=w[1],I=function(e){b(-1),g(-1),S!==e&&N(e)};Object(a.useEffect)((function(){(function(){var e=Object(f.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:return t=e.sent,e.next=5,P();case 5:c=e.sent,n(c),j(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var B=function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://6099651699011f0017140ca7.mockapi.io/theories/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://6099651699011f0017140ca7.mockapi.io/tasks/");case 2:return(t=e.sent).data.forEach((function(e){e.id++})),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){return Object(h.jsx)(h.Fragment,{children:c.map((function(e){return Object(h.jsxs)(k.a,{className:o===e.id?"chosenSidebar":"",children:[Object(h.jsx)(C.a,{onClick:function(){return b(e.id)},id:"tooltip"+e.id,children:e.text.length>50?"".concat(e.text.substring(0,50),"..."):e.text}),Object(h.jsx)(T.a,{placement:"bottom",target:"tooltip"+e.id,children:e.text})]},e.id)}))})},R=function(){return Object(h.jsx)(h.Fragment,{children:i.map((function(e){return Object(h.jsx)(k.a,{className:O===e.id?"chosenSidebar":"",children:Object(h.jsx)(C.a,{onClick:function(){return g(e.id)},children:e.title})},e.id)}))})};return Object(h.jsxs)("div",{children:[Object(h.jsxs)(F.a,{tabs:!0,style:{marginBottom:"25px",flexDirection:"column"},children:[Object(h.jsx)(k.a,{style:{width:"100%",textAlign:"center"},children:Object(h.jsx)(C.a,{className:W()({active:1===S}),style:1===S?{color:"#fff",backgroundColor:"#343a40"}:{},onClick:function(){I(1)},children:"\u0417\u0430\u0434\u0430\u043d\u0438\u044f"})}),Object(h.jsx)(k.a,{style:{width:"100%",textAlign:"center"},children:Object(h.jsx)(C.a,{className:W()({active:2===S}),style:2===S?{color:"#fff",backgroundColor:"#343a40"}:{},onClick:function(){I(2)},children:"\u0422\u0435\u043e\u0440\u0438\u044f"})})]}),Object(h.jsxs)(L.a,{activeTab:S,children:[Object(h.jsx)(J.a,{tabId:1,children:Object(h.jsxs)(A.a,{style:{marginRight:"0"},children:[Object(h.jsx)(E.a,{className:"sidebar",children:Object(h.jsxs)(F.a,{vertical:!0,children:[Object(h.jsx)(k.a,{className:0===o&&"chosenSidebar",children:Object(h.jsxs)(C.a,{onClick:function(){return b(0)},children:[Object(h.jsx)("img",{alt:" ",src:X}),Object(h.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"})]})}),Object(h.jsx)(k.a,{children:Object(h.jsx)("div",{className:"dropdown-divider"})}),Object(h.jsx)(D,{})]})}),-1!==o?Object(h.jsx)(Z,{task:c[o-1]}):Object(h.jsx)(E.a,{className:"notChosenPlaceholder",children:Object(h.jsx)("p",{children:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0441\u043b\u0435\u0432\u0430 \u0434\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u0431\u043e\u0442\u044b"})})]})}),Object(h.jsx)(J.a,{tabId:2,children:Object(h.jsxs)(A.a,{style:{marginRight:"0"},children:[Object(h.jsx)(E.a,{className:"sidebar",children:Object(h.jsxs)(F.a,{vertical:!0,children:[Object(h.jsx)(k.a,{className:0===O&&"chosenSidebar",children:Object(h.jsxs)(C.a,{onClick:function(){return g(0)},children:[Object(h.jsx)("img",{alt:" ",src:X}),Object(h.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0442\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b"})]})}),Object(h.jsx)(k.a,{children:Object(h.jsx)("div",{className:"dropdown-divider"})}),Object(h.jsx)(R,{})]})}),-1!==O?Object(h.jsx)(Y,{theory:i[O-1]}):Object(h.jsx)(E.a,{className:"notChosenPlaceholder",children:Object(h.jsx)("p",{children:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0441\u043b\u0435\u0432\u0430 \u0434\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u0431\u043e\u0442\u044b"})})]})})]})]})}var ee=function(){return Object(h.jsxs)(i.a,{children:[Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/",children:"teacher"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/login",children:"login "})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/register",children:"reg"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/student",children:"student"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/base",children:"base"})})]}),Object(h.jsx)("div",{style:{height:"90%"},children:Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{path:"/login",children:Object(h.jsx)(x,{})}),Object(h.jsx)(j.a,{path:"/register",children:Object(h.jsx)(w,{})}),Object(h.jsx)(j.a,{path:"/student",children:Object(h.jsx)(V,{})}),Object(h.jsx)(j.a,{path:"/base",children:Object(h.jsx)($,{})}),Object(h.jsx)(j.a,{path:"/",children:Object(h.jsx)(Q,{})})]})})]})},te=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,301)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(ee,{})}),document.getElementById("root")),te()}},[[279,1,2]]]);
//# sourceMappingURL=main.3d299991.chunk.js.map