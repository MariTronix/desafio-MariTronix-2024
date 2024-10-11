#1

def fibonacci(entry):
    p1 = 0
    p2 = 1
    list = [p1,p2]

    while entry <= 1:
        entry = int(input("Digite um numero diferente de 0 ou 1: "))

    if entry => 2:
        for i in range(2,entry):
            if i > 0:
                sum = list[i-1] + list[i - 2]
                if sum > entry:
                    break
                list.append(sum)
    print(list)

#2

def cont_string(word, char):
    cont = 0
    for i in word:
        if i.lower() == char.lower():
            cont += 1

    print(f"O {char} se repete: {cont}")


#3

def indice(num):
    soma = 0
    k = 1
    while k < num:
        soma += k
        k+= 1
    print(soma)

#4

#a) 1, 3, 5, 7,= 9, números impares
#b) 2, 4, 8, 16, 32, 64, = 128, potência de 2
#c) 0, 1, 4, 9, 16, 25, 36, = 49, soma do próximo número ímpar
#d) 4, 16, 36, 64, = 100, potência dos números pares por 2
#e) 1, 1, 2, 3, 5, 8, = 13, sequência de Fibonacci
#f) 2,10, 12, 16, 17, 18, 19, = 20

#5

#Liga o primeiro interruptor e deixar ligado por 20 minutos, depois, desliga e liga o segundo interruptor. Vai até as salas:
# A sala com a lâmpada acesa é do segundo interruptor.
# A lâmpada q estiver quente é do primeiro interruptor.
# A lâmpada que estive fria é do terceiro interruptor.