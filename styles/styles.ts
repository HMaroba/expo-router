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
    padding: 10
  },
  container3: {
    flex: 1,
    alignItems: "center",
    marginTop: 300,
    justifyContent: "center",
  },
  card: {
  padding: 20,
  backgroundColor: 'blue',
  borderRadius: 20
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
  },
  title2: {
    fontSize: 28,
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
    lineHeight: 84,
    fontWeight: 'bold',
  
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
    margin: 10,
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
   minHeight: 250,
   backgroundColor: 'white',
   borderBottomEndRadius: 20,
  },

  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
},
searchIcon: {
    padding: 10,
},
input2: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
},
});
