
// function sumar(a, b){
//     return a + b;
// }

let sumar = (a, b) => a + b;

let hope = () => 'wii!'

let color = (color) => `Color: ${color}`

console.log( sumar(10, 20) );
console.log( hope() );
console.log( color('Red') );

// ----------------- <> this

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }` 
    }
};

console.log(deadpool.getNombre());



