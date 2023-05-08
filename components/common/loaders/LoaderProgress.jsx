import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet } from "react-native";
import { widthPercentageToPx } from "../../../utils";

const LoaderProgress = ({
  duration = 2500,
  width = widthPercentageToPx(90),
  height = 4,
  color = "#eee",
  backgroundColor = "#00cd14",
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: duration * 0.25,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: duration * 0.5,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: -1,
        duration: duration * 0.25,
        useNativeDriver: true,
      }),
      // Animated.timing(animatedValue, {
      //   toValue: 0,
      //   duration: duration * 0.0,
      //   useNativeDriver: true,
      // }),
    ]).start(() => animate());
  };

  useEffect(() => {
    animate();
  }, []);

  const translateX = animatedValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [-width, 0, width],
  });

  return (
    <View style={[styles.container, { backgroundColor, width, height }]}>
      <Animated.View
        style={[
          styles.bar,
          {
            width,
            height,
            backgroundColor: color,
            transform: [{ translateX }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderRadius: 10,
  },
  bar: {},
});

export default LoaderProgress;
