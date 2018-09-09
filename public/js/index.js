var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
    
    socket.emit('createMessage', {
        to: 'anirudh@ani.com',
        text: 'Hey I am the browser'
    });

});

socket.on('disconnect', function () {
    console.log('Disconnected from server')
});

socket.on('newMessage', function (message) {
    console.log('Got new Message', message);
});