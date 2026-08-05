# TaskFlow

TaskFlow es una aplicación móvil desarrollada con React Native, Expo y TypeScript para organizar y gestionar tareas. El proyecto forma parte de una entrega para CoderHouse y actualmente renderiza `HomeScreen` directamente desde `App.tsx` como pantalla base de la aplicación.

## Funcionalidades y pantallas

- `HomeScreen`: pantalla base que muestra el contenido principal de la app.
- `ProfileScreen`: pantalla con los datos del estudiante, avatar, formulario de tareas y listado de tareas.
- `ProfileCard`: componente reutilizable que recibe props para mostrar nombre, rol, email e imagen de perfil.
- `AddTaskScreen`: formulario para crear nuevas tareas con validaciones de título, descripción y categoría.
- `TaskCard`: componente para visualizar cada tarea con su título, descripción, categoría y estado.

## Ejecutar el proyecto localmente

1. Clona el repositorio y abre una terminal en la carpeta del proyecto.

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo de Expo:

   ```bash
   npx expo start
   ```

4. Abre la aplicación con una de las opciones disponibles:

   ```bash
   npm run android
   npm run ios
   npm run web
   ```

También puedes seguir las opciones que aparecen en la terminal de Expo para abrir la aplicación en Expo Go, un emulador de Android, un simulador de iOS o el navegador web.

## Tecnologías

- React Native
- Expo SDK 54
- TypeScript
- expo-crypto
- react-native-safe-area-context
