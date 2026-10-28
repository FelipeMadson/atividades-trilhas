# Desafio Nível 1: PDV com Descontos

## O que o código faz

O programa calcula descontos nas compras de um ponto de venda. Ele recebe o valor da compra e a idade do cliente, mostra o valor final e guarda cada compra em uma lista. Ao digitar zero, encerra as entradas e mostra o resumo do dia.

## Como ele faz

1. Um `while` pede o valor da compra. O valor `0` encerra o loop sem pedir a idade.
2. O programa verifica a entrada e pede novamente se o valor for negativo ou inválido. A idade deve ser um número inteiro maior ou igual a zero.
3. Se o cliente tiver 65 anos ou mais, aplica 20% de desconto.
4. Se o valor depois desse desconto for maior que R$ 100.00, aplica mais 10% sobre ele.
5. O valor final é arredondado para duas casas decimais. A compra é guardada com `.append()` na lista `compras`, junto com o valor original, a idade e o desconto.
6. No final, um `for` percorre a lista e soma o total bruto, os descontos e o total final. O resumo também mostra a quantidade de compras.

O código usa variáveis, entradas com `input`, condições, loops e uma lista de dicionários.

## Como rodar

Com o Python 3 instalado, abra o terminal nesta pasta e execute:

```sh
python pdv.py
```

Digite o valor com até duas casas decimais, usando ponto ou vírgula, e depois informe a idade. Para registrar outra compra, basta continuar respondendo. Digite `0` no valor para encerrar.

## Tabela de exemplos

| Caso | Valor da compra | Idade | Desconto por idade | Desconto por valor | Valor final esperado |
| --- | --- | --- | --- | --- | --- |
| 1 | R$ 50.00 | 30 | 0% | 0% | R$ 50.00 |
| 2 | R$ 100.00 | 30 | 0% | 0% | R$ 100.00 |
| 3 | R$ 80.00 | 65 | 20% | 0% | R$ 64.00 |
| 4 | R$ 100.00 | 70 | 20% | 0% | R$ 80.00 |
| 5 | R$ 125.00 | 70 | 20% | 0% | R$ 100.00 |
| 6 | R$ 200.00 | 30 | 0% | 10% | R$ 180.00 |
| 7 | R$ 101.00 | 30 | 0% | 10% | R$ 90.90 |
| 8 | R$ 200.00 | 65 | 20% | 10% | R$ 144.00 |
| 9 | R$ 1000.00 | 80 | 20% | 10% | R$ 720.00 |
| 10 | R$ 200.00 | 64 | 0% | 10% | R$ 180.00 |

Na compra de R$ 125.00 para um cliente de 70 anos, os 20% deixam o valor em R$ 100.00. Como esse valor não é maior que 100, o desconto extra não se aplica.

Ao registrar os dez exemplos na mesma execução e depois digitar `0`, o resumo deve mostrar:

```text
Quantidade de compras registradas: 10
Total bruto: R$ 2156.00
Total de descontos concedidos: R$ 447.10
Total final: R$ 1708.90
```

O histórico fica na memória enquanto o programa está aberto.
