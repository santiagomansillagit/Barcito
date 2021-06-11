// import { getConnection, sql } from "../database/connection";
// import query from "../database/query"
import { getConnection, sql, queries } from "../database"; // esta linea hace lo mismo que las anteriores gracias al archivo index.js dentro de database.

/// Metodo GET para traer todos los productos.
export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    // const result = await pool.request().query("SELECT * FROM Productos");
    const result = await pool
    .request()
    .query(queries.getAllProducts);

    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

/// Metodo POST para crear un producto.
export const createProduct = async (req, res) => {
  const { nombre, descripcion } = req.body;
  let { cantidad } = req.body; //lo definimos asi pq lo sobreescribimos si no lo mandan del cliente..

  if (nombre == null || descripcion == null) {
    return res
      .status(400)
      .json({ msg: "Bad Request, Debe llenar todos los campos" });
  }

  if (cantidad == null) cantidad = 0;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("nombreOkas", sql.NVarChar, nombre)
      .input("descipcionOkas", sql.Text, descripcion)
      .input("cantidadOkas", sql.Int, cantidad)
      .query(queries.addNewProduc);
    //   .query("INSERT INTO Productos (Nombre, Descripcion, Cantidad VALUES  (@nombreOkas, @descipcionOkas, @cantidadOkas)");

    res.json({ nombre, descripcion, cantidad });
  } catch (error) {
    es.status(500);
    res.send(error.message);
  }
};

/// Metodo GET de un producto por su Id.
export const getProductById = async (req, res) => {
  const { id } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("idProductOkas", sql.Int, id)
    .query(queries.getProductById);

  console.log(result);
  res.send(result.recordset[0]);
};

/// Metodo DELETE de un producto por su Id.
export const deleteProductById = async (req, res) => {
  const { id } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("idProductOkas", sql.Int, id)
    .query(queries.deleteProductById);

  console.log(result);
  // res.send(result.recordset);
  res.sendStatus(204);
};

/// Metodo GET que trae la cantidad de Productos que hay.
export const getTotalProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(queries.getTotalProducts);

    res.json(result.recordset[0])

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


/// Metodo PUT que actualiza los datos de un Producto segun su Id.
export const updateProductById = async (req,res) =>{
  const { nombre, descripcion, cantidad} = req.body;
  const { id } = req.params;  
  
  if ( nombre == null || descripcion == null || cantidad == null ) {
    return res
      .status(400)
      .json({ msg: "Bad Request, Debe llenar todos los campos" });
  }

  const pool = await getConnection();
  await pool
  .request()
  .input("nombreOkas", sql.NVarChar, nombre)
  .input("descripcionOkas", sql.Text, descripcion)
  .input("cantidadOkas", sql.Int, cantidad)
  .input("idProductOkas", sql.Int, id)
  .query(queries.updateProductById);

  res.json({ id, nombre, descripcion, cantidad });

}
