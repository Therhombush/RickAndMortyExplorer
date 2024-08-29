import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('CharacterList', { filter: 'all' })}
      >
        <Text style={styles.cardText}>All Characters</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('CharacterList', { filter: 'alive' })}
      >
        <Text style={styles.cardText}>Alive Characters</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('CharacterList', { filter: 'dead' })}
      >
        <Text style={styles.cardText}>Dead Characters</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e762d7ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#69c8ecff',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default HomeScreen;
