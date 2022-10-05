import { View, Text, Image, StyleSheet } from "react-native"

const Coin = ({ data }) => {
    const { item } = data
    return (
        <View style={styles.box}>
            <View style={styles.boxTitle}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.symbol}>{item.symbol.toUpperCase()}</Text>
                </View>
            </View>
            <View>
                <Text style={[styles.text, styles.textRigth]}>{item.current_price}</Text>
                <Text style={[styles.textRigth, item.price_change_percentage_24h > 0 ? styles.priceUp : styles.priceDown]}>{item.price_change_percentage_24h}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "#121212",
        borderBottomWidth: 3,
        padding: 10
    },
    boxTitle: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 20
    },
    text: {
        color: "#fff"
    },
    textRigth: {
        textAlign: "right"
    },
    priceUp: {
        color: "#0f0"
    },
    priceDown: {
        color: "#f00"
    },
    symbol: {
        color: "#6E6E6E"
    }
})

export default Coin