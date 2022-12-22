import * as React from 'react';
import {  Text, StyleSheet, ScrollView,View } from 'react-native';
import {Card,Title ,Paragraph } from 'react-native-paper';

export default function HomeScreen({navigation}){
 return ( <ScrollView contentContainerStyle={Styles.contentContainer}>
    <Text style={Styles.text} 
    >
    Mentors
    </Text>
    <Card style={Styles.container}>
        <Card.Content>
            <Title>Shivankar Mehta</Title>
        </Card.Content>
        <Card.Cover source={{ uri: '###' }} />
       <Card.Content>
        <Paragraph>A Competitive Programmer</Paragraph>
        </Card.Content>
      </Card>
      <Card style={Styles.container}>
        <Card.Content>
            <Title>Shivankar Mehta</Title>
        </Card.Content>
        <Card.Cover source={{ uri: '###' }} />
       <Card.Content>
        <Paragraph>A Competitive Programmer</Paragraph>
        </Card.Content>
      </Card>
      <Card style={Styles.container}>
        <Card.Content>
            <Title>Shivankar Mehta</Title>
        </Card.Content>
        <Card.Cover source={{ uri: '###' }} />
       <Card.Content>
        <Paragraph>A Competitive Programmer</Paragraph>
        </Card.Content>
      </Card>
      <Card style={Styles.container}>
        <Card.Content>
            <Title>Shivankar Mehta</Title>
        </Card.Content>
        <Card.Cover source={{ uri: '###' }} />
       <Card.Content>
        <Paragraph>A Competitive Programmer</Paragraph>
        </Card.Content>
      </Card>
      <Card style={Styles.container}>
        <Card.Content>
            <Title>Shivankar Mehta</Title>
        </Card.Content>
        <Card.Cover source={{ uri: '###' }} />
       <Card.Content>
        <Paragraph>A Competitive Programmer</Paragraph>
        </Card.Content>
      </Card>
      <Text style={Styles.text} onPress={()=>alert('This is home screen')}
    >
    Sessions
    </Text>
    <Text>Testing With Real Users</Text>
      <View style={Styles.container1}>
        <View style={Styles.RectangleShapeView} >
            <Text style={{fontSize:20, fontWeight:'bold', marginBottom:10, color:'blue'}}>Conduct User Research</Text>
            <Text>Interviewing Users to gather real data for next Project</Text>
        </View>
      </View>
      <View style={Styles.container1}>
        <View style={Styles.RectangleShapeView} >
            <Text style={{fontSize:20, fontWeight:'bold', marginBottom:10, color:'blue'}}>Conduct User Research</Text>
            <Text>Interviewing Users to gather real data for next Project</Text>
        </View>
      </View>
      <View style={Styles.container1}>
        <View style={Styles.RectangleShapeView} >
            <Text style={{fontSize:20, fontWeight:'bold', marginBottom:10, color:'blue'}}>Conduct User Research</Text>
            <Text>Interviewing Users to gather real data for next Project</Text>
        </View>
      </View>
      </ScrollView>);
}

const Styles = StyleSheet.create({
    container :{
        alignContent:'center',
        margin:20,
        marginBottom:20
    },
    text:{
       color:'black',
       fontSize:26, 
       fontWeight:'bold',
       marginTop:10,
       marginBottom:10
    },
    contentContainer: {
        marginHorizontal: 10,
    },
    container1: {
 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        margin:10,
        padding:10
      },
     
      RectangleShapeView: {
     
      marginTop: 20,
      width: 120 * 2,
      height: 120,
      backgroundColor:'#008080',
      padding:10,
      border:2,
      borderColor:'black'
      }
     
})
