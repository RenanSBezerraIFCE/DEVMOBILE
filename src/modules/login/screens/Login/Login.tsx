/* eslint-disable prettier/prettier */
import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Image, Alert, ImageBackground } from 'react-native';
import { ContainerPlugin } from '../../styles/login.style';
import Input from '../../../../shared/components/input/Input';
import Butomn from '../../../../shared/components/butomn/butomn';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const Login = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    const getUser = () => {
        axios.get('http://10.0.2.2:5000/Users').then(function (response) {
            console.log(response.data);
        })
            .catch(function (error) {
                console.log(error);
            });
    }


    //<Butomn onpress={() => navigation.navigate("Home",email)}/>

    return (
        <View>
            <ContainerPlugin>
                <Image source={require("../../../../assets/shop.png")} style={style.logo} />
                <Input placeholder='E-mail ou Login' textAlign='center' onChangeText={setEmail} />
                <Input placeholder="Senha" textAlign='center' onChangeText={setSenha} />
                <Butomn onpress={() => navigation.navigate("Home", email)} />
            </ContainerPlugin>
        </View>
    );
};

export default Login;

const style = StyleSheet.create({
    log: {
        width: 380,
        height: 50,
        textAlign: 'center',
        fontSize: 20,
        borderRadius: 3,
        fontWeight: 'bold'

    },
    logo: {
        width: 300,
        height: 100,
        marginLeft: 10,
        marginBottom: 50,
        marginTop: -150,
        borderRadius: 15
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center'
    }
})