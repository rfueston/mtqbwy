import React, {useState} from "react";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Modal,
    Box,
    Button,
    Container
} from "@mui/material";
import {Fullscreen, CloudOff} from "@mui/icons-material";
import PropTypes from "prop-types";
import "../App.css";


const AlbumDropdown = ({albums}) => {
    const [selectedAlbum, setSelectedAlbum] = useState(""); //For user selected album
    const [selectedImage, setSelectedImage] = useState(null); //For selected image by user for Popup

    //This is to handle the user input/selections
    const handleChange = (event) => {
        const albumId = event.target.value;
        const userSelected = albums.find(album => album.id === albumId);
        setSelectedAlbum(albumId); //Set id from user selection
        setSelectedImage(userSelected?.cover ? `https://i.imgur.com/${userSelected.cover}.jpg` : null);
        console.log(`Selected Album ID: ${albumId}`); //Logging selected id to check matching for debugging
    };

    //Reset selected image to close popup
    const handleClosePopup = () => setSelectedImage(null);

    //This is to handle image full screen and 41/43 are for safari and explorer
    const handleFullscreen = () => {
        if (selectedImage) {
            const image = document.getElementById("full-image");
            if (image.requestFullscreen) {
                image.requestFullscreen();
            } else if (image.webkitRequestFullscreen) {
                image.webkitRequestFullscreen();
            } else if (image.msRequestFullscreen) {
                image.msRequestFullscreen();
            }
        }
    };

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel color={"secondary"}>Albums found! Please, Select an Album</InputLabel>
                <Select
                    value={selectedAlbum}
                    color={"secondary"}
                    onChange={handleChange}
                    displayEmpty
                    sx={{maxHeight: 300, overflowY: "auto"}}
                >
                    {albums.map((album) => (
                        <MenuItem key={album.id} value={album.id}>
                            <ListItemIcon>
                                {album.cover ? (
                                    <img
                                        src={`https://i.imgur.com/${album.cover}.jpg`}
                                        alt={album.title || "UNKNOWN"} //Set to unknown if no title
                                        width="30"
                                        height="30"
                                    />
                                ) : (
                                    <CloudOff color="disabled" fontSize="large"/> //Ensures that if no image can be
                                    // used that is uses a default icon
                                )}
                            </ListItemIcon>
                            <ListItemText primary={album.title || `Album ${album.id}`}/>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/*This is for image popup and handling/showing fullscreen button */}
            <Modal open={!!selectedImage} onClose={handleClosePopup} aria-labelledby="album-image-popup">
                <Box className={"image-box"}>
                    {selectedImage && (
                        <div>
                            <Container sx={{textAlign: "center"}}>
                                <img
                                    id="full-image"
                                    src={selectedImage}
                                    style={{width: "300px", height: "auto"}}
                                />
                                <br></br>
                                <Button
                                    variant="contained"
                                    color={"secondary"}
                                    startIcon={<Fullscreen/>}
                                    onClick={handleFullscreen}
                                >
                                    Full Screen
                                </Button>
                            </Container>
                        </div>
                    )}
                </Box>
            </Modal>
        </div>
    );
};

AlbumDropdown.propTypes = {
    albums: PropTypes.array.isRequired, //Set prop type to be an array in case for some reason error is returned and
    // data is different type
};

export default AlbumDropdown;
