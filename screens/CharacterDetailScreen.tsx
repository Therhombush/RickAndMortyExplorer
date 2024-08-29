import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type CharacterDetailScreenRouteProp = RouteProp<RootStackParamList, 'CharacterDetail'>;

type Props = {
  route: CharacterDetailScreenRouteProp;
};

const CharacterDetailScreen: React.FC<Props> = ({ route }) => {
  const { character } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.text}>Status: {character.status}</Text>
      <Text style={styles.text}>Species: {character.species}</Text>
      <Text style={styles.text}>Gender: {character.gender}</Text>
      <Text style={styles.text}>Origin: {character.origin.name}</Text>
      <Text style={styles.text}>Episodes:</Text>
      {character.episode.map((ep: string, index: number) => (
        <Text key={index} style={styles.text}>{ep}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e762d7ff',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#ffffff', // White color for the name
  },
  text: {
    fontSize: 16,
    color: '#ffffff', // White color for all other text
  },
});

export default CharacterDetailScreen;
