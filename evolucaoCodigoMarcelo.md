
Olá, meu nome é Marcelo Oliveira, sou estudande de TADS pela Uninove, elaborei este README.md para exemplificar como foi a evolução do script JS deste projeto, dessa maneira, acredito que eu possa expressar como a lógica funcionou na minha cabeça.

Objetivo:
A ideia principal do projeto é o desenvolvimento de um conversor decimal para binário ou octal, sendo assim, decidi inicar criando 2 formulários em HTML que recebesse o INPUT dos valores pelo usuário, o BOTÃO de conversão e o INPUT de resultado.
Com os dois formulários criados, também inseri dois botões logo acima, que seriam responsáveis por indicar qual o tipo de conversão seria feita!
Botões e Formulários criados, fiz a estilização através do CSS para melhor experiência do usuário!
Finalizado o desenho, começa o desenvolvimento da lógica de conversão:

Para dar ínicio a lógica, me fiz algumas perguntas!
1º passo: O que quero fazer? --> Criar um conversor
2º passo: O que preciso saber para fazer?
  I  - O Conversor irá interagir com usuário, logo preciso de eventos que dependem de sua interação.
  II - Preciso entender como funciona a conversão de decimais para binários e octais
  III- Devo entender quais ferramentas utilizar!
3º passo: Como irei fazer?
  I  - Vincular os itens HTML com JS para que "se conversem"
  II - Elaborar a lógica de conversão
  III- Inserir os valores convertidos e apresentar ao usuário através da "conversa" dos componentes.


Lógica
1# - Vinculo HTML --> JS

Utilizei o document.querySelector(), para vincular os INPUTs e os FORMs HTML com constantes criadas no JS:
    const botaoBin = document.querySelector('.bin');
    const botaoOct = document.querySelector('.octal');
    // const form = document.querySelector('.form'); --> Iniciei este form, com a evolução do código não utilizei
    const formBin = document.querySelector('.binForm');
    const formOct = document.querySelector('.octalForm');
    const inputBin = document.querySelector('#binary');
    const inputOct = document.querySelector('#oct');
    const inputRes = document.querySelector('#result');
    const botaoConvert = document.querySelector('.converte');
    
 2# - Apresentação do formulário
 
 Ao criar os forms BIN e OCT no HTML, obtive ambos sendo apresentados pelo "display: 'flex'", contudo, o meu objetivo é que apenas fossem apresentados quando selecionados através dos BOTÕES BIN ou OCT, sendo assim elaborei a função "apresentaForm" e coloquei o "display: 'none'" no octalForm, dessa maneira o formulário Octal não será apresentado no ínicio do código.
    function apresentaForm(add, rem) {
<!--limpaForms(inputBin, inputOct, inputRes);-->
    add.classList.add('active')
    rem.classList.remove('active')
}

O Objetivo dessa função seria acrescentar e remover a classe 'active', no seletor que fosse escolhido. (No caso utilizei nos formBin e formOct)

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


