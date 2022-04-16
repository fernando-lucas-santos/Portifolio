let clicar = document.querySelector('span.menu-hamburger')
clicar.addEventListener('click', botao)

function botao(){
    let nav = document.querySelector('nav.navegacao')
    nav.classList.toggle('active') // propiedade toggle add uma class caso não tenha remove caso tenha
    
}