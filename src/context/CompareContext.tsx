import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CarSpec } from '@/data/cars';

interface CompareContextType {
  compareList: CarSpec[];
  addToCompare: (car: CarSpec) => void;
  removeFromCompare: (carId: string) => void;
  clearCompare: () => void;
  isInCompare: (carId: string) => boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export function CompareProvider({ children }: { children: ReactNode }) {
  const [compareList, setCompareList] = useState<CarSpec[]>([]);

  const addToCompare = (car: CarSpec) => {
    setCompareList(prev => {
      if (prev.length >= 3) return prev; // Max 3 cars
      if (prev.find(c => c.id === car.id)) return prev; // Already in list
      return [...prev, car];
    });
  };

  const removeFromCompare = (carId: string) => {
    setCompareList(prev => prev.filter(car => car.id !== carId));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const isInCompare = (carId: string) => {
    return compareList.some(car => car.id === carId);
  };

  return (
    <CompareContext.Provider value={{
      compareList,
      addToCompare,
      removeFromCompare,
      clearCompare,
      isInCompare
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