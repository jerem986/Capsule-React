import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import toDoReducer from './reducers/todo-reducer'

const reducer = combineReducers({
    todo : toDoReducer
})

export default createStore(reducer, applyMiddleware(thunk))

//on utilise le createstore en lui appliquant le reducer qu'on a créer juste avant et on lui applique un middleware thunk
//le thunk permet de renvoyer aussi des fonction donc la on pourrait avoir des requetes ajax par exemple (axios)