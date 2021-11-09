import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from "./slices/contador";
import usuarioReducer from "./slices/usuario";

export const store = configureStore({
  reducer: {
    contador: contadorReducer,
    usuario: usuarioReducer,
  },
});
