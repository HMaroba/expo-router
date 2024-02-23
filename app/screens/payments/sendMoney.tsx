import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
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
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
      </View>
      <Text style={styles.title}>Send Money Now !!</Text>

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
  );
}
