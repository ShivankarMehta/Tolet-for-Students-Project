import * as React from 'react';
import {View,Image,Text,ScrollView,StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Notifications({navigation}){
 return (<ScrollView>
    <View style={Styles.container}>
    <Image style={Styles.imgcon} source={require('./images/download-removebg-preview.png')} />
    </View>
    <View>
    <Image  style={{width:20, height:20, marginTop:-120, marginLeft:320, borderColor:'white',borderWidth:1,borderRadius:50,backgroundColor:'white'}} source={require('./images/images-removebg-preview.png')} />
    </View>
    <Text style={{fontSize:20, fontWeight:'bold',marginTop:20, textAlign:'center'}}>Shivankar Mehta</Text>
    <Text style={{fontSize:15,marginTop:5, textAlign:'center'}}>UX Designer,Apple .United States</Text>
    <Text style={{fontSize:15, margin:20, color:'#808080',fontWeight:'bold'}}>Settings</Text>
    <View>
    <Ionicons name='folder-outline' style={{fontSize:20, marginLeft:20,color:'darkblue'}}></Ionicons>
    <Text style={{marginLeft:50, marginTop:-20,fontSize:15}}>Basic Informations</Text>
    <Ionicons name='chevron-forward-outline' style={{marginLeft:300, marginTop:-20,fontSize:15}}></Ionicons>
    <Text style={{borderBottomColor:'#808080', borderBottomWidth:0.5,marginBottom:10}}></Text>
    </View>
    <View>
    <Ionicons name='eye-outline' style={{fontSize:20, marginLeft:20, color:'darkblue'}}></Ionicons>
    <Text style={{marginLeft:50, marginTop:-20,fontSize:15}}>Expertise</Text>
    <Ionicons name='chevron-forward-outline' style={{marginLeft:300, marginTop:-20,fontSize:15}}></Ionicons>
    <Text style={{borderBottomColor:'#808080', borderBottomWidth:0.5,marginBottom:10}}></Text>
    </View>
    <View>
    <Ionicons name='shield-outline' style={{fontSize:20, marginLeft:20,color:'darkblue'}}></Ionicons>
    <Text style={{marginLeft:50, marginTop:-20,fontSize:15}}>Password Settings</Text>
    <Ionicons name='chevron-forward-outline' style={{marginLeft:300, marginTop:-20,fontSize:15}}></Ionicons>
    <Text style={{borderBottomColor:'#808080', borderBottomWidth:0.5,marginBottom:10}}></Text>
    </View>
    <View>
    <Ionicons name='notifications-outline' style={{fontSize:20, marginLeft:20,color:'darkblue'}}></Ionicons>
    <Text style={{marginLeft:50, marginTop:-20,fontSize:15}}>Notification Settings</Text>
    <Ionicons name='chevron-forward-outline' style={{marginLeft:300, marginTop:-20,fontSize:15}}></Ionicons>
    <Text style={{borderBottomColor:'#808080', borderBottomWidth:0.5,marginBottom:10}}></Text>
    </View>
    <View>
    <Ionicons name='glasses-outline' style={{fontSize:20, marginLeft:20,color:'darkblue'}}></Ionicons>
    <Text style={{marginLeft:50, marginTop:-20,fontSize:15}}>Become a Mentor</Text>
    <Ionicons name='chevron-forward-outline' style={{marginLeft:300, marginTop:-20,fontSize:15}}></Ionicons>
    <Text style={{borderBottomColor:'#808080', borderBottomWidth:0.5,marginBottom:10}}></Text>
    </View>
    <Text style={{fontSize:15, margin:20, color:'#808080',fontWeight:'bold'}}>Other</Text>
    <View>
    <Ionicons name='star-outline' style={{fontSize:20, marginLeft:20,color:'darkblue'}}></Ionicons>
    <Text style={{marginLeft:50, marginTop:-20,fontSize:15}}>Rate Our App</Text>
    <Ionicons name='chevron-forward-outline' style={{marginLeft:300, marginTop:-20,fontSize:15}}></Ionicons>
    <Text style={{borderBottomColor:'#808080', borderBottomWidth:0.5,marginBottom:10}}></Text>
    </View>
    <View>
    <Ionicons name='bookmark-outline' style={{fontSize:20, marginLeft:20,color:'darkblue'}}></Ionicons>
    <Text style={{marginLeft:50, marginTop:-20,fontSize:15}}>Terms & Conditions</Text>
    <Ionicons name='chevron-forward-outline' style={{marginLeft:300, marginTop:-20,fontSize:15}}></Ionicons>
    <Text style={{borderBottomColor:'#808080', borderBottomWidth:0.5,marginBottom:10}}></Text>
    </View>
    <View>
    <Ionicons name='call-outline' style={{fontSize:20, marginLeft:20,color:'darkblue'}}></Ionicons>
    <Text style={{marginLeft:50, marginTop:-20,fontSize:15}}>Contact Us</Text>
    <Ionicons name='chevron-forward-outline' style={{marginLeft:300, marginTop:-20,fontSize:15}}></Ionicons>
    <Text style={{borderBottomColor:'#808080', borderBottomWidth:0.5,marginBottom:10}}></Text>
    </View>
    <Text style={{fontSize:15, fontWeight:'bold',color:'orange', textAlign:'center', marginBottom:20,marginTop:10}}>LogOut</Text>
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