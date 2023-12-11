import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    NavBar: {
        justifyContent: 'space-between',
        flexDirection: "row",
        backgroundColor: '#191970',
        height: 65,
        padding: 10
    },
    ProductsCart: {
        margin: 15
    },
    Product: {
        flexDirection: "row",
        marginBottom: 20,
        backgroundColor: "#D3D3D3",
        padding: 5,
        borderRadius: 5
    },
    TitleProduct: {
        color: "#191970",
        fontSize: 18,
        fontWeight: 'bold',
        width: 200,
        marginLeft: 10
    },
    ImageProduct: {
        width: 80,
        height: 80,
        marginBottom: 5,
        borderRadius: 50,
        display: 'flex'
    },
    QTDEProduct: {
        fontSize: 22,
        fontWeight: 'bold',
        color: "#191970",
        margin: 5,
        marginTop: 40
    },
    add: {
        marginLeft: 5,
        marginTop: 45
    },
    PriceCart: {
        color: '#B8860B',
    },
    Total:{
        backgroundColor:'#191970',
        width:380,
        height:70,
        padding:20,
        borderRadius:5
    },
    TotalProce:{
        fontSize:22,
        color: 'white',
    }

})