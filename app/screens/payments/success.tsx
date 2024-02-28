import { StatusBar } from "expo-status-bar";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { styles } from "../../../styles/styles";

export default function Deposit() {
  return (
    <View>
     <Text>Payment Success</Text>

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
            Go Home
          </Link>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
