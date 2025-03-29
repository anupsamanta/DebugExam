/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useRef} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,

} from 'react-native';

import {
  Colors,
  Header
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [counter, setcounter] = useState(0)
  const counterRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const testLog = () =>{
    console.log("Hr my latest log =========")
  }
  
  const callAPI = () =>{
      fetch('https://jsonplaceholder.typicode.com/todos/').then(res => res.json())
      .then(res1 =>
         console.log(res1)
      )
  }
  const startC = () =>{
    if(!counterRef.current){
      counterRef.current = setInterval(()=>{
        setcounter(counter => counter + 1)
      }, 1000)
    }
  
  }
  const pauseC = () =>{
    if(counterRef.current){
      clearInterval(counterRef.current)
      counterRef.current = null
    }
  }
  const resetC = () =>{
    if(counterRef.current){
      clearInterval(counterRef.current)
      counterRef.current = null
      setcounter(0)
    }
  }

  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the reccomendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */
  const safePadding = '5%';

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        style={backgroundStyle}>
        <View style={{paddingRight: safePadding}}>
          <Header/>
        </View>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            paddingHorizontal: safePadding,
            paddingBottom: safePadding,
          }}>
          <Text onPress={testLog}>Add Log</Text>
          <Text onPress={callAPI}>Call API</Text>
          <Text>{counter}</Text>
          <View style = {{flexDirection : 'row'}}>
            <Text onPress={startC}>Start</Text>
            <Text  onPress={pauseC}> pause</Text>
            <Text  onPress={resetC}>  Reset</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
