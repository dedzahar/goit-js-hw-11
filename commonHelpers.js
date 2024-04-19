import{i as c}from"./assets/vendor-ad859c2f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=l=>{const r="43468244-0e08b5bd3673b3a8f95726aef",s="https://pixabay.com/api/",o=new URLSearchParams({key:r,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});return fetch(`${s}?${o}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})},f=l=>l.map(({webformatURL:r,largeImageURL:s,tags:o,likes:e,views:t,comments:a,downloads:n})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${s}">
                <img
                class="gallery-image"
                src="${r}"
                alt="${o}"
                />
            </a>
            <ul class="gallery-txt-list">
                <li class="gallery-txt-item">
                    <p class="txt-title">Likes</p>
                    <p class="txt-value">${e}</p>
                </li>
                <li class="gallery-txt-item">
                    <p class="txt-title">Views</p>
                    <p class="txt-value">${t}</p>
                </li>
                <li class="gallery-txt-item">
                    <p class="txt-title">Comments</p>
                    <p class="txt-value">${a}</p>
                </li>
                <li class="gallery-txt-item">
                    <p class="txt-title">Downloads</p>
                    <p class="txt-value">${n}</p>
                </li>
            </ul>
        </li>`).join(""),p=document.querySelector(".search-form"),i=document.querySelector(".gallery");p.addEventListener("submit",l=>{l.preventDefault();const r=l.target.elements.search.value.trim();r!==""&&(i.innerHTML="",u(r).then(s=>{s.total==0&&c.show(m()),i.insertAdjacentHTML("beforeend",f(s.hits)),console.log(s)}),console.log(r))});function m(){return{message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#EF4040",position:"topRight"}}
//# sourceMappingURL=commonHelpers.js.map
