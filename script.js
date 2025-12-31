function formatDate(dateString) {
  if (!dateString || dateString === "-") return "-";
  const date = new Date(dateString);
  if (isNaN(date)) return dateString;
  return date.toLocaleDateString("en-US", { 
    year: "numeric", 
    month: "long", 
    day: "numeric",
    timeZone: "Asia/Tokyo"
  });
}

function getJSTDate() {
  const now = new Date();
  return new Date(now.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
}

function calculateDays(startDate) {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  const JST_OFFSET_MS = 9 * 60 * 60 * 1000; 
  const CUTOFF_HOUR = 15; 

  const start = new Date(startDate);
  const nowUtc = Date.now();
  
  const nowJst = new Date(nowUtc + JST_OFFSET_MS);
  
  const todayJstCutoff = new Date(nowJst);
  todayJstCutoff.setUTCHours(CUTOFF_HOUR, 0, 0, 0);
  
  const effectiveNowJst = nowJst < todayJstCutoff 
    ? new Date(nowJst.getTime() - MS_PER_DAY) 
    : nowJst;
  
  const daysNowJST = Math.floor(effectiveNowJst.getTime() / MS_PER_DAY);
  const daysStartJST = Math.floor((start.getTime() + JST_OFFSET_MS) / MS_PER_DAY);

  return Math.max(0, daysNowJST - daysStartJST);
}

function scheduleDailyRefreshAt15JST() {
  const nowJst = getJSTDate();
  
  const targetJst = new Date(nowJst);
  targetJst.setHours(15, 0, 0, 0);
  
  if (targetJst <= nowJst) {
    targetJst.setDate(targetJst.getDate() + 1);
  }
  
  const delay = targetJst.getTime() - nowJst.getTime();
  
  console.log(`Next refresh in ${Math.round(delay / 1000 / 60)} minutes at 15:00 JST`);
  
  setTimeout(() => {
    console.log('⏰ Refreshing idols at 15:00 JST...');
    renderIdols();
    scheduleDailyRefreshAt15JST(); 
  }, delay);
}

scheduleDailyRefreshAt15JST();

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
  name: `Hokuto Hidaka`,
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
  startDate: `2025-12-31`,
  description: "Latest Card: Tour Event",
  detailsImage: "cards/Trickstar/ダイヤモンドの希望_Makoto_Yuuki.webp",
  detailsDescription: "[ダイヤモンドの希望] Makoto Yuuki"
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
  startDate: `2025-11-30`,
  description: "Latest Card: Unit Event",
  detailsImage: "cards/RYUSEITAI/Light_Up_the_Light_of_Justice_Chiaki_Morisawa.webp",
  detailsDescription: "(Light Up the Light of Justice) Chiaki Morisawa"
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
  startDate: `2025-12-30`,
  description: "Latest Card: Theme Scout",
  detailsImage: "cards/Alkaloid/天に通ず想い_Hiiro_Amagi.webp",
  detailsDescription: "[天に通ず想い] Hiiro Amagi"
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
  startDate: `2025-12-10`,
  description: "Latest Card: Bright me up!! Scout Stage",
  detailsImage: "cards/Alkaloid/Good_Fortune_Comes_Unexpectedly_Tatsumi_Kazehaya.webp",
  detailsDescription: "(Good Fortune Comes Unexpectedly) Tatsumi Kazehaya"
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
  startDate: `2025-12-15`,
  description: "Latest Card: Unit Event",
  detailsImage: "cards/Valkyrie/A_Needle's_Tip_of_Passion_Shu_Itsuki.webp",
  detailsDescription: "(A Needle's Tip of Passion) Shu Itsuki"
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
  startDate: `2025-11-25`,
  description: "Latest Card: Bright me up!! Scout Stage",
  detailsImage: "cards/2wink/A_Longing_Star_Yuta_Aoi.webp",
  detailsDescription: "(A Longing Star) Yuta Aoi"
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
  startDate: `2025-12-25`,
  description: "Latest Card: Bright me up!! Scout Stage",
  detailsImage: "cards/UNDEAD/嵐の前の静けさ_Rei_Sakuma.webp",
  detailsDescription: "[嵐の前の静けさ] Rei Sakuma"
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
  startDate: `2025-12-31`,
  description: "Latest Card: Tour Event",
  detailsImage: "cards/UNDEAD/タイヤモンドの野望_Koga_Oogami.webp",
  detailsDescription: "[タイヤモンドの野望] Koga Oogami"
},
{
  id: 33,
  name: `Adonis Otogari`,
  avatar: `images/btn-otogari_adonis.webp`,
  borderColor: "#915DA3",
  startDate: `2025-11-10`,
  description: "Latest Card: Bright me up!! Scout Stage",
  detailsImage: "cards/UNDEAD/What_Surrounds_Dreams_Adonis_Otogari.webp",
  detailsDescription: "(What Surrounds Dreams) Adonis Otogari"
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
  startDate: `2025-11-15`,
  description: "Latest Card: Shuffle Event",
  detailsImage: "cards/Ra_bits/Hooray_Hooray_ResQ_Nazuna_Nito.webp",
  detailsDescription: "(Hooray, Hooray, ResQ) Nazuna Nito"
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
  startDate: `2025-12-14`,
  description: "Latest Card: Theme Scout",
  detailsImage: "cards/Akatsuki/Fake_Dead_Keito_Hasumi.webp",
  detailsDescription: "(Fake Dead) Keito Hasumi"
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
  startDate: `2025-11-14`,
  description: "Latest Card: Theme Scout",
  detailsImage: "cards/Knights/Go_Fight_ResQ_Leo_Tsukinaga.webp",
  detailsDescription: "(Go, Fight, ResQ) Leo Tsukinaga"
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
  name: `Esu`,
  avatar: `images/btn-esu.webp`,
  borderColor: "#80FFF4",
  startDate: `2025-11-29`,
  description: "Latest Card: Theme Scout",
  detailsImage: "cards/Special_for_Princess/Brand_New_World_Esu.webp",
  detailsDescription: "(Brand New World) Esu"
},
{
  id: 52,
  name: `Kanna`,
  avatar: `images/btn-kanna.webp`,
  borderColor: "#8ACCB8",
  startDate: `2025-09-15`,
  description: "Latest Card: Unit Event",
  detailsImage: "cards/Special_for_Princess/Unicorn's_Smile_Kanna.webp",
  detailsDescription: "(Unicorn's Smile) Kanna"
},
{
  id: 53,
  name: `Yume`,
  avatar: `images/btn-yume.webp`,
  borderColor: "#CCADD9",
  startDate: `2024-11-30`,
  description: "Latest Card: Unit Event",
  detailsImage: "cards/Special_for_Princess/Märchen_White_Yume.webp",
  detailsDescription: "(Märchen White) Yume"
},
{
  id: 54,
  name: `Raika`,
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

const cardCountData = {
  1: { five: 12, four: 14, three: 17 }, // Eichi Tenshouin
  2: { five: 11, four: 14, three: 19 }, // Wataru Hibiki
  3: { five: 11, four: 16, three: 16 }, // Tori Himemiya
  4: { five: 11, four: 16, three: 18 }, // Yuzuru Fushimi
  5: { five: 13, four: 14, three: 15 }, // Hokuto Hidka
  6: { five: 11, four: 16, three: 20 }, // Subaru Akehoshi
  7: { five: 11, four: 18, three: 19 }, // Makoto Yuuki
  8: { five: 11, four: 16, three: 18 }, // Mao Isara
  9: { five: 10, four: 16, three: 16 }, // Tetora Nagumo
  10: { five: 10, four: 15, three: 18 }, // Midori Takamine
  11: { five: 10, four: 16, three: 16 }, // Shinobu Sengoku
  12: { five: 12, four: 15, three: 17 }, // Chiaki Morisawa
  13: { five: 9, four: 17, three: 17 }, // Kanata Shinkai
  14: { five: 12, four: 15, three: 16 }, // Hiiro Amagi
  15: { five: 10, four: 15, three: 17 }, // Aira Shiratori
  16: { five: 10, four: 16, three: 17 }, // Mayoi Ayase
  17: { five: 10, four: 15, three: 16 }, // Tatsumi Kazehaya
  18: { five: 11, four: 13, three: 21 }, // Nagisa Ran
  19: { five: 10, four: 15, three: 17 }, // Hiyori Tomoe
  20: { five: 11, four: 14, three: 18 }, // Ibara Saegusa
  21: { five: 10, four: 17, three: 17 }, // Jun Sazanami
  22: { five: 14, four: 15, three: 15 }, // Shu Itsuki
  23: { five: 11, four: 15, three: 18 }, // Mika Kagehira
  24: { five: 12, four: 17, three: 16 }, // Hinata Aoi
  25: { five: 13, four: 16, three: 16 }, // Yuta Aoi
  26: { five: 11, four: 14, three: 16 }, // Rinne Amagi
  27: { five: 9, four: 16, three: 16 }, // HiMERU
  28: { five: 9, four: 18, three: 19 }, // Kohaku Oukawa
  29: { five: 9, four: 16, three: 17 }, // Niki Shiina
  30: { five: 13, four: 17, three: 17 }, // Rei Sakuma
  31: { five: 11, four: 14, three: 21 }, // Kaoru Hakaze
  32: { five: 11, four: 18, three: 18 }, // Koga Oogami
  33: { five: 11, four: 15, three: 19 }, // Adonis Otogari
  34: { five: 12, four: 13, three: 20 }, // Tomoya Mashiro
  35: { five: 11, four: 15, three: 19 }, // Nazuna Nito
  36: { five: 10, four: 15, three: 19 }, // Mitsuru Tenma
  37: { five: 13, four: 16, three: 20 }, // Hajime Shino
  38: { five: 13, four: 14, three: 16 }, // Keito Hasumi
  39: { five: 11, four: 15, three: 18 }, // Kuro Kiryu
  40: { five: 10, four: 16, three: 16 }, // Souma Kanzaki
  41: { five: 2, four: 5, three: 4 }, // Ibuki Taki
  42: { five: 12, four: 15, three: 17 }, // Tsukasa Suou
  43: { five: 12, four: 16, three: 17 }, // Leo Tsukinaga
  44: { five: 11, four: 17, three: 17 }, // Izumi Sena
  45: { five: 12, four: 17, three: 17 }, // Ritsu Sakuma
  46: { five: 11, four: 16, three: 19 }, // Arashi Narukami
  47: { five: 12, four: 15, three: 17 }, // Natsume Sakasaki
  48: { five: 10, four: 15, three: 19 }, // Tsumugi Aoba
  49: { five: 10, four: 16, three: 16 }, // Sora Harukawa
  50: { five: 14, four: 16, three: 14 }, // Madara Mikejima
  51: { five: 4, four: 4, three: 5 }, // Esu
  52: { five: 2, four: 5, three: 7 }, // Kanna
  53: { five: 2, four: 5, three: 6 }, // Yume
  54: { five: 2, four: 5, three: 4 }, // Raika
  55: { five: "-", four: "-", three: "-" }, // Juis Kojika
  56: { five: "-", four: "-", three: "-" }, // Nozomi Madoka
  57: { five: "-", four: "-", three: "-" }, // Mashu Kuon
  58: { five: "-", four: "-", three: "-" } // Chitose Tsuzura
};

function openSidePanel(idol) {
  const panel = document.getElementById("side-panel");
  if (!panel || !idol) return;

  const nameEl = document.getElementById("side-panel-name");
  const imgEl = document.getElementById("side-panel-image");
  const descEl = document.getElementById("side-panel-description");
  const dateEl = document.getElementById("side-panel-date");
  const loaderEl = document.getElementById("side-image-loader");
  const statsEl = document.getElementById("side-card-stats");

  const isAlreadyOpen = panel.classList.contains("active");

  if (isAlreadyOpen) {
    nameEl.classList.add("fade-out");
    imgEl.classList.add("fade-out");
    descEl.parentElement.classList.add("fade-out-right");
    dateEl.parentElement.classList.add("fade-out-right");
    if (statsEl.style.display === "flex") {
      statsEl.classList.add("fade-out-right");
    }

    setTimeout(() => {
      nameEl.textContent = idol.name || "";
      descEl.textContent = idol.detailsDescription || "-";
      dateEl.textContent = formatDate(idol.startDate);

      const cardStats = cardCountData[idol.id];
      if (cardStats && statsEl) {
        document.getElementById("side-stat-five").textContent = cardStats.five;
        document.getElementById("side-stat-four").textContent = cardStats.four;
        document.getElementById("side-stat-three").textContent = cardStats.three;
        statsEl.style.display = "flex";
      } else if (statsEl) {
        statsEl.style.display = "none";
      }

      imgEl.style.display = "none";
      loaderEl.style.display = "flex";

      const img = new Image();
      img.onload = function() {
        imgEl.src = idol.detailsImage || "";
        imgEl.style.display = "block";
        loaderEl.style.display = "none";
      };
      img.onerror = function() {
        loaderEl.style.display = "none";
        imgEl.style.display = "block";
        imgEl.src = "";
      };
      img.src = idol.detailsImage || "";
      
      nameEl.classList.remove("fade-out");
      nameEl.classList.add("fade-in");
      imgEl.classList.remove("fade-out");
      imgEl.classList.add("fade-in");
      descEl.parentElement.classList.remove("fade-out-right");
      descEl.parentElement.classList.add("fade-in-left");
      dateEl.parentElement.classList.remove("fade-out-right");
      dateEl.parentElement.classList.add("fade-in-left");
      if (statsEl.style.display === "flex") {
        statsEl.classList.remove("fade-out-right");
        statsEl.classList.add("fade-in-left");
      }

      setTimeout(() => {
        nameEl.classList.remove("fade-in");
        imgEl.classList.remove("fade-in");
        descEl.parentElement.classList.remove("fade-in-left");
        dateEl.parentElement.classList.remove("fade-in-left");
        statsEl.classList.remove("fade-in-left");
      }, 300);
    }, 300);
  } else {
    nameEl.textContent = idol.name || "";
    descEl.textContent = idol.detailsDescription || "-";
    dateEl.textContent = formatDate(idol.startDate);

    const cardStats = cardCountData[idol.id];
    if (cardStats && statsEl) {
      document.getElementById("side-stat-five").textContent = cardStats.five;
      document.getElementById("side-stat-four").textContent = cardStats.four;
      document.getElementById("side-stat-three").textContent = cardStats.three;
      statsEl.style.display = "flex";
    } else if (statsEl) {
      statsEl.style.display = "none";
    }

    imgEl.style.display = "none";
    loaderEl.style.display = "flex";

    const img = new Image();
    img.onload = function() {
      imgEl.src = idol.detailsImage || "";
      imgEl.style.display = "block";
      loaderEl.style.display = "none";
    };
    img.onerror = function() {
      loaderEl.style.display = "none";
      imgEl.style.display = "block";
      imgEl.src = "";
    };
    img.src = idol.detailsImage || "";

    panel.classList.add("active");
  }
}

function closeSidePanel() {
  const panel = document.getElementById("side-panel");
  if (panel) {
    panel.classList.remove("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.querySelector(".side-close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeSidePanel);
  }
});

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

