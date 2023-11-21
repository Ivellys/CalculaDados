// main.js
async function realizarRolagem(tipoDado) {
    try {
        const resultado = await simularJogada(tipoDado);
        document.getElementById('resultadoRolagem').innerText = `Resultado da rolagem (${tipoDado}): ${resultado}`;
    } catch (error) {
        console.error(`Erro ao realizar rolagem: ${error.message}`);
    }
}