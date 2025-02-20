import { RowDataPacket, ResultSetHeader } from "mysql2";
import { connection } from "../config/db"; // Ensure db.ts is properly set up

// Define the Product Type
export interface ProductType {
  id?: number;
  name: string;
  price: number;
  description: string;
}

class Product {
  // Create a new product
  static async create(product: ProductType): Promise<number> {
    const { name, price, description } = product;
    const query = "INSERT INTO products (name, price, description) VALUES (?, ?, ?)";
    
    const [result] = await connection
      .promise()
      .query<ResultSetHeader>(query, [name, price, description]);
    
    return result.insertId;
  }

  // Get all products
  static async getAll(): Promise<ProductType[]> {
    const query = "SELECT * FROM products";
    
    const [rows] = await connection.promise().query<ProductType[] & RowDataPacket[]>(query);
    
    return rows;
  }

  // Get a product by ID
  static async getById(id: number): Promise<ProductType | null> {
    const query = "SELECT * FROM products WHERE id = ?";
    
    const [rows] = await connection.promise().query<ProductType[] & RowDataPacket[]>(query, [id]);
    
    return rows.length > 0 ? rows[0] : null;
  }

  // Update a product
  static async update(id: number, product: ProductType): Promise<void> {
    const { name, price, description } = product;
    const query = "UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?";
    
    await connection.promise().query(query, [name, price, description, id]);
  }

  // Delete a product
  static async delete(id: number): Promise<void> {
    const query = "DELETE FROM products WHERE id = ?";
    
    await connection.promise().query(query, [id]);
  }
}

export default Product;
