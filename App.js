import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';

import { styles } from './src/assets/styles/styles';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./src/assets/img/HqCola.jpg")} style={{
        width: "100%", height: "80%", resizeMode: "cover"
      }} >

        <TouchableOpacity style={{
          top: 60,
          left: 30,
          width: 48,
          height: 48,
          borderRadius: 10,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <MaterialCommunityIcons name="arrow-left-bold" size={24} color="black" />
        </TouchableOpacity>

      </ImageBackground>
      <View style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "50%",
        backgroundColor: "white",
        borderTopRightRadius: 50,
        padding: 30
      }}>
        <Text style={{ bottom: 5, color: "black", }}>COCA COLA 300ml</Text>
        <Text style={{ color: "gray", }}>EDIÇÃO LIMITADA VINGADORES</Text>
        <View style={{
          width: 80,
          padding: 10,
          borderWidth: 1,
          borderColor: "red",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          top: 10,
        }}>
          <Text style={{ color: "red" }}>100%</Text>
          <Text style={{ color: "red" }}>Mimimi</Text>
        </View>
      </View>
    </View>
  );
}

