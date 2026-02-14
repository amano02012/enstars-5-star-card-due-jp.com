let registeredUsernames = new Set();
let contentLoaded = false;
let assetsLoaded = false;

function checkAllLoaded() {
  if (contentLoaded && assetsLoaded) {
    setTimeout(() => {
      const loadingOverlay = document.getElementById('loading-overlay');
      loadingOverlay.classList.add('hidden');
      document.body.classList.add('loaded');
      setTimeout(() => {
        loadingOverlay.style.display = 'none';
      }, 500);
    }, 500);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  contentLoaded = true;
  checkAllLoaded();
});

window.addEventListener('load', function() {
  assetsLoaded = true;
  checkAllLoaded();
});

async function loadRegisteredUsernames() {
  if (!firebaseInitialized || !window.firebaseModules) return;
  
  try {
    const { ref, get } = window.firebaseModules.db;
    const usernamesRef = ref(firebaseDatabase, "registeredUsernames");
    const snapshot = await get(usernamesRef);
    const data = snapshot.val();
    
    if (data) {
      registeredUsernames = new Set(Object.values(data).map(name => name.toLowerCase()));
    }
  } catch (error) {
    console.error("Error loading usernames:", error);
  }
}

function checkUserRegistration() {
  const registeredUsername = localStorage.getItem('registeredUsername');
  const registrationSection = document.getElementById('registration-section');
  const commentSection = document.getElementById('comment-section');
  
  if (!registeredUsername) {
    registrationSection.style.display = 'block';
    commentSection.style.display = 'none';
  } else {
    registrationSection.style.display = 'none';
    commentSection.style.display = 'block';
    document.getElementById('username').value = registeredUsername;
    updatePreview();
  }
}

