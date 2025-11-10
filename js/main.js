// Sample product data
const produtos = [
    {
        id: 1,
        nome: 'Cadera',
        descricao: 'Cadera massa',
        preco: 1999.99,
        imagem: 'https://tse3.mm.bing.net/th/id/OIP.Pu8PuSf_1zylw6n1J5DgSQHaHa?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
];

// Format currency
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

function RenderHeader() {
    const header = document.getElementById('header');

    if (!header) return;

    header.innerHTML = `
    <div class="container mx-auto">
        <nav class="mt-2 w-full">
            <a href="index.html" class="block sm:hidden justify-self-center">
                <img src="../assets/logo.jpeg" class="h-16" alt="Logo Nico Eletro">
            </a>
            <ul class="flex space-x-4 items-center sm:justify-start sm:mt-auto mt-4 justify-center">
                <li class="hidden sm:block">
                    <a href="index.html">
                        <img src="../assets/logo.jpeg" class="h-16" alt="Logo Nico Eletro">
                    </a>
                </li>
                <li>
                    <a href="index.html#produtos" class="hover:underline">Produtos</a>
                </li>
                <li>
                    <a href="about.html" class="hover:underline">Sobre Nós</a>
                </li>
                <li>
                    <a href="about.html#contato" class="hover:underline">Contato</a>
                </li>
            </ul>
        </nav>
    </div>`
}

// Render products
function RenderProdutos() {
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
    RenderProdutos();
    RenderHeader();


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
