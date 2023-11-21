// dados.js
async function simularJogada(tipoDado) {
    try {
        switch (tipoDado) {
            case 'd6':
                return Math.floor(Math.random() * 6) + 1;
            case 'd8':
                return Math.floor(Math.random() * 8) + 1;
            case 'd12':
                return Math.floor(Math.random() * 12) + 1;
            case 'd100':
                return Math.floor(Math.random() * 100) + 1;
            case 'd4':
                return Math.floor(Math.random() * 4) + 1;
            case 'd20':
                return Math.floor(Math.random() * 20) + 1;
            default:
                throw new Error('Tipo de dado inválido');
        }
    } catch (error) {
        throw new Error(`Erro ao simular jogada: ${error.message}`);
    }
}