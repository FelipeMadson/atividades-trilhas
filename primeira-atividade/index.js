const prompt = require("prompt-sync")();

let equipe = [
    { nome: "Fallen", funcao: "Atirador", pontuacao: 2500 },
    { nome: "Taco", funcao: "Suporte", pontuacao: 1800 },
    { nome: "Fer", funcao: "Iniciador", pontuacao: 2100 }
];

function cadastrarJogador() {
    console.log("--- CADASTRO DE JOGADOR ---");
    let nome = prompt("Nome do jogador: ");
    let funcao = prompt("Função do jogador: ");
    let pontuacao = Number(prompt("Pontuação do jogador: "));

    let jogador = { nome: nome, funcao: funcao, pontuacao: pontuacao };
    equipe.push(jogador);
    console.log("Jogador cadastrado com sucesso!");
}

function listarJogadores() {
    console.log("--- LISTA DE JOGADORES ---");

    for (let i = 0; i < equipe.length; i++) {
        let jogadorAtual = equipe[i];
        console.log("Nome: " + jogadorAtual.nome + " | Função: " + jogadorAtual.funcao + " | Pontos: " + jogadorAtual.pontuacao);
    }
}

function calcularMedia() {
    let totalPontos = 0;

    for (let i = 0; i < equipe.length; i++) {
        totalPontos += equipe[i].pontuacao;
    }

    let media = totalPontos / equipe.length;
    console.log("Média de pontos da equipe: " + media);
}

function buscarJogador() {
    let nomeDesejado = prompt("Qual jogador deseja buscar? ");
    let encontrou = false;

    for (let i = 0; i < equipe.length; i++) {
        let jogadorAtual = equipe[i];

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
    console.log("--- ATUALIZAÇÃO DE RANKING ---");
    let nomeDesejado = prompt("Qual o nome do jogador que você quer atualizar? ");
    let encontrou = false;

    for (let i = 0; i < equipe.length; i++) {
        let jogadorAtual = equipe[i];

        if (jogadorAtual.nome === nomeDesejado) {
            let pontosNovos = Number(prompt("Quantos pontos ele ganhou? "));
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

let opcaoEscolhida;

do {
    console.log("\n--- GAMERTEAM MANAGER ---");
    console.log("1 - Cadastrar jogador");
    console.log("2 - Listar jogadores");
    console.log("3 - Calcular média da equipe");
    console.log("4 - Buscar jogador");
    console.log("5 - Atualizar Pontos");
    console.log("0 - Sair");

    opcaoEscolhida = prompt("Escolha uma opção do menu: ");

    switch (opcaoEscolhida) {
        case "1":
            cadastrarJogador();
            break;
        case "2":
            listarJogadores();
            break;
        case "3":
            calcularMedia();
            break;
        case "4":
            buscarJogador();
            break;
        case "5":
            atualizarPontuacao();
            break;
        case "0":
            console.log("Programa encerrado.");
            break;
        default:
            console.log("Opção inválida. Por favor, escolha um número do menu.");
            break;
    }
} while (opcaoEscolhida !== "0");
