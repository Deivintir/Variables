console.log("¡Hola mundo!");//Típico mensaje para mostrar en consola.


// Hasta ECMAScript2015, disponíamos en JavaScript de dos formas de declarar variables: palabra reservada "var" e,
//implícitamente, con el operador de asignación (delcaración global).
//Esta forma se mantiene vigente, así que podemos comprobarla incluyendo el siguiente código en nuestro archivo main.js.

var user;   //Al declarar una variable al inicio del código con la palabra reservada "var"  el ambito de nuestra variable será global.
user = 'Laura';

console.log(user); //Muestra en consola la variable user.

function getWellcomeMessage(message){            //Función de bienvenida.
    if(message){                                 //Si la variable message contiene un mensaje.
        console.log (message + ' ' + user);      //Muestra el contenido de la variable message concatenando con el nombre de usuario .
    }else{                                       //De otro modo:
        console.log("Hola " + user);             //Muestra el string Hola y concatena con user.
    }
}
getWellcomeMessage();                            //Llamamos a la función para que se ejecute el script.

//Una particularidad de la declaración con var es que, si la declaración se produce dentro de una estructura de control, el ámbito no será esta sino la función más próxima.
//ejemplo:

var user1;
user1 = "Juan";
console.log(user1);
function wellcomeMessage(message){
    if(message){
        console.log(message + " " + user1);
    }else{
        var message = "Hola ";
        console.log(message + user1);
    }
    console.log(message); //Esta linea se ejecuta perfectamente (se ejecuta dentro de la estructura de control donde fue declarada la variable).
}
wellcomeMessage();

//Si añadimos una variable que no esté declarada con var, sino implícitamente a través de la asignación de un valor, comprobaremos que automáticamente será una variable global.
//ejemplo:

var user2;
user2 = "Marcos";
console.log(user);
function getWellcome(message){
    if(message){
        console.log(message + ' ' + user);
    }else{
        var message = "Hola "; 
        console.log(message + " " + user);
    }
    console.log(message);
    admin = 'Carlos'; //Declaración implícita de la variable admin.
}

getWellcome();
console.log(admin);      //Esta variable declarada implícitamente tiene un ámbito global (side effects).
//console.log(message);  //"Descomentar para ejemplo". Esta variable declarada con var tiene un ámbito del bloque donde es declarada (error).

//RESUMEN: Antes de ECMAScript2015 las variable se declaraban:
//   *Palabra reservada var-> Ambito, el de la función más próxima en la que se encontraran, o global en el caso de encontrarse en el primer nivel.
//   *implícitamente-> Siempre eran globales, aunque se encontraran dentro de alguna función o bloque.

/*========================================================================================================================================================*/

//Con la nueva especificación, JS previene la aparición de side effects con el uso de var, y para mantener la retrocompatibilidad con las versiones anteriores,
//incorpora las palabras reservadas let y const.

//Ahora si declaramos una variable con let, su ámbito será el de la estructura de control o función más próxima; y podemos declarar específicamente constantes 
//con la palabra const.
//Ejemplo:


let user3;
const defaultMessage = 'Hola ';
user4 = 'Emilio';
console.log(user);
function getMessage(message){
    if(message){
        console,log(message +" "+user4);
    }else{
        let auxVariable = "Ejemplo"; //Declarada dentro del bloque de control if/else.
        console.log(defaultMessage + user4);
    }
    //console.log(auxVariable);  //Si la usamos fuera del bloque de control nos dará un error (descomentar para ver el ejemplo).
}
getMessage();

//Ahora la linea 85 devolverá un error porque la variable "auxVariable" está en el contexto del bloque if/else. De igual forma, 
//si intentamos reasignar la constante declarada en la linea2, devolverá un error en la consola.

//Resumen: Las variables y constantes a partir de ECMAScript2015 quedan de la siguiente manera:
    //Variables: deben ser declaradas con "let" y su ámbito será el del bloque de código o función más próxima, de manera que se evitan los side-effects.
    //Constantes: deben ser declaradas con "const" de manera que evita que su valor pueda ser modificado. Su ámbito mismas reglas que let.
    //Se debe evitar el uso de "var", puesto que no devuelve error si una variable es redeclarada.
    //Se debe evitar el uso de declaración implícita de variables mediante asignación directa de valor. Se considera una mala práctica.