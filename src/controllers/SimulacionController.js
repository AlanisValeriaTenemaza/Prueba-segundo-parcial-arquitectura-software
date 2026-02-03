import { SimulacionService } from "../services/SimulacionService.js";

export const crearSimulacion = async (req, res) => {
  try {
    const service = new SimulacionService();
    const resultado = await service.simular(req.body);
    res.status(201).json(resultado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};