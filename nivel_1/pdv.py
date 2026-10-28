compras = []

print("--- PDV COM DESCONTOS ---")

while True:
    entrada_valor = input("Valor da compra (0 para sair): ").strip().replace(",", ".")

    if entrada_valor.startswith("-"):
        print("O valor da compra não pode ser negativo. Tente novamente.")
        continue

    if not entrada_valor.replace(".", "", 1).isdecimal():
        print("Digite um valor numérico válido.")
        continue

    if "." in entrada_valor and len(entrada_valor.split(".")[1]) > 2:
        print("Digite o valor com no máximo duas casas decimais.")
        continue

    valor = float(entrada_valor)

    if valor == 0:
        break

    entrada_idade = input("Idade do cliente: ").strip()

    while not entrada_idade.isdecimal():
        print("A idade deve ser um número inteiro maior ou igual a zero.")
        entrada_idade = input("Idade do cliente: ").strip()

    idade = int(entrada_idade)
    valor_final = valor

    if idade >= 65:
        valor_final = valor_final * 0.8

    if valor_final > 100:
        valor_final = valor_final * 0.9

    valor_final = round(valor_final, 2)
    desconto = round(valor - valor_final, 2)

    compras.append({
        "valor": valor,
        "idade": idade,
        "desconto": desconto,
        "valor_final": valor_final
    })

    print(f"Valor final da compra: R$ {valor_final:.2f}\n")

total_bruto = 0
total_descontos = 0
total_final = 0

for compra in compras:
    total_bruto = total_bruto + compra["valor"]
    total_descontos = total_descontos + compra["desconto"]
    total_final = total_final + compra["valor_final"]

print("\n--- RESUMO DO DIA ---")
print(f"Quantidade de compras registradas: {len(compras)}")
print(f"Total bruto: R$ {total_bruto:.2f}")
print(f"Total de descontos concedidos: R$ {total_descontos:.2f}")
print(f"Total final: R$ {total_final:.2f}")
