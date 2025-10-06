// Dados dos veículos
const vehicles = [
    {
        id: 1,
        name: "Honda Civic 2020",
        price: "R$ 89.900",
        oldPrice: "R$ 95.000",
        image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800",
        year: "2020",
        km: "45.000",
        fuel: "Flex",
        transmission: "Automático",
        color: "Branco",
        description: "Honda Civic 2020 em excelente estado de conservação. Veículo revisado, com manual e chave reserva.",
        features: ["Ar Condicionado", "Direção Hidráulica", "Vidros Elétricos", "Trava Elétrica", "Airbag", "ABS"],
        isOffer: true,
        isPriceDrop: false
    },
    {
        id: 2,
        name: "Toyota Corolla 2019",
        price: "R$ 79.900",
        image: "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800",
        year: "2019",
        km: "38.000",
        fuel: "Flex",
        transmission: "CVT",
        color: "Prata",
        description: "Toyota Corolla 2019 com baixa quilometragem. Único dono, todas as revisões em dia.",
        features: ["Central Multimídia", "Câmera de Ré", "Sensores de Estacionamento", "Controle de Cruzeiro"],
        isOffer: false,
        isPriceDrop: false
    },
    {
        id: 3,
        name: "Volkswagen Jetta 2018",
        price: "R$ 69.900",
        oldPrice: "R$ 75.000",
        image: "https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800",
        year: "2018",
        km: "52.000",
        fuel: "Flex",
        transmission: "Automático",
        color: "Preto",
        description: "Volkswagen Jetta 2018 completo. Excelente custo-benefício para quem busca conforto e economia.",
        features: ["Bancos de Couro", "Teto Solar", "Faróis de LED", "Sistema Start/Stop"],
        isOffer: false,
        isPriceDrop: true
    },
    {
        id: 4,
        name: "Hyundai Elantra 2021",
        price: "R$ 94.900",
        image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800",
        year: "2021",
        km: "25.000",
        fuel: "Flex",
        transmission: "Automático",
        color: "Azul",
        description: "Hyundai Elantra 2021 seminovo. Garantia de fábrica ainda válida.",
        features: ["Painel Digital", "Carregador Wireless", "Apple CarPlay", "Android Auto"],
        isOffer: true,
        isPriceDrop: false
    },
    {
        id: 5,
        name: "Nissan Sentra 2020",
        price: "R$ 74.900",
        image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
        year: "2020",
        km: "41.000",
        fuel: "Flex",
        transmission: "CVT",
        color: "Vermelho",
        description: "Nissan Sentra 2020 com design moderno e tecnologia avançada.",
        features: ["Freio Automático de Emergência", "Alerta de Mudança de Faixa", "Monitor de Ponto Cego"],
        isOffer: false,
        isPriceDrop: false
    },
    {
        id: 6,
        name: "Chevrolet Cruze 2019",
        price: "R$ 72.900",
        oldPrice: "R$ 78.000",
        image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800",
        year: "2019",
        km: "48.000",
        fuel: "Flex",
        transmission: "Automático",
        color: "Cinza",
        description: "Chevrolet Cruze 2019 LTZ. Completo e econômico.",
        features: ["MyLink", "OnStar", "Controle de Estabilidade", "Assistente de Partida em Rampa"],
        isOffer: false,
        isPriceDrop: true
    },
    {
        id: 7,
        name: "Ford Focus 2018",
        price: "R$ 59.900",
        image: "https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=800",
        year: "2018",
        km: "55.000",
        fuel: "Flex",
        transmission: "Automático",
        color: "Branco",
        description: "Ford Focus 2018 Titanium. Excelente opção para uso urbano.",
        features: ["SYNC 3", "Câmera Traseira", "Sensores Dianteiros e Traseiros", "Controle de Velocidade"],
        isOffer: true,
        isPriceDrop: false
    },
    {
        id: 8,
        name: "Kia Cerato 2020",
        price: "R$ 84.900",
        image: "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800",
        year: "2020",
        km: "32.000",
        fuel: "Flex",
        transmission: "Automático",
        color: "Prata",
        description: "Kia Cerato 2020 com garantia estendida. Design elegante e performance superior.",
        features: ["UVO Connect", "Frenagem Automática", "Assistente de Permanência na Faixa"],
        isOffer: false,
        isPriceDrop: false
    },
    {
        id: 9,
        name: "Peugeot 408 2019",
        price: "R$ 67.900",
        oldPrice: "R$ 73.000",
        image: "https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800",
        year: "2019",
        km: "46.000",
        fuel: "Flex",
        transmission: "Automático",
        color: "Preto",
        description: "Peugeot 408 2019 Griffe. Conforto e sofisticação franceses.",
        features: ["Head-Up Display", "Massageador nos Bancos", "Teto Panorâmico", "Navegador GPS"],
        isOffer: false,
        isPriceDrop: true
    },
    {
        id: 10,
        name: "Volkswagen Virtus 2021",
        price: "R$ 79.900",
        image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800",
        year: "2021",
        km: "28.000",
        fuel: "TSI",
        transmission: "Automático",
        color: "Azul",
        description: "Volkswagen Virtus 2021 Highline. Motor turbo e tecnologia de ponta.",
        features: ["VW Play", "App Connect", "Controle Adaptativo de Velocidade", "Faróis Full LED"],
        isOffer: true,
        isPriceDrop: false
    },
    {
        id: 11,
        name: "Renault Fluence 2018",
        price: "R$ 54.900",
        image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
        year: "2018",
        km: "58.000",
        fuel: "Flex",
        transmission: "CVT",
        color: "Vermelho",
        description: "Renault Fluence 2018 Dynamique. Sedan espaçoso e confortável.",
        features: ["MediaNav", "Câmera de Ré", "Sensor de Chuva", "Acendimento Automático dos Faróis"],
        isOffer: false,
        isPriceDrop: false
    },
    {
        id: 12,
        name: "Mitsubishi Lancer 2017",
        price: "R$ 49.900",
        oldPrice: "R$ 55.000",
        image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800",
        year: "2017",
        km: "62.000",
        fuel: "Flex",
        transmission: "CVT",
        color: "Cinza",
        description: "Mitsubishi Lancer 2017 HL-T. Tradição japonesa em qualidade e durabilidade.",
        features: ["Sistema RISE", "Controle de Tração", "7 Airbags", "Freios ABS com EBD"],
        isOffer: false,
        isPriceDrop: true
    },
    {
        id: 13,
        name: "Honda City 2020",
        price: "R$ 69.900",
        image: "https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=800",
        year: "2020",
        km: "35.000",
        fuel: "Flex",
        transmission: "CVT",
        color: "Branco",
        description: "Honda City 2020 EXL. Compacto premium com amplo espaço interno.",
        features: ["Honda SENSING", "Piloto Automático Adaptativo", "Mitigação de Colisão"],
        isOffer: true,
        isPriceDrop: false
    },
    {
        id: 14,
        name: "Toyota Yaris 2021",
        price: "R$ 74.900",
        image: "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800",
        year: "2021",
        km: "22.000",
        fuel: "Flex",
        transmission: "CVT",
        color: "Prata",
        description: "Toyota Yaris 2021 XLS. Sedan compacto com tecnologia Toyota Safety Sense.",
        features: ["Toyota Safety Sense", "Pré-Colisão", "Alerta de Saída de Faixa", "Farol Alto Automático"],
        isOffer: false,
        isPriceDrop: false
    },
    {
        id: 15,
        name: "Chevrolet Onix Plus 2020",
        price: "R$ 64.900",
        oldPrice: "R$ 69.000",
        image: "https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800",
        year: "2020",
        km: "40.000",
        fuel: "Flex",
        transmission: "Automático",
        color: "Preto",
        description: "Chevrolet Onix Plus 2020 Premier. O sedan mais vendido do Brasil.",
        features: ["MyLink", "Carregamento por Indução", "Alerta de Colisão Frontal", "Câmera 180°"],
        isOffer: false,
        isPriceDrop: true
    },
    {
        id: 16,
        name: "Fiat Cronos 2019",
        price: "R$ 59.900",
        image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800",
        year: "2019",
        km: "51.000",
        fuel: "Flex",
        transmission: "Automático",
        color: "Azul",
        description: "Fiat Cronos 2019 Precision. Design italiano e tecnologia moderna.",
        features: ["Uconnect", "Controle de Velocidade", "Sensor de Estacionamento Traseiro"],
        isOffer: true,
        isPriceDrop: false
    },
    {
        id: 17,
        name: "Hyundai HB20S 2020",
        price: "R$ 62.900",
        image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
        year: "2020",
        km: "37.000",
        fuel: "Flex",
        transmission: "Automático",
        color: "Vermelho",
        description: "Hyundai HB20S 2020 Evolution. Sedan compacto com excelente custo-benefício.",
        features: ["Bluelink", "Partida Remota", "Monitoramento Veicular", "SOS Automático"],
        isOffer: false,
        isPriceDrop: false
    },
    {
        id: 18,
        name: "Volkswagen Polo 2018",
        price: "R$ 52.900",
        oldPrice: "R$ 57.000",
        image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800",
        year: "2018",
        km: "54.000",
        fuel: "Flex",
        transmission: "Automático",
        color: "Cinza",
        description: "Volkswagen Polo 2018 Highline. Hatchback premium com acabamento refinado.",
        features: ["Composition Media", "App Connect", "Climatizador Automático", "Retrovisores Elétricos"],
        isOffer: false,
        isPriceDrop: true
    },
    {
        id: 19,
        name: "Ford Ka Sedan 2019",
        price: "R$ 47.900",
        image: "https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=800",
        year: "2019",
        km: "48.000",
        fuel: "Flex",
        transmission: "Automático",
        color: "Branco",
        description: "Ford Ka Sedan 2019 Titanium. Compacto ideal para cidade.",
        features: ["SYNC 3", "Ar Digital", "Controle de Estabilidade", "Assistente de Partida"],
        isOffer: true,
        isPriceDrop: false
    },
    {
        id: 20,
        name: "Nissan March 2018",
        price: "R$ 44.900",
        image: "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800",
        year: "2018",
        km: "56.000",
        fuel: "Flex",
        transmission: "CVT",
        color: "Prata",
        description: "Nissan March 2018 SL. Hatchbook econômico e confiável.",
        features: ["Computador de Bordo", "Direção Elétrica", "Ar Condicionado", "Vidros Elétricos"],
        isOffer: false,
        isPriceDrop: false
    }
];

