const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (!ligado) {
            ligado = true;
        } else {
            console.log("Este carro já está ligado.");
        }
    },
    desligar: function () {
        if (!ligado) {
            console.log("Este carro já está desligado.");
        } else {
            ligado = false;
            velocidade = 0;
        }
    },
    acelerar: function () {
        if (!ligado) {
            console.log("Não é possível acelerar um carro desligado.");
        } else {
            velocidade += 10;
        }
    },
    desacelerar: function () {
        if (!ligado) {
            console.log("Não é possível desacelerar um carro desligado.");
        } else {
            velocidade -= 10;
        }
    }

}