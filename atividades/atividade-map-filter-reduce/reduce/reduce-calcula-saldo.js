const lista = [
    {
        produto: 'Pacote de morango congelado',
        preco: '18.50',
    },
    {
        produto: 'Ceral',
        preco: '12.00',
    },
    {
        produto: 'Leite em pó',
        preco: '15.90',
    },
    {
        produto: 'Detergente',
        preco: '2.79',
    },
    {
        produto: 'Esponja',
        preco: '5.49',
    },
];

const saldoDisponivel = 150.00;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('Rodada: ', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel)
};

console.log(calculaSaldo(saldoDisponivel, lista));



