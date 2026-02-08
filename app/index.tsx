// Commit 3 - Final polish
// Commit 2 - UI update
import { StatusBar } from 'expo-status-bar';
import { Alert, Image, ScrollView, StyleSheet, Text, View, Button } from 'react-native';

export default function Index() {
  const handleAlert = () => {
    Alert.alert("Alert Button pressed");
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://via.placeholder.com/80" }}
          style={styles.profileImage}
        />
        <View style={styles.headerText}>
          <Text style={styles.title}>OOTD Everyday</Text>
          <Text style={styles.subtitle}>Fit check! You know we'll hype you up.</Text>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>53</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Members</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>1</Text>
          <Text style={styles.statLabel}>Admin</Text>
        </View>
      </View>

      {/* Grid of Images */}
      <View style={styles.grid}>
        {Array.from({ length: 12 }).map((_, i) => (
          <Image
            key={i}
            source={{ uri: "https://picsum.photos/200?random=" + i }}
            style={styles.gridImage}
          />
        ))}
      </View>

      {/* Alert Button */}
      <View style={styles.alertButton}>
        <Button title="Alert" onPress={handleAlert} />
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ddd",
  },
  headerText: {
    marginLeft: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    marginTop: 4,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 14,
    color: "gray",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridImage: {
    width: "32%",
    height: 120,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: "#eee",
  },
  alertButton: {
    marginTop: 20,
    marginBottom: 40,
  },
});
