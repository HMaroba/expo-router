import { StatusBar } from "expo-status-bar";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { styles } from "../../../styles/styles";

export default function History() {
  return (
    <View>
      <View
        style={{
          backgroundColor: "black",
          minHeight: 280,
        }}
      >
        <Text style={{ fontSize: 30, color: "white", fontWeight: "800" }}>
          Welcome Back
        </Text>
        <Text style={{ fontSize: 30, color: "white", fontWeight: "800" }}>
          Hlalele Maroba
        </Text>
        <Text style={{ fontSize: 20, color: "white", fontWeight: "800" }}>
          Balance
        </Text>
        <Text style={{ fontSize: 30, color: "white", fontWeight: "800" }}>
          LSL 20000.00
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "black",
          padding: 20,
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 20, color: "white", marginBottom: 10 }}>
          Transactions
        </Text>

        <View style={{ backgroundColor: "gray", padding: 5 }}>
          <Text style={{ fontSize: 14, color: "white" }}>Hlalele Maroba</Text>
          <Text
            style={{
              fontSize: 14,
              color: "green",
              textAlign: "right",
              fontWeight: "700",
            }}
          >
            {" "}
            +M200.00
          </Text>
          <Text style={{ fontSize: 14, color: "white" }}>Deposited</Text>
        </View>
        <View style={{ backgroundColor: "gray", padding: 5, marginTop: 8 }}>
          <Text style={{ fontSize: 14, color: "white" }}>Hlalele Maroba</Text>
          <Text
            style={{
              fontSize: 14,
              color: "red",
              textAlign: "right",
              fontWeight: "700",
            }}
          >
            {" "}
            -M200.00
          </Text>
          <Text style={{ fontSize: 14, color: "white" }}>Withdrawal</Text>
        </View>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}
