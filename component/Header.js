import {View, Text, TextInput, StyleSheet} from "react-native"

const Header = ({handleChangeText}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Coins</Text>
            <TextInput
                style={styles.input}
                placeholder="Buscar"
                placeholderTextColor="#999"
                onChangeText={handleChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      marginTop: 40,
      flexDirection: "row",
      justifyContent: "space-between",
      width: "95%"
    },
    title: {
      color: "orange",
      fontSize: 30,
      fontWeight: "bold"
    },
    input: {
      borderBottomWidth: 2,
      borderColor: "#3455",
      width: "50%",
      fontSize: 18,
      color: "#fafafa",
      paddingHorizontal: 10
    }
  });

export default Header