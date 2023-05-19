const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];



// .concat -> forma de concatenar o unir 2 o mas arreglos 
const resultado = meses.concat(meses2, meses3, 'Otro Mes');
console.log(resultado);



// spread operator -> los 3 puntos se utilizan solo para agregar arreglos 
const resultado2 = [...meses, ...meses2, ...meses3, 'Otro mes',];
console.log(resultado2);

