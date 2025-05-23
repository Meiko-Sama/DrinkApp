import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground } from 'react-native';

import { styles } from './src/assets/styles/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./src/assets/img/HqCola.jpg")} style={{ height: "100%", width: "100%", resizeMode: "cover" }} ></ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

