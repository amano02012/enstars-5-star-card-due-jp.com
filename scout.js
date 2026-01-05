const pickupData = [
    {
        date: 'Scout Announcement on 01/09/2026',
        idols: [
            { star: 5, title: '(Card Name)', name: '', image: '' },
            { star: 4, title: '(Card Name)', name: '', image: '' },
            { star: 3, title: '(Card Name)', name: '', image: '' }
        ]
    },
    {
        date: '(12/25/2025) Bright me up!! Scout -Stage: Rei',
        idols: [
            { star: 5, title: '(The Calm Before the Storm)', name: 'Rei Sakuma', image: 'card_square2_4640_evolution' },
            { star: 4, title: '(Path to Victory)', name: 'Jun Sazanami', image: 'card_square2_4641_evolution' },
            { star: 3, title: '(An Honest-to-Goodness Taste)', name: 'Niki Shiina', image: 'card_square2_4642_evolution' }
        ]
    },
    {
        date: '(12/10/2025) Bright me up!! Scout -Stage: Tatsumi',
        idols: [
            { star: 5, title: '(Good Fortune Comes Unexpectedly)', name: 'Tatsumi Kazehaya', image: 'card_square2_4627_evolution' },
            { star: 4, title: '(Game START)', name: 'Aira Shiratori', image: 'card_square2_4628_evolution' },
            { star: 3, title: '(An Unexpected Turn of Events)', name: 'Hajime Shino', image: 'card_square2_4629_evolution' }
        ]
    },
    {
        date: '(11/25/2025) Bright me up!! Scout -Stage: Yuta',
        idols: [
            { star: 5, title: '(A Longing Star)', name: 'Yuta Aoi', image: 'card_square2_4559_evolution' },
            { star: 4, title: '(Stage Model)', name: 'Arashi Narukami', image: 'card_square2_4560_evolution' },
            { star: 3, title: '(An Ideal Dining Experience)', name: 'Wataru Hibiki', image: 'card_square2_4561_evolution' }
        ]
    },
    {
        date: '(11/10/2025) Bright me up!! Scout -Stage: Adonis',
        idols: [
            { star: 5, title: '(What Surrounds Dreams)', name: 'Adonis Otogari', image: 'card_square2_4546_evolution' },
            { star: 4, title: '(Bonds of a Unit)', name: 'HiMERU', image: 'card_square2_4547_evolution' },
            { star: 3, title: '(The Five Elements)', name: 'Natsume Sakasaki', image: 'card_square2_4548_evolution' }
        ]
    },
    {
        date: '(10/25/2025) Bright me up!! Scout -Stage: Mao',
        idols: [
            { star: 5, title: '(Moving Beyond Expectations)', name: 'Mao Isara', image: 'card_square2_4525_evolution' },
            { star: 4, title: '(Words of Confidence)', name: 'Keito Hasumi', image: 'card_square2_4526_evolution' },
            { star: 3, title: '(Yummy Food Combos)', name: 'Tsumugi Aoba', image: 'card_square2_4527_evolution' }
        ]
    },
    {
        date: '(10/10/2025) Bright me up!! Scout -Stage: Sora',
        idols: [
            { star: 5, title: '(Adding Up Smiles)', name: 'Sora Harukawa', image: 'card_square2_4507_evolution' },
            { star: 4, title: '(Sympathetic Heart)', name: 'Hokuto Hidaka', image: 'card_square2_4508_evolution' },
            { star: 3, title: '(Convenience Store Coincidence)', name: 'Hinata Aoi', image: 'card_square2_4509_evolution' }
        ]
    },
    {
        date: '(9/25/2025) Bright me up!! Scout -Stage: Shinobu',
        idols: [
            { star: 5, title: '(The Charm of Perseverance)', name: 'Shinobu Sengoku', image: 'card_square2_4496_evolution' },
            { star: 4, title: '(À la Mode Aesthetics)', name: 'Ritsu Sakuma', image: 'card_square2_4497_evolution' },
            { star: 3, title: '(Coaching Stitch)', name: 'Mika Kagehira', image: 'card_square2_4498_evolution' }
        ]
    },
    {
        date: '(9/10/2025) Bright me up!! Scout -Stage: Kohaku',
        idols: [
            { star: 5, title: '(My Own Distance)', name: 'Kohaku Oukawa', image: 'card_square2_4480_evolution' },
            { star: 4, title: '(Similar Positions)', name: 'Makoto Yuuki', image: 'card_square2_4481_evolution' },
            { star: 3, title: '(Sole Room Occupant)', name: 'Madara Mikejima', image: 'card_square2_4482_evolution' }
        ]
    },
    {
        date: '(8/25/2025) Bright me up!! Scout -Stage: Yuzuru',
        idols: [
            { star: 5, title: '(Route to Broadened Possibilities)', name: 'Yuzuru Fushimi', image: 'card_square2_4469_evolution' },
            { star: 4, title: '(Everyone\'s Nii~chan)', name: 'Nazuna Nito', image: 'card_square2_4470_evolution' },
            { star: 3, title: '(The Happiness of Being Connected)', name: 'Sora Harukawa', image: 'card_square2_4471_evolution' }
        ]
    },
    {
        date: '(8/10/2025) Bright me up!! Scout -Stage: Koga',
        idols: [
            { star: 5, title: '(Calling Out Who I Am)', name: 'Koga Ogami', image: 'card_square2_4449_evolution' },
            { star: 4, title: '(Delicious Playfulness)', name: 'Eichi Tenshouin', image: 'card_square2_4450_evolution' },
            { star: 3, title: '(Closed-off Room)', name: 'Nagisa Ran', image: 'card_square2_4451_evolution' }
        ]
    }
];1

