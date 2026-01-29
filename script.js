/**
 * ═══════════════════════════════════════════════════════════════════════════
 * GALERIA DIGITAL DE ARTE - Interface Premium
 * Uma experiência contemplativa e imersiva
 * ═══════════════════════════════════════════════════════════════════════════
 */

const artworks = [
    // ══════════════════════════════════════════════════════════════════════
    // OBRAS CLÁSSICAS - O Legado Eterno
    // ══════════════════════════════════════════════════════════════════════
    {
        title: "A Noite Estrelada",
        artist: "Vincent van Gogh",
        year: "1889",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
    },
    {
        title: "Mona Lisa",
        artist: "Leonardo da Vinci",
        year: "1503-1519",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
    },
    {
        title: "A Grande Onda de Kanagawa",
        artist: "Katsushika Hokusai",
        year: "1831",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/1280px-Tsunami_by_hokusai_19th_century.jpg"
    },
    {
        title: "O Grito",
        artist: "Edvard Munch",
        year: "1893",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg"
    },
    {
        title: "O Nascimento de Vênus",
        artist: "Sandro Botticelli",
        year: "1485",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1280px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg"
    },
    {
        title: "A Criação de Adão",
        artist: "Michelangelo",
        year: "1512",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/1280px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg"
    },
    {
        title: "Moça com Brinco de Pérola",
        artist: "Johannes Vermeer",
        year: "1665",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg"
    },
    {
        title: "A Persistência da Memória",
        artist: "Salvador Dalí",
        year: "1931",
        url: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg"
    },
    
    // ══════════════════════════════════════════════════════════════════════
    // METROPOLITAN MUSEUM OF ART
    // ══════════════════════════════════════════════════════════════════════
    {
        title: "Campo de Trigo com Ciprestes",
        artist: "Vincent van Gogh",
        year: "1889",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DP-42549-001.jpg",
        source: "Metropolitan Museum of Art"
    },
    {
        title: "Lírios",
        artist: "Vincent van Gogh",
        year: "1890",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DP346474.jpg",
        source: "Metropolitan Museum of Art"
    },
    {
        title: "Autorretrato com Chapéu de Palha",
        artist: "Vincent van Gogh",
        year: "1887",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DT1502_cropped2.jpg",
        source: "Metropolitan Museum of Art"
    },
    {
        title: "Dois Homens Contemplando a Lua",
        artist: "Caspar David Friedrich",
        year: "c. 1825-30",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DP-31997-001-NEW.jpg",
        source: "Metropolitan Museum of Art"
    },
    {
        title: "Os Ceifeiros",
        artist: "Pieter Bruegel, o Velho",
        year: "1565",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DP119115.jpg",
        source: "Metropolitan Museum of Art"
    },
    {
        title: "A Morte de Sócrates",
        artist: "Jacques-Louis David",
        year: "1787",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DP-13139-001.jpg",
        source: "Metropolitan Museum of Art"
    },
    {
        title: "Estudo de uma Jovem",
        artist: "Johannes Vermeer",
        year: "c. 1665-67",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DP353256.jpg",
        source: "Metropolitan Museum of Art"
    },
    {
        title: "Mulher Sentada ao Lado de um Vaso de Flores",
        artist: "Edgar Degas",
        year: "1865",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DP-25460-001.jpg",
        source: "Metropolitan Museum of Art"
    },
    {
        title: "Édipo e a Esfinge",
        artist: "Gustave Moreau",
        year: "1864",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DP-14201-023.jpg",
        source: "Metropolitan Museum of Art"
    },
    {
        title: "Natureza-Morta com Maçãs e Prímulas",
        artist: "Paul Cézanne",
        year: "c. 1890",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DT47.jpg",
        source: "Metropolitan Museum of Art"
    },
    {
        title: "O Rapto das Sabinas",
        artist: "Nicolas Poussin",
        year: "1633-34",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DP-29324-001.jpg",
        source: "Metropolitan Museum of Art"
    },
    {
        title: "La Berceuse (Mulher Embalando um Berço)",
        artist: "Vincent van Gogh",
        year: "1889",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DP-19279-001.jpg",
        source: "Metropolitan Museum of Art"
    },
    {
        title: "As Filhas de Catulle Mendès",
        artist: "Auguste Renoir",
        year: "1888",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DT1879.jpg",
        source: "Metropolitan Museum of Art"
    },
    {
        title: "Paisagem Panorâmica com Propriedade Rural",
        artist: "Philips Koninck",
        year: "c. 1649",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DP145898.jpg",
        source: "Metropolitan Museum of Art"
    },
    {
        title: "Ciprestes",
        artist: "Vincent van Gogh",
        year: "1889",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DP130999.jpg",
        source: "Metropolitan Museum of Art"
    },
    {
        title: "Girassóis",
        artist: "Vincent van Gogh",
        year: "1887",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DP-41223-001.jpg",
        source: "Metropolitan Museum of Art"
    },
    {
        title: "A Família Monet no Jardim de Argenteuil",
        artist: "Édouard Manet",
        year: "1874",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DP-25465-001.jpg",
        source: "Metropolitan Museum of Art"
    },
    {
        title: "Passeio de Barco",
        artist: "Édouard Manet",
        year: "1874",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DP-25466-001.jpg",
        source: "Metropolitan Museum of Art"
    },
    {
        title: "Jovem com Papagaio",
        artist: "Édouard Manet",
        year: "1866",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DP273977.jpg",
        source: "Metropolitan Museum of Art"
    },
    {
        title: "Mont Sainte-Victoire",
        artist: "Paul Cézanne",
        year: "1882-85",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DP-20099-001.jpg",
        source: "Metropolitan Museum of Art"
    },
    {
        title: "Ia Orana Maria (Ave Maria)",
        artist: "Paul Gauguin",
        year: "1891",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DT1025.jpg",
        source: "Metropolitan Museum of Art"
    },
    {
        title: "Vênus e Adônis",
        artist: "Ticiano",
        year: "1550s",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DP-19299-001.jpg",
        source: "Metropolitan Museum of Art"
    },
    {
        title: "Cardeal Fernando Niño de Guevara",
        artist: "El Greco",
        year: "c. 1600",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DP-17777-001.jpg",
        source: "Metropolitan Museum of Art"
    },
    {
        title: "Retratos de Tommaso e Maria Portinari",
        artist: "Hans Memling",
        year: "c. 1470",
        url: "https://images.metmuseum.org/CRDImages/ep/original/DT28_DT29.jpg",
        source: "Metropolitan Museum of Art"
    },
    
    // ══════════════════════════════════════════════════════════════════════
    // ART INSTITUTE OF CHICAGO
    // ══════════════════════════════════════════════════════════════════════
    {
        title: "Um Domingo na Grande Jatte",
        artist: "Georges Seurat",
        year: "1884-86",
        url: "https://www.artic.edu/iiif/2/2d484387-2509-5e8e-2c43-22f9981972eb/full/1200,/0/default.jpg",
        source: "Art Institute of Chicago"
    },
    {
        title: "Nenúfares",
        artist: "Claude Monet",
        year: "1906",
        url: "https://www.artic.edu/iiif/2/3c27b499-af56-f0d5-93b5-a7f2f1ad5813/full/1200,/0/default.jpg",
        source: "Art Institute of Chicago"
    },
    {
        title: "O Quarto de Van Gogh em Arles",
        artist: "Vincent van Gogh",
        year: "1889",
        url: "https://www.artic.edu/iiif/2/25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e/full/1200,/0/default.jpg",
        source: "Art Institute of Chicago"
    },
    {
        title: "Autorretrato",
        artist: "Vincent van Gogh",
        year: "1887",
        url: "https://www.artic.edu/iiif/2/47c5bcb8-62ef-e5d7-55e7-f5121f409a30/full/1200,/0/default.jpg",
        source: "Art Institute of Chicago"
    },
    {
        title: "Chegada do Trem de Normandia, Gare Saint-Lazare",
        artist: "Claude Monet",
        year: "1877",
        url: "https://www.artic.edu/iiif/2/0f1cc0e0-e42e-be16-3f71-2022da38cb93/full/1200,/0/default.jpg",
        source: "Art Institute of Chicago"
    },
    {
        title: "O Banho da Criança",
        artist: "Mary Cassatt",
        year: "1893",
        url: "https://www.artic.edu/iiif/2/3b885ae0-4d46-5fe4-d70a-00474827f02c/full/1200,/0/default.jpg",
        source: "Art Institute of Chicago"
    },
    {
        title: "Rua de Paris em Dia de Chuva",
        artist: "Gustave Caillebotte",
        year: "1877",
        url: "https://www.artic.edu/iiif/2/f8fd76e9-c396-5678-36ed-6a348c904d27/full/1200,/0/default.jpg",
        source: "Art Institute of Chicago"
    },
    {
        title: "A Assunção da Virgem",
        artist: "El Greco",
        year: "1577-79",
        url: "https://www.artic.edu/iiif/2/47fd1564-93f5-f30b-7786-013421133b4a/full/1200,/0/default.jpg",
        source: "Art Institute of Chicago"
    },
    
    // ══════════════════════════════════════════════════════════════════════
    // WIKIMEDIA COMMONS - Alta Resolução
    // ══════════════════════════════════════════════════════════════════════
    {
        title: "A Ronda Noturna",
        artist: "Rembrandt van Rijn",
        year: "1642",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/1280px-The_Night_Watch_-_HD.jpg",
        source: "Rijksmuseum / Wikimedia Commons"
    },
    {
        title: "A Leiteira",
        artist: "Johannes Vermeer",
        year: "c. 1658",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg/1024px-Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg",
        source: "Rijksmuseum / Wikimedia Commons"
    },
    {
        title: "O Beijo",
        artist: "Gustav Klimt",
        year: "1907-08",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/1024px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
        source: "Wikimedia Commons"
    },
    {
        title: "O Carro de Feno",
        artist: "John Constable",
        year: "1821",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/John_Constable_The_Hay_Wain.jpg/1280px-John_Constable_The_Hay_Wain.jpg",
        source: "Wikimedia Commons"
    },
    {
        title: "O Navio Negreiro",
        artist: "J.M.W. Turner",
        year: "1840",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Slave-ship.jpg/1280px-Slave-ship.jpg",
        source: "Wikimedia Commons"
    },
    {
        title: "Impressão, Nascer do Sol",
        artist: "Claude Monet",
        year: "1872",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/1280px-Monet_-_Impression%2C_Sunrise.jpg",
        source: "Wikimedia Commons"
    },
    {
        title: "Baile no Moulin de la Galette",
        artist: "Pierre-Auguste Renoir",
        year: "1876",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg/1280px-Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg",
        source: "Wikimedia Commons"
    },
    {
        title: "Almoço na Relva",
        artist: "Édouard Manet",
        year: "1863",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg/1280px-Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg",
        source: "Wikimedia Commons"
    },
    {
        title: "A Vocação de São Mateus",
        artist: "Caravaggio",
        year: "1599-1600",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg/1280px-The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg",
        source: "Wikimedia Commons"
    },
    {
        title: "A Primavera",
        artist: "Sandro Botticelli",
        year: "c. 1482",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Botticelli-primavera.jpg/1280px-Botticelli-primavera.jpg",
        source: "Wikimedia Commons"
    },
    {
        title: "A Escola de Atenas",
        artist: "Rafael Sanzio",
        year: "1509-11",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1280px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
        source: "Wikimedia Commons"
    },
    {
        title: "O Jardim das Delícias Terrenas (Painel Central)",
        artist: "Hieronymus Bosch",
        year: "c. 1490-1510",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/The_Garden_of_earthly_delights.jpg/1280px-The_Garden_of_earthly_delights.jpg",
        source: "Wikimedia Commons"
    }
];

