import React from 'react';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChanged, onTermSubmit }) => {
  return (
    < View
      style={styles.backgroundStyle}
    >
      <Feather
        name="search"
        style={styles.searchIconStyle}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChanged}
        onEndEditing={onTermSubmit}
      />
    </View >
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom: 5
  },
  inputStyle: {
    borderColor: '#000000',
    fontSize: 18
  },
  searchIconStyle: {
    fontSize: 35,
    marginHorizontal: 15,
    alignSelf: 'center'
  }
})

export default SearchBar;