import{ invoiceById } from './data/invoice';

const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        const result = invoiceById(2);

        if (result) {
            resolve(result);
        }else {
            reject('error no exite la factura por el id');
        }
       

    },2500 );
});

promise.then((json) => {
    console.log(json);
    console.log('realizada con alguna tarea con demora ')
}).catch((error) =>{
    console.error(error);
})