const scoutData = [
  {
    title: "Bright me up!! Scout Stage",
    star: 5,
    idols: [
      `images/btn-tenshouin_eichi.webp`,
      `images/btn-hibiki_wataru.webp`,
      `images/btn-himemiya_tori.webp`,
      `images/btn-hidaka_hokuto.webp`,
      `images/btn-akehoshi_subaru.webp`,
      `images/btn-yuuki_makoto.webp`,
      `images/btn-nagumo_tetora.webp`,
      `images/btn-takamine_midori.webp`,
      `images/btn-morisawa_chiaki.webp`,
      `images/btn-shinkai_kanata.webp`,
      `images/btn-amagi_hiiro.webp`,
      `images/btn-shiratori_aira.webp`,
      `images/btn-ayase_mayoi.webp`,
      `images/btn-ran_nagisa.webp`,
      `images/btn-tomoe_hiyori.webp`,
      `images/btn-saegusa_ibara.webp`,
      `images/btn-sazanami_jun.webp`,
      `images/btn-itsuki_shu.webp`,
      `images/btn-kagehira_mika.webp`,
      `images/btn-aoi_hinata.webp`,
      `images/btn-amagi_rinne.webp`,
      `images/btn-himeru.webp`,
      `images/btn-shiina_niki.webp`,
      `images/btn-hakaze_kaoru.webp`,
      `images/btn-mashiro_tomoya.webp`,
      `images/btn-nito_nazuna.webp`,
      `images/btn-tenma_mitsuru.webp`,
      `images/btn-shino_hajime.webp`,
      `images/btn-hasumi_keito.webp`,
      `images/btn-kiryu_kuro.webp`,
      `images/btn-kanzaki_souma.webp`,
      `images/btn-taki_ibuki.webp`,
      `images/btn-suou_tsukasa.webp`,
      `images/btn-tsukinaga_leo.webp`,
      `images/btn-sena_izumi.webp`,
      `images/btn-sakuma_ritsu.webp`,
      `images/btn-narukami_arashi.webp`,
      `images/btn-sakasaki_natsume.webp`,
      `images/btn-aoba_tsumugi.webp`,
      `images/btn-mikejima_madara.webp`,
      `images/btn-esu.webp`,
      `images/btn-kanna.webp`,
      `images/btn-yume.webp`,
      `images/btn-raika.webp`
    ],
  },
  {
    title: "Bright me up!! Scout Stage",
    star: 4,
    idols: [
      `images/btn-hibiki_wataru.webp`,
      `images/btn-himemiya_tori.webp`,
      `images/btn-fushimi_yuzuru.webp`,
      `images/btn-akehoshi_subaru.webp`,
      `images/btn-isara_mao.webp`,
      `images/btn-nagumo_tetora.webp`,
      `images/btn-takamine_midori.webp`,
      `images/btn-sengoku_shinobu.webp`,
      `images/btn-morisawa_chiaki.webp`,
      `images/btn-shinkai_kanata.webp`,
      `images/btn-amagi_hiiro.webp`,
      `images/btn-ayase_mayoi.webp`,
      `images/btn-kazehaya_tatsumi.webp`,
      `images/btn-ran_nagisa.webp`,
      `images/btn-tomoe_hiyori.webp`,
      `images/btn-saegusa_ibara.webp`,
      `images/btn-itsuki_shu.webp`,
      `images/btn-kagehira_mika.webp`,
      `images/btn-aoi_hinata.webp`,
      `images/btn-aoi_yuta.webp`,
      `images/btn-amagi_rinne.webp`,
      `images/btn-oukawa_kohaku.webp`,
      `images/btn-shiina_niki.webp`,
      `images/btn-sakuma_rei.webp`,
      `images/btn-hakaze_kaoru.webp`,
      `images/btn-ogami_koga.webp`,
      `images/btn-otogari_adonis.webp`,
      `images/btn-mashiro_tomoya.webp`,
      `images/btn-tenma_mitsuru.webp`,
      `images/btn-shino_hajime.webp`,
      `images/btn-kiryu_kuro.webp`,
      `images/btn-kanzaki_souma.webp`,
      `images/btn-taki_ibuki.webp`,
      `images/btn-suou_tsukasa.webp`,
      `images/btn-tsukinaga_leo.webp`,
      `images/btn-sena_izumi.webp`,
      `images/btn-sakasaki_natsume.webp`,
      `images/btn-aoba_tsumugi.webp`,
      `images/btn-harukawa_sora.webp`,
      `images/btn-mikejima_madara.webp`,
      `images/btn-esu.webp`,
      `images/btn-kanna.webp`,
      `images/btn-yume.webp`,
      `images/btn-raika.webp`
    ],
  },
];

