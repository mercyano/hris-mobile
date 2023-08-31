import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View } from 'react-native';
import { Colors } from '../../constants/colors';
import Button from '../Button';
import Input from '../Inputs/Input';

function CutiTahunanForm() {
  const [inputValues, setInputValues] = useState({
    kontak: '',
    keterangan: '',
  });

  const navigation = useNavigation();

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function cancelHandler() {
    navigation.goBack();
  }

  return (
    <View>
      <Input
        label="Nomor HP"
        textInputConfig={{
          keyboardType: 'numeric',
          placeholder: '08xxxxxxxxxxx',
          placeholderTextColor: Colors.grey300,
          maxLength: 13,
          onChangeText: inputChangedHandler.bind(this, 'kontak'),
          value: inputValues.kontak,
        }}
      />
      <Input
        label="Keterangan"
        textInputConfig={{
          placeholder: 'Alasan',
          placeholderTextColor: Colors.grey300,
          onChangeText: inputChangedHandler.bind(this, 'keterangan'),
          value: inputValues.keterangan,
        }}
      />
      <Button>Request</Button>
      <Button onPress={cancelHandler} mode="cancel">
        Cancel
      </Button>
    </View>
  );
}

export default CutiTahunanForm;
