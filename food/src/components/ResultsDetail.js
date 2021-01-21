import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.containerStyle}>
      <Image source={{ uri: result.image_url }} style={styles.imageStyle} />
      <Text style={styles.nameStyle}>{ result.name }</Text>
      <Text style={styles.detailsStyle}>{ result.rating } Start, {result.review_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 15
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  nameStyle: {
    fontWeight: 'bold'
  },
  detailsStyle: {
    fontWeight: '300'
  }
})

export default ResultsDetail;