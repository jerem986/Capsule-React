import { Typography } from '@mui/material'
import { useState } from 'react';

const Home = () => {
    
    const [count, setCount] = useState(0) //recupération de count qui est la valeur et setCount est le nom qu'on va donner à la méthode pour la set -> setState

    const handleAction = (e) =>{
        console.log(e);
        setCount(c => c+1) //on reprend bien le nom de la méthode plus haut qui permet le setState
    }

    const handleReset = () =>{ 
        setCount(0); //on reset le compteru a 0 via la methode reprise qui setState
    }

    return (
        <main>
            <Typography component='h1' variant='h3'>{/* on lui donne l'importance d'un h& mais avec le style d'un h3 */}
                Home
            </Typography>
        <div>
            <p>
                Compteur : {count}
            </p>
            <button onClick={handleAction}>Click Here</button>
            <button onClick={handleReset}>Click Here</button>
        </div>
        </main>
    )
}

export default Home;