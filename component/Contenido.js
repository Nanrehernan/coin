import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native"
import { StatusBar } from "expo-status-bar"
import Header from "./Header";
import Coins from "./Coins";
import Contexto from "./Contexto";

const Contenido = ({ navigation, router }) => {
  const navegacion = {
    navigation,
    router
  }
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    getCoins()
  }, [])

  const getCoins = async () => {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    const response = await fetch(url)
    const data = await response.json()
    setCoins(data)
  }

  const handleChangeText = text => setSearch(text)

  return (
    <Contexto.Provider value={navegacion}>
      <View style={styles.container}>
        <StatusBar style="dark" backgroundColor="orange" />
        <Header handleChangeText={handleChangeText} />
        <Coins coins={coins} search={search} getCoins={getCoins} />
      </View>
    </Contexto.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Contenido