function getJapanDate() {
    const now = new Date();
    const japanTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));
    const year = japanTime.getFullYear();
    const month = japanTime.getMonth() + 1;
    const day = japanTime.getDate();
    return `${year}/${month}/${day}-`;
}

function renderPickups() {
    const container = document.getElementById('pickup-container');
    
    pickupData.forEach(dateGroup => {
        const dateSection = document.createElement('div');
        dateSection.className = 'date-section';
        
        const dateBanner = document.createElement('div');
        dateBanner.className = 'date-banner';
        dateBanner.textContent = dateGroup.date;
        
        const idolsContainer = document.createElement('div');
        idolsContainer.className = 'idols-container';
        
        dateGroup.idols.forEach(idol => {
            const section = document.createElement('div');
            section.className = 'pickup-section';
            
            section.innerHTML = `
                <div class="pickup-header">
                    <span>⭐${idol.star}</span>
                </div>
                <div class="idol-card">
                    <img src="BMU_icons/${idol.image}.webp" alt="${idol.name}" class="idol-image">
                    <div class="idol-info">
                        <p class="idol-title">${idol.title}</p>
                        <p class="idol-name">${idol.name}</p>
                    </div>
                </div>
            `;
            
            idolsContainer.appendChild(section);
        });
        
        dateSection.appendChild(dateBanner);
        dateSection.appendChild(idolsContainer);
        container.appendChild(dateSection);
    });
}

