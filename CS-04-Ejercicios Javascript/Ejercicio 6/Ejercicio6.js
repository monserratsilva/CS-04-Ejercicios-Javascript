const numeros = [ 3, 6, 12, 5, 100, 1 ];

function compara( a, b ){
    return a - b;
}

console.log( "Resultado algoritmo de burbuja: " + numeros.sort( compara ) );