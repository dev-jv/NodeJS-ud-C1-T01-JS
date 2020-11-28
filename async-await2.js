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
    },
    {
        id: 4,
        nombre: 'Zara'
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

let getEmpleado = async(id) => {

    let empleadoDB = empleados.find( empleado => empleado.id === id );

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el id ${ id }`);
    } else {
        return empleadoDB; 
    }
};

let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error (`No se encontró un salario para un empleado de nombre ${empleado.nombre}`)
    } else {
        return ({
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
};

let empS = async(id) =>{
    const getEmps = await getEmpleado(id);
    const getSuel = await getSalario(getEmps);
    return getSuel;     
}

empS(4).then( resp => {
    console.log(resp)
})
.catch(err => {
    console.log(err);
})



