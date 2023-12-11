import { View, Text, ImageBackground, StyleSheet, Image, Touchable, TouchableOpacity, ScrollView, FlatList } from "react-native";
import React, { useEffect } from 'react'
import { style } from '../styles/newuser'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import Input from "../../../shared/components/input/Input";



const NewUser = () => {
    const [user, setUser] = useState({
        name: "",
        password: "",
        email: ""
    })

    const setProps = (key: any, e: any) => {
        setUser({ ...user, [key]: e });
    }

    const Cadastrar = async () => {
        navigation.navigate("Home")
        await axios.post('http://10.0.2.2:5000/Users', user)
    }


    const navigation = useNavigation();
    return (<View>
        <View style={style.NavBar}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Icon name="arrow-left" size={30} color="white" style={style.Icon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Profile", user)}>
                    <Icon name="user" size={30} color="white" style={style.Icon2} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("NewProduct")}>
                    <Icon name="plus" size={30} color="white" style={style.Icon2} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("NewUser")}>
                    <Icon name="user-plus" size={30} color="white" style={style.Icon2} />
                </TouchableOpacity>
            </View>
        <View style={style.contain}>
            <Text style={style.title}>Cadastrar novo usuário</Text>
            <Input placeholder='Insira o nome do novo usuário' textAlign='center' onChangeText={(e) => setProps("name", e)} />
            <Input placeholder='Insira o e-mail do novo usuário' textAlign='center' onChangeText={(e) => setProps("email", e)} />
            <Input placeholder='Insira a senha do novo usuário' textAlign='center' onChangeText={(e) => setProps("password", e)} />



            <TouchableOpacity onPress={() => Cadastrar()} >
                <Text style={style.cadastre}>CADASTRAR USUÁRIO</Text>
            </TouchableOpacity>
        </View>




    </View>)
}

export default NewUser;