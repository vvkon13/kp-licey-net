// components/Proposal/ApiLayerCard.tsx
"use client";
import { Card, CardBody } from '@heroui/card';
import { Chip } from '@heroui/chip';
import { ArrowsRightLeftIcon, CheckCircleIcon, ServerIcon } from '@heroicons/react/24/outline';

export function ApiLayerCard() {
  const options = [
    { name: "Strapi", desc: "Админка из коробки, быстрый старт" },
    { name: "Express.js", desc: "Полный контроль, гибкость для легаси" },
    { name: "FastAPI", desc: "Python, отличная работа с кодировками" },
  ];

  const features = [
    "Чтение из существующей БД (только SELECT на старте)",
    "Конвертация windows-1251 → UTF-8 на лету",
    "Эндпоинты: /api/products, /api/books/:id, /api/audio/:id",
    "Авто-документация (Swagger / Postman)",
  ];

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow bg-modern-50">
      <CardBody className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ArrowsRightLeftIcon className="w-5 h-5 text-modern-600" />
            <h3 className="text-lg font-bold text-gray-800">API-слой (Strangler Fig Pattern)</h3>
          </div>
          <Chip color="primary" variant="flat">Новое</Chip>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm">
          Современный REST API между старой БД и новым фронтендом. 
          Не ломаем CherryCMS — она продолжает работать.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {options.map((opt, index) => (
            <div key={index} className="p-3 bg-white rounded">
              <div className="flex items-center gap-2 mb-1">
                <ServerIcon className="w-4 h-4 text-modern-500" />
                <p className="font-medium text-gray-800 text-sm">{opt.name}</p>
              </div>
              <p className="text-xs text-gray-500">{opt.desc}</p>
            </div>
          ))}
        </div>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <CheckCircleIcon className="w-4 h-4 text-modern-500 mt-0.5 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}