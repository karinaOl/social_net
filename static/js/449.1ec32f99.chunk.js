"use strict";(self.webpackChunkproject_typescript=self.webpackChunkproject_typescript||[]).push([[449],{3449:function(s,e,i){i.r(e),i.d(e,{default:function(){return k}});var n=i(1655),a="Dialogs_dialogs__uRzh+",d="Dialogs_dialogItems__v74VZ",t="Dialogs_dialog__WrSZX",o="Dialogs_messages__0086k",r="Dialogs_message__fIJfv",l=i(184),c=function(s){return(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:r,children:s.message})})},u=i(2426),g=function(s){return(0,l.jsx)("div",{className:t,children:(0,l.jsx)(u.OL,{to:"/dialogs/"+s.id,children:s.name})})},m=(i(2791),i(9723)),h=i(6139),f=i(704),j=i(1117),_=i(5298),x=(0,_.D)(50),p=(0,f.Z)({form:"addMessageForm"})((function(s){return(0,l.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,l.jsx)("div",{children:(0,l.jsx)(h.Z,{component:j.gx,name:"newMessageBody",placeholder:"Enter your message",validate:[_.C,x]})}),(0,l.jsx)("button",{children:"add"})]})})),v=i(2177),D=i(7781),b=i(2932),k=(0,D.qC)(b.D,(0,v.$j)((function(s){return{dialogsPage:s.dialogsPage,isAuth:s.auth.isAuth}}),(function(s){return{sendMessage:function(e){s((0,n.XE)(e))}}})))((function(s){return s.isAuth?(0,l.jsxs)("div",{className:a,children:[(0,l.jsx)("div",{className:d,children:s.dialogsPage.dialogs.map((function(s){return(0,l.jsx)(g,{id:s.id,name:s.name},s.id)}))}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:o,children:s.dialogsPage.messages.map((function(s){return(0,l.jsx)(c,{message:s.message,id:s.id},s.id)}))}),(0,l.jsx)(p,{onSubmit:function(e){s.sendMessage(e.newMessageBody)}})]})]}):(0,l.jsx)(m.l_,{to:"/login"})}))}}]);
//# sourceMappingURL=449.1ec32f99.chunk.js.map