import{a as h,S as f,i as n}from"./assets/vendor-DEZpR2tN.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function y(r){return h.get("https://pixabay.com/api/?",{params:{key:"49618658-bd62d28bb73c3efea12ea07c4",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");function g(r){const o=r.map(({webformatURL:a,largeImageURL:s,tags:e,likes:t,views:i,comments:d,downloads:m})=>`
        <li class='gallery-item'>
            <a class='gallery-link' href='${s}'>
                <img
                    src='${a}'
                    alt='${e}'
                    width='360'
                    height='200'/>
            </a>
            <div>
                <ul class='photo-stats-list'>
                    <li class='photo-stats-item'>
                        <p class='photo-stats-heads'>Likes</p>
                        <p class='photo-stats-number'>${t}</p>
                    </li>
                    <li class='photo-stats-item'>
                        <p class='photo-stats-heads'>Views</p>
                        <p class='photo-stats-number'>${i}</p>
                    </li>
                    <li class='photo-stats-item'>
                        <p class='photo-stats-heads'>Comments</p>
                        <p class='photo-stats-number'>${d}</p>
                    </li>
                    <li class='photo-stats-item'>
                        <p class='photo-stats-heads'>Downloads</p>
                        <p class='photo-stats-number'>${m}</p>
                    </li>
                </ul>
            </div>
        </li>
    `).join("");c.innerHTML=o,b.refresh()}const b=new f(".gallery a",{captionsData:"alt",captionDelay:250});function L(){c.innerHTML=""}function q(){u.style.display="block"}function l(){u.style.display="none"}const p=document.querySelector(".form");p.addEventListener("submit",S);l();function S(r){r.preventDefault(),q();const a=r.currentTarget.elements["search-text"].value.trim();y(a).then(s=>s.data.total===0?(n.error({message:"Sorry, there are no images matching your search query. Please try again!"}),l()):(g(s.data.hits),l())).catch(s=>{n.error({message:s})}),L(),p.reset()}
//# sourceMappingURL=index.js.map
