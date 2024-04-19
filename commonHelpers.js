import{S as f,i as n}from"./assets/vendor-8c59ed88.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y=r=>{const l="43468244-0e08b5bd3673b3a8f95726aef",s="https://pixabay.com/api/",a=new URLSearchParams({key:l,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});return fetch(`${s}?${a}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})},m=r=>r.map(({webformatURL:l,largeImageURL:s,tags:a,likes:e,views:t,comments:o,downloads:p})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${s}">
                <img
                class="gallery-image"
                src="${l}"
                alt="${a}"
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
                    <p class="txt-value">${o}</p>
                </li>
                <li class="gallery-txt-item">
                    <p class="txt-title">Downloads</p>
                    <p class="txt-value">${p}</p>
                </li>
            </ul>
        </li>`).join(""),g=document.querySelector(".search-form"),c=document.querySelector(".gallery"),d=new f(".gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250}),i=document.querySelector(".loader");i.style.display="none";g.addEventListener("submit",r=>{r.preventDefault();const l=r.target.elements.search.value.trim();l!==""&&(i.style.display="block",c.innerHTML="",i.style,y(l).then(s=>{s.total==0&&n.show(u()),console.log(s),c.insertAdjacentHTML("beforeend",m(s.hits)),d.refresh(),r.target.reset()}).catch(s=>{n.show(u(s.message))}).finally(()=>{i.style.display="none"}))});function u(r=""){return{message:r==""?"Sorry, there are no images matching your search query. Please try again!":r,messageColor:"#fff",backgroundColor:"#EF4040",position:"topRight"}}
//# sourceMappingURL=commonHelpers.js.map
