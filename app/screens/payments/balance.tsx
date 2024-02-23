import { StatusBar } from "expo-status-bar";
import {
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  View,
} from "react-native";
import { Link } from "expo-router";
import { styles } from "../../../styles/styles";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

export default function Balance() {
  return (
    <View>
      <View>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
      </View>

      <View style={styles.container3}>
       <Text>Balance : M123.00</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
