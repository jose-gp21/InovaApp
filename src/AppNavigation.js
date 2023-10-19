import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "./live/HomeAudiencePage";
import HostPage from "./live/HostPage";
import AudiencePage from "./live/AudiencePage";
import ProductDetails from "./pages/ProductPages/ProductDetails";
import ProductCardView from "./pages/ProductPages/ProductCardView";
import BottomTabNavigator from "./routes/BottomTabNavigator";
import ProdutosNovos from "./pages/HomePages/ProdutosNovos";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <Stack.Navigator initialRouteName="BottomTabBar">
            <Stack.Screen options={{headerShown: false}} headerMode="none" name="BottomTabBar" component={BottomTabNavigator} />
            <Stack.Screen options={{headerShown: false}} headerMode="none" name="ProductCardView" component={ProductCardView}/>
            <Stack.Screen options={{headerShown: false}}  headerMode="none" name="ProductDetails" component={ProductDetails} />
            <Stack.Screen options={{headerShown: false}}  headerMode="none" name="ProdutosNovos" component={ProdutosNovos} />
        </Stack.Navigator>
    );
}