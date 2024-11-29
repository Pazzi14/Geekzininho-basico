// Inicialização do Three.js para o fundo do universo
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('universe-background').appendChild(renderer.domElement);

// Criar estrelas
const starsGeometry = new THREE.BufferGeometry();
const starsMaterial = new THREE.PointsMaterial({color: 0xFFFFFF});

const starsVertices = [];
for (let i = 0; i < 10000; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = -Math.random() * 2000;
    starsVertices.push(x, y, z);
}

starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
const stars = new THREE.Points(starsGeometry, starsMaterial);
scene.add(stars);

camera.position.z = 5;

function animateUniverse() {
    requestAnimationFrame(animateUniverse);
    stars.rotation.y += 0.0002;
    renderer.render(scene, camera);
}
animateUniverse();

// Produtos da Loja Quântica
const products = [
    { id: 1, name: "Sabre de Luz Quântico", price: 999.99, image: "lightsaber.jpg" },
    { id: 2, name: "Camiseta Viagem no Tempo", price: 49.99, image: "time-travel-tshirt.jpg" },
    { id: 3, name: "Capacete Iron Man Nanotech", price: 1299.99, image: "ironman-helmet.jpg" },
    { id: 4, name: "Poção de Mana Infinita", price: 79.99, image: "mana-potion.jpg" },
    // Adicione mais produtos aqui
];

const productMultiverse = document.querySelector('.product-multiverse');

products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product-card', 'hologram');
    productElement.innerHTML = `
        <img src="assets/${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">$${product.price.toFixed(2)}</p>
        <button class="buy-btn plasma-effect">Adicionar ao Inventário</button>
    `;
    productMultiverse.appendChild(productElement);
});

// Blog Posts
const blogPosts = [
    { title: "O Futuro dos RPGs de Mesa", excerpt: "Explorando como a realidade aumentada está revolucionando as sessões de RPG.", image: "rpg-future.jpg" },
    { title: "Top 10 Crossovers de Quadrinhos", excerpt: "Os encontros mais épicos entre universos de quadrinhos que você precisa ler.", image: "comic-crossovers.jpg" },
    { title: "Guia do Cosplay Cyberpunk", excerpt: "Dicas e truques para criar o cosplay cyberpunk perfeito para sua próxima convenção.", image: "cyberpunk-cosplay.jpg" },
    // Adicione mais posts aqui
];

const blogMatrix = document.querySelector('.blog-matrix');

blogPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post', 'cyber-card');
    postElement.innerHTML = `
        <img src="assets/${post.image}" alt="${post.title}">
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <a href="#" class="read-more neon-text">Ler Mais</a>
    `;
    blogMatrix.appendChild(postElement);
});

// Animações GSAP
gsap.from(".hero-content", {duration: 1, opacity: 0, y: 50, ease: "power3.out"});
gsap.from(".product-card", {duration: 0.8, opacity: 0, y: 30, stagger: 0.2, ease: "power2.out"});
gsap.from(".blog-post", {duration: 0.8, opacity: 0, x: -30, stagger: 0.2, ease: "power2.out"});

// Efeito de Hover nos botões
document.querySelectorAll('.plasma-effect').forEach(button => {
    button.addEventListener('mouseover', () => {
        gsap.to(button, {scale: 1.1, duration: 0.3, ease: "power2.out"});
    });
    button.addEventListener('mouseout', () => {
        gsap.to(button, {scale: 1, duration: 0.3, ease: "power2.out"});
    });
});

// Implementação do chat ao vivo e fórum (simulado)
const forumThreads = [
    { title: "Teoria: Conexões entre o MCU e o Multiverso DC", author: "MarvelFanatic", replies: 42 },
    { title: "Grupo de Jogo: D&D 5e Campanha Cyberpunk", author: "CyberDM", replies: 18 },
    { title: "Debate: Star Wars vs. Star Trek", author: "GalacticDebater", replies: 99 },
];

const forumElement = document.querySelector('.forum-threads');
forumThreads.forEach(thread => {
    const threadElement = document.createElement('div');
    threadElement.classList.add('forum-thread');
    threadElement.innerHTML = `
        <h4>${thread.title}</h4>
        <p>Por ${thread.author} | ${thread.replies} respostas</p>
    `;
    forumElement.appendChild(threadElement);
});

// Simulação de chat ao vivo
const chatMessages = [
    { user: "GeekMaster", message: "Alguém animado para o próximo filme da Marvel?" },
    { user: "Sci-FiLover", message: "Acabei de terminar de ler Neuromancer. Que obra-prima!" },
    { user: "GameDevPro", message: "Alguma dica para quem está começando a desenvolver jogos indie?" },
];

const chatElement = document.querySelector('.live-chat');
chatMessages.forEach(msg => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.innerHTML = `<strong>${msg.user}:</strong> ${msg.message}`;
    chatElement.appendChild(messageElement);
});

// Adicione mais interatividade e funcionalidades conforme necessário