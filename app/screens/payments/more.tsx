import { StatusBar } from "expo-status-bar";
import { Text, View, ImageBackground } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const image = {
  uri: "https://img.freepik.com/free-vector/dark-blue-waves-dots-abstract-background_79603-879.jpg?w=996&t=st=1709189850~exp=1709190450~hmac=81f06229b4889b206a3cc0b8c5d2ca2699fccfae29099c4e85b649c680fd2b9a",
};
import { styles } from "../../../styles/styles";

export default function More() {
  return (
    <View>
      {/* <View
        style={{
          backgroundColor: "black",
          minHeight: 200,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: 20,
        }}
      >
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text
            style={{
              fontSize: 30,
              color: "white",
              fontWeight: "200",
            }}
          >
            Hi
          </Text>
          <Text
            style={{
              fontSize: 30,
              color: "white",
              fontWeight: "600",
              marginLeft: 30,
            }}
          >
            Hlalele Maroba
          </Text>
        </View>
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
      </View> */}

      <View>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={{ padding: 20 }}>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <Text
                style={{
                  fontSize: 30,
                  color: "white",
                  fontWeight: "200",
                }}
              >
                Hi
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: "white",
                  fontWeight: "600",
                  marginLeft: 10,
                }}
              >
                Hlalele Maroba
              </Text>
            </View>
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
        </ImageBackground>
      </View>

      <View
        style={{
          padding: 20,
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <View
          style={{
            padding: 5,
            marginLeft: 12,
            flexDirection: "row",
            marginTop: 20,
            width: "100%",
          }}
        >
          <View style={{ width: "25%" }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "gray",
                height: 60,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginRight: 10,
              }}
            >
              <Feather name="send" size={32} color="green" />
            </View>
            <Text style={{ padding: 3, marginLeft: 10 }}>Send Money</Text>
          </View>
          <View style={{ width: "25%" }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "gray",
                height: 60,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginRight: 10,
              }}
            >
              <MaterialCommunityIcons
                name="contactless-payment"
                size={32}
                color="green"
              />
            </View>
            <Text style={{ padding: 1, marginLeft: 1 }}>Withdraw Money</Text>
          </View>

          <View style={{ width: "25%" }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "gray",
                height: 60,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginRight: 10,
              }}
            >
              <Feather name="send" size={32} color="green" />
            </View>
            <Text style={{ padding: 1, marginLeft: 1 }}>Account Balance</Text>
          </View>

          <View style={{ width: "25%" }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "gray",
                height: 60,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginRight: 10,
              }}
            >
              <AntDesign name="logout" size={32} color="green" />
            </View>
            <Text style={{ padding: 1, marginLeft: 1 }}>Logout</Text>
          </View>
        </View>
        <View
          style={{
            padding: 5,
            marginLeft: 12,
            flexDirection: "row",
            marginTop: 20,
            width: "100%",
          }}
        >
          <View style={{ width: "25%" }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "gray",
                height: 60,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginRight: 10,
              }}
            >
              <Feather name="send" size={32} color="green" />
            </View>
            <Text style={{ padding: 3, marginLeft: 10 }}>Send Money</Text>
          </View>
          <View style={{ width: "25%" }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "gray",
                height: 60,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginRight: 10,
              }}
            >
              <MaterialCommunityIcons
                name="contactless-payment"
                size={32}
                color="green"
              />
            </View>
            <Text style={{ padding: 1, marginLeft: 1 }}>Withdraw Money</Text>
          </View>

          <View style={{ width: "25%" }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "gray",
                height: 60,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginRight: 10,
              }}
            >
              <Feather name="send" size={32} color="green" />
            </View>
            <Text style={{ padding: 1, marginLeft: 1 }}>Account Balance</Text>
          </View>

          <View style={{ width: "25%" }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "gray",
                height: 60,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginRight: 10,
              }}
            >
              <AntDesign name="logout" size={32} color="green" />
            </View>
            <Text style={{ padding: 1, marginLeft: 1 }}>Logout</Text>
          </View>
        </View>
        <View
          style={{
            padding: 5,
            marginLeft: 12,
            flexDirection: "row",
            marginTop: 20,
            width: "100%",
          }}
        >
          <View style={{ width: "25%" }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "gray",
                height: 60,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginRight: 10,
              }}
            >
              <Feather name="send" size={32} color="green" />
            </View>
            <Text style={{ padding: 3, marginLeft: 10 }}>Send Money</Text>
          </View>
          <View style={{ width: "25%" }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "gray",
                height: 60,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginRight: 10,
              }}
            >
              <MaterialCommunityIcons
                name="contactless-payment"
                size={32}
                color="green"
              />
            </View>
            <Text style={{ padding: 1, marginLeft: 1 }}>Withdraw Money</Text>
          </View>

          <View style={{ width: "25%" }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "gray",
                height: 60,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginRight: 10,
              }}
            >
              <Feather name="send" size={32} color="green" />
            </View>
            <Text style={{ padding: 1, marginLeft: 1 }}>Account Balance</Text>
          </View>

          <View style={{ width: "25%" }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "gray",
                height: 60,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginRight: 10,
              }}
            >
              <AntDesign name="logout" size={32} color="green" />
            </View>
            <Text style={{ padding: 1, marginLeft: 1 }}>Logout</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
