import React from 'react';
import { ProductsPage } from './ProductsPage';
import { SessionsPage } from './SessionsPage';

interface AllProductsAndServicesPageProps {
  initialTab?: 'all' | 'products' | 'services';
}

export const AllProductsAndServicesPage: React.FC<AllProductsAndServicesPageProps> = ({ initialTab = 'all' }) => {
  if (initialTab === 'services') {
    return <SessionsPage />;
  }
  return <ProductsPage />;
};
