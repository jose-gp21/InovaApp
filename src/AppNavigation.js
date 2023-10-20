import React, {useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from "./pages/ProductPages/ProductDetails";
import ProductCardView from "./pages/ProductPages/ProductCardView";
import BottomTabNavigator from "./routes/BottomTabNavigator";
import ProdutosNovos from "./pages/HomePages/ProdutosNovos";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Splash from "./pages/Auth/screens/Splash";
import Signin from "./pages/Auth/screens/Signin";
import Signup from "./pages/Auth/screens/Signup";
import { colors } from "./pages/Auth/utils/colors";
import { GoogleSignin} from '@react-native-google-signin/google-signin';

const Stack = createNativeStackNavigator();

const WEB_CLIENT_ID = '125777671641-8lqmlqj2d2aj96o580fvu5eto88t3nqf.apps.googleusercontent.com'
export default function AppNavigation() {
    const isSignedIn = false;
    useEffect(() => {
        GoogleSignin.configure({
          scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
          webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
          offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
          // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        });
      }, [])
    
      const theme = {
        colors: {
          background: colors.white,
        }
      }

    return (
        <SafeAreaProvider>
                <Stack.Navigator>
                    {isSignedIn ? (
                        <>
                            <Stack.Screen
                                options={{ headerShown: false }}
                                headerMode="none"
                                name="BottomTabBar"
                                component={BottomTabNavigator}
                            />
                            <Stack.Screen
                                options={{ headerShown: false }}
                                headerMode="none"
                                name="ProductCardView"
                                component={ProductCardView}
                            />
                            <Stack.Screen
                                options={{ headerShown: false }}
                                headerMode="none"
                                name="ProductDetails"
                                component={ProductDetails}
                            />
                            <Stack.Screen
                                options={{ headerShown: false }}
                                headerMode="none"
                                name="ProdutosNovos"
                                component={ProdutosNovos}
                            />
                        </>
                    ) : (
                        <>
                            <Stack.Screen
                                name="Splash"
                                component={Splash}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Signin"
                                component={Signin}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Signup"
                                component={Signup}
                                options={{ headerShown: false }}
                            />
                        </>
                    )}
                </Stack.Navigator>
        </SafeAreaProvider>

    )

}