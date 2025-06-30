import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="bg-engineering-blue text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-montserrat text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Проектирование
              <br />
              <span className="text-engineering-orange">тепловых сетей</span>
            </h1>
            <p className="font-open-sans text-xl text-gray-300 mb-8 leading-relaxed">
              20 лет опыта в проектировании систем отопления, вентиляции и
              тепловых пунктов любой сложности. Стадии П и Р. Имеем СРО и все
              необходимые лицензии.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-engineering-orange hover:bg-orange-600 text-white font-semibold px-8 py-4"
              >
                <Icon name="FileText" className="mr-2" size={20} />
                Заказать проект
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-engineering-orange text-engineering-orange hover:bg-engineering-orange hover:text-white font-semibold px-8 py-4"
              >
                <Icon name="Phone" className="mr-2" size={20} />8 (914)
                158-98-95
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-engineering-gray/10 rounded-lg p-8 backdrop-blur-sm border border-engineering-orange/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-engineering-orange mb-2">
                    20
                  </div>
                  <div className="text-sm text-gray-300">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-engineering-orange mb-2">
                    100+
                  </div>
                  <div className="text-sm text-gray-300">проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-engineering-orange mb-2">
                    СРО
                  </div>
                  <div className="text-sm text-gray-300">лицензия</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-engineering-orange mb-2">
                    П+Р
                  </div>
                  <div className="text-sm text-gray-300">стадии</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-engineering-orange/30 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 border-2 border-engineering-orange/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
