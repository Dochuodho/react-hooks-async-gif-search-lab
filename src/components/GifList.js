import React from "react";

function GifList({ gifs }) {
    return (
        <ul>
            {gifs.map((gif) => (
                <li key={gif.id}>
                    <img src={gif.url} alt={gif.slug} />
                </li>
            ))}
        </ul>
    );
}

export default GifList;