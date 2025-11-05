/* eslint-disable @typescript-eslint/no-require-imports */
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DetailScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <Ionicons name="arrow-back" size={24} color="#FF5B13" />
        <Text style={styles.appBarTitle}>Note Details</Text>
      </View>
      <Image
        style={{ width: "100%", height: 220 }}
        source={require("@/assets/images/thumb/x3.png")}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Masak ikan bakar</Text>
        <Text style={styles.date}>10 Nov. 2002</Text>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
          ducimus esse officia maiores, molestiae similique necessitatibus amet
          facere adipisci, expedita asperiores provident ab harum neque quam.
          Nesciunt deleniti tenetur eum autem doloribus laboriosam inventore sit
          maxime commodi sint est cumque adipisci nihil, quis corporis quaerat
          earum deserunt possimus alias officia harum laborum at. Aliquid
          reiciendis, commodi recusandae, minima eligendi repudiandae rerum
          velit quisquam maiores animi excepturi cum quaerat voluptas corporis
          ratione tenetur laboriosam inventore officia dolor ipsam amet at non
          aspernatur adipisci. Eaque beatae impedit eius reprehenderit odit
          mollitia quo laborum, ut est aliquid! Quisquam unde nostrum facere
          sapiente repellat!
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.updateBtn}>
          <Text style={{ color: "white", textAlign: "center" }}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteBtn}>
          <Text style={{ color: "white", textAlign: "center" }}>Delete</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 8,
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    flex: 1,
    flexDirection: "column",
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "gray",
  },
  desc: {
    fontSize: 14,
    textAlign: "justify",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 10,
  },
  updateBtn: {
    flex: 1,
    color: "white",
    paddingVertical: 13,
    borderRadius: 10,
    backgroundColor: "#FF5B13",
  },
  deleteBtn: {
    flex: 1,
    color: "white",
    paddingVertical: 13,
    borderRadius: 10,
    backgroundColor: "#e73c3cff",
  },
});

export default DetailScreen;
