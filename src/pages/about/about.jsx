import { Typography } from "@mui/material";
import { useEffect } from "react";


const About = () =>{

    useEffect(() => { //equivalent du ngOnInit d'angular donc cela permet de set des choses au chargement de la page
        console.log('Activation du useEffect');
    });

    return (
        <main>
            <Typography component='h1' variant='h3'>
                About
            </Typography>
        </main>
    );
};

export default About