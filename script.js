/**
 * ═══════════════════════════════════════════════════════════════════════════
 * QUADRO DIGITAL DE ARTE
 * Um portal místico onde a eternidade encontra o presente
 * Cada pincelada, um fragmento de alma imortalizada
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
    // NOVAS OBRAS - METROPOLITAN MUSEUM OF ART
    // Tesouros de domínio público revelados ao mundo digital
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
    }
];

// ══════════════════════════════════════════════════════════════════════════
// ESTADO DA GALERIA - O Presente Eterno
// ══════════════════════════════════════════════════════════════════════════
let currentIndex = 0;
let isPlaying = true;
let slideInterval;
const SLIDE_DURATION = 15000; // 15 segundos - tempo para contemplação

// ══════════════════════════════════════════════════════════════════════════
// ELEMENTOS DO DOM - Janelas para a Alma
// ══════════════════════════════════════════════════════════════════════════
const artworkImg = document.getElementById('artwork');
const titleEl = document.getElementById('title');
const artistEl = document.getElementById('artist');
const yearEl = document.getElementById('year');
const prevBtn = document.getElementById('prev');
const playPauseBtn = document.getElementById('playpause');
const nextBtn = document.getElementById('next');

// ══════════════════════════════════════════════════════════════════════════
// FUNÇÕES PRINCIPAIS - O Fluxo do Tempo
// ══════════════════════════════════════════════════════════════════════════

/**
 * Exibe uma obra de arte com transição suave
 * Como um véu que se ergue para revelar a eternidade
 */
function displayArtwork(index) {
    const artwork = artworks[index];
    
    // Fade out
    artworkImg.classList.add('fade-out');
    artworkImg.classList.remove('fade-in');
    
    setTimeout(() => {
        artworkImg.src = artwork.url;
        artworkImg.alt = artwork.title;
        titleEl.textContent = artwork.title;
        artistEl.textContent = artwork.artist;
        yearEl.textContent = artwork.year;
        
        // Fade in quando a imagem carregar
        artworkImg.onload = () => {
            artworkImg.classList.remove('fade-out');
            artworkImg.classList.add('fade-in');
        };
    }, 750);
}

/**
 * Avança para a próxima obra
 * O tempo flui eternamente para frente
 */
function nextArtwork() {
    currentIndex = (currentIndex + 1) % artworks.length;
    displayArtwork(currentIndex);
}

/**
 * Retorna à obra anterior
 * Uma jornada ao passado, onde a beleza aguarda
 */
function prevArtwork() {
    currentIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    displayArtwork(currentIndex);
}

/**
 * Alterna entre reprodução e pausa
 * O controle do tempo nas mãos do contemplador
 */
function togglePlayPause() {
    isPlaying = !isPlaying;
    playPauseBtn.textContent = isPlaying ? '⏸' : '▶';
    
    if (isPlaying) {
        startSlideshow();
    } else {
        stopSlideshow();
    }
}

/**
 * Inicia a apresentação automática
 * O rio do tempo começa a fluir
 */
function startSlideshow() {
    slideInterval = setInterval(nextArtwork, SLIDE_DURATION);
}

/**
 * Pausa a apresentação
 * Um momento de contemplação infinita
 */
function stopSlideshow() {
    clearInterval(slideInterval);
}

// ══════════════════════════════════════════════════════════════════════════
// EVENT LISTENERS - Os Sentidos Despertos
// ══════════════════════════════════════════════════════════════════════════

// Botões de controle
prevBtn.addEventListener('click', () => {
    prevArtwork();
    if (isPlaying) {
        stopSlideshow();
        startSlideshow();
    }
});

nextBtn.addEventListener('click', () => {
    nextArtwork();
    if (isPlaying) {
        stopSlideshow();
        startSlideshow();
    }
});

playPauseBtn.addEventListener('click', togglePlayPause);

// Controles por teclado - para controle remoto de Smart TV
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowLeft':
            prevArtwork();
            if (isPlaying) {
                stopSlideshow();
                startSlideshow();
            }
            break;
        case 'ArrowRight':
            nextArtwork();
            if (isPlaying) {
                stopSlideshow();
                startSlideshow();
            }
            break;
        case 'Enter':
        case ' ':
            togglePlayPause();
            e.preventDefault();
            break;
    }
});

// ══════════════════════════════════════════════════════════════════════════
// INICIALIZAÇÃO - O Despertar
// ══════════════════════════════════════════════════════════════════════════

// Embaralhar as obras para uma experiência única a cada visita
function shuffleArtworks() {
    for (let i = artworks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [artworks[i], artworks[j]] = [artworks[j], artworks[i]];
    }
}

// Iniciar a jornada
shuffleArtworks();
displayArtwork(currentIndex);
startSlideshow();

// Pré-carregar próxima imagem para transições suaves
function preloadNext() {
    const nextIndex = (currentIndex + 1) % artworks.length;
    const img = new Image();
    img.src = artworks[nextIndex].url;
}

setInterval(preloadNext, SLIDE_DURATION / 2);

console.log(`
╔═══════════════════════════════════════════════════════════════════════════╗
║                     QUADRO DIGITAL DE ARTE                               ║
║            "A arte é a mentira que nos permite conhecer a verdade"       ║
║                          — Pablo Picasso                                  ║
║                                                                           ║
║   ${artworks.length} obras-primas aguardam sua contemplação...                       ║
╚═══════════════════════════════════════════════════════════════════════════╝
`);
