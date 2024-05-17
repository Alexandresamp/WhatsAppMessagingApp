
import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ChildComponent = ({ number, message, onNumberChange, onMessageChange, onSendMessage }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Número (Ex: 5588999991234)"
        keyboardType="numeric"
        value={number}
        onChangeText={onNumberChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Mensagem"
        value={message}
        onChangeText={onMessageChange}
      />
      <Button title="Enviar mensagem" onPress={onSendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
});

export default ChildComponent;
