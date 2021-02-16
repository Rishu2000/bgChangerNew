import React, {useState} from "react"
import {Text,StyleSheet,View} from "react-native"
const App = () => {
  const [bgColor,setBgColor] = useState("#0f0")
  return(
    <>
    <View style={[styles.container,{backgroundColor:bgColor}]}>
    <Text style={styles.text}>tap me</Text>
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
  },
  text:{
    fontSize:30,
    backgroundColor:"#f00",
    paddingHorizontal:30,
    paddingVertical:10,
    borderRadius:15,
    textTransform:"uppercase"
  }
});