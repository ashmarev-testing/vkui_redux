//store.ts
import { configureStore } from "@reduxjs/toolkit";
import textSlice from "./slice"; // Подключение вашего reducer

export default configureStore({
  reducer: {
    text: textSlice, // Используйте непосредственно textSlice здесь
  },
});
