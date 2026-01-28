const bmupickupData = [
    {
        date: '(01/25/2026) Bright me up!! Scout -Stage: Hiyori',
        idols: [
            { star: 5, title: '(Card name)', name: 'Hiyori Tomoe', image: '' },
            { star: 4, title: '(Card name)', name: 'Shu Itsuki', image: '' },
            { star: 3, title: '(Card name)', name: 'Kanna', image: '' }
        ]
    },
    {
        date: '(01/10/2026) Bright me up!! Scout -Stage: Kanata',
        idols: [
            { star: 5, title: '(Journey Filled With Freedom)', name: 'Kanata Shinkai', image: 'card_square2_4655_evolution' },
            { star: 4, title: '(Star Shining on the Surface)', name: 'Shinobu Sengoku', image: 'card_square2_4656_evolution' },
            { star: 3, title: '(In My Own Words)', name: 'Subaru Akehoshi', image: 'card_square2_4657_evolution' }
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
];

const bmuscoutData = [
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

function renderbmuPickups() {
    const container = document.getElementById('bmu-pickup-container');
    if (!container) return;
    
    bmupickupData.forEach(dateGroup => {
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

function renderbmuScouts() {
    const container = document.getElementById('bmu-scout-container');
    if (!container) return;
    
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
    
    bmuscoutData.forEach(scout => {
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
                <td class="scout-star-cell">☆${scout.star}</td>
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
    renderbmuPickups();
    renderbmuScouts();
    
    const scoutBtns = document.querySelectorAll('.scout-nav-btn');
    
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