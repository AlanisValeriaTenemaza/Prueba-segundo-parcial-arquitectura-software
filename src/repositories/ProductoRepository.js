import { AppDataSource } from "../config/database.js";
import { ProductoFinanciero } from "../entities/ProductoFinanciero.js";

export class ProductoRepository {
  repo = AppDataSource.getRepository(ProductoFinanciero);

  findActivos() {
    return this.repo.find({ where: { activo: true } });
  }
}