function renderScouts() {
    const container = document.getElementById('scout-container');
    
    const divider = document.createElement('div');
    divider.className = 'section-divider';
    divider.innerHTML = `
        <hr>
        <h2 class="section-label">Remaining Idol/s</h2>
    `;
    container.appendChild(divider);
    
    const scoutSection = document.createElement('div');
    scoutSection.className = 'scout-section';
    
    const japanDate = getJapanDate();
    
    scoutData.forEach(scout => {
        const table = document.createElement('table');
        table.className = 'scout-table';
        
        const maxIdols = 58;
        const idolsArray = [...scout.idols];
        while (idolsArray.length < maxIdols) {
            idolsArray.push('');
        }
        
        table.innerHTML = `
            <tr class="scout-date-row">
                <td class="scout-date-cell" colspan="2">${japanDate}</td>
            </tr>
            <tr class="scout-title-row">
                <td class="scout-title-cell">${scout.title}</td>
                <td class="scout-star-cell">★${scout.star}</td>
            </tr>
            <tr class="scout-idols-row">
                <td colspan="2">
                    <div class="scout-idols-grid">
                        ${idolsArray.map(img => `
                            <div class="scout-idol-cell${img ? '' : ' hidden'}">
                                ${img ? `<img src="${img}" alt="idol">` : ''}
                            </div>
                        `).join('')}
                    </div>
                </td>
            </tr>
        `;
        
        scoutSection.appendChild(table);
    });
    
    container.appendChild(scoutSection);
}

const themePickupData = [
    {
        date: '(12/30/2025) Scout! -',
        idols: [
            { star: 5, title: '(The Heavens Will Reward Feelings)', name: 'Hiiro Amagi', image: 'card_square2_4651_evolution' },
            { star: 4, title: '(The Heavens Will Reward Hard Effort) ', name: 'Hinata Aoi', image: 'card_square2_4652_evolution' },
            { star: 3, title: '(The Heavens Will Reward Spirit)', name: 'Kohaku Oukawa', image: 'card_square2_4653_evolution' },
            { star: 3, title: '(The Heavens Will Reward Hard Work) ', name: 'Raika', image: 'card_square2_4654_evolution' }
        ]
    },
    {
        date: '(12/14/2025) Scout! Arsène',
        idols: [
            { star: 5, title: '(Fake Dead)', name: 'Keito Hasumi', image: 'card_square2_4636_evolution' },
            { star: 4, title: '(Fake Magic)', name: 'Natsume Sakasaki', image: 'card_square2_4637_evolution' },
            { star: 3, title: '(Fake Stage)', name: 'Wataru Hibiki', image: 'card_square2_4638_evolution' },
            { star: 3, title: '(Fake Test)', name: 'Yume', image: 'card_square2_4639_evolution' }
        ]
    },
    {
        date: '(11/29/2025) Scout! White Wonderland',
        idols: [
            { star: 5, title: '(Brand New World)', name: 'Esu', image: 'card_square2_4623_evolution' },
            { star: 4, title: '(Familiar World)', name: 'Madara Mikejima', image: 'card_square2_4624_evolution' },
            { star: 3, title: '(Surveyed World)', name: 'Yuzuru Fushimi', image: 'card_square2_4625_evolution' },
            { star: 3, title: '(Unknown World)', name: 'Yuta Aoi', image: 'card_square2_4626_evolution' }
        ]
    },
    {
        date: '(10/30/2025) Scout! Arcadian',
        idols: [
            { star: 5, title: '(Guardian of Peace)', name: 'Midori Takamine', image: 'card_square2_4542_evolution' },
            { star: 4, title: '(Guardian of the Undiscovered)', name: 'Yuzuru Fushimi', image: 'card_square2_4543_evolution' },
            { star: 3, title: '(Guardian of Simplicity)', name: 'Mao Isara', image: 'card_square2_4544_evolution' },
            { star: 3, title: '(Guardian of Nature)', name: 'Arashi Narukami', image: 'card_square2_4545_evolution' }
        ]
    },
    {
        date: '(10/14/2025) Scout! Nightfall Séance',
        idols: [
            { star: 5, title: '(Séance Lead)', name: 'Izumi Sena', image: 'card_square2_4521_evolution' },
            { star: 4, title: '(Séance Witness)', name: 'Koga Ogami', image: 'card_square2_4522_evolution' },
            { star: 3, title: '(Séance Host)', name: 'Kanata Shinkai', image: 'card_square2_4523_evolution' },
            { star: 3, title: '(Séance Participant)', name: 'Tatsumi Kazehaya', image: 'card_square2_4524_evolution' }
        ]
    },
    {
        date: '(9/29/2025) Scout! Witchcraft',
        idols: [
            { star: 5, title: '(Search Witch)', name: 'Arashi Narukami', image: 'card_square2_4503_evolution' },
            { star: 4, title: '(Reach Witch)', name: 'Chiaki Morisawa', image: 'card_square2_4504_evolution' },
            { star: 3, title: '(Watch Witch)', name: 'Hiiro Amagi', image: 'card_square2_4505_evolution' },
            { star: 3, title: '(Catch Witch)', name: 'Shu Itsuki', image: 'card_square2_4506_evolution' }
        ]
    },
    {
        date: '(9/14/2025) Scout! Royal Flush',
        idols: [
            { star: 5, title: '(Attempting a Gamble)', name: 'Rinne Amagi', image: 'card_square2_4492_evolution' },
            { star: 4, title: '(Succeeding a Gamble)', name: 'Kaoru Hakaze', image: 'card_square2_4493_evolution' },
            { star: 3, title: '(Skillful Gamble)', name: 'Ibara Saegusa', image: 'card_square2_4494_evolution' },
            { star: 3, title: '(Whimsical Gamble)', name: 'Leo Tsukinaga', image: 'card_square2_4495_evolution' }
        ]
    },
    {
        date: '(8/14/2025) Scout! Oniyasha',
        idols: [
            { star: 5, title: '(Oniyasha\'s Karma)', name: 'Kuro Kiryu', image: 'card_square2_4465_evolution' },
            { star: 4, title: '(Oniyasha\'s Mystery)', name: 'Suou Tsukasa', image: 'card_square2_4466_evolution' },
            { star: 3, title: '(Oniyasha\'s Shadow)', name: 'Shinobu Sengoku', image: 'card_square2_4467_evolution' },
            { star: 3, title: '(Oniyasha\'s Ritual)', name: 'Kanna', image: 'card_square2_4468_evolution' }
        ]
    },
    {
        date: '(7/14/2025) Scout! Heated Gaze',
        idols: [
            { star: 5, title: '(Unbreakable Gaze)', name: 'Hajime Shino', image: 'card_square2_4437_evolution' },
            { star: 4, title: '(Captivating Gaze)', name: 'Tatsumi Kazehaya', image: 'card_square2_4438_evolution' },
            { star: 3, title: '(Crossing Gaze)', name: 'Souma Kanzaki', image: 'card_square2_4439_evolution' },
            { star: 3, title: '(Unexpected Gaze)', name: 'Esu', image: 'card_square2_4440_evolution' }
        ]
    }
];

