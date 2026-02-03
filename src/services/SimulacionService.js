import { AppDataSource } from "../config/database.js";
import { Simulacion } from "../entities/Simulacion.js";
import { ProductoFinanciero } from "../entities/ProductoFinanciero.js";
import { v4 as uuid } from "uuid";

export class SimulacionService {

  async simular({ usuarioId, capitalDisponible, productos }) {

    // ordenar por mayor retorno
    productos.sort((a, b) => b.porcentajeRetorno - a.porcentajeRetorno);

    let costoTotal = 0;
    let gananciaTotal = 0;
    let seleccionados = [];

    for (const p of productos) {
      if (costoTotal + p.costo <= capitalDisponible) {
        costoTotal += Number(p.costo);
        const ganancia = (p.costo * p.porcentajeRetorno) / 100;
        gananciaTotal += ganancia;

        seleccionados.push({
          id: p.id,
          nombre: p.nombre,
          costo: p.costo,
          riesgo: p.riesgo,
          porcentajeRetorno: p.porcentajeRetorno,
          gananciaEstimada: ganancia
        });
      }
    }

    const simulacion = AppDataSource.getRepository(Simulacion).create({
      id: uuid(),
      usuarioId,
      capitalDisponible,
      gananciaTotal,
      productosSeleccionados: seleccionados
    });

    await AppDataSource.getRepository(Simulacion).save(simulacion);

    return {
      capitalDisponible,
      costoTotal,
      gananciaTotal,
      productosSeleccionados: seleccionados
    };
  }
}