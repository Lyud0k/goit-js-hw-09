const e=document.querySelector("body"),t=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");t.addEventListener("click",(function o(){t.disabled=!0,e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,col=setTimeout(o,1e3),console.log(t)})),o.addEventListener("click",(function(){clearTimeout(col)}));
//# sourceMappingURL=01-color-switcher.75fa9c08.js.map