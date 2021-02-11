import React, { useState } from 'react'

const FormAltaTarea = ({ agregarTarea }) => {

    const [tarea, setTarea] = useState("");

    const handleOnClick = () => {
        if(tarea !== ""){
            agregarTarea(tarea);
        }
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Ingrese la tarea..."  
                onChange={({target: {value}}) => setTarea(value)}/>
            <button onClick={handleOnClick}>Agregar</button>
        </div>
    )
}

export default FormAltaTarea;