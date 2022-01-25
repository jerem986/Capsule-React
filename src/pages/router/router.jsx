import { Typography } from "@mui/material";
import { useEffect } from "react";
import { NavLink, Outlet, useParams, useSearchParams } from "react-router-dom";
import Title from "../../component/title/title";

export const RouteInitial = () =>{
    return(
        <div>
            <h2>Route initiale</h2>
        </div>
    )
}

export const Route1 = () =>{
    return(
        <div>
            <h2>Route 1</h2>
        </div>
    )
}

export const Route2 = () =>{
    return(
        <div>
            <h2>Route 2</h2>
        </div>
    )
}

export const RouteParam = () =>{
    const {id} = useParams()
    //const {id,ex} = useParams() si on envoi 2 parametre, on peut en mettre plus mais ça va mapper directement ce qu'il faut voir dans route.js commentaire
    //equivalent a const id = useParams(id)

    useEffect(() => { //equivalent du ngOnInit d'angular donc cela permet de set des choses au chargement de la page
        console.log(`Activation du useEffect -> Param ${id}`);

        return () =>{ //ce return ce sera lorsqu'on quitte la page il s'activera donc lorsque que je quitte la page du router params il s'exécute
            console.log(`Nettoyage du useEffect => params ${id}`);
        }
    }, [id]); //le id ici permet de vérifier si le param id a été changer. s'il n'est pas changer il ne va pas activer le return et donc n'exécutera pas le return important lors de requete axios !!

    return(
        <div>
            <h2>Route Param</h2>
            <p>Le parametre ID est {id}</p>
        </div>
    )
}
export const RouteSearch = () =>{
    const [searchParams, setSearchParams] = useSearchParams() //donnera lé récupération du parametre et le setSearchParams sera comme un setState et pourra le modifier
    //const [searchParms] = useSearchParams() on peut notifier que ceci si on a pas besoin de le modifier
    //console.log(searchParams.get('firstname'));

    const firstname = searchParams.get('firstname')
    const lastname = searchParams.get('lastname')
    return(
        <div>
            <h2>search</h2>
            <p>{firstname} {lastname}</p>
        </div>
    )
}

const DemoRouter = () =>{
    return (
        <main>
            <Typography component='h1' variant='h3'>
                Router
            </Typography>

            {/*<Title text={'Exemple d\'un router'}/> exemple pour avoir un caractère d'échapement avant l'apostrophe*/}

            <ul>
                <li><NavLink to=''>Initial</NavLink></li>
                <li><NavLink to='route1'>Route 1</NavLink></li>
                <li><NavLink to='route2'>Route 2 </NavLink></li>
                <li><NavLink to='param/42'>Route param/42</NavLink></li>
                <li><NavLink to='param/2.567'>Route param/2.567</NavLink></li>
                <li><NavLink to='search?firstname=Zaza&lastname=Vanderquack'>search?firstname=Zaza&lastname=Vanderquack</NavLink></li>
                <li><NavLink to='search?firstname=Khun&lastname=Ly'>search?firstname=Khun&lastname=Ly</NavLink></li>
            </ul>

            <Outlet/> {/*permet d'afficher des composant dans des composants, donc ici les childrens voir dans route.js*/}
        </main>
    );
};

export default DemoRouter