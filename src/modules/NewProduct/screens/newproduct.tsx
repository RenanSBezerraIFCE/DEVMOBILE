import { View, Text, ImageBackground, StyleSheet, Image, Touchable, TouchableOpacity, ScrollView, FlatList } from "react-native";
import React, { useEffect } from 'react'
import { style } from "../styles/newproduct.style"
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import Input from "../../../shared/components/input/Input";

const NewProduct = () => {

    const url = 'http://10.0.2.2:5000/Products';

    const [Product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        image: "",
        producer: "",
        width: "",
        height: "",
        diameter: ""
    })

    const setProps = (key: any, e: any) => {
        setProduct({ ...Product, [key]: e });
    }

    const Cadastrar = async () => {
        console.log("deu certo")
        navigation.navigate("Home")
        await axios.post('http://10.0.2.2:5000/Products/', Product)
    }

    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


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
            <Text style={style.title}>Cadastrar novo produto</Text>
            <Input placeholder='Nome do produto' textAlign='center' onChangeText={(e) => setProps("name", e)} />
            <Input placeholder='Preço do produto' textAlign='center' onChangeText={(e) => setProps("price", e)} />
            <Input placeholder='Categoria do produto' textAlign='center' onChangeText={(e) => setProps("category", e)} />
            <Input placeholder='Imagem do produto(URL)' textAlign='center' onChangeText={(e) => setProps("image", e)} />
            <Input placeholder='Largura do produto' textAlign='center' onChangeText={(e) => setProps("width", e)} />
            <Input placeholder='Altura do produto' textAlign='center' onChangeText={(e) => setProps("height", e)} />
            <Input placeholder='Diâmetro do produto' textAlign='center' onChangeText={(e) => setProps("diameter", e)} />
            <Input placeholder='Produtor do produto' textAlign='center' onChangeText={(e) => setProps("producer", e)} />

            <TouchableOpacity onPress={() => Cadastrar()}>
                <Text style={style.cadastre}>CADASTRAR USUÁRIO</Text>
            </TouchableOpacity>
        </View>




    </View>)
}

export default NewProduct;