"use strict";(self.webpackChunkstatusview=self.webpackChunkstatusview||[]).push([[472],{1396:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=a(7294),r=a(2891),s=a(2912);var l=()=>n.createElement("div",{className:"header-container"},n.createElement("div",{className:"left-content"},n.createElement("img",{src:r.Z,alt:"NACA Logo",className:"logo"}),n.createElement("span",{className:"welcome-text"},"Mapping HIV Prevention Services, 2023")),n.createElement("div",null,n.createElement("a",{href:"https://naca.gov.ng/",className:"naca-home-btn",target:"_blank",rel:"noopener noreferrer"}," Go to NACA Home")));var o=e=>{let{children:t}=e;return n.createElement("div",null,n.createElement(l,null),n.createElement("main",null,t))};var c=()=>{const e=(0,n.useRef)(null),{0:t,1:a}=(0,n.useState)("NIGERIA");return(0,n.useEffect)((()=>{const t=s.Ys(e.current),n=s.mw4().scale(3500).center([8.6753,9.082]).translate([400,400]),r=s.l49().projection(n),l=s.ut0().domain([0,1,2,3]).range(["#76ff0d","#B11B10","#FF7F00","#ffc802","#008000"]);Promise.all([s.AVB("./submissions/nigeria_geojson.geojson"),s.gyn("./submissions/statusState.csv")]).then((e=>{let[n,o]=e;n.features.forEach((e=>{const t=o.find((t=>t.state===e.properties.state));t&&(e.properties.currentValue=+t.serviceProviders)})),t.selectAll("path").remove(),t.append("g").selectAll("path").data(n.features).enter().append("path").attr("d",r).attr("fill",(e=>{const t=e.properties.currentValue;return void 0===t?"#D3D3D3":l(t)})).attr("stroke","#FFFFFF").on("mouseover",(function(e,t){s.Ys(this).attr("stroke","#000000"),a(t.properties.state)})).on("mouseout",(function(e,t){t.properties.currentValue;s.Ys(this).attr("stroke","#ffffff"),a("NIGERIA")}));const c=t.append("g").attr("transform","translate(600,600)");let i=l.domain().map((e=>[e,l.invertExtent(l(e))[1]]));i=i.filter(((e,t,a)=>a.findIndex((t=>t[0]===e[0]))===t)),i.some((e=>0===e[0]))||i.unshift([0,0]);const m=c.selectAll("g").data(i).enter().append("g").attr("transform",((e,t)=>`translate(0, ${20*t})`));m.append("rect").attr("width",40).attr("height",20).attr("fill",(e=>0===e[0]?"#B11B10":1===e[0]?"#FF7F00":2===e[0]?"#ffc802":3===e[0]?"#008000":l(e[0]))),m.append("text").attr("x",45).attr("y",10).attr("dy","0.35em").attr("font-size","12px").attr("font-family","'Lato', sans-serif").text((e=>0===e[0]?"No submissions":1===e[0]?"No validations":2===e[0]?"Some validations":3===e[0]?"Completed validations":`${e[0]} - ${e[1]-1}`))})).catch((e=>{console.log("Error loading file:",e)}))}),[]),n.createElement(o,null,n.createElement("div",{className:"national-map"},n.createElement("div",{className:"submissions map-header-container"},n.createElement("span",{className:"updateTitle"},"STATUS UPDATE: "),n.createElement("span",{className:"current-heading"}," ",t)),n.createElement("div",{className:"parent-container"},n.createElement("div",{className:"map-component"},n.createElement("svg",{ref:e,width:800,height:800})))))}}}]);
//# sourceMappingURL=component---src-pages-submissions-js-52ce8944f7609600bd4c.js.map