document.addEventListener('DOMContentLoaded', () => {

    // --- NAVIGATION MOBILE MENU ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-active');
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('mobile-active')) {
            icon.className = 'fa-solid fa-xmark';
        } else {
            icon.className = 'fa-solid fa-bars';
        }
    });

    // Close menu when clicking a link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('mobile-active');
            menuToggle.querySelector('i').className = 'fa-solid fa-bars';
        });
    });

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinksItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current) && current !== '') {
                link.classList.add('active');
            }
        });
    });


    // --- INTERACTIVE BUDGET SIMULATOR ---
    const toggleM2 = document.getElementById('toggle-m2');
    const toggleM3 = document.getElementById('toggle-m3');
    const cardM2 = document.getElementById('card-m2');
    const cardM3 = document.getElementById('card-m3');
    const btnToggleM2 = document.getElementById('btn-toggle-m2-click');
    const btnToggleM3 = document.getElementById('btn-toggle-m3-click');
    
    const totalDisplay = document.getElementById('total-investment-display');
    const statImpressions = document.getElementById('stat-impressions');
    const statReach = document.getElementById('stat-reach');
    const statLeads = document.getElementById('stat-leads');

    // Prices
    const priceM1 = 1200;
    const priceM2 = 500;
    const priceM3 = 250;

    function updateBudget() {
        let total = priceM1;
        const isM2Active = toggleM2.checked;
        const isM3Active = toggleM3.checked;

        // Update Card 2 styling & texts
        if (isM2Active) {
            total += priceM2;
            cardM2.classList.remove('inactive');
            cardM2.classList.add('active-glow');
            cardM2.querySelector('.toggle-status-text').textContent = 'ACTIVO';
            btnToggleM2.innerHTML = '<i class="fa-solid fa-circle-minus"></i> Desactivar Módulo';
            btnToggleM2.className = 'module-btn btn-purple';
        } else {
            cardM2.classList.add('inactive');
            cardM2.classList.remove('active-glow');
            cardM2.querySelector('.toggle-status-text').textContent = 'INACTIVO';
            btnToggleM2.innerHTML = '<i class="fa-solid fa-circle-plus"></i> Activar Módulo';
            btnToggleM2.className = 'module-btn btn-teal';
        }

        // Update Card 3 styling & texts
        if (isM3Active) {
            total += priceM3;
            cardM3.classList.remove('inactive');
            cardM3.classList.add('active-glow');
            cardM3.querySelector('.toggle-status-text').textContent = 'ACTIVO';
            btnToggleM3.innerHTML = '<i class="fa-solid fa-circle-minus"></i> Desactivar Módulo';
            btnToggleM3.className = 'module-btn btn-orange';

            // Show Meta Ads projections
            statImpressions.textContent = '300K - 700K';
            statReach.textContent = '50K - 100K';
            statLeads.textContent = '130 - 300';
            
            // Highlight stat boxes
            document.querySelectorAll('.stat-box').forEach(box => {
                box.style.opacity = '1';
            });
        } else {
            cardM3.classList.add('inactive');
            cardM3.classList.remove('active-glow');
            cardM3.querySelector('.toggle-status-text').textContent = 'INACTIVO';
            btnToggleM3.innerHTML = '<i class="fa-solid fa-circle-plus"></i> Activar Módulo';
            btnToggleM3.className = 'module-btn btn-teal';

            // Show zero or inactive message for ads
            statImpressions.textContent = '0 (Sin Pauta)';
            statReach.textContent = '0 (Sin Pauta)';
            statLeads.textContent = '0 (Sin Pauta)';
            
            // Dim stat boxes representing ads
            document.querySelectorAll('.stat-box').forEach(box => {
                box.style.opacity = '0.5';
            });
        }

        // Animate total display
        animateValue(totalDisplay, parseInt(totalDisplay.textContent.replace('$', '').replace(',', '')), total, 300);
    }

    // Easy number counter animation
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentVal = Math.floor(progress * (end - start) + start);
            obj.innerHTML = `$${currentVal.toLocaleString()}`;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Toggle events
    toggleM2.addEventListener('change', updateBudget);
    toggleM3.addEventListener('change', updateBudget);

    btnToggleM2.addEventListener('click', () => {
        toggleM2.checked = !toggleM2.checked;
        updateBudget();
    });

    btnToggleM3.addEventListener('click', () => {
        toggleM3.checked = !toggleM3.checked;
        updateBudget();
    });

    // Run initial budget update (defaults all active)
    updateBudget();


    // --- SOCIAL GALLERY TABS ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all buttons
            tabButtons.forEach(b => b.classList.remove('active'));
            // Add active to current button
            btn.classList.add('active');

            // Switch contents
            const targetTab = btn.getAttribute('data-tab');
            tabContents.forEach(content => {
                if (content.getAttribute('id') === targetTab) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    // Play button preview logic for Smartphone Reels/TikTok mockup
    const playButtons = document.querySelectorAll('.video-play-btn');
    playButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const icon = btn.querySelector('i');
            const wave = btn.closest('.phone-screen').querySelector('.sound-wave-indicator');
            
            if (icon.classList.contains('fa-play')) {
                icon.className = 'fa-solid fa-pause';
                btn.style.backgroundColor = 'rgba(0,0,0,0.7)';
                wave.style.display = 'flex';
                // Simulate playing state
                btn.closest('.phone-screen').style.boxShadow = '0 20px 40px rgba(0, 240, 255, 0.25)';
            } else {
                icon.className = 'fa-solid fa-play';
                btn.style.backgroundColor = 'rgba(0,0,0,0.5)';
                wave.style.display = 'none';
                btn.closest('.phone-screen').style.boxShadow = '0 20px 40px rgba(0,0,0,0.5)';
            }
        });
    });

});


