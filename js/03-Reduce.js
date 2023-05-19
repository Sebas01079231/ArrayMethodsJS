//Funcion de reduce = toma la cantidad de datos, los une y te entrega un resultado.
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//funcion de un reduce con forEach
let total = 0;
carrito.forEach(producto => {
    if (producto.precio >= 500) {
        return total += producto.precio
    }
});
console.log(total);




/*con reduce
    -primer parametro -> el acumulador o valor previo (total)
    segundo parametro -> el valor actual (producto individual)

    -a diferencia de forEach no es necesario declarar un "+=" en la suma, ya que mantiene el valor previo el primer parametro.

    -Despues se incluira una coma, y se declarara el valor inicial del primer parametro. 
*/
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0 );
console.log(resultado);



// sintaxis sin arrow function
let resultado2 = carrito.reduce(function(total,producto){
    return total + producto.precio;
}, 0); 
console.log(resultado2);