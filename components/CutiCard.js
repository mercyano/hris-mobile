import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';

function CutiCard({ icon, title, text, screenName, onPress }) {
  const navigation = useNavigation();

  // function pressHandler() {
  //   // TODO: redirect to screen

  // }

  return (
    <Pressable
      android_ripple={{ color: '#ccc' }}
      style={({ pressed }) => [
        styles.button,
        pressed ? styles.buttonPressed : null,
      ]}
      onPress={onPress.bind(screenName)}
    >
      <View style={styles.card}>
        <MaterialIcons
          name={icon}
          size={40}
          color={Colors.white}
          style={styles.icon}
        />
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardText}>Klik disini untuk {text}</Text>
      </View>
    </Pressable>
  );
}

export default CutiCard;

const styles = StyleSheet.create({
  card: {
    width: 155,
    height: 160,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.success,
  },
  button: {
    marginBottom: 20,
  },
  icon: {
    marginBottom: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.white,
    marginBottom: 10,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  cardText: {
    fontSize: 13,
    color: Colors.white,
  },
});
