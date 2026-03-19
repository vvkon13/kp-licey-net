// components/Proposal/CurrentSiteCard.tsx
"use client";
import { Card, CardBody } from '@heroui/card';
import { Chip } from '@heroui/chip';
import { ComputerDesktopIcon, CheckCircleIcon, ArrowDownIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { useDatabaseMigration } from '@/contexts/DatabaseMigrationContext';

export function CurrentSiteCard() {
  const { dbMode } = useDatabaseMigration();
  const isWarning = dbMode !== 'current';

  const items = [
    "PHP 5.5.37 (устарел с 2016)",
    "Кодировка: windows-1251",
    "jQuery 1.11.2 + статический фронтенд",
    "Нет адаптивности под мобильные",
    "PageSpeed: ~35/100 Desktop, ~25/100 Mobile",
  ];

  return (
    <Card className={`bg-legacy-50 transition-color duration-300 ${isWarning ? 'bg-gray-50' : ''}`}>
      <CardBody className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ComputerDesktopIcon className="w-12 h-12 text-legacy-600" />
            <h3 className="text-2xl font-bold text-gray-800">Текущий сайт</h3>
          </div>
          <Chip color="warning" variant="flat">Legacy</Chip>
        </div>
        
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <CheckCircleIcon className="w-4 h-4 text-legacy-500 mt-0.5 mr-2 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Warning при смене режима БД */}
        {isWarning && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
            <ExclamationTriangleIcon className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <p className="text-xs text-red-800">
              При миграции БД потребуется тестирование и возможна доработка кода сайта
            </p>
          </div>
        )}
        
        <p className="text-xs text-gray-500 mt-4 italic">
          Сайт работает, но требует модернизации для безопасности и конверсии
        </p>

        {/* Стрелка-связь */}
        <div className="absolute bottom-4 right-4 text-legacy-400">
          <ArrowDownIcon className="w-5 h-5 animate-bounce" />
        </div>
      </CardBody>
    </Card>
  );
}