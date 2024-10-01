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

// Seleciona o modal e o conteúdo da imagem
let modal = document.getElementById("myModal");
let modalImg = document.getElementById("modalImage");
let closeModal = document.getElementsByClassName("close")[0];

// Seleciona todos os links que abrem o modal
let openModalLinks = document.querySelectorAll(".openModal");

// Itera sobre todos os links
openModalLinks.forEach(function(link) {
    link.onclick = function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link

        // Pega o valor do atributo data-img do link clicado
        let imgSrc = link.getAttribute("data-img");

        // Define o src da imagem do modal com a URL da imagem clicada
        modalImg.src = imgSrc;

        // Exibe o modal
        modal.style.display = "block";
    };
});

// Quando o usuário clica no botão "fechar" (x), fecha o modal
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Fecha o modal quando o usuário clica fora da imagem
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}