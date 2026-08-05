import { useState } from "react";
import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { randomUUID } from "expo-crypto";

import { colors, spacing } from "../constants/theme";
import type { Task } from "../interfaces/task";
import type { Category } from "../types/categories";

type FocusedField = "title" | "description" | null;

const categories: Category[] = ["Personal", "Estudio", "Trabajo"];

interface Props {
  onAddTask: (newTask: Task) => void;
}

export const AddTaskScreen = ({ onAddTask }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<Category>("Personal");

  const [focusedField, setFocusedField] = useState<FocusedField>(null);
  const [titleTouched, setTitleTouched] = useState(false);
  const [descriptionTouched, setDescriptionTouched] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const getTitleError = () => {
    const cleanTitle = title.trim();

    if (!cleanTitle) {
      return "El título es obligatorio.";
    }

    if (cleanTitle.length < 5) {
      return "El título debe tener al menos 5 caracteres.";
    }

    return "";
  };

  const getDescriptionError = () => {
    const cleanDescription = description.trim();

    if (!cleanDescription) {
      return "La descripción es obligatoria.";
    }

    if (cleanDescription.length < 10) {
      return "La descripción debe tener al menos 10 caracteres.";
    }

    return "";
  };

  const titleError = getTitleError();
  const descriptionError = getDescriptionError();
  const formHasErrors = Boolean(titleError) || Boolean(descriptionError);
  const isSaveButtonDisabled = submitAttempted && formHasErrors;

  const showTitleError =
    Boolean(titleError) && (titleTouched || submitAttempted);

  const showDescriptionError =
    Boolean(descriptionError) && (descriptionTouched || submitAttempted);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setCategory("Personal");
    setTitleTouched(false);
    setDescriptionTouched(false);
    setSubmitAttempted(false);
    setFocusedField(null);
  };

  const handleAddTask = () => {
    setSubmitAttempted(true);

    if (formHasErrors) {
      return;
    }

    const newTask = {
      id: randomUUID(),
      title: title.trim(),
      description: description.trim(),
      category,
      complete: false,
    };

    console.log("Tarea capturada:", newTask);

    onAddTask(newTask);
    Keyboard.dismiss();
    resetForm();

    Alert.alert("Éxito", "Tarea capturada localmente");
  };

  return (
    <>
      <Text style={styles.title}>Crear nueva tarea</Text>

      <View style={styles.form}>
        <View style={styles.field}>
          <Text style={styles.label}>Título</Text>

          <TextInput
            value={title}
            onChangeText={setTitle}
            onFocus={() => setFocusedField("title")}
            onBlur={() => {
              setFocusedField(null);
              setTitleTouched(true);
            }}
            placeholder="Ej. Completar la pre-entrega"
            placeholderTextColor={colors.textSecondary}
            selectionColor={colors.primary}
            autoCapitalize="sentences"
            autoCorrect
            returnKeyType="next"
            maxLength={60}
            style={[
              styles.input,
              focusedField === "title" && styles.inputFocused,
              showTitleError && styles.inputError,
            ]}
          />

          {showTitleError && <Text style={styles.errorText}>{titleError}</Text>}
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Descripción</Text>

          <TextInput
            value={description}
            onChangeText={setDescription}
            onFocus={() => setFocusedField("description")}
            onBlur={() => {
              setFocusedField(null);
              setDescriptionTouched(true);
            }}
            placeholder="Describe lo que debes realizar"
            placeholderTextColor={colors.textSecondary}
            selectionColor={colors.primary}
            autoCapitalize="sentences"
            autoCorrect
            multiline
            numberOfLines={5}
            textAlignVertical="top"
            maxLength={250}
            style={[
              styles.input,
              styles.descriptionInput,
              focusedField === "description" && styles.inputFocused,
              showDescriptionError && styles.inputError,
            ]}
          />

          {showDescriptionError && (
            <Text style={styles.errorText}>{descriptionError}</Text>
          )}
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Categoría</Text>

          <View style={styles.categories}>
            {categories.map((item) => {
              const isSelected = category === item;

              return (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.categoryButton,
                    isSelected && styles.categoryButtonSelected,
                  ]}
                  activeOpacity={0.8}
                  onPress={() => setCategory(item)}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      isSelected && styles.categoryTextSelected,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.saveButton,
            isSaveButtonDisabled && styles.saveButtonDisabled,
          ]}
          activeOpacity={isSaveButtonDisabled ? 1 : 0.8}
          disabled={isSaveButtonDisabled}
          onPress={handleAddTask}
        >
          <Text
            style={[
              styles.saveButtonText,
              isSaveButtonDisabled && styles.saveButtonTextDisabled,
            ]}
          >
            Guardar tarea
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: "700",
    marginBottom: spacing.md,
    marginTop: spacing.lg,
  },

  form: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: spacing.lg,
    gap: spacing.lg,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },

  field: {
    gap: spacing.sm,
  },

  label: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "600",
  },

  input: {
    minHeight: 52,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.surface,
    color: colors.text,
    fontSize: 16,
  },

  inputFocused: {
    borderColor: colors.primary,
  },

  inputError: {
    borderColor: colors.error,
  },

  descriptionInput: {
    minHeight: 120,
  },

  errorText: {
    color: colors.error,
    fontSize: 13,
  },

  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },

  categoryButton: {
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: 20,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.surface,
  },

  categoryButtonSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },

  categoryText: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: "600",
  },

  categoryTextSelected: {
    color: colors.surface,
  },

  saveButton: {
    minHeight: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: colors.primary,
    marginTop: spacing.sm,
  },

  saveButtonDisabled: {
    backgroundColor: colors.disabled,
  },

  saveButtonText: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: "700",
  },

  saveButtonTextDisabled: {
    opacity: 0.85,
  },
});
