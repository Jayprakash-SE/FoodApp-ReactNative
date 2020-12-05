import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import yelp from './../api/yelp';

const ResultShow = ( { navigation } ) => {
    const [ singleResult, setSingleResult ] = useState(null)
    const getResult = async (id) => {
        const resp = await yelp.get( '/' + id)
        setSingleResult( resp.data )
    }

    useEffect( () => {
        getResult( navigation.getParam('id') )
    }, [] );

    if( !singleResult ){
        return null;
    }

    return (
        <View>
            <FlatList
                data={singleResult.photos}
                keyExtractor={ photo => photo }
                renderItem={ ( { item } ) => {
                    return <Image style={styles.imageStyle} source={{ uri: item }} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 300
    }
})

export default ResultShow;