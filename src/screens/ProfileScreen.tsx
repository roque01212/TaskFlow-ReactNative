import { StyleSheet, Text, View } from "react-native";
import { ProfileCard } from "../components/ProfileCard";
import { colors, spacing } from "../constants/theme";
import { AddTaskScreen } from "./AddTaskScreen";
import { tasks } from "../data/task";
import { TaskCard } from "../components/TaskCard";
import type { Task } from "../interfaces/task";
import { useState } from "react";

const avatar = require("../assets/avatar/emanuel.webp");

export const ProfileScreen = () => {
  const [taskList, setTaskList] = useState<Task[]>(tasks);

  const handleAddTask = (newTask: Task) => {
    setTaskList((currentTasks) => [...currentTasks, newTask]);
  };
  return (
    <>
      <Text style={styles.title}>TaskFlow</Text>

      <ProfileCard
        name="Roque Emanuel Gerez"
        role="Estudiante de Desarrollo Mobile"
        email="Roque_gerez@hotmail.com"
        image={avatar}
      />
      <AddTaskScreen onAddTask={handleAddTask} />

      <View style={styles.tasksSection}>
        <Text style={styles.tasksTitle}>Mis tareas</Text>

        {taskList.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
