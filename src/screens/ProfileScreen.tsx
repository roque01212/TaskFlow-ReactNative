import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ProfileCard } from "../components/ProfileCard";
import { colors, spacing } from "../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { tasks } from "../data/task";
import { TaskCard } from "../components/TaskCard";
const avatar = require("../assets/avatar/emanuel.webp");

export const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>TaskFlow</Text>

        <ProfileCard
          name="Roque Emanuel Gerez"
          role="Estudiante de Desarrollo Mobile"
          email="Roque_gerez@hotmail.com"
          image={avatar}
        />

        <View style={styles.tasksSection}>
          <Text style={styles.tasksTitle}>Mis tareas</Text>

          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },

  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },

  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: spacing.md,
  },

  tasksSection: {
    marginTop: spacing.xl,
  },

  tasksTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "700",
    marginBottom: spacing.md,
  },
});
