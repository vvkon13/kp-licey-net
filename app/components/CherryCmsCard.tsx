// components/Proposal/CherryCmsCard.tsx
"use client";
import { Card, CardBody } from '@heroui/card';
import { Chip } from '@heroui/chip';
import { CogIcon, CheckCircleIcon, ArrowDownIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { useDatabaseMigration } from '@/contexts/DatabaseMigrationContext';

export function CherryCmsCard() {
  const { dbMode } = useDatabaseMigration();
  const isWarning = dbMode !== 'current';

  const items = [
    "Разработчик: cherepkova.ru",
    "Нет публичной документации",
    "Менеджеры работают в привычном интерфейсе",
    "Ввод товаров, управление заказами",
  ];

  return (
    <Card className={`bg-legacy-50 transition-color duration-300 ${isWarning ? 'bg-gray-50' : ''}`}>
      <CardBody className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <CogIcon className="w-5 h-5 text-legacy-600" />
            <h3 className="text-lg font-bold text-gray-800">CherryCMS</h3>
          </div>
          <Chip color="warning" variant="flat">Самописная</Chip>
        </div>
        
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <CheckCircleIcon className="w-4 h-4 text-legacy-500 mt-0.5 mr-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Warning при смене режима БД */}
        {isWarning && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
            <ExclamationTriangleIcon className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-red-800">
              {dbMode === 'upgrade' 
                ? 'Возможны нарушения в работе админки — требуется тестирование'
                : 'Самописная CMS может потребовать адаптации под новую БД'}
            </p>
          </div>
        )}
        
        <p className="text-xs text-gray-500 mt-4 italic">
          ✅ Предлагаем не трогать админку на старте — сотрудники продолжают работать как привыкли
        </p>

        {/* Стрелка-связь */}
        <div className="absolute bottom-4 right-4 text-legacy-400">
          <ArrowDownIcon className="w-5 h-5 animate-bounce" />
        </div>
      </CardBody>
    </Card>
  );
}