let previousIdolState = [];
let isFirstLoad = true;

function renderIdols() {
  idols.forEach(idol => {
    idol.days = calculateDays(idol.startDate);
  });

  idols.sort((a, b) => b.days - a.days);
  
  idols.forEach((idol, index) => {
    idol.rank = index + 1;
  });

  const storedState = localStorage.getItem('idolLeaderboardState');
  
  if (isFirstLoad) {
    isFirstLoad = false;
    
    if (storedState) {
      previousIdolState = JSON.parse(storedState);
      
      const hasChanges = idols.some(idol => {
        const prev = previousIdolState.find(p => p.id === idol.id);
        return !prev || prev.days !== idol.days || prev.rank !== idol.rank;
      });
      
      if (hasChanges) {
        renderCardsWithStoredState();
        setTimeout(() => {
          animateLeaderboardChanges();
        }, 500);
      } else {
        renderCardsInitial();
      }
    } else {
      renderCardsInitial();
    }
  } else {
    animateLeaderboardChanges();
  }
  
  const currentState = idols.map(idol => ({
    id: idol.id,
    rank: idol.rank,
    days: idol.days
  }));
  localStorage.setItem('idolLeaderboardState', JSON.stringify(currentState));
}

function renderCardsInitial() {
  const container = document.getElementById("idol-container");
  container.innerHTML = "";
  
  idols.forEach((idol, index) => {
    const card = createIdolCard(idol);
    
    card.style.transition = 'all 0.5s ease';
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    container.appendChild(card);
    
    card.offsetHeight;
    
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 50 + 50); 
  });
  
  previousIdolState = idols.map(idol => ({
    id: idol.id,
    rank: idol.rank,
    days: idol.days
  }));
}

