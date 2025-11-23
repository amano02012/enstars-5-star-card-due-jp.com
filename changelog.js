document.querySelectorAll(".changelog-date").forEach(button => {
  button.addEventListener("click", () => {
    const entry = button.parentElement;
    const content = entry.querySelector(".changelog-content");

    if (entry.classList.contains("active")) {
      content.style.maxHeight = null;
      entry.classList.remove("active");
    } else {
      document.querySelectorAll(".changelog-entry.active").forEach(openEntry => {
        openEntry.classList.remove("active");
        openEntry.querySelector(".changelog-content").style.maxHeight = null;
      });

      entry.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px"; 
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".changelog-entry").forEach(entry => {
    const btn = entry.querySelector(".changelog-date");
    btn.addEventListener("click", () => {
      entry.classList.toggle("open");
    });
  });

  document.querySelectorAll(".changelog-content ul").forEach(ul => {
    const text = ul.textContent.trim().toLowerCase();

    if (text === "5 star card due") {
      ul.classList.add("changelog-header-green");
    } 
    else if (text === "card count") {
      ul.classList.add("changelog-header-red");
    } 
    else if (text === "others") {
      ul.classList.add("changelog-header-blue");
    } 
    else if (/^\d{1,2}:\d{2}\s*jst$/i.test(text)) {
      ul.classList.add("changelog-header-time");
    }
  });

  });

document.addEventListener("DOMContentLoaded", ()=>{const btn=document.querySelector(".hamburger"),body=document.body; if(!btn) return; btn.addEventListener("click", ()=>{const open=body.classList.toggle("nav-open"); btn.setAttribute("aria-expanded", open?"true":"false");}); window.addEventListener("resize", ()=>{ if(window.innerWidth>700 && body.classList.contains("nav-open")){ body.classList.remove("nav-open"); btn.setAttribute("aria-expanded","false"); }}); document.addEventListener("click",(e)=>{ if(!body.classList.contains("nav-open")) return; const inside = e.target.closest(".navbar"); if(!inside){ body.classList.remove("nav-open"); btn.setAttribute("aria-expanded","false"); }});});
