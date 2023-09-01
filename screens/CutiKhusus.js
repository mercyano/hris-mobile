import { ScrollView, StyleSheet } from 'react-native';
import CutiKhususForm from '../components/Forms/CutiKhususForm';
import Jumbotron from '../components/Jumbotron';

function CutiKhusus({ navigation }) {
  function requestCutiHandler(cutiTahunanData) {
    navigation.navigate('HistoryRequest', {
      cutiTahunanData: cutiTahunanData,
    });
  }

  return (
    <ScrollView style={styles.container}>
      <Jumbotron />
      <CutiKhususForm requestCutiHandler={requestCutiHandler} />
    </ScrollView>
  );
}
export default CutiKhusus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
});
