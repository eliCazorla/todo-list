import React from 'react';
import Tarea from './Tarea';

const Tareas = ({ tareas, realizarTarea }) => {
    return (
        <div>
            {tareas.map((elem, index) => <Tarea tarea={elem} key={index} realizarTarea={realizarTarea}/>)}
        </div>
    )
}

export default Tareas;
