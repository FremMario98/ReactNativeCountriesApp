import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonBox from './SkeletonBox';

const SkeletonCard = ({children, props}) => {
  return (
    <View style={styles.viewRow}>
      <View style={styles.imageBox}>
        <SkeletonBox customProperties={{flex: 1}} />
      </View>
      <View style={styles.contentBox}>
        <SkeletonBox customProperties={{flex: 1}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewRow: {
    flexDirection: 'row',
    height: 80,
    marginVertical: 10,
  },
  imageBox: {
    flex: 0.3,
    marginHorizontal: 10,
    flexDirection: 'column',
  },
  contentBox: {
    flex: 0.7,
    marginHorizontal: 10,
    flexDirection: 'column',
  },
});

export default SkeletonCard;
