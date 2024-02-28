import { StatusBar } from "expo-status-bar";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { styles } from "../../../styles/styles";

export default function Deposit() {
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "700",
          color: "green",
          textAlign: "center",
          marginTop: 70,
        }}
      >
        Payment Success
      </Text>
      <Text
        style={{
          fontSize: 16,

          textAlign: "center",
          marginTop: 3,
        }}
      >
        You have successfully pay your bill.. Well Done
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "gray",
            width: "40%",
            height: 45,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6,
          }}
        >
          <Link style={{ textAlign: "center", fontSize: 20 , fontWeight: '600' }} href={"/about"}>
            Share
          </Link>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "gray",
            width: "40%",
            height: 45,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6,
          }}
        >
          <Link style={{ textAlign: "center", fontSize: 20 , fontWeight: '600' }} href={"/about"}>
            Download
          </Link>
        </TouchableOpacity>

      </View>

      <View style={{ padding: 20 }}>
        <View
          style={{
            borderWidth: 1,
            minHeight: 180,
            borderColor: "gray",
            marginTop: 16,
            borderRadius: 5,
            padding: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>From</Text>
            <Text style={{ marginLeft: "auto", fontSize: 18 }}>
              Hlalele Maroba
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Date</Text>
            <Text style={{ marginLeft: "auto", fontSize: 18 }}>
              28 February 2023
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Transaction Id
            </Text>
            <Text style={{ marginLeft: "auto", fontSize: 18 }}>
              hy6712werty1234
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Total Amount
            </Text>
            <Text style={{ marginLeft: "auto", fontSize: 18 }}>LSL 200.00</Text>
          </View>
        </View>
      </View>
      <View style={styles.container3}>
        <TouchableOpacity style={styles.btn}>
          <Link style={styles.btnText} href={"/about"}>
            Go Home
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}
