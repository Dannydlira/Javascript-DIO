const alunos = [
    {
        nome: 'Heloisa',
        nota: 9,
        turma: '8B',
    },
    {
        nome: 'Petrus',
        nota: 5,
        turma: '2a',
    },
    {
        nome: 'Igor',
        nota: 7,
        turma: '7A',
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '7A',
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for(let i = 0; i < arr.length; i++) {
        const {nota, nome} = arr[i];

        if(arr[i].nota >= media) {
            aprovados.push(arr[i].nome);
        }        
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));