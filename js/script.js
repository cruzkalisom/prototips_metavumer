let x = 0; // posição x do mapa
let y = 0; // posição y do mapa

function moverMapa(direcao) {
    const passo = 50; // ajuste conforme necessário

    switch (direcao) {
        case 'esquerda':
            x += passo;
            break;
        case 'direita':
            x -= passo;
            break;
        case 'cima':
            y += passo;
            break;
        case 'baixo':
            y -= passo;
            break;
    }

    document.getElementById('mapa').style.transform = `translate(${x}px, ${y}px)`;

    // Atualiza a posição do player para o centro da div #mapa
    document.getElementById('player').style.left = '50%';
    document.getElementById('player').style.top = '50%';

    // Movimenta os objetos interativos em direção oposta ao mapa para simular o movimento da câmera
    const objetos = document.querySelectorAll('.objeto');
    objetos.forEach(obj => {
        obj.style.left = `${50 - x}px`;
        obj.style.top = `${50 - y}px`;
    });
}
