import { Text, TouchableOpacity, View, StyleSheet, Image, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from "react";
import { style } from '../styles/profile'
import axios from "axios";


const Profile = () => {
    const [user,setUser] = useState<{}>({})


    useEffect(() => {
        axios.get('http://10.0.2.2:5000/Users').then(function (response) {
            setUser(response.data.Users[0])
        })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const navigation = useNavigation();


    return (
<View>
            <View style={style.NavBar}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Icon name="arrow-left" size={40} color="white" style={style.Icon} />
                </TouchableOpacity>
            </View>

            <View style={style.Profile}>
                <Image style={style.ImgUser} source={require('../../../assets/man.png')}/>
                <Text style={style.TextUser}>{'\n'}Nome do usuário: {user.name}</Text>
                <Text style={style.TextUser}>{'\n'}E-mail: {user.email}</Text>
                <Text style={style.TextUser}>{'\n'}Senha: {user.password}</Text>

                <Text style={style.TextUser}>{'\n'}Disciplina: Dev Mobile</Text>
            </View>

        </View>
    )
}

export default Profile;