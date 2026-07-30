import { Task } from "../interfaces/Task";

export const tasks: Task[] = [
  {
    id: 1,
    title: "Completar la pre-entrega",
    description: "Finalizar la estructura y los componentes de TaskFlow.",
    complete: false,
  },
  {
    id: 2,
    title: "Revisar ProfileCard",
    description: "Comprobar que el componente reciba correctamente sus props.",
    complete: true,
  },
  {
    id: 3,
    title: "Diseñar la pantalla principal",
    description: "Mostrar las tareas pendientes dentro de HomeScreen.",
    complete: false,
  },
  {
    id: 4,
    title: "Subir el proyecto a GitHub",
    description: "Crear el repositorio y subir la segunda pre-entrega.",
    complete: false,
  },
];