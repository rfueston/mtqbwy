import React from "react";
import {Typography, Button, Container, Paper, Box} from "@mui/material";
import {useNavigate} from "@tanstack/react-router";
import "../App.css";


const About = () => {
    const navigate = useNavigate();

    return (
        <Container className="container">
            <Paper className="paper">
                <Typography variant="h3">
                    About
                </Typography>
                <Typography variant="h5">
                    MayTheQueryBeWithYou
                </Typography>
                <br></br>
                <Box>
                    <Typography className="typography">
                        - MUI: using material for UI components
                        <br></br>
                        - Bundler Vite: lighter weight and good for small apps
                        <br></br>
                        - Axios: suggested/needed by TanStack
                        <br></br>
                        <br></br>
                    </Typography>
                </Box>
                <Typography variant="h5">
                    NOTES:
                </Typography>
                <Box>
                    <Typography className="typography">
                        - Primary function testing done on chrome normal and phone view; firefox as secondary.
                    </Typography>
                    <Typography className="typography">
                        - 429 Too Many Requests - issue if you load local. need to run on ip address
                        to allow imgur to bypass 429.
                    </Typography>
                    <Typography className="typography">
                        - I did not add a way to save state so refresh will clear state. If I were to add it
                        I would create a temp state inside Firebase real-time database and clear either with
                        a user button or on a new search.
                    </Typography>
                </Box>
                <br></br>
                <Button variant="outlined" color="secondary" onClick={() =>
                    navigate({to: "/home"})}>
                    Back to Home
                </Button>
            </Paper>
        </Container>
    );
};

export default About;
