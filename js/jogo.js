// definindo altura e largura do palco do jogo

var altura = 0
var largura = 0

function ajustaTamanhoJanela() {
	altura = window.innerHeight
	largura =  window.innerWidth
	// console.log(largura, altura)
}

ajustaTamanhoJanela()

// criando posição randomica para o mosquito

function criarPosicaoRandomica() {
	// removendo o mosquito anterior
	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()
	}

	var posicaoX = Math.floor(Math.random() * largura - 75)
	var posicaoY = Math.floor(Math.random() * altura - 75)
	// console.log(posicaoX, posicaoY)

	posicaoX = posicaoX < 0 ? 0 : posicaoX // evitando que as posições sejam menores que 0
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	// criando elemento html
	var mosquito = document.createElement('img') // criando a tag img com js
	mosquito.src = 'img/mosquito.png' // atribuindo o src e o caminho da imagem
	mosquito.className = tamanhoAleatorio() + ' ' + inverteMosquito() // atribuindo as classes
	mosquito.style.left = posicaoX + 'px' // posicionando randomicamente
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute' // definindo posição absoluta
	mosquito.id = 'mosquito'

	document.body.appendChild(mosquito) // adicionando um filho para o body
}

// criando tamanho aleatorio para o mosquito
function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)

	switch(classe) {
		case 0:
			return 'mosquitoNormal'
		case 1:
			return 'mosquitoGrande'
		case 2:
			return 'mosquitoGigante'
	}
}

// inventendo o mosquito 

function inverteMosquito() {
	var classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0:
			return 'mosquitoEsquerda'
		case 1:
			return 'mosquitoDireita'
	}
}
