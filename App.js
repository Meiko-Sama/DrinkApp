import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';

// IMPORTAÇÃO USESTATE variavél que muda a quantidade automaticamente pra gente.
import { useState } from 'react';

// IMPORTAÇÃO STYLES
import { styles } from './src/assets/styles/styles';

// ICONES IMPORTAÇÃO
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

export default function App() {
  const [quant, setQuant] = useState(1);
  const pricePerDrink = 3.90;
  const totalPrice = quant * pricePerDrink;

  const moreProduct = () => {
    setQuant(prevQuant => prevQuant + 1);
    console.log(totalPrice);
  }

  const lessProduct = () => {
    if (quant > 1) {
      setQuant(prevQuant => prevQuant - 1);
    }
  }

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

        {/* DIV QUE ENGLOBA TUDO kk */}

        <View style={{ padding: 30 }}>

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
            padding: 10,
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
              fontWeight: 20,
            }} onPress={moreProduct}>

              <Text style={{ color: "white" }}> + </Text>
            </TouchableOpacity>

            <View style={{
              backgroundColor: "#c21313",
              height: 30,
              width: 30,
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
              fontWeight: 20,
            }}>
              <Text style={{
                color: "white",
              }}> {quant} </Text>
            </View>

            <TouchableOpacity style={{
              width: 20,
              height: 20,
              backgroundColor: "gray",
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 20,
            }} onPress={lessProduct}>
              <Text style={{ color: "white" }}> - </Text>
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
              <Text style={{ color: "#c21313" }}>Infinitamente</Text>
              <Text style={{ color: "#c21313" }}>Foda</Text>
            </View>
          </View>

          {/* PREÇO DO PRODUTO UNICO E A QUANTIDADE QUE ESTA NO BOTAO DE AUMENTAR E DIMINUIR O PRODUTO */}

          <View style={{ width: "100%", gap: 20, flexDirection: "row", marginTop: 20, justifyContent: "center" }}>
            <View style={{ width: "40%", backgroundColor: "#c21313", padding: 15, borderRadius: 10 }}>
              <Text style={{ color: "white" }}>A unidade R$3,90</Text>
            </View>

            <View style={{ width: "40%", backgroundColor: "#c21313", padding: 15, borderRadius: 10 }}>
              <Text style={{ color: "white" }}>{quant} unidade(s) R${totalPrice.toFixed(2)} <Text style={{ color: "white" }}>reais</Text> </Text>
            </View>
          </View>

        </View>

        {/* BOTAO NA QUAL FALA O TOTAL! */}

        <View style={{ flex: 1, backgroundColor: "#c21313", paddingLeft: 30 }}>
          <Text style={{ color: "white", fontSize: 18, marginTop: 20, fontWeight: 30 }}> PEDIDO TOTAL</Text>

          {/* OS ELEMENTOS QUE ENGLOBLA ESSE "CARRINHO" */}

          <View style={{
            width: "60%",
            paddingTop: 20,
            flexDirection: "row",
            gap: 20,
            justifyContent: 'space-evenly',
          }}>

            <View style={{
              alignItems: "center",
              width: 90,
              height: 50,
              justifyContent: "flex-end"
            }}>
              <Entypo name="drink" size={24} color="white" />
              <Text style={{ color: "white", fontSize: 12 }}> TOTAL DO CARRINHO </Text>
            </View>

            {/* PREÇO TOTAL */}

            <View style={{
              alignItems: "center",
              width: 90,
              height: 50,
              justifyContent: "flex-end"
            }}>
              <Text style={{ color: "white", fontSize: 17, }}> R${totalPrice.toFixed(2)} </Text>
              <Text style={{ color: "white" }}> Preço Total </Text>
            </View>

          </View>

          <View style={{
            position: "absolute",
            right: 60,
            top: 20,
            backgroundColor: "gray",
            width: 60,
            height: 110,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderRadius: 25,
            gap: 10
          }}>
            <Entypo name="credit-card" size={24} color="white" />
            <Text style={{ color: "black", fontSize: 9.9 }}>MASTERCARD</Text>
            <Text style={{ color: "white" }}>Pagar</Text>
          </View>

        </View>

      </View>
    </View >
  );
}

