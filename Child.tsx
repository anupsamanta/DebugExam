import React, {useState, useContext} from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { DataContext } from './App';

const WelcomeScreen = () => {
  let context  = useContext(DataContext)
  if (!context) {
    throw new Error("ChildComponent must be used within an AppProvider");
  }
  const updateValue = () =>{
    context.setData("Value is updated")
  }
  return (
    <View style={styles.view}>
      <Text style={styles.welcomeText}>Welcome to child2<Text
          style={{color: 'rgb(171, 91, 85)', textDecorationLine: 'underline'}}
          onPress={() => Linking.openURL('https://code-b.dev')}>CODEB {' '}
        </Text>
      </Text>
      <TouchableOpacity onPress={updateValue}>
       <Text>update value</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 28,
  },
});

export default WelcomeScreen;
