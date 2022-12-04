import {
  View,
  Text,
  SafeAreaView,
  SectionList,
  StyleSheet,
} from 'react-native';
import React from 'react';

const sections = [
  {
    id: '0',
    title: 'Basic Components',
    data: [
      { id: '0', text: 'View' },
      { id: '1', text: 'Text' },
      { id: '2', text: 'Image' },
      { id: '0', text: 'View' },
      { id: '1', text: 'Text' },
      { id: '2', text: 'Image' },
      { id: '0', text: 'View' },
      { id: '1', text: 'Text' },
      { id: '2', text: 'Image' },
    ],
  },
  {
    id: '1',
    title: 'List Components',
    data: [
      { id: '3', text: 'ScrollView' },
      { id: '4', text: 'ListView' },
      { id: '3', text: 'ScrollView' },
      { id: '4', text: 'ListView' },
      { id: '3', text: 'ScrollView' },
      { id: '4', text: 'ListView' },
      { id: '3', text: 'ScrollView' },
      { id: '4', text: 'ListView' },
      { id: '3', text: 'ScrollView' },
      { id: '4', text: 'ListView' },
      { id: '3', text: 'ScrollView' },
      { id: '4', text: 'ListView' },
      { id: '3', text: 'ScrollView' },
      { id: '4', text: 'ListView' },
    ],
  },
  {
    id: '2',
    title: 'Advanced Components',
    data: [
      { id: '5', text: 'Pressable' },
      { id: '6', text: 'Animated' },
      { id: '5', text: 'Pressable' },
      { id: '6', text: 'Animated' },
      { id: '5', text: 'Pressable' },
      { id: '6', text: 'Animated' },
      { id: '5', text: 'Pressable' },
      { id: '6', text: 'Animated' },
    ],
  },
];
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SectionList
        sections={sections}
        renderSectionHeader={props => (
          <Text style={styles.headerStyle}>
            {props.section.title + ' title'}
          </Text>
        )}
        renderItem={props => (
          <Text style={styles.rowItemStyle}>{props.item.text}</Text>
        )}
        keyExtractor={prop => prop.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
    color: 'white',
    fontWeight: 'bold',
  },
  rowItemStyle: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
});

export default App;
