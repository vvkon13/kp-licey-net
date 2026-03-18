// components/Proposal/CurrentSiteCard.tsx
"use client"
import { Card, CardBody } from '@heroui/card';
import { Chip } from '@heroui/chip';

export function CurrentSiteCard() {
  return (
    <Card className="border-l-4 border-legacy-500 bg-legacy-50">
      <CardBody className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-800">🌐 Текущий сайт</h3>
          <Chip color="warning" variant="flat">Legacy</Chip>
        </div>
        
        <ul className="space-y-2 text-gray-600 text-sm">
          <li>• PHP 5.5.37 (устарел с 2016)</li>
          <li>• Кодировка: windows-1251</li>
          <li>• jQuery 1.11.2 + статический фронтенд</li>
          <li>• Нет адаптивности под мобильные</li>
          <li>• PageSpeed: ~35/100 Desktop, ~25/100 Mobile</li>
        </ul>
        
        <p className="text-xs text-gray-500 mt-4 italic">
          Сайт работает, но требует модернизации для безопасности и конверсии
        </p>
      </CardBody>
    </Card>
  );
}