// --- INTERACTIVE POST MODAL DETAILS ---
const postData = {
    post1: {
        img: 'assets/img/harvester.png',
        location: 'Portuguesa, Venezuela',
        caption: 'La potencia de la H220 en Portuguesa. 🌾🚜 Diseñada para el productor agropecuario venezolano que exige rendimiento real en cada hectárea. Cuenta con el soporte especializado de Sound and Art para captar cada detalle técnico en campo y potenciar tus ventas a nivel nacional. #BernardinVenezuela #AgroMarketing #Cosecha2026 #MaquinariaAgricola',
        likes: '1,420 Me gusta'
    },
    post2: {
        img: 'assets/img/tractor.png',
        location: 'Barinas, Venezuela',
        caption: 'Tecnología de siembra de precisión. El campo venezolano no se detiene, y Bernardin te acompaña con el mejor respaldo, repuestos y servicio técnico garantizado en todo el país. 🇻🇪⚙️ Hacemos que la ingeniería de datos trabaje para ti. #Bernardin #Tractores #SiembraLlanera #LouisMarketing',
        likes: '890 Me gusta'
    },
    post3: {
        img: 'assets/img/crew.png',
        location: 'Guárico, Venezuela',
        caption: 'Directo en el terreno. 🎥 Capturando la fuerza del agro venezolano. Así es como producimos contenido audiovisual de alto impacto para Bernardin Venezuela. Nos trasladamos a la faena llanera para transformar fichas técnicas complejas en piezas comerciales memorables. #DetrasDeCamaras #ProduccionAudiovisual #MarketingDigital #AgroMarketing',
        likes: '1,105 Me gusta'
    }
};

function openPostModal(postId) {
    const modal = document.getElementById('post-modal');
    const modalImg = document.getElementById('modal-img');
    const modalLoc = document.getElementById('modal-loc');
    const modalCaption = document.getElementById('modal-caption');
    const modalLikes = document.getElementById('modal-likes-count');
    const heartIcon = document.querySelector('.interactive-heart');

    const data = postData[postId];
    if (data) {
        modalImg.src = data.img;
        modalLoc.textContent = data.location;
        modalCaption.innerHTML = `<strong>bernardin_venezuela</strong> ${data.caption}`;
        modalLikes.textContent = data.likes;
        
        // Reset heart state
        heartIcon.className = 'fa-regular fa-heart interactive-heart';
        heartIcon.classList.remove('liked');
        
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Lock background scroll
    }
}

function closePostModal() {
    const modal = document.getElementById('post-modal');
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Unlock scroll
}

// Close modal when clicking outside content
window.addEventListener('click', (event) => {
    const modal = document.getElementById('post-modal');
    if (event.target === modal) {
        closePostModal();
    }
});

// Interactive Heart Toggle
function toggleHeart(element) {
    element.classList.toggle('liked');
    const likesLabel = document.getElementById('modal-likes-count');
    let currentLikes = parseInt(likesLabel.textContent.replace(' Me gusta', '').replace(',', ''));

    if (element.classList.contains('liked')) {
        element.className = 'fa-solid fa-heart interactive-heart liked';
        currentLikes++;
    } else {
        element.className = 'fa-regular fa-heart interactive-heart';
        currentLikes--;
    }
    
    likesLabel.textContent = `${currentLikes.toLocaleString()} Me gusta`;
}
