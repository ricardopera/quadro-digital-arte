# Quadro Digital de Arte para Smart TV

Um site elegante que transforma sua smart TV em um quadro digital, exibindo obras de arte famosas e de domínio público de forma alternada.

## Características

- **Otimizado para Smart TVs**: Interface limpa e responsiva para telas grandes
- **Transições Suaves**: Efeitos de fade entre as obras de arte
- **Controles Intuitivos**: Navegação por controle remoto ou mouse
- **Reprodução Automática**: Troca automática de obras a cada 15 segundos
- **Informações da Arte**: Exibe título, artista e ano de cada obra
- **Moldura Digital**: Bordas que simulam uma moldura real

## Como Usar

1. Abra o arquivo `index.html` no navegador da sua smart TV
2. O slideshow iniciará automaticamente
3. Use as setas do controle remoto para navegar manualmente
4. Pressione Enter ou Espaço para pausar/reproduzir

## Controles

- **Seta Esquerda**: Obra anterior
- **Seta Direita**: Próxima obra  
- **Enter/Espaço**: Pausar/reproduzir
- **Mouse**: Hover para mostrar controles na tela

## Obras Incluídas

- A Noite Estrelada - Vincent van Gogh
- Mona Lisa - Leonardo da Vinci
- A Grande Onda de Kanagawa - Hokusai
- O Grito - Edvard Munch
- Guernica - Pablo Picasso
- A Persistência da Memória - Salvador Dalí
- Moças de Avignon - Pablo Picasso
- O Nascimento de Vênus - Botticelli

## Personalização

Para adicionar mais obras, edite o array `artworks` no arquivo `script.js`:

```javascript
{
    title: "Nome da Obra",
    artist: "Nome do Artista", 
    year: "Ano",
    url: "URL da imagem"
}
```

## Tecnologias

- HTML5
- CSS3 (com animações e responsividade)
- JavaScript (ES6+)
- Imagens do Wikimedia Commons (domínio público)