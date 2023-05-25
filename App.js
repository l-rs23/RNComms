import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

const btnTxtConn = "Connect to server"
const btnTextSend = "Send!"
const txtWriteMsg = "Write message for server:"
const txtResponse = "Response from server:"

export default function App() {
  return (
    <View style={styles.container}>
      <MyButton buttonText={ btnTxtConn }/>
      
      <Title titleText={txtWriteMsg}/>

      <MyButton buttonText={btnTextSend}/>
      
      <Title titleText={txtResponse}/>
      
      <StatusBar style="auto" />
    </View>
  );
}

export function Title({ titleText }) {
  return (
    <Text style={styles.titleText}>{ titleText }</Text>
  );
}

export function MyButton ({ buttonText }) {
  return (
    <Button
      title={ buttonText}
      onPress={() => alert("button was pressed")}
    />
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
    marginVertical: 15,
  },
});
