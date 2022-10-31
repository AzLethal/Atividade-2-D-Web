const botaoBin = document.querySelector('.bin');
const botaoOct = document.querySelector('.octal');
// const form = document.querySelector('.form');
const formBin = document.querySelector('.binForm');
const formOct = document.querySelector('.octalForm');
const inputBin = document.querySelector('#binary');
const inputOct = document.querySelector('#oct');
let inputRes = document.querySelector('#result');
const botaoConvert = document.querySelector('.converte');

const clickBotaoBin = botaoBin.addEventListener('click', () => {
    inputRes.value = '';
    return apresentaForm(formBin, formOct);
});
const clickBotaoOct = botaoOct.addEventListener('click', () => {
    formBin.classList.remove('active');
    inputRes.value = '';
    return apresentaForm(formOct, formBin);
});

const clickResult = botaoConvert.addEventListener('click', mostraResult);

//Apresenta o formulário de acordo com o botão selecionado (binario ou octal)
function apresentaForm(add, rem) {
    add.classList.add('active')
    rem.classList.remove('active')
}

//valida o tipo de conversão escolhida - 'bin' ou 'octal'
function validaTipo(conversor) {
    //caso escolhido algo que não seja 'bin' ou 'octal', será apresentado a mensagem abaixo, pedindo para digitar 'bin' ou 'octal'
    while(conversor !== 'bin' && conversor !== 'octal') {
        conversor = prompt("Digite 'bin' para conversão binária ou 'octal' para conversão octal?")
    }
    if(conversor === 'bin') {
        conversor = 2;
    } else if (conversor === 'octal') {
        conversor = 8;
    }
    console.log(conversor);
    return conversor;
}

function mostraResult(resultado) {
    inputRes.value = converteDecimal(resultado);
    return inputRes;
}

function converteDecimal(event, decimal, conversor) {
    event.preventDefault();
    let res = '';
    let quo = '';
    if(formBin.classList.contains('active')) {
        conversor = 2;
        decimal = inputBin.value;
    } else if (formOct.classList.contains('active')) {
        conversor = 8;
        decimal = inputOct.value;
    }
    //loop para retornar o valor em binario ou octal ... retornará o valor ao contrário.
    while((~~decimal/conversor) !== 0) {
        console.log(`decimal = ${decimal}`);
        quo = ~~(decimal/conversor); //guarda o valor do quociente dentro da variavel quo, iniciada na linha 74
        console.log(`quociente = ${quo}`);
        res += (decimal % conversor); //
        console.log(`resultado = ${res}`);
        decimal = ~~(decimal/conversor); //decimal a ser divido pelo conversor no proximo loop do while... Obs.: sem essa linha o codigo se torna infinito!!
        console.log(`decimal = ${decimal} - Finalizado nessa linha`);
    } 
    // ajustando o valor (invertendo a direção)
    res = res.split(""); //espalha o resultado
    console.log(res);
    res.reverse();//inverte a ordem do array;
    return res.toString().replace(/,/g, ''); //retorna o resultado transformando em string e retira as virgulas
}


