import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import CutiList from '../components/CutiList';

function HistoryRequest({ route }) {
  const [loadedCutiTahunan, setLoadedCutiTahunan] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (route.params) {
      setLoadedCutiTahunan((curPlaces) => [
        ...curPlaces,
        route.params.cutiTahunanData,
      ]);
    }
  }, [route]);

  console.log(loadedCutiTahunan);

  return (
    <View>
      <CutiList cutiTahunanData={loadedCutiTahunan} />
    </View>
  );
}

export default HistoryRequest;
