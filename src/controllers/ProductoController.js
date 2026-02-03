import { ProductoService } from "../services/ProductoService.js";

export const listarProductos = async (req, res) => {
  try {
    const service = new ProductoService();
    const productos = await service.listarActivos();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};