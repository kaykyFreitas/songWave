let lista = document.querySelectorAll('.link-navigation');

for (let contador = 0; contador < lista.length; contador++){
    lista[contador].onclick = () => {
        let j = 0;
        while(j < lista.length){
            lista[j++].className = 'link-navigation';
        }
        lista[contador].className = 'link-navigation active';
    }
}

const botaoMenu = document.querySelector('.menu');
const menu = document.querySelector('.navigation-bar');

//toggle ele remove e adiciona quando eu dou um click no objeto que eu defini botaoMenu

botaoMenu.addEventListener('click', function(){
    menu.classList.toggle('menu-lateral--ativo')
})