var nome = "Rafael";
var idade = prompt("Qual sua idade?");
var idade2 = 10;
var lista = ["azul", "verde", "amarello"];
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxo"}];//atribuir outras características ao array
var count;
var d = new Date();

console.log(d);
console.log("Dia: "+d.getDay());
console.log("Hora: "+d.getHours());

function soma(n1, n2) {
	return "soma é " + n1 + n2;
}
console.log(soma(1,5));



for (count = 5; count <= 11; count++){
	console.log(count);
}
while (count < 20){
	console.log(count);
	count++;
};

if(idade > 18){
	alert("Maior de idade");
}
else{alert("Menor de idade");
};

lista.pop(); /*Retira último elemento array*/
lista.push("laranja") /*Insere valor ao final do array*/


alert("Bem vindo " + nome.replace("Rafael", "Goes"));
alert(idade +  idade2);

console.log(nome);
console.log(lista[1]);
console.log(lista);
console.log(lista.reverse()); //Lista reversa
console.log(lista.join(" - ")); /*Altera separador do array*/
console.log(frutas);