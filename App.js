import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Contenido from './component/Contenido';
import CoinInformacion from './component/CoinInformacion';

const {Navigator, Screen} = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}} initialRouteName="coins">
        <Screen name="coins" component={Contenido} />
        <Screen name="coin-informacion" component={CoinInformacion} />
      </Navigator>
    </NavigationContainer>
  );
}


