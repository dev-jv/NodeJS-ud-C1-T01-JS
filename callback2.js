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

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find( empleado => empleado.id === id );
    // console.log( empleadoDB );

    if (!empleadoDB) {
        callback(`No existe un empleado con el id ${ id }`)
    } else {
        callback(null, empleadoDB);
    }
};

let getSalario = (emp, callback) => {
    const salarioDB = salarios.find( salario => salario.id === emp.id );

    if(!salarioDB){
        callback(`No existe un salario para un empleado de nombre: ${ emp.nombre }`);
    } else {
        callback( null, {
            nombre: emp.nombre,
            salario: salarioDB.salario,
            id: salarioDB.id
        });
    }
};

getEmpleado(3, (e, emp) => {
    if(e){
        return console.log(e);
    } 
    getSalario(emp, (e, x) => {
        if(e){
            return console.log(e);
        }
        console.log(`El salario de ${x.nombre} es ${x.salario}`);
    });
});