// ═══════════════════════════════════════════════════════════════════════════
// ESTADO DA GALERIA
// ═══════════════════════════════════════════════════════════════════════════

const state = {
    currentIndex: 0,
    isPlaying: true,
    isTransitioning: false,
    slideInterval: null,
    progressInterval: null,
    activityTimeout: null,
    progress: 0
};

const CONFIG = {
    SLIDE_DURATION: 18000,      // 18 segundos por obra
    TRANSITION_DURATION: 2500, // 2.5 segundos de fade
    ACTIVITY_TIMEOUT: 3000,    // 3 segundos até esconder UI
    PROGRESS_UPDATE: 50        // Atualização da barra de progresso
};

// ═══════════════════════════════════════════════════════════════════════════
// ELEMENTOS DO DOM
// ═══════════════════════════════════════════════════════════════════════════

const elements = {
    gallery: document.querySelector('.gallery'),
    artwork: document.getElementById('artwork'),
    artworkNext: document.getElementById('artwork-next'),
    title: document.getElementById('title'),
    artist: document.getElementById('artist'),
    year: document.getElementById('year'),
    info: document.getElementById('info'),
    controls: document.getElementById('controls'),
    prevBtn: document.getElementById('prev'),
    playPauseBtn: document.getElementById('playpause'),
    nextBtn: document.getElementById('next'),
    progress: document.getElementById('progress'),
    currentNum: document.getElementById('current-num'),
    totalNum: document.getElementById('total-num')
};

