import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button,TabView } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Tab } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


 
const login = ({ navigation }) => {
  const [index,setIndex]= useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer />
      <Spacer />
      
      <Tab value={index} onChange={setIndex}>
  <Tab.Item title="Register" />
  <Tab.Item title="Login" />
 
</Tab>

 <TabView value={index} onChange={setIndex} >
  <TabView.Item >
   

    
  </TabView.Item>

  <TabView.Item style={{ width: '100%' }}>
  <View style={styles.container2}>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      
        <Button  title="Login" />

     
      </View>
      <View style={styles.container3}> 


      

      <Button icon={
    <Icon
      name="google"
      size={15}
      color="white"
    />} title="Google" />

      <Button  icon={
    <Icon
      name="facebook"
      size={15}
      color="white"
    />}title="Facebook" />
      </View> 
  </TabView.Item>

</TabView>
     
       
      
      </View>
   
  );
};

login.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   
    
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
   
    
  },
  container3: {
    flex: 2,
    flexDirection:'row',
    justifyContent: 'space-evenly',
   
    
  },
  lbl:{
    marginTop:100,
    alignSelf:'flex-start'
    
  }
  // b1:{

  // }
});

export default login;
