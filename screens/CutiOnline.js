import { StyleSheet, View } from 'react-native';
import CutiCard from '../components/CutiCard';

function CutiOnline({ navigation }) {
  function pressHandler(screenName) {
    navigation.navigate(screenName);
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <CutiCard
          icon="date-range"
          title="Cuti Tahunan"
          text="request cuti tahunan"
          screenName="CutiTahunan"
          onPress={() => pressHandler('CutiTahunan')}
        />
        <CutiCard
          icon="date-range"
          title="Cuti Khusus"
          text="request cuti khusus"
          screenName="CutiKhusus"
          onPress={() => pressHandler('CutiKhusus')}
        />
        <CutiCard
          icon="update"
          title="History Request"
          text="melihat history"
          screenName="HistoryRequest"
          onPress={() => pressHandler('HistoryRequest')}
        />
      </View>
    </View>
  );
}

export default CutiOnline;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
