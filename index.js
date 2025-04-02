import{a as d,S as h,i as n}from"./assets/vendor-DEZpR2tN.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function y(s){return d.get("https://pixabay.com/api/?",{params:{key:"49618658-bd62d28bb73c3efea12ea07c4",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const c=document.querySelector(".gallery"),p=document.querySelector(".loader");function g(s){const r=s.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:i,comments:f,downloads:m})=>`
        <li class='gallery-item'>
            <a class='gallery-link' href='${o}'>
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
                        <p class='photo-stats-number'>${f}</p>
                    </li>
                    <li class='photo-stats-item'>
                        <p class='photo-stats-heads'>Downloads</p>
                        <p class='photo-stats-number'>${m}</p>
                    </li>
                </ul>
            </div>
        </li>
    `).join("");c.innerHTML=r,b.refresh()}const b=new h(".gallery a",{captionsData:"alt",captionDelay:250});function L(){c.innerHTML=""}function q(){p.style.display="block"}function l(){p.style.display="none"}const u=document.querySelector(".form");u.addEventListener("submit",S);l();function S(s){s.preventDefault(),q();const a=s.currentTarget.elements["search-text"].value.trim();y(a).then(o=>o.data.total===0?(n.error({messageColor:"#fafafb",titleColor:"#fafafb",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",iconUrl:"./img/errorIcon.png"}),l()):(g(o.data.hits),l())).catch(o=>{n.error({messageColor:"#fafafb",titleColor:"#fafafb",backgroundColor:"#ef4040",message:o,position:"topRight",iconUrl:"./img/errorIcon.png"})}),L(),u.reset()}
//# sourceMappingURL=index.js.map
