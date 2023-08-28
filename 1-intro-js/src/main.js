

const productos = ['mesa','silla','notebook','teclado'];
//productos.push('pantalla led', 'pantalla');
const productos2= productos.concat('pantalla led', 'celular');

const frutas = ['peras','sandias','manzanas','apio'];

const mercado = [...frutas, 'lechuga','papas',...productos2];

console.log(productos2);

console.log(mercado);