// components/Proposal/CurrentSiteCard.tsx
"use client";
import { Card, CardBody } from '@heroui/card';
import { Chip } from '@heroui/chip';
import { ComputerDesktopIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export function CurrentSiteCard() {
  const items = [
    "PHP 5.5.37 (устарел с 2016)",
    "Кодировка: windows-1251",
    "jQuery 1.11.2 + статический фронтенд",
    "Нет адаптивности под мобильные",
    "PageSpeed: ~35/100 Desktop, ~25/100 Mobile",
  ];

  return (
    <Card className="bg-legacy-50">
      <CardBody className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ComputerDesktopIcon className="w-5 h-5 text-legacy-600" />
            <h3 className="text-lg font-bold text-gray-800">Текущий сайт</h3>
          </div>
          <Chip color="warning" variant="flat">Legacy</Chip>
        </div>
        
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <CheckCircleIcon className="w-4 h-4 text-legacy-500 mt-0.5 mr-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
        <p className="text-xs text-gray-500 mt-4 italic">
          Сайт работает, но требует модернизации для безопасности и конверсии
        </p>
      </CardBody>
    </Card>
  );
}