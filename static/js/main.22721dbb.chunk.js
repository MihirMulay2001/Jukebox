(this["webpackJsonpincentify-jukebox"]=this["webpackJsonpincentify-jukebox"]||[]).push([[0],{10:function(e,t,a){e.exports={card:"Card_card__23DL3",img:"Card_img__2HrMX"}},11:function(e,t,a){e.exports={container:"LoginPage_container__qpla2",heading:"LoginPage_heading__2mvJM",subheading:"LoginPage_subheading__2aKby",loginbtn:"LoginPage_loginbtn__114WY",logo:"LoginPage_logo__z_LCR",image1:"LoginPage_image1__3FdEW",image2:"LoginPage_image2__321Jp"}},17:function(e,t,a){e.exports={container:"LandingPage_container__2S5KO",leftpane:"LandingPage_leftpane__2A67_",rightpane:"LandingPage_rightpane__XTagI",spotifylogo:"LandingPage_spotifylogo__GPUuB"}},27:function(e,t,a){e.exports={container:"Loading_container__CXSf2",loader:"Loading_loader__1-dPi",loading:"Loading_loading__3dzl-"}},30:function(e,t,a){e.exports={container:"Prelogin_container__3Tg9A",loginbtn:"Prelogin_loginbtn__1DPrW"}},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(18),i=a(4),s=a(0),c=a.n(s),r=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(s.useEffect)((function(){var e=localStorage.getItem("localPlaylists"),t=e?JSON.parse(e):"";e&&c(t)}),[]),{playlists:a,modifyPlaylists:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"DELETE"===e?c((function(e){var a=e.filter((function(e){return e.id!==t.id}));return localStorage.setItem("localPlaylists",JSON.stringify(a)),Object(n.a)(a)})):"SET"===e?c((function(e){if(-1!==e.findIndex((function(e){return e.id===t.id})))return Object(n.a)(e);var a=[].concat(Object(n.a)(e),[t]);return localStorage.setItem("localPlaylists",JSON.stringify(a)),Object(n.a)(a)})):"DELETE_ALL"===e&&(localStorage.clear(),c([]))}}},l=a.p+"static/media/Spotify_Logo.0c4ae91b.png",o=a(27),d=a.n(o),j=a(1);var g=function(){return Object(j.jsx)("div",{className:d.a.container,children:Object(j.jsx)("div",{className:d.a.loader,children:" "})})},u=a(28),p=a.n(u),b=a(41),f=a(42),h=a.n(f),O=function(e){var t=Object(s.useState)({}),a=Object(i.a)(t,2),n=a[0],c=a[1],r=Object(s.useState)(""),l=Object(i.a)(r,2),o=l[0],d=l[1],j=Object(s.useState)(!0),g=Object(i.a)(j,2),u=g[0],f=g[1],O=window.location.hash.substring(1).split("&")[0].split("=")[1];return console.log(window.location.hash),Object(s.useEffect)((function(){var t=function(){var t=Object(b.a)(p.a.mark((function t(){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get(e,{headers:{Authorization:"Bearer ".concat(O)}});case 3:a=t.sent,c(a.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),d("error occured");case 10:f(!1);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e,O]),{data:n,loading:u,error:o}},m=a(79),_=a(9),y=a.n(_),x=a(78),v=a(10),N=a.n(v);var P=function(e){var t=e.item,a=Object(x.a)((function(){return{type:"featured-playlist",item:{playlist:t},collect:function(e){return{isDragging:!!e.isDragging()}}}})),n=Object(i.a)(a,2),s=n[0].isDragging,c=n[1];return Object(j.jsx)("div",{className:N.a.card,ref:c,style:{border:s?"5px solid black":"0px"},children:Object(j.jsxs)("a",{href:t.external_urls.spotify,target:"_blank",rel:"noopener noreferrer",children:[Object(j.jsx)("div",{className:N.a.img,children:Object(j.jsx)("img",{src:t.images[0].url,alt:"playlist cover",width:"100%",height:"100%"})}),Object(j.jsx)("div",{className:N.a.description,children:t.description})]})})};var L=function(e){var t=e.data,a=e.type;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h1",{children:[a," playlists "]}),Object(j.jsx)("div",{className:y.a.playlists,children:t.length>0?t.map((function(e){return Object(j.jsx)(P,{item:e},e.id)})):"No playlists available"})]})},S=a(30),E=a.n(S),k="https://accounts.spotify.com/authorize";k+="?response_type=token",k+="&client_id="+encodeURIComponent("5f2ed8b9afd149e196baace029ed072e"),k+="&scope="+encodeURIComponent("user-read-private user-read-email"),k+="&redirect_uri="+encodeURIComponent("https://mihirmulay2001.github.io/Jukebox"),k+="&state=jahsyyteoisjkhfd";var w=function(){return Object(j.jsxs)("div",{className:E.a.container,children:[Object(j.jsx)("h2",{children:"Login to access featured playlists"}),Object(j.jsx)("a",{href:k,className:E.a.loginbtn,children:"Login"})]})};function D(e){var t=e.modifyPlaylists,a=s.useState("Featured"),n=Object(i.a)(a,2),c=n[0],r=n[1],l=O("https://api.spotify.com/v1/browse/featured-playlists?country=IN"),o=O("https://api.spotify.com/v1/me/playlists"),d=Object(m.a)((function(){return{accept:"saved-playlist",drop:function(e){t("DELETE",e.playlist)},collect:function(e){return{isOver:!!e.isOver()}}}})),u=Object(i.a)(d,2),p=(u[0].isOver,u[1]);return l.loading||o.loading?Object(j.jsx)("div",{className:y.a.container,children:Object(j.jsx)(g,{})}):l.error||o.error?Object(j.jsx)("div",{ref:p,className:y.a.containerPre,children:Object(j.jsx)(w,{})}):Object(j.jsxs)("div",{ref:p,className:y.a.container,children:[Object(j.jsxs)("select",{className:y.a.selector,name:"playlistType",value:c,onChange:function(e){e.preventDefault(),r((function(e){return"Featured"===e?"Personal":"Featured"}))},children:[Object(j.jsx)("option",{value:"Featured",children:"Featured"}),Object(j.jsx)("option",{value:"Personal",children:"Personal"})]}),Object(j.jsx)(L,{data:"Featured"===c?l.data.playlists.items:o.data.items,type:c})]})}var T=function(e){var t=e.item,a=Object(x.a)((function(){return{type:"saved-playlist",item:{playlist:t},collect:function(e){return{isDragging:!!e.isDragging()}}}})),n=Object(i.a)(a,2),s=n[0].isDragging,c=n[1];return Object(j.jsx)("div",{className:N.a.card,ref:c,style:{border:s?"3px solid black":"0px"},children:Object(j.jsxs)("a",{href:t.external_urls.spotify,target:"_blank",rel:"noopener noreferrer",children:[Object(j.jsx)("div",{className:N.a.img,children:Object(j.jsx)("img",{src:t.images[0].url,alt:"playlist cover",width:"100%",height:"100%"})}),Object(j.jsx)("div",{className:N.a.description,children:t.description})]})})};function C(e){var t=e.playlists,a=e.modifyPlaylists,n=Object(m.a)((function(){return{accept:"featured-playlist",drop:function(e){a("SET",e.playlist)},collect:function(e){return{isOver:!!e.isOver()}}}})),s=Object(i.a)(n,2),c=(s[0].isOver,s[1]);return Object(j.jsxs)("div",{ref:c,className:y.a.container,children:[Object(j.jsxs)("div",{className:y.a.heading,children:[Object(j.jsx)("h1",{children:"Saved playlists"}),Object(j.jsx)("button",{className:y.a.clearbtn,onClick:function(e){e.preventDefault(),a("DELETE_ALL")},children:"Clear Lists"})]}),Object(j.jsx)("div",{className:y.a.playlists,children:t.length>0?t.map((function(e){return Object(j.jsx)(T,{item:e},e.id)})):"No saved playlists"})]})}var F=a(17),I=a.n(F);var J=function(){var e=r(),t=e.playlists,a=e.modifyPlaylists;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:I.a.container,children:[Object(j.jsx)("img",{className:I.a.spotifylogo,src:l,alt:"spotify logo",width:"140px"}),Object(j.jsx)("div",{className:I.a.leftpane,children:Object(j.jsx)(D,{modifyPlaylists:a})}),Object(j.jsx)("div",{className:I.a.rightpane,children:Object(j.jsx)(C,{playlists:t,modifyPlaylists:a})})]})})},A=a(77),z=a(45),R=a(44),U=a.n(R),B=a(25),M=a(3),W=(a(71),a.p+"static/media/playlist-image1.d7ab158c.png"),X=a.p+"static/media/playlist-image2.d31769a0.png",q=a(11),G=a.n(q);var H=function(){var e=window.location.hash;console.log("access toke",e);var t=Object(M.f)();return e.length>1&&t("/landingpage#".concat(e)),Object(j.jsxs)("div",{className:G.a.container,children:[Object(j.jsx)("img",{className:G.a.image1,src:W,alt:"playlist "}),Object(j.jsx)("img",{className:G.a.image2,src:X,alt:"playlist "}),Object(j.jsx)("div",{className:G.a.logo,children:Object(j.jsx)("img",{src:l,alt:"spotify logo",width:"140px"})}),Object(j.jsx)("div",{className:G.a.heading,children:"Jukebox"}),Object(j.jsx)("div",{className:G.a.subheading,children:"Save trending playlists locally"}),Object(j.jsx)(B.b,{to:"/landingpage",className:G.a.loginbtn,children:"View Playlists"})]})};U.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(A.a,{backend:z.a,children:Object(j.jsx)(B.a,{children:Object(j.jsxs)(M.c,{children:[Object(j.jsx)(M.a,{path:"/",element:Object(j.jsx)(H,{})}),Object(j.jsx)(M.a,{path:"/landingpage",element:Object(j.jsx)(J,{})})]})})})}),document.getElementById("root"))},9:function(e,t,a){e.exports={container:"Pane_container__3j-cs",containerPre:"Pane_containerPre__H10yL",playlists:"Pane_playlists__3r1Te",heading:"Pane_heading__Ge_Nq",clearbtn:"Pane_clearbtn__1A1-N",selector:"Pane_selector__1F3TQ"}}},[[72,1,2]]]);
//# sourceMappingURL=main.22721dbb.chunk.js.map