import { StyleSheet, Text, View , Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        แสดงเนื้อหาหน้าหลัก
      </Text>
    <Button
    onPress={()=> navigation.push("Detail")}
    title="ดูรายละเอียดสินค้า"
    color="#841584"
    />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center'
},
content:{
fontSize:20,
borderWidth:3,
borderColor:'pink',
borderRadius:50,
paddingTop:10,
paddingBottom:5,
paddingLeft:20,
paddingRight:15,
},
})