async function registerUsername(username) {
  if (!firebaseInitialized || !window.firebaseModules) {
    return { success: false, error: "Firebase not initialized" };
  }

  const trimmedUsername = username.trim();
  
  if (trimmedUsername.length < 3) {
    return { success: false, error: "Username must be at least 3 characters" };
  }
  
  if (trimmedUsername.length > 20) {
    return { success: false, error: "Username must be 20 characters or less" };
  }
  
  if (!/^[a-zA-Z0-9_]+$/.test(trimmedUsername)) {
    return { success: false, error: "Only letters, numbers, and underscores allowed" };
  }
  
  if (registeredUsernames.has(trimmedUsername.toLowerCase())) {
    return { success: false, error: "Username already taken" };
  }

  try {
    const { ref, push } = window.firebaseModules.db;
    await push(ref(firebaseDatabase, "registeredUsernames"), trimmedUsername);
    registeredUsernames.add(trimmedUsername.toLowerCase());
    localStorage.setItem('registeredUsername', trimmedUsername);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const registerSubmitBtn = document.getElementById('register-submit-btn');
  const registerUsernameInput = document.getElementById('register-username');
  
  if (registerSubmitBtn) {
    registerSubmitBtn.addEventListener('click', async function() {
      const username = registerUsernameInput.value;
      const errorDiv = document.getElementById('registration-error');
      
      const result = await registerUsername(username);
      
      if (result.success) {
        errorDiv.textContent = '';
        checkUserRegistration();
      } else {
        errorDiv.textContent = result.error;
      }
    });
  }
  
  if (registerUsernameInput) {
    registerUsernameInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        registerSubmitBtn.click();
      }
    });
  }
  
  setTimeout(() => {
    checkUserRegistration();
  }, 100);
});

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
  startDate: `2026-02-14`, 
  description: "Latest Card: Special Scout",
  detailsDescription: "[] Eichi Tenshouin",
  unbloomedThumb: "icons/.webp",
  bloomedThumb: "icons/.webp",
  unbloomedImage: "cards2/photo_2026-02-14_14-01-46 (2).webp",
  bloomedImage: "cards2/photo_2026-02-13_14-02-01.webp"
},
{
  id: 2,
  name: `Wataru Hibiki`,
  avatar: `images/btn-hibiki_wataru.webp`,
  borderColor: "#A1D8E2",
  startDate: `2025-05-25`,
  description: "Latest Card: Cross Scout",
  detailsDescription: "(Canister Cowboy) Wataru Hibiki",
  unbloomedThumb: 'icons/card_square2_4377_normal.webp',
  bloomedThumb: 'icons/card_square2_4377_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4377_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4377_evolution.webp'
},
{
  id: 3,
  name: `Tori Himemiya`,
  avatar: `images/btn-himemiya_tori.webp`,
  borderColor: "#F5B2B2",
  startDate: `2025-04-15`,
  description: "Latest Card: Tour Event",
  detailsDescription: "(Charm of the Four Kings of the Sky) Tori Himemiya",
  unbloomedThumb: 'icons/card_square2_4323_normal.webp',
  bloomedThumb: 'icons/card_square2_4323_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4323_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4323_evolution.webp'
},
{
  id: 4,
  name: `Yuzuru Fushimi`,
  avatar: `images/btn-fushimi_yuzuru.webp`,
  borderColor: "#3E62AD",
  startDate: `2026-01-15`,
  description: "Latest Card: Unit Event",
  detailsDescription: "(Heart-pounding Musica) Yuzuru Fushimi",
  unbloomedThumb: 'icons/card_square2_4658_normal.webp',
  bloomedThumb: 'icons/card_square2_4658_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4658_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4658_evolution.webp'
},
{
  id: 5,
  name: `Hokuto Hidaka`,
  avatar: `images/btn-hidaka_hokuto.webp`,
  borderColor: "#0068B7",
  startDate: `2025-04-30`,
  description: "Latest Card: Unit Event",
  detailsDescription: "(The Anniversary We Strive Onward) Hokuto Hidka",
  unbloomedThumb: 'icons/card_square2_4353_normal.webp',
  bloomedThumb: 'icons/card_square2_4353_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4353_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4353_evolution.webp'
},
{
  id: 6,
  name: `Subaru Akehoshi`,
  avatar: `images/btn-akehoshi_subaru.webp`,
  borderColor: "#F3981D",
  startDate: `2025-05-15`,
  description: "Latest Card: Tour Event",
  detailsDescription: "(Sparkling Sailing Ceremony) Subaru Akehoshi",
  unbloomedThumb: 'icons/card_square2_4371_normal.webp',
  bloomedThumb: 'icons/card_square2_4371_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4371_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4371_evolution.webp'
},
{
  id: 7,
  name: `Makoto Yuuki`,
  avatar: `images/btn-yuuki_makoto.webp`,
  borderColor: "#65AB31",
  startDate: `2025-12-31`,
  description: "Latest Card: Tour Event",
  detailsDescription: "(Diamond Hope) Makoto Yuuki",
  unbloomedThumb: 'icons/card_square2_4645_normal.webp',
  bloomedThumb: 'icons/card_square2_4645_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4645_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4645_evolution.webp'
},
{
  id: 8,
  name: `Mao Isara`,
  avatar: `images/btn-isara_mao.webp`,
  borderColor: "#941F57",
  startDate: `2025-10-25`,
  description: "Latest Card: Bright me up!! Scout Stage",
  detailsDescription: "(Moving Beyond Expectations) Mao Isara",
  unbloomedThumb: 'icons/card_square2_4525_normal.webp',
  bloomedThumb: 'icons/card_square2_4525_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4525_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4525_evolution.webp'
},
{
  id: 9,
  name: `Tetora Nagumo`,
  avatar: `images/btn-nagumo_tetora.webp`,
  borderColor: "#302833",
  startDate: `2026-02-14`,
  description: "Latest Card: Special Scout",
  detailsDescription: "[] Tetora Nagumo",
  unbloomedThumb: 'icons/.webp',
  bloomedThumb: 'icons/.webp',
  unbloomedImage: 'cards2/photo_2026-02-14_14-01-46.webp',
  bloomedImage: 'cards2/photo_2026-02-13_14-02-01 (2).webp'
},
{
  id: 10,
  name: `Midori Takamine`,
  avatar: `images/btn-takamine_midori.webp`,
  borderColor: "#00533F",
  startDate: `2025-10-30`,
  description: "Latest Card: Theme Scout",
  detailsDescription: "(Guardian of Peace) Midori Takamine",
  unbloomedThumb: 'icons/card_square2_4542_normal.webp',
  bloomedThumb: 'icons/card_square2_4542_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4542_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4542_evolution.webp'
},
{
  id: 11,
  name: `Shinobu Sengoku`,
  avatar: `images/btn-sengoku_shinobu.webp`,
  borderColor: "#FFDC00",
  startDate: `2025-09-25`,
  description: "Latest Card: Bright me up!! Scout Stage",
  detailsDescription: "(The Charm of Perseverance) Shinobu Sengoku",
  unbloomedThumb: 'icons/card_square2_4496_normal.webp',
  bloomedThumb: 'icons/card_square2_4496_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4496_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4496_evolution.webp'
},
{
  id: 12,
  name: `Chiaki Morisawa`,
  avatar: `images/btn-morisawa_chiaki.webp`,
  borderColor: "#E60033",
  startDate: `2025-11-30`,
  description: "Latest Card: Unit Event",
  detailsDescription: "(Light Up the Light of Justice) Chiaki Morisawa",
  unbloomedThumb: 'icons/card_square2_4618_normal.webp',
  bloomedThumb: 'icons/card_square2_4618_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4618_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4618_evolution.webp'
},
{
  id: 13,
  name: `Kanata Shinkai`,
  avatar: `images/btn-shinkai_kanata.webp`,
  borderColor: "#008DB7",
  startDate: `2026-01-10`,
  description: "Latest Card: Bright me up!! Scout Stage",
  detailsDescription: "(Journey Filled With Freedom) Kanata Shinkai",
  unbloomedThumb: 'icons/card_square2_4655_normal.webp',
  bloomedThumb: 'icons/card_square2_4655_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4655_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4655_evolution.webp'
},
{
  id: 14,
  name: `Hiiro Amagi`,
  avatar: `images/btn-amagi_hiiro.webp`,
  borderColor: "#BA2636",
  startDate: `2025-12-30`,
  description: "Latest Card: Theme Scout",
  detailsDescription: "(The Heavens Will Reward Feelings) Hiiro Amagi",
  unbloomedThumb: 'icons/card_square2_4651_normal.webp',
  bloomedThumb: 'icons/card_square2_4651_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4651_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4651_evolution.webp'
},
{
  id: 15,
  name: `Aira Shiratori`,
  avatar: `images/btn-shiratori_aira.webp`,
  borderColor: "#FFF1CF",
  startDate: `2025-04-14`,
  description: "Latest Card: Cross Scout",
  detailsDescription: "(Path to Becoming an ACE) Aira Shiratori",
  unbloomedThumb: 'icons/card_square2_4319_normal.webp',
  bloomedThumb: 'icons/card_square2_4319_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4319_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4319_evolution.webp'
},
{
  id: 16,
  name: `Mayoi Ayase`,
  avatar: `images/btn-ayase_mayoi.webp`,
  borderColor: "#522F60",
  startDate: `2026-01-31`,
  description: "Latest Card: Unit Event",
  detailsDescription: "(Meaningful Words I Want to Convey) Mayoi Ayase",
  unbloomedThumb: 'icons/card_square2_4692_normal.webp',
  bloomedThumb: 'icons/card_square2_4692_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4692_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4692_evolution.webp'
},
{
  id: 17,
  name: `Tatsumi Kazehaya`,
  avatar: `images/btn-kazehaya_tatsumi.webp`,
  borderColor: "#7EBEA5",
  startDate: `2025-12-10`,
  description: "Latest Card: Bright me up!! Scout Stage",
  detailsDescription: "(Good Fortune Comes Unexpectedly) Tatsumi Kazehaya",
  unbloomedThumb: 'icons/card_square2_4627_normal.webp',
  bloomedThumb: 'icons/card_square2_4627_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4627_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4627_evolution.webp'
},
{
  id: 18,
  name: `Nagisa Ran`,
  avatar: `images/btn-ran_nagisa.webp`,
  borderColor: "#A73836",
  startDate: `2025-08-30`,
  description: "Latest Card: Theme Scout",
  detailsDescription: "(The Beginning of Mythos) Nagisa Ran",
  unbloomedThumb: 'icons/card_square2_4476_normal.webp',
  bloomedThumb: 'icons/card_square2_4476_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4476_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4476_evolution.webp'
},
{
  id: 19,
  name: `Hiyori Tomoe`,
  avatar: `images/btn-tomoe_hiyori.webp`,
  borderColor: "#B8D200",
  startDate: `2026-01-25`,
  description: "Latest Card: Bright me up!! Scout Stage",
  detailsDescription: "(Young Nobleman's Attire) Hiyori Tomoe",
  unbloomedThumb: 'icons/card_square2_4666_normal.webp',
  bloomedThumb: 'icons/card_square2_4666_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4666_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4666_evolution.webp'
},
{
  id: 20,
  name: `Ibara Saegusa`,
  avatar: `images/btn-saegusa_ibara.webp`,
  borderColor: "#74325C",
  startDate: `2025-10-15`,
  description: "Latest Card: Tour Event",
  detailsDescription: "(Trick Performer) Ibara Saegusa",
  unbloomedThumb: 'icons/card_square2_4515_normal.webp',
  bloomedThumb: 'icons/card_square2_4515_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4515_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4515_evolution.webp'
},
{
  id: 21,
  name: `Jun Sazanami`,
  avatar: `images/btn-sazanami_jun.webp`,
  borderColor: "#192F60",
  startDate: `2025-05-14`,
  description: "Latest Card: Cross Scout",
  detailsDescription: "(Showdown Crisis) Jun Sazanami",
  unbloomedThumb: 'icons/card_square2_4360_normal.webp',
  bloomedThumb: 'icons/card_square2_4360_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4360_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4360_evolution.webp'
},
{
  id: 22,
  name: `Shu Itsuki`,
  avatar: `images/btn-itsuki_shu.webp`,
  borderColor: "#E3ACAE",
  startDate: `2025-12-15`,
  description: "Latest Card: Unit Event",
  detailsDescription: "(A Needle's Tip of Passion) Shu Itsuki",
  unbloomedThumb: 'icons/card_square2_4632_normal.webp',
  bloomedThumb: 'icons/card_square2_4632_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4632_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4632_evolution.webp'
},
{
  id: 23,
  name: `Mika Kagehira`,
  avatar: `images/btn-kagehira_mika.webp`,
  borderColor: "#006A6C",
  startDate: `2025-05-30`,
  description: "Latest Card: Cross Scout",
  detailsDescription: "(Partner Cowboy) Mika Kagehira",
  unbloomedThumb: 'icons/card_square2_4380_normal.webp',
  bloomedThumb: 'icons/card_square2_4380_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4380_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4380_evolution.webp'
},
{
  id: 24,
  name: `Hinata Aoi`,
  avatar: `images/btn-aoi_hinata.webp`,
  borderColor: "#EB6EA0",
  startDate: `2025-05-10`,
  description: "Latest Card: Cross Scout",
  detailsDescription: "(Resolute Crisis) Hinata Aoi",
  unbloomedThumb: 'icons/card_square2_4357_normal.webp',
  bloomedThumb: 'icons/card_square2_4357_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4357_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4357_evolution.webp'
},
{
  id: 25,
  name: `Yuta Aoi`,
  avatar: `images/btn-aoi_yuta.webp`,
  borderColor: "#00A1E9",
  startDate: `2025-11-25`,
  description: "Latest Card: Bright me up!! Scout Stage",
  detailsDescription: "(A Longing Star) Yuta Aoi",
  unbloomedThumb: 'icons/card_square2_4559_normal.webp',
  bloomedThumb: 'icons/card_square2_4559_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4559_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4559_evolution.webp'
},
{
  id: 26,
  name: `Rinne Amagi`,
  avatar: `images/btn-amagi_rinne.webp`,
  borderColor: "#B7282E",
  startDate: `2025-09-14`,
  description: "Latest Card: Theme Scout",
  detailsDescription: "(Attempting a Gamble) Rinne Amagi",
  unbloomedThumb: 'icons/card_square2_4492_normal.webp',
  bloomedThumb: 'icons/card_square2_4492_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4492_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4492_evolution.webp'
},
{
  id: 27,
  name: `HiMERU`,
  avatar: `images/btn-himeru.webp`,
  borderColor: "#89C3EB",
  startDate: `2025-04-25`,
  description: "Latest Card: Cross Scout",
  detailsDescription: "(Front-Back Ambivalence) HiMERU",
  unbloomedThumb: 'icons/card_square2_4346_normal.webp',
  bloomedThumb: 'icons/card_square2_4346_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4346_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4346_evolution.webp'
},
{
  id: 28,
  name: `Kohaku Oukawa`,
  avatar: `images/btn-oukawa_kohaku.webp`,
  borderColor: "#F4B3C2",
  startDate: `2025-09-10`,
  description: "Latest Card: Bright me up!! Scout Stage",
  detailsDescription: "(My Own Distance) Kohaku Oukawa",
  unbloomedThumb: 'icons/card_square2_4480_normal.webp',
  bloomedThumb: 'icons/card_square2_4480_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4480_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4480_evolution.webp'
},
{
  id: 29,
  name: `Niki Shiina`,
  avatar: `images/btn-shiina_niki.webp`,
  borderColor: "#507EA5",
  startDate: `2025-06-15`,
  description: "Latest Card: Unit Event",
  detailsDescription: "(Matching Pair-ring) Niki Shiina",
  unbloomedThumb: 'icons/card_square2_4398_normal.webp',
  bloomedThumb: 'icons/card_square2_4398_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4398_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4398_evolution.webp'
},
{
  id: 30,
  name: `Rei Sakuma`,
  avatar: `images/btn-sakuma_rei.webp`,
  borderColor: "#47266E",
  startDate: `2025-12-25`,
  description: "Latest Card: Bright me up!! Scout Stage",
  detailsDescription: "(The Calm Before the Storm) Rei Sakuma",
  unbloomedThumb: 'icons/card_square2_4640_normal.webp',
  bloomedThumb: 'icons/card_square2_4640_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4640_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4640_evolution.webp'
},
{
  id: 31,
  name: `Kaoru Hakaze`,
  avatar: `images/btn-hakaze_kaoru.webp`,
  borderColor: "#FDD35C",
  startDate: `2026-01-30`,
  description: "Latest Card: Theme Scout",
  detailsDescription: "(Perfect Shot) Kaoru Hakaze",
  unbloomedThumb: 'icons/card_square2_4696_normal.webp',
  bloomedThumb: 'icons/card_square2_4696_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4696_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4696_evolution.webp'
},
{
  id: 32,
  name: `Koga Ogami`,
  avatar: `images/btn-ogami_koga.webp`,
  borderColor: "#C9CACA",
  startDate: `2025-12-31`,
  description: "Latest Card: Tour Event",
  detailsDescription: "(Diamond Ambition) Koga Ogami",
  unbloomedThumb: 'icons/card_square2_4646_normal.webp',
  bloomedThumb: 'icons/card_square2_4646_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4646_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4646_evolution.webp'
},
{
  id: 33,
  name: `Adonis Otogari`,
  avatar: `images/btn-otogari_adonis.webp`,
  borderColor: "#915DA3",
  startDate: `2025-11-10`,
  description: "Latest Card: Bright me up!! Scout Stage",
  detailsDescription: "(What Surrounds Dreams) Adonis Otogari",
  unbloomedThumb: 'icons/card_square2_4546_normal.webp',
  bloomedThumb: 'icons/card_square2_4546_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4546_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4546_evolution.webp'
},
{
  id: 34,
  name: `Tomoya Mashiro`,
  avatar: `images/btn-mashiro_tomoya.webp`,
  borderColor: "#EEDCB3",
  startDate: `2026-01-14`,
  description: "Latest Card: Theme Scout",
  detailsDescription: "(Galloping Stage) Tomoya Mashiro",
  unbloomedThumb: 'icons/card_square2_4662_normal.webp',
  bloomedThumb: 'icons/card_square2_4662_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4662_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4662_evolution.webp'
},
{
  id: 35,
  name: `Nazuna Nito`,
  avatar: `images/btn-nito_nazuna.webp`,
  borderColor: "#FFEC47",
  startDate: `2025-11-15`,
  description: "Latest Card: Shuffle Event",
  detailsDescription: "(Hooray, Hooray, ResQ) Nazuna Nito",
  unbloomedThumb: 'icons/card_square2_4554_normal.webp',
  bloomedThumb: 'icons/card_square2_4554_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4554_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4554_evolution.webp'
},
{
  id: 36,
  name: `Mitsuru Tenma`,
  avatar: `images/btn-tenma_mitsuru.webp`,
  borderColor: "#ED6D35",
  startDate: `2025-06-25`,
  description: "Latest Card: Cross Scout",
  detailsDescription: "(Rising Star of All Trades) Mitsuru Tenma",
  unbloomedThumb: 'icons/card_square2_4402_normal.webp',
  bloomedThumb: 'icons/card_square2_4402_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4402_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4402_evolution.webp'
},
{
  id: 37,
  name: `Hajime Shino`,
  avatar: `images/btn-shino_hajime.webp`,
  borderColor: "#CAB8D9",
  startDate: `2025-07-14`,
  description: "Latest Card: Theme Scout",
  detailsDescription: "(Unbreakable Gaze) Hajime Shino",
  unbloomedThumb: 'icons/card_square2_4437_normal.webp',
  bloomedThumb: 'icons/card_square2_4437_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4437_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4437_evolution.webp'
},
{
  id: 38,
  name: `Keito Hasumi`,
  avatar: `images/btn-hasumi_keito.webp`,
  borderColor: "#316745",
  startDate: `2025-12-14`,
  description: "Latest Card: Theme Scout",
  detailsDescription: "(Fake Dead) Keito Hasumi",
  unbloomedThumb: 'icons/card_square2_4636_normal.webp',
  bloomedThumb: 'icons/card_square2_4636_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4636_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4636_evolution.webp'
},
{
  id: 39,
  name: `Kuro Kiryu`,
  avatar: `images/btn-kiryu_kuro.webp`,
  borderColor: "#E83929",
  startDate: `2025-08-14`,
  description: "Latest Card: Theme Scout",
  detailsDescription: "(Oniyasha's Karma) Kuro Kiryu",
  unbloomedThumb: 'icons/card_square2_4465_normal.webp',
  bloomedThumb: 'icons/card_square2_4465_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4465_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4465_evolution.webp'
},
{
  id: 40,
  name: `Souma Kanzaki`,
  avatar: `images/btn-kanzaki_souma.webp`,
  borderColor: "#5654A2",
  startDate: `2025-09-30`,
  description: "Latest Card: Unit Event",
  detailsDescription: "(Butterfly That Seeks Freedom) Souma Kanzaki",
  unbloomedThumb: 'icons/card_square2_4499_normal.webp',
  bloomedThumb: 'icons/card_square2_4499_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4499_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4499_evolution.webp'
},
{
  id: 41,
  name: `Ibuki Taki`,
  avatar: `images/btn-taki_ibuki.webp`,
  borderColor: "#66BBCC",
  startDate: `2025-07-25`,
  description: "Latest Card: Feature Scout 2",
  detailsDescription: "(Spontaneous Daybreak) Ibuki Taki",
  unbloomedThumb: 'icons/card_square2_4441_normal.webp',
  bloomedThumb: 'icons/card_square2_4441_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4441_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4441_evolution.webp'
},
{
  id: 42,
  name: `Tsukasa Suou`,
  avatar: `images/btn-suou_tsukasa.webp`,
  borderColor: "#942343",
  startDate: `2025-03-14`,
  description: "Latest Card: Shuffle Scout",
  detailsDescription: "(The Fallen Angel's Warning) Tsukasa Suou",
  unbloomedThumb: 'icons/card_square2_4304_normal.webp',
  bloomedThumb: 'icons/card_square2_4304_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4304_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4304_evolution.webp'
},
{
  id: 43,
  name: `Leo Tsukinaga`,
  avatar: `images/btn-tsukinaga_leo.webp`,
  borderColor: "#EC6D51",
  startDate: `2025-11-14`,
  description: "Latest Card: Shuffle Scout",
  detailsDescription: "(Go, Fight, ResQ) Leo Tsukinaga",
  unbloomedThumb: 'icons/card_square2_4557_normal.webp',
  bloomedThumb: 'icons/card_square2_4557_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4557_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4557_evolution.webp'
},
{
  id: 44,
  name: `Izumi Sena`,
  avatar: `images/btn-sena_izumi.webp`,
  borderColor: "#BBDBF3",
  startDate: `2025-10-14`,
  description: "Latest Card: Theme Scout",
  detailsDescription: "(Séance Lead) Izumi Sena",
  unbloomedThumb: 'icons/card_square2_4521_normal.webp',
  bloomedThumb: 'icons/card_square2_4521_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4521_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4521_evolution.webp'
},
{
  id: 45,
  name: `Ritsu Sakuma`,
  avatar: `images/btn-sakuma_ritsu.webp`,
  borderColor: "#001E43",
  startDate: `2025-08-15`,
  description: "Latest Card: Tour Event",
  detailsDescription: "(FEARLESS BUNNY) Ritsu Sakuma",
  unbloomedThumb: 'icons/card_square2_4460_normal.webp',
  bloomedThumb: 'icons/card_square2_4460_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4460_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4460_evolution.webp'
},
{
  id: 46,
  name: `Arashi Narukami`,
  avatar: `images/btn-narukami_arashi.webp`,
  borderColor: "#EDDE7B",
  startDate: `2025-09-29`,
  description: "Latest Card: Theme Scout",
  detailsDescription: "(Search Witch) Arashi Narukami",
  unbloomedThumb: 'icons/card_square2_4503_normal.webp',
  bloomedThumb: 'icons/card_square2_4503_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4503_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4503_evolution.webp'
},
{
  id: 47,
  name: `Natsume Sakasaki`,
  avatar: `images/btn-sakasaki_natsume.webp`,
  borderColor: "#D70035",
  startDate: `2025-05-31`,
  description: "Latest Card: Unit Event",
  detailsDescription: "(Connecting Dimensions and Worlds) Natsume Sakasaki",
  unbloomedThumb: 'icons/card_square2_4383_normal.webp',
  bloomedThumb: 'icons/card_square2_4383_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4383_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4383_evolution.webp'
},
{
  id: 48,
  name: `Tsumugi Aoba`,
  avatar: `images/btn-aoba_tsumugi.webp`,
  borderColor: "#00608D",
  startDate: `2025-06-10`,
  description: "Latest Card: Cross Scout",
  detailsDescription: "(Fairy's Pastime) Tsumugi Aoba",
  unbloomedThumb: 'icons/card_square2_4387_normal.webp',
  bloomedThumb: 'icons/card_square2_4387_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4387_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4387_evolution.webp'
},
{
  id: 49,
  name: `Sora Harukawa`,
  avatar: `images/btn-harukawa_sora.webp`,
  borderColor: "#FFF352",
  startDate: `2025-10-10`,
  description: "Latest Card: Bright me up!! Scout Stage",
  detailsDescription: "(Adding Up Smiles) Sora Harukawa",
  unbloomedThumb: 'icons/card_square2_4507_normal.webp',
  bloomedThumb: 'icons/card_square2_4507_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4507_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4507_evolution.webp'
},
{
  id: 50,
  name: `Madara Mikejima`,
  avatar: `images/btn-mikejima_madara.webp`,
  borderColor: "#622D18",
  startDate: `2024-10-31`,
  description: "Latest Card: Unit Event",
  detailsDescription: "(Lupine's True Feelings) Madara Mikejima",
  unbloomedThumb: 'icons/card_square2_4194_normal.webp',
  bloomedThumb: 'icons/card_square2_4194_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4194_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4194_evolution.webp'
},
{
  id: 51,
  name: `Esu`,
  avatar: `images/btn-esu.webp`,
  borderColor: "#80FFF4",
  startDate: `2025-11-29`,
  description: "Latest Card: Theme Scout",
  detailsDescription: "(Brand New World) Esu",
  unbloomedThumb: 'icons/card_square2_4623_normal.webp',
  bloomedThumb: 'icons/card_square2_4623_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4623_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4623_evolution.webp'
},
{
  id: 52,
  name: `Kanna`,
  avatar: `images/btn-kanna.webp`,
  borderColor: "#8ACCB8",
  startDate: `2025-09-15`,
  description: "Latest Card: Unit Event",
  detailsDescription: "(Unicorn's Smile) Kanna",
  unbloomedThumb: 'icons/card_square2_4488_normal.webp',
  bloomedThumb: 'icons/card_square2_4488_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4488_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4488_evolution.webp'
},
{
  id: 53,
  name: `Yume`,
  avatar: `images/btn-yume.webp`,
  borderColor: "#CCADD9",
  startDate: `2024-11-30`,
  description: "Latest Card: Unit Event",
  detailsDescription: "(Märchen White) Yume",
  unbloomedThumb: 'icons/card_square2_4226_normal.webp',
  bloomedThumb: 'icons/card_square2_4226_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4226_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4226_evolution.webp'
},
{
  id: 54,
  name: `Raika`,
  avatar: `images/btn-raika.webp`,
  borderColor: "#298C7C",
  startDate: `2025-10-15`,
  description: "Latest Card: Tour Event",
  detailsDescription: "(Monstrous Performer) Raika",
  unbloomedThumb: 'icons/card_square2_4516_normal.webp',
  bloomedThumb: 'icons/card_square2_4516_evolution.webp',
  unbloomedImage: 'cards2/card_rectangle2_4516_normal.webp',
  bloomedImage: 'cards2/card_rectangle2_4516_evolution.webp'
},
{
  id: 55,
  name: `Juis Kojika`,
  avatar: `images/btn-kojika_juis.webp`,
  borderColor: "#70ab5e",
  startDate: `-`,
  description: "-",
  detailsDescription: "-",
  unbloomedThumb: 'icons/',
  bloomedThumb: 'icons/',
  unbloomedImage: 'cards2/',
  bloomedImage: 'cards2/',
  isNew: true
},
{
  id: 56,
  name: `Nozomi Madoka`,
  avatar: `images/btn-madoka_nozomi.webp`,
  borderColor: "#881f4a",
  startDate: `-`,
  description: "-",
  detailsDescription: "-",
  unbloomedThumb: 'icons/',
  bloomedThumb: 'icons/',
  unbloomedImage: 'cards2/',
  bloomedImage: 'cards2/',
  isNew: true
},
{
  id: 57,
  name: `Mashu Kuon`,
  avatar: `images/btn-kuon_mashu.webp`,
  borderColor: "#ec938c",
  startDate: `-`,
  description: "-",
  detailsDescription: "-",
  unbloomedThumb: 'icons/',
  bloomedThumb: 'icons/',
  unbloomedImage: 'cards2/',
  bloomedImage: 'cards2/',
  isNew: true
},
{
  id: 58,
  name: `Chitose Tsuzura`,
  avatar: `images/btn-tsuzura_chitose.webp`,
  borderColor: "#424355",
  startDate: `-`,
  description: "-",
  detailsDescription: "-",
  unbloomedThumb: 'icons/',
  bloomedThumb: 'icons/',
  unbloomedImage: 'cards2/',
  bloomedImage: 'cards2/',
  isNew: true
}];

