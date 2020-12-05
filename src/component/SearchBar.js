import React, { useState } from 'react';
import { Button, View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = (props) => {
    return (
        <View style={styles.backgroudStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput 
                placeholder="Search" 
                style={styles.inputStyle}
                onChangeText={ (text) => props.onTermChange(text) }
                value={props.term}
                onEndEditing={ () => props.onTermSubmit()}
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroudStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    }
})

export default SearchBar;