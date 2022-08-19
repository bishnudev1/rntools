import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native'
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
    <SafeAreaView style={{ height: '100%', backgroundColor: '#52489c', padding: 20 }}>
      <Text style={{ fontSize: 28, color: 'white', fontFamily: 'Poppins-Bold', paddingBottom: 20 }}>Generate a Dummy Api</Text>
      <View style={{ justifyContent: 'space-between', height: 500 }}>
        <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 5 }}>
          <Text style={{ fontFamily: 'Poppins-Bold', textAlign: 'center', fontSize: 17 }}>{api_url}</Text>
        </View>
        {
          randomApi ? (
            <View style={styles.apicard}>
              <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 22, textAlign: 'center', color: '#999' }}>{randomApi.id}</Text>
              <View style={{ alignItems: 'center' }}>
                <Image style={styles.avatarimg} source={{ uri: randomApi.avatar }} />
              </View>
              <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 22, textAlign: 'center', color: '#999' }}>{randomApi.first_name + randomApi.last_name}</Text>
              <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 22, textAlign: 'center', color: '#999' }}>{randomApi.email}</Text>
            </View>
          ) : (
            <View style={{ backgroundColor: 'white', height: 250, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 22, textAlign: 'center' }}>Click on Get Api to generate a new Api</Text>
            </View>
          )
        }
        <TouchableOpacity style={styles.apibtn} onPress={getRandApi}>
          <Text style={{ fontFamily: 'Poppins-Medium', textAlign: 'center', color: 'gray', fontSize: 18 }}>Get Api</Text>
          <Icon name='user' size={25} color='#999' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.apibtn} onPress={changePath}>
          <Text style={{ fontFamily: 'Poppins-Medium', textAlign: 'center', color: 'gray', fontSize: 18 }}>Change path</Text>
          <Icon name='folder' size={25} color='#999' />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  apibtn: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  avatarimg: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  apicard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    justifyContent: 'space-between',
  }
})

export default Api