const themeScoutData = [
  {
    title: "Theme Scout",
    star: 5,
    idols: [
      `images/btn-tenshouin_eichi.webp`,
      `images/btn-hibiki_wataru.webp`,
      `images/btn-himemiya_tori.webp`,
      `images/btn-fushimi_yuzuru.webp`,
      `images/btn-hidaka_hokuto.webp`,
      `images/btn-akehoshi_subaru.webp`,
      `images/btn-yuuki_makoto.webp`,
      `images/btn-isara_mao.webp`,
      `images/btn-nagumo_tetora.webp`,
      `images/btn-sengoku_shinobu.webp`,
      `images/btn-morisawa_chiaki.webp`,
      `images/btn-shinkai_kanata.webp`,
      `images/btn-shiratori_aira.webp`,
      `images/btn-ayase_mayoi.webp`,
      `images/btn-kazehaya_tatsumi.webp`,
      `images/btn-ran_nagisa.webp`,
      `images/btn-tomoe_hiyori.webp`,
      `images/btn-saegusa_ibara.webp`,
      `images/btn-sazanami_jun.webp`,
      `images/btn-itsuki_shu.webp`,
      `images/btn-kagehira_mika.webp`,
      `images/btn-aoi_hinata.webp`,
      `images/btn-aoi_yuta.webp`,
      `images/btn-himeru.webp`,
      `images/btn-oukawa_kohaku.webp`,
      `images/btn-shiina_niki.webp`,
      `images/btn-sakuma_rei.webp`,
      `images/btn-hakaze_kaoru.webp`,
      `images/btn-ogami_koga.webp`,
      `images/btn-otogari_adonis.webp`,
      `images/btn-mashiro_tomoya.webp`,
      `images/btn-nito_nazuna.webp`,
      `images/btn-tenma_mitsuru.webp`,
      `images/btn-kanzaki_souma.webp`,
      `images/btn-taki_ibuki.webp`,
      `images/btn-suou_tsukasa.webp`,
      `images/btn-tsukinaga_leo.webp`,
      `images/btn-sakuma_ritsu.webp`,
      `images/btn-sakasaki_natsume.webp`,
      `images/btn-aoba_tsumugi.webp`,
      `images/btn-harukawa_sora.webp`,
      `images/btn-mikejima_madara.webp`,
      `images/btn-kanna.webp`,
      `images/btn-yume.webp`,
      `images/btn-raika.webp`,
    ],
  },
  {
    title: "Theme Scout",
    star: 4,
    idols: [
      `images/btn-tenshouin_eichi.webp`,
      `images/btn-hibiki_wataru.webp`,
      `images/btn-himemiya_tori.webp`,
      `images/btn-hidaka_hokuto.webp`,
      `images/btn-akehoshi_subaru.webp`,
      `images/btn-yuuki_makoto.webp`,
      `images/btn-isara_mao.webp`,
      `images/btn-nagumo_tetora.webp`,
      `images/btn-takamine_midori.webp`,
      `images/btn-sengoku_shinobu.webp`,
      `images/btn-shinkai_kanata.webp`,
      `images/btn-amagi_hiiro.webp`,
      `images/btn-shiratori_aira.webp`,
      `images/btn-ayase_mayoi.webp`,
      `images/btn-ran_nagisa.webp`,
      `images/btn-tomoe_hiyori.webp`,
      `images/btn-saegusa_ibara.webp`,
      `images/btn-sazanami_jun.webp`,
      `images/btn-itsuki_shu.webp`,
      `images/btn-kagehira_mika.webp`,
      `images/btn-aoi_yuta.webp`,
      `images/btn-amagi_rinne.webp`,
      `images/btn-himeru.webp`,
      `images/btn-oukawa_kohaku.webp`,
      `images/btn-shiina_niki.webp`,
      `images/btn-sakuma_rei.webp`,
      `images/btn-otogari_adonis.webp`,
      `images/btn-mashiro_tomoya.webp`,
      `images/btn-nito_nazuna.webp`,
      `images/btn-tenma_mitsuru.webp`,
      `images/btn-shino_hajime.webp`,
      `images/btn-hasumi_keito.webp`,
      `images/btn-kiryu_kuro.webp`,
      `images/btn-kanzaki_souma.webp`,
      `images/btn-taki_ibuki.webp`,
      `images/btn-tsukinaga_leo.webp`,
      `images/btn-sena_izumi.webp`,
      `images/btn-sakuma_ritsu.webp`,
      `images/btn-narukami_arashi.webp`,
      `images/btn-aoba_tsumugi.webp`,
      `images/btn-harukawa_sora.webp`,
      `images/btn-esu.webp`,
      `images/btn-kanna.webp`,
      `images/btn-yume.webp`,
      `images/btn-raika.webp`,
    ],
  },
];

