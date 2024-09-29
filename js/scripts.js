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
