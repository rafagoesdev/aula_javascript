function botao(){
	//alert("Obrigado");
	document.getElementById("clicou").innerHTML = "Obrigado <br> por clicar";
}
function redirecionar(){
	window.open("https://www.google.com");
//	window.location.href = "https://www.google.com";
}

function trocar(elemento){
	elemento.innerHTML = "Obrigado";
}

function voltar(){
	document.getElementById("mouse").innerHTML = "Passe o mouse";	
}

function load(){
	alert("carregou");
}

function mudar(elemento) {
	console.log(elemento.value);
}