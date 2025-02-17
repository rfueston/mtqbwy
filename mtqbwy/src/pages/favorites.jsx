import React from "react";
import {Typography, Button, Container, Paper} from "@mui/material";
import {useNavigate} from "@tanstack/react-router";
import "../App.css";


const Favorites = () => {
    const navigate = useNavigate();

    return (
        <Container className="container">
            <Paper className="paper">
                <Typography variant="h3">
                    Favorites
                </Typography>
                <Typography className="typography">
                    WIP
                </Typography>
                <br></br>
                <br></br>
                <Button variant="outlined" color="secondary" onClick={() =>
                    navigate({to: "/home"})}>
                    Back to Home
                </Button>
            </Paper>
        </Container>
    );
};

export default Favorites;
