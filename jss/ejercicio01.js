// 1. Declaración de variables utilizando el prefijo VAR
var miNombre = "Jorge O.";
var misApellidos;

//utilizaremos la funcion console.log para imprimir el valor actual de la variable
console.log("El valor de la variable miNombre es =", miNombre);
console.log("El valor de la variable misApellidos es =", misApellidos);
//esto arroja un undefined dado que la variable no ha sido inicializada, es decir no se le ha asignado un valor que almacenar

misApellidos = "García Quiroga"
// En este momento la variable ya tiene un valor almacenado por que al imprimirlo deberá mostrar dicho dato
console.log("El valor de la variable misApellidos es =", misApellidos);

//Para actualizar el valor de una variable previamente definida solo basta con igualar el nuevo valor 
miNombre= "Jorge Olaf";
console.log("Hola, ", miNombre, misApellidos);
