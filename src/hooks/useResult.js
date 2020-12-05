import React, { useEffect, useState } from 'react';
import yelp from './../api/yelp';

export default () => {
    const [ result, setResult ] = useState([])
    const onTermSubmit = async (searchTerm) => {
        const rep = await yelp.get('/search', {
            params: {
                term: searchTerm,
                location: "New york",
                limit: 50
            }
        })
        setResult( rep.data["businesses"] );
    }

    useEffect( () => {
        onTermSubmit('food');
    }, [] );

    return [ result, onTermSubmit ]
}