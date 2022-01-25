import { Outlet } from 'react-router-dom';
import Title from '../../component/title/title'

const ToDoApp = () =>{
    return (
        <main>
            <Title text='Todo App'/>
            <Outlet/>
        </main>
    );
};

export default ToDoApp