const cardCountData = {
  1: { five: 13, four: 14, three: 18 }, // Eichi Tenshouin
  2: { five: 11, four: 15, three: 19 }, // Wataru Hibiki
  3: { five: 11, four: 16, three: 17 }, // Tori Himemiya
  4: { five: 12, four: 16, three: 18 }, // Yuzuru Fushimi
  5: { five: 13, four: 14, three: 16 }, // Hokuto Hidaka
  6: { five: 11, four: 16, three: 21 }, // Subaru Akehoshi
  7: { five: 11, four: 18, three: 19 }, // Makoto Yuuki
  8: { five: 11, four: 16, three: 18 }, // Mao Isara
  9: { five: 12, four: 16, three: 16 }, // Tetora Nagumo
  10: { five: 11, four: 15, three: 18 }, // Midori Takamine
  11: { five: 11, four: 17, three: 16 }, // Shinobu Sengoku
  12: { five: 12, four: 15, three: 17 }, // Chiaki Morisawa
  13: { five: 11, four: 17, three: 17 }, // Kanata Shinkai
  14: { five: 12, four: 15, three: 17 }, // Hiiro Amagi
  15: { five: 10, four: 15, three: 18 }, // Aira Shiratori
  16: { five: 11, four: 16, three: 17 }, // Mayoi Ayase
  17: { five: 10, four: 16, three: 16 }, // Tatsumi Kazehaya
  18: { five: 11, four: 13, three: 21 }, // Nagisa Ran
  19: { five: 11, four: 15, three: 17 }, // Hiyori Tomoe
  20: { five: 11, four: 14, three: 18 }, // Ibara Saegusa
  21: { five: 10, four: 17, three: 17 }, // Jun Sazanami
  22: { five: 14, four: 15, three: 16 }, // Shu Itsuki
  23: { five: 11, four: 15, three: 18 }, // Mika Kagehira
  24: { five: 12, four: 17, three: 16 }, // Hinata Aoi
  25: { five: 13, four: 16, three: 16 }, // Yuta Aoi
  26: { five: 12, four: 14, three: 16 }, // Rinne Amagi
  27: { five: 10, four: 16, three: 16 }, // HiMERU
  28: { five: 10, four: 19, three: 19 }, // Kohaku Oukawa
  29: { five: 9, four: 16, three: 17 }, // Niki Shiina
  30: { five: 13, four: 17, three: 17 }, // Rei Sakuma
  31: { five: 12, four: 14, three: 21 }, // Kaoru Hakaze
  32: { five: 11, four: 18, three: 18 }, // Koga Ogami
  33: { five: 11, four: 15, three: 19 }, // Adonis Otogari
  34: { five: 13, four: 13, three: 20 }, // Tomoya Mashiro
  35: { five: 11, four: 15, three: 19 }, // Nazuna Nito
  36: { five: 10, four: 15, three: 19 }, // Mitsuru Tenma
  37: { five: 13, four: 16, three: 20 }, // Hajime Shino
  38: { five: 13, four: 14, three: 16 }, // Keito Hasumi
  39: { five: 11, four: 16, three: 18 }, // Kuro Kiryu
  40: { five: 10, four: 17, three: 16 }, // Souma Kanzaki
  41: { five: 2, four: 5, three: 5 }, // Ibuki Taki
  42: { five: 12, four: 15, three: 17 }, // Tsukasa Suou
  43: { five: 12, four: 16, three: 18 }, // Leo Tsukinaga
  44: { five: 11, four: 17, three: 17 }, // Izumi Sena
  45: { five: 12, four: 17, three: 17 }, // Ritsu Sakuma
  46: { five: 11, four: 17, three: 19 }, // Arashi Narukami
  47: { five: 12, four: 15, three: 17 }, // Natsume Sakasaki
  48: { five: 11, four: 15, three: 19 }, // Tsumugi Aoba
  49: { five: 11, four: 16, three: 16 }, // Sora Harukawa
  50: { five: 14, four: 16, three: 14 }, // Madara Mikejima
  51: { five: 5, four: 4, three: 5 }, // Esu
  52: { five: 2, four: 5, three: 8 }, // Kanna
  53: { five: 3, four: 5, three: 6 }, // Yume
  54: { five: 3, four: 5, three: 4 }, // Raika
  55: { five: "-", four: "-", three: "-" }, // Juis Kojika
  56: { five: "-", four: "-", three: "-" }, // Nozomi Madoka
  57: { five: "-", four: "-", three: "-" }, // Mashu Kuon
  58: { five: "-", four: "-", three: "-" } // Chitose Tsuzura
};