// Elementos DOM
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const modal = document.getElementById('vehicleModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    renderVehicles();
    renderOffers();
    renderPriceDrops();
    initializeModal();
});

// Navegação responsiva
function initializeNavigation() {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Renderizar todos os veículos
function renderVehicles() {
    const vehiclesGrid = document.getElementById('vehiclesGrid');
    vehiclesGrid.innerHTML = vehicles.map(vehicle => createVehicleCard(vehicle)).join('');
}

// Renderizar ofertas da semana
function renderOffers() {
    const offersGrid = document.getElementById('offersGrid');
    const offerVehicles = vehicles.filter(vehicle => vehicle.isOffer);
    offersGrid.innerHTML = offerVehicles.map(vehicle => createVehicleCard(vehicle, true)).join('');
}

// Renderizar veículos com preço reduzido
function renderPriceDrops() {
    const priceDropGrid = document.getElementById('priceDropGrid');
    const priceDropVehicles = vehicles.filter(vehicle => vehicle.isPriceDrop);
    priceDropGrid.innerHTML = priceDropVehicles.map(vehicle => createVehicleCard(vehicle, false, true)).join('');
}

// Criar card de veículo
function createVehicleCard(vehicle, isOffer = false, isPriceDrop = false) {
    const whatsappMessage = encodeURIComponent(
        `Olá! Tenho interesse no ${vehicle.name} (${vehicle.year}) por ${vehicle.price}. Gostaria de mais informações.`
    );

    return `
        <article class="vehicle-card">
            ${isOffer ? '<div class="offer-badge">OFERTA DA SEMANA</div>' : ''}
            ${isPriceDrop ? '<div class="price-drop-badge">BAIXOU DE PREÇO</div>' : ''}
            <img src="${vehicle.image}" alt="${vehicle.name}" class="vehicle-image" loading="lazy">
            <div class="vehicle-info">
                <h3>${vehicle.name}</h3>
                <div class="vehicle-details">
                    <p><strong>Ano:</strong> ${vehicle.year}</p>
                    <p><strong>KM:</strong> ${vehicle.km}</p>
                    <p><strong>Combustível:</strong> ${vehicle.fuel}</p>
                    <p><strong>Câmbio:</strong> ${vehicle.transmission}</p>
                </div>
                <div class="vehicle-price">
                    ${vehicle.oldPrice ? `<span class="old-price">${vehicle.oldPrice}</span>` : ''}
                    ${vehicle.price}
                </div>
                <div class="vehicle-buttons">
                    <button class="btn-info" onclick="openModal(${vehicle.id})">
                        <i class="fas fa-info-circle"></i> Mais Info
                    </button>
                    <a href="https://wa.me/5511987654321?text=${whatsappMessage}" 
                       class="btn-whatsapp" target="_blank">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </a>
                </div>
            </div>
        </article>
    `;
}

// Modal functions
function initializeModal() {
    closeModal.addEventListener('click', closeModalFunction);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunction();
        }
    });
}

