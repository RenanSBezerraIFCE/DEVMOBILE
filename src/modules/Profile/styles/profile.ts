import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    NavBar: {
        justifyContent: 'space-between',
        flexDirection: "row",
        backgroundColor: '#191970',
        height: 65,
        padding: 10
    },
    Profile:{
        margin:10
    },
    ImgUser:{
        width:200,
        height:200,
        marginLeft:'25%',
        marginBottom:20,
        borderBottomWidth: 4,
        borderBottomColor: 'red'
    },
    TextUser:{
        fontSize:20,
        fontWeight: 'bold'
    }})