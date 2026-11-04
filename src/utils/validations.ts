import { Product, ProductCreateDTO, ProductUpdateDTO } from '../models/Product';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export function validatePrice(price: number): ValidationResult {
  const errors: string[] = [];
  
  if (typeof price !== 'number' || isNaN(price)) {
    errors.push('El precio debe ser un número válido');
  } else if (price < 0) {
    errors.push('El precio no puede ser negativo');
  } else if (price > 999999.99) {
    errors.push('El precio excede el límite máximo permitido');
  } else if (!Number.isFinite(price)) {
    errors.push('El precio debe ser un número finito');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validateProductName(name: string, existingNames: string[] = []): ValidationResult {
  const errors: string[] = [];
  
  if (!name || typeof name !== 'string') {
    errors.push('El nombre es obligatorio');
  } else {
    const trimmedName = name.trim();
    
    if (trimmedName.length === 0) {
      errors.push('El nombre no puede estar vacío');
    } else if (trimmedName.length < 2) {
      errors.push('El nombre debe tener al menos 2 caracteres');
    } else if (trimmedName.length > 100) {
      errors.push('El nombre no puede exceder 100 caracteres');
    }

    const nameExists = existingNames.some(
      existing => existing.toLowerCase() === trimmedName.toLowerCase()
    );
    
    if (nameExists) {
      errors.push(`Ya existe un producto con el nombre "${trimmedName}"`);
    }

    const invalidChars = /[<>"'&]/;
    if (invalidChars.test(trimmedName)) {
      errors.push('El nombre contiene caracteres no permitidos');
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validateStock(stock: number): ValidationResult {
  const errors: string[] = [];
  
  if (typeof stock !== 'number' || isNaN(stock)) {
    errors.push('El stock debe ser un número válido');
  } else if (!Number.isInteger(stock)) {
    errors.push('El stock debe ser un número entero');
  } else if (stock < 0) {
    errors.push('El stock no puede ser negativo');
  } else if (stock > 10000) {
    errors.push('El stock excede el límite máximo permitido');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validateCategory(category: string): ValidationResult {
  const errors: string[] = [];
  const validCategories = [
    'Electrónica',
    'Ropa',
    'Alimentos',
    'Hogar',
    'Deportes',
    'Juguetes',
    'Libros',
    'Otros'
  ];
  
  if (!category || typeof category !== 'string') {
    errors.push('La categoría es obligatoria');
  } else {
    const trimmedCategory = category.trim();
    
    if (trimmedCategory.length === 0) {
      errors.push('La categoría no puede estar vacía');
    } else if (trimmedCategory.length > 50) {
      errors.push('La categoría no puede exceder 50 caracteres');
    } else if (!validCategories.some(c => c.toLowerCase() === trimmedCategory.toLowerCase())) {
      errors.push(`Categoría inválida. Las categorías válidas son: ${validCategories.join(', ')}`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validateProductData(
  data: ProductCreateDTO | ProductUpdateDTO,
  existingNames: string[] = []
): ValidationResult {
  const allErrors: string[] = [];

  if ('nombre' in data && data.nombre !== undefined) {
    const nameResult = validateProductName(data.nombre, existingNames);
    allErrors.push(...nameResult.errors);
  }

  if ('precio' in data && data.precio !== undefined) {
    const priceResult = validatePrice(data.precio);
    allErrors.push(...priceResult.errors);
  }

  if ('stock' in data && data.stock !== undefined) {
    const stockResult = validateStock(data.stock);
    allErrors.push(...stockResult.errors);
  }

  if ('categoría' in data && data.categoría !== undefined) {
    const categoryResult = validateCategory(data.categoría);
    allErrors.push(...categoryResult.errors);
  }

  return {
    isValid: allErrors.length === 0,
    errors: allErrors
  };
}

export function validateCompleteProduct(product: Product): ValidationResult {
  const allErrors: string[] = [];
  
  const nameResult = validateProductName(product.nombre);
  allErrors.push(...nameResult.errors);

  const priceResult = validatePrice(product.precio);
  allErrors.push(...priceResult.errors);

  const stockResult = validateStock(product.stock);
  allErrors.push(...stockResult.errors);

  const categoryResult = validateCategory(product.categoría);
  allErrors.push(...categoryResult.errors);

  if (!product.id || product.id <= 0) {
    allErrors.push('ID de producto inválido');
  }

  return {
    isValid: allErrors.length === 0,
    errors: allErrors
  };
}

export function sanitizeProductInput(input: string): string {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/<[^>]*>/g, '')
    .replace(/["']/g, '')
    .replace(/&/g, '&amp;')
    .substring(0, 100);
}

export function formatPriceForDisplay(price: number, currency: string = 'USD'): string {
  if (typeof price !== 'number' || isNaN(price)) {
    return '0.00';
  }

  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price);
}

export function parsePriceInput(input: string): number | null {
  const cleaned = input.replace(/[^0-9.,-]/g, '').replace(',', '.');
  const parsed = parseFloat(cleaned);
  
  if (isNaN(parsed)) {
    return null;
  }
  
  return Math.round(parsed * 100) / 100;
}