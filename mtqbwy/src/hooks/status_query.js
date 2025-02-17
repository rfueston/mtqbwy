import {useQuery} from "@tanstack/react-query";
import axios from "axios";

//Set to pull from .env file. Either add id here or set create .env file for running. Also, if this is not set the app
// will show as a blank page.
const CLIENT_ID = import.meta.env.VITE_IMGUR_CLIENT_ID;

//Dev only page. Kept in project for dev testing or possible unit testing. *not meant to be forward facing*.
const checkImgurStatus = async () => {

//Using try here unlike in album query. One to show different way of handling call and catching error, but also to
// return empty instead of undefined.
    try {
        const response = await axios.get("https://api.imgur.com/3/credits", {
            headers: {
                Authorization: `Client-ID ${CLIENT_ID}`,
            },
        });
        return response.data || []; //Helps to safeguard against undefined loading errors
    } catch (error) {
        console.error("Error fetching images:", error.message);
        throw new Error(`Failed to fetch images for album: ${albumId} may be invalid!`);
    }
};

export const useImgurStatus = () => {
    return useQuery({
        queryKey: ["imgur-status"],
        queryFn: checkImgurStatus,
        enabled: false,
    });
};
