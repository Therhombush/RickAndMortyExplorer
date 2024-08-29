import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

type CharacterCardProps = {
  character: {
    name: string;
    image: string;
    species: string;
  };
  onPress: () => void;
};

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.species}>{character.species}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginVertical: 8,
    padding: 10,
    backgroundColor: '#69c8ecff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  info: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  species: {
    color: '#ffffff',
  },
});

export default CharacterCard;
