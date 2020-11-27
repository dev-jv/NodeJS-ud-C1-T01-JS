let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function () {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }` 
    }
};

// console.log( deadpool.getNombre() );

// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

let {nombre: x, apellido: y, poder } = deadpool;

console.log(x, y, poder);



