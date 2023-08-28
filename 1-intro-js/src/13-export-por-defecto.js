import invoiceByclientName ,{ invoice } from './data/invoice';

const invoiceName = invoice.map(i => {
    return i.name;

})

console.log(invoice);
console.log(invoiceName);

console.log('Buscar por nombre del cliente');
console.log(invoiceByclientName('Maria'));

const invoiceById = invoice.find(i => i.id === 3);
console.log(invoiceById);

const invoiceByname = invoice.find(i => i.client === 'Oscar');
console.log(invoiceByname);

const invoiceFiilter = invoice.filter(i => i.id >1);
console.log(invoiceFiilter);

console.log('filter eliminar')
const invoiceDelete = invoice.filter(i => i.id !=2);
console.log(invoiceDelete);

console.log('some')
const result = invoice.some(i => i.client.name === 'Oscar')
console.log(result);

//find filter some  