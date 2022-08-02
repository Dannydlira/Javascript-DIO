function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`
}

const pessoa1 = {
    nome: "Heloisa",
    idade: 13,
}
const pessoa2 = {
    nome: "Petrus",
    idade: 7,
}
const pessoa3 = {
    nome: "Julia",
    idade: 21,
}
const animal = {
    nome: 'Duk',
    idade: 10,
    raca: 'pug'
}
console.log(calculaIdade.call(pessoa3, 30));