
export const invoice = [

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


export default (clientName) => {

    return invoice.find(i => i.client.name === clientName);

}

export const invoiceById = (id) => {
    return invoice.find(i => i.id === id);
}

/*
export{
    invoice as default,
    invoiceByCliente
}

//otra forma de exportar quitando export de y manejarla juntandolos
*/

