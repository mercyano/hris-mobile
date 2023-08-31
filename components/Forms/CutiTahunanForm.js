import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View } from 'react-native';
import { Colors } from '../../constants/colors';
import Button from '../Button';
import DatePicker from '../Inputs/DatePicker';
import Input from '../Inputs/Input';

function CutiTahunanForm() {
  const [inputValues, setInputValues] = useState({
    namaAtasan: '',
    kontak: '',
    keterangan: '',
    tanggalCuti: new Date(),
    tanggalMasuk: new Date(),
  });
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const [show2, setShow2] = useState(false);
  const [date2, setDate2] = useState(new Date());

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

  function showDatePicker2() {
    setShow2(true);
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

  const onChange2 = (event, selectedDate) => {
    const currentDate = selectedDate || date2;
    setShow2(Platform.OS === 'ios');
    setDate2(currentDate);
    // Set date2 in inputValues state
    setInputValues((prevValues) => ({
      ...prevValues,
      tanggalMasuk: currentDate,
    }));
  };

  function requestHandler() {
    console.log(inputValues);
  }

  return (
    <View>
      <DatePicker label="Tanggal Cuti" onPress={showDatePicker} />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          onChange={onChange}
        />
      )}

      <DatePicker label="Tanggal Masuk" onPress={showDatePicker2} />
      {show2 && (
        <DateTimePicker
          testID="dateTimePicker2"
          value={date2}
          mode="date"
          onChange={onChange2}
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
        label="Keterangan"
        textInputConfig={{
          placeholder: 'Alasan',
          placeholderTextColor: Colors.grey300,
          onChangeText: inputChangedHandler.bind(this, 'keterangan'),
          value: inputValues.keterangan,
        }}
      />

      <Input
        label="Atasan"
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

export default CutiTahunanForm;
