
const invoice ={
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: 'Oscar',
    total: 1000,

};
invoice.client = 'skar';
console.log(invoice);