import { UsuarioService } from "../services/UsuarioService.js";

export const listarUsuarios = async (req, res) => {
  try {
    const service = new UsuarioService();
    const usuarios = await service.listarUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};