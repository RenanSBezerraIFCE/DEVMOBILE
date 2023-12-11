import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../../modules/login/screens/Login/Login';
import Home from '../../modules/Home/screens/Home/Home';
import Cart from '../../modules/Cart/screens/Cart/Cart';
import Product from '../../modules/Home/screens/Home/Product/Product';
import Profile from '../../modules/Profile/screens/profile';
import NewUser from '../../modules/NewUser/screens/newuser';
import NewProduct from '../../modules/NewProduct/screens/newproduct';
const Stk = createNativeStackNavigator();

const Stack = () =>{
    return(
        <Stk.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
            <Stk.Screen name='Login' component={Login}/>
            <Stk.Screen name='Home' component={Home}/>
            <Stk.Screen name='Cart' component={Cart}/>
            <Stk.Screen name='Product' component={Product}/>
            <Stk.Screen name='Profile' component={Profile}/>
            <Stk.Screen name='NewUser' component={NewUser}/>
            <Stk.Screen name='NewProduct' component={NewProduct}/>
        </Stk.Navigator>
    )
}

export default Stack;