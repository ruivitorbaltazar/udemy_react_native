import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.boxOneStyle} />
      <View style={styles.boxTwoStyle} />
      <View style={styles.boxThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  boxOneStyle: {
    height: 75,
    width: 75,
    backgroundColor: 'red'
  },
  boxTwoStyle: {
    height: 75,
    width: 75,
    backgroundColor: 'green',
    alignSelf: 'flex-end'
  },
  boxThreeStyle: {
    height: 75,
    width: 75,
    backgroundColor: 'blue'
  },
});

export default BoxScreen;
