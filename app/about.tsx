import { Text, View, ImageBackground } from "react-native";

import { Link } from "expo-router";
import { styles } from "../styles/styles";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };
import { MaterialIcons } from "@expo/vector-icons";

export default function About() {
  return (
    <View>
      <View style={{ padding: 20 }}>
        <View
          style={{
            backgroundColor: "black",
            height: 170,
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 25,

              color: "white",
              fontWeight: "300",
            }}
          >
            Good Morning Hlalele !
          </Text>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <View>
              <Text
                style={{
                  fontSize: 19,

                  color: "white",
                  fontWeight: "300",
                }}
              >
                Amount
              </Text>
              <Text style={{ fontSize: 30, color: "white", fontWeight: "800" }}>
                LSL 2000.00
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "gray",
                height: 40,
                width: 40,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginLeft: 'auto',
                marginTop: 20,
                marginRight: 10,
              }}
            >
              <MaterialIcons name="remove-red-eye" size={24} color="white" />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.About}>
        <View style={styles.column}>
          <Link style={styles.boxText} href={"/screens/payments/deposit"}>
            Deposit
          </Link>
        </View>

        <View style={styles.column}>
          <Link style={styles.boxText} href={"/screens/payments/withdraw"}>
            Withdraw
          </Link>
        </View>
        <View style={styles.column}>
          <Link style={styles.boxText} href={"/screens/payments/pay"}>
            Pay
          </Link>
        </View>
        <View style={styles.column}>
          <Link style={styles.boxText} href={"/screens/payments/sendMoney"}>
            Send Money
          </Link>
        </View>
        <View style={styles.column}>
          <Text style={styles.boxText}>Profile</Text>
        </View>
        <View style={styles.column}>
          <Link style={styles.boxText} href={"/screens/payments/balance"}>
            Balance
          </Link>
        </View>
        <View style={styles.column}>
          <Link style={styles.boxText} href={"/screens/payments/history"}>
            History
          </Link>
        </View>
        <View style={styles.column}>
          <Link style={styles.boxText} href={"/screens/payments/more"}>
            More
          </Link>
        </View>

        <View style={styles.column}>
          <Text style={styles.boxText}>Logout</Text>
        </View>
      </View>
    </View>
  );
}
