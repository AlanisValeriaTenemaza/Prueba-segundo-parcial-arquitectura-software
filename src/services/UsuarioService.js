import { UsuarioRepository } from "../repositories/UsuarioRepository.js";

export class UsuarioService {

  constructor() {
    this.usuarioRepo = new UsuarioRepository();
  }

  async listarUsuarios() {
    return await this.usuarioRepo.findAll();
  }
}