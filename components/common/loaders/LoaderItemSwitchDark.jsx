import React, { useState, useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";

const LoaderItemSwitchDark = () => {
  const [animation1] = useState(new Animated.Value(0));
  const [animation2] = useState(new Animated.Value(0));
  const [animation3] = useState(new Animated.Value(0));

  const animate = (animation) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    animate(animation1);
    setTimeout(() => animate(animation2), 250);
    setTimeout(() => animate(animation3), 500);
  }, []);

  const animationStyle1 = {
    opacity: animation1,
    transform: [
      {
        scale: animation1.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.5],
        }),
      },
    ],
  };

  const animationStyle2 = {
    opacity: animation2,
    transform: [
      {
        scale: animation2.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.5],
        }),
      },
    ],
  };

  const animationStyle3 = {
    opacity: animation3,
    transform: [
      {
        scale: animation3.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.5],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.item, animationStyle1]} />
      <Animated.View style={[styles.item, animationStyle2]} />
      <Animated.View style={[styles.item, animationStyle3]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    width: 10,
    height: 10,
    borderRadius: 6,
    backgroundColor: "#999AF6",
    marginHorizontal: 5,
  },
});

export default LoaderItemSwitchDark;
