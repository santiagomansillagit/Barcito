
export const queries = {
    getAllProducts: 'SELECT * FROM Productos',
    addNewProduc: 'INSERT INTO Productos (Nombre, Descripcion, Cantidad VALUES (@nombreOkas, @descipcionOkas, @cantidadOkas)',
    getProductById: 'SELECT * FROM Productos WHERE Id = @idProductOkas',
    deleteProductById: 'DELETE Productos WHERE Id = @idProductOkas',
    getTotalProducts: 'SELECT COUNT(*) FROM Productos',
    updateProductById: 'UPDATE Productos SET Nombre = @nombreOkas, Descripcion = @descripcionOkas, Cantidad = @cantidadOkas WHERE Id = @idProductOkas'
}