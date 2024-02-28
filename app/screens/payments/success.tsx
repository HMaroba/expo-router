import { StatusBar } from "expo-status-bar";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { styles } from "../../../styles/styles";

export default function Deposit() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "700", color: "green" }}>
        Payment Success
      </Text>

      <TouchableOpacity style={styles.btn}>
        <Link style={styles.btnText} href={"/about"}>
          Go Home
        </Link>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
