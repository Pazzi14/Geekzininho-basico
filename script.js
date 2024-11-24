document.addEventListener('DOMContentLoaded', () => {
    // Carrinho de compras
    let carrinho = [];
    const cartCountElement = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const itensCarrinho = document.getElementById('itens-carrinho');
    const totalCarrinho = document.getElementById('total-carrinho');
    const carrinhoSidebar = document.getElementById('carrinho-sidebar');
    const fecharCarrinhoBtn = document.getElementById('fechar-carrinho');
    const cartIcon = document.querySelector('.cart-icon');

    function atualizarCarrinho() {
        itensCarrinho.innerHTML = '';
        let total = 0;
        carrinho.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
            itensCarrinho.appendChild(li);
            total += item.preco;
        });
        totalCarrinho.textContent = total.toFixed(2);
        cartCountElement.textContent = carrinho.length;
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const produto = button.closest('.produto');
            const nome = produto.querySelector('h4').textContent;
            const preco = parseFloat(produto.querySelector('.preco').textContent.replace('R$ ', ''));
            carrinho.push({ nome, preco });
            atualizarCarrinho();
            createConfetti();
        });
    });

    cartIcon.addEventListener('click', () => {
        carrinhoSidebar.classList.add('aberto');
    });

    fecharCarrinhoBtn.addEventListener('click', () => {
        carrinhoSidebar.classList.remove('aberto');
    });

    // Cálculo de frete
    const calcularFreteBtn = document.getElementById('calcular-frete');
    const resultadoFrete = document.getElementById('resultado-frete');

    calcularFreteBtn.addEventListener('click', () => {
        const tipoEntrega = document.getElementById('tipo-entrega').value;
        const cepOuPais = document.getElementById('cep-ou-pais').value;

        let frete = 0;
        if (tipoEntrega === 'nacional') {
            frete = Math.random() * 50 + 10; // Valor entre 10 e 60 reais
        } else {
            frete = Math.random() * 150 + 50; // Valor entre 50 e 200 reais
        }

        resultadoFrete.textContent = `Frete estimado: R$ ${frete.toFixed(2)}`;
    });

    // Menu responsivo
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('aberto');
    });

    // Filtro de produtos
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const produtos = document.querySelectorAll('.produto');

    filtroBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filtroBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const categoria = btn.getAttribute('data-categoria');

            produtos.forEach(produto => {
                if (categoria === 'todos' || produto.classList.contains(categoria)) {
                    produto.style.display = 'block';
                } else {
                    produto.style.display = 'none';
                }
            });
        });
    });

    // Citações geek
    const quotes = [
        { text: "Que a Força esteja com você.", author: "Star Wars" },
        { text: "Vida longa e próspera.", author: "Star Trek" },
        { text: "Eu sou o Homem de Ferro.", author: "Tony Stark, Vingadores" },
        { text: "É perigoso ir sozinho! Pegue isto.", author: "The Legend of Zelda" },
        { text: "O bolo é uma mentira.", author: "Portal" }
    ];

    function updateQuote() {
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById('quote-text').textContent = quote.text;
        document.getElementById('quote-author').textContent = `- ${quote.author}`;
    }

    updateQuote();
    setInterval(updateQuote, 10000); // Atualiza a cada 10 segundos

    // Easter egg Konami Code
    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konami[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konami.length) {
                alert('Código Konami ativado! Você ganhou 30 vidas extras!');
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    // Animação de ícones de pixel art
    function animatePixelIcons() {
        const pixelIcons = document.querySelectorAll('.pixel-art-icon');
        pixelIcons.forEach(icon => {
            icon.style.backgroundPosition = `${Math.floor(Math.random() * 4) * -32}px 0`;
        });
    }

    setInterval(animatePixelIcons, 2000);

    // Efeito de hover nos produtos
    function addProductHoverEffect() {
        const produtos = document.querySelectorAll('.produto');
        produtos.forEach(produto => {
            produto.addEventListener('mouseenter', () => {
                produto.style.transform = 'scale(1.05)';
                produto.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            });
            produto.addEventListener('mouseleave', () => {
                produto.style.transform = 'scale(1)';
                produto.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            });
        });
    }

    addProductHoverEffect();

    // Efeito de parallax no hero
    function parallaxEffect() {
        const hero = document.querySelector('.hero');
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        });
    }

    parallaxEffect();

    // Tooltips nas conquistas geek
    function addAchievementTooltips() {
        const achievements = document.querySelectorAll('.achievement');
        achievements.forEach(achievement => {
            const tooltip = achievement.getAttribute('title');
            const tooltipElement = document.createElement('span');
            tooltipElement.classList.add('tooltip');
            tooltipElement.textContent = tooltip;
            achievement.appendChild(tooltipElement);

            achievement.addEventListener('mouseenter', () => {
                tooltipElement.style.opacity = '1';
                tooltipElement.style.visibility = 'visible';
            });

            achievement.addEventListener('mouseleave', () => {
                tooltipElement.style.opacity = '0';
                tooltipElement.style.visibility = 'hidden';
            });
        });
    }

    addAchievementTooltips();

    // Efeito de digitação na seção hero
    function typeWriter(element, text, speed) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    const heroTitle = document.querySelector('.hero h1');
    typeWriter(heroTitle, "Bem-vindo ao GEEKZINHO BÁSICO", 100);

    // Efeito de contagem nos números do carrinho
    function animateCartCount(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Efeito de fade in nos posts do blog
    function fadeInBlogPosts() {
        const blogPosts = document.querySelectorAll('.blog-post');
        blogPosts.forEach((post, index) => {
            setTimeout(() => {
                post.style.opacity = '1';
                post.style.transform = 'translateY(0)';
            }, 200 * index);
        });
    }

    fadeInBlogPosts();

    // Rolagem suave para links internos
    function smoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
    }

    smoothScroll();

    // Efeito de zoom nas imagens dos produtos
    function zoomProductImages() {
        const productImages = document.querySelectorAll('.produto img');
        productImages.forEach(img => {
            img.addEventListener('mouseenter', () => {
                img.style.transform = 'scale(1.1)';
            });
            img.addEventListener('mouseleave', () => {
                img.style.transform = 'scale(1)';
            });
        });
    }

    zoomProductImages();

    // Efeito de mudança de cor no botão CTA
    function pulsingCTAButton() {
        const ctaButton = document.querySelector('.cta-button');
        let hue = 0;
        setInterval(() => {
            hue = (hue + 1) % 360;
            ctaButton.style.backgroundColor = `hsl(${hue}, 70%, 50%)`;
        }, 50);
    }

    pulsingCTAButton();

    // Efeito de confete ao adicionar produto ao carrinho
    function createConfetti() {
        const confettiCount = 100;
        const confettiContainer = document.createElement('div');
        confettiContainer.style.position = 'fixed';
        confettiContainer.style.top = '0';
        confettiContainer.style.left = '0';
        confettiContainer.style.width = '100%';
        confettiContainer.style.height = '100%';
        confettiContainer.style.pointerEvents = 'none';
        confettiContainer.style.zIndex = '9999';
        document.body.appendChild(confettiContainer);

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.top = '-10px';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confettiContainer.appendChild(confetti);

            const animation = confetti.animate([
                { transform: `translate(0, 0) rotate(0)` },
                { transform: `translate(${Math.random() * 100 - 50}px, ${window.innerHeight}px) rotate(${Math.random() * 360}deg)` }
            ], {
                duration: Math.random() * 1000 + 1000,
                easing: 'cubic-bezier(0, .9, .57, 1)',
                delay: Math.random() * 1000
            });

            animation.onfinish = () => confetti.remove();
        }

        setTimeout(() => confettiContainer.remove(), 5000);
    }

    // Remover tela de carregamento
    window.addEventListener('load', () => {
        document.getElementById('loading-screen').style.display = 'none';
    });

    // Inicialização final
    console.log('GEEKZINHO BÁSICO - Site inicializado com sucesso!');
});
