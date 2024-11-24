document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.querySelector('.cart-icon');
    const cartSidebar = document.querySelector('.carrinho-sidebar');
    const closeCartButton = document.getElementById('fechar-carrinho');
    const filterButtons = document.querySelectorAll('.filtro-btn');
    const allProducts = document.querySelectorAll('.produto');

    cartIcon.addEventListener('click', () => {
        cartSidebar.classList.toggle('aberto');
    });

    closeCartButton.addEventListener('click', () => {
        cartSidebar.classList.remove('aberto');
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-categoria');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            allProducts.forEach(product => {
                if (category === 'todos' || product.classList.contains(category)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });
});
