import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
  },
  registerLink: {
    fontSize: 18,
    justifyContent: "flex-end",
    marginTop: 20,
  },
  label: {
    textAlign: "left",
    width: "80%",
    fontSize: 18,
    marginBottom: 3,
  },
  input: {
    borderWidth: 1,
    width: "80%",
    fontSize: 16,
    height: 45,
    padding: 10,
    margin: 5,
    borderRadius: 6,
  },

  btn: {
    height: 40,
    marginTop: 10,
    backgroundColor: "#222222",
    width: 300,
    borderRadius: 6,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    marginTop: 9,
    fontSize: 18,
  },

  About: {
    flexDirection: "row", // Horizontal layout
    flexWrap: "wrap", // Wrap content to next line if it exceeds the container width
    justifyContent: "space-between",
    padding: 30,
    marginTop: 100,
  },
  column: {
    width: "30%",
    marginBottom: 10,
    backgroundColor: "black",
    borderRadius: 10,
    padding: 5,
    minHeight: 100,
    justifyContent: "center",
  },
  boxText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  image: {
   minHeight: 200,
   backgroundColor: 'white'
  },
});
