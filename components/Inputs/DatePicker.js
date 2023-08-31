import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/colors';

function DatePicker({ label, onPress }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>

      <View>
        <Pressable
          onPress={onPress}
          style={({ pressed }) => pressed && styles.pressed}
        >
          <View>
            <Text>Pilih tanggal</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

export default DatePicker;

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginVertical: 10,
    backgroundColor: Colors.white,
    borderRadius: 12,
  },
  label: {
    color: Colors.grey500,
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 4,
  },
  pressed: {
    opacity: 0.75,
  },
});