// ═══════════════════════════════════════════════════════════════════════════
// FUNÇÕES PRINCIPAIS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Embaralha as obras para experiência única
 */
function shuffleArtworks() {
    for (let i = artworks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [artworks[i], artworks[j]] = [artworks[j], artworks[i]];
    }
}

/**
 * Pré-carrega uma imagem
 */
function preloadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
    });
}

/**
 * Exibe uma obra com transição suave
 */
async function displayArtwork(index, immediate = false) {
    if (state.isTransitioning && !immediate) return;
    state.isTransitioning = true;
    
    const artwork = artworks[index];
    
    // Esconde info durante transição
    elements.info.classList.remove('visible', 'entering');
    
    // Fade out atual
    elements.artwork.classList.add('fade-out');
    elements.artwork.classList.remove('kenburns');
    
    // Pré-carrega próxima imagem
    try {
        await preloadImage(artwork.url);
    } catch (e) {
        console.warn('Falha ao carregar:', artwork.title);
    }
    
    // Aguarda transição
    await sleep(immediate ? 100 : CONFIG.TRANSITION_DURATION);
    
    // Atualiza imagem e info
    elements.artwork.src = artwork.url;
    elements.artwork.alt = artwork.title;
    elements.title.textContent = artwork.title;
    elements.artist.textContent = artwork.artist;
    elements.year.textContent = artwork.year;
    
    // Atualiza contador
    elements.currentNum.textContent = index + 1;
    
    // Fade in
    elements.artwork.classList.remove('fade-out');
    elements.artwork.classList.add('fade-in', 'kenburns');
    
    // Mostra info com animação
    await sleep(800);
    elements.info.classList.add('visible', 'entering');
    
    state.isTransitioning = false;
    
    // Reset progress
    resetProgress();
}

