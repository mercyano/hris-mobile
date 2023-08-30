import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Colors } from './constants/colors';
import CutiKhusus from './screens/CutiKhusus';
import CutiOnline from './screens/CutiOnline';
import CutiTahunan from './screens/CutiTahunan';
import HistoryRequest from './screens/HistoryRequest';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.white },
            headerTintColor: Colors.black,
            contentStyle: { backgroundColor: Colors.white },
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen
            name="CutiOnline"
            component={CutiOnline}
            options={{
              title: 'Cuti Online',
            }}
          />
          <Stack.Screen
            name="CutiTahunan"
            component={CutiTahunan}
            options={{
              title: 'Request Cuti Tahunan',
            }}
          />
          <Stack.Screen
            name="CutiKhusus"
            component={CutiKhusus}
            options={{
              title: 'Request Cuti Khusus',
            }}
          />
          <Stack.Screen
            name="HistoryRequest"
            component={HistoryRequest}
            options={{
              title: 'History Request',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
