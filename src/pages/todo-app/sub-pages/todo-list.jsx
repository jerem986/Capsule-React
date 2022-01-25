import { List, ListItem, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const ToDoList = () =>{

    const tasks = useSelector(state => state.todo.tasks)

    const taskJSX = tasks.map(
        t => ( // ce sont des composant de la bibiliotheque de @mui/material
            <ListItem key={t.id}>
                <ListItemText 
                    primary={t.title} 
                    secondary={t.desc}
                />
            </ListItem>
        )
    )

    return (
        <>
            <h2>Liste de tache</h2>
            <NavLink to='form'>Ajouter</NavLink>

            <List>
                {taskJSX}
            </List>
        </>
    );
};

export default ToDoList