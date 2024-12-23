import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';


const AddScreen = ({ route }) => {
    const [notes, setNotes] = useState([]);

    const navigation = useNavigation();
    console.log('route', route);

    const [newTitle, setNewTitle] = useState('');
    console.log('title', newTitle);
    console.log('description', newDescribe);

    const [newDescribe, setNewDescribe] = useState('');

    // saved the data for decription using AsyncStorage.. temporary storage

    const done = async () => {
        try {
            await AsyncStorage.setItem('title', newTitle) //setting/ saving the title too
            await AsyncStorage.setItem('description', newDescribe);
            navigation.navigate('Main', { newTitle, newDescribe });
            if (newTitle || newDescribe === "") {

                console.warn("All Input Fields Cannot must be filled")
            }
            else {
                const newTodo = {
                    id: Math.random(),
                    title: newTitle,
                    // day: newDate,
                    description: newDescribe,
                    isChecked: false,
                };
                setNotes([...notes, newTodo]);
                setNewTitle(''),
                    setNewDescribe('');
            }

        }
        catch (error) {
            console.log('Error', error);
        };
    };

    // const saved = async () => {
    //     try {
    //         const get = await AsyncStorage.getItem('description');
    //         console.log('the description is', get);

    //         if (saved !== null) {
    //             setSavedDescribe();
    //         }
    //     }
    //     catch (error) {
    //         console.log('the is is an error', error);
    //     }

    // };







    return (
        <View style={styles.page}>
            {/*Top heading*/}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Main', { newTitle })} style={{ width: 39, height: 39, borderWidth: 1, borderColor: '#B3B7C2', alignItems: 'center', justifyContent: 'center', borderRadius: 9 }}>
                        <Image source={require('../../assets/icons/icons8-back-24.png')} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => done()}>
                    <Image source={require('../../assets/icons/icons8-done-100.png')} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>
            </View>


            {/*Body*/}

            <View>
                <View style={{ marginTop: 20, }} >
                    <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold' }}>Title</Text>
                </View>
                <View style={[styles.container, { marginTop: 19, marginBottom: 9, height: 50 }]}>
                    <TextInput placeholder='Enter Title' style={{ marginLeft: 10 }}
                        multiline={true} placeholderTextColor={'grey'} value={newTitle}
                        onChangeText={(kk) => setNewTitle(kk)} />
                </View>
                <View style={{ marginTop: 20, marginBottom: 9 }}>
                    <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold' }}>Description</Text>
                </View>
                <View style={styles.container}>
                    <TextInput placeholder='Enter Description' style={{ marginLeft: 10 }}
                        multiline={true} placeholderTextColor={'grey'} value={newDescribe}
                        onChangeText={(tt) => setNewDescribe(tt)} />
                </View>


            </View>
        </View>
    );
};

export default AddScreen;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        paddingTop: 20,
        padding: 20,
        paddingHorizontal: 20,
    },
    container: {
        borderRadius: 10,
        marginTop: 9,
        height: 400,
        borderWidth: 1,
    },
})