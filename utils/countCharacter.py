def contador_de_caracteres(texto):
    return len(texto)

if __name__ == "__main__":
    while True:
        entrada = input("Digite um texto (ou 'sair' para encerrar): ")
        if entrada.strip().lower() == 'sair':
            break
        print(f"Número de caracteres: {contador_de_caracteres(entrada)}")