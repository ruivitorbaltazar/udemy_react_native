import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = 'Rui';
  
  return (
    <View>
      <Text style={styles.greetingStyle}>Getting started with react native!</Text>
      <Text style={styles.nameStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greetingStyle: {
    fontSize: 45
  },
  nameStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
