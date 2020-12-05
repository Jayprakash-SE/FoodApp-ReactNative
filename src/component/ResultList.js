import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetails from './ResultsDetails';

const ResultList = ( { title, results, navigation } ) => {
    if( !results.length ){
        return null
    }
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                showsHorizontalScrollIndicator={false}
                keyExtractor={ (item) => item.id}
                renderItem={ ( { item } ) => {
                    return (
                        <TouchableOpacity onPress={ () => navigation.navigate('ResultShow', { id: item.id } )}>
                            <ResultsDetails data={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    },
    viewStyle: {
        marginBottom: 20
    }
})

export default withNavigation(ResultList);