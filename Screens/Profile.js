import * as React from 'react';
import {View,Image,Text,ScrollView,StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';

export default function Profile({navigation}){
 return (<ScrollView>
    <View style={Styles.container}>
    <Image style={Styles.imgcon} source={require('./images/download-removebg-preview.png')} />
    </View>
    <View>
    <Image  style={{width:20, height:20, marginTop:-120, marginLeft:320, borderColor:'white',borderWidth:1,borderRadius:50,backgroundColor:'white'}} source={require('./images/images-removebg-preview.png')} />
    <Image  style={{width:20, height:20, marginTop:-20, marginLeft:290, borderColor:'white',borderWidth:1,borderRadius:50,backgroundColor:'white'}} source={require('./images/360_F_137578382_oiDBkjSNvCEPUFULf63VDbYasx60ZSED-removebg-preview.png')}/>
    </View>
    <Text style={{fontSize:20, fontWeight:'bold',marginTop:20, textAlign:'center'}}>Shivankar Mehta</Text>
    <Text style={{fontSize:15,marginTop:5, textAlign:'center'}}>UX Designer,Apple .United States</Text>
    <Button style={{borderRadius: 10,
     borderWidth: 1,
      borderColor: 'black', width:130,backgroundColor:'#fff',marginLeft:45,marginTop:20}}>Product Design</Button>
      <Button style={{borderRadius: 10,
     borderWidth: 1,
      borderColor: 'black', width:130,backgroundColor:'#fff',marginLeft:180, marginTop:-40}}>Visual Design</Button>
     <View style={Styles.container1}>
        <Text style={{fontSize:15, marginLeft:20}} >OverView</Text>
        <Text style={{fontSize:15, fontWeight:'bold', borderRadius:15, width:100, height:35, paddingLeft:18,paddingTop:5, backgroundColor:'#fff', marginLeft:100, marginTop:-25}}>Bookings</Text>
        <Text style={{fontSize:15, marginLeft:220,  marginTop:-30}}>Favourites</Text>
     </View>
     <Text style={{fontSize:15, fontWeight:'bold', marginLeft: 15}}>Upcoming Sessions</Text>
     <View style={Styles.container2}>
        <View style={Styles.container3}>
        <Text style={{fontSize:15, fontWeight:'bold', margin:10}}>Nov 14, 8:45PM</Text>
        <Text style={{color:'green',fontSize:15, fontWeight:'bold', borderRadius:15, width:100, height:30, paddingLeft:15,paddingTop:5, backgroundColor:'#fff', marginLeft:200, marginTop:-32}}>Confirmed</Text>
        </View>
        <Image style={Styles.imgst} source={require('./images/download-removebg-preview.png')} />
        <Text style={{fontSize:15,fontWeight:'bold', marginLeft:60, marginTop:-40}}>Shivankar Mehta</Text>
        <Text style={{marginLeft:60}}>Career, Design</Text>
        <View style={{borderColor:'blue', borderWidth:1,borderRadius:50, width:40, height:40, backgroundColor:'white', marginLeft:260, marginTop:-40}}><Text style={{textAlign:'center', fontSize:25, marginTop:-7, color:'blue'}}>...</Text></View>
     </View>
     <View style={Styles.container2}>
        <View style={Styles.container3}>
        <Text style={{fontSize:15, fontWeight:'bold', margin:10}}>Nov 14, 8:45PM</Text>
        <Text style={{color:'#daa520',fontSize:15, fontWeight:'bold', borderRadius:15, width:100, height:30, paddingLeft:15,paddingTop:5, backgroundColor:'#fff', marginLeft:200, marginTop:-32}}>Pending</Text>
        </View>
        <Image style={Styles.imgst} source={require('./images/download-removebg-preview.png')} />
        <Text style={{fontSize:15,fontWeight:'bold', marginLeft:60, marginTop:-40}}>Shivankar Mehta</Text>
        <Text style={{marginLeft:60}}>Career, Design</Text>
        <View style={{borderColor:'blue', borderWidth:1,borderRadius:50, width:40, height:40, backgroundColor:'white', marginLeft:260, marginTop:-40}}><Text style={{textAlign:'center', fontSize:25, marginTop:-7, color:'blue'}}>...</Text></View>
     </View>
     <Text style={{fontSize:15, fontWeight:'bold', marginLeft: 15}}>Previous Sessions</Text>
     <View style={Styles.container2}>
        <View style={Styles.container3}>
        <Text style={{fontSize:15, fontWeight:'bold', margin:10}}>Nov 14, 8:45PM</Text>
        <Text style={{color:'#808080',fontSize:15, fontWeight:'bold', borderRadius:15, width:100, height:30, paddingLeft:15,paddingTop:5, backgroundColor:'#fff', marginLeft:200, marginTop:-32}}>Finished</Text>
        </View>
        <Image style={Styles.imgst} source={require('./images/download-removebg-preview.png')} />
        <Text style={{fontSize:15,fontWeight:'bold', marginLeft:60, marginTop:-40}}>Shivankar Mehta</Text>
        <Text style={{marginLeft:60}}>Career, Design</Text>
        <View style={{borderColor:'blue', borderWidth:1,borderRadius:50, width:40, height:40, backgroundColor:'white', marginLeft:260, marginTop:-40}}><Text style={{textAlign:'center', fontSize:25, marginTop:-7, color:'blue'}}>...</Text></View>
     </View>
</ScrollView>);
}

const Styles= StyleSheet.create({
container:{
    flex: 1,
    height:120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008080',
    margin:10,
    padding:10
},
imgcon:{
width:100,
height:100,
marginTop:80,
backgroundColor:'black',
borderRadius: 50,
borderWidth: 3,
borderColor: '#fff'
},
container1 :{
    margin:15,
    width:330,
    height:45,
    backgroundColor:'#dcdcdc',
    borderRadius:25,
    padding:10
},
container2:{
    flex: 1,
    height:120,
    padding:10,
    backgroundColor: '#fff',
    margin:10,
    borderRadius:10,
    borderColor:'black',
    borderWidth:2
},
container3:{
    width:315,
    height:45,
    backgroundColor:'#dcdcdc',
    borderRadius:10,
    marginBottom:10,
},
imgst:{
    width:40,
    height:40,
    marginLeft:10,
    backgroundColor:'black',
    borderRadius:50
}
})