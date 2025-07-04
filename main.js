function inserirNome(){
    let nomeUsuario = prompt("Tu nasceu com que nome? ");
    let elemento = document.querySelector("#nome-usuario");
    elemento.textContent = nomeUsuario;
}

inserirNome()