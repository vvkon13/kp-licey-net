// components/Proposal/ApiLayerCard.tsx
"use client"
import { Card, CardBody } from '@heroui/card';
import { Chip } from '@heroui/chip';

export function ApiLayerCard() {
  return (
    <Card className="shadow-lg border-l-4 border-modern-500 bg-modern-50">
      <CardBody className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-800">🔌 API-слой (Strangler Fig Pattern)</h3>
          <Chip color="primary" variant="flat">Новое</Chip>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm">
          Современный REST API между старой БД и новым фронтендом. 
          Не ломаем CherryCMS — она продолжает работать.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="p-3 bg-white rounded border">
            <p className="font-medium text-gray-800 text-sm">Strapi</p>
            <p className="text-xs text-gray-500 mt-1">Админка из коробки, быстрый старт</p>
          </div>
          <div className="p-3 bg-white rounded border">
            <p className="font-medium text-gray-800 text-sm">Express.js</p>
            <p className="text-xs text-gray-500 mt-1">Полный контроль, гибкость для легаси</p>
          </div>
          <div className="p-3 bg-white rounded border">
            <p className="font-medium text-gray-800 text-sm">FastAPI</p>
            <p className="text-xs text-gray-500 mt-1">Python, отличная работа с кодировками</p>
          </div>
        </div>
        
        <ul className="space-y-2 text-gray-600 text-sm">
          <li>• Чтение из существующей БД (только SELECT на старте)</li>
          <li>• Конвертация windows-1251 → UTF-8 на лету</li>
          <li>• Эндпоинты: /api/products, /api/books/:id, /api/audio/:id</li>
          <li>• Авто-документация (Swagger / Postman)</li>
        </ul>
      </CardBody>
    </Card>
  );
}