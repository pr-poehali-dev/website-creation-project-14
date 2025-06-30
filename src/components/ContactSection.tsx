import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function ContactSection() {
  return (
    <section className="py-20 bg-engineering-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-engineering-blue mb-4">
            Свяжитесь с нами
          </h2>
          <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Обсудим ваш проект и предложим оптимальное решение
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="border-l-4 border-l-engineering-orange">
              <CardHeader>
                <CardTitle className="font-montserrat text-2xl text-engineering-blue flex items-center">
                  <Icon
                    name="Phone"
                    className="mr-3 text-engineering-orange"
                    size={24}
                  />
                  Контактная информация
                </CardTitle>
                <CardDescription className="font-open-sans text-gray-600">
                  Звоните в любое время для консультации
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Icon
                    name="Phone"
                    className="text-engineering-orange mr-3"
                    size={20}
                  />
                  <span className="font-open-sans text-lg font-semibold text-engineering-blue">
                    8 (914) 158-98-95
                  </span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="MapPin"
                    className="text-engineering-orange mr-3"
                    size={20}
                  />
                  <span className="font-open-sans text-gray-600">
                    Россия, работаем по всей территории
                  </span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Clock"
                    className="text-engineering-orange mr-3"
                    size={20}
                  />
                  <span className="font-open-sans text-gray-600">
                    Пн-Пт: 9:00-18:00, Сб: 10:00-16:00
                  </span>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-montserrat text-xl font-semibold text-engineering-blue mb-4">
                Наши преимущества
              </h3>
              <ul className="space-y-3 font-open-sans text-gray-600">
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-engineering-orange mr-3"
                    size={16}
                  />
                  20 лет успешного опыта работы
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-engineering-orange mr-3"
                    size={16}
                  />
                  Наличие СРО и всех лицензий
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-engineering-orange mr-3"
                    size={16}
                  />
                  Опыт прохождения госэкспертизы
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-engineering-orange mr-3"
                    size={16}
                  />
                  Работа со всеми типами объектов
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-engineering-blue rounded-lg p-8 text-white">
            <h3 className="font-montserrat text-2xl font-bold mb-6">
              Получить консультацию
            </h3>
            <p className="font-open-sans text-gray-300 mb-8">
              Оставьте заявку, и мы свяжемся с вами в течение часа для
              обсуждения деталей проекта
            </p>

            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-engineering-orange hover:bg-orange-600 font-semibold py-4"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить сейчас
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-engineering-orange text-engineering-orange hover:bg-engineering-orange hover:text-white font-semibold py-4"
              >
                <Icon name="Mail" className="mr-2" size={20} />
                Написать письмо
              </Button>
            </div>

            <div className="mt-8 p-4 bg-engineering-orange/10 rounded-lg border border-engineering-orange/20">
              <p className="font-open-sans text-sm text-gray-300">
                <Icon name="Shield" className="inline mr-2" size={16} />
                Конфиденциальность гарантирована. Ваши данные не передаются
                третьим лицам.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
