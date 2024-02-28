import { StatusBar } from "expo-status-bar";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { styles } from "../../../styles/styles";

export default function Deposit() {
  return (
    <View>
      <View
        style={{
          backgroundColor: "black",
          minHeight: 200,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30, color: "white", fontWeight: "800" }}>
          Deposit Money
        </Text>
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
          <Link style={styles.btnText} href={"/screens/payments/success"}>
            Submit
          </Link>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
