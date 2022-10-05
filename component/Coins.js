import { useState, useContext} from "react"
import { FlatList, StyleSheet, TouchableOpacity } from "react-native"
import Coin from "./Coin"
import Contexto from "./Contexto"

const Coins = ({coins, search, getCoins}) => {
    const {navigation} = useContext(Contexto)
    const [refresh, setRefresh] = useState(false)
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            renderItem={item => {
                return (
                    <TouchableOpacity onPress={()=> {
                        navigation.navigate("coin-informacion", {coin: item})
                    }}>
                        <Coin data={item} />
                    </TouchableOpacity>
                )
            }}
            style={styles.flatList}
            refreshing={refresh}
            onRefresh={async () => {
                setRefresh(true)
                await getCoins()
                setRefresh(false)
            }}
            data={coins.filter(coin => {
                const { name, symbol } = coin
                if (name.toLowerCase().includes(search.toLocaleLowerCase()) || symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                    return coin
                }
            })}
        />
    )
}

const styles = StyleSheet.create({
    flatList: {
        width: "95%"
    }
})

export default Coins