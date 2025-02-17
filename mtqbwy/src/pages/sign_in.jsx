import React from "react";
import {Container, Paper, Typography, Button} from "@mui/material";
import {useNavigate} from "@tanstack/react-router";
import "../App.css";


const SignIn = () => {
    const navigate = useNavigate();

    // This event change was done differently then the others because in the future this app would want to use u/p
    // for sign in and handleSubmit would be needed for further logic than just to navigate to the home page
    const handleSubmit = (event) => {
        console.log("Entering the app");
        navigate({to: "/home", replace: true});
    };

    return (
        <div>
            <Container className="container">
                <Paper className="paper">
                    <Typography variant="h3" className="typography">
                        Sign In
                    </Typography>
                    <br></br>
                    <br></br>
                    {/*for future u/p implementation*/}
                    <form onSubmit={handleSubmit}>
                        <Button variant="outlined" color="secondary" type="submit">
                            Enter!
                        </Button>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export default SignIn;
