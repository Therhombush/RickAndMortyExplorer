import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CharacterListScreen from '../screens/CharacterListScreen';
import CharacterDetailScreen from '../screens/CharacterDetailScreen';

export type RootStackParamList = {
  Home: undefined;
  CharacterList: { filter: string };
  CharacterDetail: { character: any };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fafd7cff', // Yellow color for navigation bar
        },
        headerTintColor: '#000000', // Black color for text/icons
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CharacterList" component={CharacterListScreen} />
      <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
