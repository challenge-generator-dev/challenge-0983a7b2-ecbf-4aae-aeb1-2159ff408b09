import { useState, useCallback, useEffect } from 'react';
import { Product, ProductCreateDTO, ProductUpdateDTO } from '../models/Product';
import { validateProduct, validateProductUpdate, ProductValidationError } from '../models/Product';
import { productService } from '../services/productService';

export interface UseProductsReturn {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  createProduct: (data: ProductCreateDTO) => Promise<Product | null>;
  updateProduct: (id: number, data: ProductUpdateDTO) => Promise<Product | null>;
  deleteProduct: (id: number) => Promise<boolean>;
  getProductById: (id: number) => Promise<Product | null>;
  clearError: () => void;
  validationErrors: ProductValidationError | null;
}

export function useProducts(): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<ProductValidationError | null>(null);

  const fetchProducts = useCallback(async (): Promise<void> => {
    setLoading(true);
    setError(null);
    setValidationErrors(null);
    
    try {
      const data = await productService.getAll();
      setProducts(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al cargar productos';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const createProduct = useCallback(async (data: ProductCreateDTO): Promise<Product | null> => {
    setLoading(true);
    setError(null);
    setValidationErrors(null);

    try {
      const validationResult = validateProduct(data);
      
      if (!validationResult) {
        setValidationErrors(new ProductValidationError([
          { message: 'Validación fallida', code: 'custom', path: [] }
        ]));
        setLoading(false);
        return null;
      }

      const existingProducts = await productService.getAll();
      const nameExists = existingProducts.some(
        p => p.nombre.toLowerCase() === data.nombre.toLowerCase()
      );

      if (nameExists) {
        setValidationErrors(new ProductValidationError([
          { 
            message: `El producto "${data.nombre}" ya existe`, 
            code: 'custom', 
            path: ['nombre'] 
          }
        ]));
        setLoading(false);
        return null;
      }

      if (data.precio < 0) {
        setValidationErrors(new ProductValidationError([
          { 
            message: 'El precio no puede ser negativo', 
            code: 'custom', 
            path: ['precio'] 
          }
        ]));
        setLoading(false);
        return null;
      }

      const newProduct = await productService.create(data);
      setProducts(prev => [...prev, newProduct]);
      setLoading(false);
      return newProduct;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al crear producto';
      setError(errorMessage);
      setLoading(false);
      return null;
    }
  }, []);

  const updateProduct = useCallback(async (id: number, data: ProductUpdateDTO): Promise<Product | null> => {
    setLoading(true);
    setError(null);
    setValidationErrors(null);

    try {
      const validationResult = validateProductUpdate(data);
      
      if (!validationResult) {
        setValidationErrors(new ProductValidationError([
          { message: 'Validación fallida', code: 'custom', path: [] }
        ]));
        setLoading(false);
        return null;
      }

      if (data.nombre) {
        const existingProducts = await productService.getAll();
        const nameExists = existingProducts.some(
          p => p.id !== id && p.nombre.toLowerCase() === data.nombre!.toLowerCase()
        );

        if (nameExists) {
          setValidationErrors(new ProductValidationError([
            { 
              message: `Ya existe otro producto con el nombre "${data.nombre}"`, 
              code: 'custom', 
              path: ['nombre'] 
            }
          ]));
          setLoading(false);
          return null;
        }
      }

      if (data.precio !== undefined && data.precio < 0) {
        setValidationErrors(new ProductValidationError([
          { 
            message: 'El precio no puede ser negativo', 
            code: 'custom', 
            path: ['precio'] 
          }
        ]));
        setLoading(false);
        return null;
      }

      const updatedProduct = await productService.update(id, data);
      setProducts(prev => prev.map(p => p.id === id ? updatedProduct : p));
      setLoading(false);
      return updatedProduct;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al actualizar producto';
      setError(errorMessage);
      setLoading(false);
      return null;
    }
  }, []);

  const deleteProduct = useCallback(async (id: number): Promise<boolean> => {
    setLoading(true);
    setError(null);
    setValidationErrors(null);

    try {
      await productService.delete(id);
      setProducts(prev => prev.filter(p => p.id !== id));
      setLoading(false);
      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al eliminar producto';
      setError(errorMessage);
      setLoading(false);
      return false;
    }
  }, []);

  const getProductById = useCallback(async (id: number): Promise<Product | null> => {
    setLoading(true);
    setError(null);

    try {
      const product = await productService.getById(id);
      setLoading(false);
      return product;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Producto no encontrado';
      setError(errorMessage);
      setLoading(false);
      return null;
    }
  }, []);

  const clearError = useCallback((): void => {
    setError(null);
    setValidationErrors(null);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    loading,
    error,
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    clearError,
    validationErrors
  };
}