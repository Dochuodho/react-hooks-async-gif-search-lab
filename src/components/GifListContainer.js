import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
    const [gifs, setGifs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        {
            fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
                .then((response) => response.json())
                .then((data) => {
                    const gifData = data.data.map((gif) => ({
                        id: gif.id,
                        slug: gif.slug,
                        url: gif.images.fixed_height.url,
                    }));
                    console.log(gifData);
                });
        }
    }, [searchTerm]);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <div>
            <GifSearch onSearch={handleSearch} />
            {gifs.length > 0 ? <GifList gifs={gifs} /> : <p>No GIFs to display.</p>}
        </div>
    );
}

export default GifListContainer;