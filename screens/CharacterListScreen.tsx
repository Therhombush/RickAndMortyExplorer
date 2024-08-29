import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type CharacterListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CharacterList'
>;

type Props = {
  navigation: CharacterListScreenNavigationProp;
  route: {
    params: {
      filter: string;
    };
  };
};

const CharacterListScreen: React.FC<Props> = ({ route, navigation }) => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { filter } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/?status=${filter}`
        );
        setCharacters(response.data.results);
        setError(null); // Reset error state
      } catch (error: any) {
        if (error.response) {
          // Server responded with a status other than 2xx
          console.error("Server responded with an error:", error.response.status, error.response.data);
          setError(`Error: ${error.response.status} - ${error.response.data.error}`);
        } else if (error.request) {
          // Request was made but no response was received
          console.error("No response received:", error.request);
          setError("No response received from server.");
        } else {
          // Something went wrong in setting up the request
          console.error("Error in setting up request:", error.message);
          setError("Error in request setup.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filter]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        renderItem={({ item }) => (
          <CharacterCard
            character={item}
            onPress={() => navigation.navigate('CharacterDetail', { character: item })}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e762d7ff',
    padding: 10,
  },
  errorText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CharacterListScreen;
