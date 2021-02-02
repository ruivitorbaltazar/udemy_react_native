import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const Input = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <View style={ styles.containerStyle }>
      <Text style={ styles.labelStyle }>
        { label }
      </Text>
      <TextInput
        style={ styles.inputStyle }
        placeholder={ placeholder }
        value={ value }
        onChangeText={ onChangeText }
        autoCapitalize="none"
        autoCorrect={ false }
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  inputStyle: {
    color: '#000',
    paddingHorizontal: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  }
})

export { Input };
