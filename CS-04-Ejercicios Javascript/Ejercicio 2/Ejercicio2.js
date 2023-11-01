const numbers = [ 1, 2, 3, 4, 5 ];
const result = doubledNumbers( numbers );

function doubledNumbers( arr ){
    return arr.map( (number) => number *2);
}

console.log( result );