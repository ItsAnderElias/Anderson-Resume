document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  document.addEventListener("scroll", function() {
    const section = document.querySelector('.myprofile');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2; // Defina a posição para ativar a animação
    
    if (sectionPosition < screenPosition) {
        section.classList.add('visible');
    }
});
  document.addEventListener("scroll", function() {
    const section = document.querySelector('.mvv');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2; // Defina a posição para ativar a animação
    
    if (sectionPosition < screenPosition) {
        section.classList.add('visible');
    }
});

let container = document.querySelector('.about-page');
let startX;

container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

container.addEventListener('touchmove', (e) => {
    let touch = e.touches[0];
    let moveX = touch.clientX - startX;

    // Rola a tela para a próxima seção se o swipe for maior que 50px
    if (moveX < -50) {
        container.scrollBy({
            left: window.innerWidth, // Rola para a próxima seção
            behavior: 'smooth'
        });
    } else if (moveX > 50) {
        container.scrollBy({
            left: -window.innerWidth, // Rola para a seção anterior
            behavior: 'smooth'
        });
    }
});

// Desabilitar o scroll
document.body.style.overflow = 'hidden';