// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const cartIcon = document.querySelector('.icon-cart');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartClose = document.querySelector('.cart-close');
    const productSlider = document.querySelector('.product-slider');
    const blogGrid = document.querySelector('.blog-grid');
    const newsletterForm = document.getElementById('newsletter-form');

    // Dados simulados
    const featuredProducts = [
        { id: 1, name: 'Camiseta Marvel', price: 59.90, image: 'assets/marvel-tshirt.jpg' },
        { id: 2, name: 'Moletom Star Wars', price: 129.90, image: 'assets/star-wars-hoodie.jpg' },
        { id: 3, name: 'Caneca Anime', price: 39.90, image: 'assets/anime-mug.jpg' },
        { id: 4, name: 'Action Figure Zelda', price: 199.90, image: 'assets/zelda-figure.jpg' },
    ];

    const blogPosts = [
        { title: 'Top 10 Camisetas Geek', excerpt: 'Confira nossa seleção das melhores camisetas geek do momento!', image: 'assets/blog-tshirts.jpg' },
        { title: 'Guia de Presentes Nerds', excerpt: 'Não sabe o que dar de presente? Temos as melhores sugestões para você!', image: 'assets/blog-gifts.jpg' },
        { title: 'Tendências Geek 2024', excerpt: 'Descubra o que está bombando no universo geek neste ano!', image: 'assets/blog-trends.jpg' },
    ];

    // Funções
    function toggleCart() {
        cartSidebar.classList.toggle('open');
    }

    function renderFeaturedProducts() {
        productSlider.innerHTML = featuredProducts.map(product => `
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

    function handleNewsletterSubmit(e) {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        // Simulação de envio
        showLoading();
        setTimeout(() => {
            hideLoading();
            alert(`Obrigado por se inscrever com o email: ${email}`);
            e.target.reset();
        }, 2000);
    }

    function showLoading() {
        const overlay = document.createElement('div');
        overlay.classList.add('loading-overlay');
        overlay.innerHTML = '<div class="loading-spinner"></div>';
        document.body.appendChild(overlay);
    }

    function hideLoading() {
        const overlay = document.querySelector('.loading-overlay');
        if (overlay) {
            overlay.remove();
        }
    }

    // Event Listeners
    cartIcon.addEventListener('click', toggleCart);
    cartClose.addEventListener('click', toggleCart);
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);

    // Inicialização
    renderFeaturedProducts();
    renderBlogPosts();

    // Animação de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animação de entrada para elementos
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.collection-item, .product-card, .blog-post').forEach(el => {
        observer.observe(el);
    });
});