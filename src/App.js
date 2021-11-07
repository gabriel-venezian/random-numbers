import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const [number, setNumber] = useState(0);

  function handleNumber() {
    const aleatoryNumber = Math.floor(Math.random() * 999);

    setNumber(aleatoryNumber);
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.number}>{number}</Text>
      <TouchableOpacity onPress={handleNumber}>
        <Text style={style.button}>Random Number</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#ffef00',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 150,
    color: '#353839',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#353839',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    fontSize: 30,
    color: '#FEF9EF',
  },
});

export default App;
