import { Typography } from "@mui/material";

const Title = ({text}) =>{
    return (
        <Typography component='h1' variant='h3'>
            {text}
        </Typography>
    );
};

export default Title