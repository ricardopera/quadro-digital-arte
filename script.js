class ArtGallery {
    constructor() {
        this.artworks = [
            {
                title: "A Noite Estrelada",
                artist: "Vincent van Gogh",
                year: "1889",
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/2560px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
            },
            {
                title: "Mona Lisa",
                artist: "Leonardo da Vinci",
                year: "1503-1519",
                url: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
            },
            {
                title: "A Grande Onda de Kanagawa",
                artist: "Katsushika Hokusai",
                year: "1831",
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/2560px-Tsunami_by_hokusai_19th_century.jpg"
            },
            {
                title: "O Grito",
                artist: "Edvard Munch",
                year: "1893",
                url: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg"
            },
            {
                title: "O Nascimento de Vênus",
                artist: "Sandro Botticelli",
                year: "1484-1486",
                url: "https://upload.wikimedia.org/wikipedia/commons/6/61/El_nacimiento_de_Venus%2C_por_Sandro_Botticelli.jpg"
            }
        ];
        
        this.currentIndex = 0;
        this.isPlaying = true;
        this.intervalId = null;
        this.transitionDuration = 15000; // 15 segundos por obra
        
        this.initializeElements();
        this.setupEventListeners();
        this.startSlideshow();
    }
    
    initializeElements() {
        this.artworkImg = document.getElementById('artwork');
        this.artTitle = document.getElementById('art-title');
        this.artArtist = document.getElementById('art-artist');
        this.artYear = document.getElementById('art-year');
        this.loading = document.getElementById('loading');
        this.playPauseBtn = document.getElementById('play-pause-btn');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
    }
    
    setupEventListeners() {
        this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
        this.prevBtn.addEventListener('click', () => this.previousArt());
        this.nextBtn.addEventListener('click', () => this.nextArt());
        
        // Controles por teclado para smart TV
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    this.previousArt();
                    break;
                case 'ArrowRight':
                    this.nextArt();
                    break;
                case ' ':
                case 'Enter':
                    this.togglePlayPause();
                    break;
            }
        });
        
        // Preload da próxima imagem
        this.artworkImg.addEventListener('load', () => {
            this.preloadNextImage();
        });
    }
    
    showArtwork(index) {
        const artwork = this.artworks[index];
        
        // Mostrar loading
        this.loading.style.opacity = '1';
        
        // Fade out da imagem atual
        this.artworkImg.classList.add('fade-out');
        
        setTimeout(() => {
            // Atualizar informações
            this.artTitle.textContent = artwork.title;
            this.artArtist.textContent = artwork.artist;
            this.artYear.textContent = artwork.year;
            
            // Carregar nova imagem
            this.artworkImg.src = artwork.url;
            
            this.artworkImg.onload = () => {
                // Esconder loading e fazer fade in
                this.loading.style.opacity = '0';
                this.artworkImg.classList.remove('fade-out');
                this.artworkImg.classList.add('fade-in');
                
                setTimeout(() => {
                    this.artworkImg.classList.remove('fade-in');
                }, 1000);
            };
        }, 500);
    }
    
    preloadNextImage() {
        const nextIndex = (this.currentIndex + 1) % this.artworks.length;
        const img = new Image();
        img.src = this.artworks[nextIndex].url;
    }
    
    nextArt() {
        this.currentIndex = (this.currentIndex + 1) % this.artworks.length;
        this.showArtwork(this.currentIndex);
        this.resetInterval();
    }
    
    previousArt() {
        this.currentIndex = this.currentIndex === 0 ? this.artworks.length - 1 : this.currentIndex - 1;
        this.showArtwork(this.currentIndex);
        this.resetInterval();
    }
    
    togglePlayPause() {
        this.isPlaying = !this.isPlaying;
        this.playPauseBtn.textContent = this.isPlaying ? '⏸️ Pausar' : '▶️ Reproduzir';
        
        if (this.isPlaying) {
            this.startInterval();
        } else {
            this.clearInterval();
        }
    }
    
    startSlideshow() {
        this.showArtwork(this.currentIndex);
        this.startInterval();
    }
    
    startInterval() {
        if (this.isPlaying) {
            this.intervalId = setInterval(() => {
                this.nextArt();
            }, this.transitionDuration);
        }
    }
    
    clearInterval() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    
    resetInterval() {
        this.clearInterval();
        this.startInterval();
    }
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    new ArtGallery();
});

// Esconder controles após inatividade do mouse
let controlsTimeout;
const controls = document.getElementById('controls');

function showControls() {
    controls.classList.remove('hidden');
    document.body.style.cursor = 'default';
}

function hideControls() {
    controls.classList.add('hidden');
    document.body.style.cursor = 'none';
}

document.addEventListener('mousemove', () => {
    showControls();
    clearTimeout(controlsTimeout);
    controlsTimeout = setTimeout(() => {
        hideControls();
    }, 2000); // 2 segundos
});

// Mostrar controles quando hover nos botões
controls.addEventListener('mouseenter', () => {
    showControls();
    clearTimeout(controlsTimeout);
});

// Iniciar timer quando sair dos controles
controls.addEventListener('mouseleave', () => {
    controlsTimeout = setTimeout(() => {
        hideControls();
    }, 2000);
});

// Esconder controles inicialmente após 2 segundos
setTimeout(() => {
    hideControls();
}, 2000);