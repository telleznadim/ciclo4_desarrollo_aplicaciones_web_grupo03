import { createSlice } from "@reduxjs/toolkit";

export const usuarioSlice = createSlice({
  name: "Contador",
  initialState: {
    nombre: "Scooby Doo",
    correo: "scoobydoo3@dino.com",
    avatar:
      "https://i.pinimg.com/originals/47/63/16/476316ef5f884ab4f283593b315b28d4.jpg",
  },
  reducers: {
    cambiarUsuario: (state, action) => {
      state.nombre = "Shaggy";
      state.correo = "shaggy45@dino.com";
      state.avatar =
        "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/ac/ac750856b5006d292acefe79346677f53180d83c_full.jpg";
      console.log("Se ejecutó la acción de cambiarUsuario");
    },
  },
});

export const { cambiarUsuario } = usuarioSlice.actions;

export default usuarioSlice.reducer;
