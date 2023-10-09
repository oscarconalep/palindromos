// Cadena a verificar
var cadena = "anilina";

// Eliminar espacios y convertir a minúsculas
cadena = cadena.replace(/\s/g, "").toLowerCase();

// Longitud de la cadena
var longitud = cadena.length;

// Bandera para verificar si es un palíndromo
var esPalindromo = true;

// Comprobar si es un palíndromo
for (var i = 0; i < longitud / 2; i++) {
  if (cadena[i] !== cadena[longitud - 1 - i]) {
    esPalindromo = false;
    break;
  }
}

// Mostrar el resultado
if (esPalindromo) {
  console.log("La cadena es un palíndromo.");
} else {
  console.log("La cadena no es un palíndromo.");
}
