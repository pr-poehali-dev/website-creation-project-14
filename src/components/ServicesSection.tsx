import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Zap",
    title: "Тепловые сети",
    description:
      "Проектирование и расчет тепловых сетей для жилых, коммерческих и производственных объектов",
  },
  {
    icon: "Home",
    title: "Системы отопления",
    description:
      "Индивидуальные системы отопления для частных домов и многоэтажных зданий",
  },
  {
    icon: "Wind",
    title: "Вентиляция",
    description:
      "Проектирование систем вентиляции и кондиционирования любой сложности",
  },
  {
    icon: "Settings",
    title: "Тепловые пункты",
    description: "Центральные и индивидуальные тепловые пункты с автоматикой",
  },
  {
    icon: "FileCheck",
    title: "Экспертиза",
    description: "Большой опыт прохождения государственной экспертизы проектов",
  },
  {
    icon: "Award",
    title: "Согласования",
    description:
      "Получение всех необходимых согласований и разрешительной документации",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-engineering-blue mb-4">
            Наши услуги
          </h2>
          <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг по проектированию инженерных систем от эскиза до
            ввода в эксплуатацию
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-engineering-orange"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-engineering-orange/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-engineering-orange/20 transition-colors">
                  <Icon
                    name={service.icon as any}
                    className="text-engineering-orange"
                    size={24}
                  />
                </div>
                <CardTitle className="font-montserrat text-xl text-engineering-blue">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-open-sans text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
