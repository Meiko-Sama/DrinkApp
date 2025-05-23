import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';

import { styles } from './src/assets/styles/styles';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function App() {
  return (

    // BACKGROUND DO APP

    <View style={styles.container}>
      <ImageBackground source={require("./src/assets/img/HqCola.jpg")} style={{
        width: "100%", height: "80%", resizeMode: "cover",
      }} >

        {/* BOTAO DE VOLTAR NO MENU PRINCIPAL */}

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

      {/* DIV QUE ENGLOBA O NOME DO PRODUTO E UM COMENTARIOZINHO ABAIXO */}

      <View style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "50%",
        backgroundColor: "white",
        borderTopRightRadius: 50,
      }}>


        <Text style={{ bottom: 5, color: "black", fontSize: 30, }}>COCA COLA 300ml</Text>
        <Text style={{ color: "gray", fontStyle: "italic" }}>EDIÇÃO LIMITADA VINGADORES</Text>

        {/* BOTAO DE ADIOCINAR OU DIMINUIR PRODUTOS */}

        <View style={{
          position: "absolute",
          right: 40,
          top: -40,
          backgroundColor: "gray",
          width: 50,
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
          borderRadius: 25,
          gap: 10,
        }}>

          <TouchableOpacity style={{
            width: 20,
            height: 20,
            backgroundColor: "gray",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}>

            <Text style={{ color: "black" }}> + </Text>

          </TouchableOpacity>

          <View style={{ backgroundColor: "#c21313", height: 30, width: 30, borderRadius: 30, justifyContent: "center", alignItems: "center" }}>
            <Text style={{
              color: "black",
            }}> 2 </Text>
          </View>
          <TouchableOpacity style={{
            width: 20,
            height: 20,
            backgroundColor: "gray",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Text style={{ color: "black" }}> - </Text>
          </TouchableOpacity>
        </View>

        {/* CATEGORIAS DO PRODUTO */}

        <View style={{ width: "100%", marginTop: 10, gap: 20, flexDirection: "row" }}>
          <View style={{
            padding: 10,
            borderWidth: 1,
            borderColor: "#c21313",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Text style={{ color: "#c21313" }}>0,0001%</Text>
            <Text style={{ color: "#c21313" }}>Bondoso</Text>
          </View>

          <View style={{
            padding: 10,
            borderWidth: 1,
            borderColor: "#c21313",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Text style={{ color: "#c21313" }}>99,9999%</Text>
            <Text style={{ color: "#c21313" }}>Louco</Text>
          </View>

          <View style={{
            padding: 10,
            borderWidth: 1,
            borderColor: "#c21313",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Text style={{ color: "#c21313" }}>ꝏ</Text>
            <Text style={{ color: "#c21313" }}>Foda</Text>
          </View>
        </View>

        {/* PREÇO DO PRODUTO UNICO E A QUANTIDADE QUE ESTA NO BOTAO DE AUMENTAR E DIMINUIR O PRODUTO */}

        <View style={{ width: "100%", gap: 20, flexDirection: "row", marginTop: 20, justifyContent: "center" }}>
          <View style={{ width: "40%", backgroundColor: "#c21313", padding: 15, borderRadius: 10 }}>
            <Text style={{ color: "white" }}>R$3,90 a unidade</Text>
          </View>

          <View style={{ width: "40%", backgroundColor: "#c21313", padding: 15, borderRadius: 10 }}>
            <Text style={{ color: "white" }}>R$7,80 reais <Text style={{ color: "white" }}>2 unidades</Text> </Text>
          </View>
        </View>

        {/* BOTAO NA QUAL FALA O TOTAL! */}

        <View style={{ flex: 1, backgroundColor: "gray", padding: 30 }}>
          <Text style={{ color: "black", fontSize: 18, marginTop: 20, }}>Total</Text>
        </View>


      </View>
    </View>
  );
}

