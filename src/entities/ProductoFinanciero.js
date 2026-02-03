class ProductoFinanciero {
  constructor({
    id,
    nombre,
    descripcion,
    costo,
    porcentaje_retorno,
    riesgo,
    activo
  }) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.costo = costo;
    this.porcentaje_retorno = porcentaje_retorno;
    this.riesgo = riesgo;
    this.activo = activo;
  }
}

export default ProductoFinanciero;
