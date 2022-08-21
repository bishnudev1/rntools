import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Home = ({navigation}) => {
  return (
    <View>
      <View style={{height:'100%',justifyContent:'space-between',backgroundColor:'#52489c',padding:20}}>
        <View style={{alignItems:'center'}}>
            <Text style={{fontSize:28,color:'white',fontFamily:'Poppins-Bold'}}>RN Tools</Text>
            <Text style={{fontSize:19,textAlign:'center',color:'white',fontFamily:'Poppins-Regular'}}>With lot of free tools we ensure that we make your software development field too easy.</Text>
        </View>
        <View>
            <Image style={{height:250,width:'100%'}} source={require('../assets/images/home.png')}/>
        </View>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('All Tools')} style={styles.explore_tools}>
                <Text style={{fontSize:17,color:'gray',fontFamily:'Poppins-Medium'}}>Explore tools</Text>
                <Icon name='tools'size={20} color='gray' />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    explore_tools: {
        padding:10,
        backgroundColor:'white',
        borderRadius:15,
        alignItems:'center',
        justifyContent:'space-evenly',
        flexDirection:'row'
    }
})

export default Home
