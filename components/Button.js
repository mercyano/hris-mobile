import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';

function Button({ children, onPress, mode }) {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === 'cancel' && styles.cancel]}>
          <Text
            style={[styles.buttonText, mode === 'cancel' && styles.cancelText]}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: Colors.success,
    marginVertical: 10,
  },
  cancel: {
    backgroundColor: Colors.cancel,
  },
  cancelText: {
    color: Colors.danger,
  },
  buttonText: {
    color: 'white',
  },
  pressed: {
    opacity: 0.75,
  },
});
