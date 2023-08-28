
const invoice = [

    {
        id: 1,
        name: 'Compras de oficina',
        client: {

            name:'Oscar',
            lastname:'x',
        },
    
        items:[
            {
                producto:'teclado',
                price: 399,
                cantidad: 2
            }
            ,
            {
                producto:"mouse",
                price: 100,
                cantidad: 10
    
            }
            ,
            {
                producto:"papel",
                price: 389,
                cantidad: 3
    
            }
        ]
    
    },
    {
        id: 2,
        name: 'Compras de hogar',
        client: {
            name:'Adriana',
            lastname:'x',
        },
    
        items:[
            {
                producto:'teclado',
                price: 399,
                cantidad: 2
            }
            ,
            {
                producto:"monitor 17 ",
                price: 2000,
                cantidad: 10
    
            }
            ,
            {
                producto:"cpu",
                price: 3000,
                cantidad: 3
    
            }
        ]
    
    },
    {
        id: 3,
        name: 'Compras de papeleria',
        client: {
            name:'Maria',
            lastname:'x',
        },
    
        items:[
            {
                producto:"lapiz",
                price: 100,
                cantidad: 10
    
            }
            ,
            {
                producto:"papel",
                price: 389,
                cantidad: 3
    
            }
        ]
    
    },


];

const invoiceName = invoice.map(i => {
    return i.name;

})

console.log(invoice);

console.log(invoiceName);

const invoiceCliente = invoice.map(i => {
    return i.client.name;

});

console.log(invoiceCliente);

const invoiceById = invoice.find(i => i.id === 3);
console.log(invoiceById);

const invoiceFiilter = invoice.filter(i => i.id >1);
console.log(invoiceFiilter);

console.log('filter eliminar')
const invoiceDelete = invoice.filter(i => i.id !=2);
console.log(invoiceDelete);

console.log('some')
const result = invoice.some(i => i.client.name === 'Oscar')
console.log(result);

//find filter some  