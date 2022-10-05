import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { AntDesign } from '@expo/vector-icons';

const CoinInformacion = ({ navigation, route }) => {
    const coin = route.params.coin.item
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("coins")}>
                    <AntDesign name="arrowleft" size={30} color="orange" />
                </TouchableOpacity>
                <Text style={styles.title}>Informacion de la moneda</Text>
            </View>
            <View style={styles.boxInformacion}>
                <View style={styles.box}>
                    <Text style={styles.text}>Moneda:</Text>
                    <Text style={styles.text}>{coin.name}</Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.text}>Symbolo:</Text>
                    <Text style={styles.text}>{coin.symbol}</Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.text}>Imagen:</Text>
                    <Image source={{uri: coin.image}} style={styles.imagen} />
                </View>

                <View style={styles.box}>
                    <Text style={styles.text}>Precio:</Text>
                    <Text style={styles.text}>{coin.current_price}</Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.text}>Porcentaje 24H:</Text>
                    <Text style={coin.price_change_percentage_24h > 0 ? styles.priceUp : styles.priceDown}>{coin.price_change_percentage_24h}</Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.text}>Total Volumen:</Text>
                    <Text style={styles.text}>{coin.total_volume}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#141414",
    },
    header: {
        flexDirection: "row",
        marginTop: 35,
        marginBottom: 30
    },
    title: {
        color: "orange",
        fontSize: 20,
        marginLeft: 20
    },
    boxInformacion: {
        alignItems: "center"
    },
    box: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "70%",
        marginBottom: 30
    },
    text: {
        color: "#fafafa",
        fontSize: 18
    },
    imagen: {
        width: 40,
        height: 40
    },
    priceUp: {
        color: "#0f0",
        fontSize: 18
    },
    priceDown: {
        color: "#f00",
        fontSize: 18
    }
})

export default CoinInformacion