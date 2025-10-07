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
// Object==
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



// console.log(lista[1] [2].nome,idade);

const nomes = ["alex","levi","hebston","paulo","yasmin","marcos","wesley","aubameyang"];

for(let index = 0; index < nomes.length; index++){
    if(nomes[index]=== "hebston"){
        console.log(nome[index] + "é mala!");
    }

}
for(let index = 0; index < nomes.length; index++){
    console.log(nome[index]);
}

// percorra a lista de numeros
// se o numero for divisivel por 2; imprima no console  o numero + mmar;
// se o numero for divisivel por 5; imprima no console o numero + menino;
// se o numero for divisivel por 2 e por 5; imprima no console o numero + marmenino;git