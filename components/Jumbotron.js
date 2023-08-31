import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';

function Jumbotron() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Isi form request cuti khusus sesuai kebutuhan ya.
        </Text>
        <Text style={styles.text}>Terimakasih😊</Text>
      </View>
      <View style={styles.imgContent}>
        <Image
          style={styles.img}
          source={require('../assets/images/beach.png')}
        />
      </View>
    </View>
  );
}

export default Jumbotron;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 8,
    backgroundColor: Colors.success,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.white,
    lineHeight: 24,
  },
  text: {
    fontSize: 13,
    color: Colors.white,
    lineHeight: 24,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  imgContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  img: {
    width: 100,
    height: 100,
  },
});
