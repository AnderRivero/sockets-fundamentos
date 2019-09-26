var socket = io();
//escuchar información
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});
//escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});

//enviar información
socket.emit('enviarMensaje', {
    usuario: 'Ander',
    mensaje: 'Hola mundo'
}, function(res) {
    console.log('respuesta server: ', res);
});