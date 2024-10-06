// Para comentar em bloco shift + alt + A. Pode consultar na pesquisa aqui no VSCode também como faz, pesquisar no Search, coment que irá aparecer.

// Alterar o Título H1 do jogo 
/* let titutlo = document.querySelector('h1');
titutlo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha entre 1 e 10'; */
// Essas duas variáveis acima, poderiam também serem uma função para evitar repetição de código. Dessa forma:

 
// DESAFIOS 1
// 1 Crie uma função que exiba um alerta com a mensagem: Eu amo Js, sempre que o botão Alerta for pressionado:
// Também daria pra fazer dessa forma, mais simples
/**
 * Inserir isso no HTML--> <button onclick="exibirAlerta()" class="button">Alert</button>
 * Inserir isso no JS --> function exibirAlerta() {alert('Eu amo Js')}
 */ 
/* let alteraNome = document.getElementById('reiniciar').innerText = 'alert';
document.getElementById('reiniciar').addEventListener('click', function(){
    alert('Eu amo JS!');
}) */
// 2 Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você:
// Inseri esse novo botão no HTML--> <button onclick="exibirPrompt()" class="button">Prompt</button>
/* function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:')
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)
} */

// DESAFIO 2

// 1 Criar uma função que exibe "Olá, mundo!" no console.
/* function mensagemConsole (){
    console.log('Olá mundo');
}
mensagemConsole(); */
// 2 Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
/* let nome = 'João';
function exibeNome (){
    console.log(`Olá ${nome}!`)
}
exibeNome(); */
// 3 Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
/* let numero = 1;
let dobroNumero = numero * 2;
function dobro (){
    console.log(`O número é ${numero} e o dobro é ${dobroNumero}.`);
}
dobro(); */
// A segunda forma é melhor em termos de flexibilidade, escopo e boas práticas de programação. Segue a prática de "single responsibility":
// Na primeira a variável é fixa, o que não torna flexível, e também estão declaradas em escopo global, o que pode gerar conflitos.
// E também mistura lógica de cálculo e exibição no console, o que reduz a separação de preocupações.
/* function calcularDobro(numero) {
    return numero * 2;
}  
let resultadoDobro = calcularDobro(5);
console.log(resultadoDobro); */

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
/* function media(valor1, valor2, valor3){
    return (valor1 + valor2 + valor3) / 3;
}
let calcularMedia = media(6,6,6);
console.log(calcularMedia); */

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
/* function retornaOmaior(v1,v2){
    return(v1>v2 ? v1:v2);
}
let resultadoDoMaior = retornaOmaior(5,15);
console.log(resultadoDoMaior); */

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
/* function quadrado (valor){
    return valor * valor;
}
let resultadoValor = quadrado(10);
console.log(resultadoValor); */


// DESAFIO 3

// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

/* alert("Calcular IMC")
let peso = parseFloat(prompt("Insira seu peso em kg: "));
let altura = parseFloat(prompt("Insira sua altura em metros: "));

function calculaImc(peso, altura){
    imc = peso / (altura ** 2);
    return imc;
}
let resultadoImc = calculaImc(peso, altura);
alert(`Seu IMC é ${resultadoImc}.`); */

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
/* let n = parseFloat(prompt('Insira um número para ser calculado o fatorial: '))
function fatorial(n) { 
    let resultado = 1;
    for (let i = 1; i <= n; i++){
        resultado *= i;
    }
    return resultado;
}
let resultadoFatorial = fatorial(n);
alert(`O fatorial de ${n} é: ${resultadoFatorial}.`); */

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
/* let valor = parseFloat(prompt('Insira um valor em Dólar para ser convertido para Reais: '));
function converte(valor){
    resultado = valor * 4.8;
    return resultado;
}
let resultadoReais = converte(valor);
alert(`A conversão de ${valor} Dólares de é ${resultadoReais} Reais.`); */

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
/*f unction perimetro(altura, largura){
    resultado = altura * largura;
    return resultado;
}
console.log(perimetro(10,5)); */

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
/* let pi = Math.PI;
let r = 10;
function areaCirculo (pi, r){
    let area = pi * (r ** 2);
    return area;
}
console.log(areaCirculo(pi, r));
function perimetroCirculo (pi, r){
    let perimetro = 2 * pi * r;
    return perimetro;
}
console.log(perimetroCirculo(pi, r)); */

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
/* function tabuada(n){
    for (let i = 1; i <= 10; i++){
        let resultado = n * i;
        console.log(`${n} x ${i} = ${resultado}`);
    }
}
let n = 55;
tabuada(n); */

// DESAFIO 4

// Crie uma lista vazia, com o nome listaGenerica.
//let listaGenerica = [];
// Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
//let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];
// Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
//linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
//let listaDeNomes = ['João', 'Pedro', 'Ágata'];
//listaDeNomes[0]
// Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
//listaDeNomes[1]
// Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
//listaDeNomes[2]

// ------------ INÍCIO DO CÓDIGO-------------
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 a 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor.');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';           
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


