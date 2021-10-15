var registros = [];

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

function ordenarArreglo(arreglo){
    let ordenar = arreglo.sort(function (a, b){
        if (a.nombre > b.nombre) {
            return 1;
        }
        if (a.nombre < b.nombre){
            return -1;
        }
        return 0;
    });
    console.log(ordenar);
    return ordenar;
}

function filtrarCorreo(arreglo){
    const correofiltrado = arreglo.filter(element => {
        if (/^[a-zA-Z0-9_.+-]+@gmail.com/.test(element.correo)){
            return true;
        }else{
            return false;
        }
    });
    console.log(correofiltrado);
    return correofiltrado;
}

/*COMENTAR ESTAS LINEAS DE COMANDOS PARA PRUEBAS EN NAVEGADOR*/
module.exports = {
    agregarRegistro,
    ordenarArreglo,
    filtrarCorreo,
    registros
}