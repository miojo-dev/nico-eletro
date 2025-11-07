// Sample product data
const produtos = [
    {
        id: 1,
        nome: 'Smartphone XYZ',
        descricao: 'Último modelo com câmera de alta resolução',
        preco: 1999.99,
        imagem: 'https://via.placeholder.com/300x200?text=Smartphone+XYZ'
    },
    {
        id: 2,
        nome: 'Notebook Pro',
        descricao: 'Alto desempenho para trabalho e jogos',
        preco: 4599.99,
        imagem: 'https://via.placeholder.com/300x200?text=Notebook+Pro'
    },
    {
        id: 3,
        nome: 'Fones Bluetooth',
        descricao: 'Áudio de alta qualidade sem fio',
        preco: 299.99,
        imagem: 'https://via.placeholder.com/300x200?text=Fones+Bluetooth'
    }
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
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src="${produto.imagem}" alt="${produto.nome}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-lg font-semibold">${produto.nome}</h3>
                <p class="text-gray-600 text-sm my-2">${produto.descricao}</p>
                <div class="flex justify-between items-center mt-4">
                    <span class="text-blue-600 font-bold">${formatarMoeda(produto.preco)}</span>
                    <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
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
