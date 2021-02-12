import React, { useState } from 'react';
import FormAltaTarea from './FormAltaTarea';
import Tareas from './Tareas';

const Contenido = () => {
    const [tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) => {
        setTareas([{ nombre: tarea, realizada: false }, ...tareas]);
    }

    const realizarTarea = (nombreASustituir) => {
        let filtrado = tareas.filter(({ nombre }) => nombre !== nombreASustituir);
        const tareaARealizar = tareas.find(({ nombre }) => nombre === nombreASustituir);
        filtrado.push({...tareaARealizar, realizada:true});
        setTareas(filtrado);
    } 

    return (
        <div>
            <FormAltaTarea agregarTarea={agregarTarea}/>
            <Tareas tareas={tareas} realizarTarea={realizarTarea}/>
        </div>
    )
}

export default Contenido;
