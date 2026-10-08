# Primeira atividade: O Patch de Atualização

GamerTeam Manager em JavaScript, usando arrays, objetos, loops e funções.

A opção **5 - Atualizar Pontos** pede o nome do jogador, percorre a equipe com `for` e soma os pontos ganhos à pontuação atual com `jogadorAtual.pontuacao += pontosNovos`. Se o nome não for encontrado, mostra uma mensagem de erro.

## Como executar

Com o Node.js instalado, abra o terminal na pasta do repositório e execute:

```sh
cd primeira-atividade
npm install
npm start
```

O `prompt-sync` permite digitar as respostas no terminal.

## Exemplo

A equipe começa com Fallen (2500 pontos), Taco (1800) e Fer (2100).

1. Escolha a opção `5`.
2. Digite `Fallen`.
3. Digite `150`.

O programa exibe:

```text
SUCESSO! A pontuação de Fallen subiu para 2650 pontos!
```

Use a opção `2` para conferir a lista atualizada e `0` para sair. Digite o nome exatamente como foi cadastrado, respeitando maiúsculas e minúsculas. Os dados ficam na memória enquanto o programa está aberto.
