import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '../types';

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  addItem: (product: Product, quantity?: number, selectedSize?: string, includeBlessingRitual?: boolean, selectedOption?: string) => void;
  removeItem: (productId: string, selectedSize?: string) => void;
  updateQuantity: (productId: string, quantity: number, selectedSize?: string) => void;
  clearCart: () => void;
  totalItemsCount: number;
  subtotal: number;
  discountCode: string;
  discountPercent: number;
  discountAmount: number;
  total: number;
  freeShippingThreshold: number;
  freeShippingRemaining: number;
  specialInstructions: string;
  setSpecialInstructions: (instructions: string) => void;
  applyDiscount: (code: string) => { success: boolean; message: string };
  removeDiscount: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'angel_soul_cart_items';
const INSTRUCTIONS_STORAGE_KEY = 'angel_soul_cart_instructions';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);
  const [specialInstructions, setSpecialInstructions] = useState(() => {
    try {
      return localStorage.getItem(INSTRUCTIONS_STORAGE_KEY) || '';
    } catch {
      return '';
    }
  });

  const [discountCode, setDiscountCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [items]);

  useEffect(() => {
    try {
      localStorage.setItem(INSTRUCTIONS_STORAGE_KEY, specialInstructions);
    } catch (e) {
      console.error('Failed to save special instructions', e);
    }
  }, [specialInstructions]);

  const addItem = (
    product: Product,
    quantity = 1,
    selectedSize?: string,
    includeBlessingRitual = true,
    selectedOption?: string
  ) => {
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === selectedSize && item.selectedOption === selectedOption
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
          includeBlessingRitual: updated[existingIndex].includeBlessingRitual || includeBlessingRitual,
        };
        return updated;
      } else {
        return [
          ...prevItems,
          {
            product,
            quantity,
            selectedSize: selectedSize || (product.availableSizes ? product.availableSizes[0] : undefined),
            includeBlessingRitual,
            selectedOption,
          },
        ];
      }
    });
    setIsOpen(true);
  };

  const removeItem = (productId: string, selectedSize?: string) => {
    setItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.product.id === productId && item.selectedSize === selectedSize)
      )
    );
  };

  const updateQuantity = (productId: string, quantity: number, selectedSize?: string) => {
    if (quantity <= 0) {
      removeItem(productId, selectedSize);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.product.id === productId && item.selectedSize === selectedSize) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setItems([]);
    setDiscountCode('');
    setDiscountPercent(0);
  };

  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const freeShippingThreshold = 1999;
  const freeShippingRemaining = Math.max(0, freeShippingThreshold - subtotal);

  const applyDiscount = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'SOUL10') {
      setDiscountCode('SOUL10');
      setDiscountPercent(10);
      return { success: true, message: 'Sacred 10% Soul Blessing applied!' };
    }
    if (cleanCode === 'ARTI15') {
      setDiscountCode('ARTI15');
      setDiscountPercent(15);
      return { success: true, message: 'Special 15% Healer Discount applied!' };
    }
    return { success: false, message: 'Invalid or expired cosmic promo code.' };
  };

  const removeDiscount = () => {
    setDiscountCode('');
    setDiscountPercent(0);
  };

  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const total = Math.max(0, subtotal - discountAmount);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        setIsOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItemsCount,
        subtotal,
        discountCode,
        discountPercent,
        discountAmount,
        total,
        freeShippingThreshold,
        freeShippingRemaining,
        specialInstructions,
        setSpecialInstructions,
        applyDiscount,
        removeDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
