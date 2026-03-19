// contexts/DatabaseMigrationContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type DbMode = 'current' | 'upgrade' | 'postgresql';

interface DatabaseMigrationContextType {
  dbMode: DbMode;
  setDbMode: (mode: DbMode) => void;
}

const DatabaseMigrationContext = createContext<DatabaseMigrationContextType | undefined>(undefined);

export function DatabaseMigrationProvider({ children }: { children: ReactNode }) {
  const [dbMode, setDbMode] = useState<DbMode>('current');

  return (
    <DatabaseMigrationContext.Provider value={{ dbMode, setDbMode }}>
      {children}
    </DatabaseMigrationContext.Provider>
  );
}

export function useDatabaseMigration() {
  const context = useContext(DatabaseMigrationContext);
  if (!context) {
    throw new Error('useDatabaseMigration must be used within DatabaseMigrationProvider');
  }
  return context;
}