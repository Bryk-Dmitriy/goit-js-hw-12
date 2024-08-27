import{a as f,S as y,i as n}from"./assets/vendor-C-TexYiS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function h(r,t){const s="https://pixabay.com/api/",i="45461935-4caf943777d43ef92827c838d";try{return(await f.get(s,{params:{key:i,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}catch(e){iziToast.error({position:"topRight",message:`${e}`})}}function p(r){const t=new y(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),s=document.querySelector(".gallery");let i=r.hits.map(e=>`
    <li class="photo-card">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" width="360" height="152"/>
      </a>
      <div class="info">
        <p class="likes"><b>Likes:</b> ${e.likes}</p>
        <p class="vievs"><b>Views:</b> ${e.views}</p>
        <p class="comments"><b>Comments:</b> ${e.comments}</p>
        <p class="dowloads"><b>Downloads:</b> ${e.downloads}</p>
      </div>
      </li>
  `).join("");s.insertAdjacentHTML("beforeend",i),t.refresh()}function L(){const r=document.querySelector(".gallery");r.innerHTML=""}function b(){const t=document.querySelector(".gallery").firstElementChild.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}const w=document.querySelector(".form-gallery"),v=document.querySelector(".form-input"),a=document.querySelector(".loader"),c=document.querySelector(".load"),m=document.querySelector(".bottom"),l=15;let d=1,g="";w.addEventListener("submit",S);c.addEventListener("click",q);async function S(r){L(),r.preventDefault(),a.classList.remove("hidden"),m.classList.remove("show-text");let t=v.value.trim();if(g=t,d=1,t===""){n.error({class:"custom-error",position:"topRight",message:"Please fill the input"}),a.classList.add("hidden");return}try{const s=await h(t,d,l);if(s.total===0){n.error({class:"custom-error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),a.classList.add("hidden");return}else await p(s),c.classList.remove("hidden");s.hits.length<l&&(c.classList.add("hidden"),m.classList.add("show-text"),n.info({class:"custom-error",position:"topRight",message:"We're sorry, but you've reached the end of search results."})),a.classList.add("hidden")}catch(s){n.error({position:"topRight",message:s.message}),a.classList.add("hidden")}}async function q(r){d+=1,a.classList.remove("hidden"),c.classList.add("hidden");try{const t=await h(g,d,l);t.hits.length<l?(c.classList.add("hidden"),m.classList.add("show-text"),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):c.classList.remove("hidden"),await p(t),b(),a.classList.add("hidden")}catch(t){n.error({position:"topRight",message:t.message}),a.classList.add("hidden")}}
//# sourceMappingURL=index.js.map
