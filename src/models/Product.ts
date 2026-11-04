/**
 * Modelo que define la estructura de un producto en el sistema de gestión de inventario.
 * Incluye validaciones básicas para asegurar integridad de datos.
 */

import { z } from 'zod';

// Esquema de validación para el modelo Product utilizando Zod
// Esto asegura que los datos cumplan con las reglas de negocio antes de ser procesados
export const ProductSchema = z.object({
  id: z.string().uuid().optional(), // ID opcional para casos de creación
  name: z.string()
    .min(1, { message: 'El nombre del producto es requerido' })
    .max(100, { message: 'El nombre no puede exceder 100 caracteres' }),
  price: z.number()
    .positive({ message: 'El precio debe ser un valor positivo' })
    .min(0.01, { message: 'El precio debe ser mayor a 0' }),
  stock: z.number()
    .int({ message: 'El stock debe ser un número entero' })
    .nonnegative({ message: 'El stock no puede ser negativo' }),
  category: z.string()
    .min(1, { message: 'La categoría es requerida' })
    .max(50, { message: 'La categoría no puede exceder 50 caracteres' }),
  description: z.string().max(500, { message: 'La descripción no puede exceder 500 caracteres' }).optional(),
  createdAt: z.date().optional(), // Se asigna automáticamente en el backend
  updatedAt: z.date().optional()  // Se actualiza automáticamente en el backend
});

// Tipo TypeScript derivado del esquema Zod para uso en el código
export type Product = z.infer<typeof ProductSchema>;

// Interfaz para los DTOs de creación y actualización de productos
export interface ProductCreateDTO {
  name: string;
  price: number;
  stock: number;
  category: string;
  description?: string;
}

export interface ProductUpdateDTO {
  name?: string;
  price?: number;
  stock?: number;
  category?: string;
  description?: string;
}

// Clase de error personalizada para validaciones de producto
export class ProductValidationError extends Error {
  constructor(public errors: z.ZodIssue[]) {
    super('Error de validación en el producto');
    this.name = 'ProductValidationError';
  }
}

/**
 * Valida un objeto Product utilizando el esquema Zod
 * @param productData Datos del producto a validar
 * @returns Product validado
 * @throws ProductValidationError si la validación falla
 */
export function validateProduct(productData: unknown): Product {
  const result = ProductSchema.safeParse(productData);
  
  if (!result.success) {
    throw new ProductValidationError(result.error.issues);
  }
  
  return result.data;
}

/**
 * Convierte un Product a ProductCreateDTO
 * @param product Producto a convertir
 * @returns ProductCreateDTO listo para enviar al backend
 */
export function toProductCreateDTO(product: Product): ProductCreateDTO {
  return {
    name: product.name,
    price: product.price,
    stock: product.stock,
    category: product.category,
    description: product.description
  };
}

/**
 * Convierte un Product a ProductUpdateDTO
 * @param product Producto a convertir
 * @returns ProductUpdateDTO listo para enviar al backend
 */
export function toProductUpdateDTO(product: Product): ProductUpdateDTO {
  return {
    name: product.name,
    price: product.price,
    stock: product.stock,
    category: product.category,
    description: product.description
  };
}

/**
 * Crea un producto con valores por defecto
 * @returns Product con valores iniciales válidos
 */
export function createEmptyProduct(): Product {
  return {
    name: '',
    price: 0.01,
    stock: 0,
    category: '',
    description: ''
  };
}