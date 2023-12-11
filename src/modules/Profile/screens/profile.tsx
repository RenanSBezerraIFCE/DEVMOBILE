import { Text, TouchableOpacity, View, StyleSheet, Image, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'
import { useState } from "react";
import { style } from '../styles/profile'


const Profile = (props) => {

    const navigation = useNavigation();
    const [user,setUser] = useState(props.route.params)


    return (
<View>
            <View style={style.NavBar}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Icon name="arrow-left" size={40} color="white" style={style.Icon} />
                </TouchableOpacity>
            </View>

            <View style={style.Profile}>
                <Image style={style.ImgUser} source={require('../../../assets/man.png')}/>
                <Text style={style.TextUser}>{'\n'}Nome do usuário: {user}</Text>
                <Text style={style.TextUser}>{'\n'}E-mail: renan@gmail.com</Text>
                <Text style={style.TextUser}>{'\n'}Disciplina: Dev Mobile</Text>
            </View>

        </View>
    )
}

export default Profile;