import{a as m,S as h,i as l}from"./assets/vendor-DEZpR2tN.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function y(s){return m.get("https://pixabay.com/api/?",{params:{key:"49618658-bd62d28bb73c3efea12ea07c4",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const n=document.querySelector(".gallery"),c=document.querySelector(".loader");function g(s){const a=s.map(({webformatURL:r,largeImageURL:o,tags:e,likes:t,views:i,comments:u,downloads:d})=>`
        <li class='gallery-item'>
            <a class='gallery-link' href='${o}'>
                <img
                    src='${r}'
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
                        <p class='photo-stats-number'>${u}</p>
                    </li>
                    <li class='photo-stats-item'>
                        <p class='photo-stats-heads'>Downloads</p>
                        <p class='photo-stats-number'>${d}</p>
                    </li>
                </ul>
            </div>
        </li>
    `).join("");n.innerHTML=a,b.refresh()}const b=new h(".gallery a",{captionsData:"alt",captionDelay:250});function L(){n.innerHTML=""}function q(){c.style.display="block"}function f(){c.style.display="none"}const p=document.querySelector(".form");p.addEventListener("submit",C);f();function C(s){s.preventDefault();const r=s.currentTarget.elements["search-text"].value.trim();if(!r){l.warning({messageColor:"#fafafb",titleColor:"#fafafb",backgroundColor:"#ffa000",message:"Please enter a search query!",position:"topRight"});return}q(),L(),y(r).then(o=>{o.data.total===0&&l.error({messageColor:"#fafafb",titleColor:"#fafafb",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),g(o.data.hits)}).catch(o=>{l.error({messageColor:"#fafafb",titleColor:"#fafafb",backgroundColor:"#ef4040",message:o,position:"topRight"})}).finally(()=>{f()}),p.reset()}
//# sourceMappingURL=index.js.map
