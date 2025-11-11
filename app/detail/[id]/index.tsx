import { notes } from "@/data/notesData";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DetailScreen = () => {
  const route = useRouter();
  const { id } = useLocalSearchParams();
  const note = notes.find((note) => note.id === Number(id));
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity
          onPress={() => {
            route.push("/");
          }}
        >
          <Ionicons name="arrow-back" size={24} color="#FF5B13" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Note Details</Text>
      </View>
      <Image style={{ width: "100%", height: 220 }} source={note?.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{note?.title}</Text>
        <Text style={styles.date}>{note?.date}</Text>
        <Text style={styles.desc}>{note?.description}</Text>
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
