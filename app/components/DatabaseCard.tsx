// components/Proposal/DatabaseCard.tsx
'use client';

import { useState } from 'react';
import { Card, CardBody } from '@heroui/card';
import { Chip } from '@heroui/chip';

export function DatabaseCard() {
  const [activeTab, setActiveTab] = useState('current');

  const tabs = [
    {
      id: 'current',
      label: 'Текущая БД',
      content: (
        <div className="space-y-2 text-sm text-gray-600">
          <p>• Вероятно: MySQL 5.5–5.7</p>
          <p>• Кодировка: windows-1251</p>
          <p>• ~550 товаров + ~200 онлайн-книг + аудио</p>
          <p>• Простая структура, нет сложных связей</p>
          <Chip color="warning" variant="flat" className="mt-2">Требует аудита</Chip>
        </div>
      ),
    },
    {
      id: 'upgrade',
      label: 'Обновление MySQL',
      content: (
        <div className="space-y-2 text-sm text-gray-600">
          <p>• MySQL 8.0+</p>
          <p>• Конвертация в UTF-8</p>
          <p>• Минимальные изменения в коде</p>
          <Chip color="primary" variant="flat" className="mt-2">Быстро</Chip>
        </div>
      ),
    },
    {
      id: 'postgresql',
      label: 'Переход на PostgreSQL',
      content: (
        <div className="space-y-2 text-sm text-gray-600">
          <p>• Лучшая поддержка в FastAPI/SQLAlchemy</p>
          <p>• Встроенный полнотекстовый поиск (для книг!)</p>
          <p>• JSONB для гибких атрибутов</p>
          <Chip color="success" variant="flat" className="mt-2">Перспективно</Chip>
        </div>
      ),
    },
  ];

  return (
    <Card className="bg-legacy-50">
      <CardBody className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">💾 База данных</h3>
        
        <div className="flex gap-4">
          {/* Вертикальные табы */}
          <div className="flex flex-col gap-2 border-r pr-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                  activeTab === tab.id
                    ? 'bg-modern-100 text-modern-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Контент таба */}
          <div className="flex-1">
            {tabs.find((t) => t.id === activeTab)?.content}
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-legacy-50 rounded border border-legacy-200">
          <p className="text-xs text-gray-600">
            <span className="font-medium">🔗 Возможные интеграции (требует уточнения):</span><br/>
            • Робокасса (оплата) — ✅ подтверждено<br/>
            • Email-уведомления — ✅ вероятно<br/>
            • 1С:Предприятие — ⚠️ требует проверки
          </p>
        </div>
        
        <p className="text-xs text-gray-500 mt-3 italic">
          ⚠️ Решение о миграции БД принимается ТОЛЬКО после аудита текущих интеграций
        </p>
      </CardBody>
    </Card>
  );
}