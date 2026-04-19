document.getElementById("menu-toggle").onclick=function(){document.getElementById("menu").classList.toggle("active")};

fetch("data/news.json").then(r=>r.json()).then(d=>{
let c=document.getElementById("news-container");
if(c){
d.forEach(n=>{
let div=document.createElement("div");
div.innerHTML=`<h3>${n.title}</h3><p>${n.date}</p><p>${n.content}</p>`;
c.appendChild(div);
});
}
});
