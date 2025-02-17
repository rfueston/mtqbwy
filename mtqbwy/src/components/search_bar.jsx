import React, {useState} from "react";
import {TextField, Button} from "@mui/material";
import PropTypes from "prop-types";
import "../App.css";

export default function SearchBar({query = "", setQuery = () => {}}) {
    const [inputValue, setInputValue] = useState(query);
    const handleSearch = () => {
        setQuery(inputValue); //Update query only on button click
    };

    return (
        <div style={{display: "flex", alignItems: "center", gap: "5px"}}>
            <TextField color="secondary" label="Query Albums" variant="outlined" fullWidth value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                InputProps={{
                    style: {color: "#9C27B0", fontWeight: "bold",},
                }}
            />
            <br></br>
            <Button variant="contained" color="secondary" onClick={handleSearch}>
                Search
            </Button>
        </div>
    );
}

//Define PropTypes for better debugging
SearchBar.propTypes = {
    query: PropTypes.string,
    setQuery: PropTypes.func,
};
