var lampada = window.document.getElementById('lampada')
var img = window.document.getElementById('imagem')
var titulo = window.document.getElementById('titulo')

lampada = window.addEventListener('mouseover', entrar)
lampada = window.addEventListener('mouseout', sair)
lampada = window.addEventListener('click', clicar)

function clicar(){
    img.src = 'lampadaquebrad.png'
    titulo.innerHTML = 'Oh não! Você quebrou a lampada, Você terá de pagar outra.'
}

function entrar(){
    img.src = 'lampadaligada.png'  
}

function sair(){
    img.src = 'lampadadesligada01.png'
    titulo.innerHTML = 'Porfavor, não quebrar a lampada.'
}