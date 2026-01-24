//Crie um site que receba o nome do usuario e mostre 
//"Ola,[nome do usuario]! Bem vindo ao meu site."
let user;
user = String(prompt("Digite seu nome"));

if (user && user.trim() !== ""){
document.writeln("Ola," + user + "!" + "Seja bem vindo ao meu site");
} else {
    document.writeln("Ola, visitante! Seja bem vindo ao meu site");

}




