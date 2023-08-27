

const productos = ['mesa','silla','notebook','teclado'];

productos.push('pantalla led', 'pantalla');

console.log(productos);
/*
productos.forEach(function(el) {
    console.log(el);
});
*/
productos.forEach(el => console.log(el));

for (const prod of productos) {
    console.log(prod);

}

for (let i = 0; i < productos.length; i++) {
    const element = productos[i];

    console.log(element);
    
}