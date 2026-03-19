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
  ListBulletIcon
} from '@heroicons/react/24/outline';
import { CurrentSiteCard } from './components/CurrentSiteCard';
import { CherryCmsCard } from './components/CherryCmsCard';
import { DatabaseCard } from './components/DatabaseCard';
import { ApiLayerCard } from './components/ApiLayerCard';
import { NextJsFrontendCard } from './components/NextJsFrontendCard';
import { SafetyNoteCard } from './components/SafetyNoteCard';



export default function CommercialProposal() {


  const currentDate = new Date('19.03.2026').toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const stages = [
    {
      id: 1,
      title: "Аудит и подготовка",
      color: "primary",
      icon: <MagnifyingGlassIcon className="w-5 h-5" />,
      duration: "3-5 дней",
      cost: "15 000 руб.",
      result: "Полная карта данных, структуры БД и списка интеграций",
      tasks: [
        "Получение дампа базы данных (копия)",
        "Анализ структуры таблиц (products, categories, orders)",
        "Проверка кодировки (windows-1251 → UTF-8)",
        "Интервью с сотрудниками: какие интеграции используются",
        "Составление карты критичного функционала",
        "План миграции данных и тестовые сценарии"
      ]
    },
    {
      id: 2,
      title: "API-слой + Фронтенд (параллельно)",
      color: "secondary",
      icon: <ArrowsRightLeftIcon className="w-5 h-5" />,
      duration: "14-21 день",
      cost: "95 000 руб.",
      result: "Рабочий прототип: каталог, карточка, корзина на Next.js + API",
      tasks: [
        "Настройка подключения к копии БД (только чтение)",
        "Разработка эндпоинтов: /api/products, /api/books/:id, /api/audio",
        "Конвертация windows-1251 → UTF-8 на уровне API",
        "Верстка каталога (~550 книг) + онлайн-библиотеки (~200)",
        "Реализация аудиоплеера и PDF-превью",
        "Адаптивный дизайн, оптимизация Core Web Vitals",
        "Деплой демо-версии на Vercel"
      ]
    },
    {
      id: 3,
      title: "Интеграции, тесты, запуск",
      color: "success",
      icon: <CheckCircleIcon className="w-5 h-5" />,
      duration: "5-7 дней",
      cost: "22 000 руб.",
      result: "Готовый сайт на продакшене с гарантией",
      tasks: [
        "Интеграция формы заказа с Робокассой",
        "Настройка email-уведомлений",
        "Тестирование критичных сценариев (заказ, оплата)",
        "Переключение Nginx на новый фронтенд",
        "Передача исходных кодов и документации",
        "Гарантия: исправление ошибок в течение 3 месяцев",
        "Консультации по дальнейшему развитию"
      ]
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
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
        <section className="mb-12">
          <h2 className="inline-flex items-center text-2xl font-bold text-gray-800 mb-6">
            <PresentationChartBarIcon className="w-8 h-8 text-legacy-600 mr-2" />
            Текущее состояние системы и предлагаемое решение
          </h2>
          <p>Нмже представлен обобщенный подход с постепенным переходом и на современный стек технологий и проектированием новой системы сразу, которые имеет свои плюсы и минус </p>
          <p>Постпенный переход позволит запустить систему быстрее в том же самом формате, при проектирование новой системы легче заложить сразу новые возможности, например личные кабинеты пользователей</p>
          <p>Самое главное, в основе этих подходов лежит современнай подход к разработке, а имеено:  </p>
          <p>Создание отдельного REST API сервера (Headless CMS системы) </p>
          <p>Создание независимого веб-приложения на базе фреймворка Next.js</p>
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CurrentSiteCard />      {/* licey.net: PHP 5.5, windows-1251 */}
            <CherryCmsCard />        {/* Самописная CMS */}
          </div>

          <div className="mt-6">
            <DatabaseCard />         {/* MySQL + возможные интеграции */}
          </div>
        </section>

        {/* 🔹 БЛОК 2: Предлагаемое решение (с тенями, как в шаблоне) */}
        <section className="mb-12">
          {/* <h2 className="inline-flex items-center text-2xl font-bold text-gray-800 mb-6">
            <BuildingOffice2Icon className="w-8 h-8 text-legacy-600 mr-2" />
            Предлагаемое решение
          </h2> */}

          <div className="space-y-6">
            <ApiLayerCard />         {/* Strapi/Express/FastAPI */}
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
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Состав работ:</h3>
                    <ul className="space-y-3">
                      {stage.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start">
                          <CheckCircleIcon className={`w-5 h-5 text-${stage.color}-500 mt-0.5 mr-3 flex-shrink-0`} />
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
                        <div className="flex flex-wrap gap-1 justify-between items-center">
                          <span className="font-medium text-gray-700">Стоимость:</span>
                          <span className="font-semibold text-gray-800">{stage.cost}</span>
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
        </div>

        {/* Итоговая стоимость */}
        <Card className="mb-12 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <CardBody className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Итоговая стоимость проекта</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card className="bg-white bg-opacity-20">
                <CardBody className="p-4 text-center">
                  <p className="text-sm opacity-90">Этап 1</p>
                  <p className="text-2xl font-bold">57 000 ₽</p>
                  <p className="text-sm opacity-90">15-22 дня</p>
                </CardBody>
              </Card>
              <Card className="bg-white bg-opacity-20">
                <CardBody className="p-4 text-center">
                  <p className="text-sm opacity-90">Этап 2</p>
                  <p className="text-2xl font-bold">75 000 ₽</p>
                  <p className="text-sm opacity-90">22-27 дней</p>
                </CardBody>
              </Card>
              <Card className="bg-white bg-opacity-20">
                <CardBody className="p-4 text-center">
                  <p className="text-sm opacity-90">Этап 3</p>
                  <p className="text-2xl font-bold">-</p>
                  <p className="text-sm opacity-90">7 дней + 7 лет поддержки</p>
                </CardBody>
              </Card>
            </div>
            <div className="pt-6 border-t border-white border-opacity-30 text-center">
              <p className="text-xl font-bold">Общая стоимость: 132 000 ₽</p>
              <p className="opacity-90 mt-2">Общий срок: 7–9 недель</p>
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

