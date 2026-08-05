import { randomUUID } from "expo-crypto";
import type { Task } from "../interfaces/task";

export const tasks: Task[] = [
  {
    id: randomUUID(),
    title: "Completar la pre-entrega",
    category: "Estudio",
    description: "Finalizar la estructura y los componentes de TaskFlow.",
    complete: false,
  },
  {
    id: randomUUID(),
    title: "Revisar ProfileCard",
    category: "Estudio",
    description: "Comprobar que el componente reciba correctamente sus props.",
    complete: true,
  },
  {
    id: randomUUID(),
    title: "Diseñar la pantalla principal",
    category: "Estudio",
    description: "Mostrar las tareas pendientes dentro de HomeScreen.",
    complete: false,
  },
  {
    id: randomUUID(),
    title: "Subir el proyecto a GitHub",
    category: "Estudio",
    description: "Crear el repositorio y subir la segunda pre-entrega.",
    complete: false,
  },
];
