import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen = ({ navigation }) => {

  {/*setting useState */ }

  const [newInput, setNewInput] = useState('');
  console.log('setNewInput', newInput); // showing inputted value

  const [getInput, setGetInput] = useState('');

  // Setting item i.e saving the item/data

  const submit = async () => {
    try {
      await AsyncStorage.setItem('input', newInput)
      navigation.navigate('Main', { newInput })
      console.log('Saved Succesfully')
    }
    catch (error) {
      console.log('Error', error);
    }
  };




  const handleGetInput = async () => {
    try {
      const input = await AsyncStorage.getItem('input'); //retrieved the data inputted
      console.log('the input name is', input);
      if (input !== null) {
        setGetInput(value)
      }
    } catch (error) {
      console.log('this is an error', error);
    }
  }

  return (
    <View style={styles.page}>
      <ScrollView>

        <View style={{ alignItems: 'center', marginTop: 50 }}>
          <Text style={{ fontSize: 17, color: '#2C64D7', fontWeight: '600' }}>Quick<Text style={{ color: '#F24C26', fontWeight: '600', fontSize: 17 }}>Scribe</Text></Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: '#2F344C', fontSize: 13, fontWeight: '400' }}>Welcome to QuickScribe: Where Your Thoughts Find a Home!</Text>
        </View>
        <View style={{ marginTop: 13, alignItems: 'center' }}>
          <Image source={require('../../assets/images/iamge-removebg-preview-removebg-preview.png')} style={{ width: '65%', height: 300 }} />
        </View>
        <View style={{ borderWidth: 1, borderRadius: 10, marginTop: 40, paddingHorizontal: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <TextInput placeholder='Enter your name'
            placeholderTextColor={'#2f344c'}
            value={newInput}
            onChangeText={(kk) => setNewInput(kk)} />
          <TouchableOpacity onPress={() => submit()}>
            <Image source={require('../../assets/icons/icons8-arrow-right-100.png')} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View >
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingTop: 20,
    padding: 20,
    paddingHorizontal: 20,
  },
});