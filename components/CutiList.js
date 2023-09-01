import { FlatList, StyleSheet, Text } from 'react-native';

function CutiList({ cutiTahunanData }) {
  <FlatList
    data={cutiTahunanData}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <Text style={styles.text}>{item.namaAtasan}</Text>
    )}
  />;
}

export default CutiList;

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});
