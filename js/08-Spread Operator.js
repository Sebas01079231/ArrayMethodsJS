const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//spread operator -> los nuevos elementos con spread operator no modifican el arreglo original 
const meses2 = [...meses, 'Agosto'];
console.log(meses2);

// El agregar elementos con push si modifica el arreglo original
meses.push('Perrito');
console.log(meses);




// sintaxis para agregar elementos el inicio del arreglo
const meses3 = ['Diciembre',...meses];
console.log(meses3);


// spread operator en un arreglo con objetos
const producto = {nombre: 'Disco duro', precio: 900};

const carrito2 = [ producto, ...carrito]
console.log(carrito2);
