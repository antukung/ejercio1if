 const NOMBRE_USUARIO_REGISTRADO= "antu";
 const CONTRASENIA_USUARIO_REGISTRADO= "antu1.";
 const NOMBRE_USUARIOS_REGISTRADO_DOS="nahir";
 const CONTRASENIA_USUARIO_REGISTRADO_DOS="nahir.1";
 let nombreUsuarioIngresado= prompt("ingrese un usuario");
 let contraseniaUsurioIngresado = prompt ("ingrese la contraseña del usuario");

 if (((NOMBRE_USUARIO_REGISTRADO==nombreUsuarioIngresado)&&(contraseniaUsurioIngresado==CONTRASENIA_USUARIO_REGISTRADO))||((contraseniaUsurioIngresado==CONTRASENIA_USUARIO_REGISTRADO_DOS) &&(nombreUsuarioIngresado==NOMBRE_USUARIOS_REGISTRADO_DOS))) {
    alert ("contraseña y usurio correctos!!")    
 } else {
    alert ("contraseña o usuraio incorrectos")
 }