document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const productContainer = document.querySelector('.product-container');
    const blogGrid = document.querySelector('.blog-grid');
    const forumPreview = document.querySelector('.forum-preview');
    const eventsSection = document.querySelector('.events');
    const newsletterForm = document.getElementById('newsletter-form');
    const cartIcon = document.querySelector('.icon-cart');
    const cartCount = document.querySelector('.cart-count');

    // Dados simulados
    const products = [
        { id: 1, name: "Camiseta Star Wars", price: 59.90, image: "assets/star-wars-tshirt.jpg" },
        { id: 2, name: "Action Figure Marvel", price: 129.90, image: "assets/marvel-figure.jpg" },
        { id: 3, name: "Caneca Harry Potter", price: 39.90, image: "assets/hp-mug.jpg" },
        { id: 4, name: "Funko Pop Game of Thrones", price: 89.90, image: "assets/got-funko.jpg" },
        { id: 5, name: "Quadrinho DC Comics", price: 29.90, image: "assets/dc-comic.jpg" },
        { id: 6, name: "Mousepad Gamer", price: 49.90, image: "assets/gamer-mousepad.jpg" },
    ];

    const blogPosts = [
        { title: "Top 10 Cenas Épicas de Animes", excerpt: "Relembrando os momentos mais emocionantes do mundo dos animes.", image: "assets/anime-scenes.jpg" },
        { title: "Guia do Colecionador: Action Figures", excerpt: "Dicas essenciais para quem quer começar ou expandir sua coleção.", image: "assets/action-figures.jpg" },
        { title: "Evolução dos Videogames", excerpt: "Uma jornada pela história dos consoles, do Atari ao PS5.", image: "assets/game-consoles.jpg" },
    ];

    const forumThreads = [
        { title: "Teoria: O futuro do MCU", author: "MarvelFan42", replies: 23 },
        { title: "Debate: Melhor saga de Star Wars", author: "JediMaster", replies: 57 },
        { title: "Dicas: Como montar um PC Gamer", author: "PCMasterRace", replies: 34 },
    ];

    const upcomingEvents = [
        { name: "Comic Con Experience", date: "05-08 Dezembro 2024" },
        { name: "Anime Friends", date: "12-14 Julho 2024" },
        { name: "BGS - Brasil Game Show", date: "09-13 Outubro 2024" },
    ];

    // Funções de renderização
    function renderProducts() {
        productContainer.innerHTML = products.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>R$ ${product.price.toFixed(2)}</p>
                    <button class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</button>
                </div>
            </div>
        `).join('');
    }

    function renderBlogPosts() {
        blogGrid.innerHTML = blogPosts.map(post => `
            <div class="blog-post">
                <img src="${post.image}" alt="${post.title}">
                <div class="blog-content">
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <a href="#" class="read-more">Ler mais</a>
                </div>
            </div>
        `).join('');
    }

    function renderForumPreview() {
        forumPreview.innerHTML = `
            <h3>Tópicos Recentes</h3>
            ${forumThreads.map(thread => `
                <div class="forum-thread">
                    <h4>${thread.title}</h4>
                    <p>Por ${thread.author} | ${thread.replies} respostas</p>
                </div>
            `).join('')}
        `;
    }

    function renderEvents() {
        eventsSection.innerHTML = `
            <h3>Próximos Eventos</h3>
            <ul>
                ${upcomingEvents.map(event => `
                    <li>
                        <strong>${event.name}</strong>
                        <span>${event.date}</span>
                    </li>
                `).join('')}
            </ul>
        `;
    }

    // Carrinho de compras
    let cart = [];

    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            updateCartCount();
            // Aqui você pode adicionar uma animação ou notificação de que o item foi adicionado
        }
    }

    // Event Listeners
    productContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        }
    });

    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        // Aqui você adicionaria a lógica para processar a inscrição na newsletter
        alert(`Obrigado por se inscrever com o email: ${email}`);
        this.reset();
    });

    // Efeito de parallax para as estrelas
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        document.getElementById('stars').style.transform = `translateY(${scrollPosition * 0.1}px)`;
        document.getElementById('stars2').style.transform = `translateY(${scrollPosition * 0.2}px)`;
        document.getElementById('stars3').style.transform = `translateY(${scrollPosition * 0.3}px)`;
    });

    // Inicialização
    renderProducts();
    renderBlogPosts();
    renderForumPreview();
    renderEvents();
    updateCartCount();

    // Animação suave de scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Efeito de fade-in para elementos quando entram na viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.product-card, .blog-post, .collection-item').forEach(el => {
        observer.observe(el);
    });
});