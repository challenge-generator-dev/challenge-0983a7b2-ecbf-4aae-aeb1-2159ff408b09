import { productApi } from '../api/productApi';
import {
  Product,
  ProductCreateDTO,
  ProductUpdateDTO,
  validateProduct,
  validateProductUpdate,
  ProductValidationError,
} from '../models/Product';

export interface ProductFilter {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  searchQuery?: string;
}

export interface ProductResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}

class ProductService {
  async getAllProducts(): Promise<ProductResult<Product[]>> {
    try {
      const products = await productApi.getAllProducts();
      return { success: true, data: products };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido al obtener productos';
      return { success: false, error: message };
    }
  }

  async getProductById(id: number): Promise<ProductResult<Product>> {
    if (!id || id <= 0) {
      return { success: false, error: 'ID de producto inválido' };
    }

    try {
      const product = await productApi.getProductById(id);
      return { success: true, data: product };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido al obtener el producto';
      return { success: false, error: message };
    }
  }

  async getFilteredProducts(filter: ProductFilter): Promise<ProductResult<Product[]>> {
    try {
      let products = await productApi.getAllProducts();

      if (filter.category) {
        products = products.filter((p) => p.category === filter.category);
      }

      if (filter.minPrice !== undefined) {
        products = products.filter((p) => p.price >= filter.minPrice!);
      }

      if (filter.maxPrice !== undefined) {
        products = products.filter((p) => p.price <= filter.maxPrice!);
      }

      if (filter.inStock) {
        products = products.filter((p) => p.stock > 0);
      }

      if (filter.searchQuery) {
        const query = filter.searchQuery.toLowerCase();
        products = products.filter(
          (p) =>
            p.name.toLowerCase().includes(query) ||
            p.description?.toLowerCase().includes(query)
        );
      }

      return { success: true, data: products };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido al filtrar productos';
      return { success: false, error: message };
    }
  }

  async createProduct(productData: ProductCreateDTO): Promise<ProductResult<Product>> {
    const validation = validateProduct(productData);
    if (!validation.success) {
      return {
        success: false,
        error: `Validación fallida: ${validation.errors.map((e) => e.message).join(', ')}`,
      };
    }

    try {
      const exists = await productApi.checkProductExistsByName(productData.name);
      if (exists) {
        return { success: false, error: 'Ya existe un producto con este nombre' };
      }

      const product = await productApi.createProduct(productData);
      return { success: true, data: product };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido al crear el producto';
      return { success: false, error: message };
    }
  }

  async updateProduct(id: number, productData: ProductUpdateDTO): Promise<ProductResult<Product>> {
    if (!id || id <= 0) {
      return { success: false, error: 'ID de producto inválido' };
    }

    const validation = validateProductUpdate(productData);
    if (!validation.success) {
      return {
        success: false,
        error: `Validación fallida: ${validation.errors.map((e) => e.message).join(', ')}`,
      };
    }

    try {
      if (productData.name) {
        const exists = await productApi.checkProductExistsByName(productData.name, id);
        if (exists) {
          return { success: false, error: 'Ya existe otro producto con este nombre' };
        }
      }

      const product = await productApi.updateProduct(id, productData);
      return { success: true, data: product };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido al actualizar el producto';
      return { success: false, error: message };
    }
  }

  async deleteProduct(id: number): Promise<ProductResult<void>> {
    if (!id || id <= 0) {
      return { success: false, error: 'ID de producto inválido' };
    }

    try {
      await productApi.deleteProduct(id);
      return { success: true };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido al eliminar el producto';
      return { success: false, error: message };
    }
  }

  async getProductsByCategory(category: string): Promise<ProductResult<Product[]>> {
    if (!category || category.trim() === '') {
      return { success: false, error: 'Categoría no especificada' };
    }

    try {
      const products = await productApi.getProductsByCategory(category);
      return { success: true, data: products };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido al obtener productos por categoría';
      return { success: false, error: message };
    }
  }

  async searchProducts(query: string): Promise<ProductResult<Product[]>> {
    if (!query || query.trim() === '') {
      return { success: false, error: 'Término de búsqueda no especificado' };
    }

    try {
      const products = await productApi.searchProducts(query);
      return { success: true, data: products };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido al buscar productos';
      return { success: false, error: message };
    }
  }

  async getLowStockProducts(threshold: number = 10): Promise<ProductResult<Product[]>> {
    try {
      const products = await productApi.getAllProducts();
      const lowStock = products.filter((p) => p.stock > 0 && p.stock <= threshold);
      return { success: true, data: lowStock };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido al obtener productos con bajo stock';
      return { success: false, error: message };
    }
  }

  async getOutOfStockProducts(): Promise<ProductResult<Product[]>> {
    try {
      const products = await productApi.getAllProducts();
      const outOfStock = products.filter((p) => p.stock === 0);
      return { success: true, data: outOfStock };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido al obtener productos sin stock';
      return { success: false, error: message };
    }
  }

  calculateTotalInventoryValue(products: Product[]): number {
    return products.reduce((total, product) => total + product.price * product.stock, 0);
  }

  calculateAveragePrice(products: Product[]): number {
    if (products.length === 0) return 0;
    const total = products.reduce((sum, p) => sum + p.price, 0);
    return total / products.length;
  }

  groupByCategory(products: Product[]): Record<string, Product[]> {
    return products.reduce((groups, product) => {
      const category = product.category || 'Sin categoría';
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(product);
      return groups;
    }, {} as Record<string, Product[]>);
  }
}

export const productService = new ProductService();
export default productService;