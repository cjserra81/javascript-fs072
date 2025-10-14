// estrutura de controle de fluxo

// const age = prompt("digite sua idade:");

// if(age >= 18) {
//     if (age >= 65) {
//         alert("você está na melhor idade.");
//     } else {
//         alert("você é maior de idade.");
//     }
// } else {
//     alert("você é menor de idade.");
// } 

// if (age >= 65){
//     alert ("você está na melhor idade.");
// }else if ( age >= 18){
//     alert("você é maior de idade.");
// }else {
//     alert ("você é menor de idade.");
// };

// const temperatura = Number(prompt ("temperatura:"));

// if ( temperatura > 35){
//     alert ("calor extremo.");
// }else if ( temperatura >=25 ){
//     alert("clima quente.");
// }else if( temperatura >=15 ){
//     alert("clima agradável.");
// }else if (temperatura >=5 ){
//     alert("clima frio.");
// }else {
//     alert("frio intenso.");
    
// }

// const color = "yellow";

// switch(color){
//     case "green":
//         alert ("Go!");
//         break;
//     case "yellow":
//         alert("Atention!");
//         break
//     case "red":
//         alert ("Stop!");
//         break;
//     default:
//         alert( "Invalid color!")

// }


// ESTRUTURAS DE REPETIÇÃO

// FOR = repete enquanto for verdadeira

// WHILE 

// inicializador;condição;incremento/decremento



// for(let i = 10; i >= 0; i--){
//    console.log(i);
// }


// let i = 0;

// for( ;i <= 10;){
//     console.log(i);
//     i++;
// };


// let i = 0;

// while( i <= 10){
//     console.log(i);
//     i++;
// };

// let i =0;

// while( i <= 10){
//     if (i % 2 === 0){
//         console.log(i);
//     };
//     i++;
// };

// const palavra = prompt ("digite uma palavra:");

// for(let i = 1; i <=5; i++){
//     console.log(palavra);
// };
        
    
//aula do dia 30

// const numero1 = Number (prompt("digite o primeiro numero:"));
// const numero2 = Number (prompt ("digite o segundo numero:"));

// if(numero1 > numero2){
//     alert(numero1 + "é maior");

// }else{
//     alert(numero2 + "é maior");
// }

// const numero = Number(prompt("digite um numero"));

// if(numero > 0){
//     alert("positivo");                                       
                                            
// }else if(numero ===0 ){
//     alert("numero neutro")
// }
// else{
//     alert("negativo");
// }


// const letra = prompt ("digite uma letra");

// if(letra === "f" || letra === "F"){
//     alert("feminino" );

// }
// else if(letra === "m" || letra === "M"){
//     alert("masculino");
// }
// else{
//     alert("digite a letra que eu pedi, desgraça!")
// }

// const letra = prompt("Digite uma letra:");

// switch(letra){
//     case "M":
//         alert("MAsculino");
//         break;
//     case "F":
//         alert("Feminino");
//         break;
//     case "m":
//         alert("MAsculino");
//         break;
//     case "f":
//         alert("Feminino");
//         break;
//     default:
//         alert("Digite uma letra válida.")
// }


// //tipos de dados primitivos
// String== texto
// Number==numeros
// Boolean==true or False
// null==ausencia de valor
// undefined==

// tipos não primitivos
// Array==lista(que podem ser mistas)
// Object==SIMULAM ALGO DA VIDA REAL EXEMPLO ATRIBUTOS COMO IDADE ,PROFISSÃO,OU SEJA PROPRIEDADES
// function==

//ARRAY

// const lista = [
//     [1,2,3],
//     ["alex " , "Levi" , "Jairison"],
//     [true , false]
// ];

// console.log(lista[1][1]);

//OBJECT LITERAL chave e valor são as proppriedades do objeto

// const pessoa = {
//     nome:"Alex",
//     idade:  29,
//     altura: 1.75
// }

// console.log(pessoa.altura);

