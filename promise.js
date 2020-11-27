let empleados = [
    {
        id: 1,
        nombre: 'Nick'
    },
    {
        id: 2,
        nombre: 'Sara'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
];

let salarios = [
    {
        id: 1,
        salario: 10000
    },
    {
        id: 2,
        salario: 20000   
    },
    {
        id: 3,
        salario: 30000
    }
];

let getEmpleado = (id) => {

    return new Promise( ( resolve, reject ) => {
        let empleadoDB = empleados.find( empleado => empleado.id === id );
    
        if (!empleadoDB) {
            reject(`No existe un empleado con el id ${ id }`)
        } else {
            resolve(empleadoDB);
        }
    } )
};

let getSalario = (empleado) => {

    return new Promise( ( resolve, reject ) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`El salario no fue encontrado para un empleado de nombre ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            })
        }
    });
};

getEmpleado(1).then(empleado => {
    getSalario(empleado).then(res => {
        console.log(`Empleado: \n ${res.nombre} > ${res.salario}$`);
    }, err => {
        console.log(err);
    })
}, err => {console.log(err)})



