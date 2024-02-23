import { StatusBar } from "expo-status-bar";
import {
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  View,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import { styles } from "../../../styles/styles";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

export default function Balance() {
  return (
    <View style={styles.container2}>
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "800" }}>Balance</Text>
          <Text style={{ fontSize: 15 }}>20 Feb 2023</Text>
        </View>
        <Text style={{ marginLeft: "auto" }}>Down</Text>
      </View>

      <View style={{ backgroundColor: "black", padding: 20, borderRadius: 10 }}>
        <Text style={{ fontSize: 20, color: "white" }}>Balance : M123.00</Text>
        <Text style={{ fontSize: 14, color: "white" }}>
          Available : M123.00
        </Text>
        <Text style={{ fontSize: 14, color: "white" }}>
          Account Number : 565787878
        </Text>
        <StatusBar style="auto" />
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
        <ScrollView>
          <View style={{ backgroundColor: "gray", padding: 5 }}>
            <Text style={{ fontSize: 14, color: "white" }}>Hlalele Maroba</Text>
            <Text style={{ fontSize: 14, color: "white" }}>M200.00</Text>
            <Text style={{ fontSize: 14, color: "white" }}>Deposited</Text>
          </View>
          <View style={{ backgroundColor: "gray", padding: 5, marginTop: 8 }}>
            <Text style={{ fontSize: 14, color: "white" }}>Hlalele Maroba</Text>
            <Text style={{ fontSize: 14, color: "white" }}>M200.00</Text>
            <Text style={{ fontSize: 14, color: "white" }}>Deposited</Text>
          </View>
          <View style={{ backgroundColor: "gray", padding: 5, marginTop: 8 }}>
            <Text style={{ fontSize: 14, color: "white" }}>Hlalele Maroba</Text>
            <Text style={{ fontSize: 14, color: "white" }}>M200.00</Text>
            <Text style={{ fontSize: 14, color: "white" }}>Deposited</Text>
          </View>
          <View style={{ backgroundColor: "gray", padding: 5, marginTop: 8 }}>
            <Text style={{ fontSize: 14, color: "white" }}>Hlalele Maroba</Text>
            <Text style={{ fontSize: 14, color: "white" }}>M200.00</Text>
            <Text style={{ fontSize: 14, color: "white" }}>Deposited</Text>
          </View>
          <View style={{ backgroundColor: "gray", padding: 5, marginTop: 8 }}>
            <Text style={{ fontSize: 14, color: "white" }}>Hlalele Maroba</Text>
            <Text style={{ fontSize: 14, color: "white" }}>M200.00</Text>
            <Text style={{ fontSize: 14, color: "white" }}>Deposited</Text>
          </View>
          <View style={{ backgroundColor: "gray", padding: 5, marginTop: 8 }}>
            <Text style={{ fontSize: 14, color: "white" }}>Hlalele Maroba</Text>
            <Text style={{ fontSize: 14, color: "white" }}>M200.00</Text>
            <Text style={{ fontSize: 14, color: "white" }}>Deposited</Text>
          </View>
          <View style={{ backgroundColor: "gray", padding: 5, marginTop: 8 }}>
            <Text style={{ fontSize: 14, color: "white" }}>Hlalele Maroba</Text>
            <Text style={{ fontSize: 14, color: "white" }}>M200.00</Text>
            <Text style={{ fontSize: 14, color: "white" }}>Deposited</Text>
          </View>
          <View style={{ backgroundColor: "gray", padding: 5, marginTop: 8 }}>
            <Text style={{ fontSize: 14, color: "white" }}>Hlalele Maroba</Text>
            <Text style={{ fontSize: 14, color: "white" }}>M200.00</Text>
            <Text style={{ fontSize: 14, color: "white" }}>Deposited</Text>
          </View>
          <View style={{ backgroundColor: "gray", padding: 5, marginTop: 8 }}>
            <Text style={{ fontSize: 14, color: "white" }}>Hlalele Maroba</Text>
            <Text style={{ fontSize: 14, color: "white" }}>M200.00</Text>
            <Text style={{ fontSize: 14, color: "white" }}>Deposited</Text>
          </View>
          <View style={{ backgroundColor: "gray", padding: 5, marginTop: 8  }}>
            <Text style={{ fontSize: 14, color: "white" }}>Hlalele Maroba</Text>
            <Text style={{ fontSize: 14, color: "white" }}>M200.00</Text>
            <Text style={{ fontSize: 14, color: "white" }}>Deposited</Text>
          </View>
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
