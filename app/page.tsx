//src/app/page.tsx
"use client"
import Link from 'next/link';
import { Chip } from '@heroui/chip';
import { CardBody, Card } from '@heroui/card';
import { Button } from '@heroui/button';
import {
  CheckCircleIcon,
  RocketLaunchIcon,
  CodeBracketIcon,
  ServerIcon,
  ArrowsRightLeftIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  PresentationChartBarIcon,
  ListBulletIcon,
  UserGroupIcon,
  GiftIcon,
  ChartBarIcon,
  LinkIcon,
  WrenchScrewdriverIcon,
  BookOpenIcon

} from '@heroicons/react/24/outline';
import { CurrentSiteCard } from './components/CurrentSiteCard';
import { CherryCmsCard } from './components/CherryCmsCard';
import { DatabaseCard } from './components/DatabaseCard';
import { ApiLayerCard } from './components/ApiLayerCard';
import { NextJsFrontendCard } from './components/NextJsFrontendCard';
import { SafetyNoteCard } from './components/SafetyNoteCard';
import { RoadmapCard } from './components/RoadmapCard';
import { FadeIn, FadeInStagger } from './components/FadeIn';



export default function CommercialProposal() {


  const currentDate = new Date('19.03.2026').toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const stages = [
    {
      id: 1,
      title: "Анализ и ТЗ",
      description: "Погружение в проект: изучаем код, БД, интеграции и бизнес-процессы",
      color: "primary",
      icon: <MagnifyingGlassIcon className="w-5 h-5" />,
      duration: "5-7 дней",
      cost: "0 руб.",
      originalCost: "22 000 руб.",
      isFree: true,
      result: "Утверждённое ТЗ, карта данных, план миграции",
      tasks: [
        "Получение дампа базы данных (копия)",
        "Анализ структуры таблиц (products, categories, orders)",
        "Проверка кодировки (windows-1251 → UTF-8)",
        "Интервью с сотрудниками: какие интеграции используются",
        "Составление карты критичного функционала",
        "Формирование и согласование ТЗ"
      ]
    },
    {
      id: 2,
      title: "REST API сервер",
      description: "Разработка слоя данных: читаем из текущей БД, отдаём чистый JSON",
      color: "secondary",
      icon: <ServerIcon className="w-5 h-5" />,
      duration: "2-3 недели",
      cost: "до 57 000 руб.",
      result: "Рабочий API с эндпоинтами: /api/products, /api/books/:id, /api/audio",
      tasks: [
        "Настройка подключения к копии БД (только чтение)",
        "Конвертация windows-1251 → UTF-8 на уровне API",
        "Разработка эндпоинтов для каталога, карточек, аудио",
        "Валидация и типизация ответов (OpenAPI/Swagger)",
        "Тестирование API (Postman / автоматические тесты)",
        "Документация для фронтенд-разработчика"
      ]
    },
    {
      id: 3,
      title: "Фронтенд на Next.js",
      description: "Современный интерфейс: быстро, адаптивно, с семантической вёрсткой",
      color: "success",
      icon: <CodeBracketIcon className="w-5 h-5" />,
      duration: "2-3 недели",
      cost: "до 57 000 руб.",
      result: "Готовый фронтенд: каталог, карточка, корзина, онлайн-чтение",
      tasks: [
        "Проектирование архитектуры (App Router, компоненты)",
        "Верстка каталога (~550 книг) + онлайн-библиотеки (~200)",
        "Реализация аудиоплеера и PDF-превью",
        "Адаптивный дизайн, оптимизация Core Web Vitals",
        "SEO: мета-теги, sitemap.xml, robots.txt, ЧПУ",
        "Деплой демо-версии на Vercel"
      ]
    },
    {
      id: 4,
      title: "Интеграции и запуск",
      description: "Подключаем платежи, уведомления и переводим на продакшен",
      color: "warning",
      icon: <ArrowsRightLeftIcon className="w-5 h-5" />,
      duration: "5-7 дней",
      cost: "22 000 руб.",
      result: "Рабочий сайт на продакшене с гарантией",
      tasks: [
        "Интеграция формы заказа с Робокассой",
        "Настройка email-уведомлений",
        "Тестирование критичных сценариев (заказ, оплата)",
        "Переключение Nginx на новый фронтенд",
        "Передача исходных кодов и документации",
        "Гарантия: исправление ошибок в течение 3 месяцев"
      ]
    }
  ];

  // src/app/page.tsx — добавь после массива stages

  const roadmap = {
    id: 5,
    title: "Roadmap: возможное развитие",
    description: "Что можно добавить после запуска для роста бизнеса",
    color: "secondary",
    icon: <RocketLaunchIcon className="w-5 h-5" />,
    duration: "По запросу",
    isRoadmap: true,
    result: "Масштабируемая платформа для роста продаж",
    items: [
      {
        icon: <UserGroupIcon className="w-4 h-4" />,
        title: "Личные кабинеты",
        desc: "История заказов, избранное, отслеживание доставки, персональные настройки"
      },
      {
        icon: <GiftIcon className="w-4 h-4" />,
        title: "Бонусная система",
        desc: "Накопительные баллы, ранги клиентов, автоматические персональные скидки"
      },
      {
        icon: <ChartBarIcon className="w-4 h-4" />,
        title: "Маркетинг",
        desc: "Промокоды, рассылки, интеграция с соцсетями, SEO-продвижение"
      },
      {
        icon: <LinkIcon className="w-4 h-4" />,
        title: "Интеграции",
        desc: "1С:Предприятие, службы доставки (СДЭК, Почта), платежные системы"
      },
      {
        icon: <PresentationChartBarIcon className="w-4 h-4" />,
        title: "Аналитика",
        desc: "Дашборды продаж, A/B-тесты, воронки конверсии, поведенческие метрики"
      },
      {
        icon: <WrenchScrewdriverIcon className="w-4 h-4" />,
        title: "Поддержка",
        desc: "Обновления, мониторинг, консультации по развитию, техническая помощь"
      },
      {
        icon: <BookOpenIcon className="w-4 h-4" />,
        title: "Онлайн-библиотека",
        desc: "Прогресс чтения, закладки, офлайн-режим, рекомендации по интересам"
      }
    ]
  };

  const benefits = [
    {
      icon: <RocketLaunchIcon className="w-6 h-6 text-yellow-500" />,
      title: "Высокая производительность",
      description: "Next.js обеспечивает быструю загрузку и отличный UX"
    },
    {
      icon: <CheckCircleIcon className="w-6 h-6 text-green-500" />,
      title: "Адаптивный дизайн",
      description: "Корректное отображение на всех устройствах"
    },
    {
      icon: <CodeBracketIcon className="w-6 h-6 text-blue-500" />,
      title: "Масштабируемость",
      description: "Легкое добавление новых функций и интеграций"
    },
    {
      icon: <ServerIcon className="w-6 h-6 text-purple-500" />,
      title: "Современная архитектура",
      description: "Легкость поддержки и развития проекта"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <Card className="mb-8 shadow-lg">
          <CardBody className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  Коммерческое предложение
                </h1>
                <p className="text-gray-600">
                  Перенос сайта mpk77.ru на современный стек технологий
                </p>
              </div>
              <div className="text-right">
                {currentDate && (
                  <p className="text-sm text-gray-500">Дата: {currentDate}</p>
                )}
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 py-4 bg-blue-50 mt-6">
              <p className="text-lg font-semibold text-gray-700">Здравствуйте!</p>
              <p className="text-gray-600 mt-2">
                Предлагаю следующий подход к реализации задачи переноса сайта на современный технологический стек:
              </p>
            </div>
          </CardBody>
        </Card>



        {/* 🔹 БЛОК 1: Текущее состояние (без теней) */}
        <section className="mb-8">
          <h2 className="inline-flex items-center text-2xl font-bold text-gray-800 mb-6">
            <PresentationChartBarIcon className="w-8 h-8 text-legacy-600 mr-2" />
            Текущее состояние и предлагаемое решение
          </h2>

          <div className="bg-modern-50 rounded-lg p-5 mb-6 border border-modern-200">
            <p className="text-gray-700 mb-3">
              Сайт работает, но использует устаревшие технологии (PHP 5.5, jQuery, windows-1251),
              что ограничивает развитие, безопасность и конверсию.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Предлагаю два пути развития:</strong>
            </p>

            <ul className="space-y-2 text-sm text-gray-600 mb-4">
              <li className="flex items-start">
                <CheckCircleIcon className="w-4 h-4 text-modern-500 mt-0.5 mr-2 shrink-0" />
                <span><strong>Эволюционный:</strong> постепенная замена фронтенда на Next.js, API-слой читает из текущей БД. Быстрый запуск, минимальные риски.</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-4 h-4 text-modern-500 mt-0.5 mr-2 shrink-0" />
                <span><strong>Революционный:</strong> полная перепись на современном стеке (новая БД, чистая архитектура). Долгосрочная перспектива, больше инвестиций.</span>
              </li>
            </ul>

            <p className="text-gray-700 font-medium">
              Независимо от выбора, в основе лежит современный подход:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>• <strong>Headless API</strong> — отдельный REST-сервер для данных</li>
              <li>• <strong>Next.js фронтенд</strong> — быстрое, адаптивное, SEO-готовое веб-приложение</li>
              <li>• <strong>Изоляция слоёв</strong> — можно менять фронтенд, не затрагивая бэкенд, и наоборот</li>
            </ul>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <CurrentSiteCard />      {/* licey.net: PHP 5.5, windows-1251 */}
            <CherryCmsCard />        {/* Самописная CMS */}
          </div>

          <div className="mt-8 space-y-8">
            <DatabaseCard />         {/* MySQL + возможные интеграции */}
            <ApiLayerCard />
            <NextJsFrontendCard />   {/* Next.js 14 + Tailwind */}
            <SafetyNoteCard />       {/* Разработка на копии БД */}
          </div>
        </section>


        {/* Этапы работ */}
        <div className="space-y-8 mb-12">
          <h2 className="inline-flex items-center text-2xl font-bold text-gray-800 mb-6">
            <ListBulletIcon className="w-8 h-8 text-legacy-600 mr-2" />
            Этапы работ
          </h2>
          {stages.map((stage) => (
            <Card key={stage.id} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardBody className="p-6">
                <div className="flex flex-col items-start gap-1 sm:flex-row sm:gap-0 sm:items-center mb-6">
                  <div className={`w-12 h-12 rounded-full bg-${stage.color}-100 flex items-center justify-center mr-4`}>
                    <div className={`text-${stage.color}-600`}>
                      {stage.icon}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Этап {stage.id}: {stage.title}
                    </h2>
                    {stage.description && (
                      <p className="text-sm text-gray-600 mt-1">{stage.description}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Состав работ:</h3>
                    <ul className="space-y-3">
                      {stage.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start">
                          <CheckCircleIcon className={`w-5 h-5 text-${stage.color}-500 mt-0.5 mr-3 shrink-0`} />
                          <span className="text-gray-600">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`bg-${stage.color}-50 rounded-lg p-6 flex flex-col justify-between h-full`}>
                    <div className="text-center mb-4">
                      <Chip
                        color={stage.color as any} // eslint-disable-line @typescript-eslint/no-explicit-any
                        variant="flat"
                        className="font-medium"
                      >
                        Результат этапа
                      </Chip>
                    </div>
                    <p className="text-gray-700 text-center mb-6">
                      {stage.result}
                    </p>

                    <Card className="bg-white">
                      <CardBody className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-700">Сроки:</span>
                          <span className="font-semibold text-gray-800">{stage.duration}</span>
                        </div>
                        {/* Внутри карточки этапа, где отображается стоимость */}
                        <div className="flex flex-wrap gap-1 justify-between items-center">
                          <span className="font-medium text-gray-700">Стоимость:</span>
                          <div className="flex items-center gap-2">
                            {stage.isFree ? (
                              <>
                                <span className="text-sm text-gray-400 line-through">{stage.originalCost}</span>
                                <span className={`font-semibold text-${stage.color}-600`}>{stage.cost}</span>
                                <Chip
                                  size="sm"
                                  color={stage.color as any} // eslint-disable-line @typescript-eslint/no-explicit-any
                                  variant="flat">Бесплатно</Chip>
                              </>
                            ) : (
                              <span className="font-semibold text-gray-800">{stage.cost}</span>
                            )}
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                    {(stage.id === 1 || stage.id === 2) && (
                      <div className="mt-4 text-center">
                        <Link href={`/stage${stage.id}/`}>
                          <Button
                            color={stage.color as any} // eslint-disable-line @typescript-eslint/no-explicit-any
                            variant="flat"
                            size="sm"
                            className="w-full"
                            endContent={<ArrowRightIcon className="w-4 h-4" />}
                          >
                            Подробнее
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}

          {/* Roadmap — отдельный рендер */}
          <RoadmapCard
            title={roadmap.title}
            description={roadmap.description}
            items={roadmap.items}
            result={roadmap.result}
          />
        </div>

        {/* Итоговая стоимость */}
        <Card className="mb-12 shadow-lg bg-linear-to-r from-blue-500 to-purple-600 text-white">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Итоговая стоимость проекта</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <Card className="bg-white bg-opacity-20">
                <CardBody className="p-4 text-center">
                  <p className="text-sm opacity-90">Этап 1</p>
                  <p className="text-2xl font-bold">0 ₽</p>
                  <p className="text-sm opacity-90">5-7 дней</p>
                </CardBody>
              </Card>
              <Card className="bg-white bg-opacity-20">
                <CardBody className="p-4 text-center">
                  <p className="text-sm opacity-90">Этап 2</p>
                  <p className="text-2xl font-bold">до 57 000 ₽</p>
                  <p className="text-sm opacity-90">15-22 дня</p>
                </CardBody>
              </Card>
              <Card className="bg-white bg-opacity-20">
                <CardBody className="p-4 text-center">
                  <p className="text-sm opacity-90">Этап 3</p>
                  <p className="text-2xl font-bold">до 57 000 ₽</p>
                  <p className="text-sm opacity-90">15-22 дня</p>
                </CardBody>
              </Card>
              <Card className="bg-white bg-opacity-20">
                <CardBody className="p-4 text-center">
                  <p className="text-sm opacity-90">Этап 4</p>
                  <p className="text-2xl font-bold">22 000 ₽</p>
                  <p className="text-sm opacity-90">5-7 дней</p>
                </CardBody>
              </Card>
            </div>
            <div className="pt-6 border-t border-white border-opacity-30 text-center">
              <p className="text-xl font-bold">Общая стоимость ~ 136 000 ₽</p>
              <p className="opacity-90 mt-2">Общий срок ~ 5–7 недель</p>
            </div>
          </CardBody>
        </Card>

        {/* Преимущества */}
        <Card className="mb-8 shadow-lg">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Преимущества нового решения
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="mr-4 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card className="shadow-lg">
          <CardBody className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Готовы начать проект?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Для старта мне потребуются исходные материалы Вашего сайта с комментариями по функционалу каждой страницы.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                color="success"
                size="lg"
                className="px-8"
                onPress={() => window.open('https://t.me/ahim5722', '_blank')}
                startContent={
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.141-.259.259-.374.261l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                  </svg>
                }
              >
                Связаться
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

