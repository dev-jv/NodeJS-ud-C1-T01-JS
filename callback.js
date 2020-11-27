
// setTimeout( () => {
//     console.log('Maple tree');
// }, 2000)


let getTreeById = ( edad, id, callback ) => {
    let tree = {
        nombre: 'Kaede',
        id,
        edad
    }

    if ( id === 'Burguerianum' | edad === 40 ) {
        callback(`Un ejemplar con id ${ id }, no existe en DB`);
    } else {
        callback( null, tree ); // First...err
    }
};

getTreeById( 40, 'Burguerianum', (err, x) => {
    if( err ) {
        console.log(err);
    } else {
        console.log(`Ejemplar: \n ${ x.nombre } \n ${ x.id } \n ${ x.edad }`); 
    }
});

// getTreeById( 40, 'Burguerianum', ( err, {nombre : x, id : y, edad} ) => { // Requiere recibir algo para el callback siempre, ..por la dest.
//     if( err ) {
//         console.log(err); 
//     } else {
//         console.log(`Ejemplar: ${x}, ${y}, ${edad}`);
//     }
// });



