/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Image, Alert, ImageBackground } from 'react-native';
import { ContainerPlugin } from '../../styles/login.style';
import Input from '../../../../shared/components/input/Input';
import Butomn from '../../../../shared/components/butomn/butomn';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const Login = () => {

    const [index, setIndex] = useState<{}>({})

    const [login, setLogin] = useState<{}>({})
    const [senha, setSenha] = useState<{}>({})

    useEffect(() => {
        axios.get('http://10.0.2.2:5000/Users').then(function (response) {
            setIndex(response.data.Users)
        })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const VerifyUser = async () => {

        if (index[0].name === login && index[0].password === senha) {
            navigation.navigate("Home")
        }

        if (index[0].name === login && index[0].password != senha) {
            alert("Senha incorreta")
        }

        if (index[0].name != login && index[0].password === senha) {
            alert("Login incorreto")
        }

        if (index[0].name != login && index[0].password != senha){
            alert("Login e senha incorretos")

        }
    }

    const navigation = useNavigation();

    return (
        <View>
            <ContainerPlugin>
                <Image source={require("../../../../assets/shop.png")} style={style.logo} />
                <Input placeholder='Login' textAlign='center' onChangeText={setLogin} />
                <Input placeholder="Senha" textAlign='center' onChangeText={setSenha} />
                <Butomn onpress={() => VerifyUser()} />

                <Text>senha e login são admin</Text>
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