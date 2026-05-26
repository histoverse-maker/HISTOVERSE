/* =========================
   HAMBURGER MENU
========================= */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

/* Ketika tombol hamburger diklik */
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* =========================
   SMOOTH SCROLL
========================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    // Tutup menu mobile setelah diklik
    navMenu.classList.remove("active");

  });

});

/* =========================
   REVEAL ANIMATION
========================= */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

  const windowHeight = window.innerHeight;

  reveals.forEach(item => {

    const revealTop = item.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){
      item.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealOnScroll);

/* Jalankan saat halaman pertama kali dibuka */
revealOnScroll();

/* =========================
   IMAGE FALLBACK
========================= */

const images = document.querySelectorAll("img");

images.forEach(img => {

  img.addEventListener("error", () => {

    img.src =
      "https://via.placeholder.com/600x400?text=Gambar+Belum+Ditambahkan";

  });

});
