import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Alert, Linking } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Api = () => {

  const [api, setApi] = useState([])
  const [randomApi, setRandomApi] = useState('')
  const [page, setPage] = useState(1)

  const api_url = `https://reqres.in/api/users?page=${page}`

  const getApi = async () => {
    const resp = await fetch(api_url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await resp.json()
    const fakeApi = data.data;
    setApi(fakeApi)
  }

  const shareToWhatsapp = () => {
    try {
      Linking.openURL(`https://api.whatsapp.com/send?text=${randomApi}`)
    } catch (error) {
      console.log(error)
    }
  }

  const getRandApi = () => {
    const rand = Math.floor(Math.random() * api.length)
    const randomApi = api[rand]
    setRandomApi(randomApi)
  }

  const changePath = () => {
    Alert.alert('API Route', 'Change operation', [
      { text: 'Previous', onPress: () => { setPage(page - 1) } },
      { text: 'Next', onPress: () => { setPage(page + 1) } },
    ])
  }

  useLayoutEffect(() => {
    getApi()
  }, [])

  return (
    <SafeAreaView style={{ height: '100%', backgroundColor: '#52489c', padding: 20, justifyContent:'space-between' }}>
      <Text style={{ fontSize: 24, color: 'white', fontFamily: 'Poppins-Bold', paddingBottom: 20 }}>Generate a Dummy Api</Text>
      <View style={styles.container}>
        <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 5 }}>
          <Text onPress={() => Linking.openURL(`https://reqres.in/api/users?page=${page}`)} style={{ fontFamily: 'Poppins-Bold', textAlign: 'center', fontSize: 17, color: 'black' }}>{api_url}</Text>
        </View>
        <View style={styles.apicard}>
          <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 22, textAlign: 'center', color: 'black' }}>{randomApi.id}</Text>
          <View style={{ alignItems: 'center' }}>
            <Image style={styles.avatarimg} source={{ uri: randomApi.avatar }} />
          </View>
          <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 22, textAlign: 'center', color: 'black' }}>{randomApi.first_name + randomApi.last_name}</Text>
          <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 22, textAlign: 'center', color: 'black' }}>{randomApi.email}</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:15}}>
        <TouchableOpacity style={styles.apibtn} onPress={getRandApi}>
          <Text style={{ fontFamily: 'Poppins-Medium', textAlign: 'center', color: 'gray', fontSize: 18, paddingHorizontal:9 }}>API</Text>
          <Icon name='user' size={25} color='#999' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.apibtn} onPress={changePath}>
          <Text style={{ fontFamily: 'Poppins-Medium', textAlign: 'center', color: 'gray', fontSize: 18, paddingHorizontal:9 }}>PATH</Text>
          <Icon name='folder' size={25} color='#999' />
        </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={shareToWhatsapp} style={{flexDirection:'row',justifyContent:'space-evenly',backgroundColor:'#52489c',elevation:10,padding:8,borderRadius:10}}>
        <Text style={{color:'white',fontFamily:'Poppins-Medium',fontSize:17}}>Share</Text>
        <Icon name='whatsapp' color='white' size={22}/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor:'#52489c',
    backgroundColor:'lightyellow',
    padding:20,
    justifyContent:'space-between',
    borderRadius:15,
    //height:550,
    elevation:10
  },
  avatarimg: {
    height:150,
    width:150,
    borderRadius:10
  },
  apibtn: {
    paddingVertical:8,
    paddingHorizontal:15,
    backgroundColor:'white',
    borderRadius:10,
    marginHorizontal:10,
    flexDirection:'row'
  },
  apicard: {
    height:300,
    justifyContent:'space-between'
  }
})

export default Api
