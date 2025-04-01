import{a as d,S as m,i as n}from"./assets/vendor-DEZpR2tN.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function h(r){return d.get("https://pixabay.com/api/?",{params:{key:"49618658-bd62d28bb73c3efea12ea07c4",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const f=document.querySelector(".gallery"),c=document.querySelector(".loader");function y(r){return r.map(({webformatURL:o,largeImageURL:a,tags:s,likes:e,views:t,comments:i,downloads:p})=>`
        <li class='gallery-item'>
            <a class='gallery-link' href='${a}'>
                <img
                    src='${o}'
                    alt='${s}'
                    width='360'
                    height='200'/>
            </a>
            <div>
                <ul class='photo-stats-list'>
                    <li class='photo-stats-item'>
                        <p class='photo-stats-heads'>Likes</p>
                        <p class='photo-stats-number'>${e}</p>
                    </li>
                    <li class='photo-stats-item'>
                        <p class='photo-stats-heads'>Views</p>
                        <p class='photo-stats-number'>${t}</p>
                    </li>
                    <li class='photo-stats-item'>
                        <p class='photo-stats-heads'>Comments</p>
                        <p class='photo-stats-number'>${i}</p>
                    </li>
                    <li class='photo-stats-item'>
                        <p class='photo-stats-heads'>Downloads</p>
                        <p class='photo-stats-number'>${p}</p>
                    </li>
                </ul>
            </div>
        </li>
    `).join("")}new m(".gallery a",{captionsData:"alt",captionDelay:250});function g(){f.innerHTML=""}function b(){c.style.display="block"}function l(){c.style.display="none"}const u=document.querySelector(".form"),L=document.querySelector(".gallery");u.addEventListener("submit",q);l();function q(r){r.preventDefault(),b();const a=r.currentTarget.elements["search-text"].value.trim();h(a).then(s=>s.data.total===0?(n.error({message:"Sorry, there are no images matching your search query. Please try again!"}),l()):(L.innerHTML=y(s.data.hits),l())).catch(s=>{n.error({})}),g(),u.reset()}
//# sourceMappingURL=index.js.map
