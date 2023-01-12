import {StyleSheet, TabBarIOS} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'


import Home from './screens/bottomtabs/Home.js'
import Report from './screens/bottomtabs/Report.js'
import Noti from './screens/bottomtabs/Noti.js'
import Setting from './screens/bottomtabs/Setting.js'
import Profile from './screens/bottomtabs/Profile.js'
import Detail from './screens/Detail.js'

// import Detail from './screens/Detail'
// import Home from './screens/Home'
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// สร้าง Function ไว้แสดง Tab Menu
function MainTabs() {
  return (
    <Tab.Navigator 
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#fff176',
      tabBarInactiveTintColor: '#e0f7fa',
      tabBarStyle:{
        backgroundColor:'black',
        height: 56,
        paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        fontSize:20,
      },
      tabBarLabelStyle: {
        fontSize: 14,
      }
    }}
  >
      <Tab.Screen name="Home" component={Home} 
         options={{
           tabBarLabel:'หน้าหลัก',
           tabBarIcon: ({color,size}) => {
            return <IoniconsIcon name="home" size={24} color={color}/>
          }
         }}
      />
        <Tab.Screen name="Report" component={Report} 
         options={{
           tabBarLabel:'รายงาน',
           tabBarIcon: ({color,size}) => {
            return <IoniconsIcon name="clipboard" size={24} color={color}/>
          }
         }}
      />
       <Tab.Screen name="Notification" component={Noti} 
         options={{
           tabBarLabel:'แจ้งเตือน',
           tabBarIcon: ({color,size}) => {
            return <IoniconsIcon name="notifications" size={24} color={color}/>
          }
         }}
      />
       <Tab.Screen name="Setting" component={Setting} 
         options={{
           tabBarLabel:'ตั้งค่า',
           tabBarIcon: ({color,size}) => {
            return <IoniconsIcon name="settings" size={24} color={color}/>
          }
         }}
      />
       <Tab.Screen name="Profile" component={Profile} 
         options={{
           tabBarLabel:'โปรไฟล์',
           tabBarIcon: ({color,size}) => {
            return <IoniconsIcon name="person" size={25} color={color}/>
          }
         }}
      />
    </Tab.Navigator>
  );
}
function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'หน้าหลัก';
    case 'Report':
      return 'รายงาน';
    case 'Notification':
      return 'แจ้งเตือน';
    case 'Setting':
      return 'ตั้งค่า';
    case 'Profile':
      return 'โปรไฟล์';
  }
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Maintab" component={MainTabs} 
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
            headerStyle: {
              backgroundColor: 'black',
           },
           headerTitleStyle: {
            color: 'white',
           }
          })}
        />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
