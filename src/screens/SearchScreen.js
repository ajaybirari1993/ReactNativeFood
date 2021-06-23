import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import useResults from './../hooks/useResults';

// Components import 
import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchResturant, result, errorMsg] = useResults();

  const getResultsByPrice = (price) => {
    return result.filter(item => {
      return item.price === price;
    })
  }

  return (
    <View style={styles.mainContainer}>
      <SearchBar
        term={term}
        onTermChanged={setTerm}
        onTermSubmit={() => searchResturant(term)}
      />
      {
        errorMsg ?
          <Text>
            {errorMsg}
          </Text>
          :
          null
      }
      <Text>We have found {result.length} results.</Text>
      <ScrollView>
        <ResultList
          title="Cost Effective"
          results={getResultsByPrice('$')}
        />
        <ResultList
          title="Bit pricier"
          results={getResultsByPrice('$$')}
        />
        <ResultList
          title="Big Spender"
          results={getResultsByPrice('$$$')}
        />
      </ScrollView>
    </View >
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    padding: 15,
    flex: 1
  }
})

export default SearchScreen;