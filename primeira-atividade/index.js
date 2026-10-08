const prompt = require("prompt-sync")();

let time = [];
let continuar = true;

function mostrarMenu() {
    console.log("\n--- GAMERTEAM MANAGER ---");
    console.log("1 - Cadastrar jogador");
    console.log("2 - Deletar jogador");
    console.log("3 - Mostrar equipe");
    console.log("4 - Calcular média da equipe");
    console.log("5 - Atualizar Pontos");
    console.log("6 - Sair");
    console.log("7 - Buscar jogador");
}

function cadastrarJogador() {
    console.log("--- CADASTRO DE JOGADOR ---");
    let nomeJogador = prompt("Digite o nome do jogador: ");
    let funcaoJogador = prompt("Digite a função do jogador: ");
    let pontuacaoJogador = Number(prompt("Digite a pontuação do jogador: "));

    if (isNaN(pontuacaoJogador)) {
        console.log("Pontuação inválida. O jogador não foi cadastrado.");
        return;
    }

    let jogador = {
        nome: nomeJogador,
        funcao: funcaoJogador,
        pontuacao: pontuacaoJogador
    };

    time.push(jogador);
    console.log("Jogador cadastrado com sucesso!");
}

function deletarJogador() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
        return;
    }

    let nomeDeletado = prompt("Digite o nome do jogador que deseja deletar: ");
    let indiceDeletado = -1;

    for (let i = 0; i < time.length; i++) {
        if (time[i].nome === nomeDeletado) {
            indiceDeletado = i;
            break;
        }
    }

    if (indiceDeletado === -1) {
        console.log("Jogador não encontrado.");
        return;
    }

    time.splice(indiceDeletado, 1);
    console.log("Jogador deletado com sucesso!");
}

function mostrarEquipe() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
        return;
    }

    console.log("--- EQUIPE ---");

    for (let i = 0; i < time.length; i++) {
        let jogadorAtual = time[i];
        console.log((i + 1) + " - " + jogadorAtual.nome + " | Função: " + jogadorAtual.funcao + " | Pontuação: " + jogadorAtual.pontuacao);
    }
}

function calcularMedia() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
        return;
    }

    let totalPontos = 0;

    for (let i = 0; i < time.length; i++) {
        totalPontos = totalPontos + time[i].pontuacao;
    }

    let media = totalPontos / time.length;
    console.log("Média de pontos da equipe: " + media);
}

function buscarJogador() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
        return;
    }

    let nomeDesejado = prompt("Qual jogador deseja buscar? ");
    let encontrou = false;

    for (let i = 0; i < time.length; i++) {
        let jogadorAtual = time[i];

        if (jogadorAtual.nome === nomeDesejado) {
            console.log("JOGADOR ENCONTRADO!");
            console.log("Nome: " + jogadorAtual.nome + " | Pontos: " + jogadorAtual.pontuacao);
            encontrou = true;
            break;
        }
    }

    if (encontrou === false) {
        console.log("O jogador " + nomeDesejado + " não faz parte da nossa equipe.");
    }
}

function atualizarPontuacao() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
        return;
    }

    console.log("--- ATUALIZAÇÃO DE RANKING ---");
    let nomeDesejado = prompt("Qual o nome do jogador que você quer atualizar? ");
    let encontrou = false;

    for (let i = 0; i < time.length; i++) {
        let jogadorAtual = time[i];

        if (jogadorAtual.nome === nomeDesejado) {
            let pontosNovos = Number(prompt("Quantos pontos ele ganhou? "));

            if (isNaN(pontosNovos)) {
                console.log("Valor de pontos inválido.");
                return;
            }

            jogadorAtual.pontuacao += pontosNovos;

            console.log("SUCESSO! A pontuação de " + jogadorAtual.nome + " subiu para " + jogadorAtual.pontuacao + " pontos!");
            encontrou = true;
            break;
        }
    }

    if (encontrou === false) {
        console.log("ERRO! O jogador " + nomeDesejado + " não faz parte da nossa equipe.");
    }
}

while (continuar === true) {
    mostrarMenu();
    let opcao = prompt("Escolha uma opção do menu: ");

    switch (opcao) {
        case "1":
            cadastrarJogador();
            break;
        case "2":
            deletarJogador();
            break;
        case "3":
            mostrarEquipe();
            break;
        case "4":
            calcularMedia();
            break;
        case "5":
            atualizarPontuacao();
            break;
        case "6":
            continuar = false;
            console.log("Programa encerrado.");
            break;
        case "7":
            buscarJogador();
            break;
        default:
            console.log("Opção inválida. Por favor, escolha um número do menu.");
            break;
    }
}
