
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    direccion: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo cambiar por #
	telefono: /^\d{7}$/ // 7 numeros.
}


/*esta validadion funciona correctamente*/
function checkNombre() {
	valorNom = document.getElementById('nombre').value;
	if(valorNom == null || valorNom.length == 0 || !/^[a-zA-ZÀ-ÿ\s]{4,40}$/.exec(valorNom)) {
		console.log("Datos incorrectos");
		return false;
	}else{
		console.log(valorNom);
		return true;
	}
}

function checkTelefono() {
	valorTel = document.getElementById('telefono').value;
	if(valorTel == null || valorTel.length == 0 || !/^\d{7}$/.exec(valorTel)) {
		console.log("Datos incorrectos");
		return false;
	}else{
		console.log(valorTel);
		return true;
	}
}

function checkDir() {
	valorDir = document.getElementById('direccion').value;
	if(valorDir == null || valorDir.length == 0 || !/^[a-zA-Z0-9 \#\-]{1,50}$/.exec(valorDir)) {
		console.log("Datos incorrectos");
		return false;
	}else{
		console.log(valorDir);
		return true;
	}
}

function checkCorreo() {
	valorEmail = document.getElementById('email').value;
	if(valorEmail == null || valorEmail.length == 0 || !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.exec(valorEmail)) {
		console.log("Datos incorrectos");
		return false;
	}else{
		console.log(valorEmail);
		return true;
	}
}

function checkContrasena() {
	valorPass = document.getElementById('pass').value;
	if(valorPass == null || valorPass.length < 8 || !/^[a-zA-Z0-9]{8,20}$/.exec(valorPass)) {
		console.log("Datos incorrectos");
		return false;
	}else{
		console.log(valorPass);
		return true;
	}
}

function checkGenero() {
	opciones = document.getElementsByName("genero");
	var seleccionado = false;
	for(var i=0; i<opciones.length; i++) {
		if(opciones[i].checked) {
			seleccionado = true;
			console.log("Seguro eres eso?");
			break;
		}
	}
	if(!seleccionado) {
		console.log("seleccione una opcion");
		return false;
		}
}

/*COMENTAR ESTA LINEA PARA PRUEBAS EN NAVEGADOR*/
module.exports = {checkNombre, checkTelefono, checkDir, checkCorreo, checkContrasena};