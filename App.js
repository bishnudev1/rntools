import { StyleSheet, Text, View, Image, Linking } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Colors from './screens/Colors'
import Images from './screens/Images'
import Api from './screens/Api'
import Home from './screens/Home'
import Tools from './screens/Tools'
import Icon from 'react-native-vector-icons/FontAwesome5'
import LinkChecker from './screens/LinkChecker'

const Drawer = createDrawerNavigator();

const App = () => {

  const CustomDrawer = (props) => {
    return (
      <DrawerContentScrollView {...props} contentContainerStyle={{ height: '100%', justifyContent: 'space-between' }}>
        <View style={{ padding: 20, backgroundColor: '#52489c' }}>
          <Image style={{ height: 60, width: 60 }} source={require('./assets/images/icon.png')} />
          <View>
            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 17, color: 'white' }}>RN Tools</Text>
            <Text style={{ fontFamily: 'Poppins-Bold', color: 'white' }}>Explore our free UI tools and create your amazing project now.</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={{ padding: 20 }}>
            <Text style={{ fontFamily: 'Poppins-Bold', color: '#999' }}>&copy; RnTools 2022</Text>
            <Text onPress={() => Linking.openURL('https://github.com/bishnudev1')} style={{ fontFamily: 'Poppins-Medium', fontSize: 12, color: '#999' }}>Developed by Bishnudev Khutia</Text>
          </View>
        </View>
      </DrawerContentScrollView>
    )
  }

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        drawerContent={(props) => < CustomDrawer {...props} />}
        initialRouteName='Home' screenOptions={{
          headerShown: false
        }}>
        <Drawer.Screen options={{
          drawerIcon: ({ focused }) => (
            <Icon name='home' size={focused ? 25 : 20} color='grey' />
          )
        }} name='Home' component={Home} />
        <Drawer.Screen options={{
          drawerIcon: ({ focused }) => (
            <Icon name='tools' size={focused ? 25 : 20} color='grey' />
          )
        }} name='All Tools' component={Tools} />
        <Drawer.Screen options={{
          drawerIcon: ({ focused }) => (
            <Icon name='fill' size={focused ? 25 : 20} color='grey' />
          )
        }} name='Color Generator' component={Colors} />
        <Drawer.Screen options={{
          drawerIcon: ({ focused }) => (
            <Icon name='image' size={focused ? 25 : 20} color='grey' />
          )
        }} name='Get Images' component={Images} />
        <Drawer.Screen options={{
          drawerIcon: ({ focused }) => (
            <Icon name='code' size={focused ? 25 : 20} color='grey' />
          )
        }} name='Dummy API' component={Api} />
        <Drawer.Screen options={{
          drawerIcon: ({ focused }) => (
            <Icon name='link' size={focused ? 25 : 20} color='grey' />
          )
        }} name='Link Checker' component={LinkChecker} />
      </Drawer.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}


export default App
