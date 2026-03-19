// components/Proposal/RoadmapCard.tsx
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardBody } from '@heroui/card';
import { Chip } from '@heroui/chip';
import { 
  RocketLaunchIcon, 
  CheckCircleIcon, 
  LightBulbIcon,
  ChevronDownIcon 
} from '@heroicons/react/24/outline';

interface RoadmapItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  details?: string; // 👈 Опциональные подробности для раскрытия
}

interface RoadmapCardProps {
  title: string;
  description: string;
  items: RoadmapItem[];
  result: string;
}

export function RoadmapCard({ title, description, items, result }: RoadmapCardProps) {
  const [openId, setOpenId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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

        {/* Список возможностей (аккордеон) */}
        <div className="space-y-3 mb-5">
          {items.map((item, index) => {
            const isOpen = openId === index;
            const isHovered = hoveredId === index;

            return (
              <motion.div
                key={index}
                className="bg-modern-50/90 rounded-lg border border-gray-100 overflow-hidden"
                initial={false}
              >
                {/* Кнопка-вопрос */}
                <button
                  onClick={() => setOpenId(isOpen ? null : index)}
                  className="w-full px-4 py-3 flex items-center justify-between text-left cursor-pointer group"
                  onMouseEnter={() => setHoveredId(index)}
                  onMouseLeave={() => setHoveredId(null)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`shrink-0 transition-colors duration-200 ${
                      isHovered || isOpen ? 'text-secondary-600' : 'text-secondary-500'
                    }`}>
                      {item.icon}
                    </div>
                    <span className={`text-sm font-medium truncate transition-colors duration-200 ${
                      isHovered || isOpen ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {item.title}
                    </span>
                  </div>

                  {/* Иконка стрелки с анимацией */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`shrink-0 w-5 h-5 flex items-center justify-center transition-colors duration-200 ${
                      isHovered || isOpen ? 'text-secondary-600' : 'text-gray-400'
                    }`}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Раскрывающийся контент */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-1">
                        <p className="text-xs text-gray-600 leading-relaxed pl-8">
                          {item.details || item.desc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Результат */}
        <div className="bg-secondary-50 rounded-lg flex items-start gap-3 p-3">
          <CheckCircleIcon className="w-4 h-4 text-secondary-600 shrink-0 mt-0.5" />
          <p className="text-xs text-secondary-800">
            <strong>Итог:</strong> {result}
          </p>
        </div>

        {/* Примечание */}
        <p className="inline-flex items-center gap-1 text-xs text-gray-500 mt-4 italic">
          <LightBulbIcon className='text-amber-500 w-3 h-3' /> 
          Эти этапы обсуждаются отдельно после запуска базовой версии
        </p>
      </CardBody>
    </Card>
  );
}