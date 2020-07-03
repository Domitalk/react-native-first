import { StatusBar } from 'expo-status-bar';
// going to use some state 
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  // going to put this in <text></text>
  const [ outputText, setOutputText ] = useState('Open up App.js to start working on your App');

  return (
    // view is like div
    <View style={styles.container}>

      {/* text is text obvo  */}

      <Text>{outputText}</Text>

      {/* onPress is like onClick but for apps  */}
      {/* remember arrow func to execute setstate */}
      <Button title="Change Text" onPress={()=> setOutputText("The text changed!")}/> 

      <StatusBar style="auto" />
    </View>
  );
}

// not exactly CSS but similar 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
