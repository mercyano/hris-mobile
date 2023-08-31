import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../../constants/colors';

function Input({ label, textInputConfig }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginVertical: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  label: {
    color: Colors.grey500,
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 4,
  },
  input: {},
});
