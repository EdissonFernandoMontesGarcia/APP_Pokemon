import React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon  from 'react-native-vector-icons/FontAwesome5';
import FavoriteNavigation from './FavoriteNavigation'
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';



const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen
        name='Favorites'
        component={FavoriteNavigation} 
        options={{
          tabBarLabel:'Favorites',
          tabBarIcon:({color, size}) => <Icon name='heart' color ={color} size ={size}/>,
        }}
        />
        <Tab.Screen
         name='Pokedex'
         component={PokedexNavigation}
         options={{
          tabBarLabel: '',
          tabBarIcon: ()=> renderPokeball(),
         }}
          />
        <Tab.Screen
            name='Account'
            component={AccountNavigation}
        options={{
          tabBarLabel:'Mi cuenta',
          tabBarIcon:({color, size})=>(
            <Icon name='user' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball(){
  return ( <Image source={require("../assets/pokeball.png")} 
  style={{ width: 60, height: 60, top: -10 }}
  />
);
}