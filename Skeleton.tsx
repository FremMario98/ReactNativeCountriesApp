import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import SkeletonBox from './SkeletonBox';
import SkeletonCard from './SkeletonCard';

const ROWS = [1, 2, 3, 4, 5];
const Skeleton = ({children = null, props = null}) => {
  return (
    <View style={styles.container}>
      {/* <FlatList data={ROWS} renderItem={item => <SkeletonCard />} /> */}
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Skeleton;
