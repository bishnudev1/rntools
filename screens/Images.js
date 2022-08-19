import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, FlatList, Linking, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Images = () => {

  const imageData = [
    {
      id: 1,
      name: 'Undraw',
      desc: 'Get any kind of animated illustrations for free',
      url: 'https://undraw.co/'
    },
    {
      id: 2,
      name: 'Many Pixels',
      desc: 'Get any kind of animated and real illustrations for free',
      url: 'https://www.manypixels.co/gallery'
    },
    {
      id: 3,
      name: 'Unsplash',
      desc: 'Get full hd background images for free',
      url: 'https://unsplash.com/'
    },
    {
      id: 4,
      name: 'Freepik',
      desc: 'Get full hd UI/UX images for free',
      url: 'https://www.freepik.com/'
    },
  ]

  const iconData = [
    {
      id: 1,
      name: 'Fontawesome',
      desc: 'Millions of real and animated icons are available in Fontawesome',
      url: 'https://fontawesome.com/'
    },
    {
      id: 2,
      name: 'Icons8',
      desc: 'Fully pixeleted icons are available with great contrast',
      url: 'https://icons8.com/'
    },
    {
      id: 3,
      name: 'Flaticon',
      desc: 'Best website for Vector icons and stickers',
      url: 'https://www.flaticon.com/'
    },
  ]

  return (
    <SafeAreaView style={{ height: '100%', backgroundColor: '#52489c', padding: 20 }}>
      <Text style={{ fontSize: 28, color: 'white', fontFamily: 'Poppins-Bold', paddingBottom: 20 }}>Image and Icon Assets</Text>
      <ScrollView>
        <View>
          <Text style={{ fontSize: 20, fontFamily: 'Poppins-Bold' }}>Best Images for you</Text>
          <View>
            <Icon style={{ paddingTop: 10 }} name='image' size={55} color='white' />
            <View style={{ marginVertical: 20 }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={imageData}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.imageContainer}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 22, color: '#999', fontFamily: 'Poppins-Regular' }}>{item.name}</Text>
                        <Icon name='icons' size={20} color='#999' />
                      </View>
                      <Text style={{ fontSize: 16, color: '#999', fontFamily: 'Poppins-Medium' }}>{item.desc}</Text>
                      <TouchableOpacity style={styles.toolsbtn} onPress={() => { Linking.openURL(item.url) }}>
                        <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Bold', fontSize: 18, color: 'gray' }}>Explore</Text>
                        <Icon name='image' size={16} color='grey' />
                      </TouchableOpacity>
                    </View>
                  )
                }}
                keyExtractor={(key) => { return key.id }}
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 20, fontFamily: 'Poppins-Bold' }}>Best Icons for you</Text>
          <View>
            <Icon style={{ paddingTop: 10 }} name='icons' size={55} color='white' />
            <View style={{ marginVertical: 20 }}>
              <FlatList
                horizontal
                data={iconData}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.imageContainer}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 22, color: '#999', fontFamily: 'Poppins-Regular' }}>{item.name}</Text>
                        <Icon name='icons' size={20} color='#999' />
                      </View>
                      <Text style={{ fontSize: 16, color: '#999', fontFamily: 'Poppins-Medium' }}>{item.desc}</Text>
                      <TouchableOpacity style={styles.toolsbtn} onPress={() => { Linking.openURL(item.url) }}>
                        <Text style={{ textAlign: 'center', fontFamily: 'Poppins-Bold', fontSize: 18, color: 'gray' }}>Explore</Text>
                        <Icon name='icons' size={16} color='grey' />
                      </TouchableOpacity>
                    </View>
                  )
                }}
                keyExtractor={(key) => { return key.id }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    height: 200,
    justifyContent: 'space-between',
    marginRight: 10,
    width: 350
  },
  toolsbtn: {
    padding: 7,
    backgroundColor: 'wheat',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
})

export default Images