function openModal(vehicleId) {
    const vehicle = vehicles.find(v => v.id === vehicleId);
    if (!vehicle) return;

    const whatsappMessage = encodeURIComponent(
        `Olá! Tenho interesse no ${vehicle.name} (${vehicle.year}) por ${vehicle.price}. Gostaria de agendar uma visita para ver o veículo.`
    );

    modalContent.innerHTML = `
        <img src="${vehicle.image}" alt="${vehicle.name}" class="modal-vehicle-image">
        <div class="modal-vehicle-info">
            <h3>${vehicle.name}</h3>
            <p class="vehicle-price">
                ${vehicle.oldPrice ? `<span class="old-price">${vehicle.oldPrice}</span>` : ''}
                ${vehicle.price}
            </p>
            <p>${vehicle.description}</p>
            
            <div class="modal-vehicle-details">
                <div class="detail-item">
                    <strong>Ano:</strong>
                    <span>${vehicle.year}</span>
                </div>
                <div class="detail-item">
                    <strong>Quilometragem:</strong>
                    <span>${vehicle.km} km</span>
                </div>
                <div class="detail-item">
                    <strong>Combustível:</strong>
                    <span>${vehicle.fuel}</span>
                </div>
                <div class="detail-item">
                    <strong>Transmissão:</strong>
                    <span>${vehicle.transmission}</span>
                </div>
                <div class="detail-item">
                    <strong>Cor:</strong>
                    <span>${vehicle.color}</span>
                </div>
            </div>

            <div class="features-list">
                <h4>Equipamentos:</h4>
                <ul>
                    ${vehicle.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-buttons" style="margin-top: 2rem;">
                <a href="https://wa.me/5511987654321?text=${whatsappMessage}" 
                   class="btn-whatsapp" target="_blank" style="width: 100%; padding: 1rem; text-align: center;">
                    <i class="fab fa-whatsapp"></i> Entrar em Contato via WhatsApp
                </a>
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModalFunction() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Animações de scroll
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    document.querySelectorAll('.vehicle-card, .feature, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Inicializar animações quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initializeScrollAnimations, 500);
});

// Função para scroll suave no header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
        header.style.backdropFilter = 'blur(15px)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    }
});

// Preloader para imagens
function preloadImages() {
    vehicles.forEach(vehicle => {
        const img = new Image();
        img.src = vehicle.image;
    });
}

// Inicializar preload
document.addEventListener('DOMContentLoaded', preloadImages);