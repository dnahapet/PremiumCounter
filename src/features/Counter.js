import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [isPremium, setIsPremium] = React.useState(false);

  useEffect(() => {
    setIsPremium(count % 3 ? false : true);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.premiumText}>{isPremium ? 'Premium' : ''} </Text>
      <Text style={styles.countText}>{count}</Text>
      <Button title="Count" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  premiumText: {
    color: colors.premiumGreen,
    fontSize: fontSizes.xl,
    fontWeight: 'bold',
  },
  countText: {
    fontSize: fontSizes.xxl,
  },
});
