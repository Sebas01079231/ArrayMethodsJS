/*Find-> 
    devuelve el primer elemento encontrado en el arreglo que cumple con una determinada condición definida en una función 
*/
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
//con forEach
let resultado;
carrito.forEach((producto, indice) => {
    if(producto.nombre === 'Audifonos') {
        resultado = carrito[indice];
    }
});
// console.log(resultado);


//con find
const resultado2 = carrito.find( producto => producto.nombre == 'Tablet');
console.log(resultado2);