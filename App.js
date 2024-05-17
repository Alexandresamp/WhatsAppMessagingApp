
import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import * as Linking from 'expo-linking';
import ChildComponent from './ChildComponent';

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (phoneNumber.startsWith('55') && phoneNumber.length >= 13) {
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      Linking.openURL(url)
        .catch(() => {
          Alert.alert('Erro', 'Não foi possível abrir o WhatsApp.');
        });
    } else {
      Alert.alert('Número inválido', 'O número deve começar com 55 e ter pelo menos 11 caracteres.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ChildComponent
        number={phoneNumber}
        message={message}
        onNumberChange={setPhoneNumber}
        onMessageChange={setMessage}
        onSendMessage={handleSendMessage}
      />
    </View>
  );
};

export default App;
