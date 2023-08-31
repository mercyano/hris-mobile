import { StyleSheet, View } from 'react-native';
import CutiTahunanForm from '../components/Forms/CutiTahunanForm';
import Jumbotron from '../components/Jumbotron';
function CutiTahunan() {
  return (
    <View style={styles.container}>
      <Jumbotron />
      <CutiTahunanForm />
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
