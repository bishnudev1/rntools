import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import api from '../Api/toolsdata';

const Tools = ({ navigation }) => {

    const [data, setData] = useState(api);

    return (
        <View>
            <SafeAreaView style={{ height: '100%', padding: 20, backgroundColor: '#52489c' }}>
                <Text style={{ fontSize: 24, color: 'white', fontFamily: 'Poppins-Bold', paddingBottom: 20 }}>All availabe tools</Text>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(id) => { return id.id }}
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.itemcontainer}>
                                    <Text style={[styles.itemtext, styles.headitemtext]}>{item.name}</Text>
                                    <View style={{alignItems:'center'}}>
                                    <Image style={{ height: 225, width: '100%' }} source={item.image} />
                                    </View>
                                    <Text style={styles.itemtext}>{item.desc}</Text>
                                <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={styles.itembtnstyle}>
                                    <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'Poppins-Bold', fontSize:17 }}>{item.btn}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    itemtext: {
        color: '#999',
        paddingVertical: 5,
        fontFamily: 'Poppins-Regular',
        textAlign:'center',
        fontSize:14
    },
    headitemtext: {
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
        paddingTop:15
    },
    itembtnstyle: {
        padding: 10,
        backgroundColor: 'darkviolet',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    itemcontainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: '100%',
        width: 300,
        marginHorizontal: 10,
        flex:1,
        justifyContent:'space-between',
        padding:10,
        //elevation:10
    }
})

export default Tools
