import React, { useEffect } from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, Touchable, TouchableOpacity, ScrollView, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import { style } from '../../styles/home.style'

const Home = (props) => {

    const [user, setUser] = useState(props.route.params)
    const navigation = useNavigation();

    const [index, setIndex] = useState<{}>({})

    useEffect(() => {
        axios.get('http://10.0.2.2:5000/Products').then(function (response) {
            setIndex(response.data.Products)
        })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    return (
        <View style={style.container}>

            <View style={style.NavBar}>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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

            <ScrollView>
                <View style={style.Shop}>
                    <View>
                        <FlatList data={index} renderItem={({ item }) =>

                            <View>
                                <Image style={style.ImageProduct} source={{ uri: item.image }} />

                                <Text style={style.Categoria}>{item.name} </Text>
                                <Text style={style.Categoria}>{item.category} </Text>
                                <Text style={style.NameProduct}>R$ {item.price}.00</Text>
                                <Text style={style.Product}></Text>
                            </View>
                        } />
                    </View>
                </View>
            </ScrollView>
        </View >
    )
}

export default Home;
