import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../../modules/login/screens/Login/Login';
import Home from '../../modules/Home/screens/Home/Home';
import Cart from '../../modules/Cart/screens/Cart/Cart';
import Product1 from '../../modules/Home/screens/Home/Product1/Product1';
import Product2 from '../../modules/Home/screens/Home/Product2/Product2';
import Product3 from '../../modules/Home/screens/Home/Product3/Product3';
import Product4 from '../../modules/Home/screens/Home/Product4/Product4';
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
            <Stk.Screen name='Product1' component={Product1}/>
            <Stk.Screen name='Product2' component={Product2}/>
            <Stk.Screen name='Product3' component={Product3}/>
            <Stk.Screen name='Product4' component={Product4}/>
            <Stk.Screen name='Profile' component={Profile}/>
            <Stk.Screen name='NewUser' component={NewUser}/>
            <Stk.Screen name='NewProduct' component={NewProduct}/>
        </Stk.Navigator>
    )
}

export default Stack;