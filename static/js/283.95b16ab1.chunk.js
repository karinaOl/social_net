"use strict";(self.webpackChunkproject_typescript=self.webpackChunkproject_typescript||[]).push([[283],{4283:function(t,s,e){e.r(s),e.d(s,{default:function(){return q}});var r=e(8683),i=e(5671),n=e(3144),u=e(136),o=e(5716),a=e(2791),p="ProfileInfo_descriptionBlock__IUlWL",c=e(4374),d=e(885),l=e(184),h=function(t){var s=(0,a.useState)(!1),e=(0,d.Z)(s,2),r=e[0],i=e[1],n=(0,a.useState)(t.status),u=(0,d.Z)(n,2),o=u[0],p=u[1];(0,a.useEffect)((function(){var s=t.status?t.status:"------";p(s)}),[t.status]);return(0,l.jsxs)("div",{children:[!r&&(0,l.jsx)("div",{children:(0,l.jsx)("span",{onDoubleClick:function(){i(!0)},children:o||"------"})}),r&&(0,l.jsx)("div",{children:(0,l.jsx)("input",{value:o,onChange:function(t){p(t.currentTarget.value)},onBlur:function(){i(!1),t.updateUserStatus(o)},autoFocus:!0})})]})},f=function(t){return t.profile.userId?(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:"\u043a\u0430\u043a\u0430\u044f-\u0442\u043e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"}),(0,l.jsxs)("div",{className:p,children:[(0,l.jsx)("img",{src:t.profile.photos.large&&t.profile.photos.large}),(0,l.jsx)(h,{status:t.status,updateUserStatus:t.updateUserStatus}),"ava+description"]})]}):(0,l.jsx)(c.p,{})},x=e(5022),j=e(2982),m="MyPost_postBlock__lSLP5",v="MyPost_post__gTsli",g="Post_item__HAsLE",S=function(t){return(0,l.jsxs)("div",{className:g,children:[(0,l.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrrxsxZSpsfebkw8VLXe6R5j7mryT6PK7Pg&usqp=CAU"}),t.message,(0,l.jsx)("div",{children:(0,l.jsx)("span",{children:t.likesCount})})]})},P=e(6139),U=e(704),_=e(5298),k=e(1117),Z=(0,_.D)(30),y=(0,U.Z)({form:"profileAddNewPostReduxForm"})((function(t){return(0,l.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,l.jsx)("div",{children:(0,l.jsx)(P.Z,{component:k.gx,name:"newPostText",validate:[_.C,Z]})}),(0,l.jsx)("button",{children:"ADD"})]})})),C=a.memo((function(t){return(0,l.jsxs)("div",{className:m,children:[(0,l.jsx)("h2",{children:"My post"}),(0,l.jsx)("div",{children:(0,l.jsx)(y,{onSubmit:function(s){t.addPost(s.newPostText)}})}),(0,l.jsx)("div",{className:v,children:(0,j.Z)(t.postData).reverse().map((function(t){return(0,l.jsx)(S,{id:t.id,message:t.message,likesCount:t.likesCount},t.id)}))})]})})),b=e(2177),D=(0,b.$j)((function(t){return{postData:t.profilePage.posts}}),(function(t){return{addPost:function(s){t((0,x.Wl)(s))}}}))(C),A=function(t){return(0,l.jsxs)("div",{children:[(0,l.jsx)(f,{profile:t.profile,status:t.status,updateUserStatus:t.updateUserStatus}),(0,l.jsx)(D,{})]})},N=e(9723),w=e(7781),I=e(2932),T=function(t){(0,u.Z)(e,t);var s=(0,o.Z)(e);function e(){return(0,i.Z)(this,e),s.apply(this,arguments)}return(0,n.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userID;t||(t=this.props.authorizedUserId.toString())||this.props.history.push("/login"),t&&(this.props.getUserProfile(t),this.props.getUserStatus(t))}},{key:"render",value:function(){return(0,l.jsx)("div",{children:(0,l.jsx)(A,(0,r.Z)((0,r.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus}))})}}]),e}(a.Component),q=(0,w.qC)((0,b.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.id,isAuth:t.auth.isAuth}}),{getUserProfile:x.et,getUserStatus:x.Tq,updateUserStatus:x.OL}),N.EN,I.D)(T)}}]);
//# sourceMappingURL=283.95b16ab1.chunk.js.map