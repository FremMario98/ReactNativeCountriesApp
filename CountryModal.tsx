import {Pressable, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';

const CountryModal = ({
  population = 0,
  isModalVisible = false,
  toggleModal = () => {},
}) => {
  return (
    <Modal isVisible={isModalVisible}>
      <View style={styles.mainModalView}>
        <Text style={styles.modalTitleText}>Poppulation: {population}</Text>
        <Pressable style={styles.CloseButton} onPress={toggleModal}>
          <Text style={styles.CloseText}>Close</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainModalView: {
    flex: 0.5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  modalTitleText: {
    fontSize: 30,
  },
  CloseButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#007bff',
    border: 1,
    borderRadius: 50,
  },
  CloseText: {
    fontSize: 20,
    color: 'white',
  },
});

export default CountryModal;