/**
 * Navega para próxima obra
 */
function nextArtwork() {
    state.currentIndex = (state.currentIndex + 1) % artworks.length;
    displayArtwork(state.currentIndex);
    
    // Pré-carrega a próxima
    const nextIndex = (state.currentIndex + 1) % artworks.length;
    preloadImage(artworks[nextIndex].url);
}

/**
 * Navega para obra anterior
 */
function prevArtwork() {
    state.currentIndex = (state.currentIndex - 1 + artworks.length) % artworks.length;
    displayArtwork(state.currentIndex);
}

/**
 * Alterna play/pause
 */
function togglePlayPause() {
    state.isPlaying = !state.isPlaying;
    
    const iconPause = elements.playPauseBtn.querySelector('.icon-pause');
    const iconPlay = elements.playPauseBtn.querySelector('.icon-play');
    
    if (state.isPlaying) {
        iconPause.classList.remove('hidden');
        iconPlay.classList.add('hidden');
        startSlideshow();
    } else {
        iconPause.classList.add('hidden');
        iconPlay.classList.remove('hidden');
        stopSlideshow();
    }
}

/**
 * Inicia slideshow
 */
function startSlideshow() {
    stopSlideshow();
    state.slideInterval = setInterval(() => {
        if (!state.isTransitioning) {
            nextArtwork();
        }
    }, CONFIG.SLIDE_DURATION);
    startProgress();
}

/**
 * Para slideshow
 */
function stopSlideshow() {
    clearInterval(state.slideInterval);
    clearInterval(state.progressInterval);
}

/**
 * Inicia barra de progresso
 */
function startProgress() {
    clearInterval(state.progressInterval);
    state.progress = 0;
    
    state.progressInterval = setInterval(() => {
        state.progress += (CONFIG.PROGRESS_UPDATE / CONFIG.SLIDE_DURATION) * 100;
        if (state.progress > 100) state.progress = 100;
        elements.progress.style.width = state.progress + '%';
    }, CONFIG.PROGRESS_UPDATE);
}

/**
 * Reset progresso
 */
