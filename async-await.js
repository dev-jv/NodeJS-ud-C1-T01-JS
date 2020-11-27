// ------------------------ <> Promise
// let getNombre = () => {
//     return new Promise(( resolve, reject ) => {
//         resolve('Hope!');
//     })
// }

// ----------------------------- <> Async
// let getNombre = async() => {
//     return 'Hope!'
// };

// getNombre().then((res) => {
//     console.log(res);
// })

// -------------------------- <> .catch
// let getNombre = async() => {
//     undefined.nombre
//     return 'Hope!'
// };

// getNombre().then((res) => {
//     console.log(res);
// })
// .catch( e => {
//     console.log( 'Error en el Async', e );
// })

// ----------------------------- <> throw new Error()
// let getNombre = async() => {
//     throw new Error('No existe un nombre para este usuario')
//     return 'Hope!'
// };

// getNombre().then((res) => {
//     console.log(res);
// })
// .catch( e => {
//     console.log( 'Error en el Async', e );
// })

// -------------------- <>  await
let getColor = () => {
    return new Promise(( resolve, reject ) => {
        setTimeout( () => {
            resolve('Teal!');
        }, 3000);
    });
};

let saludo = async() => {
    let color = await getColor();
    return `Color: ${ color }`;
};

saludo().then((msj) => {
    console.log(msj);
});



