//on peut appeler ce fichier comme on veut 
import NotFound from './pages/error/not-found'
import Home from "./pages/home/home";
import About from "./pages/about/about";
import DemoRouter, { Route1, Route2, RouteInitial, RouteParam,RouteSearch } from "./pages/router/router";
import ToDoApp from './pages/todo-app/todo-app';
import ToDoList from './pages/todo-app/sub-pages/todo-list';
import ToDoForm from './pages/todo-app/sub-pages/todo-form';


export const appRoute = [
    {path : '', element : <Home/>}, //route home car ce sera celle par defaut
    {path : 'about', element : <About />},
    {path : 'router', element : <DemoRouter />,
        children : [
            {index: true, element: <RouteInitial/>},
            {path : 'route1', element : <Route1/>},
            {path : 'route2', element : <Route2/>},
            {path : 'param/:id', element : <RouteParam/>},
            //{path : 'param/:id/test/:ex', element : <RouteParam/>},
            {path : 'search', element : <RouteSearch/>},
        ]},
    {path: 'todo', element: <ToDoApp/>,
        children: [
            {index : true, element : <ToDoList/>},
            {path :'form', element : <ToDoForm/> }
        ] 
    },
    {path: '*', element: <NotFound/>}
];

//pas mal de details dans router.jsx