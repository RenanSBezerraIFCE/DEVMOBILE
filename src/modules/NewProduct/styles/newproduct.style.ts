import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    container: {
        flex: 1
    },
    contain: {
        padding:10
    },
    Shop: {
        padding: 10
    },
    NavBar: {
        justifyContent: 'space-between',
        flexDirection: "row",
        backgroundColor: '#5244cf',
        height: 65,
        padding: 10
    },
    title: {
        fontWeight : "bold",
        fontSize: 28,
        color: "#363636",
        marginBottom: 5,
        textAlign: "center"
    },
    NameProduct: {
        fontSize: 28,
        color: "#363636",
        marginBottom: 5
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
        color: '#B8860B'       
    },
    ImageProduct: {
        width: 350,
        height: 350,
        marginBottom: 5,
        borderRadius: 5,
        marginLeft: 10,
        display: 'flex',
        marginTop: 30
    },
    ImagesMini: {
        marginTop: '-21%',
        marginLeft: '20%',
        flexDirection: "row",
    },
    Avaliation: {
        width: 30,
        height: 30
    }
    ,
    Icon: {
        height: 50,
        width: 50,
        margin: 6
    },
    Icon2: {
        height: 50,
        width: 50,
        margin: 6
    },
    IconAdd: {
        height: 30,
        width: 30,
        margin: 15,
    },
    optProduct: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: '20%',
    },
    AddCart:{
        fontSize: 20,
        fontWeight: 'bold',
        color: "#191970",
        marginBottom: 20,
        marginTop:5
    },
    Product:{
        borderBottomColor:'#191970',
        borderBottomWidth:4,
        marginBottom:10
    },
    cadastre: {
        backgroundColor: "#5244cf",
        padding: 10,
        color: 'white',
        width: 200,
        fontWeight: 'bold',
        textAlign:"center",
        marginLeft: 80
    }
})