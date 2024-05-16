import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import PesquisaProduto from "./src/screens/PesquisaProduto";
import EditarProduto from "./src/screens/EditarProduto";

const Stack = createStackNavigator();

function App(): React.JSX.Element{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='Profile' component={Profile} options={{headerShown: false}}/>
        <Stack.Screen name='EditarProduto' component={EditarProduto} options={{headerShown: false}}/>
        <Stack.Screen name='PesquisaProduto' component={PesquisaProduto} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;