let registros = [];

function login(){
    validarCAPTCHA();
    /*aqui crear un if{}else{} dependiendo del retorno de validarCAPTCHA()*/
}

function agregarRegistro(){
    let nombre = document.getElementById('nombre').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let correo = document.getElementById('correo').value;
    let contrasena = document.getElementById('contrasena').value;

    let usuario = {
        nombre: nombre,
        telefono: telefono,
        direccion: direccion,
        correo: correo,
        contrasena: contrasena
    };

    console.log(usuario);
    registros.push(usuario);
}

function validarCAPTCHA(captcha){
    let resp = 'ocaso'
    let respUs = document.getElementById('captcha').value;
    let minusculas = respUs.toLowerCase(); //PASA TODO A MINUSCULAS
    let valorLimpio = minusculas.replace(/[^a-zA-Z ]/g, ""); //ELIMINA TODOS LOS CARACTERES ESPECIALES
    if (resp == valorLimpio){
        console.log("correcto")
        return true;
    }else{
        console.log("Respuesta incorrecta")
        return false;
    }
}


module.exports = {
    login,
    validarCAPTCHA,
    agregarRegistro,
    registros
}
