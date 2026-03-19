// src/app/stage2-3/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Card, CardBody } from '@heroui/card';
import { Button } from '@heroui/button';
import { Chip } from '@heroui/chip';
import {
    ArrowLeftIcon,
    CheckCircleIcon,
    ServerIcon,
    CodeBracketIcon,
} from '@heroicons/react/24/outline';

type ViewMode = 'functional' | 'layers';

// 🔹 Типы для функциональных блоков
interface BlockTask {
    api: string[];
    frontend: string[];
}

interface FunctionalBlock {
    id: number;
    title: string;
    cost: string;
    api: string[];
    frontend: string[];
    result: string;
}

// 🔹 Данные: функциональные блоки (на основе licey.net)
const functionalBlocks: FunctionalBlock[] = [
    {
        id: 1,
        title: "Каталог товаров",
        cost: "22 000 ₽",
        api: [
            "Эндпоинты: /api/products, /api/categories",
            "Фильтрация по автору, предмету, классу",
            "Пагинация, сортировка, поиск по названию",
            "Конвертация данных из windows-1251 → UTF-8",
        ],
        frontend: [
            "Верстка сетки товаров (~550 позиций)",
            "Карточка товара: изображение, цена, описание",
            "Адаптивный дизайн (мобильные, планшеты, десктоп)",
            "ЧПУ-ссылки: /catalog/matematika/5-klass",
        ],
        result: "Рабочий каталог на демо-сервере с фильтрами и поиском",
    },
    {
        id: 2,
        title: "Онлайн-библиотека",
        cost: "25 000 ₽",
        api: [
            "Эндпоинты: /api/books/:id, /api/books/:id/chapters",
            "PDF-превью: первые 3 страницы через /api/pdf/:id",
            "Структура глав и страниц в JSON",
            "Кэширование контента для скорости",
        ],
        frontend: [
            "Интерфейс чтения: навигация по главам, прогресс",
            "Компонент PDF-превью (react-pdf)",
            "Закладки и сохранение позиции (localStorage)",
            "Адаптивная вёрстка текста под мобильные",
        ],
        result: "Библиотека работает: можно читать книги онлайн",
    },
    {
        id: 3,
        title: "Аудиокниги + Поиск",
        cost: "25 000 ₽",
        api: [
            "Эндпоинты: /api/audio/:id, /api/search?q=",
            "Полнотекстовый поиск по названию и автору",
            "Метаданные аудио: длительность, формат",
            "Оптимизация запросов для скорости",
        ],
        frontend: [
            "Аудиоплеер: прогресс, громкость, плейлист",
            "Поиск с автодополнением и фильтрами",
            "Отображение результатов: книги + аудио",
            "Интеграция поиска в шапку сайта",
        ],
        result: "Поиск и аудио работают, можно находить и слушать",
    },
    {
        id: 4,
        title: "Корзина + Оформление заказа",
        cost: "15 000 ₽",
        api: [
            "Эндпоинты корзины: /api/cart, /api/cart/:id",
            "Валидация заказа: наличие, контакты, доставка",
            "Генерация заказа в формате для Робокассы",
            "Логирование действий для отладки",
        ],
        frontend: [
            "Корзина: добавление, удаление, изменение количества",
            "Форма заказа: валидация полей, 3 варианта доставки",
            "Отображение остатков: «В наличии» / «Мало» / «Нет»",
            "Подготовка к интеграции с Робокассой",
        ],
        result: "Можно оформить заказ (без оплаты) — готово к этапу 4",
    },
    {
        id: 5,
        title: "Контент + SEO-готовность",
        cost: "27 000 ₽",
        api: [
            "Эндпоинты для статических страниц: /api/pages/:slug",
            "Генерация sitemap.xml, robots.txt",
            "Мета-теги для каждой страницы (title, description, OG)",
            "Структурированные данные (Schema.org)",
        ],
        frontend: [
            "Главная, «О нас», «Доставка», «Контакты»",
            "Динамические мета-теги",
            "Оптимизация Core Web Vitals (LCP, CLS, FID)",
            "Деплой демо-версии на Vercel с превью-ссылками",
        ],
        result: "Весь контент + SEO-готовность к индексации",
    },
];

