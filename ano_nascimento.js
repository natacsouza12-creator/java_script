const { jsx } = require("react/jsx-runtime");

let idade = 20;
//criar variavel ano atual
let anoAtual = 2026;
let anoNascimento = anoAtual - idade;

//mostrar para usuario
console.log(`idade informada: ${idade}`);
console.log(`Ano atual: ${anoAtual}`)
console.log(`Voce nasceu em ${anoNascimento}`)

