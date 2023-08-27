
const invoice ={
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id: 2,
        name:'Oscar',
        lastname:'x',
        age:20,
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
    ],



    total: function (){
        let total = 0;
        this.items.forEach(item =>{
            total = total + item.price*item.cantidad;

        });
        return total;
    },

    greeting:function(){
        return `Hola ${this.client.name}`;
    }

};
console.log(invoice.company?.name); //operador opcional chaining 
console.log(invoice.client?.name);

if (invoice.company !== undefined && invoice.company.name) {
    console.log('perfecto!!!');
}else{
    console.log('no viene la empresa');
}