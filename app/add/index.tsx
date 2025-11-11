/* eslint-disable @typescript-eslint/no-require-imports */
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const images = [
  require("@/assets/images/thumb/x1.png"),
  require("@/assets/images/thumb/x2.png"),
  require("@/assets/images/thumb/x3.png"),
  require("@/assets/images/thumb/x4.png"),
];

const AddScreen = () => {
  const route = useRouter();
  const [selectedImage, setSelectedImage] = useState<number>(0);
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
        <Text style={styles.appBarTitle}>Add Note</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.inputTitle}
          selectionColor="#FF5B13"
          placeholder="Note Title"
        />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.inputContent}
          selectionColor="#FF5B13"
          placeholder="Note Content"
          textAlignVertical="top"
          multiline={true}
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {images.map((images, idx) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedImage(idx);
              }}
              key={idx}
              style={[
                styles.boxImage,
                selectedImage === idx && { borderColor: "#FF5B13" },
              ]}
            >
              <Image style={styles.image} source={images} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.inputBtn}>
        <Text style={{ textAlign: "center", color: "white" }}>Add</Text>
      </TouchableOpacity>
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
  form: {
    padding: 10,
  },
  inputTitle: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    padding: 15,
  },
  inputContent: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    padding: 15,
    marginBottom: 10,
    height: 150,
  },
  boxImage: {
    height: 100,
    width: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    marginRight: 10,
  },
  image: { width: "100%", height: "100%", borderRadius: 8 },
  inputBtn: {
    marginTop: "auto",
    backgroundColor: "#FF5B13",
    padding: 12,
    borderRadius: 8,
    margin: 10,
  },
});

export default AddScreen;
