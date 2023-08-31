import { ScrollView, StyleSheet } from 'react-native';
import CutiTahunanForm from '../components/Forms/CutiTahunanForm';
import Jumbotron from '../components/Jumbotron';

function CutiTahunan() {
  return (
    <ScrollView style={styles.container}>
      <Jumbotron />
      <CutiTahunanForm />
    </ScrollView>
  );
}
export default CutiTahunan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
});
