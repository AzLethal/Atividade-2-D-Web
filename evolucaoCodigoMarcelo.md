
Olá, meu nome é Marcelo Oliveira, sou estudande de TADS pela Uninove, elaborei este md para exemplificar como foi a evolução do script JS deste projeto, dessa maneira, acredito que eu possa expressar como a lógica funcionou na minha cabeça.

1# - Seleção de formulários!

Criei duas funções com o objetivo de apresentar o formulário de conversão binária e octal, com a evolução do script e percebendo que ambos deveriam utilizar da mesma lógica para funcionar... criei a função 'apresentaForm(param1, param2)' que recebe dois parâmetros para sua funcionalidade, diferente das anteriores que não recebiam parâmetro algum!!

<!--
    function apresentaFormBin() {
        form.classList.add('active')
        formBin.classList.add('active')
        formOct.classList.remove('active');
    }

    function apresentaFormOct() {
        form.classList.add('active')
        formOct.classList.add('active')
        formBin.classList.remove('active');
    }

    function apresentaForm(add, rem) {
        add.classList.add('active')
        rem.classList.remove('active')
    }
-->

2# - Recepção dos valores: Number ou String?

Ao iniciar percebo que tenho duas opções, ou utilizo o "type='number'" no campo input do HTML, ou crio uma função para validar se foi digitado apenas número. Optei a principio por utilizar o "type='number'" devido ao prazo para finalização do projeto, pois, por mais que tenha tempo o suficiente para criação da função, irei garantir a funcionalidade à principio.

3# - recebendo o numero digitado e convertendo!



<!-- function converteDecimal(decimal, conversor) {
    //Servirá para conversão de decimal para binário ou octal,
    //no entanto... para hexa precisa ser feito outra função
    let res = '';
    let quo = '';
    while(parseInt(~~decimal/conversor) !== 0) {
        console.log(`decimal = ${decimal}`);
        quo = (parseInt(~~(decimal/conversor)));
        console.log(`quociente = ${quo}`);
        res += parseInt(decimal % conversor);
        console.log(`resultado = ${res}`);
        decimal = parseInt(~~(decimal/conversor));
        console.log(`decimal = ${decimal} - Finalizado nessa linha`);
        console.log("");
    }
    res += quo;
    res = res.split(""); //espalha o resultado
    res.reverse().join();//inverte a ordem e retorna um array
    return res.toString().replace(/,/g, ''); //retorna o resultado transformando em string e retira as virgulas
} -->


