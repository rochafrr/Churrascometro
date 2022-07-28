// Carne - 200(120 h---60 mulher---20 cr) gr por pessoa + de 6 horas -  450(h-300/m-100/cr-50)
// Linguiça -100(60 h---30 mulher---10cr) gr por pessoa + de 6 horas -350 (h-200/m-100/cr-50)
// Asinha - 100 gr(60 h---30 mulher---10cr) por pessoa + de 6 horas - 350 (h-200/m-100/cr-50)
// Cerveja - 1200 ml por Pessoa + 6 horas por pessoa - 2000 ml
// Refrigerante/ agua - 1000 ml por pessoa + 6 horas - 1500 ml

// crianças valem por 0,5


let inputHomem = document.getElementById("homem");
let inputMulher = document.getElementById("mulher");
let inputCrianças = document.getElementById("crianças");
let inputDuração = document.getElementById("duração");



let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");

    let homem = inputHomem.value;
    let mulher = inputMulher.value;
    let criancas = inputCrianças.value;
    let duracao = inputDuração.value;

    let qtdTotalCarne =  (carnePP(duracao) * 60/100 * homem) + (carnePP(duracao)* 30/100 * mulher) + (carnePP(duracao) *10/100 * criancas);
    console.log(qtdTotalCarne);

    let qtdTotalLinguica =  (linguicaPP(duracao)*60/100 * homem) + (linguicaPP(duracao)*30/100 * mulher) + (linguicaPP(duracao)*10/100 *criancas);
    console.log(qtdTotalLinguica);

    let qtdTotalAsinha =  (asinhaPP(duracao)* 60/100 * homem) + (asinhaPP(duracao) *30/100* mulher) + (asinhaPP(duracao)*10/100 * criancas);
    console.log(qtdTotalAsinha);

    let qtdTotalCerveja =  (cervejaPP(duracao)*70/100 * homem) + (cervejaPP(duracao)*30/100 * mulher);
    console.log(qtdTotalCerveja);

    let qtdTotalBebida =   (bebidaPP(duracao)*60/100 * homem) + (bebidaPP(duracao)*30/100 * mulher) + (bebidaPP(duracao)*10/100 * criancas);
    console.log(qtdTotalBebida);

    resultado.innerHTML = ` <div class="result-block">
                            <img src="./Imagem/icone carne.jpg"
                            <p>${Math.ceil(qtdTotalCarne/1000)} kg de Carne</p>
                            </div>`
    resultado.innerHTML += `<div class="result-block">
                            <img src="./Imagem/icone linguica..png"
                            <p>${Math.ceil(qtdTotalLinguica/1000)} kg de Linguiça</p>
                            </div>`
    resultado.innerHTML += `<div class="result-block">
                            <img src="./Imagem/icone frango.jpg"
                            <p>${Math.ceil(qtdTotalAsinha/1000)} kg de Asinha</p>
                            </div>`
    resultado.innerHTML +=` <div class="result-block">
                            <img src="./Imagem/icone cerveja.png"
                            <p>${Math.ceil(qtdTotalCerveja/355)} Latas de Cerveja</p>
                            </div>`
    resultado.innerHTML += ` <div class="result-block">
                            <img src="./Imagem/download.png"
                            <p>${Math.ceil(qtdTotalBebida/2000)} Pet's de 2 Litros</p>
                            </div>`
}

function carnePP(duracao){

    if(duracao>= 6){
        return 450;
    }
    else{
        return 200;
    }
}

function linguicaPP(duracao){

    if(duracao>= 6){
        return 350;
    }
    else{
        return 100;
    }
}

function asinhaPP(duracao){

    if(duracao>= 6){
        return 350;
    }
    else{
        return 100;
    }
}

function cervejaPP(duracao){

    if(duracao>= 6){
        return 2000;
    }
    else{
        return 1000;
    }
}

function bebidaPP(duracao){

    if(duracao>= 6){
        return 1500;
    }
    else{
        return 1000;
    }
}
