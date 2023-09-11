import {useState} from 'react';
import {
  Alert,
  Button,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import CountryModal from './CountryModal';

const CountryCard = ({country}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <Pressable style={styles.card} onPress={() => toggleModal()}>
      <CountryModal
        population={country?.item?.population}
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />
      <View style={styles.imageView}>
        <ImageBackground
          source={{uri: country?.item?.flags?.png}}
          resizeMode="contain"
          style={styles.backgroundImageCountry}
        />
      </View>
      <View style={styles.countryContent}>
        <View>
          <Text style={styles.countryName}>{country?.item?.name?.common}</Text>
        </View>
        <View>
          <Text style={styles.capital}>{country?.item?.capital}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: 'white',
  },
  imageView: {
    flex: 0.3,
  },
  backgroundImageCountry: {
    flex: 1,
  },
  countryContent: {
    flex: 0.7,
    marginLeft: 10,
  },
  countryName: {
    fontSize: 25,
  },
  capital: {
    fontSize: 18,
  },
});

export default CountryCard;