function renderCardsWithStoredState() {
  const container = document.getElementById("idol-container");
  container.innerHTML = "";
  
  previousIdolState.forEach((prevIdol, index) => {
    const currentIdol = idols.find(i => i.id === prevIdol.id);
    if (!currentIdol) return;
    
    const tempRank = currentIdol.rank;
    const tempDays = currentIdol.days;
    currentIdol.rank = prevIdol.rank;
    currentIdol.days = prevIdol.days;
    
    const card = createIdolCard(currentIdol);
    card.style.opacity = '1';
    container.appendChild(card);
    
    currentIdol.rank = tempRank;
    currentIdol.days = tempDays;
  });
  
  const sortedCards = Array.from(container.children).sort((a, b) => {
    const aId = parseInt(a.dataset.idolId);
    const bId = parseInt(b.dataset.idolId);
    const aOldRank = previousIdolState.find(p => p.id === aId)?.rank || 999;
    const bOldRank = previousIdolState.find(p => p.id === bId)?.rank || 999;
    return aOldRank - bOldRank;
  });
  
  container.innerHTML = '';
  sortedCards.forEach(card => container.appendChild(card));
}

function animateLeaderboardChanges() {
  const container = document.getElementById("idol-container");
  
  idols.forEach(idol => {
    const previousIdol = previousIdolState.find(p => p.id === idol.id);
    if (!previousIdol) return;
    
    const oldDays = previousIdol.days;
    const newDays = idol.days;
    
    if (oldDays !== newDays) {
      const cardElement = Array.from(container.children).find(card => {
        const nameEl = card.querySelector('.idol-name');
        return nameEl && nameEl.textContent === idol.name;
      });
      
      if (cardElement) {
        const daysElement = cardElement.querySelector('.combo');
        if (daysElement) {
          animateDayCount(daysElement, oldDays, newDays);
          
          setTimeout(() => {
            daysElement.classList.add('updated');
            setTimeout(() => daysElement.classList.remove('updated'), 600);
          }, 500);
        }
      }
    }
  });
  
  setTimeout(() => {
    reorganizeLeaderboard();
  }, 1500);
}

