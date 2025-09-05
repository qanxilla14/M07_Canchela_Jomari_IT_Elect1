import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import CounterApp from './CounterApp';
import ColorChangerApp from './ColorChangerApp';

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Counter App</Text>
        <CounterApp />

        <Text style={styles.title}>Color Changer App</Text>
        <ColorChangerApp />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  container: { padding: 20 },
  title: { fontSize: 50, fontWeight: 'bold', marginVertical: 20 }
});