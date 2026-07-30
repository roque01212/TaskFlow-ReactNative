import { StyleSheet, Text, View } from "react-native";

import type { Task } from "../interfaces/Task";
import { colors, spacing } from "../constants/theme";

type TaskCardProps = {
  task: Task;
};

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={[styles.title, task.complete && styles.completedText]}>
          {task.title}
        </Text>

        <Text
          style={[styles.description, task.complete && styles.completedText]}
        >
          {task.description}
        </Text>
      </View>

      <View
        style={[
          styles.status,
          task.complete ? styles.completedStatus : styles.pendingStatus,
        ]}
      >
        <Text style={styles.statusText}>
          {task.complete ? "Completa" : "Pendiente"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: spacing.md,
    marginBottom: spacing.md,
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },

  content: {
    flex: 1,
    marginRight: spacing.sm,
  },

  title: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "700",
  },

  description: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
    marginTop: spacing.xs,
  },

  completedText: {
    textDecorationLine: "line-through",
    opacity: 0.55,
  },

  status: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  completedStatus: {
    backgroundColor: "#DCFCE7",
  },

  pendingStatus: {
    backgroundColor: "#FEF3C7",
  },

  statusText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: "600",
  },
});
