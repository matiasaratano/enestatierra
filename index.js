const navbar = document.querySelector('.navbar');
const homebg = document.querySelector('.home__background');
const menu = document.querySelector('.navbar__menu');
const links = document.querySelector('.navbar__links');
const logo = document.querySelector('#logo');
const sections = document.querySelectorAll('section');
const foto = document.querySelectorAll('.portfolio__item');

const config = {
  rootMargin: '0px',
  threshold: [0.6, 0.9],
};

foto.forEach((fotito) => {
  fotito.addEventListener('click', () => {
    // fotito.classList.add('foto-chica');
    // fotito.classList.remove('foto-grande');
    console.log(fotito);
  });
});

// if (fotito.style.display === 'none') {
//   console.log('no se ve');
// } else {
//   console.log('maomeno pero si');
//   console.log(fotito);
// }

function handleLlinks() {
  if (window.innerWidth <= 991) {
    links.classList.toggle('visible');
  }
}

menu.addEventListener('click', handleLlinks);
links.addEventListener('click', handleLlinks);

// window.addEventListener('scroll', function () {
//   window.scrollY > 100 && (navbar.style.background = `rgba(0,0,0,0.9)`);
//   window.scrollY > 100 && (logo.src = `img/logo2.png`);
//   window.scrollY < 100 && (navbar.style.background = `transparent`);
//   window.scrollY < 100 && (logo.src = `img/logo.png`);
// });

let observer = new IntersectionObserver(function (entries, self) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      intersectionHandler(entry);
    }
  });
}, config);

sections.forEach((section) => {
  observer.observe(section);
});

function intersectionHandler(entry) {
  const id = entry.target.id;
  const currentlyActive = document.querySelector('.navbar__links  .active');
  const shouldBeActive = document.querySelector(
    '.navbar__links [data-ref=' + id + ']'
  );

  if (currentlyActive) {
    currentlyActive.classList.remove('active');
  }
  if (shouldBeActive) {
    shouldBeActive.classList.add('active');
  }
}

// window.addEventListener("mousemove", parallax);

// function parallax(e) {
//   elements.forEach((item) => {
//     const speed = item.getAttribute("data-speed");
//     console.log(speed);
//     const x = (window.innerWidth - e.pageX * speed) / 100;
//     const y = (window.innerHeight - e.pageY * speed) / 100;
//     item.style.transform = `translateX(${x}px) translateY(${y}px)`;
//   });
// }

ScrollReveal().reveal('.navbar', { delay: 250 });
ScrollReveal().reveal('.home__profile', { delay: 350 });
ScrollReveal().reveal('.home__title--primary', { delay: 350 });
ScrollReveal().reveal('.home__title', { delay: 450 });
ScrollReveal().reveal('.home__title--secondary', { delay: 550 });
ScrollReveal().reveal('.section__title', { delay: 250 });
ScrollReveal().reveal('.section__subtitle', { delay: 350 });
ScrollReveal().reveal('.about__description', { delay: 350 });
ScrollReveal().reveal('.about__summary', { delay: 450 });
ScrollReveal().reveal('.button--cta', { delay: 550 });
ScrollReveal().reveal('.skill__title', { delay: 450 });
ScrollReveal().reveal('.skill__item', { delay: 450 });
ScrollReveal().reveal('.services__item', { delay: 450 });
ScrollReveal().reveal('.portfolio__item', { delay: 450 });
ScrollReveal().reveal('.contact__item', { delay: 450 });
ScrollReveal().reveal('.footer', { delay: 450 });

// Menú móvil
const menuIcon = menu.querySelector('i');

function toggleMenu() {
  links.classList.toggle('active');
  menu.classList.toggle('active');
  if (links.classList.contains('active')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
}

menu.addEventListener('click', toggleMenu);

// Cerrar menú al hacer click en un enlace y navegar suavemente
links.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (e) => {
    if (window.innerWidth <= 991) {
      if (links.classList.contains('active')) {
        toggleMenu();
      }
    }
  });
});

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Actualizar enlace activo al hacer scroll
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  links.querySelectorAll('a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-ref') === current) {
      link.classList.add('active');
    }
  });
});

// Animación del logo
if (logo) {
  logo.addEventListener('mouseover', () => {
    logo.style.transform = 'scale(1.1)';
  });
  logo.addEventListener('mouseout', () => {
    logo.style.transform = 'scale(1)';
  });
}

// Preloader
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.classList.add('preloader--hidden');
  }
});
