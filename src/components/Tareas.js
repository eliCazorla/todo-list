import React from 'react';
import Tarea from './Tarea';

const Tareas = ({ tareas }) => {
    return (
        <div>
            {tareas.map((elem, index) => <Tarea tarea={elem} key={index}/>)}
        </div>
    )
}

export default Tareas;
