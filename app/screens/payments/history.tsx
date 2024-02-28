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
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            color: "white",
            fontWeight: "200",
            marginTop: 50,
          }}
        >
          Welcome Back
        </Text>
        <Text
          style={{
            fontSize: 30,
            color: "white",
            fontWeight: "600",
            marginTop: 5,
          }}
        >
          Hlalele Maroba
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            fontWeight: "200",
            marginTop: 20,
          }}
        >
          Balance
        </Text>
        <Text style={{ fontSize: 40, color: "white", fontWeight: "800" }}>
          LSL 20000.00
        </Text>
      </View>

      <View
        style={{
          padding: 20,
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 30, marginBottom: 10  , color: 'gray'}}>Transactions</Text>
        <View style={{ padding: 5, flexDirection: "row" }}>
          <View>
            <Text style={{ fontSize: 18 }}>Hlalele Maroba</Text>
            <Text style={{ fontSize: 16 }}>Deposited</Text>
          </View>
          <View style={{ marginLeft: "auto" }}>
            <Text
              style={{
                fontSize: 20,
                color: "green",
                marginLeft: "auto",
                fontWeight: "800",
                marginBottom: 40,
              }}
            >
              {" "}
              +M200.00
            </Text>
          </View>
        </View>
        <View style={{ padding: 5, flexDirection: "row" }}>
          <View>
            <Text style={{ fontSize: 18 }}>ABC AGENT MASERU</Text>
            <Text style={{ fontSize: 16 }}>Withdrawal</Text>
          </View>
          <View style={{ marginLeft: "auto" }}>
            <Text
              style={{
                fontSize: 20,
                color: "red",
                marginLeft: "auto",
                fontWeight: "800",
                marginBottom: 40,
              }}
            >
              {" "}
              -M800.00
            </Text>
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}
