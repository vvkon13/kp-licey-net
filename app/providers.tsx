'use client';

import { HeroUIProvider } from "@heroui/react";
import { DatabaseMigrationProvider } from '@/contexts/DatabaseMigrationContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <DatabaseMigrationProvider>
        {children}
      </DatabaseMigrationProvider>
    </HeroUIProvider>
  );
}