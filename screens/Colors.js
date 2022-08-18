import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'

const Colors = () => {

  const [color, setColor] = useState([])

  console.log(color);

  const generateColor = () => {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `rgb(${red},${green},${blue})`
  }

  return (
    <SafeAreaView style={{ height: '100%', backgroundColor: '#52489c', padding: 20 }}>
      <Text style={{ fontSize: 28, color: 'white', fontFamily: 'Poppins-Bold', paddingBottom: 20 }}>Generate a color</Text>
      <View>
        <TouchableOpacity onPress={() => { setColor([...color, generateColor()]) }} style={{ backgroundColor: 'blue', borderRadius: 10,padding:10 }}>
          <Text style={{ fontSize: 17, textAlign: 'center', fontFamily: 'Poppins-Medium', color: 'white' }}>Generate</Text>
        </TouchableOpacity>
        <FlatList
          keyExtractor={(key) => key}
          data={color}
          //style={styles.colorcontainer}
          renderItem={({ item }) => {
            console.log(item);
            return (<View style={{ height: 100, backgroundColor: item, borderRadius: 10, flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
              <Text style={{ fontFamily: 'Poppins-Bold',fontSize:20 }}>{item}</Text>
            </View>)
          }}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  colorcontainer: {
    height: 100,
    marginBottom: 20,
  }
})

export default Colors
