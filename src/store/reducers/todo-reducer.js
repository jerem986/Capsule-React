import { nanoid } from "nanoid"
import { TODO_ADD, TODO_FINISH, TODO_REMOVE } from "../actions/todo-action"

const initialState = {
    tasks : []
}

const toDoReducer = ( state = initialState, action) => {
    
    switch(action.type){

        case TODO_ADD:
            const newTask = {
                ...action.payload,
                id: nanoid()
            }
            return {
                tasks: [newTask, ...state.tasks]
            }
        case TODO_REMOVE:
            return {
                tasks: state.tasks.filter(t=> t.id !== action.payload)
            }
        case TODO_FINISH:
            return{
                tasks : state.tasks.map(t => t.id !==action.payload ? t : {...t, isDone : true})
            }
        default:
            return state 
    }
}

export default toDoReducer