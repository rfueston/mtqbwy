import React, {useState} from "react";
import {Typography, Button, Container, CircularProgress} from "@mui/material";
import {useNavigate} from "@tanstack/react-router";
import "../App.css";
import {useSetAlbums} from "../hooks/album_query";
import SearchBar from "../components/search_bar";
import AlbumDropdown from "../components/album_dropdown";


const Home = () => {
    const [query, setQuery] = useState(""); //For user input
    const {data, isLoading} = useSetAlbums(query); //when setting album data isloading and data for dropdown or
    // display loading circle
    const navigate = useNavigate(); //TankStack router
    const albums = data || []; // for album data after search or empty to prevent undefined app load error. and to use
    // data for album dropdown component

    //App main page that calls search components and loads results using hooks and components, but not status hook
    return (
        <Container sx={{textAlign: "center"}}>
            <Typography variant="h3">
                Welcome, May the query be with you!
                <br></br>
                <br></br>
            </Typography>
            <SearchBar query={query} setQuery={setQuery}/> {/*Load searchbar component*/}
            <p>Search is set to only allow query once for each entry due to imgur limitation on client attempts.
                So spamming the button won't work!</p>
            <br></br>
            <br></br>
            {isLoading ? (
                <div style={{display: "flex", justifyContent: "center", marginTop: 3, marginBottom: 3}}>
                    <CircularProgress size={33} color="primary"/>
                </div>
            ) : albums?.length ? (
                <div>
                    <AlbumDropdown albums={albums}/> {/*Load image dropdown component*/}
                </div>
            ) : (
                <Typography>No albums found...yet!</Typography> //Placeholder for where dropdown will show before
                // search and if search fails
            )}
            <br></br>
            <Button variant="outlined" color="secondary" onClick={() => navigate({to: "/about"})}>
                About
            </Button>
            <Button variant="outlined" color="secondary" onClick={() => navigate({to: "/favorites"})}>
                Favorites
            </Button>
            <Button variant="outlined" color="secondary" onClick={() => navigate({to: "/signin"})}>
                Leave App
            </Button>
        </Container>
    );
};

export default Home;
