import { StyleSheet, Text, View } from "react-native";

import type { Task } from "../interfaces/task";
import { colors, spacing } from "../constants/theme";

type TaskCardProps = {
  task: Task;
};

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.title, task.complete && styles.completedText]}>
            {task.title}
          </Text>

          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{task.category}</Text>
          </View>
        </View>

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

  header: {
    gap: spacing.xs,
    marginBottom: spacing.xs,
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

  categoryBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#E0E7FF",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },

  categoryText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "700",
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
