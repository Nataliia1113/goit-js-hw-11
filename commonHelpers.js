import{S as u}from"./assets/vendor-870f0eb5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();function f(s,r){r.innerHTML=s.map(t=>`<li>
                <a href="${t.largeImageURL}"><img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}"></a>
                <ul class="gallery-list">
                    <li>
                        <h2>Likes</h2>
                        <p>${t.likes}</p>
                    </li>
                    <li>
                        <h2>Views</h2>
                        <p>${t.views}</p>
                    </li>                    
                    <li>
                        <h2>Comments</h2>
                        <p>${t.comments}</p>
                    </li>                    
                    <li>
                        <h2>Downloads</h2>
                        <p>${t.downloads}</p>
                    </li>
                </ul>
                </li>`).join(""),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const p="42770823-dcf8f8c65a8a1b4479734e1b0",m="https://pixabay.com/api/",d=`${m}?key=${p}`;function h(s){return s.includes(" ")&&s.split(" ").join("+"),fetch(`${d}&q=${s}`).then(r=>{if(!r.ok)throw new Error("Images error!");return r.json()}).catch(r=>{alert(r)})}const n=document.querySelector(".form"),a=document.querySelector(".loader"),c=document.querySelector(".gallery");n.addEventListener("submit",s=>{s.preventDefault(),c.innerHTML="";const i=document.querySelector("input").value.trim();i.length===0||i.trim()===""?iziToast.error({title:"Error",message:"Illegal operation"}):(a.classList.remove("is-hidden"),h(i).then(t=>{t.hits.length===0&&iziToast.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:cross,position:"topRight",pauseOnHover:!0,timeout:3e3});const e=t.hits.slice(0,15);f(e,c)}).catch(()=>{iziToast.error({title:"",message:"Error while loading images!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:cross,position:"topRight",pauseOnHover:!0,timeout:3e3})}).finally(()=>{a.classList.add("is-hidden"),n.reset()}))});
//# sourceMappingURL=commonHelpers.js.map
