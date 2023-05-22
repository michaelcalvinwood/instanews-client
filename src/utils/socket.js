let socket = null;

export const setupTheSocket = (socketio, url, store) => {
    if (socket) return;
    socket = socketio(url);
    socket.on('message', ({status, msg}) => {
        console.log('socket message', status, msg);
        store.dispatch({
            type: 'alert/setMsg',
            payload: {
                status, msg
            }
        })
    })
    //console.log('dispatch');

    // store.dispatch({
    //     type: 'counter/changeCounterValue',
    //     payload: {
    //         amount: 20
    //     }
    // })
}

export const emit = (event, ...args) => socket.emit(event, ...args);