class Simulacion {
  constructor({
    id,
    usuario_id,
    fecha_simulacion,
    capital_disponible,
    ganancia_total,
    productos_seleccionados
  }) {
    this.id = id;
    this.usuario_id = usuario_id;
    this.fecha_simulacion = fecha_simulacion;
    this.capital_disponible = capital_disponible;
    this.ganancia_total = ganancia_total;
    this.productos_seleccionados = productos_seleccionados;
  }
}

export default Simulacion;
