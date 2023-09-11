import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import CountryCard from './CountryCard';

const Countries = ({
  countries = [],
  getAllCountries = null,
  refreshing = false,
}) => {
  return (
    <View style={styles.countriesView}>
      <FlatList
        data={countries}
        renderItem={(country, index) => (
          <CountryCard country={country} key={index} />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => getAllCountries}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  countriesView: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

export default Countries;
