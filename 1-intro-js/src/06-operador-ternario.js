
const average = 5.9;

let status2 = '';

status2 = (average >= 5.5 )?'success' : 'failure';

console.log(`Resultado ${status2}`)

let max = 0;
 
const a = 5;
const b = 8;
const c = 12;

max = a > b ? a : b;
max = max > c ? max : c;

console.log(`El numero mayor es: ${max}`);



/*
if (average >= 5.5) {
    status2 = 'aprobado';
} else {
    status2 = 'rechazado';
}
console.log(`Resultado: ${status2}`);
*/