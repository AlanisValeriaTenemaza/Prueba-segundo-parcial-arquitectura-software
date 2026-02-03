import { ProductoRepository } from "../repositories/ProductoRepository.js";

export class ProductoService {
  constructor() {
    this.productoRepo = new ProductoRepository();
  }

  async listarActivos() {
    return await this.productoRepo.findActivos();
  }
}