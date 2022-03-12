import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home/Home';
import {NavigationContainer} from '@react-navigation/native';
import CONSTANTS from '../Constants/Constants';
import {COLORS} from '../Constants';
const defaultNavOptions = {
  headerTitleAlign: 'center',

  headerStyle: {
    backgroundColor: COLORS.PRIMARY,
  },
  headerTintColor: COLORS.WHITE,

  // headerTitleStyle: {
  //   fontFamily: FONTS.FONT_POPPINS.SEMIBOLD,
  // },
  // headerBackTitleStyle: {
  //   fontFamily: FONTS.FONT_POPPINS.REGULAR,
  // },
};
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultNavOptions}>
        <Stack.Screen name={CONSTANTS.SCREENS.HOME} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
