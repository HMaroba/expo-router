import { StatusBar } from "expo-status-bar";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../../../styles/styles";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Withdraw() {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "row", marginBottom: 20, gap: 5 }}>
          <Ionicons name="chevron-back" size={30} color="black" />
          <Text style={{ fontSize: 20 }}>Withdraw</Text>
        </View>
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
              fontSize: 16,

              color: "white",
              fontWeight: "800",
            }}
          >
            Amount
          </Text>
          <Text style={{ fontSize: 30, color: "white", fontWeight: "800" }}>
            LSL 2000.00
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          marginTop: 50,
          alignItems: "center",
        }}
      >
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
