//filter -> te devuelve un nuevo arreglo con todos los elementos que cumplan una determinada condición definida en una función. ejemplos:
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 500 },
    { nombre: 'Celular', precio: 700 },
]

// Haz un arreglo con los productos con precio igual a 500
let resultado = carrito.filter( producto => producto.precio === 500);
console.log(resultado);

// Traeme todos los elementos excepto 'Audifonos'
resultado = carrito.filter( producto => producto.nombre !== 'Audifonos');

// console.log(resultado);