import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

const ResultDetails = ({ details }) => {
  return (
    <View
      style={styles.container}
    >
      <Image
        source={{ uri: details.image_url }}
        style={styles.imageStyle}
      />
      <Text
        style={styles.nameStyle}
      >
        {details.name}
      </Text>
      <Text>
        {details.rating} Stars, {details.review_count} reviews
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 120,
    width: 250,
    borderRadius: 4,
    marginBottom: 5
  },
  nameStyle: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  container: {
    marginRight: 5
  }
});

export default ResultDetails;