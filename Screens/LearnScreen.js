import * as React from 'react';
import { View, Text } from 'react-native';

export default function LearnScreen({navigation}){
 return (<View style={{flex:1, alignItems:'center', justifyContent:'center' }}>
    <Text onPress={()=>navigation.navigate('Settings')}
    style={{fontSize:26, fontWeight:'bold'}}
    >Learn Screen</Text>
</View>);
}