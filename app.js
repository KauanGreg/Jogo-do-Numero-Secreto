

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirTextoNaTela('h1' , 'Jogo do Número Secreto')
exibirTextoNaTela('p' , 'Escolha um número entre 1 e 100.')

function verificarChute(){
    let chute = document.querySelector('input').value

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1' , 'Parabéns!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o Número Secreto com ${tentativas} ${palavraTentativa}.`
        exibirTextoNaTela('p' , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p' , 'O Número Secreto é menor, tente novamente.');
        } else {
            exibirTextoNaTela('p' , 'O Número Secreto é maior, tente novamente.');
        }
        tentativas++;
        limparCampo();
    }
}


function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);
}

function recarregarJogo(){
    window.location.reload()
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}