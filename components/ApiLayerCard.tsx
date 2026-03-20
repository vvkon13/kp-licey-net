// components/Proposal/ApiLayerCard.tsx
"use client";
import { useState } from 'react';
import { Card, CardBody } from '@heroui/card';
import { Chip } from '@heroui/chip';
import {
  ArrowsRightLeftIcon,
  CheckCircleIcon,
  ServerIcon,
  XCircleIcon,
  CodeBracketIcon,
  BoltIcon,
  CpuChipIcon,
  ArrowDownIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

type ApiOption = 'strapi' | 'express' | 'fastapi';

const apiOptions: Array<{
  id: ApiOption;
  name: string;
  icon: React.ReactNode;
  pros: string[];
  cons: string[];
}> = [
    {
      id: 'strapi',
      name: 'Strapi',
      icon: <CodeBracketIcon className="w-4 h-4" />,
      pros: [
        'Админка из коробки — не нужно писать с нуля',
        'Готовые CRUD-эндпоинты — экономия на разработке',
        'Визуальный конструктор моделей — удобно для контент-менеджеров',
        'Плагины для аутентификации, загрузки файлов, SEO',
      ],
      cons: [
        'Оверхед для простых проектов — не все функции нужны',
        'Меньше контроля над генерируемым SQL',
        'Может потребоваться кастомизация под легаси-БД',
      ],
    },
    {
      id: 'express',
      name: 'Express.js',
      icon: <BoltIcon className="w-4 h-4" />,
      pros: [
        'Полный контроль над каждым запросом и ответом',
        'Минимум зависимостей — лёгкий и быстрый сервер',
        'Идеален для легаси: можно точечно подключаться к старым таблицам',
        'Большое сообщество, много готовых решений',
      ],
      cons: [
        'Нужно писать больше кода вручную (роутинг, валидация)',
        'Нет админки из коробки — нужно делать отдельно или подключать',
        'Меньше «магии» — больше ответственности за архитектуру',
      ],
    },
    {
      id: 'fastapi',
      name: 'FastAPI',
      icon: <CpuChipIcon className="w-4 h-4" />,
      pros: [
        'Отличная работа с кодировками (windows-1251 → UTF-8)',
        'Авто-документация (Swagger/OpenAPI) из коробки',
        'Асинхронность «из коробки» — высокая производительность',
        'Строгая типизация через Pydantic — меньше багов',
        'Высокий спрос на Python в РФ — проще найти разработчиков для поддержки'

      ],
      cons: [
        'Требует знания Python (если команда только на JS)',
        'Нужно разворачивать отдельно от Next.js (два сервиса)',
        'Меньше готовых плагинов для e-commerce по сравнению с Node.js',
      ],
    },
  ];

export function ApiLayerCard() {
  const [activeOption, setActiveOption] = useState<ApiOption>('strapi');

  const activeData = apiOptions.find(opt => opt.id === activeOption)!;

  return (
    <Card
      className="shadow-lg hover:shadow-xl transition-shadow bg-modern-50 relative"
    >
      <CardBody className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ArrowsRightLeftIcon className="w-12 h-12 text-modern-600" />
            <h3 className="text-2xl font-bold text-gray-800">API-слой </h3>
          </div>
          <Chip color="primary" variant="flat">Новое</Chip>
        </div>

        <p className="text-gray-600 mb-4 text-lg font-semibold">
          Современный REST API сервер между старой БД и новым фронтендом.
        </p>

        {/* Табы: десктоп (вертикальные) */}
        <div className="hidden sm:flex gap-4 mb-4">
          <div className="flex flex-col gap-2 border-r pr-4">
            {apiOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveOption(opt.id)}
                className={`flex items-center gap-2 text-left px-3 py-2 rounded-lg transition-colors text-sm cursor-pointer ${activeOption === opt.id
                  ? 'bg-modern-100 text-modern-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                {opt.icon}
                {opt.name}
              </button>
            ))}
          </div>

          <div className="flex-1">
            <TabContent activeData={activeData} />
          </div>
        </div>

        {/* Табы: мобильные (горизонтальные) */}
        <div className="sm:hidden mb-4">
          <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-hide">
            {apiOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveOption(opt.id)}
                className={`
                  shrink-0 px-3 py-1.5 rounded-lg transition-colors text-xs whitespace-nowrap flex items-center gap-1
                  ${activeOption === opt.id
                    ? 'bg-modern-100 text-modern-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                  }
                `}
                title={opt.name}
              >
                {opt.icon}
                {opt.name}
                <span className="hidden sm:inline">{opt.name}</span>
              </button>
            ))}
          </div>
          <TabContent activeData={activeData} />
        </div>

        {/* Вывод: какой вариант для какого подхода */}
        <div className="mt-4 pt-4 border-t border-modern-200">
          <h4 className="font-semibold text-gray-800 mb-3 text-sm flex items-center gap-2">
            <CheckCircleIcon className="w-4 h-4 text-modern-500" />
            Рекомендация:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
              <p className="text-sm text-blue-800 leading-relaxed">
                <strong className="font-semibold">Strapi:</strong> Идеален для подхода <strong>Big Bang</strong>. Админка из коробки, визуальный конструктор моделей, динамические блоки — можно сразу запускать новые функции (личные кабинеты, бонусы, рассылки) без переписывания админки.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
              <p className="text-sm text-purple-800 leading-relaxed">
                <strong className="font-semibold">Express.js / FastAPI:</strong> Идеальны для <strong>Strangler Fig</strong>. Управление контентом остаётся в CherryCMS, новая функциональность постепенно «наращивается» поверх, минимальный риск для текущих бизнес-процессов.
              </p>
            </div>
          </div>
        </div>

        {/* Общие фичи для всех вариантов */}
        <div className="mt-4 p-4 border-t border-modern-200">
          <h4 className="font-semibold text-gray-800 mb-3 text-sm flex items-center gap-2">
            <CheckCircleIcon className="w-4 h-4 text-modern-500" />
            Общие возможности:
          </h4>
          <ul className="space-y-2">
            {[
              "Чтение из существующей БД (только SELECT на старте)",
              "Конвертация windows-1251 → UTF-8 на лету",
              "Эндпоинты: /api/products, /api/books/:id, /api/audio/:id",
              "Авто-документация (Swagger / Postman)",
            ].map((feature, index) => (
              <li key={index} className="flex items-start text-xs text-gray-600">
                <CheckCircleIcon className="w-3 h-3 text-modern-500 mt-0.5 mr-2 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-gray-500 mt-4 italic flex items-center gap-1">
          <LightBulbIcon className="w-3 h-3 text-amber-500" />
          Требуется выбор подхода (постепенно / сразу) — определяется после аудита
        </p>
        {/* Стрелка,*/}
        <div className="absolute bottom-4 right-4 text-primary-400">
          <ArrowDownIcon className="w-5 h-5 animate-bounce" />
        </div>
      </CardBody>
    </Card>
  );
}

// Вспомогательный компонент для контента таба
function TabContent({ activeData }: { activeData: typeof apiOptions[0] }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Плюсы */}
        <div className="bg-green-50 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 mb-2 text-xs flex items-center gap-1">
            <CheckCircleIcon className="w-4 h-4" />
            Преимущества
          </h4>
          <ul className="space-y-1">
            {activeData.pros.map((pro, i) => (
              <li key={i} className="text-sm text-green-700 flex items-start">
                <span className="mr-2">•</span>{pro}
              </li>
            ))}
          </ul>
        </div>

        {/* Минусы */}
        <div className="bg-red-50 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 mb-2 text-sm flex items-center gap-1">
            <XCircleIcon className="w-3 h-3" />
            Особенности
          </h4>
          <ul className="space-y-1">
            {activeData.cons.map((con, i) => (
              <li key={i} className="text-sm text-red-700 flex items-start">
                <span className="mr-2">•</span>{con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Рекомендация */}
      <div className="mt-3">
        <Chip
          color={activeData.id === 'strapi' ? 'primary' : activeData.id === 'express' ? 'secondary' : 'success'}
          variant="flat"
          className="font-medium"
        >
          {activeData.id === 'strapi' ? 'Быстрый старт' : activeData.id === 'express' ? 'Макс. контроль' : 'Python-стек'}
        </Chip>
      </div>
    </>
  );
}