// ========================================
// INISIALISASI VARIABEL
// ========================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// ========================================
// 1. HAMBURGER MENU MOBILE
// ========================================
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Event listener untuk hamburger
hamburger.addEventListener('click', toggleMobileMenu);

// Tutup menu saat link diklik (mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========================================
// 2. SMOOTH SCROLL UNTUK NAVBAR
// ========================================
function smoothScrollTo(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Event listener untuk semua nav links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        smoothScrollTo(targetId);
    });
});

// ========================================
// 3. NAVBAR BACKGROUND ON SCROLL
// ========================================
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--white)';
        navbar.style.backdropFilter = 'none';
    }
});

// ========================================
// 4. ANIMASI SCROLL (FADE IN)
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe semua section dan card
document.querySelectorAll('.section, .card, .tim-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// 5. HANDLE GAMBAR ERROR (FALLBACK)
// ========================================
function handleImageError(img) {
    // Ganti dengan div fallback
    const fallback = document.createElement('div');
    fallback.className = 'image-fallback';
    fallback.textContent = 'Foto belum tersedia';
    fallback.style.cssText = `
        width: 100%; 
        height: 100%; 
        background: var(--bg-secondary); 
        border-radius: 50%; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        font-size: 0.9rem; 
        color: var(--text-secondary);
    `;
    img.parentNode.replaceChild(fallback, img);
}

// ========================================
// 6. ACTIVE NAVBAR LINK ON SCROLL
// ========================================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});