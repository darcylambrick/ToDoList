import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = ({ text, completed }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        {/* Square indicating task status */}
        <View style={[styles.square, completed && styles.squareCompleted]} />
        {/* Task text */}
        <Text style={[styles.itemText, completed && styles.itemTextCompleted]}>
          {text}
        </Text>
      </View>
      {/* Circle */}
      <View style={styles.circlular} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55bcf6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  squareCompleted: {
    backgroundColor: '#4caf50',
    opacity: 1,
  },
  itemText: {
    fontSize: 16,
    color: '#000',
    textAlignVertical: 'center',
  },
  itemTextCompleted: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  circlular: {
    width: 12,
    height: 12,
    borderColor: '#55bcf6',
    borderWidth: 2,
    borderRadius: 6,
  },
});

export default Task;
