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
  description: "Latest Card: Unit Event",
  detailsImage: "cards/Fine/Fairy_Tale_of_Allegories_Eichi_Tenshouin.webp",
  detailsDescription: "(Fairy Tale of Allegories) Eichi Tenshouin"
},
{
  id: 2,
  name: `Wataru Hibiki`,
  avatar: `images/btn-hibiki_wataru.webp`,
  borderColor: "#A1D8E2",
  startDate: `2025-05-25`,
  description: "Latest Card: Cross Scout",
  detailsImage: "cards/Fine/Canister_Cowboy_Wataru_Hibiki.webp",
  detailsDescription: "(Canister Cowboy) Wataru Hibiki"
},
{
  id: 3,
  name: `Tori Himemiya`,
  avatar: `images/btn-himemiya_tori.webp`,
  borderColor: "#F5B2B2",
  startDate: `2025-04-15`,
  description: "Latest Card: Tour Event",
  detailsImage: "cards/Fine/Charm_of_the_Four_Kings_of_the_Sky_Tori_Himemiya.webp",
  detailsDescription: "(Charm of the Four Kings of the Sky) Tori Himemiya"
},
{
  id: 4,
  name: `Yuzuru Fushimi`,
  avatar: `images/btn-fushimi_yuzuru.webp`,
  borderColor: "#3E62AD",
  startDate: `2025-08-25`,
  description: "Latest Card: Bright me up!! Scout Stage",
  detailsImage: "cards/Fine/Route_to_Broadened_Possibilities_Yuzuru_Fushimi.webp",
  detailsDescription: "(Route to Broadened Possibilities) Yuzuru Fushimi"
},
{
  id: 5,
  name: `Hokuto Hidka`,
  avatar: `images/btn-hidaka_hokuto.webp`,
  borderColor: "#0068B7",
  startDate: `2025-04-30`,
  description: "Latest Card: Unit Event",
  detailsImage: "cards/Trickstar/The_Anniversary_We_Strive_Onward_Hokuto_Hidaka.webp",
  detailsDescription: "(The Anniversary We Strive Onward) Hokuto Hidka"
},
{
  id: 6,
  name: `Subaru Akehoshi`,
  avatar: `images/btn-akehoshi_subaru.webp`,
  borderColor: "#F3981D",
  startDate: `2025-05-15`,
  description: "Latest Card: Tour Event",
  detailsImage: "cards/Trickstar/Sparkling_Sailing_Ceremony_Subaru_Akehoshi.webp",
  detailsDescription: "(Sparkling Sailing Ceremony) Subaru Akehoshi"
},
{
  id: 7,
  name: `Makoto Yuuki`,
  avatar: `images/btn-yuuki_makoto.webp`,
  borderColor: "#65AB31",
  startDate: `2025-04-10`,
  description: "Latest Card: Cross Scout",
  detailsImage: "cards/Trickstar/ACE's_Character_Makoto_Yuuki.webp",
  detailsDescription: "(ACE's Character) Makoto Yuuki"
},
{
  id: 8,
  name: `Mao Isara`,
  avatar: `images/btn-isara_mao.webp`,
  borderColor: "#941F57",
  startDate: `2025-10-25`,
  description: "Latest Card: Bright me up!! Scout Stage",
  detailsImage: "cards/Trickstar/Moving_Beyond_Expectations_Mao_Isara.webp",
  detailsDescription: "(Moving Beyond Expectations) Mao Isara"
},
{
  id: 9,
  name: `Tetora Nagumo`,
  avatar: `images/btn-nagumo_tetora.webp`,
  borderColor: "#302833",
  startDate: `2025-06-29`,
  description: "Latest Card: Cross Scout",
  detailsImage: "cards/RYUSEITAI/Central_Pillar_of_All_Trades_Tetora_Nagumo.webp",
  detailsDescription: "(Central Pillar of All Trades) Tetora Nagumo"
},
{
  id: 10,
  name: `Midori Takamine`,
  avatar: `images/btn-takamine_midori.webp`,
  borderColor: "#00533F",
  startDate: `2025-10-30`,
  description: "Latest Card: Theme Scout",
  detailsImage: "cards/RYUSEITAI/Guardian_of_Peace_Midori_Takamine.webp",
  detailsDescription: "(Guardian of Peace) Midori Takamine"
},
{
  id: 11,
  name: `Shinobu Sengoku`,
  avatar: `images/btn-sengoku_shinobu.webp`,
  borderColor: "#FFDC00",
  startDate: `2025-09-25`,
  description: "Latest Card: Bright me up!! Scout Stage",
  detailsImage: "cards/RYUSEITAI/The_Charm_of_Perseverance_Shinobu_Sengoku.webp",
  detailsDescription: "(The Charm of Perseverance) Shinobu Sengoku"
},
{
  id: 12,
  name: `Chiaki Morisawa`,
  avatar: `images/btn-morisawa_chiaki.webp`,
  borderColor: "#E60033",
  startDate: `2025-04-29`,
  description: "Latest Card: Cross Scout",
  detailsImage: "cards/RYUSEITAI/Offense-Defense_Ambivalence_Chiaki_Morisawa.webp",
  detailsDescription: "(Offense-Defense Ambivalence) Chiaki Morisawa"
},
{
  id: 13,
  name: `Kanata Shinkai`,
  avatar: `images/btn-shinkai_kanata.webp`,
  borderColor: "#008DB7",
  startDate: `2025-07-31`,
  description: "Latest Card: Shuffle Event",
  detailsImage: "cards/RYUSEITAI/A_Summer_to_Remember_Kanata_Shinkai.webp",
  detailsDescription: "(A Summer to Remember) Kanata Shinkai"
},
{
  id: 14,
  name: `Hiiro Amagi`,
  avatar: `images/btn-amagi_hiiro.webp`,
  borderColor: "#BA2636",
  startDate: `2025-01-30`,
  description: "Latest Card: Cross Scout",
  detailsImage: "cards/Alkaloid/Devoted_Enthusiasm_Hiiro_Amagi.webp",
  detailsDescription: "(Devoted Enthusiasm) Hiiro Amagi"
},
{
  id: 15,
  name: `Aira Shiratori`,
  avatar: `images/btn-shiratori_aira.webp`,
  borderColor: "#FFF1CF",
  startDate: `2025-04-14`,
  description: "Latest Card: Cross Scout",
  detailsImage: "cards/Alkaloid/Path_to_Becoming_an_ACE_Aira_Shiratori.webp",
  detailsDescription: "(Path to Becoming an ACE) Aira Shiratori"
},
{
  id: 16,
  name: `Mayoi Ayase`,
  avatar: `images/btn-ayase_mayoi.webp`,
  borderColor: "#522F60",
  startDate: `2025-07-30`,
  description: "Latest Card: Theme Scout",
  detailsImage: "cards/Alkaloid/A_Summer_With_You_Mayoi_Ayase.webp",
  detailsDescription: "(A Summer With You) Mayoi Ayase"
},
{
  id: 17,
  name: `Tatsumi Kazehaya`,
  avatar: `images/btn-kazehaya_tatsumi.webp`,
  borderColor: "#7EBEA5",
  startDate: `2024-05-30`,
  description: "Latest Card: Cross Scout",
  detailsImage: "cards/Alkaloid/Composed_Droplet_Tatsumi_Kazehaya.webp",
  detailsDescription: "(Composed Droplet) Tatsumi Kazehaya"
},
{
  id: 18,
  name: `Nagisa Ran`,
  avatar: `images/btn-ran_nagisa.webp`,
  borderColor: "#A73836",
  startDate: `2025-08-30`,
  description: "Latest Card: Theme Scout",
  detailsImage: "cards/Eden/The_Beginning_of_Mythos_Nagisa_Ran.webp",
  detailsDescription: "(The Beginning of Mythos) Nagisa Ran"
},
{
  id: 19,
  name: `Hiyori Tomoe`,
  avatar: `images/btn-tomoe_hiyori.webp`,
  borderColor: "#B8D200",
  startDate: `2025-10-31`,
  description: "Latest Card: Unit Event",
  detailsImage: "cards/Eden/La_Vérité_We_Cannot_Conceal_Hiyori_Tomoe.webp",
  detailsDescription: "(La Vérité We Cannot Conceal) Hiyori Tomoe"
},
{
  id: 20,
  name: `Ibara Saegusa`,
  avatar: `images/btn-saegusa_ibara.webp`,
  borderColor: "#74325C",
  startDate: `2025-10-15`,
  description: "Latest Card: Tour Event",
  detailsImage: "cards/Eden/Trick_Performer_Ibara_Saegusa.webp",
  detailsDescription: "(Trick Performer) Ibara Saegusa"
},
{
  id: 21,
  name: `Jun Sazanami`,
  avatar: `images/btn-sazanami_jun.webp`,
  borderColor: "#192F60",
  startDate: `2025-05-14`,
  description: "Latest Card: Cross Scout",
  detailsImage: "cards/Eden/Showdown_Crisis_Jun_Sazanami.webp",
  detailsDescription: "(Showdown Crisis) Jun Sazanami"
},
{
  id: 22,
  name: `Shu Itsuki`,
  avatar: `images/btn-itsuki_shu.webp`,
  borderColor: "#E3ACAE",
  startDate: `2025-08-15`,
  description: "Latest Card: Tour Event",
  detailsImage: "cards/Valkyrie/PARADOX_BUNNY_Shu_Itsuki.webp",
  detailsDescription: "(PARADOX BUNNY) Shu Itsuki"
},
{
  id: 23,
  name: `Mika Kagehira`,
  avatar: `images/btn-kagehira_mika.webp`,
  borderColor: "#006A6C",
  startDate: `2025-05-30`,
  description: "Latest Card: Cross Scout",
  detailsImage: "cards/Valkyrie/Partner_Cowboy_Mika_Kagehira.webp",
  detailsDescription: "(Partner Cowboy) Mika Kagehira"
},
{
  id: 24,
  name: `Hinata Aoi`,
  avatar: `images/btn-aoi_hinata.webp`,
  borderColor: "#EB6EA0",
  startDate: `2025-05-10`,
  description: "Latest Card: Cross Scout",
  detailsImage: "cards/2wink/Resolute_Crisis_Hinata_Aoi.webp",
  detailsDescription: "(Resolute Crisis) Hinata Aoi"
},
{
  id: 25,
  name: `Yuta Aoi`,
  avatar: `images/btn-aoi_yuta.webp`,
  borderColor: "#00A1E9",
  startDate: `2025-06-30`,
  description: "Latest Card: Unit Event",
  detailsImage: "cards/2wink/WINK_of_ThanX_Yuta_Aoi.webp",
  detailsDescription: "(WINK of ThanX) Yuta Aoi"
},
{
  id: 26,
  name: `Rinne Amagi`,
  avatar: `images/btn-amagi_rinne.webp`,
  borderColor: "#B7282E",
  startDate: `2025-09-14`,
  description: "Latest Card: Theme Scout",
  detailsImage: "cards/Crazy_B/Attempting_a_Gamble_Rinne_Amagi.webp",
  detailsDescription: "(Attempting a Gamble) Rinne Amagi"
},
{
  id: 27,
  name: `HiMERU`,
  avatar: `images/btn-himeru.webp`,
  borderColor: "#89C3EB",
  startDate: `2025-04-25`,
  description: "Latest Card: Cross Scout",
  detailsImage: "cards/Crazy_B/Front-Back_Ambivalence_HiMERU.webp",
  detailsDescription: "(Front-Back Ambivalence) HiMERU"
},
{
  id: 28,
  name: `Kohaku Oukawa`,
  avatar: `images/btn-oukawa_kohaku.webp`,
  borderColor: "#F4B3C2",
  startDate: `2025-09-10`,
  description: "Latest Card: Bright me up!! Scout Stage",
  detailsImage: "cards/Crazy_B/My_Own_Distance_Kohaku_Oukawa.webp",
  detailsDescription: "(My Own Distance) Kohaku Oukawa"
},
{
  id: 29,
  name: `Niki Shiina`,
  avatar: `images/btn-shiina_niki.webp`,
  borderColor: "#507EA5",
  startDate: `2025-06-15`,
  description: "Latest Card: Unit Event",
  detailsImage: "cards/Crazy_B/Matching_Pair-ring_Niki_Shiina.webp",
  detailsDescription: "(Matching Pair-ring) Niki Shiina"
},
{
  id: 30,
  name: `Rei Sakuma`,
  avatar: `images/btn-sakuma_rei.webp`,
  borderColor: "#47266E",
  startDate: `2025-04-15`,
  description: "Latest Card: Tour Event",
  detailsImage: "cards/UNDEAD/Future_of_the_Four_Kings_of_the_Sky_Rei_Sakuma.webp",
  detailsDescription: "(Future of the Four Kings of the Sky) Rei Sakuma"
},
{
  id: 31,
  name: `Kaoru Hakaze`,
  avatar: `images/btn-hakaze_kaoru.webp`,
  borderColor: "#FDD35C",
  startDate: `2025-07-15`,
  description: "Latest Card: Unit Event",
  detailsImage: "cards/UNDEAD/Captain_of_the_Ghost_Ship_Kaoru_Hakaze.webp",
  detailsDescription: "(Captain of the Ghost Ship) Kaoru Hakaze"
},
{
  id: 32,
  name: `Koga Oogami`,
  avatar: `images/btn-ogami_koga.webp`,
  borderColor: "#C9CACA",
  startDate: `2025-08-10`,
  description: "Latest Card: Bright me up!! Scout Stage",
  detailsImage: "cards/UNDEAD/Calling_Out_Who_I_Am_Koga_Ogami.webp",
  detailsDescription: "(Calling Out Who I Am) Koga Oogami"
},
{
  id: 33,
  name: `Adonis Otogari`,
  avatar: `images/btn-otogari_adonis.webp`,
  borderColor: "#915DA3",
  startDate: `2025-11-10`,
  description: "Latest Card: Bright me up!! Scout Stage",
  detailsImage: "cards/UNDEAD/夢の周りにあるもの_Adonis_Otogari.webp",
  detailsDescription: "[夢の周りにあるもの] Adonis Otogari"
},
{
  id: 34,
  name: `Tomoya Mashiro`,
  avatar: `images/btn-mashiro_tomoya.webp`,
  borderColor: "#EEDCB3",
  startDate: `2025-08-31`,
  description: "Latest Card: Unit Event",
  detailsImage: "cards/Ra_bits/RaRaRa＊Realization_Tomoya_Mashiro.webp",
  detailsDescription: "(RaRaRa＊Realization) Tomoya Mashiro"
},
{
  id: 35,
  name: `Nazuna Nito`,
  avatar: `images/btn-nito_nazuna.webp`,
  borderColor: "#FFEC47",
  startDate: `2025-02-27`,
  description: "Latest Card: Cross Scout",
  detailsImage: "cards/Ra_bits/Concerned_Talk_Nazuna_Nito.webp",
  detailsDescription: "(Concerned Talk) Nazuna Nito"
},
{
  id: 36,
  name: `Mitsuru Tenma`,
  avatar: `images/btn-tenma_mitsuru.webp`,
  borderColor: "#ED6D35",
  startDate: `2025-06-25`,
  description: "Latest Card: Cross Scout",
  detailsImage: "cards/Ra_bits/Rising_Star_of_All_Trades_Mitsuru_Tenma.webp",
  detailsDescription: "(Rising Star of All Trades) Mitsuru Tenma"
},
{
  id: 37,
  name: `Hajime Shino`,
  avatar: `images/btn-shino_hajime.webp`,
  borderColor: "#CAB8D9",
  startDate: `2025-07-14`,
  description: "Latest Card: Theme Scout",
  detailsImage: "cards/Ra_bits/Unbreakable_Gaze_Hajime_Shino.webp",
  detailsDescription: "(Unbreakable Gaze) Hajime Shino"
},
{
  id: 38,
  name: `Keito Hasumi`,
  avatar: `images/btn-hasumi_keito.webp`,
  borderColor: "#316745",
  startDate: `2024-12-31`,
  description: "Latest Card: Unit Event",
  detailsImage: "cards/Akatsuki/The_Legend_of_KAGETSU_of_Revolution_Keito_Hasumi.webp",
  detailsDescription: "(The Legend of KAGETSU of Revolution) Keito Hasumi"
},
{
  id: 39,
  name: `Kuro Kiryu`,
  avatar: `images/btn-kiryu_kuro.webp`,
  borderColor: "#E83929",
  startDate: `2025-08-14`,
  description: "Latest Card: Theme Scout",
  detailsImage: "cards/Akatsuki/Oniyasha's_Karma_Kuro_Kiryu.webp",
  detailsDescription: "(Oniyasha's Karma) Kuro Kiryu"
},
{
  id: 40,
  name: `Souma Kanzaki`,
  avatar: `images/btn-kanzaki_souma.webp`,
  borderColor: "#5654A2",
  startDate: `2025-09-30`,
  description: "Latest Card: Unit Event",
  detailsImage: "cards/Akatsuki/Butterfly_That_Seeks_Freedom_Souma_Kanzaki.webp",
  detailsDescription: "(Butterfly That Seeks Freedom) Souma Kanzaki"
},
{
  id: 41,
  name: `Ibuki Taki`,
  avatar: `images/btn-taki_ibuki.webp`,
  borderColor: "#66BBCC",
  startDate: `2025-07-25`,
  description: "Latest Card: Feature Scout 2",
  detailsImage: "cards/Akatsuki/Spontaneous_Daybreak_Ibuki_Taki.webp",
  detailsDescription: "(Spontaneous Daybreak) Ibuki Taki"
},
{
  id: 42,
  name: `Tsukasa Suou`,
  avatar: `images/btn-suou_tsukasa.webp`,
  borderColor: "#942343",
  startDate: `2025-03-14`,
  description: "Latest Card: Theme Scout",
  detailsImage: "cards/Knights/The_Fallen_Angel's_Warning_Tsukasa_Suou.webp",
  detailsDescription: "(The Fallen Angel's Warning) Tsukasa Suou"
},
{
  id: 43,
  name: `Leo Tsukinaga`,
  avatar: `images/btn-tsukinaga_leo.webp`,
  borderColor: "#EC6D51",
  startDate: `2025-06-14`,
  description: "Latest Card: Cross Scout",
  detailsImage: "cards/Knights/Fairy's_Aid_Leo_Tsukinaga.webp",
  detailsDescription: "(Fairy's Aid) Leo Tsukinaga"
},
{
  id: 44,
  name: `Izumi Sena`,
  avatar: `images/btn-sena_izumi.webp`,
  borderColor: "#BBDBF3",
  startDate: `2025-10-14`,
  description: "Latest Card: Theme Scout",
  detailsImage: "cards/Knights/Séance_Lead_Izumi_Sena.webp",
  detailsDescription: "(Séance Lead) Izumi Sena"
},
{
  id: 45,
  name: `Ritsu Sakuma`,
  avatar: `images/btn-sakuma_ritsu.webp`,
  borderColor: "#001E43",
  startDate: `2025-08-15`,
  description: "Latest Card: Tour Event",
  detailsImage: "cards/Knights/FEARLESS_BUNNY_Ritsu_Sakuma.webp",
  detailsDescription: "(FEARLESS BUNNY) Ritsu Sakuma"
},
{
  id: 46,
  name: `Arashi Narukami`,
  avatar: `images/btn-narukami_arashi.webp`,
  borderColor: "#EDDE7B",
  startDate: `2025-09-29`,
  description: "Latest Card: Theme Scout",
  detailsImage: "cards/Knights/Search_Witch_Arashi_Narukami.webp",
  detailsDescription: "(Search Witch) Arashi Narukami"
},
{
  id: 47,
  name: `Natsume Sakasaki`,
  avatar: `images/btn-sakasaki_natsume.webp`,
  borderColor: "#D70035",
  startDate: `2025-05-31`,
  description: "Latest Card: Unit Event",
  detailsImage: "cards/Switch/Connecting_Dimensions_and_Worlds_Natsume_Sakasaki.webp",
  detailsDescription: "(Connecting Dimensions and Worlds) Natsume Sakasaki"
},
{
  id: 48,
  name: `Tsumugi Aoba`,
  avatar: `images/btn-aoba_tsumugi.webp`,
  borderColor: "#00608D",
  startDate: `2025-06-10`,
  description: "Latest Card: Cross Scout",
  detailsImage: "cards/Switch/Fairy's_Pastime_Tsumugi_Aoba.webp",
  detailsDescription: "(Fairy's Pastime) Tsumugi Aoba"
},
{
  id: 49,
  name: `Sora Harukawa`,
  avatar: `images/btn-harukawa_sora.webp`,
  borderColor: "#FFF352",
  startDate: `2025-10-10`,
  description: "Latest Card: Bright me up!! Scout Stage",
  detailsImage: "cards/Switch/Adding_Up_Smiles_Sora_Harukawa.webp",
  detailsDescription: "(Adding Up Smiles) Sora Harukawa"
},
{
  id: 50,
  name: `Madara Mikejima`,
  avatar: `images/btn-mikejima_madara.webp`,
  borderColor: "#622D18",
  startDate: `2024-10-31`,
  description: "Latest Card: Unit Event",
  detailsImage: "cards/MaM/Lupine's_True_Feelings_Madara_Mikejima.webp",
  detailsDescription: "(Lupine's True Feelings) Madara Mikejima"
},
{
  id: 51,
  name: `Esu Sagiri`,
  avatar: `images/btn-esu.webp`,
  borderColor: "#80FFF4",
  startDate: `2025-05-15`,
  description: "Latest Card: Tour Event",
  detailsImage: "cards/Special_for_Princess/Destined_Sailing_Ceremony_Esu.webp",
  detailsDescription: "(Destined Sailing Ceremony) Esu"
},
{
  id: 52,
  name: `Kanna Natsu`,
  avatar: `images/btn-kanna.webp`,
  borderColor: "#8ACCB8",
  startDate: `2025-09-15`,
  description: "Latest Card: Unit Event",
  detailsImage: "cards/Special_for_Princess/Unicorn's_Smile_Kanna.webp",
  detailsDescription: "(Unicorn's Smile) Kanna"
},
{
  id: 53,
  name: `Fuyume Hanamura`,
  avatar: `images/btn-yume.webp`,
  borderColor: "#CCADD9",
  startDate: `2024-11-30`,
  description: "Latest Card: Unit Event",
  detailsImage: "cards/Special_for_Princess/Märchen_White_Yume.webp",
  detailsDescription: "(Märchen White) Fuyume Hanamura"
},
{
  id: 54,
  name: `Raika Hojo`,
  avatar: `images/btn-raika.webp`,
  borderColor: "#298C7C",
  startDate: `2025-10-15`,
  description: "Latest Card: Tour Event",
  detailsImage: "cards/Special_for_Princess/Monstrous_Performer_Raika.webp",
  detailsDescription: "(Monstrous Performer) Raika"
},
{
  id: 55,
  name: `Juis Kojika`,
  avatar: `images/btn-kojika_juis.webp`,
  borderColor: "#70ab5e",
  startDate: `-`,
  description: "-",
  detailsImage: "cards/MELLOW_DEAR_US/full-kojika_juis.webp",
  detailsDescription: "-",
  isNew: true
},
{
  id: 56,
  name: `Nozomi Madoka`,
  avatar: `images/btn-madoka_nozomi.webp`,
  borderColor: "#881f4a",
  startDate: `-`,
  description: "-",
  detailsImage: "cards/MELLOW_DEAR_US/full-madoka_nozomi.webp",
  detailsDescription: "-",
  isNew: true
},
{
  id: 57,
  name: `Mashu Kuon`,
  avatar: `images/btn-kuon_mashu.webp`,
  borderColor: "#ec938c",
  startDate: `-`,
  description: "-",
  detailsImage: "cards/MELLOW_DEAR_US/full-kuon_mashu.webp",
  detailsDescription: "-",
  isNew: true
},
{
  id: 58,
  name: `Chitose Tsuzura`,
  avatar: `images/btn-tsuzura_chitose.webp`,
  borderColor: "#424355",
  startDate: `-`,
  description: "-",
  detailsImage: "cards/MELLOW_DEAR_US/full-tsuzura_chitose.webp",
  detailsDescription: "-",
  isNew: true
}];

function openModal(idol) {
  const modal = document.getElementById("details-modal");
  document.getElementById("modal-name").textContent = idol.name;
  document.getElementById("modal-image").src = idol.detailsImage; 
  document.getElementById("modal-description").textContent = idol.detailsDescription; 
  modal.classList.add("active");
}

function closeModal() {
  document.getElementById("details-modal").classList.remove("active");
}

document.getElementById("details-modal").addEventListener("click", (e) => {
  if (e.target.id === "details-modal") closeModal();
});
document.getElementById("close-modal").addEventListener("click", closeModal);

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

    const detailsBtn = document.createElement("button");
    detailsBtn.className = "details-btn";
    detailsBtn.textContent = "Details";
    detailsBtn.addEventListener("click", () => openModal(idol));
    card.appendChild(detailsBtn);

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
