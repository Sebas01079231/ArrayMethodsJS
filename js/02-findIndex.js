const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// encontrar indice con forEach
meses.forEach( (mes, i) => {
    if (mes === 'Abril') {
        console.log(i);
    }
});


//encontrar indice con findIndex (RECOMENDABLE), retorna -1 si no existe un elemento
const indice = meses.findIndex( (mes) => mes === 'Abril');
console.log(indice);


const indice2 = carrito.findIndex( producto =>
    producto.nombre === 'Celular'
);
console.log(indice2);