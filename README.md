<h1>Conversor Decimal -> Binário || Octal</h1>

Olá, meu nome é **Marcelo Oliveira**, sou estudande de **TADS** pela **_Uninove_**! Este é um projeto referente a atividade do professor **Hebert Bratefixe** das disciplinas de **_Programação Front-End_** e **_Desenvolvimento Web_**. Elaborei este **README.md** para exemplificar como foi a evolução do script **_JS_** deste projeto, dessa maneira, acredito que eu possa expressar como a lógica funcionou na minha cabeça. 🚀
#
**Objetivo:**
A ideia principal do projeto é o desenvolvimento de um conversor decimal para binário ou octal, sendo assim, decidi inicar criando 2 formulários em **_HTML_** que recebessem o **INPUT** dos valores pelo usuário, o **BOTÃO** de conversão e o **INPUT** de resultado.
Com os dois formulários criados, também inseri dois **BOTÕES** logo acima, que seriam responsáveis por indicar qual o tipo de conversão seria feita!
Botões e Formulários criados, fiz a estilização através do **_CSS_** para melhor experiência do usuário!
Finalizado o desenho, começa o desenvolvimento da lógica de conversão:

# Para dar ínicio a lógica, me fiz algumas perguntas?!
<h4> 1º passo: O que quero fazer? --> Criar um conversor</h4>

<h4> 2º passo: O que preciso saber para fazer?</h4>

- I   - O Conversor irá interagir com usuário, logo preciso de eventos que dependem de sua interação;
- II  - Preciso entender como funciona a conversão de decimais para binários e octais;
- III - Devo entender quais ferramentas utilizar!
#
<h4>3º passo: Como irei fazer?</h4>

-  I  - Vincular os itens **_HTML_** com **_JS_** para que **"se conversem";**
-  II - Elaborar a lógica de conversão;
-  III- Inserir os valores convertidos e apresentar ao usuário através da "conversa" dos componentes.

# Colocando em prática!

<h1>Lógica</h1>

**1# - Vinculo HTML --> JS**

Utilizei o **document.querySelector()**, para vincular os **INPUTs** e os **FORMs HTML** com constantes criadas no **_JS_**:

    const botaoBin = document.querySelector('.bin');
    const botaoOct = document.querySelector('.octal');
    const formBin = document.querySelector('.binForm');
    const formOct = document.querySelector('.octalForm');
    const inputBin = document.querySelector('#binary');
    const inputOct = document.querySelector('#oct');
    const inputRes = document.querySelector('#result');
    const botaoConvert = document.querySelector('.converte');
   

**2# - Apresentação do formulário.**
 
Ao criar os forms **BIN** e **OCT** no **HTML**, apresentei ambos pelo **_"display: 'flex'"_**, contudo, o meu objetivo é que apenas fossem apresentados quando selecionados através dos **BOTÕES BIN** ou **OCT**, sendo assim elaborei a função **_"apresentaForm"_** e coloquei o **_"display: 'none'"_** no **octalForm**, dessa maneira o formulário Octal não será apresentado no ínicio do código.

    function apresentaForm(add, rem) {
        add.classList.add('active')
        rem.classList.remove('active')
    }

O Objetivo dessa função seria acrescentar e remover a classe **_'active'_**, no seletor que fosse escolhido. (No caso utilizei nos **formBin** e **formOct**).
Função criada, criei duas constantes **_clickBotaoBin_** e **_clickBotaoOct_**, em seguida fiz a interação do usuário com o **BOTÃO**, utilizando o **_addEventListener()_**, que recebe como primeiro parâmetro o evento **CLICK** e como segundo parâmetro uma função.

    const clickBotaoBin = botaoBin.addEventListener('click', () => {
    return apresentaForm(formBin, formOct);
    });
    
    const clickBotaoOct = botaoOct.addEventListener('click', () => {
        return apresentaForm(formOct, formBin);
    });
**Nos comentários desse readme, está a estrutura original das funções acima, onde mostra como foi criada originalmente e como cheguei no resultado acima**
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
-->

**2# - Recepção dos valores: Number ou String?**

Alternação de formulários funcionando! Entro na parte de validar apenas número para entrada do usuário.

Ao iniciar percebo que tenho duas opções, ou utilizo o **_"type='number'"_** no campo input do **HTML**, ou crio uma função para validar se foi digitado apenas número. Optei a principio por utilizar o **_"type='number'"_** devido ao prazo para finalização do projeto, pois, por mais que tenha tempo o suficiente para criação da função, irei garantir a funcionalidade à principio.

**3# - Recebendo o numero digitado e convertendo!**

Para receber o número digitado pelo usuário e fazer a conversão, elaborei a função **_converteDecimal()_**, que recebe dentro de seus parâmetros o valor **decimal** e o **conversor** e retorna o aglomerado de **restos** das divisões para obter o valor em **binário** ou **octal**, conforme aprendido na aula de **Arquitetura de Computadores**!

**Obs. 1:** Como o valor será atrelado à um botão que atualizará um campo (input), foi necessário inserir o parâmetro **event**, para utilizar o **_preventDefault()_**, que será responsável por eliminar o evento primário do botão, que seria atualizar a página.

**Funcionalidade**

A função começa sendo iniciada com duas variáveis **let res** e **quo**, iniciadas como **_string_** em branco. Após esse caminho, pensei em validar qual campo estava ativo no momento, para que eu soubesse qual seria o tipo de conversão a ser executada, logo, utilizei o **_if_** com a seguinte lógica:

