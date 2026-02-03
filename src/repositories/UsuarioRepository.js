import { crearUsuario, listarUsuarios } from "../repositories/UsuarioRepository.js";

export const crearUsuarioService = async (data) => {
  return await crearUsuario(data);
};

export const listarUsuariosService = async () => {
  return await listarUsuarios();
};
