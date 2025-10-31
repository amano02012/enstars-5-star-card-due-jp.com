function getJSTDate() {
  const now = new Date();
  return new Date(now.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
}

function calculateDays(startDate) {
  const now = getJSTDate();
  const start = new Date(startDate);
  const diff = now - start;
  return diff >= 0 ? Math.floor(diff / (1000 * 60 * 60 * 24)) : 0;
}

const idols = [{
  id: 1,
  name: `Eichi Tenshouin`,
  avatar: `images/btn-tenshouin_eichi.webp`, 
  borderColor: "#FFF3B8",
  startDate: `2024-10-15`, 
  description: "Latest Card: Unit Event"
},
{
  id: 2,
  name: `Wataru Hibiki`,
  avatar: `images/btn-hibiki_wataru.webp`,
  borderColor: "#A1D8E2",
  startDate: `2025-05-25`,
  description: "Latest Card: Cross Scout"
},
{
  id: 3,
  name: `Tori Himemiya`,
  avatar: `images/btn-himemiya_tori.webp`,
  borderColor: "#F5B2B2",
  startDate: `2025-04-15`,
  description: "Latest Card: Tour Event"
},
{
  id: 4,
  name: `Yuzuru Fushimi`,
  avatar: `images/btn-fushimi_yuzuru.webp`,
  borderColor: "#3E62AD",
  startDate: `2025-08-25`,
  description: "Latest Card: Bright me up!! Scout Stage"
},
{
  id: 5,
  name: `Hokuto Hidka`,
  avatar: `images/btn-hidaka_hokuto.webp`,
  borderColor: "#0068B7",
  startDate: `2025-04-30`,
  description: "Latest Card: Unit Event"
},
{
  id: 6,
  name: `Subaru Akehoshi`,
  avatar: `images/btn-akehoshi_subaru.webp`,
  borderColor: "#F3981D",
  startDate: `2025-05-15`,
  description: "Latest Card: Tour Event"
},
{
  id: 7,
  name: `Makoto Yuuki`,
  avatar: `images/btn-yuuki_makoto.webp`,
  borderColor: "#65AB31",
  startDate: `2025-04-10`,
  description: "Latest Card: Cross Scout"
},
{
  id: 8,
  name: `Mao Isara`,
  avatar: `images/btn-isara_mao.webp`,
  borderColor: "#941F57",
  startDate: `2025-10-25`,
  description: "Latest Card: Bright me up!! Scout Stage"
},
{
  id: 9,
  name: `Tetora Nagumo`,
  avatar: `images/btn-nagumo_tetora.webp`,
  borderColor: "#302833",
  startDate: `2025-06-29`,
  description: "Latest Card: Cross Scout"
},
{
  id: 10,
  name: `Midori Takamine`,
  avatar: `images/btn-takamine_midori.webp`,
  borderColor: "#00533F",
  startDate: `2025-10-30`,
  description: "Latest Card: Theme Scout"
},
{
  id: 11,
  name: `Shinobu Sengoku`,
  avatar: `images/btn-sengoku_shinobu.webp`,
  borderColor: "#FFDC00",
  startDate: `2025-09-25`,
  description: "Latest Card: Bright me up!! Scout Stage"
},
{
  id: 12,
  name: `Chiaki Morisawa`,
  avatar: `images/btn-morisawa_chiaki.webp`,
  borderColor: "#E60033",
  startDate: `2025-04-29`,
  description: "Latest Card: Cross Scout"
},
{
  id: 13,
  name: `Kanata Shinkai`,
  avatar: `images/btn-shinkai_kanata.webp`,
  borderColor: "#008DB7",
  startDate: `2025-07-31`,
  description: "Latest Card: Shuffle Event"
},
{
  id: 14,
  name: `Hiiro Amagi`,
  avatar: `images/btn-amagi_hiiro.webp`,
  borderColor: "#BA2636",
  startDate: `2025-01-30`,
  description: "Latest Card: Cross Scout"
},
{
  id: 15,
  name: `Aira Shiratori`,
  avatar: `images/btn-shiratori_aira.webp`,
  borderColor: "#FFF1CF",
  startDate: `2025-04-14`,
  description: "Latest Card: Cross Scout"
},
{
  id: 16,
  name: `Mayoi Ayase`,
  avatar: `images/btn-ayase_mayoi.webp`,
  borderColor: "#522F60",
  startDate: `2025-07-30`,
  description: "Latest Card: Theme Scout"
},
{
  id: 17,
  name: `Tatsumi Kazehaya`,
  avatar: `images/btn-kazehaya_tatsumi.webp`,
  borderColor: "#7EBEA5",
  startDate: `2024-05-30`,
  description: "Latest Card: Cross Scout"
},
{
  id: 18,
  name: `Nagisa Ran`,
  avatar: `images/btn-ran_nagisa.webp`,
  borderColor: "#A73836",
  startDate: `2025-08-30`,
  description: "Latest Card: Theme Scout"
},
{
  id: 19,
  name: `Hiyori Tomoe`,
  avatar: `images/btn-tomoe_hiyori.webp`,
  borderColor: "#B8D200",
  startDate: `2025-10-31`,
  description: "Latest Card: Unit Event"
},
{
  id: 20,
  name: `Ibara Saegusa`,
  avatar: `images/btn-saegusa_ibara.webp`,
  borderColor: "#74325C",
  startDate: `2025-10-15`,
  description: "Latest Card: Tour Event"
},
{
  id: 21,
  name: `Jun Sazanami`,
  avatar: `images/btn-sazanami_jun.webp`,
  borderColor: "#192F60",
  startDate: `2025-05-14`,
  description: "Latest Card: Cross Scout"
},
{
  id: 22,
  name: `Shu Itsuki`,
  avatar: `images/btn-itsuki_shu.webp`,
  borderColor: "#E3ACAE",
  startDate: `2025-08-15`,
  description: "Latest Card: Tour Event"
},
{
  id: 23,
  name: `Mika Kagehira`,
  avatar: `images/btn-kagehira_mika.webp`,
  borderColor: "#006A6C",
  startDate: `2025-05-30`,
  description: "Latest Card: Cross Scout"
},
{
  id: 24,
  name: `Hinata Aoi`,
  avatar: `images/btn-aoi_hinata.webp`,
  borderColor: "#EB6EA0",
  startDate: `2025-05-10`,
  description: "Latest Card: Cross Scout"
},
{
  id: 25,
  name: `Yuta Aoi`,
  avatar: `images/btn-aoi_yuta.webp`,
  borderColor: "#00A1E9",
  startDate: `2025-06-30`,
  description: "Latest Card: Unit Event"
},
{
  id: 26,
  name: `Rinne Amagi`,
  avatar: `images/btn-amagi_rinne.webp`,
  borderColor: "#B7282E",
  startDate: `2025-09-14`,
  description: "Latest Card: Theme Scout"
},
{
  id: 27,
  name: `HiMERU`,
  avatar: `images/btn-himeru.webp`,
  borderColor: "#89C3EB",
  startDate: `2025-04-25`,
  description: "Latest Card: Cross Scout"
},
{
  id: 28,
  name: `Kohaku Oukawa`,
  avatar: `images/btn-oukawa_kohaku.webp`,
  borderColor: "#F4B3C2",
  startDate: `2025-09-10`,
  description: "Latest Card: Bright me up!! Scout Stage"
},
{
  id: 29,
  name: `Niki Shiina`,
  avatar: `images/btn-shiina_niki.webp`,
  borderColor: "#507EA5",
  startDate: `2025-06-15`,
  description: "Latest Card: Unit Event"
},
{
  id: 30,
  name: `Rei Sakuma`,
  avatar: `images/btn-sakuma_rei.webp`,
  borderColor: "#47266E",
  startDate: `2025-04-15`,
  description: "Latest Card: Tour Event"
},
{
  id: 31,
  name: `Kaoru Hakaze`,
  avatar: `images/btn-hakaze_kaoru.webp`,
  borderColor: "#FDD35C",
  startDate: `2025-07-15`,
  description: "Latest Card: Unit Event"
},
{
  id: 32,
  name: `Koga Oogami`,
  avatar: `images/btn-ogami_koga.webp`,
  borderColor: "#C9CACA",
  startDate: `2025-08-10`,
  description: "Latest Card: Bright me up!! Scout Stage"
},
{
  id: 33,
  name: `Adonis Otogari`,
  avatar: `images/btn-otogari_adonis.webp`,
  borderColor: "#915DA3",
  startDate: `2024-11-10`,
  description: "Latest Card: Cross Scout"
},
{
  id: 34,
  name: `Tomoya Mashiro`,
  avatar: `images/btn-mashiro_tomoya.webp`,
  borderColor: "#EEDCB3",
  startDate: `2025-08-31`,
  description: "Latest Card: Unit Event"
},
{
  id: 35,
  name: `Nazuna Nito`,
  avatar: `images/btn-nito_nazuna.webp`,
  borderColor: "#FFEC47",
  startDate: `2025-02-27`,
  description: "Latest Card: Cross Scout"
},
{
  id: 36,
  name: `Mitsuru Tenma`,
  avatar: `images/btn-tenma_mitsuru.webp`,
  borderColor: "#ED6D35",
  startDate: `2025-06-25`,
  description: "Latest Card: Cross Scout"
},
{
  id: 37,
  name: `Hajime Shino`,
  avatar: `images/btn-shino_hajime.webp`,
  borderColor: "#CAB8D9",
  startDate: `2025-07-14`,
  description: "Latest Card: Theme Scout"
},
{
  id: 38,
  name: `Keito Hasumi`,
  avatar: `images/btn-hasumi_keito.webp`,
  borderColor: "#316745",
  startDate: `2024-12-31`,
  description: "Latest Card: Unit Event"
},
{
  id: 39,
  name: `Kuro Kiryu`,
  avatar: `images/btn-kiryu_kuro.webp`,
  borderColor: "#E83929",
  startDate: `2025-08-14`,
  description: "Latest Card: Theme Scout"
},
{
  id: 40,
  name: `Souma Kanzaki`,
  avatar: `images/btn-kanzaki_souma.webp`,
  borderColor: "#5654A2",
  startDate: `2025-09-30`,
  description: "Latest Card: Unit Event"
},
{
  id: 41,
  name: `Ibuki Taki`,
  avatar: `images/btn-taki_ibuki.webp`,
  borderColor: "#66BBCC",
  startDate: `2025-07-25`,
  description: "Latest Card: Feature Scout 2"
},
{
  id: 42,
  name: `Tsukasa Suou`,
  avatar: `images/btn-suou_tsukasa.webp`,
  borderColor: "#942343",
  startDate: `2025-03-14`,
  description: "Latest Card: Theme Scout"
},
{
  id: 43,
  name: `Leo Tsukinaga`,
  avatar: `images/btn-tsukinaga_leo.webp`,
  borderColor: "#EC6D51",
  startDate: `2025-06-14`,
  description: "Latest Card: Cross Scout"
},
{
  id: 44,
  name: `Izumi Sena`,
  avatar: `images/btn-sena_izumi.webp`,
  borderColor: "#BBDBF3",
  startDate: `2025-10-14`,
  description: "Latest Card: Theme Scout"
},
{
  id: 45,
  name: `Ritsu Sakuma`,
  avatar: `images/btn-sakuma_ritsu.webp`,
  borderColor: "#001E43",
  startDate: `2025-08-15`,
  description: "Latest Card: Tour Event"
},
{
  id: 46,
  name: `Arashi Narukami`,
  avatar: `images/btn-narukami_arashi.webp`,
  borderColor: "#EDDE7B",
  startDate: `2025-09-29`,
  description: "Latest Card: Theme Scout"
},
{
  id: 47,
  name: `Natsume Sakasaki`,
  avatar: `images/btn-sakasaki_natsume.webp`,
  borderColor: "#D70035",
  startDate: `2025-05-31`,
  description: "Latest Card: Unit Event"
},
{
  id: 48,
  name: `Tsumugi Aoba`,
  avatar: `images/btn-aoba_tsumugi.webp`,
  borderColor: "#00608D",
  startDate: `2025-06-10`,
  description: "Latest Card: Cross Scout"
},
{
  id: 49,
  name: `Sora Harukawa`,
  avatar: `images/btn-harukawa_sora.webp`,
  borderColor: "#FFF352",
  startDate: `2025-10-10`,
  description: "Latest Card: Bright me up!! Scout Stage"
},
{
  id: 50,
  name: `Madara Mikejima`,
  avatar: `images/btn-mikejima_madara.webp`,
  borderColor: "#622D18",
  startDate: `2024-10-31`,
  description: "Latest Card: Unit Event"
},
{
  id: 51,
  name: `Esu Sagiri`,
  avatar: `images/btn-esu.webp`,
  borderColor: "#80FFF4",
  startDate: `2025-05-15`,
  description: "Latest Card: Tour Event"
},
{
  id: 52,
  name: `Kanna Natsu`,
  avatar: `images/btn-kanna.webp`,
  borderColor: "#8ACCB8",
  startDate: `2025-09-15`,
  description: "Latest Card: Unit Event"
},
{
  id: 53,
  name: `Fuyume Hanamura`,
  avatar: `images/btn-yume.webp`,
  borderColor: "#CCADD9",
  startDate: `2024-11-30`,
  description: "Latest Card: Unit Event"
},
{
  id: 54,
  name: `Raika Hojo`,
  avatar: `images/btn-raika.webp`,
  borderColor: "#298C7C",
  startDate: `2025-10-15`,
  description: "Latest Card: Tour Event"
},
{
  id: 55,
  name: `Juis Kojika`,
  avatar: `images/btn-kojika_juis.webp`,
  borderColor: "#70ab5e",
  startDate: `-`,
  description: "-",
  isNew: true
},
{
  id: 56,
  name: `Nozomi Madoka`,
  avatar: `images/btn-madoka_nozomi.webp`,
  borderColor: "#881f4a",
  startDate: `-`,
  description: "-",
  isNew: true
},
{
  id: 57,
  name: `Mashu Kuon`,
  avatar: `images/btn-kuon_mashu.webp`,
  borderColor: "#ec938c",
  startDate: `-`,
  description: "-",
  isNew: true
},
{
  id: 58,
  name: `Chitose Tsuzura`,
  avatar: `images/btn-tsuzura_chitose.webp`,
  borderColor: "#424355",
  startDate: `-`,
  description: "-",
  isNew: true
}];

function getRibbonClass(rank) {
  if (rank === 1) return "ribbon gold";
  if (rank === 2) return "ribbon silver";
  if (rank === 3) return "ribbon bronze";
  if (rank <= 10) return "ribbon ten";
  return "ribbon other";
}

function getRibbonText(rank) {
  return `${rank}位`;
}

function renderIdols() {
  const container = document.getElementById("idol-container");
  container.innerHTML = "";

  idols.forEach(idol => {
    idol.days = calculateDays(idol.startDate);
  });

  idols.sort((a, b) => b.days - a.days);

  idols.forEach((idol, index) => {
    idol.rank = index + 1;

    const card = document.createElement("div");
    card.className = "idol-card";
    card.style.borderColor = idol.borderColor;

    const img = document.createElement("img");
    img.src = idol.avatar;
    img.alt = idol.name;

    const name = document.createElement("div");
    name.className = "idol-name";
    name.textContent = idol.name;

    const days = document.createElement("div");
    days.className = "combo";
    days.textContent = `${idol.days} day/s`;

    const desc = document.createElement("div");
    desc.className = "idol-description";
    desc.textContent = idol.description;

    const ribbon = document.createElement("div");
    ribbon.className = getRibbonClass(idol.rank);
    ribbon.textContent = getRibbonText(idol.rank);

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(days);
    card.appendChild(desc);
    card.appendChild(ribbon);

    container.appendChild(card);

    if (idol.isNew) {
    const newLabel = document.createElement("div");
    newLabel.className = "new-label";
    newLabel.textContent = "NEW";
  card.appendChild(newLabel);
}
  });
}

renderIdols();
setInterval(renderIdols, 60 * 60 * 1000);
