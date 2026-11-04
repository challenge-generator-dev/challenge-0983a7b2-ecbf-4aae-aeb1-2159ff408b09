import { useState, useCallback, useEffect } from 'react';
import { Product } from '../models/Product';
import { ProductForm } from '../components/ProductForm';
import { ProductList } from '../components/ProductList';
import { useProducts } from '../hooks/useProducts';
import { productService } from '../services/productService';

export function Home() {
  const { products, loading, error, refreshProducts } = useProducts();
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    if (error) {
      showNotification('error', error);
    }
  }, [error]);

  const showNotification = useCallback((type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  }, []);

  const handleCreateClick = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleEditClick = (product: Product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleFormSuccess = useCallback(() => {
    setShowForm(false);
    setEditingProduct(null);
    refreshProducts();
    showNotification('success', editingProduct ? 'Producto actualizado correctamente' : 'Producto creado correctamente');
  }, [editingProduct, refreshProducts, showNotification]);

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  const handleRefresh = useCallback(() => {
    refreshProducts();
  }, [refreshProducts]);

  const getStatistics = useCallback(() => {
    const total = products.length;
    const totalValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);
    const outOfStock = products.filter(p => p.stock === 0).length;
    const lowStock = products.filter(p => p.stock > 0 && p.stock < 10).length;

    return { total, totalValue, outOfStock, lowStock };
  }, [products]);

  const stats = getStatistics();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Sistema de Gestión de Inventario
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {notification && (
          <div
            className={`mb-4 p-4 rounded-lg shadow-md ${
              notification.type === 'success'
                ? 'bg-green-100 border border-green-400 text-green-700'
                : 'bg-red-100 border border-red-400 text-red-700'
            }`}
          >
            {notification.message}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-sm font-medium text-gray-500">Total de Productos</div>
            <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-sm font-medium text-gray-500">Valor Total del Inventario</div>
            <div className="text-2xl font-bold text-gray-900">${stats.totalValue.toFixed(2)}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-sm font-medium text-gray-500">Productos Agotados</div>
            <div className={`text-2xl font-bold ${stats.outOfStock > 0 ? 'text-red-600' : 'text-gray-900'}`}>
              {stats.outOfStock}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-sm font-medium text-gray-500">Stock Bajo</div>
            <div className={`text-2xl font-bold ${stats.lowStock > 0 ? 'text-yellow-600' : 'text-gray-900'}`}>
              {stats.lowStock}
            </div>
          </div>
        </div>

        <div className="mb-6 flex justify-end">
          <button
            onClick={handleCreateClick}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            + Nuevo Producto
          </button>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <ProductForm
                product={editingProduct}
                onSuccess={handleFormSuccess}
                onCancel={handleFormCancel}
              />
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <span className="ml-4 text-gray-600">Cargando productos...</span>
          </div>
        ) : (
          <ProductList
            products={products}
            onEdit={handleEditClick}
            onRefresh={handleRefresh}
          />
        )}
      </main>
    </div>
  );
}