import React, {useEffect, useState} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';

const SkeletonBox = ({children, customProperties}) => {
  const [shimmerValue] = useState(new Animated.Value(0));

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(shimmerValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false, // Important: Set this to false when animating backgroundColor
      }),
    ).start();
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const backgroundColor = shimmerValue.interpolate({
    inputRange: [0, 0.2, 0.5, 0.7, 1],
    outputRange: ['#ddd', '#e6e6e6', '#eeeeee', '#f1f1f1', '#e8e8e8'],
    extrapolateRight: 'clamp',
  });

  return (
    <Animated.View style={[customProperties, {backgroundColor}]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({});

export default SkeletonBox;
