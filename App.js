import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Colors } from './constants/colors';
import CutiOnline from './screens/CutiOnline';

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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
