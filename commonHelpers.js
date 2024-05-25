import{S as u,i}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function p(n){const s=`https://pixabay.com/api/?key=44064586-c85ee0d0f4282a04fbc0070f7&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;console.log("url",s);try{return await(await fetch(s)).json()}catch(t){throw t}}function m(n){const o=document.getElementById("gallery");if(o.innerHTML="",n.length===0)return iziToast.error({message:"Sorry, there are no images matching your search. Please try again!"});const s=n.map(t=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}"><img src="${t.webformatURL}" alt="${t.tags}"></a>
            <ul class="item-info">
              <li><h3>Likes</h3><p>${t.likes}</p></li>
              <li><h3>Views</h3><p>${t.views}</p></li> 
              <li><h3>Comments</h3><p>${t.comments}</p></li> 
              <li><h3>Downloads</h3><p>${t.downloads}</p></li> 
            </ul> 
        </li>
    `).join("");o.innerHTML=`<ul class="gallery">${s}</ul>`,new u(".gallery a",{captionsData:"alt",captionDelay:300})}const l=document.getElementById("searchForm"),d=document.getElementById("searchInput"),c=document.getElementById("loader");l.addEventListener("submit",async n=>{n.preventDefault();const o=d.value.trim();if(o===""){i.error({title:"Error:",message:"Please enter a search term.",position:"topRight"});return}try{c.style.display="block";const t=(await p(o)).hits;m(t)}catch{i.error({title:"Error:",message:"An error occurred while fetching images. Please try again later."})}finally{c.style.display="none",l.reset()}});
//# sourceMappingURL=commonHelpers.js.map
