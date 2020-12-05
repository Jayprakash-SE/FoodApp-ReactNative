import React, { useState } from 'react';
import { ScrollView, View , StyleSheet } from 'react-native';
import SearchBar from './../component/SearchBar';
import ResultList from './../component/ResultList';
import useResult from './../hooks/useResult';

const SearchScreen = () => {
    const [ term, setTerm ] = useState('')
    const [ result, onTermSubmit ] = useResult();

    const fillterByPrice = ( p ) => {
        return result.filter( (item) => {
            return item.price == p;
        })
    }

    return (
        <>
            <SearchBar term={term} onTermChange={(newText) => setTerm(newText)} onTermSubmit={() => onTermSubmit(term)} />
            <ScrollView>
                <ResultList results={fillterByPrice('$')} title="Cost Effective" />
                <ResultList results={fillterByPrice('$$')} title="Bit Pricier" />
                <ResultList results={fillterByPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    ViewStyle: {
        flex: 1
    }
})

export default SearchScreen;