function animateDayCount(element, oldValue, newValue) {
  const duration = 1000; 
  const steps = 30;
  const stepDuration = duration / steps;
  const valueChange = newValue - oldValue;
  const stepValue = valueChange / steps;
  
  let currentStep = 0;
  
  const interval = setInterval(() => {
    currentStep++;
    const currentValue = Math.round(oldValue + (stepValue * currentStep));
    element.textContent = `${currentValue} day/s`;
    
    if (currentStep >= steps) {
      clearInterval(interval);
      element.textContent = `${newValue} day/s`;
    }
  }, stepDuration);
}

function reorganizeLeaderboard() {
  const container = document.getElementById("idol-container");
  
  const currentCards = Array.from(container.children).map(card => {
    const nameEl = card.querySelector('.idol-name');
    const name = nameEl ? nameEl.textContent : '';
    const idol = idols.find(i => i.name === name);
    return {
      element: card,
      idol: idol,
      oldRank: previousIdolState.find(p => p.id === idol?.id)?.rank || 0
    };
  });
  
  currentCards.sort((a, b) => (a.idol?.rank || 999) - (b.idol?.rank || 999));
  
  currentCards.forEach((cardData, newIndex) => {
    const card = cardData.element;
    const idol = cardData.idol;
    if (!idol) return;
    
    const oldRank = cardData.oldRank;
    const newRank = idol.rank;
    
    card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    
    if (oldRank !== newRank) {
      card.classList.add('rank-changed');
      
      const ribbon = card.querySelector('.ribbon');
      if (ribbon) {
        ribbon.className = getRibbonClass(newRank);
        ribbon.textContent = getRibbonText(newRank);
        
        if (newRank < oldRank) {
          ribbon.classList.add('rank-up');
        } else {
          ribbon.classList.add('rank-down');
        }
        
        setTimeout(() => {
          ribbon.classList.remove('rank-up', 'rank-down');
        }, 800);
      }
      
      setTimeout(() => {
        card.classList.remove('rank-changed');
      }, 800);
    }
    
    container.appendChild(card);
  });
  
  previousIdolState = idols.map(idol => ({
    id: idol.id,
    rank: idol.rank,
    days: idol.days
  }));
}

