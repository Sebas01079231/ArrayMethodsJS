const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//include -> revisa si un valor existe en un arreglo con un boolean
const resultado = meses.includes('Marzo');
console.log(resultado);


//some para un arreglo de objetos es mejor some
const resultado2 = carrito.some( producto => producto.nombre == 'Celular' );
console.log(resultado2);
