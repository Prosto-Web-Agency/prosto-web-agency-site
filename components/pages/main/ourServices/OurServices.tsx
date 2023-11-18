import TitleMain from "@/components/common/Title/TitleMain";
import EmptyCard from "@/components/common/cards/EmptyCard";
import SpiralBackground from "@/public/spiralBack";

const SERVICES: tServices[] = [
    {
        name: 'аналитика',
        description: 'Изучаем спрос и конкурентов, строим эффективный CJM. Прорабатываем документацию и ТЗ, учитывая основные запросы клиента.'
    },
    {
        name: 'мобильная разработка',
        description: 'Разрабатываем приложения для IOS и Android, учитывая архитектуру мобильного приложения и особенностей дизайна.'
    },
    {
        name: 'веб-разработка',
        description: 'Создаем цифровые продукты: корпоративные и промо-сайты, платформы и высоко нагруженные системы.'
    },
    {
        name: 'IT-безопасность',
        description: 'Придерживаемся всех стандартов регулятора в сфере обеспечения защиты информации. Проводим аудиты безопасности информационных систем.'
    },
    {
        name: 'UI/UX дизайн',
        description: 'Детально прорабатываем макеты, дизайн-систему и UI-kit. Для проверки дизайн-гипотиз отдельно создаем User Flow и интеррактивный прототип.'
    },
    {
        name: 'поддержка проектов',
        description: 'Поддерживаем стабильную работу всех проектов и помогаем совершенствовать их, основываясь на последних тенденциях в IT-сфере.'
    },
];

export type tServices = {
    name: string,
    description: string
}

export default function OurServices() {
    return (
        <section className=" w-full flex flex-col items-center md:p-10 p-5 relative text-white md:py-40 py-40">
            <div className="flex flex-col items-start justify-start max-w-[1400px]">
                <TitleMain text={'НАШИ УСЛУГИ'} />

                <div className="flex flex-wrap justify-start items-start gap-6 max-w-[1400px]">
                    {
                        SERVICES.map(({ name, description }: tServices) => (
                            <EmptyCard key={name} name={name} description={description} />
                        ))
                    }
                </div>
            </div>

            <div className="absolute top-[-270px] right-0">
                <SpiralBackground />
            </div>

        </section>
    );
}