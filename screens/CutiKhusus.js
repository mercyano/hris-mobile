import { StyleSheet, View } from 'react-native';
import Jumbotron from '../components/Jumbotron';

function CutiKhusus() {
  return (
    <View style={styles.container}>
      <Jumbotron />
    </View>
  );
}
export default CutiKhusus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
});
