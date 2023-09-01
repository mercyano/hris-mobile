import { ScrollView, StyleSheet } from 'react-native';
import CutiTahunanForm from '../components/Forms/CutiTahunanForm';
import Jumbotron from '../components/Jumbotron';

function CutiTahunan({ navigation }) {
  function requestCutiHandler(cutiTahunanData) {
    navigation.navigate('HistoryRequest', {
      cutiTahunanData: cutiTahunanData,
    });
  }

  return (
    <ScrollView style={styles.container}>
      <Jumbotron />
      <CutiTahunanForm requestCutiHandler={requestCutiHandler} />
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
