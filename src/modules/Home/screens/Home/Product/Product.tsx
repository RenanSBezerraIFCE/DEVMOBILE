import { Text, TouchableOpacity, View, StyleSheet, Image, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from "react";
import axios from "axios";



const Product = (props) => {

    const [index, setIndex] = useState<{}>({})
    const [product, setProduct] = useState<{}>({})
    useEffect(() => {
        axios.get('http://10.0.2.2:5000/Products').then(function (response) {
            setIndex(response.data.Products)
            setProduct(response.data.Products[props.route.params])

        }
        )
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    console.log(product)
    const navigation = useNavigation();
    return (<ScrollView style={{ backgroundColor: '#DCDCDC' }}>

        <View style={style.NavBar}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Icon name="arrow-left" size={40} color="white" style={style.Icon} />
            </TouchableOpacity>
        </View>

        <View>
            <View style={style.product}>
                <Text style={style.titleProduct}>{product.name}</Text>
                <Image style={style.ImageProduct} source={{ uri: product.image }} />
                <Text style={style.Price}>Preço:  R${product.price}</Text>
                <Text style={style.Description}>Tipo de produto: {product.category}</Text>
                <Text style={style.Description}>Largura: {product.width}</Text>
                <Text style={style.Description}>Altura: {product.height}</Text>
                <Text style={style.Description}>Fabricante: {product.producer}</Text>
            </View>
        </View>

    </ScrollView>
    )
}

export default Product;

export const style = StyleSheet.create({
    NavBar: {
        justifyContent: 'space-between',
        flexDirection: "row",
        backgroundColor: '#5244cf',
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
        fontSize: 30,
        color: '#5244cf',
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center'
    },
    ImageProduct: {
        width: 350,
        height: 350,
        marginBottom: 5,
        borderRadius: 5,
        display: 'flex',
        borderColor: '#5244cf',
        borderWidth: 2,
        marginLeft: 10
    },
    Description: {
        fontSize: 18,
        textAlign: 'justify',
    },
    Price: {
        fontSize: 24,
        width: 200,
        color: '#B8860B',
        fontWeight: 'bold',
        marginTop: 10
    },
    Avaliation: {
        width: 30,
        height: 30
    },
})