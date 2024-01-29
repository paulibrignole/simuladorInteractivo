
// Se trata de un emprendimiento de chaquetas pintadas y customizadas a mano, donde ayudamos al cliente a que se diseñe su propia campera.


let Bienvenida = prompt ("Bienvenido a Diseña Tu Chaqueta, vamos a hacer una serie de preguntas para conseguir tu chaqueta ideal pintada a mano, selecciona la opcion deseada \n1: Comenzar a diseñar \n2: Salir")

function crearCampera () {
    let materialCampera = prompt ("ingrese el tipo de material a utilizar, -Denim pesado o -Denim ligero")
console.log("su chaqueta va a ser de"+ materialCampera)

let ubicacionCampera = prompt ("¿Escribe la opcion deseada. Deseas que este pintada en -el frente y la espalda, -el frente o -la espalda?")
console.log("su chaqueta va a ser de"+ materialCampera + "va a estar pintada en"+ ubicacionCampera)

let colorCampera = prompt ("Selecciona el color de tu campera - Negra - azul - celeste")
console.log("Su chaqueta va a ser de: "+ materialCampera + "va a estar pintada en:" + ubicacionCampera + "y sera de color "+ colorCampera)

let talleCampera = prompt ("¿Cual es su talle? - s - m - l -xl -xxl -xxxl ")
console.log("Su chaqueta va a ser de: "+ materialCampera + "va a estar pintada en:" + ubicacionCampera + "sera de color "+ colorCampera + "y de talle"+ talleCampera)
}


function finalizandoCampera () {

    let tematicaCampera = prompt ("¿Cual de las siguientes tematicas te gustaria que tenga tu chaqueta? \n1: Peliculas o series \n2: Un artista o banda \n3: Solo tipografia \n4: Naturaleza \n5: Psicoldelica \n6: Dibujos animados \n7: Animales \n8: Tengo mi diseño")
    console.log("Tu chaqueta tendra la tematica de:"+ tematicaCampera)

    switch (tematicaCampera) {
        case "Peliculas o series": 
            alert("Perfecto, elegiste la opción de películas o series, tu chaqueta está casi lista, nos contactaremos con vos para que nos cuentes los detalles y que tu chaqueta se vea como vos querés!")
            console.log("Seleccionaste: Peliculas o series")
            break;

        case "Un artista o banda":
            alert ("Perfecto, elegiste la opción de Un artista o banda, tu chaqueta está casi lista, nos contactaremos con vos para que nos cuentes los detalles y que tu chaqueta se vea como vos querés!")
            console.log("Seleccionaste: un artista o banda")
            break;

        case "Solo tipografia":
            alert ("Perfecto, elegiste la opción de Solo tipografía, tu chaqueta está casi lista, nos contactaremos con vos para que nos cuentes los detalles y que tu chaqueta se vea como vos querés!")
            console.log("Seleccionaste: Solo tipografía")
            break;

        case "Naturaleza":
            alert ("Perfecto, elegiste la opción de Naturaleza, tu chaqueta está casi lista, nos contactaremos con vos para que nos cuentes los detalles y que tu chaqueta se vea como vos querés!")
            console.log("Seleccionaste: Naturaleza")
            break;

        case "Psicodelica":
            alert ("Perfecto, elegiste la opción de Psicodelica, tu chaqueta está casi lista, nos contactaremos con vos para que nos cuentes los detalles y que tu chaqueta se vea como vos querés!")
            console.log("Seleccionaste: Psicodelica")
            break;

        case "Dibujos animados":
            alert ("Perfecto, elegiste la opción de Dibujos animados, tu chaqueta está casi lista, nos contactaremos con vos para que nos cuentes los detalles y que tu chaqueta se vea como vos querés!")
            console.log("Seleccionaste: Dibujos animados")
            break;

        case "Animales":
            alert ("Perfecto, elegiste la opción de Animales, tu chaqueta está casi lista, nos contactaremos con vos para que nos cuentes los detalles y que tu chaqueta se vea como vos querés!")
            console.log("Seleccionaste: Animales")
            break;

        case "Tengo mi dieño":
            alert ("Perfecto, elegiste la opción de Tengo mi diseño, tu chaqueta está casi lista, nos contactaremos con vos para que nos cuentes los detalles y que tu chaqueta se vea como vos querés!")
            console.log("Seleccionaste: Tengo mi diseño")
            break;
    
        default:
        alert ("Ingrese una opcion valida")
        finalizandoCampera ()
            break;
    }

}


while (Bienvenida === "1"){
    /* Dato libre solo para clg*/
    crearCampera ()
    finalizandoCampera ()
    let numeroCelular = prompt ("Ingresa tu numero celular para que te contactemos")
    console.log("numero de contacto: "+ numeroCelular)
    let salida = prompt ("¿Desea diseñar otra chaqueta? si no lo desea escriba salir para finalizar")
    if (salida === "salir"){
        break
    } else if (salida === "continuar"){
        crearCampera ()
    }


    if (Bienvenida === "2"){
    break
    }
}