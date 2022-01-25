export const TODO_ADD = "TODO/ADD"
export const TODO_REMOVE = "TODO/REMOVE"
export const TODO_FINISH = "TODO/FINISH"

export const addTask = ({title, desc}) => ({
    type: TODO_ADD,
    payload:{
        title,
        desc,
        isDone: false
    } 
})

export const removeTask = (id) => ({
    type: TODO_REMOVE,
    payload:id
})

export const finishTask = (id) => ({
    type: TODO_FINISH,
    payload:id
})