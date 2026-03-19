// contexts/ApiLayerHoverContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ApiLayerHoverContextType {
  isApiLayerHovered: boolean;
  setIsApiLayerHovered: (hovered: boolean) => void;
}

const ApiLayerHoverContext = createContext<ApiLayerHoverContextType | undefined>(undefined);

export function ApiLayerHoverProvider({ children }: { children: ReactNode }) {
  const [isApiLayerHovered, setIsApiLayerHovered] = useState(false);

  return (
    <ApiLayerHoverContext.Provider value={{ isApiLayerHovered, setIsApiLayerHovered }}>
      {children}
    </ApiLayerHoverContext.Provider>
  );
}

export function useApiLayerHover() {
  const context = useContext(ApiLayerHoverContext);
  if (!context) {
    throw new Error('useApiLayerHover must be used within ApiLayerHoverProvider');
  }
  return context;
}