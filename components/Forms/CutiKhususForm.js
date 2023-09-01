import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View } from 'react-native';
import { Colors } from '../../constants/colors';
import Button from '../Button';
import DatePicker from '../Inputs/DatePicker';
import Input from '../Inputs/Input';

function CutiKhususForm({ requestCutiHandler }) {
  const [inputValues, setInputValues] = useState({
    namaAtasan: '',
    kontak: '',
    tanggalCuti: new Date(),
    jenisCutiKhusus: '',
  });
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

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

  function showDatePicker() {
    setShow(true);
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    // Set date in inputValues state
    setInputValues((prevValues) => ({
      ...prevValues,
      tanggalCuti: currentDate,
    }));
  };

  function requestHandler() {
    console.log(inputValues);
    requestCutiHandler();
  }

  return (
    <View>
      <Input
        label="Jenis Cuti Khusus"
        textInputConfig={{
          placeholder: 'Tulis jenis cuti khusus',
          placeholderTextColor: Colors.grey300,
          onChangeText: inputChangedHandler.bind(this, 'jenisCutiKhusus'),
          value: inputValues.jenisCutiKhusus,
        }}
      />
      <DatePicker label="Tanggal Cuti" onPress={showDatePicker} />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          onChange={onChange}
        />
      )}

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
        label="Pilih Approval Atasan"
        textInputConfig={{
          placeholder: 'Tulis nama atasan',
          placeholderTextColor: Colors.grey300,
          onChangeText: inputChangedHandler.bind(this, 'namaAtasan'),
          value: inputValues.namaAtasan,
        }}
      />

      <Button onPress={requestHandler}>Request</Button>
      <Button onPress={cancelHandler} mode="cancel">
        Cancel
      </Button>
    </View>
  );
}

export default CutiKhususForm;
