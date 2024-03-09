import{S as u}from"./assets/vendor-870f0eb5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function g(l,s){s.innerHTML=l.map(t=>`<li>
                <a class='gallery-link' href="${t.largeImageURL}">
                <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}"></a>
                <ul class="gallery-list">
                    <li class='gallery-item'>
                        <h2 class='gallery-title'>Likes</h2>
                        <p class='gallery-value'>${t.likes}</p>
                    </li>
                    <li class='gallery-item'>
                        <h2 class='gallery-title'>Views</h2>
                        <p class='gallery-value'>${t.views}</p>
                    </li>                    
                    <li class='gallery-item'>
                        <h2 class='gallery-title'>Comments</h2>
                        <p class='gallery-value'>${t.comments}</p>
                    </li>                    
                    <li class='gallery-item'>
                        <h2 class='gallery-title'>Downloads</h2>
                        <p class='gallery-value'>${t.downloads}</p>
                    </li>
                </ul>
                </li>`).join(""),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const f="42770823-dcf8f8c65a8a1b4479734e1b0",m="https://pixabay.com/api/",p=`${m}?key=${f}`;function d(l){return l.includes(" ")&&l.split(" ").join("+"),fetch(`${p}&q=${l}`).then(s=>{if(!s.ok)throw new Error("Images error!");return s.json()}).catch(s=>{alert(s)})}const a=document.querySelector(".form"),n=document.querySelector(".loader"),c=document.querySelector(".gallery");a.addEventListener("submit",l=>{l.preventDefault(),c.innerHTML="";const o=document.querySelector("input").value.trim();o.length===0||o.trim()===""?iziToast.warning({title:"",message:"You forgot to enter details"}):(n.classList.remove("is-hidden"),d(o).then(t=>{t.hits.length===0&&iziToast.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:cross,position:"topRight",pauseOnHover:!0,timeout:3e3});const e=t.hits.slice(0,15);g(e,c)}).catch(()=>{iziToast.error({title:"",message:"Error while loading images!",class:"popup-message",theme:"dark",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:cross,position:"topRight",pauseOnHover:!0,timeout:3e3})}).finally(()=>{n.classList.add("is-hidden"),a.reset()}))});
//# sourceMappingURL=commonHelpers.js.map