function resetProgress() {
    state.progress = 0;
    elements.progress.style.width = '0%';
    if (state.isPlaying) {
        startProgress();
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// SISTEMA DE ATIVIDADE (UI AUTO-HIDE)
// ═══════════════════════════════════════════════════════════════════════════

function showActivity() {
    document.body.classList.add('active');
    clearTimeout(state.activityTimeout);
    
    state.activityTimeout = setTimeout(() => {
        document.body.classList.remove('active');
    }, CONFIG.ACTIVITY_TIMEOUT);
}

function hideActivity() {
    document.body.classList.remove('active');
    clearTimeout(state.activityTimeout);
}

// ═══════════════════════════════════════════════════════════════════════════
// MODO CONTEMPLAÇÃO (duplo clique ou tecla C)
// ═══════════════════════════════════════════════════════════════════════════

function toggleContemplation() {
    document.body.classList.toggle('contemplation');
    
    if (document.body.classList.contains('contemplation')) {
        hideActivity();
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// UTILIDADES
// ═══════════════════════════════════════════════════════════════════════════

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ═══════════════════════════════════════════════════════════════════════════
// EVENT LISTENERS
// ═══════════════════════════════════════════════════════════════════════════

// Movimento do mouse
document.addEventListener('mousemove', showActivity);

// Touch para dispositivos móveis
document.addEventListener('touchstart', showActivity);

// Clique nos controles
elements.prevBtn.addEventListener('click', () => {
    prevArtwork();
    if (state.isPlaying) {
        stopSlideshow();
        startSlideshow();
    }
});

elements.nextBtn.addEventListener('click', () => {
    nextArtwork();
    if (state.isPlaying) {
        stopSlideshow();
        startSlideshow();
    }
});

elements.playPauseBtn.addEventListener('click', togglePlayPause);

// Duplo clique para modo contemplação
document.addEventListener('dblclick', toggleContemplation);

// Teclado
document.addEventListener('keydown', (e) => {
    // Mostra UI
    showActivity();
    
    switch(e.key) {
        case 'ArrowLeft':
            prevArtwork();
            if (state.isPlaying) {
                stopSlideshow();
                startSlideshow();
            }
            break;
        case 'ArrowRight':
            nextArtwork();
            if (state.isPlaying) {
                stopSlideshow();
                startSlideshow();
            }
            break;
        case 'Enter':
        case ' ':
            togglePlayPause();
            e.preventDefault();
            break;
        case 'c':
        case 'C':
            toggleContemplation();
            break;
        case 'Escape':
            document.body.classList.remove('contemplation');
            break;
    }
});

// Visibilidade da página
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopSlideshow();
    } else if (state.isPlaying) {
        startSlideshow();
    }
});

// ═══════════════════════════════════════════════════════════════════════════
// INICIALIZAÇÃO
// ═══════════════════════════════════════════════════════════════════════════

async function init() {
    // Mostra loader
    elements.gallery.classList.add('loading');
    
    // Embaralha obras
    shuffleArtworks();
    
    // Atualiza total
    elements.totalNum.textContent = artworks.length;
    
    // Pré-carrega primeira imagem
    try {
        await preloadImage(artworks[0].url);
    } catch (e) {
        console.warn('Falha ao carregar primeira obra');
    }
    
    // Remove loader
    elements.gallery.classList.remove('loading');
    
    // Exibe primeira obra
    await displayArtwork(0, true);
    
    // Inicia slideshow
    startSlideshow();
    
    // Mostra UI brevemente
    showActivity();
    
    // Pré-carrega próximas
    preloadImage(artworks[1].url);
    preloadImage(artworks[2].url);
    
    console.log(`
╔═══════════════════════════════════════════════════════════════════════════╗
║                     GALERIA DIGITAL DE ARTE                               ║
║                       Interface Premium v2                                ║
║                                                                           ║
║   Controles:                                                              ║
║   ← →     Navegar entre obras                                             ║
║   Espaço  Play/Pause                                                      ║
║   C       Modo contemplação (UI oculta)                                   ║
║   Duplo clique também ativa modo contemplação                             ║
║                                                                           ║
║   ${artworks.length} obras-primas aguardam sua contemplação...                       ║
╚═══════════════════════════════════════════════════════════════════════════╝
    `);
}

// Inicia quando DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
