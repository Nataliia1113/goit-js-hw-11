import{S as u}from"./assets/vendor-870f0eb5.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function f(s,l){l.innerHTML=s.map(t=>`<li>
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
                </li>`).join(""),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const g="42770823-dcf8f8c65a8a1b4479734e1b0",m="https://pixabay.com/api/",d=`${m}?key=${g}`;function y(s){return s.includes(" ")&&s.split(" ").join("+"),fetch(`${d}&q=${s}`).then(l=>{if(!l.ok)throw new Error("Images error!");return l.json()}).catch(l=>{alert(l)})}const a=document.querySelector(".form"),n=document.querySelector(".loader"),c=document.querySelector(".gallery");a.addEventListener("submit",s=>{s.preventDefault(),c.innerHTML="";const i=document.querySelector("input").value.trim();i.length===0||i.trim()===""?iziToast.warning({message:"You forgot to enter details"}):(n.classList.remove("is-hidden"),y(i).then(t=>{t.hits.length||iziToast.info({message:"Sorry, there are no images matching your search query. Please try again!"});const e=t.hits.slice(0,15);f(e,c)}).catch(()=>{iziToast.error({message:"Error"})}).finally(()=>{n.classList.add("is-hidden"),a.reset()}))});
//# sourceMappingURL=commonHelpers.js.map
