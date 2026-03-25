import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CompareContextType {
  compareList: string[];
  addToCompare: (car: any) => void;
  removeFromCompare: (carId: string) => void;
  clearCompare: () => void;
  isInCompare: (carId: string) => boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export function CompareProvider({ children }: { children: ReactNode }) {
  const [compareList, setCompareList] = useState<string[]>([]);

  const addToCompare = (car: any) => {
    setCompareList((prev) => {
      const carId = String(car.id);
      if (prev.length >= 3) return prev; // Max 3
      if (prev.includes(carId)) return prev; // Already added
      return [...prev, carId];
    });
  };

  const removeFromCompare = (carId: string) => {
    const normalizedId = String(carId);
    setCompareList((prev) => prev.filter((id) => id !== normalizedId));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const isInCompare = (carId: string) => {
    return compareList.includes(String(carId));
  };

  return (
    <CompareContext.Provider
      value={{
        compareList,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isInCompare,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within CompareProvider');
  }
  return context;
}