function createIdolCard(idol) {
  const card = document.createElement("div");
  card.className = "idol-card";
  card.style.borderColor = idol.borderColor;
  card.dataset.idolId = idol.id;

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

  const detailsBtn = document.createElement("button");
  detailsBtn.className = "details-btn";
  detailsBtn.textContent = "Details";
  detailsBtn.addEventListener("click", () => openSidePanel(idol));
  card.appendChild(detailsBtn);

  if (idol.isNew) {
    const newLabel = document.createElement("div");
    newLabel.className = "new-label";
    newLabel.textContent = "NEW";
    card.appendChild(newLabel);
  }

  return card;
}

function updateIdolStartDate(idolId, newStartDate) {
  const idol = idols.find(i => i.id === idolId);
  if (idol) {
    idol.startDate = newStartDate;
    console.log(`Updated ${idol.name} to start date: ${newStartDate}`);
    renderIdols();
  } else {
    console.log(`Idol with ID ${idolId} not found`);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    renderIdols();
  }, 100);
});

setInterval(renderIdols, 60 * 60 * 1000);

document.addEventListener("DOMContentLoaded", ()=>{const btn=document.querySelector(".hamburger"),body=document.body; if(!btn) return; btn.addEventListener("click", ()=>{const open=body.classList.toggle("nav-open"); btn.setAttribute("aria-expanded", open?"true":"false");}); window.addEventListener("resize", ()=>{ if(window.innerWidth>700 && body.classList.contains("nav-open")){ body.classList.remove("nav-open"); btn.setAttribute("aria-expanded","false"); }}); document.addEventListener("click",(e)=>{ if(!body.classList.contains("nav-open")) return; const inside = e.target.closest(".navbar"); if(!inside){ body.classList.remove("nav-open"); btn.setAttribute("aria-expanded","false"); }});});

const firebaseConfig = {
  apiKey: "AIzaSyCyHWUsaktKrSAnDcLAqyfnNiTQAxaeeXY",
  authDomain: "my-website-comments-5ea35.firebaseapp.com",
  databaseURL: "https://my-website-comments-5ea35-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-website-comments-5ea35",
  storageBucket: "my-website-comments-5ea35.firebasestorage.app",
  messagingSenderId: "305328978160",
  appId: "1:305328978160:web:3085ac2e3e89c54776aa35"
};

let firebaseApp, firebaseDatabase;
let firebaseInitialized = false;
let registeredUsernames = new Set(); 

(async () => {
  try {
    const [appModule, dbModule] = await Promise.all([
      import("https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"),
      import("https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js")
    ]);
    
    window.firebaseModules = {
      app: appModule,
      db: dbModule
    };
    
    firebaseApp = appModule.initializeApp(firebaseConfig);
    firebaseDatabase = dbModule.getDatabase(firebaseApp);
    firebaseInitialized = true;
    
    console.log('✅ Firebase initialized successfully!');
    
    loadSavedUserData();
    
    loadRegisteredUsernames();
    loadComments();
  } catch (error) {
    showError("Failed to initialize Firebase: " + error.message);
    console.error("Firebase initialization error:", error);
  }
})();

let currentProfilePic = null;
let currentUsername = null;
let commentImage = null; 

function loadSavedUserData() {
  const savedUsername = localStorage.getItem('commentUsername');
  const savedProfilePic = localStorage.getItem('commentProfilePic');
  
  if (savedUsername) {
    document.getElementById("username").value = savedUsername;
    currentUsername = savedUsername;
  }
  
  if (savedProfilePic) {
    currentProfilePic = savedProfilePic;
    updatePreview();
  }
}

function saveUserData(username, profilePic) {
  localStorage.setItem('commentUsername', username);
  if (profilePic) {
    localStorage.setItem('commentProfilePic', profilePic);
  }
}

function loadRegisteredUsernames() {
  if (!firebaseInitialized || !window.firebaseModules) {
    setTimeout(loadRegisteredUsernames, 100);
    return;
  }

  const { ref, onValue } = window.firebaseModules.db;
  const usernamesRef = ref(firebaseDatabase, "registeredUsernames");
  
  onValue(usernamesRef, (snapshot) => {
    const data = snapshot.val();
    registeredUsernames.clear();
    
    if (data) {
      Object.values(data).forEach(username => {
        registeredUsernames.add(username.toLowerCase());
      });
    }
    console.log(`📋 Loaded ${registeredUsernames.size} registered usernames`);
  });
}

async function isUsernameTaken(username) {
  return registeredUsernames.has(username.toLowerCase());
}

async function registerUsername(username) {
  if (!firebaseInitialized || !window.firebaseModules) return false;

  const { ref, push } = window.firebaseModules.db;
  const usernamesRef = ref(firebaseDatabase, "registeredUsernames");
  
  try {
    await push(usernamesRef, username);
    registeredUsernames.add(username.toLowerCase());
    return true;
  } catch (error) {
    console.error("Error registering username:", error);
    return false;
  }
}

document.getElementById("postBtn").addEventListener("click", postComment);
document.getElementById("username").addEventListener("input", updatePreview);
document.getElementById("profilePic").addEventListener("change", handleFileSelect);

const commentImageInput = document.getElementById("commentImage");
if (commentImageInput) {
  commentImageInput.addEventListener("change", handleCommentImageSelect);
}

document.getElementById("username").addEventListener("blur", async function() {
  await checkUsernameAvailability();
});

document.getElementById("username").addEventListener("input", function() {
  hideUsernameError();
});

