document.getElementById('calcularBtn').onclick = function (){
    let idade = prompt(`Digite a sua idade`);

    //criar variavel ano atual    
        let anoAtuaxl = 2026;

    //Cauculo
        let anoNascimento = anoAtual - idade;

    //mostrar para usuario
        alert(`Voce nasceu em ${anoNascimento}`)
}
    //DOM: Document object Model

    /*COMANDOS DOM PRINCIPAIS
    document.getElementById('id') - pega o elemento pelo id
    document.querySelector('.class'); - pegar primeiro com classe
    document.querySelectorAll('tag') - pega todos os elementos
    element.innerHTML = 'texto' - mudança de conteudo HTML
    element.oncick = function(){} - adicionar
    */

