import React, { useReducer } from 'react';//importando useReduce
import { v4 as uuidv4 } from 'uuid';
import TaskContext from './taskContext'; //importando task context
import taskReducer from './taskReducer'; //importando reducer
import { TASKS_PROJECT, ADD_TASK ,ERROR_TAREAFORM, DELETE_TASK} from '../../types'; //importando type

//Creando el provider

const TaskState = props =>{

     //Declarando un state inicial 
     const initialState = { 
        tasks: [
        { id:1, name:'Elegir plataforma', state:false, projectId:1 },
        { id:2, name:'Elegir Colores', state:true, projectId:2 },
        { id:3, name:'Elegir plataformas de pago', state:false, projectId:3 },
        { id:4, name:'Elegir Hosting', state:true, projectId:2 },
        { id:5, name:'Elegir plataforma', state:false, projectId:1 },
        { id:6, name:'Elegir Colores', state:true, projectId:2 },
        { id:7, name:'Elegir plataformas de pago', state:false, projectId:3 },
        { id:8, name:'Elegir Hosting', state:true, projectId:4 },
        { id:9, name:'Elegir plataforma', state:false, projectId:2 },
        { id:10, name:'Elegir Colores', state:true, projectId:2 },
        { id:11, name:'Elegir plataformas de pago', state:false, projectId:3 },
        { id:13, name:'Elegir Hosting', state:true, projectId:3 }
        ],
        tasksProject:null,
        errortask:false,
        
      }

    //Dispath para ejecutar las acciones
    const [ state, dispatch ] = useReducer(taskReducer, initialState);

    //Funciones

    //Obtener las tareas de un proyecto
    const getTasks = projectId => {
        dispatch({
            type:TASKS_PROJECT,
            payload:projectId
        })
    }

    //Agregando tarea
    const addTask = task =>{
        task.id = uuidv4();
        dispatch({
            type:ADD_TASK,
            payload:task
        })
    }

    //Validar formulario tareas
    const validateFormTask = () =>{
        dispatch({
            type:ERROR_TAREAFORM
        })
    }

    //Eliminar tarea por id
    const deleteTask = id =>{
        dispatch({
            type:DELETE_TASK,
            payload: id
        })
    }



    return(

        <TaskContext.Provider
          value={{
            tasks:state.tasks,
            tasksProject:state.tasksProject,
            errortask:state.errortask,
            getTasks,
            addTask,
            validateFormTask,
            deleteTask
          }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default  TaskState;