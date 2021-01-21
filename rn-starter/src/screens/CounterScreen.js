import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const COUNT_INCREMENT = 1

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + action.payload };
    case 'decrement':
      return { ...state, counter: state.counter - action.payload };
    default:
      return state
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
          dispatch({ type: 'increment', payload: COUNT_INCREMENT });
        }}
        />
      <Button
        title='Decrease'
        onPress={() => {
          dispatch({ type: 'decrement', payload: COUNT_INCREMENT });
        }}
      />
      <Text>Current Count: { state.counter }</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
