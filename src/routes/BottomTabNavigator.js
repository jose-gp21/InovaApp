import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


import AudienceNavigation from './StackNavigator/LiveAudienceStackNavigator';
import HostNavigation from './StackNavigator/LiveHostStackNavigator';
import Cart from '../pages/botttomTabPages/Cart';
import Profile from '../pages/botttomTabPages/Profile';
import Search from '../pages/botttomTabPages/Search';
import ButtonCreateFocused from '../components/ButtonBottomTab/ButtonCreateFocused';
import ButtonCreateNotFocused from '../components/ButtonBottomTab/ButtonCreateNotFocused';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000',
          height: 80,
          justifyContent: 'center',
          borderTopWidth: 0,
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={['#FF5757', '#8C52FF']} // substitua pelas cores que desejar
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              flex: 1,
              borderTopWidth: 0,
              borderTopColor: 'transparent',
              overflow: 'hidden',
            }}
          >
            <View
              style={{
                position: 'absolute',
                top: 10,
                left: 0,
                right: 0,
                height: 100,
                backgroundColor: 'black',
                borderTopWidth: 0,
                borderTopColor: 'transparent', // Cor de fundo original da tabBar
              }}
            />
          </LinearGradient>
        ),
        tabBarShowLabel: false,
        headerShown: false,
        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: '#fff',
      }}
    >
      <Tab.Screen
        name="Início"
        component={AudienceNavigation}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
              />
              <Text style={{ color: color, fontSize: 10 }}>Início</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Ionicons
                name="search-sharp"
                size={size}
                color={color}
              />
              <Text style={{ color: color, fontSize: 10 }}>Descubra</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Criar"
        component={HostNavigation}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <View style={{ alignItems: 'center' }}>
              {focused ? (
                <ButtonCreateFocused size={60} />
              ) : (
                <ButtonCreateNotFocused size={size} />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Compras"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ alignItems: 'center' }}>
              <SimpleLineIcons
                name="handbag"
                size={size}
                color={color}
              />
              <Text style={{ color: color, fontSize: 10 }}>Compras</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Eu"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                size={size}
                color={color}
              />
              <Text style={{ color: color, fontSize: 10 }}>Eu</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
