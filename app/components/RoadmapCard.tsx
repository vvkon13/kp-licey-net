// components/Proposal/RoadmapCard.tsx
"use client";

import { Card, CardBody } from '@heroui/card';
import { Chip } from '@heroui/chip';
import { RocketLaunchIcon, CheckCircleIcon, LightBulbIcon } from '@heroicons/react/24/outline';

interface RoadmapItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface RoadmapCardProps {
  title: string;
  description: string;
  items: RoadmapItem[];
  result: string;
}

export function RoadmapCard({ title, description, items, result }: RoadmapCardProps) {
  return (
    <Card className="border-2 border-dashed border-modern-300 bg-modern-50/50 shadow-lg">
      <CardBody className="p-6">
        {/* Заголовок */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <RocketLaunchIcon className="w-5 h-5 text-secondary-600" />
            <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          </div>
          <Chip color="secondary" variant="flat" size="sm">Дальнейшее развитие</Chip>
        </div>

        {/* Описание */}
        <p className="text-sm text-gray-600 mb-5">{description}</p>

        {/* Список возможностей */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-modern-200 transition-colors"
            >
              <div className="text-secondary-600 mt-0.5 shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-medium text-gray-800 text-sm">{item.title}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Результат */}
        <div className="bg-secondary-50 rounded-lg flex items-start gap-3 p-3">
          <CheckCircleIcon className="w-4 h-4 text-secondary-600 shrink-0 mt-0.5" />
          <p className="text-xs text-secondary-800">
            <strong>Итог:</strong> {result}
          </p>
        </div>

        {/* Примечание */}
        <p className="inline-flex text-xs text-gray-500 mt-4 italic text-center">
          <LightBulbIcon className='text-amber-500 w-2 h-2'/> Эти этапы обсуждаются отдельно после запуска базовой версии
        </p>
      </CardBody>
    </Card>
  );
}