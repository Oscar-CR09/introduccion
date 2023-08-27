

/*const sayHello = function sayHello(name, age) {

    const greeting= `Hola Mundo function! ${name, age}`;

    //console.log('Hola Mundo function ');

    return greeting;
}
*/
//exprecion lamda ****************

const sayHello = (name, age)=> `Hola Mundo function! ${name, age}`;
const add = (a, b)=> a+b;     

const result = sayHello('Oscar', 10);

console.log(result);
console.log(add (10,5));