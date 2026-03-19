// components/Proposal/DatabaseCard.tsx
'use client';

import { Card, CardBody } from '@heroui/card';
import { Chip } from '@heroui/chip';
import { 
  CircleStackIcon, 
  CheckCircleIcon, 
  LinkIcon, 
  ExclamationTriangleIcon,
  XCircleIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import { useDatabaseMigration, DbMode } from '@/contexts/DatabaseMigrationContext';

export function DatabaseCard() {
  const { dbMode, setDbMode } = useDatabaseMigration();

  const tabs: Array<{
    id: DbMode;
    label: string;
    pros: string[];
    cons: string[];
  }> = [
    {
      id: 'current',
      label: 'Текущая БД',
      pros: [
        'Сайт и CherryCMS работают стабильно',
        'Все интеграции (Робокасса, email) функционируют',
        'Нет рисков при изменениях',
      ],
      cons: [
        'MySQL 5.5–5.7 устарел (нет обновлений безопасности)',
        'Кодировка windows-1251 — проблемы с совместимостью',
        'Нет поддержки современных функций (полнотекстовый поиск, JSON)',
      ],
    },
    {
      id: 'upgrade',
      label: 'Обновление MySQL',
      pros: [
        'MySQL 8.0+ — актуальная версия с патчами безопасности',
        'Конвертация в UTF-8 — совместимость с современным стеком',
        'Минимальные изменения в коде приложения',
      ],
      cons: [
        'Требуется тестирование всех интеграций',
        'Возможны временные нарушения в работе CherryCMS',
        'Необходима резервная копия и план отката',
      ],
    },
    {
      id: 'postgresql',
      label: 'Переход на PostgreSQL',
      pros: [
        'Лучшая поддержка в FastAPI/SQLAlchemy',
        'Встроенный полнотекстовый поиск (идеально для книг!)',
        'JSONB для гибких атрибутов товаров',
        'Надёжная целостность данных и транзакции',
      ],
      cons: [
        'Все интеграции потребуют адаптации под новую СУБД',
        'CherryCMS может потребовать доработки или замены',
        'Миграция данных — отдельная задача с тестированием',
      ],
    },
  ];

  const integrations = [
    { name: "Робокасса (оплата)", status: "✅ подтверждено", risk: "medium" },
    { name: "Email-уведомления", status: "✅ вероятно", risk: "low" },
    { name: "1С:Предприятие", status: "⚠️ требует проверки", risk: "high" },
  ];

  const activeTab = tabs.find(t => t.id === dbMode)!;
  const showIntegrationsWarning = dbMode !== 'current';
  const showCardsWarning = dbMode !== 'current';

  return (
    <Card className="bg-legacy-50">
      <CardBody className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <CircleStackIcon className="w-5 h-5 text-legacy-600" />
          <h3 className="text-lg font-bold text-gray-800">База данных</h3>
        </div>
        
        {/* Вертикальные табы */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 border-r pr-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setDbMode(tab.id)}
                className={`text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                  dbMode === tab.id
                    ? 'bg-modern-100 text-modern-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Контент таба: плюсы/минусы */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Плюсы */}
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-1">
                  <CheckCircleIcon className="w-4 h-4" />
                  Преимущества
                </h4>
                <ul className="space-y-1">
                  {activeTab.pros.map((pro, i) => (
                    <li key={i} className="text-sm text-green-700 flex items-start">
                      <span className="mr-2">•</span>{pro}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Минусы */}
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-1">
                  <XCircleIcon className="w-4 h-4" />
                  Риски
                </h4>
                <ul className="space-y-1">
                  {activeTab.cons.map((con, i) => (
                    <li key={i} className="text-sm text-red-700 flex items-start">
                      <span className="mr-2">•</span>{con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Chip с рекомендацией */}
            <div className="mt-3">
              <Chip 
                color={dbMode === 'current' ? 'warning' : dbMode === 'upgrade' ? 'primary' : 'success'} 
                variant="flat"
                className="font-medium"
              >
                {dbMode === 'current' ? 'Требует аудита' : dbMode === 'upgrade' ? 'Быстро' : 'Перспективно'}
              </Chip>
            </div>
          </div>
        </div>
        
        {/* Интеграции */}
        <div className="mt-6 p-4 bg-legacy-50 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <LinkIcon className="w-4 h-4 text-legacy-600" />
            <p className="text-sm font-medium text-gray-700">Возможные интеграции:</p>
          </div>
          
          <ul className="space-y-2">
            {integrations.map((item, index) => (
              <li key={index} className="flex items-start text-xs text-gray-600">
                <CheckCircleIcon className="w-3 h-3 text-legacy-500 mt-0.5 mr-2 flex-shrink-0" />
                <span className="flex-1">
                  {item.name} — <span className="font-medium">{item.status}</span>
                </span>
                {showIntegrationsWarning && (
                  <span className={`ml-2 px-2 py-0.5 rounded text-[10px] font-medium ${
                    item.risk === 'high' ? 'bg-red-100 text-red-700' :
                    item.risk === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {item.risk === 'high' ? 'Переписать' : item.risk === 'medium' ? 'Протестировать' : 'Проверить'}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Warning для интеграций */}
          {showIntegrationsWarning && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2">
              <ExclamationTriangleIcon className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-yellow-800">
                {dbMode === 'upgrade' 
                  ? 'Интеграции могут потребовать тестирования после обновления БД'
                  : 'При переходе на PostgreSQL все интеграции потребуют адаптации под новую СУБД'}
              </p>
            </div>
          )}
        </div>
        
        <p className="text-xs text-gray-500 mt-4 italic flex items-center gap-1">
          <ArrowPathIcon className="w-3 h-3" />
          Решение о миграции БД принимается ТОЛЬКО после аудита текущих интеграций
        </p>
      </CardBody>
    </Card>
  );
}