function renderThemePickups() {
    const container = document.getElementById('theme-pickup-container');
    
    themePickupData.forEach(dateGroup => {
        const dateSection = document.createElement('div');
        dateSection.className = 'date-section';
        
        const dateBanner = document.createElement('div');
        dateBanner.className = 'date-banner';
        dateBanner.textContent = dateGroup.date;
        
        const idolsContainer = document.createElement('div');
        idolsContainer.className = 'idols-container';
        
        dateGroup.idols.forEach(idol => {
            const section = document.createElement('div');
            section.className = 'pickup-section';
            
            section.innerHTML = `
                <div class="pickup-header">
                    <span>⭐${idol.star}</span>
                </div>
                <div class="idol-card">
                    <img src="TS_icons/${idol.image}.webp" alt="${idol.name}" class="idol-image">
                    <div class="idol-info">
                        <p class="idol-title">${idol.title}</p>
                        <p class="idol-name">${idol.name}</p>
                    </div>
                </div>
            `;
            
            idolsContainer.appendChild(section);
        });
        
        dateSection.appendChild(dateBanner);
        dateSection.appendChild(idolsContainer);
        container.appendChild(dateSection);
    });
}

function renderThemeScouts() {
    const container = document.getElementById('theme-scout-container');
    
    const divider = document.createElement('div');
    divider.className = 'section-divider';
    divider.innerHTML = `
        <hr>
        <h2 class="section-label">Remaining Idol/s</h2>
    `;
    container.appendChild(divider);
    
    const scoutSection = document.createElement('div');
    scoutSection.className = 'scout-section';
    
    const japanDate = getJapanDate();
    
    themeScoutData.forEach(scout => {
        const table = document.createElement('table');
        table.className = 'scout-table';
        
        const maxIdols = 58;
        const idolsArray = [...scout.idols];
        while (idolsArray.length < maxIdols) {
            idolsArray.push('');
        }
        
        table.innerHTML = `
            <tr class="scout-date-row">
                <td class="scout-date-cell" colspan="2">${japanDate}</td>
            </tr>
            <tr class="scout-title-row">
                <td class="scout-title-cell">${scout.title}</td>
                <td class="scout-star-cell">★${scout.star}</td>
            </tr>
            <tr class="scout-idols-row">
                <td colspan="2">
                    <div class="scout-idols-grid">
                        ${idolsArray.map(img => `
                            <div class="scout-idol-cell${img ? '' : ' hidden'}">
                                ${img ? `<img src="${img}" alt="idol">` : ''}
                            </div>
                        `).join('')}
                    </div>
                </td>
            </tr>
        `;
        
        scoutSection.appendChild(table);
    });
    
    container.appendChild(scoutSection);
}

