import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { withNavigation } from 'react-navigation';
// Components import 
import ResultDetails from './../components/ResultDetails';

const ResultList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.titleStyle}
      >
        {title}
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ResultShow', { id: item.id })}
            >
              <ResultDetails
                details={item}
              />
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
    fontWeight: 'bold',
    marginBottom: 5
  },
  container: {
    marginVertical: 7
  }
});

export default withNavigation(ResultList);