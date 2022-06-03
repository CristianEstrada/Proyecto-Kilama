import React from "react";
import { t } from 'react-native-tailwindcss';
import styled from 'styled-components/native';

import StackNavigator from "./StackNavigator";
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  return (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
  );
};
