import { Text, TouchableOpacity, View, StyleSheet, Image, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'
import { useState } from "react";



const Product2 = (props) => {
    const [product, setProduct] = useState(props.route.params)
    console.log(props)
    const navigation = useNavigation();
    return (<ScrollView style={{backgroundColor:'#DCDCDC'}}>

        <View style={style.NavBar}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Icon name="arrow-left" size={40} color="white" style={style.Icon} />
            </TouchableOpacity>
        </View>

        <View>
            <View style={style.product}>
                <Text style={style.titleProduct}>{product.title}</Text>
                <Image style={style.ImageProduct} source={require('../../../../../assets/capinha1.jpeg')} />
                <Image style={style.ImageProduct} source={require('../../../../../assets/capinha2.jpeg')} />
                <Image style={style.ImageProduct} source={require('../../../../../assets/capinha3.jpeg')} />
                <Text style={style.Price}>R${product.price}</Text>
                    <Text style={style.Price}> {product.aval} <Image style={style.Avaliation} source={require('../../../../../assets/star.png')} /></Text>
                    <Text style={style.Description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quo rem, perspiciatis quaerat illum ratione possimus at consequuntur, iste praesentium iure repellendus! Mollitia odit repudiandae est! Impedit laborum alias atque?</Text>
            </View>
        </View>

    </ScrollView>
    )
}

export default Product2;

export const style = StyleSheet.create({
    NavBar: {
        justifyContent: 'space-between',
        flexDirection: "row",
        backgroundColor: '#191970',
        height: 65,
        padding: 10
    },
    Icon: {
        height: 50,
        width: 50,
        margin: 5
    },
    product: {
        margin: 10
    },
    titleProduct: {
        fontSize: 20,
        color: '#191970',
        fontWeight: 'bold',
        margin:10
    },
    ImageProduct: {
        width: 395,
        height: 250,
        marginBottom: 5,
        borderRadius: 5,
        display: 'flex',
        borderColor:'#191970',
        borderWidth: 2
    },
    Description: {
        fontSize: 18,
        textAlign: 'justify',
        marginTop: 15,
        marginBottom:50
    },
    Price: {
        fontSize: 24,
        width: 200,     
        color: '#B8860B'  ,
        fontWeight:'bold',
        marginTop: 10
    },
    Avaliation: {
        width: 30,
        height: 30
    },
})