Se o formulário de conversão binária estiver ativo (conter a class **_'active'_**), o **conversor** deverá valer **2** e o **decimal** deverá receber o valor do **INPUT BINÁRIO**. Caso contrário, se o formulário de conversão octal estiver ativo (conter a class **_'active'_**), o **conversor** deverá valer **8** e o **decimal** deverá receber o valor do **INPUT OCTAL**

Após atribuir os valores ao **conversor** e ao **decimal**, precisei fazer um laço de repetição (um loop), seguindo a seguinte lógica: 

Enquanto o **quociente** do **decimal** dividido pelo **conversor** for diferente de **0**, acrescente o **resto** do **decimal** dividido pelo **conversor** à variável **res**, que foi iniciada como uma **_string_** vazia. Ou seja, a cada loop do **while**, irei acrescentar o **resto** ao **res**, que por ser **_string_**, irá concatenar. Após o primeiro acréscimo, finalizei a estrutura do loop com o **decimal** recebendo o valor do **quociente** do **decimal** dividido pelo **conversor**, em outras palavras, nesse ponto, o decimal irá receber o valor do **quociente** da primeira iteração, logo no final deste loop haverá a verificação se o **decimal** está ou não valendo **0**, se este for o caso, o loop se encerra, caso contrário o loop continua até que chegue a **0**.

**Obs 2:** Coloquei a variável **quo**, apenas para verificar se a lógica estava correta!

Loop encerrado, o valor de **res**, deverá ser o aglomerado de restos das divisões efetuadas dentro do loop. Oba!! Chegamos ao fim?? Não!! Conforme ensinado pelo professor **Aguinaldo** na disciplina de **Arquitetura de Computadores**, o valor do binário ou octal referente aos **restos** é lido de trás pra frente e como a concatenação efetuada pelo **+=** dentro loop apenas insere o numero a frente do anterior, obtivemos o número invertido!!

Para resolver o problema acima, foi necessário dois passos simples, transforma o valor de **res** em um **ARRAY** utilizando a método de espalhamento **_split_** e logo em seguida inverter utilizando o método **_reverse_**, por fim, transformar em **_string_** novamente e retirar as virgulas, com o **_toString_** e ***_replace_**, utilizando regex no escopo global (//g).

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
    
Função pronta!!

**Agora é o momento de aplicar!**

Para efetuar a aplicação da função acima, tive em mente que ela poderia apenas ser executada após o **CLICK** no **BOTÃO** de converter, logo, criei a constante **_clickResult_** e atrelei ao evento de **CLICK**.

    const clickResult = botaoConvert.addEventListener('click', mostraResult);
  
Porém, para que o resultado fosse impresso no campo do **INPUT DO RESULTADO**, precisei criar mais uma função que seria responsável por efetuar esse comando!

Essa função irá retornar o valor a ser exibido no **INPUT** do **RESULTADO** (**inputRes**), o objetivo dessa função é executar a função anterior e guardar o valor dentro do **inputRes**, sendo assim, com a interação do usuário com o **BOTÃO** converter, será alterado o valor do **inputRes**, apresentando  e findando nossa lógica!!

    function mostraResult(resultado) {
        inputRes.value = converteDecimal(resultado);
        return inputRes;
    }
    
  **4# - Limpando o formulário!**
  
  Eu poderia ter parado no passo 3 dessa aplicação, mas resolvi que ficaria mais interessante ao usuário, se quando ele trocasse de formulário (clicando no oct caso estivesse no bin, ou, vice-versa), este fosse limpo!!
  
  Elaborei então uma função chamada **_limpaForms_**, que tem como parâmetros, **bin, oct** e **res**, a funcionalidade dela é simples, transforma os valores dos **INPUTS** **BINÁRIO, OCTAL** e **RESULTADO** em uma **_string_** em branco, quando clicado em um dos **BOTÕES** principais (**BIN** ou **OCT**).
    
Para isso, utilizei um **_if_**, com as condições, se ou formulário **BINÁRIO** ou o formulário **OCTAL** estiver com a class **_active_**, atribua os valores de **_string_** em branco ao **bin**, **oct** e **res**. Em seguinda, chamei essa função dentro da função **_apresentaForm_**, apresentada anteriormente, logo, sempre que for clicado em um dos **BOTÕES** **BIN** ou **OCT**, a função será chamada e limpará o formulário!!
    
    function apresentaForm(add, rem) {
        limpaForms(inputBin, inputOct, inputRes); 
        add.classList.add('active')
        rem.classList.remove('active')
    }
    
    function limpaForms(bin, oct, res) {
        if(formBin.classList.contains('active') || formOct.classList.contains('active')) {
            bin.value = '';
            oct.value = '';
            res.value = '';
        }
    }

# Agradecimento!

Gostaria de agradecer aos professores **HEBERT BRATEFIXE** e **AGUINALDO ALBERTO** das disciplinas de **PROGRAMAÇÃO FRONT-END**, **DESENVOLVIMENTO WEB** e **ARQUITETURA DE COMPUTADORES**, após suas aulas foi possível a realização deste projeto, com base nos estudos, desafios propostos e muita pesquisa!

Também à equipe da **ALURA**, que provê cursos magnificos que me abriram a mente!

# Eu sou MARCELO OLIVEIRA e este é um dos meus primeiros projetos em JS (totalmente solo).