// 🔹 Компонент для функционального вида
function FunctionalView({ blocks }: { blocks: FunctionalBlock[] }) {
    return (
        <div className="space-y-6">
            {blocks.map((block: FunctionalBlock) => (
                <Card key={block.id} className="shadow-lg">
                    <CardBody className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-gray-800">
                                {block.id}. {block.title}
                            </h3>
                            <Chip color="secondary" variant="flat">{block.cost}</Chip>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                    <ServerIcon className="w-4 h-4 text-secondary-600" />
                                    API-слой
                                </h4>
                                <ul className="space-y-1">
                                    {block.api.map((task: string, idx: number) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-3 h-3 text-secondary-500 mt-0.5 mr-2 shrink-0" />
                                            <span>{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                    <CodeBracketIcon className="w-4 h-4 text-success-600" />
                                    Фронтенд
                                </h4>
                                <ul className="space-y-1">
                                    {block.frontend.map((task: string, idx: number) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-3 h-3 text-success-500 mt-0.5 mr-2 shrink-0" />
                                            <span>{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="p-3 bg-secondary-50 rounded-lg">
                            <p className="text-sm text-secondary-800">
                                <strong>Результат:</strong> {block.result}
                            </p>
                        </div>
                    </CardBody>
                </Card>
            ))}

            {/* Итого */}
            <Card className="bg-linear-to-r from-blue-500 to-purple-600 text-white">
                <CardBody className="p-6 text-center">
                    <p className="text-lg font-bold">Итого за второй и третий этапы:</p>
                    <p className="text-xl font-bold">114 000 ₽</p>

                    <p className="text-sm opacity-90 mt-1">Оплата по подэтапам — после приёмки каждого блока</p>
                </CardBody>
            </Card>
        </div>
    );
}

// 🔹 Компонент для послойного вида
function LayersView() {
    return (
        <div className="space-y-6">
            <Card className="shadow-lg">
                <CardBody className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">🔹 REST API сервер (57 000 ₽)</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start">
                            <CheckCircleIcon className="w-3 h-3 text-secondary-500 mt-0.5 mr-2 shrink-0" />
                            <span>Подэтап 1: Подключение к БД + базовые эндпоинты (22 000 ₽)</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircleIcon className="w-3 h-3 text-secondary-500 mt-0.5 mr-2 shrink-0" />
                            <span>Подэтап 2: Полный набор эндпоинтов + документация (25 000 ₽)</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircleIcon className="w-3 h-3 text-secondary-500 mt-0.5 mr-2 shrink-0" />
                            <span>Подэтап 3: Тестирование + передача фронтенду (10 000 ₽)</span>
                        </li>
                    </ul>
                </CardBody>
            </Card>

            <Card className="shadow-lg">
                <CardBody className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">🔹 Фронтенд на Next.js (57 000 ₽)</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start">
                            <CheckCircleIcon className="w-3 h-3 text-success-500 mt-0.5 mr-2 shrink-0" />
                            <span>Подэтап 1: Верстка каталога + карточек (22 000 ₽)</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircleIcon className="w-3 h-3 text-success-500 mt-0.5 mr-2 shrink-0" />
                            <span>Подэтап 2: Корзина + онлайн-библиотека + аудио (25 000 ₽)</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircleIcon className="w-3 h-3 text-success-500 mt-0.5 mr-2 shrink-0" />
                            <span>Подэтап 3: SEO + деплой демо + передача (10 000 ₽)</span>
                        </li>
                    </ul>
                </CardBody>
            </Card>
        </div>
    );
}

// 🔹 Основной компонент страницы
export default function Stage23Detail() {
    const [viewMode, setViewMode] = useState<ViewMode>('functional');

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto px-4 py-8 max-w-6xl">

                {/* Breadcrumbs */}
                <nav className="flex mb-6" aria-label="Breadcrumb">
                    <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Назад к предложению
                    </Link>
                </nav>

                {/* Header */}
                <Card className="mb-8 shadow-lg">
                    <CardBody className="p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center">
                                <ServerIcon className="w-6 h-6 text-secondary-600" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800">
                                    Второй и третий этапы: Разработка приложения
                                </h1>
                                <p className="text-sm text-gray-600 mt-1">
                                    REST API сервер + Фронтенд на Next.js
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Chip color="secondary" variant="flat">2-5 недель</Chip>
                            <Chip color="success" variant="flat">114 000 ₽</Chip>
                        </div>

                        {/* Переключатель вида */}
                        <div className="mt-6 flex gap-2">
                            <Button
                                size="sm"
                                variant={viewMode === 'functional' ? 'solid' : 'bordered'}
                                color="primary"
                                onPress={() => setViewMode('functional')}
                            >
                                По функциям
                            </Button>
                            <Button
                                size="sm"
                                variant={viewMode === 'layers' ? 'solid' : 'bordered'}
                                color="secondary"
                                onPress={() => setViewMode('layers')}
                            >
                                По слоям
                            </Button>
                        </div>
                    </CardBody>
                </Card>

                {/* Контент в зависимости от режима */}
                {viewMode === 'functional' ? (
                    <FunctionalView blocks={functionalBlocks} />
                ) : (
                    <LayersView />
                )}

                {/* CTA */}
                <Card className="shadow-lg mt-8">
                    <CardBody className="p-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Готовы начать разработку?
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Для старта потребуется доступ к копии базы данных и утверждённое ТЗ.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button
                                color="success"
                                size="lg"
                                onPress={() => window.open('https://t.me/ahim5722', '_blank')}
                            >
                                Связаться
                            </Button>
                            <Link href="/">
                                <Button variant="bordered" size="lg">
                                    Назад к предложению
                                </Button>
                            </Link>
                        </div>
                    </CardBody>
                </Card>

            </div>
        </div>
    );
}