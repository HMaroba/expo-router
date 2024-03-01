import { StatusBar } from "expo-status-bar";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../../../styles/styles";
import { Link } from "expo-router";

export default function Withdraw() {
  return (
    <View style={{ backgroundColor: "white", height: "100%", padding: 20 }}>
      <View
        style={{
          backgroundColor: "black",
          height: 150,
          justifyContent: "center",
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,

            color: "white",
            fontWeight: "800",
          }}
        >
          Hi Hlalele Maroba
        </Text>
        <Text style={{ fontSize: 30, color: "white", fontWeight: "800" }}>
          LSL 2000.00
        </Text>
      </View>
      <View>
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
      </View>
    </View>
  );
}
