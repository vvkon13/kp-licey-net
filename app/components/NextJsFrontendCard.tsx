// components/Proposal/NextJsFrontendCard.tsx
"use client";
import { Card, CardBody } from '@heroui/card';
import { Chip } from '@heroui/chip';
import { RocketLaunchIcon, CheckCircleIcon, DevicePhoneMobileIcon, LightBulbIcon } from '@heroicons/react/24/outline';

export function NextJsFrontendCard() {
  const metrics = [
    { label: 'Загрузка', value: '< 1.5 сек' },
    { label: 'Адаптив', value: 'Полный' },
    { label: 'SEO', value: 'SSR + мета' },
    { label: 'Типизация', value: 'TypeScript' },
  ];

  const features = [
    "Каталог (~550 книг) + онлайн-библиотека (~200)",
    "Аудиоплеер для аудиокниг (прогресс, плейлист)",
    "PDF-превью (react-pdf, первые страницы)",
    "Корзина + заказ (форма + Робокасса)",
    "Отображение остатков, 3 варианта доставки",
  ];

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow bg-modern-50">
      <CardBody className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <DevicePhoneMobileIcon className="w-12 h-12 text-modern-600" />
            <h3 className="text-2xl font-bold text-gray-800">Новый сайт</h3>
          </div>
          <Chip color="primary" variant="flat">Новое</Chip>
        </div>
        
        <p className="text-gray-600 mb-4 text-lg font-semibold">
          Frontend на Next.js. Тот же функционал, но на современном стеке. 
          Подход: «Lift-and-Shift» — перенос без потери логики + архитектура, готовая к любым расширениям.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {metrics.map((item) => (
            <div key={item.label} className="p-3 bg-white rounded text-center">
              <p className="text-xs text-gray-500">{item.label}</p>
              <p className="font-semibold text-gray-800 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <CheckCircleIcon className="w-4 h-4 text-modern-500 mt-0.5 mr-2 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Футер про масштабируемость */}
        <p className="text-xs text-gray-500 mt-4 italic flex items-center gap-1">
          <LightBulbIcon className="w-3 h-3 text-amber-500" />
          Масштабируемость: от простого каталога до полноценной платформы — без ограничений
        </p>
      </CardBody>
    </Card>
  );
}