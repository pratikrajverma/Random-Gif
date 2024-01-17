
import axios from 'axios';
 
import React, { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const randomMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
const tagMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`



const useGif = (search) => {



    
    const [gif, setgif] = useState('');
    const [loader, setloader] = useState(false);

    async function fetchDATA() {
        try {
            setloader(true);
            const response = await axios.get(search ? `${tagMemeurl}&tag=${search}&rating=g`: randomMemeurl );
            const imagesSource = response.data.data.images.downsized.url;
            setgif(imagesSource);
            setloader(false);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }



    }


    useEffect(() => {

        fetchDATA()

    }, [])



    return {gif, loader, fetchDATA}

}

export default useGif