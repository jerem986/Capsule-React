import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver} from "@hookform/resolvers/yup"
import { useDispatch } from "react-redux";
import { addTask } from "../../../store/actions/todo-action";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
    title: yup.string().required(),
}).required();

const ToDoForm = () =>{

    const { register, handleSubmit, formState:{ errors }, reset}= useForm({
        defaultValues : { //on peut assigner une valeur par defaut
            title: '',
            desc: ''
        },
        resolver : yupResolver(schema) //pour qu'il applique le schema au formulaire
    });
    //formstate récupère les variables d'erreur quand on met de la validation
    //  --> error récupère une erreur pour chaque input, donc soit il y a une erreur soit il y a rien explication pour la ligne d'erreur
    //register ce sont les données récupérée du formulaire
    //handleSubmt c'est la méthode qui sert a désactiver le submit par défaut et récupérer les données du formulaire
    //reset permet de reset les champ texte des input

    const dispatch = useDispatch();
    const nav = useNavigate()

    const onSubmit = (data) => {
        console.log(data);
        dispatch(addTask(data)) //on récupère les data du submit du formulaire et on les envoi via un dispatch dans l'action qui va renvoyer dans le reducer
        nav('../')
        reset()
    }

    return (
        <>
            <h2>Ajouter une tache</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="title">Titre : </label>
                    <input id='title' type="text" {...register('title')}/>
                    {errors.title && 
                    <span>Veuillez ajouter un titre</span>
                    //<span>{errors.title.message}</span> // il existe un message prédéfini
                    }
                </div>
                <div>
                    <label htmlFor="desc">Description : </label>
                    <input id='desc' type="text" {...register('desc')}/>
                </div>
                <button type='submit'>Ajouter</button>
            </form>
        </>
    );
};

export default ToDoForm