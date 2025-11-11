// Sample product data
const produtos = [
    {
        id: 1,
        nome: 'Cadeira',
        descricao: 'Cadeira gamer supreme Facthus',
        preco: 1999.99,
        imagem: 'data:image/webp;base64,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'
    },
    {
        id: 2,
        nome: 'Ar condicionado',
        descricao: 'SPLIT 12000 INVERTER FRIO',
        preco: 2029.90,
        imagem: 'https://images.colombo.com.br/produtos/4446570/4446570_Ar_Condicionado_Split_Britania_12000_BTUs_Inverter_Frio_220V_BAC12000ITFM9W_12354769_z.jpg?ims=550x550'
    },
    {
        id: 3,
        nome: 'Alexa Echo Dot',
        descricao: 'O Echo Dot com o melhor som já lançado: curta uma experiência sonora ainda melhor em comparação às' +
            'versões anteriores do Echo Dot com Alexa e ouça vocais mais nítidos, graves mais potentes e um som vibrante' +
            'em qualquer ambiente.',
        preco: 549.00,
        imagem: 'https://images.indianexpress.com/2024/02/amazon-alexa-echo-featured.jpg?w=640'
    },
    {
        id: 4,
        nome: 'BTV',
        descricao: 'Aparelho de TV',
        preco: 1080.00,
        imagem: 'https://th.bing.com/th/id/OIP.g9iFyet6g0XO_c_RJQ-uKwHaEK?w=324&h=182&c=7&r=0&o=7&cb=ucfimgc2&dpr=2&pid=1.7&rm=3'
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
