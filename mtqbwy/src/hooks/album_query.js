import {useQuery} from "@tanstack/react-query";
import axios from "axios";

//Set to pull from .env file. Either add id here or set create .env file for running. Also, if this is not set the app
// will show as a blank page.
const CLIENT_ID = import.meta.env.VITE_IMGUR_CLIENT_ID;
const fetchAlbums = async (query) => {
    //Added try, but removed and decided to handle how to display the data is done only st home page and not in hook.
    // not the best for future debugging, but if error data comes bad user will only see no albums found.
    const response = await axios.get("https://api.imgur.com/3/gallery/search/", {
        headers: {
            Authorization: `Client-ID ${CLIENT_ID}`,
        },
        params: {
            q: query, //Only param needed for album search
        },
    });
    return response.data.data //.data.data returns just array with different images for this call.
    // other data was not needed and if blank no albums found appears.
};

export const useSetAlbums = (query) => {
    return useQuery({
        queryKey: ["search", query],
        queryFn: () => fetchAlbums(query),
        enabled: !!query, //If no query fetch is not performed so this will prevent blank attempts.
    });
};
