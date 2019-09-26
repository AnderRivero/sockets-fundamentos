const { io } = require('../server');
io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Servidor',
        mensaje: 'Bienvenido a la jungla'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);


        /* if (mensaje.usuario) {
            callback({
                resp: 'todo salio bien'
            });

        } else {
            callback({
                resp: 'todo salio MAAAAAAL'
            });
        } */
    });


});