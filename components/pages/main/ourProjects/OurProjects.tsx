import TitleMain from "@/components/common/Title/TitleMain";
import Image from "next/image";

export default function OurProject() {
    return (
        <div className=" w-full flex flex-col items-center md:p-10 p-5 relative text-white md:py-40 py-40">
            <div className="flex flex-col items-start justify-start max-w-[1400px] w-full">

                <TitleMain text={'НАШИ ПРОЕКТЫ'} />

                <div className="grid xl:grid-cols-3 xl:gap-4 w-full max-w-[1400px] h-[1200px]">

                    <div className="border-2 border-white rounded-4">
                        <div>
                            QUADO
                        </div>
                        <div>
                            Вебсайт
                            для студии разработки QUADO
                        </div>
                    </div>

                    <div className="border-2 row-span-2 border-white rounded-4">
                        <div>
                            ТЕЛГРАМ БОТЫ
                        </div>
                        <div>
                            Наша команда имеет большой опыт в разработке Телеграм ботов
                        </div>
                        <div>
                            <span>
                                Для автоматизации бизнеса
                            </span>
                            <span>
                                Для привлечения клиентов
                            </span>
                        </div>
                    </div>

                    <div className="border-2 border-white row-span-2 rounded-4">
                        <div>
                            QUADO
                        </div>
                        <div>

                        </div>
                        {/* <Image /> */}
                    </div>

                    <div className=" border-2 border-white rounded-4">
                        {/* <Image /> */}
                        <div>
                            ВЕБСАЙТ ДЛЯ АВС
                        </div>
                    </div>

                    <div className="col-span-3 border-2 border-white rounded-4">
                        ТУТ МОЖЕТ БЫТЬ ВАШ ПРОЕКТ
                    </div>

                </div>
            </div>
        </div>
    );
}