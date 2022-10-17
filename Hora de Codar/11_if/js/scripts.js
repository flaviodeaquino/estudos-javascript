var idade = 17;
var idadeMinima = 18;

console.log("Antes do if");

if(idade >= idadeMinima) {
    console.log("Pode tirar a carteira de habilitação!");
} else {
    let anos = 0;
    anos = idadeMinima - idade;
    console.log(`Ainda faltam ${anos} anos para tirar a carteira.`);
}

console.log("Depois do if");