let currentView = 'grid';
let currentSort = 'highest';

function initializeControls() {
  const viewBtns = document.querySelectorAll('.view-btn');
  const sortSelect = document.getElementById('sortSelect');
  const container = document.getElementById('idol-container');
  
  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentView = btn.dataset.view;
      
      container.style.transition = 'none';
      
      if (currentView === 'list') {
        container.classList.add('list-view');
      } else {
        container.classList.remove('list-view');
      }
      
      const cards = container.querySelectorAll('.idol-card');
      cards.forEach(card => {
        card.style.transition = 'none';
      });
      
      setTimeout(() => {
        container.style.transition = '';
        cards.forEach(card => {
          card.style.transition = '';
        });
      }, 50);
    });
  });
  
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderIdols();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initializeControls();
  setTimeout(() => {
    renderIdols();
  }, 100);
});

function openSidePanel(idol) {
  const panel = document.getElementById("side-panel");
  if (!panel || !idol) return;

  const nameEl = document.getElementById("side-panel-name");
  const imgEl = document.getElementById("side-panel-image");
  const descEl = document.getElementById("side-panel-description");
  const dateEl = document.getElementById("side-panel-date");
  const loaderEl = document.getElementById("side-image-loader");
  const statsEl = document.getElementById("side-card-stats");
  const variantsEl = document.getElementById("card-variants");

  const isAlreadyOpen = panel.classList.contains("active");

  if (isAlreadyOpen) {
    nameEl.classList.add("fade-out");
    imgEl.classList.add("fade-out");
    descEl.parentElement.classList.add("fade-out-right");
    dateEl.parentElement.classList.add("fade-out-right");
    if (statsEl.style.display === "flex") {
      statsEl.classList.add("fade-out-right");
    }
    if (variantsEl.style.display === "flex") {
      variantsEl.classList.add("fade-out");
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

      if (idol.unbloomedThumb && idol.bloomedThumb && idol.unbloomedImage && idol.bloomedImage) {
        setupCardVariants(idol);
        variantsEl.style.display = "flex";
      } else {
        variantsEl.style.display = "none";
      }

      imgEl.style.display = "none";
      loaderEl.style.display = "flex";

      const defaultImage = idol.bloomedImage || idol.detailsImage;
      const img = new Image();
      img.onload = function() {
        imgEl.src = defaultImage;
        imgEl.style.display = "block";
        loaderEl.style.display = "none";
      };
      img.onerror = function() {
        loaderEl.style.display = "none";
        imgEl.style.display = "block";
        imgEl.src = "";
      };
      img.src = defaultImage;
      
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
      if (variantsEl.style.display === "flex") {
        variantsEl.classList.remove("fade-out");
        variantsEl.classList.add("fade-in");
      }

      setTimeout(() => {
        nameEl.classList.remove("fade-in");
        imgEl.classList.remove("fade-in");
        descEl.parentElement.classList.remove("fade-in-left");
        dateEl.parentElement.classList.remove("fade-in-left");
        statsEl.classList.remove("fade-in-left");
        variantsEl.classList.remove("fade-in");
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

    if (idol.unbloomedThumb && idol.bloomedThumb && idol.unbloomedImage && idol.bloomedImage) {
      setupCardVariants(idol);
      variantsEl.style.display = "flex";
    } else {
      variantsEl.style.display = "none";
    }

    imgEl.style.display = "none";
    loaderEl.style.display = "flex";

    const defaultImage = idol.bloomedImage || idol.detailsImage;
    const img = new Image();
    img.onload = function() {
      imgEl.src = defaultImage;
      imgEl.style.display = "block";
      loaderEl.style.display = "none";
    };
    img.onerror = function() {
      loaderEl.style.display = "none";
      imgEl.style.display = "block";
      imgEl.src = "";
    };
    img.src = defaultImage;

    panel.classList.add("active");
  }
}

function setupCardVariants(idol) {
  const unbloomedPreview = document.getElementById("unbloomed-preview");
  const bloomedPreview = document.getElementById("bloomed-preview");
  const variantOptions = document.querySelectorAll(".variant-option");
  const mainImage = document.getElementById("side-panel-image");
  const mainLoader = document.getElementById("side-image-loader");

  const unbloomedLoader = variantOptions[0].querySelector('.variant-loader');
  const bloomedLoader = variantOptions[1].querySelector('.variant-loader');

  unbloomedPreview.classList.add('loading');
  bloomedPreview.classList.add('loading');
  unbloomedLoader.classList.add('active');
  bloomedLoader.classList.add('active');

  const unbloomedImg = new Image();
  unbloomedImg.onload = function() {
    unbloomedPreview.src = idol.unbloomedThumb;
    unbloomedPreview.classList.remove('loading');
    unbloomedLoader.classList.remove('active');
  };
  unbloomedImg.onerror = function() {
    unbloomedPreview.classList.remove('loading');
    unbloomedLoader.classList.remove('active');
  };
  unbloomedImg.src = idol.unbloomedThumb;

  const bloomedImg = new Image();
  bloomedImg.onload = function() {
    bloomedPreview.src = idol.bloomedThumb;
    bloomedPreview.classList.remove('loading');
    bloomedLoader.classList.remove('active');
  };
  bloomedImg.onerror = function() {
    bloomedPreview.classList.remove('loading');
    bloomedLoader.classList.remove('active');
  };
  bloomedImg.src = idol.bloomedThumb;

  variantOptions.forEach(option => {
    option.classList.remove("active");
  });
  document.querySelector('[data-type="bloomed"]').classList.add("active");

  variantOptions.forEach(option => {
    option.onclick = function() {
      const type = this.dataset.type;
      const newImage = type === "unbloomed" ? idol.unbloomedImage : idol.bloomedImage;
      
      mainImage.style.display = "none";
      mainLoader.style.display = "flex";
      
      const img = new Image();
      img.onload = function() {
        mainImage.src = newImage;
        mainImage.style.display = "block";
        mainLoader.style.display = "none";
      };
      img.onerror = function() {
        mainLoader.style.display = "none";
        mainImage.style.display = "block";
      };
      img.src = newImage;

      variantOptions.forEach(opt => opt.classList.remove("active"));
      this.classList.add("active");
    };
  });
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

  if (currentSort === 'highest') {
    idols.sort((a, b) => b.days - a.days);
  } else {
    idols.sort((a, b) => a.days - b.days);
  }
  
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

  const ribbon = document.createElement("div");
  ribbon.className = getRibbonClass(idol.rank);
  ribbon.textContent = getRibbonText(idol.rank);

  const img = document.createElement("img");
  img.src = idol.avatar;
  img.alt = idol.name;

  const contentWrapper = document.createElement("div");
  contentWrapper.className = "idol-card-content";

  const name = document.createElement("div");
  name.className = "idol-name";
  name.textContent = idol.name;

  const desc = document.createElement("div");
  desc.className = "idol-description";
  desc.textContent = idol.description;

  const days = document.createElement("div");
  days.className = "combo";
  days.textContent = `${idol.days} day/s`;

  contentWrapper.appendChild(name);
  contentWrapper.appendChild(days);
  contentWrapper.appendChild(desc);

  const detailsBtn = document.createElement("button");
  detailsBtn.className = "details-btn";
  detailsBtn.textContent = "Details";
  detailsBtn.addEventListener("click", () => openSidePanel(idol));

  card.appendChild(ribbon);
  card.appendChild(img);
  card.appendChild(contentWrapper);
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
    
    await loadRegisteredUsernames();
    loadSavedUserData();
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
  const registeredUsername = localStorage.getItem('registeredUsername');
  const savedProfilePic = localStorage.getItem('commentProfilePic');
  
  if (registeredUsername) {
    const usernameInput = document.getElementById("username");
    if (usernameInput) {
      usernameInput.value = registeredUsername;
      currentUsername = registeredUsername;
    }
  }
  
  if (savedProfilePic) {
    currentProfilePic = savedProfilePic;
    updatePreview();
  }
  
  checkUserRegistration();
}

function saveUserData(username, profilePic) {
  localStorage.setItem('registeredUsername', username);
  if (profilePic) {
    localStorage.setItem('commentProfilePic', profilePic);
  }
}

document.getElementById("postBtn").addEventListener("click", postComment);
document.getElementById("username").addEventListener("input", updatePreview);
document.getElementById("profilePic").addEventListener("change", handleFileSelect);

const commentImageInput = document.getElementById("commentImage");
if (commentImageInput) {
  commentImageInput.addEventListener("change", handleCommentImageSelect);
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

  const registeredUsername = localStorage.getItem('registeredUsername');
  if (!registeredUsername) {
    showError("Please register first");
    checkUserRegistration();
    return;
  }

  const username = document.getElementById("username").value.trim();
  const commentText = document.getElementById("commentText").value.trim();
  const postBtn = document.getElementById("postBtn");

  if (!commentText && !commentImage) {
    alert("Please enter a comment or attach an image");
    return;
  }

  hideError();
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

  const topLevelComments = comments.filter(c => !c.parentId);
  const replies = comments.filter(c => c.parentId);
  
  commentCount.textContent = topLevelComments.length;

  if (topLevelComments.length === 0) {
    commentsList.innerHTML = '<div class="empty-state">No comments yet. Be the first to comment!</div>';
    return;
  }

  const savedUsername = localStorage.getItem('commentUsername');
  const userKey = savedUsername ? savedUsername.toLowerCase().replace(/[^a-z0-9]/g, "_") : null;

  function renderComment(comment, isReply = false) {
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

    const commentReplies = replies.filter(r => r.parentId === comment.id);
    const replyCountHtml = commentReplies.length > 0 
      ? `<span class="reply-count">${commentReplies.length} ${commentReplies.length === 1 ? 'reply' : 'replies'}</span>`
      : '';

    return `
      <div class="comment ${isReply ? 'comment-reply' : ''}" data-comment-id="${comment.id}">
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
            ${!isReply ? `<button class="reply-btn" onclick="replyToComment('${comment.id}', '${escapeHtml(comment.username)}')" title="Reply">Reply</button>` : ''}
          </div>
        </div>
        ${comment.text ? `<div class="comment-text">${escapeHtml(comment.text)}</div>` : ''}
        ${commentImageHtml}
        ${replyCountHtml}
        <div class="replies-container">
          ${commentReplies.map(reply => renderComment(reply, true)).join('')}
        </div>
      </div>
    `;
  }

  commentsList.innerHTML = topLevelComments.map(comment => renderComment(comment)).join("");
}

window.replyToComment = function(commentId, username) {
  const comment = document.querySelector(`[data-comment-id="${commentId}"]`);
  if (!comment) return;
  
  let replyForm = comment.querySelector('.reply-form');
  if (replyForm) {
    replyForm.remove();
    return;
  }
  
  replyForm = document.createElement('div');
  replyForm.className = 'reply-form';
  replyForm.innerHTML = `
    <textarea class="reply-input" placeholder="Write your reply to ${username}..."></textarea>
    <div class="reply-actions">
      <button class="reply-cancel-btn" onclick="cancelReply('${commentId}')">Cancel</button>
      <button class="reply-submit-btn" onclick="submitReply('${commentId}')">Reply</button>
    </div>
  `;
  
  comment.appendChild(replyForm);
  replyForm.querySelector('.reply-input').focus();
};

window.cancelReply = function(commentId) {
  const comment = document.querySelector(`[data-comment-id="${commentId}"]`);
  if (!comment) return;
  
  const replyForm = comment.querySelector('.reply-form');
  if (replyForm) replyForm.remove();
};

window.submitReply = async function(parentId) {
  if (!firebaseInitialized || !window.firebaseModules) {
    showError("Firebase not initialized. Please wait...");
    return;
  }

  const registeredUsername = localStorage.getItem('registeredUsername');
  if (!registeredUsername) {
    alert("Please register first!");
    checkUserRegistration();
    return;
  }

  const comment = document.querySelector(`[data-comment-id="${parentId}"]`);
  const replyInput = comment.querySelector('.reply-input');
  const replyText = replyInput.value.trim();

  if (!replyText) {
    alert("Please enter a reply");
    return;
  }

  const submitBtn = comment.querySelector('.reply-submit-btn');
  submitBtn.disabled = true;
  submitBtn.textContent = "Posting...";

  try {
    const { ref, push } = window.firebaseModules.db;
    const profilePic = await getProfilePic(registeredUsername);

    const reply = {
      text: replyText,
      username: registeredUsername,
      profilePic: profilePic || null,
      timestamp: Date.now(),
      likes: 0,
      dislikes: 0,
      likedBy: {},
      dislikedBy: {},
      parentId: parentId
    };

    await push(ref(firebaseDatabase, "comments"), reply);
    
    const replyForm = comment.querySelector('.reply-form');
    if (replyForm) replyForm.remove();
  } catch (error) {
    console.error("Error posting reply:", error);
    showError("Failed to post reply: " + error.message);
    submitBtn.disabled = false;
    submitBtn.textContent = "Reply";
  }
};

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