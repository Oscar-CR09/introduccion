
const invoice ={
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id: 2,
        name:'jhon x',
        lastname:'x',
        age:20,
    },
    total: 1000,

    greeting:function(){
        return `Hola ${this.client.name}`;
    }

};

//invoice.client.name = 'skar';
invoice.total= 2000;
console.log(invoice);
const greeting = invoice.greeting();
console.log(greeting);
