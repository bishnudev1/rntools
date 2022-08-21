import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Alert, Linking, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const LinkChecker = () => {

    const [link, setLink] = useState('')
    const [safe,setSafe] = useState(null)

    const checkLink = () => {
        if(link.includes('https' || 'www')){
            setSafe(true)
        }
        else{
            setSafe(false)
        }
    }

    return (
        <SafeAreaView style={{ height: '100%', backgroundColor: '#52489c', padding: 20, justifyContent: 'space-evenly' }}>
            <Text style={{ fontSize: 24, color: 'white', fontFamily: 'Poppins-Bold', paddingBottom: 20 }}>Phishing Link Checker</Text>
            <View style={{alignItems:'center'}}>
            <Image style={styles.checkImg} source={require('../assets/images/check.png')} />
            </View>
            {
                safe === null ? (
                    <Text style={{ textAlign: 'center', fontSize: 22, color: 'white', fontFamily: 'Poppins-Bold' }}>Try a Link 😉</Text> 
                ) :
                safe ? (
                    <Text style={{ textAlign: 'center', fontSize: 22, color: 'white', fontFamily: 'Poppins-Bold' }}>Safe Link 😇</Text> 
                ) : (
                    <Text style={{ textAlign: 'center', fontSize: 22, color: 'white', fontFamily: 'Poppins-Bold' }}>Unsafe Link ☠️</Text>
                )
            }
            <View>
                <TextInput style={{ backgroundColor: '#52489c', marginBottom: 10,borderColor:'white',borderWidth:1,borderRadius:10,padding:10,color:'white',fontFamily:'Poppins-Medium' }} value={link} onChangeText={(e) => setLink(e)} />
                <TouchableOpacity onPress={checkLink} style={{ padding: 8, backgroundColor: 'white', borderRadius: 10 }}>
                    <Text style={{ fontFamily: 'Poppins-Bold', textAlign: 'center', color: 'gray' }}>Check</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    checkImg: {
        height: 400,
        width: 400
    }
})

export default LinkChecker
