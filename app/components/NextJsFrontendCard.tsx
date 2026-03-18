// components/Proposal/NextJsFrontendCard.tsx
"use client"
import { Card, CardBody } from '@heroui/card';
import { Chip } from '@heroui/chip';

export function NextJsFrontendCard() {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow bg-modern-50">
      <CardBody className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-800">🚀 Frontend на Next.js 14</h3>
          <Chip color="primary" variant="flat">Новое</Chip>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm">
          Тот же функционал, но на современном стеке. Подход: «Lift-and-Shift» — перенос без потери логики.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {[
            { label: 'Загрузка', value: '< 1.5 сек' },
            { label: 'Адаптив', value: 'Полный' },
            { label: 'SEO', value: 'SSR + мета' },
            { label: 'Типизация', value: 'TypeScript' },
          ].map((item) => (
            <div key={item.label} className="p-3 bg-white rounded border text-center">
              <p className="text-xs text-gray-500">{item.label}</p>
              <p className="font-semibold text-gray-800 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
        
        <ul className="space-y-2 text-gray-600 text-sm">
          <li>• Каталог (~550 книг) + онлайн-библиотека (~200)</li>
          <li>• Аудиоплеер для аудиокниг (прогресс, плейлист)</li>
          <li>• PDF-превью (react-pdf, первые страницы)</li>
          <li>• Корзина + заказ (форма + Робокасса)</li>
          <li>• Отображение остатков, 3 варианта доставки</li>
        </ul>
      </CardBody>
    </Card>
  );
}