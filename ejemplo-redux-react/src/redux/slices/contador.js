import { createSlice } from "@reduxjs/toolkit";

export const contadorSlice = createSlice({
  name: "Contador",
  initialState: {
    valor: 0,
  },
  reducers: {
    incrementar: (state, action) => {
      state.valor += 1;
      console.log("Se ejecutó la acción de Incrementar");
    },
    decrementar: (state, action) => {
      state.valor -= 1;
      console.log("Se ejecutó la acción de Decrementar");
    },
    incrementarEn: (state, action) => {
      state.valor += parseInt(action.payload);
      console.log("Se ejecutó la acción de IncrementarEn " + action.payload);
    },
  },
});

export const { incrementar, decrementar, incrementarEn } =
  contadorSlice.actions;

export default contadorSlice.reducer;
