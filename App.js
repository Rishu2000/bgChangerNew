import React from "react"
import {Text,StyleSheet,View} from "react-native"
const App = () => {
  return(
    <>
    <View style={styles.container}>
    <Text>Rishav kumar</Text>
    </View>
    </>
  )
}
export default App;



const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }
});