import React, {useState, useEffect} from "react";
import TareaFormulario from './TareaFormulario';
import Tarea from "./Tarea";
import '../hojas-de-estilo/ListaDeTareas.css';

const ListaDeTareas= () => {
    const[tareas, setTareas]= useState([]);
    
    /**
     * Actualizar el useState en relación a lo guardado
     * en el localStorage
     */
    useEffect(() => {
        const storage = localStorage.getItem('variableLocal');
        if (storage) {
            setTareas(JSON.parse(storage));
        }
    }, []);
    

    const agregarTarea= (tarea)=> {
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
        
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
            localStorage.setItem('variableLocal', JSON.stringify(tareasActualizadas));
        }
    };

    const eliminarTarea = (id) =>{
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
        localStorage.setItem('variableLocal', JSON.stringify(tareasActualizadas));
    };


    const completarTarea = (id) =>{
        const tareasActualizadas= tareas.map(tarea =>{
            if(tarea.id === id){
             tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
        localStorage.setItem('variableLocal', JSON.stringify(tareasActualizadas));
    };

    
    return(
        <>
          <TareaFormulario onSubmit={agregarTarea}/>
            <div className="tarea-lista-contenedor">
                {
                    tareas.map((tarea) =>
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea}
                           
                        />
                    )
                }
            </div>
        </>
    );
}
export default ListaDeTareas;