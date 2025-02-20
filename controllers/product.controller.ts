import { Request, Response } from "express";
import Product from "../models/product.model"; // Ensure this file is also converted to TypeScript

// Create a new product

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    
    const product = await Product.create(req.body);
    res.status(201).json({ message: "Product created successfully", status: true, data: product });
  } catch (err) {
    res.status(500).json({ message: "Failed to create product", status: false, data: null });
  }
};

// Get all products
export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('asdasd1');
    const products = await Product.getAll();
    res.status(200).json({ message: "Data fetched successfully", status: true, data: products });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products", status: false, data: null });
  }
};

// Get a product by ID
export const getProductById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const product = await Product.getById(Number(req.params.id));
    if (!product) {
      return res.status(404).json({ message: "Product not found", status: false, data: null });
    }
    return res.status(200).json({ message: "Product fetched successfully", status: true, data: product });
  } catch (err) {
    return res.status(500).json({ message: "Failed to fetch product", status: false, data: null });
  }
};

// Update a product
export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    await Product.update(Number(req.params.id), req.body);
    res.status(200).json({ message: "Product updated successfully", status: true, data: null });
  } catch (err) {
    res.status(500).json({ message: "Failed to update product", status: false, data: null });
  }
};

// Delete a product
export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    await Product.delete(Number(req.params.id));
    res.status(200).json({ message: "Product deleted successfully", status: true, data: null });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete product", status: false, data: null });
  }
};