// const carro = {
//     marca: "fiat",
//     modelo: "uno",
//     ano: 1997
// }

// console.log(carro.ano);


// const lista = [
//     ["uva","maçã"],
//     [
//         {
//             nome:"alex",
//             idade: 29
//         },
//         {
//             nome:"josé",
//             idade: 46
//         },
//         {
//             nome:"freitas",
//             idade: 56
//         }
//     ],
//     [0,1,2,3]
// ];

//ARRAYS ====LISTAS

// console.log(lista[1] [2].nome,idade);

// const nomes = ["alex","levi","hebston","paulo","yasmin","marcos","wesley","aubameyang"];

// for(let index = 0; index < nomes.length; index++){
//     if(nomes[index]=== "hebston"){
//         console.log(nomes[index] +  " é mala!");
//     }

// }
// for(let index = 0; index < nomes.length; index++){
//     console.log(nomes[index]);
// }

// percorra a lista de numeros
// se o numero for divisivel por 2; imprima no console  o numero + mmar;
// se o numero for divisivel por 5; imprima no console o numero + menino;
// se o numero for divisivel por 2 e por 5; imprima no console o numero + marmenino;git
//const numeros = [0,1,2,3,4,5,6,7,8,9,10];


// CRIE UM PROGRAMA QUE RECEBA O SALARIO BRUTO DE UM FUNCIONARIO

// CALCULE:
// 10% DE DESCONTO DE INSS 
// 5 % DE DESCONTO DE IMPOSTOS

// EXIBA O SALARIO LIQUIDO NO FINAL 

// const salario = Number(prompt("digite seu salario bruto"));

// const inss = 10/100
// const impostos = 5/100

// alert ( "seu salario liquido é " + ( salario-(salario*inss)-(salario*impostos)));



// lista :1,2,3,4,5.

//percorra a lista de numeros acima e imprima no console a soma de todos os seus elementos.
//crie um acumulador para receber  a soma dos elementos e o imprima no console.


// const lista = [1,2,3,4,5];
//  let acumulador = 0;

//  for (let i = 0; i < lista.length; i++){
//     acumulador = acumulador + lista[i];
//     console.log(lista[i]);
//  }

//  console.log(acumulador);   

//FUNCTON FUNCTON FUNCTION FUNCTION

// functions =blocos de codigo que podemos reutilizar

// declaracoes de função
// palavra reservada =function seguido de um nome e parentese

// exemplo

// function saudar(){
//     console.log("olá");
// }

// saudar();

// function somar(){
//     console.log(4+4);
// }

// somar();



// parametros informações externas que serão escritaas dentro dos parenteses

// argumentos valor real do parametro que será dado dentro dos parenteses na execução ds função


// function saudar(nome) {
//     console.log( 'olá ,' + nome )

// }

// saudar('Alex');
// saudar('felipe');
// saudar('hebston');  


// const nome = 'Alex ;
//  function saudar(nome) {
//     console.log('olá, ' + nome)
//  }

//  saudar(nome); 

// const nome = prompt('digite seu nome:');

// function saudar(nome){
//     alert('olá, '+ nome);
// }

// saudar(nome);


// const nome = prompt('digite seu nome:');
// const idade = prompt('digite sua idade:');

// function saudar(nome , idade){

//     alert('olá '+ nome);
//     alert ('você tem  '+ idade + " anos");

// }

// saudar(nome, idade);


// crie uma função chamada verificaridade que receba uma idade coomo parametro e imprime:

// menor de idade se a idade for menor que 18
// maior de idade se a idade for 18 ou mais 
// idade invalida se a idade for um valor nagativo ou indefinido

// function verificaridade(idade) {
//     if( idade >= 18){
//         console.log('maior de idade');

//     }else if (idade > 0){
//         console.log('menor de idade');
//     }else{
//         console.log('idade invalida');
//     }
// }

// verificaridade(18)

