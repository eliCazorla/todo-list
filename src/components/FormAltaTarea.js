import React, { useState } from 'react'

const FormAltaTarea = ({ agregarTarea }) => {

    const [tarea, setTarea] = useState("");

    const handleOnClick = () => {
        if(tarea){
            agregarTarea(tarea);
            setTarea('');
        }
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Ingrese la tarea..."  
                value={tarea}
                onChange={({target: {value}}) => setTarea(value)}/>
            <button onClick={handleOnClick}>Agregar</button>
        </div>
    )
}

export default FormAltaTarea;