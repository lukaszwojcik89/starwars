import React from 'react';

function SearchCharacters() {
    return (
        <input
            type="text"
            placeholder="Search here"
            value={''}
            onChange={(event) => console.log(event.target.value)}
        />
    );
}

export default SearchCharacters;