document.addEventListener('DOMContentLoaded', () => {
    renderPickups();
    renderScouts();
    renderThemePickups();
    renderThemeScouts();
    
    const scoutBtns = document.querySelectorAll('.scout-nav-btn');
    const scoutContents = document.querySelectorAll('.scout-content');
    
    scoutBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetScout = btn.dataset.scout;
            const currentActive = document.querySelector('.scout-content.active');
            const targetContent = document.getElementById(`${targetScout}-content`);
            
            if (currentActive === targetContent) return;
            
            const overlay = document.createElement('div');
            overlay.className = 'slide-overlay';
            document.body.appendChild(overlay);
            
            setTimeout(() => overlay.classList.add('sliding-in'), 10);
            
            setTimeout(() => {
                scoutBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                currentActive.classList.remove('active');
                targetContent.classList.add('active');
                
                overlay.classList.remove('sliding-in');
                overlay.classList.add('sliding-out');
            }, 500);
            
            setTimeout(() => {
                overlay.remove();
            }, 1000);
        });
    });
    
    const hamburger = document.querySelector(".hamburger");
    if (hamburger) {
        hamburger.addEventListener("click", () => {
            const open = document.body.classList.toggle("nav-open");
            hamburger.setAttribute("aria-expanded", open ? "true" : "false");
        });
    }
    
    window.addEventListener("resize", () => {
        if (window.innerWidth > 700 && document.body.classList.contains("nav-open")) {
            document.body.classList.remove("nav-open");
            if (hamburger) hamburger.setAttribute("aria-expanded", "false");
        }
    });
    
    document.addEventListener("click", (e) => {
        if (!document.body.classList.contains("nav-open")) return;
        const inside = e.target.closest(".navbar");
        if (!inside) {
            document.body.classList.remove("nav-open");
            if (hamburger) hamburger.setAttribute("aria-expanded", "false");
        }
    });
});
