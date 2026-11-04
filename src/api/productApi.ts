import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';
import { Product, ProductCreateDTO, ProductUpdateDTO } from '../models/Product';

const API_BASE_URL = 'http://localhost:3001';

class ProductApi {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.response) {
          console.error('Error de respuesta del servidor:', error.response.status);
        } else if (error.request) {
          console.error('No se recibió respuesta del servidor');
        } else {
          console.error('Error al configurar la solicitud:', error.message);
        }
        return Promise.reject(error);
      }
    );
  }

  async getAllProducts(): Promise<Product[]> {
    try {
      const response: AxiosResponse<Product[]> = await this.client.get<Product[]>('/products');
      return response.data;
    } catch (error) {
      console.error('Error al obtener todos los productos:', error);
      throw error;
    }
  }

  async getProductById(id: number): Promise<Product> {
    try {
      const response: AxiosResponse<Product> = await this.client.get<Product>(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener el producto con ID ${id}:`, error);
      throw error;
    }
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    try {
      const response: AxiosResponse<Product[]> = await this.client.get<Product[]>(
        '/products',
        { params: { category } }
      );
      return response.data;
    } catch (error) {
      console.error(`Error al obtener productos de la categoría ${category}:`, error);
      throw error;
    }
  }

  async searchProducts(query: string): Promise<Product[]> {
    try {
      const response: AxiosResponse<Product[]> = await this.client.get<Product[]>('/products', {
        params: { q: query },
      });
      return response.data;
    } catch (error) {
      console.error(`Error al buscar productos con query "${query}":`, error);
      throw error;
    }
  }

  async createProduct(product: ProductCreateDTO): Promise<Product> {
    try {
      const response: AxiosResponse<Product> = await this.client.post<Product>(
        '/products',
        product
      );
      return response.data;
    } catch (error) {
      console.error('Error al crear el producto:', error);
      throw error;
    }
  }

  async updateProduct(id: number, product: ProductUpdateDTO): Promise<Product> {
    try {
      const response: AxiosResponse<Product> = await this.client.patch<Product>(
        `/products/${id}`,
        product
      );
      return response.data;
    } catch (error) {
      console.error(`Error al actualizar el producto con ID ${id}:`, error);
      throw error;
    }
  }

  async deleteProduct(id: number): Promise<void> {
    try {
      await this.client.delete(`/products/${id}`);
    } catch (error) {
      console.error(`Error al eliminar el producto con ID ${id}:`, error);
      throw error;
    }
  }

  async checkProductExistsByName(name: string, excludeId?: number): Promise<boolean> {
    try {
      const products = await this.getAllProducts();
      return products.some(
        (p) => p.name.toLowerCase() === name.toLowerCase() && p.id !== excludeId
      );
    } catch (error) {
      console.error('Error al verificar existencia del producto:', error);
      throw error;
    }
  }
}

export const productApi = new ProductApi();
export default productApi;