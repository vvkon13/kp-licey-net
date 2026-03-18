// components/Proposal/SafetyNoteCard.tsx
"use client"
import { Card, CardBody } from '@heroui/card';
import { Chip } from '@heroui/chip';

export function SafetyNoteCard() {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow bg-safe-50">
      <CardBody className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <Chip color="success" variant="flat">🔐 Безопасно</Chip>
          <h4 className="font-semibold text-gray-800">Как мы работаем</h4>
        </div>
        
        <ul className="space-y-2 text-gray-600 text-sm">
          <li>• Разработка ведётся на <b>копии БД</b> в изолированной среде</li>
          <li>• Продакшен-БД не затрагивается до финального тестирования</li>
          <li>• Возможность отката в любой момент</li>
          <li>• При необходимости — параллельная работа старого и нового сайта</li>
        </ul>
      </CardBody>
    </Card>
  );
}