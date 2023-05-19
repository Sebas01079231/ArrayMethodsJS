# Array methods -> 
  métodos que proporcionan una forma fácil y conveniente de realizar tareas comunes en arrays, como agregar o eliminar elementos, buscar elementos específicos, filtrar o mapear elementos, y mucho más.

# includes -> 
  revisa si un valor existe en un arreglo con un boolean

# findIndex() ->  
  es similar al método .find(), pero en lugar de devolver el primer elemento que cumple con una determinada condición, devuelve el índice del primer elemento encontrado en el arreglo que cumple con la condición especificada en la función. retorna -1 si no existe un elemento

        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

        const indice = meses.findIndex( (mes) => mes === 'Abril');
        console.log(indice); // output: 3

# reduce() -> 

  permite aplicar una función a cada elemento del arreglo para reducirlos a un único valor.
    
    funciona de la siguiente manera:

        -primer parametro -> el acumulador o valor previo (total)
        segundo parametro -> el valor actual (producto individual)

      -A diferencia de forEach no es necesario declarar un "+=" en la suma, ya que mantiene el valor previo el primer parametro.

      -Despues se incluira una coma, y se declarara el valor inicial del primer parametro.

            const resultado = carrito.reduce( (total, producto) => total + producto.precio, 0 );
            console.log(resultado);

# filter() ->
  devuelve un nuevo arreglo con todos los elementos que cumplan una determinada condición definida en una función
    
    let resultado = carrito.filter( producto => producto.precio === 500);

# find() -> 
    devuelve el primer elemento encontrado en el arreglo que cumple con una determinada condición definida en una función 

    let resultado = carrito.find( producto => producto.precio === 500);

# every() -> 
  se utiliza para comprobar si TODOS los elementos de un array cumplen una determinada condición, y devuelve true si todos los elementos del array cumplen la condición, o false en caso contrario. es un especie de AND, ya que si un solo elemento no cumple la condicion, este cuenta como false

# some() -> 
  revisa si un valor existe en un arreglo con objetos y te devuelve un boolean, tambien es una especie de OR, ya que si se cumple la condicion en por lo menos un elemento se considera true, a diferencia de every. este tambien es comveniente para un arreglo de objetos.
