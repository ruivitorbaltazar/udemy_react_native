import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import ResultsDetail from './ResultsDetail'

const ResultsList = ({ results, title }) => {
  return (
    <View style={styles.listStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    marginBottom: 10
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  }
})

export default ResultsList;