import React, { useState } from 'react';

const Tarea = ({ tarea: { nombre, realizada }, realizarTarea }) => {

    return (
        <div className={realizada ? 'Tarea-realizada':""}>
            <h3>{`Tarea: ${nombre}`}</h3>
            <button onClick={() => realizarTarea(nombre)} disabled={realizada}>Pronta!</button>
        </div>
    )
}

export default Tarea;
