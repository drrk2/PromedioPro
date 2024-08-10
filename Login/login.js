let control = 0;
let usuario = 'demo';
let contrasenia = 'password';

function verificar(){
    let clave = document.getElementById('clave').value;
    if(clave != contrasenia){
alert('Contraseña incorrecta');
control ++
if (control >= 3){
alert('Parece que has olvidado tu contraseña, contacta con el soporte.')
}
}else{
window.open('https://google.com');
}
}