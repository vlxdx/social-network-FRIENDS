"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[996],{8996:function(s,e,t){t.r(e),t.d(e,{default:function(){return z},withRouter:function(){return E}});var n=t(5671),i=t(3144),r=t(136),o=t(516),a=t(1413),u=t(2791),l=t(885),c=t(1539),d="ProfileInfo_descriptionBlock__ol01b",h="ProfileInfo_mainPhoto__h1eu9",f="ProfileInfo_contact__-pltp",p=t(184),x=function(s){var e=(0,u.useState)(!1),t=(0,l.Z)(e,2),n=t[0],i=t[1],r=(0,u.useState)(s.status),o=(0,l.Z)(r,2),a=o[0],c=o[1];(0,u.useEffect)((function(){c(s.status)}),[s.status]);return(0,p.jsxs)("div",{children:[!n&&(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Status: "})," ",(0,p.jsx)("span",{onDoubleClick:function(){i(!0)},children:s.status||"-------"})]}),n&&(0,p.jsx)("div",{children:(0,p.jsx)("input",{onChange:function(s){c(s.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),s.updateStatus(a)},value:a})})]})},j=t(8478),m=t(9086),v=t(704),b=t(9234),g=(0,v.Z)({form:"edit-profile"})((function(s){var e=s.handleSubmit,t=s.profile,n=s.error;return(0,p.jsxs)("form",{onSubmit:e,children:[(0,p.jsx)("div",{children:(0,p.jsx)("button",{children:"save"})}),n&&(0,p.jsx)("div",{className:b.Z.formSummaryError,children:n}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Full name"}),": ",(0,m.Gr)("Full name","fullName",[],m.II)]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Looking for a job"}),": ",(0,m.Gr)("","lookingForAJob",[],m.II,{type:"checkbox"})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"My professional skills"}),":",(0,m.Gr)("My professional skills","lookingForAJobDescription",[],m.gx)]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"About me"}),":",(0,m.Gr)("About me","aboutMe",[],m.gx)]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Contacts"}),": ",Object.keys(t.contacts).map((function(s){return(0,p.jsx)("div",{className:f,children:(0,p.jsxs)("b",{children:[s,": ",(0,m.Gr)(s,"contacts."+s,[],m.II)]})},s)}))]})]})})),P=function(s){var e=s.profile,t=s.isOwner,n=s.goToEditMode;return(0,p.jsxs)("div",{children:[t&&(0,p.jsx)("div",{children:(0,p.jsx)("button",{onClick:n,children:"edit"})}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Full name"}),": ",e.fullName]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"My professional skills"}),": ",e.lookingForAJobDescription]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.contacts).map((function(s){return(0,p.jsx)(k,{contactTitle:s,contactValue:e.contacts[s]},s)}))]})]})},k=function(s){var e=s.contactTitle,t=s.contactValue;return(0,p.jsxs)("div",{className:f,children:[(0,p.jsx)("b",{children:e}),": ",t]})},_=function(s){var e=s.profile,t=s.status,n=s.updateStatus,i=s.isOwner,r=s.savePhoto,o=s.saveProfile,a=(0,u.useState)(!1),f=(0,l.Z)(a,2),m=f[0],v=f[1];if(!e)return(0,p.jsx)(c.Z,{});return(0,p.jsx)("div",{children:(0,p.jsxs)("div",{className:d,children:[(0,p.jsx)("img",{src:e.photos.large||j,className:h}),i&&(0,p.jsx)("input",{type:"file",onChange:function(s){s.target.files.length&&r(s.target.files[0])}}),m?(0,p.jsx)(g,{initialValues:e,profile:e,onSubmit:function(s){o(s).then((function(){v(!1)}))}}):(0,p.jsx)(P,{goToEditMode:function(){v(!0)},profile:e,isOwner:i}),(0,p.jsx)(x,{status:t,updateStatus:n})]})})},Z=t(6070),S=t(2982),y="MyPosts_postsBlock__pvt0D",I="MyPosts_posts__6cKYR",w="Post_item__dNP52",N=function(s){return(0,p.jsxs)("div",{className:w,children:[(0,p.jsx)("img",{src:"https://images.unsplash.com/photo-1522098635833-216c03d81fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJpZW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}),s.message,(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{children:"like"})," ",s.likesCount]})]})},A=t(6139),C=t(5304),M=(0,C.D)(10),D=(0,v.Z)({form:"ProfileAddNewPostForm"})((function(s){return(0,p.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,p.jsx)("div",{children:(0,p.jsx)(A.Z,{name:"newPostText",component:m.gx,placeholder:"Post message",validate:[C.C,M]})}),(0,p.jsx)("div",{children:(0,p.jsx)("button",{children:"Add post"})})]})})),F=u.memo((function(s){var e=(0,S.Z)(s.posts).reverse().map((function(s){return(0,p.jsx)(N,{message:s.message,likesCount:s.likesCount},s.id)}));return(0,p.jsxs)("div",{className:y,children:[(0,p.jsx)("h3",{children:"My posts"}),(0,p.jsx)(D,{onSubmit:function(e){s.addPost(e.newPostText)}}),(0,p.jsx)("div",{className:I,children:e})]})})),O=t(8687),T=(0,O.$j)((function(s){return{posts:s.profilePage.posts,newPostText:s.profilePage.newPostText}}),(function(s){return{addPost:function(e){s((0,Z.Wl)(e))}}}))(F),J="Profile_profile__42xr3",B=function(s){return(0,p.jsxs)("div",{className:J,children:[(0,p.jsx)(_,{savePhoto:s.savePhoto,isOwner:s.isOwner,profile:s.profile,status:s.status,saveProfile:s.saveProfile,updateStatus:s.updateStatus}),(0,p.jsx)(T,{})]})},G=t(7689),U=t(7781);function E(s){return function(e){var t={params:(0,G.UO)()};return(0,p.jsx)(s,(0,a.Z)((0,a.Z)({},e),{},{match:t}))}}var V=function(s){(0,r.Z)(t,s);var e=(0,o.Z)(t);function t(){return(0,n.Z)(this,t),e.apply(this,arguments)}return(0,i.Z)(t,[{key:"refreshProfile",value:function(){var s=this.props.match.params.userId;s||(s=this.props.authorizedUserId)||this.props.navigate("/login"),this.props.getUserProfile(s),this.props.getStatus(s)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(s,e,t){this.props.match.params.userId!=s.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,p.jsx)(B,(0,a.Z)((0,a.Z)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(u.Component),z=(0,U.qC)((function(s){return function(e){return(0,p.jsx)(s,(0,a.Z)((0,a.Z)({},e),{},{navigate:(0,G.s0)()}))}}),(0,O.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authorizedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),{getUserProfile:Z.et,getStatus:Z.lR,updateStatus:Z.Nf,savePhoto:Z.Ju,saveProfile:Z.Ii}),E)(V)}}]);
//# sourceMappingURL=996.8614bd9d.chunk.js.map