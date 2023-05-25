import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

const btnTxtConn = "Connect to server";
const btnTextSend = "Send!";
const txtWriteMsg = "Write message for server:";
const txtResponse = "Response from server:";

let responseTxt = "";

export default function App() {
  const [msgText, setMsgText] = useState("");
  const [responseTxt, setResponseTxt] = useState("");

  function MyButton ({ buttonText }) {
    if (buttonText === btnTextSend) {
      return (
        <Button
          title={ buttonText}
          onPress={() => setResponseTxt(msgText)}
        />
      );
    }
  
    return (
      <Button
        title={ buttonText}
        onPress={() => alert("Button was pressed.")}
      />
    );
  }

  return (
    <View style={styles.container}>
      <MyButton buttonText={ btnTxtConn }/>
      
      <Title titleText={txtWriteMsg}/>
      <TextInput
        style={styles.inputText}
        placeholder='Type a message'
        onChangeText={(value) => setMsgText(value)}
      />
      <MyButton buttonText={btnTextSend}/>
      
      <Title titleText={txtResponse}/>
      <Text style={styles.inputText}>
        {responseTxt}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

function Title({ titleText }) {
  return (
    <Text style={styles.titleText}>{ titleText }</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText: {
    color: "midnightblue",
    fontSize: 16,
    marginTop: 25,
  },

  inputText: {
    height: 50,
    width: 350,
    margin: 12,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    marginVertical: 15,
  },

  textBox: {
    borderWidth: 1,
    borderRadius: 3,
  },
});
