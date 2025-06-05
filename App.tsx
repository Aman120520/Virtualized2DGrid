import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Grid from './src/components/Grid';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Virtualized 2D Data Grid</Text>
      <Grid />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 50,
  },
  title: {
    fontSize: 18,
    color: 'white',
    marginBottom: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