//programa para saudar usuáario conforme periodo do dia
// *crie uma função 'saudar' que receba dois parametros,nome e periodo
// *se o periodo for manha ,saude com bom dispatchEvent,[nome do usuario]
// *se o periodo for tarde ,saude com boa tarde,[nome do usuario]
// *se o periodo for NodeIterator,saude com boa NodeIterator,[nome do usuario]
// *se o periodo for invalido,informe periodo invalido

// const nome = prompt ('qual o seu nme')
// const periodo = prompt ('em qual turno do dia você está');


// function saudar(nome, periodo){
//     switch (periodo){
//         case 'manhã':
//             alert (`bom dia, ${nome} !`);
//             break;            
//         case 'tarde':
//             alert (`boa tarde, ${nome} !`);
//             break;            
//         case 'noite':
//             alert (`boa noite, ${nome} !`);
//             break;    
//             default:
//                 alert('periodo invalido!');        
//         }
//     }

//     saudar(nome, periodo);

//resposta com if e else mesma estrutura acima contiuando apos saudar

//     if (periodo === 'manha'){
//         alert (`bom dia ,$ {nome}!`);
//     }else if(periodo ==='tarde'){
//         alert (`boa tarde,  ${nome}!`);
//     }else if (periodo === 'noite'){
//         alert(`boa noie , ${nome}!`);
//     }else {
//         alert(`perido invalido!`);
//     }
// }

//  saudar (nome, periodo);                 


// *programa para realizar verificação de nota e informar se o aluno está aprovado ou reprovado.
// *crie um programa que peça três notas ao usuario e as armazene em uma lista.
// *crie uma função 'calcular' que recebe a lista de notas como parametro.
// *na função é preciso conter uma logica que percorrerá a lista recebida,some os valores da lista e calcule
// a media aritmetica entre else.
// *se o resultado for uma nota maior ou igual a 7,informe que o aluno está aprovado;
// *se o resultado for uma nota menor que 7,informe que o aluno está reprovado;

// const nota1 = prompt ('digite nota 1')
// const nota2 = prompt ('digite nota 2')
// const nota3 = prompt ('digite nota 3')
// const lista = [0,1,2,3,4,5,6,7,8,9,10]

// function calcular((nota1 +nota2+ nota3/ 3)){

//     let acumulador= 0;
//     for (let i = 0; i < nota.length; i++){
//         acumulador = acumulador + nota[i];
//     if ( nota[i] >= 7){
//         alert( aprovado);
//     }else if( nota[i] < 7 ){
//         alert (reprovado);
//     }
//     }
//     }

//     calcular(nota)

//resposta do professor

// const nota1 = Number(prompt('qual a primeira nota ?'));
// const nota2 = Number(prompt('qual a segunda nota ?'));
// const nota3 = Number(prompt('qual a terceira nota ?'));

// const lista = [];
// lista.push(nota1,nota2,nota3);

// function calcular(ListaDeNotas){
//     let acumulador = 0;
//     for (let i = 0; i < ListaDeNotas.length; i++){
//         acumulador = acumulador + ListaDeNotas[i]    //acumulador += listadenotas[i]
//     }
//     const resultado = acumulador/ ListaDeNotas.length
//     if (resultado >= 7 ){
//         alert('aluno aprovado')
//     }else{
//         alert('aluno reprovado')
//     }
// }


// calcular(lista);

// *sistema para cadastro de produtos em estoque
// --peça ao usuário a quantidade de produtos que ele deseja cadastrar 
// --crie uma função "cadastrar" que receba como parametro a quantidade de produtos para cadastro desejada pelo usuário
// --estabeleça uma lista para o armazenamento dos produtos cadastrados 
// --para cadastro ,peça ao usuário que informe Nome,preço e quantidade de produtos e adicione a lista estabelecida. 
// Repita o processo igualmente ao numero de produtos que o usuario deseja cadastrar 
// --exiba a lista de produtos 





