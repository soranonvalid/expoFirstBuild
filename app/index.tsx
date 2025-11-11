/* eslint-disable @typescript-eslint/no-require-imports */
import { Note, notes } from "@/data/notesData";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NoteItem = ({ item }: { item: Note }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push(`/detail/${item.id}`)}
      style={styles.card}
    >
      <Image style={{ width: 80, height: 80 }} source={item.image} />

      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDesc}>{item.description}</Text>
        <Text style={styles.cardDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const EmptyData = () => {
  return (
    <View style={styles.emptyContainer}>
      <Image
        style={{ width: 150, height: 150 }}
        source={require("@/assets/images/thumb/empt.png")}
      />
      <Text style={styles.emptyTitle}>Add your first note</Text>
      <Text style={styles.emptyDesc}>
        Save your thoughts, tasks or inspirations
      </Text>
    </View>
  );
};

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{
            width: 32,
            height: 32,
            marginRight: 10,
            objectFit: "cover",
          }}
          source={require("@/assets/images/Group.png")}
        />
        <Text style={styles.kodeinNotes}>Kodein</Text>
        <Text style={styles.notesText}>Notes</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={notes}
          renderItem={({ item }) => <NoteItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ gap: 10, flexGrow: 1 }}
          ListEmptyComponent={() => <EmptyData />}
        />
      </View>

      <TouchableOpacity onPress={() => router.push("/add")} style={styles.fab}>
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    gap: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  kodeinNotes: {
    fontSize: 20,
    fontWeight: 700,
  },
  notesText: {
    fontSize: 20,
    fontWeight: 700,
    color: "#FF5B13",
  },
  content: {
    flex: 1,
    backgroundColor: "white",
  },

  fab: {
    position: "absolute",
    bottom: 70,
    right: 20,
    backgroundColor: "#FF5B13",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  card: {
    flexDirection: "row",
    gap: 4,
    padding: 6,
    borderRadius: 8,
  },
  cardContainer: {
    flex: 1,
    padding: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardDesc: {},
  cardDate: {},
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  emptyDesc: {
    fontSize: 16,
    color: "gray",
  },
});
