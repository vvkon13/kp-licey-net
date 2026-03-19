// components/Proposal/SafetyNoteCard.tsx
"use client";
import { Card, CardBody } from '@heroui/card';
import { Chip } from '@heroui/chip';
import { ShieldCheckIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export function SafetyNoteCard() {
  const items = [
    "Разработка ведётся на <b>копии БД</b> в изолированной среде",
    "Продакшен-БД не затрагивается до финального тестирования",
    "Результат каждого этапа — готовая, работающая часть приложения",
    "Возможность отката в любой момент",
    "При необходимости — параллельная работа старого и нового сайта",
  ];

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow bg-safe-50">
      <CardBody className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <ShieldCheckIcon className="w-12 h-12 text-safe-600" />
          <Chip color="success" variant="flat">Безопасно</Chip>
          <h4 className="font-semibold text-gray-800 text-2xl">Как мы работаем</h4>
        </div>
        
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <CheckCircleIcon className="w-4 h-4 text-safe-500 mt-0.5 mr-2 shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}