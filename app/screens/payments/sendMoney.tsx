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

export default function SendMoney() {
  return (
    <View>
      <View>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.title2}>Send Money Now !!</Text>
        </ImageBackground>
      </View>

      <View style={styles.container3}>
        <TextInput
          placeholder="Phone Number"
          keyboardType="email-address"
          style={styles.input}
        />
        <TextInput
          placeholder="Amount"
          keyboardType="email-address"
          style={styles.input}
        />

        <TouchableOpacity style={styles.btn}>
          <Link style={styles.btnText} href={"/about"}>
            Submit
          </Link>
        </TouchableOpacity>
        {/* <Link href="/about">About</Link> */}
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
