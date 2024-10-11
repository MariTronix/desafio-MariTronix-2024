//1

function fibonacci(entry) {
    let p1 = 0;
    let p2 = 1;
    let list = [p1, p2];
    entry = parseInt(entry);

    while (entry <= 1) {
        entry = parseInt(prompt("Digite um número diferente de 0 ou 1: "));
    };

    if (entry >= 2) {
        for (let i = 2; i < entry; i++) {
            let sum = list[i - 1] + list[i - 2];
            list.push(sum);
            if (sum > entry) {
                break;
            }
        }
    }
    return list;
}

//2

function cont_string(word, char){
    cont = 0;
    for(let i = 0; i < word.length; i++){
        if(word[i].toLowerCase() === char.toLowerCase()){
            cont += 1;
        }
    }

    return `O ${char} se repete: ${cont}`;
}

//3

function indice(num){
    soma = 0;
    k = 1;
    while (k < num){
        soma +=k
        k+= 1
    }
    return soma;
}

//4

//a) 1, 3, 5, 7,= 9, números impares
//b) 2, 4, 8, 16, 32, 64, = 128, potência de 2
//c) 0, 1, 4, 9, 16, 25, 36, = 49, soma do próximo número ímpar
//d) 4, 16, 36, 64, = 100, potência dos números pares por 2
//e) 1, 1, 2, 3, 5, 8, = 13, sequência de Fibonacci
//f) 2,10, 12, 16, 17, 18, 19, = 20

//5

// Liga o primeiro interruptor e deixar ligado por 20 minutos, depois, desliga e liga o segundo interruptor. Vai até as salas:
// A sala com a lâmpada acesa é do segundo interruptor.
// A lâmpada q estiver quente é do primeiro interruptor.
// A lâmpada que estive fria é do terceiro interruptor.