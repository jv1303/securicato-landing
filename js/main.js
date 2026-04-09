// Menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em um link (mobile)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Filtro de plugins (se estiver na página de plugins)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const pluginCards = document.querySelectorAll('.plugin-card');
    
    if (filterButtons.length && pluginCards.length) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active de todos
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                pluginCards.forEach(card => {
                    if (filter === 'todos' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Simular envio de formulários (contato)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensagem enviada! Em breve nossa equipe retornará o contato.');
            contactForm.reset();
        });
    }

    // Botões "Contratar" (serviços)
    const hireBtns = document.querySelectorAll('.hire-btn');
    hireBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Obrigado pelo interesse! Entre em contato pelo formulário na página de Suporte para contratar este serviço.');
        });
    });
});