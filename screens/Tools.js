import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import api from '../Api/toolsdata';

const Tools = ({navigation}) => {

    const [data, setData] = useState(api);

    return (
        <View>
            <SafeAreaView style={{ height: '100%', padding: 20, backgroundColor: '#52489c' }}>
                <Text style={{ fontSize: 28, color: 'white', fontFamily: 'Poppins-Bold',paddingBottom:20 }}>All availabe tools</Text>
                <FlatList
                showsVerticalScrollIndicator={false}
                    keyExtractor={(id) => { return id.id }}
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.itemcontainer}>
                                <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <View style={{ width: '50%' }}>
                                        <Text style={[styles.itemtext, styles.headitemtext]}>{item.name}</Text>
                                        <Text style={styles.itemtext}>{item.desc}</Text>
                                    </View>
                                    <Image style={{ height: 150, width: 150 }} source={require('../assets/images/apiimages/image.png')} />
                                </View>
                                <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={styles.itembtnstyle}>
                                    <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'Poppins-Bold' }}>{item.btn}</Text>
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
        color: 'white',
        paddingVertical: 5,
        fontFamily: 'Poppins-Regular'
    },
    headitemtext: {
        fontSize: 20,
        fontFamily: 'Poppins-Bold'
    },
    itembtnstyle: {
        padding: 12,
        backgroundColor: 'darkviolet',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    itemcontainer: {
        backgroundColor: 'violet',
        marginBottom:20,
        borderRadius:20
    }
})

export default Tools
