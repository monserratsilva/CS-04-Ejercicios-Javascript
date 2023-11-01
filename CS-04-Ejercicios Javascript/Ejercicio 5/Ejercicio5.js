let gente = ["María", "Dani", "Luis", "Juan", "Camila"];

console.log( "1. Todas las personas de la lista son: " + gente );

gente.splice( 1, 1 ); 
console.log( "2. Eliminar a Dani: " + gente );

gente.splice( 2, 1 );
console.log( "3. Eliminar a Juan: " + gente );

gente.splice( 1, 1 );
gente.unshift( "Luis" ); 
console.log( "4. Mover a Luis al inicio: " + gente);

gente.push( "Monse" );
console.log( "5. Agregar mi nombre al final: " + gente );

for (let i = 0; i < gente.length; i++) {
  console.log("6. Bucle: " + gente[i]);
  if (gente[i] === "Maria") {
    break;
  }
}

console.log( "7. Indice de María: " + gente.indexOf("María") );