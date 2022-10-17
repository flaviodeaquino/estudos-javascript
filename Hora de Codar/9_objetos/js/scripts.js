var obj = {
    nome: "Flávio",
    idade: 32,
    profissao: "Desenvolvedor",
    estaTrabalhando: true,
};

console.log(obj);
console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log("O meu nome é " + obj.nome + ".");

obj.nome = "Bruno";

console.log(obj.nome);
console.log(obj);

obj.graduação = true;

console.log(obj);

