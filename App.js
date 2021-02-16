import React, {useState} from "react"
import {Text,StyleSheet,View,TouchableOpacity, Touchable,StatusBar} from "react-native"
const App = () => {
  const [bgColor,setBgColor] = useState("rgb(32,0,126)")
  const handleBGC = () => {
    let color = "rgb("+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+")";
    setBgColor(color);
  }
  const resetBGC = () => {
    setBgColor("rgb(0,0,0)");
  }
  return(
    <>
    <StatusBar backgroundColor={bgColor}/>
    <View style={[styles.container,{backgroundColor:bgColor}]}>
    <TouchableOpacity onPress={handleBGC}>
    <Text style={styles.text}>tap me</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={resetBGC}/*{setBgColor("rgb(0,0,0)")}*/>
    <Text style={[styles.text,{marginTop:20}]}>reset</Text>
    </TouchableOpacity>
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