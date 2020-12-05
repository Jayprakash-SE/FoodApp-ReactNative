import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetails = ( { data } ) => {
    return (
        <View style={styles.viewStyle}>
            <Image style={styles.imageStyle} source={{ uri: data.image_url}} />
            <Text style={styles.titleStyle}>{data.name}</Text>
            <Text style={styles.ratingStyle}>Rating: {data.rating} Stats ({data.review_count})</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontWeight: 'bold'
    },
    ratingStyle: {
        color: 'grey'
    },
    viewStyle: {
        marginBottom: 10,
        marginLeft: 15
    },
    imageStyle: {
        height: 120,
        width: 250,
        borderRadius: 4,
        marginBottom: 5
    }
})

export default ResultsDetails;