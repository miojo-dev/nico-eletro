// Sample product data
const produtos = [
    {
        id: 1,
        nome: 'Cadera',
        descricao: 'Cadera massa',
        preco: 1999.99,
        imagem: 'https://via.placeholder.com/300x200?text=Smartphone+XYZ'
    },
];

// Format currency
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

// Render products
function renderizarProdutos() {
    const container = document.getElementById('produtos-lista');

    if (!container) return;

    container.innerHTML = produtos.map(produto => `
        <div class="bg-tan rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src="${produto.imagem}" alt="${produto.nome}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-lg font-semibold">${produto.nome}</h3>
                <p class="text-gray-600 text-sm my-2">${produto.descricao}</p>
                <div class="flex justify-between items-center mt-4">
                    <span class="text-blue-600 font-bold">
                        ${formatarMoeda(produto.preco)}
                    </span>
                    <button class="bg-s-blue text-tan px-4 py-2 rounded hover-bg-p-blue 
                    transform hover:scale-105 transition-all duration-200 ease-in-out"
                    >
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos();

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
