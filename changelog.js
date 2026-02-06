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
    else if (text === "selection 10 unit project") {
      ul.classList.add("changelog-header-blue2");
    }  
  });

});

document.addEventListener("DOMContentLoaded", ()=>{const btn=document.querySelector(".hamburger"),body=document.body; if(!btn) return; btn.addEventListener("click", ()=>{const open=body.classList.toggle("nav-open"); btn.setAttribute("aria-expanded", open?"true":"false");}); window.addEventListener("resize", ()=>{ if(window.innerWidth>700 && body.classList.contains("nav-open")){ body.classList.remove("nav-open"); btn.setAttribute("aria-expanded","false"); }}); document.addEventListener("click",(e)=>{ if(!body.classList.contains("nav-open")) return; const inside = e.target.closest(".navbar"); if(!inside){ body.classList.remove("nav-open"); btn.setAttribute("aria-expanded","false"); }});});

const characterImages = {
  "Eichi Tenshouin": "images/btn-tenshouin_eichi.webp",
  "Wataru Hibiki": "images/btn-hibiki_wataru.webp",
  "Tori Himemiya": "images/btn-himemiya_tori.webp",
  "Yuzuru Fushimi": "images/btn-fushimi_yuzuru.webp",
  "Hokuto Hidaka": "images/btn-hidaka_hokuto.webp",
  "Subaru Akehoshi": "images/btn-akehoshi_subaru.webp",
  "Makoto Yuuki": "images/btn-yuuki_makoto.webp",
  "Mao Isara": "images/btn-isara_mao.webp",
  "Tetora Nagumo": "images/btn-nagumo_tetora.webp",
  "Midori Takamine": "images/btn-takamine_midori.webp",
  "Shinobu Sengoku": "images/btn-sengoku_shinobu.webp",
  "Chiaki Morisawa": "images/btn-morisawa_chiaki.webp",
  "Kanata Shinkai": "images/btn-shinkai_kanata.webp",
  "Hiiro Amagi": "images/btn-amagi_hiiro.webp",
  "Aira Shiratori": "images/btn-shiratori_aira.webp",
  "Mayoi Ayase": "images/btn-ayase_mayoi.webp",
  "Tatsumi Kazehaya": "images/btn-kazehaya_tatsumi.webp",
  "Nagisa Ran": "images/btn-ran_nagisa.webp",
  "Hiyori Tomoe": "images/btn-tomoe_hiyori.webp",
  "Ibara Saegusa": "images/btn-saegusa_ibara.webp",
  "Jun Sazanami": "images/btn-sazanami_jun.webp",
  "Shu Itsuki": "images/btn-itsuki_shu.webp",
  "Mika Kagehira": "images/btn-kagehira_mika.webp",
  "Hinata Aoi": "images/btn-aoi_hinata.webp",
  "Yuta Aoi": "images/btn-aoi_yuta.webp",
  "Rinne Amagi": "images/btn-amagi_rinne.webp",
  "HiMERU": "images/btn-himeru.webp",
  "Kohaku Oukawa": "images/btn-oukawa_kohaku.webp",
  "Niki Shiina": "images/btn-shiina_niki.webp",
  "Rei Sakuma": "images/btn-sakuma_rei.webp",
  "Kaoru Hakaze": "images/btn-hakaze_kaoru.webp",
  "Koga Ogami": "images/btn-ogami_koga.webp",
  "Adonis Otogari": "images/btn-otogari_adonis.webp",
  "Tomoya Mashiro": "images/btn-mashiro_tomoya.webp",
  "Nazuna Nito": "images/btn-nito_nazuna.webp",
  "Mitsuru Tenma": "images/btn-tenma_mitsuru.webp",
  "Hajime Shino": "images/btn-shino_hajime.webp",
  "Keito Hasumi": "images/btn-hasumi_keito.webp",
  "Kuro Kiryu": "images/btn-kiryu_kuro.webp",
  "Souma Kanzaki": "images/btn-kanzaki_souma.webp",
  "Ibuki Taki": "images/btn-taki_ibuki.webp",
  "Tsukasa Suou": "images/btn-suou_tsukasa.webp",
  "Leo Tsukinaga": "images/btn-tsukinaga_leo.webp",
  "Izumi Sena": "images/btn-sena_izumi.webp",
  "Ritsu Sakuma": "images/btn-sakuma_ritsu.webp",
  "Arashi Narukami": "images/btn-narukami_arashi.webp",
  "Natsume Sakasaki": "images/btn-sakasaki_natsume.webp",
  "Tsumugi Aoba": "images/btn-aoba_tsumugi.webp",
  "Sora Harukawa": "images/btn-harukawa_sora.webp",
  "Madara Mikejima": "images/btn-mikejima_madara.webp",
  "Esu": "images/btn-esu.webp",
  "Kanna": "images/btn-kanna.webp",
  "Yume": "images/btn-yume.webp",
  "Raika": "images/btn-raika.webp",
  "Juis Kojika": "images/btn-kojika_juis.webp",
  "Nozomi Madoka": "images/btn-madoka_nozomi.webp",
  "Mashu Kuon": "images/btn-kuon_mashu.webp",
  "Chitose Tsuzura": "images/btn-tsuzura_chitose.webp"
};

function addCharacterImages() {
  document.querySelectorAll(".changelog-content li").forEach(li => {
    if (li.classList.contains("changelog-header-green") || 
        li.classList.contains("changelog-header-red") || 
        li.classList.contains("changelog-header-blue") ||
        li.classList.contains("changelog-header-blue2") ||
        li.classList.contains("changelog-header-time")) {
      return;
    }

    let html = li.innerHTML;
    
    Object.keys(characterImages).forEach(name => {
      const regex = new RegExp(`\\b(${name})\\b`, 'gi');
      
      html = html.replace(regex, (match) => {
        return `<span class="character-mention"><img src="${characterImages[name]}" alt="${match}" onerror="this.style.display='none'">${match}</span>`;
      });
    });
    
    li.innerHTML = html;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(addCharacterImages, 100);
});