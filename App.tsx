import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Skeleton from './Components/Skeleton';
import Countries from './Components/Countries';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  // const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => getAllCountries(), []);

  const getAllCountries = () => {
    setRefreshing(true);
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        setRefreshing(false);
        setCountries(data);
      });
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.mainContainer}>
        {refreshing ? (
          <Skeleton />
        ) : (
          <Countries
            countries={countries}
            getAllCountries={getAllCountries}
            refreshing={refreshing}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    // flex: 1,
  },
});

export default App;
