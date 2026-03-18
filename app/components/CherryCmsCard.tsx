// components/Proposal/CherryCmsCard.tsx
"use client"
import { Card, CardBody } from '@heroui/card';
import { Chip } from '@heroui/chip';

export function CherryCmsCard() {
  return (
    <Card className="bg-legacy-50">
      <CardBody className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-800">⚙️ CherryCMS</h3>
          <Chip color="warning" variant="flat">Самописная</Chip>
        </div>
        
        <ul className="space-y-2 text-gray-600 text-sm">
          <li>• Разработчик: cherepkova.ru</li>
          <li>• Нет публичной документации</li>
          <li>• Менеджеры работают в привычном интерфейсе</li>
          <li>• Ввод товаров, управление заказами</li>
        </ul>
        
        <p className="text-xs text-gray-500 mt-4 italic">
          ✅ Предлагаем не трогать админку на старте — сотрудники продолжают работать как привыкли
        </p>
      </CardBody>
    </Card>
  );
}