async function checkUsernameAvailability() {
  const username = document.getElementById("username").value.trim();
  if (!username) {
    hideUsernameError();
    return true;
  }
  
  const savedUsername = localStorage.getItem('commentUsername');
  if (savedUsername && savedUsername.toLowerCase() === username.toLowerCase()) {
    hideUsernameError();
    return true;
  }
  
  const taken = await isUsernameTaken(username);
  if (taken) {
    showUsernameError("⚠️ This username is already taken. Please choose another.");
    return false;
  } else {
    hideUsernameError();
    return true;
  }
}

function showError(message) {
  const errorDiv = document.getElementById("errorMessage");
  if (errorDiv) {
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
  }
}

function hideError() {
  const errorDiv = document.getElementById("errorMessage");
  if (errorDiv) {
    errorDiv.style.display = "none";
  }
}

function showUsernameError(message) {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    animation: fadeIn 0.3s ease;
  `;
  
  const modal = document.createElement('div');
  modal.style.cssText = `
    background: white;
    padding: 30px;
    border-radius: 12px;
    max-width: 400px;
    width: 90%;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    animation: slideUp 0.3s ease;
  `;
  
  modal.innerHTML = `
    <div style="text-align: center;">
      <div style="font-size: 48px; margin-bottom: 15px;">⚠️</div>
      <h3 style="color: #dc2626; margin-bottom: 10px; font-size: 20px;">Username Taken</h3>
      <p style="color: #64748b; margin-bottom: 20px; line-height: 1.5;">${message}</p>
      <button id="closeErrorModal" style="
        background: linear-gradient(to right, #60a5fa, #818cf8);
        color: white;
        border: none;
        padding: 10px 30px;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.3s;
      ">OK, I'll Choose Another</button>
    </div>
  `;
  
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideUp {
      from { transform: translateY(30px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
  
  const closeBtn = document.getElementById('closeErrorModal');
  closeBtn.addEventListener('click', () => {
    overlay.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => overlay.remove(), 300);
  });
  
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.style.animation = 'fadeOut 0.3s ease';
      setTimeout(() => overlay.remove(), 300);
    }
  });
  
  const usernameInput = document.getElementById("username");
  usernameInput.style.borderColor = "#dc2626";
  usernameInput.focus();
}

function hideUsernameError() {
  const errorDiv = document.getElementById("usernameError");
  const usernameInput = document.getElementById("username");
  
  if (errorDiv) {
    errorDiv.style.display = "none";
  }
  usernameInput.style.borderColor = "#e2e8f0";
}

function loadComments() {
  if (!firebaseInitialized || !window.firebaseModules) {
    setTimeout(loadComments, 100);
    return;
  }

  const commentsList = document.getElementById("commentsList");
  if (!commentsList) return;
  
  commentsList.innerHTML = '<div class="loading">Loading comments...</div>';

  const { ref, onValue } = window.firebaseModules.db;
  const commentsRef = ref(firebaseDatabase, "comments");
  
  onValue(commentsRef, (snapshot) => {
    const data = snapshot.val();
    const comments = [];

    if (data) {
      Object.keys(data).forEach((key) => {
        comments.push({ id: key, ...data[key] });
      });
    }

    comments.sort((a, b) => b.timestamp - a.timestamp);
    displayComments(comments);
  }, (error) => {
    console.error("Error loading comments:", error);
    commentsList.innerHTML = '<div class="empty-state">Error loading comments. Check console.</div>';
  });
}

async function getProfilePic(username) {
  if (!firebaseInitialized || !window.firebaseModules) return null;

  const { ref, onValue } = window.firebaseModules.db;
  const profileKey = username.toLowerCase().replace(/[^a-z0-9]/g, "_");
  const profileRef = ref(firebaseDatabase, `profiles/${profileKey}`);
  
  return new Promise((resolve) => {
    onValue(profileRef, (snapshot) => {
      resolve(snapshot.val());
    }, { onlyOnce: true });
  });
}

function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file) {
    if (file.size > 5000000) { 
      alert("File is too large. Please choose an image under 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
      currentProfilePic = event.target.result;
      updatePreview();
      const fileNameEl = document.getElementById("fileName");
      if (fileNameEl) {
        fileNameEl.textContent = `✓ ${file.name}`;
      }
      
      const username = document.getElementById("username").value.trim();
      if (username) {
        saveUserData(username, currentProfilePic);
      }
    };
    reader.readAsDataURL(file);
  }
}

function handleCommentImageSelect(e) {
  const file = e.target.files[0];
  if (file) {
    if (file.size > 10000000) { 
      alert("Image is too large. Please choose an image under 10MB.");
      e.target.value = '';
      commentImage = null;
      const preview = document.getElementById("commentImagePreview");
      if (preview) preview.style.display = 'none';
      return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
      commentImage = event.target.result;
      
      let preview = document.getElementById("commentImagePreview");
      if (!preview) {
        preview = document.createElement('div');
        preview.id = 'commentImagePreview';
        preview.style.cssText = 'margin-top: 10px; position: relative;';
        e.target.parentElement.appendChild(preview);
      }
      
      preview.innerHTML = `
        <img src="${commentImage}" style="max-width: 200px; max-height: 200px; border-radius: 8px; border: 2px solid #e2e8f0;">
        <button type="button" onclick="removeCommentImage()" style="
          position: absolute;
          top: 5px;
          right: 5px;
          background: #ef4444;
          color: white;
          border: none;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          cursor: pointer;
          font-weight: bold;
        ">×</button>
      `;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
}

window.removeCommentImage = function() {
  commentImage = null;
  const input = document.getElementById("commentImage");
  if (input) input.value = '';
  const preview = document.getElementById("commentImagePreview");
  if (preview) preview.style.display = 'none';
};

async function updatePreview() {
  const username = document.getElementById("username").value.trim();
  const preview = document.getElementById("profilePreview");
  if (!preview) return;

  if (currentProfilePic) {
    preview.innerHTML = `<img src="${currentProfilePic}" alt="Profile">`;
  } else if (username) {
    const savedPic = await getProfilePic(username);
    if (savedPic) {
      preview.innerHTML = `<img src="${savedPic}" alt="Profile">`;
      currentProfilePic = savedPic;
    } else {
      preview.innerHTML = `<span>${username.charAt(0).toUpperCase()}</span>`;
    }
  } else {
    preview.innerHTML = '<span id="previewInitial">?</span>';
  }
}

async function postComment() {
  if (!firebaseInitialized || !window.firebaseModules) {
    showError("Firebase not initialized. Please wait...");
    return;
  }

  const username = document.getElementById("username").value.trim();
  const commentText = document.getElementById("commentText").value.trim();
  const postBtn = document.getElementById("postBtn");

  if (!username) {
    alert("Please enter your name");
    return;
  }

  if (!commentText && !commentImage) {
    alert("Please enter a comment or attach an image");
    return;
  }

  const isAvailable = await checkUsernameAvailability();
  if (!isAvailable) {
    showError("⚠️ This username is already taken. Please choose another name.");
    return;
  }

  const savedUsername = localStorage.getItem('commentUsername');
  const isOwnUsername = savedUsername && savedUsername.toLowerCase() === username.toLowerCase();
  
  if (!isOwnUsername) {
    const taken = await isUsernameTaken(username);
    if (taken) {
      showError("⚠️ This username is already taken. Please choose another name.");
      showUsernameError("⚠️ This username is already taken.");
      return;
    }
    
    const registered = await registerUsername(username);
    if (!registered) {
      showError("Failed to register username. Please try again.");
      return;
    }
    
    console.log(`✅ Username "${username}" registered successfully!`);
  } else {
    console.log(`✅ Using your registered username: "${username}"`);
  }

  hideError();
  hideUsernameError();
  postBtn.disabled = true;
  postBtn.textContent = "Posting...";

  try {
    const { ref, set, push } = window.firebaseModules.db;
    let profilePic = currentProfilePic;

    if (currentProfilePic) {
      const profileKey = username.toLowerCase().replace(/[^a-z0-9]/g, "_");
      await set(ref(firebaseDatabase, `profiles/${profileKey}`), currentProfilePic);
    } else {
      profilePic = await getProfilePic(username);
    }

    const comment = {
      text: commentText,
      username: username,
      profilePic: profilePic || null,
      commentImage: commentImage || null,
      timestamp: Date.now(),
      likes: 0,
      dislikes: 0,
      likedBy: {},
      dislikedBy: {}
    };

    await push(ref(firebaseDatabase, "comments"), comment);

    saveUserData(username, profilePic);

    document.getElementById("commentText").value = "";
    commentImage = null;
    const commentImageInput = document.getElementById("commentImage");
    if (commentImageInput) commentImageInput.value = '';
    const preview = document.getElementById("commentImagePreview");
    if (preview) preview.style.display = 'none';
    
    alert("Comment posted successfully!");
  } catch (error) {
    console.error("Error posting comment:", error);
    showError("Failed to post comment: " + error.message);
  } finally {
    postBtn.disabled = false;
    postBtn.textContent = "Post Comment";
  }
}

window.likeComment = async function(commentId) {
  if (!firebaseInitialized || !window.firebaseModules) return;
  
  const savedUsername = localStorage.getItem('commentUsername');
  if (!savedUsername) {
    alert("Please set your username first by posting a comment!");
    return;
  }

  try {
    const { ref, get, update } = window.firebaseModules.db;
    const commentRef = ref(firebaseDatabase, `comments/${commentId}`);
    const snapshot = await get(commentRef);
    const comment = snapshot.val();
    
    if (!comment) return;

    const likedBy = comment.likedBy || {};
    const dislikedBy = comment.dislikedBy || {};
    const userKey = savedUsername.toLowerCase().replace(/[^a-z0-9]/g, "_");

    if (likedBy[userKey]) {
      delete likedBy[userKey];
      await update(commentRef, {
        likes: (comment.likes || 1) - 1,
        likedBy: likedBy
      });
    } else {
      if (dislikedBy[userKey]) {
        delete dislikedBy[userKey];
        await update(commentRef, {
          dislikes: Math.max(0, (comment.dislikes || 1) - 1),
          dislikedBy: dislikedBy
        });
      }
      
      likedBy[userKey] = true;
      await update(commentRef, {
        likes: (comment.likes || 0) + 1,
        likedBy: likedBy
      });
    }
  } catch (error) {
    console.error("Error liking comment:", error);
  }
};

window.dislikeComment = async function(commentId) {
  if (!firebaseInitialized || !window.firebaseModules) return;
  
  const savedUsername = localStorage.getItem('commentUsername');
  if (!savedUsername) {
    alert("Please set your username first by posting a comment!");
    return;
  }

  try {
    const { ref, get, update } = window.firebaseModules.db;
    const commentRef = ref(firebaseDatabase, `comments/${commentId}`);
    const snapshot = await get(commentRef);
    const comment = snapshot.val();
    
    if (!comment) return;

    const likedBy = comment.likedBy || {};
    const dislikedBy = comment.dislikedBy || {};
    const userKey = savedUsername.toLowerCase().replace(/[^a-z0-9]/g, "_");

    if (dislikedBy[userKey]) {
      delete dislikedBy[userKey];
      await update(commentRef, {
        dislikes: Math.max(0, (comment.dislikes || 1) - 1),
        dislikedBy: dislikedBy
      });
    } else {
      if (likedBy[userKey]) {
        delete likedBy[userKey];
        await update(commentRef, {
          likes: Math.max(0, (comment.likes || 1) - 1),
          likedBy: likedBy
        });
      }
      
      dislikedBy[userKey] = true;
      await update(commentRef, {
        dislikes: (comment.dislikes || 0) + 1,
        dislikedBy: dislikedBy
      });
    }
  } catch (error) {
    console.error("Error disliking comment:", error);
  }
};

function displayComments(comments) {
  const commentsList = document.getElementById("commentsList");
  const commentCount = document.getElementById("commentCount");

  if (!commentsList || !commentCount) return;

  commentCount.textContent = comments.length;

  if (comments.length === 0) {
    commentsList.innerHTML = '<div class="empty-state">No comments yet. Be the first to comment!</div>';
    return;
  }

  const savedUsername = localStorage.getItem('commentUsername');
  const userKey = savedUsername ? savedUsername.toLowerCase().replace(/[^a-z0-9]/g, "_") : null;

  commentsList.innerHTML = comments.map((comment) => {
      const avatarContent = comment.profilePic
        ? `<img src="${comment.profilePic}" alt="${escapeHtml(comment.username)}">`
        : `<span>${comment.username.charAt(0).toUpperCase()}</span>`;

      const likes = comment.likes || 0;
      const dislikes = comment.dislikes || 0;
      const likedBy = comment.likedBy || {};
      const dislikedBy = comment.dislikedBy || {};
      
      const hasLiked = userKey && likedBy[userKey];
      const hasDisliked = userKey && dislikedBy[userKey];
      
      const commentImageHtml = comment.commentImage 
        ? `<div class="comment-image-container">
             <img src="${comment.commentImage}" alt="Comment image" class="comment-image" onclick="openImageModal('${comment.commentImage}')">
           </div>`
        : '';

      return `
        <div class="comment">
          <div class="comment-header">
            <div class="comment-author">
              <div class="avatar">${avatarContent}</div>
              <div class="author-info">
                <div class="author-name">${escapeHtml(comment.username)}</div>
                <div class="comment-time">${formatTime(comment.timestamp)}</div>
              </div>
            </div>
            <div class="comment-actions">
              <button class="reaction-btn ${hasLiked ? 'active' : ''}" onclick="likeComment('${comment.id}')" title="Like">
                <span>${likes}</span>
              </button>
              <button class="reaction-btn ${hasDisliked ? 'active' : ''}" onclick="dislikeComment('${comment.id}')" title="Dislike">
                <span>${dislikes}</span>
              </button>
            </div>
          </div>
          ${comment.text ? `<div class="comment-text">${escapeHtml(comment.text)}</div>` : ''}
          ${commentImageHtml}
        </div>
      `;
    }).join("");
}

function formatTime(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now - date;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

window.openImageModal = function(imageSrc) {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    cursor: pointer;
  `;
  
  const img = document.createElement('img');
  img.src = imageSrc;
  img.style.cssText = `
    max-width: 90%;
    max-height: 90%;
    border-radius: 8px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  `;
  
  overlay.appendChild(img);
  document.body.appendChild(overlay);
  
  overlay.addEventListener('click', () => overlay.remove());
};

window.removeUsername = async function(username) {
  if (!firebaseInitialized || !window.firebaseModules) {
    console.error("Firebase not initialized");
    return;
  }
  
  const confirmed = confirm(`Are you sure you want to remove username "${username}"? This cannot be undone.`);
  if (!confirmed) return;
  
  try {
    const { ref, get, remove } = window.firebaseModules.db;
    const usernamesRef = ref(firebaseDatabase, "registeredUsernames");
    const snapshot = await get(usernamesRef);
    const data = snapshot.val();
    
    if (!data) {
      console.log("No usernames found");
      return;
    }
    
    let removed = false;
    for (const [key, value] of Object.entries(data)) {
      if (value.toLowerCase() === username.toLowerCase()) {
        await remove(ref(firebaseDatabase, `registeredUsernames/${key}`));
        registeredUsernames.delete(username.toLowerCase());
        removed = true;
        console.log(`✅ Username "${username}" has been removed`);
        break;
      }
    }
    
    if (!removed) {
      console.log(`❌ Username "${username}" not found`);
    }
  } catch (error) {
    console.error("Error removing username:", error);
  }
};

window.listUsernames = async function() {
  if (!firebaseInitialized || !window.firebaseModules) {
    console.error("Firebase not initialized");
    return;
  }
  
  try {
    const { ref, get } = window.firebaseModules.db;
    const usernamesRef = ref(firebaseDatabase, "registeredUsernames");
    const snapshot = await get(usernamesRef);
    const data = snapshot.val();
    
    if (!data) {
      console.log("No usernames registered yet");
      return;
    }
    
    const usernames = Object.values(data);
    console.log(`📋 Registered Usernames (${usernames.length}):`);
    usernames.forEach((username, index) => {
      console.log(`${index + 1}. ${username}`);
    });
    
    return usernames;
  } catch (error) {
    console.error("Error listing usernames:", error);
  }
};