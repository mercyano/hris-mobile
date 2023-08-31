import { StyleSheet, View } from 'react-native';
import Jumbotron from '../components/Jumbotron';
function CutiTahunan() {
  return (
    <View style={styles.container}>
      <Jumbotron></Jumbotron>
    </View>
  );
}
export default CutiTahunan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
});
