import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image
} from 'react-native';
import yelp from './../apis/yelp';

const ResultShowScreen = ({ navigation }) => {
  const [result, setResults] = useState(null);
  const id = navigation.getParam('id');

  const getRestaurantDetails = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResults(response.data);
  }

  useEffect(() => {
    getRestaurantDetails(id)
  }, [])

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text
        style={styles.textStyle}
      >
        {result.name}
      </Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return (
            <Image
              style={styles.imageStyle}
              source={{ uri: item }}
            />
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 250,
    marginVertical: 5,
    borderRadius: 5
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 5
  }
});

export default ResultShowScreen;