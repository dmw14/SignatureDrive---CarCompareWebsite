import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CarSpec, CarVariant } from '@/data/cars';

interface CompareItem {
  car: CarSpec;
  selectedVariantIndex: number;
}

interface CompareContextType {
  compareList: CompareItem[];
  addToCompare: (car: CarSpec) => void;
  removeFromCompare: (carId: string) => void;
  clearCompare: () => void;
  isInCompare: (carId: string) => boolean;
  updateVariant: (carId: string, variantIndex: number) => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export function CompareProvider({ children }: { children: ReactNode }) {
  const [compareList, setCompareList] = useState<CompareItem[]>([]);

  const addToCompare = (car: CarSpec) => {
    setCompareList(prev => {
      if (prev.length >= 3) return prev; // Max 3 cars
      if (prev.find(c => c.car.id === car.id)) return prev; // Already in list
      return [...prev, { car, selectedVariantIndex: 0 }];
    });
  };

  const removeFromCompare = (carId: string) => {
    setCompareList(prev => prev.filter(item => item.car.id !== carId));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const isInCompare = (carId: string) => {
    return compareList.some(item => item.car.id === carId);
  };

  const updateVariant = (carId: string, variantIndex: number) => {
    setCompareList(prev => 
      prev.map(item => 
        item.car.id === carId 
          ? { ...item, selectedVariantIndex: variantIndex }
          : item
      )
    );
  };

  return (
    <CompareContext.Provider value={{
      compareList,
      addToCompare,
      removeFromCompare,
      clearCompare,
      isInCompare,
      updateVariant
    }}>
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
}