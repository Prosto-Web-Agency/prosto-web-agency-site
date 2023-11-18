import TitleMain from "@/components/common/Title/TitleMain";
import Image from "next/image";

export default function OurProject() {
    return (
        <div className=" w-full flex flex-col items-center md:p-10 p-5 relative text-white md:py-40 py-40">
            <div className="flex flex-col items-start justify-start max-w-[1400px] w-full">
                <TitleMain text={'НАШИ ПРОЕКТЫ'} />
                <div className="grid xl:grid-cols-3 xl:gap-4 w-full max-w-[1400px] max-h-[1200px]">

                    <div className="border-2 p-8 border-white rounded-4 flex flex-col justify-start">
                        <div className="w-full flex justify-start absolute">
                            <div className="md:text-text-l text-text-l-m-m rounded-[100px] text-black md:px-6 px-4 py-2 bg-green flex justify-center items-center gap-3 relative">
                                <Image src='/ourProjects/Quado.png'
                                    width={30}
                                    height={30}
                                    alt='Quado'
                                />
                                QUADO
                            </div>
                        </div>
                        <div className="text-heading-ll-bold h-full flex items-center">
                            ВЕБСАЙТ <br />
                            ДЛЯ СТУДИИ <br />
                            РАЗРАБОТКИ QUADO
                        </div>
                    </div>

                    <div className="border-2 row-span-2 bg-green text-black border-white rounded-4 p-8 flex flex-col justify-between gap-10">
                        <div className="md:text-text-l text-text-l-m-m">
                            ТЕЛЕГРАМ <br />
                            БОТЫ
                        </div>
                        <div className="md:text-heading-l text-heading-bold-l">
                            НАША <br />
                            КОМАНДА<br />
                            ИМЕЕТ<br />
                            БОЛЬШОЙ <br />
                            ОПЫТ В <br />
                            РАЗРАБОТКЕ <br />
                            ТЕЛЕГРАМ <br />
                            БОТОВ
                        </div>
                        <div className="pb-10">
                            <span className="flex items-center gap-2">
                                <Image src='/ourProjects/Star.png'
                                    width={23}
                                    height={23}
                                    alt='Quado'
                                />
                                Для автоматизации бизнеса
                            </span>
                            <span className="flex items-center gap-2">
                                <Image src='/ourProjects/Star.png'
                                    width={23}
                                    height={23}
                                    alt='Quado'
                                />
                                Для привлечения клиентов
                            </span>
                        </div>
                    </div>

                    <div className="border-2 border-white row-span-2 rounded-4 p-8 flex justify-between flex-col gap-10">
                        <div className="flex flex-col gap-8">
                            <div className="w-full flex justify-start">
                                <div className="md:text-text-l text-text-l-m-m rounded-[100px] text-black md:px-6 px-4 py-2 bg-green flex justify-center items-center gap-3 relative">
                                    <Image src='/ourProjects/Rec.png'
                                        width={30}
                                        height={30}
                                        alt='Quado'
                                    />
                                    REC’s Bcard’s
                                </div>
                            </div>
                            <div className="text-heading-ll-bold">
                                СДЕЛАЙ СВОЮ ВИЗИТКУ
                            </div>
                        </div>
                        <Image src='/ourProjects/RecPrePhoto.png'
                            width={388}
                            height={450}
                            alt='Quado'
                        />
                    </div>

                    <div className=" border-2 p-8 border-white rounded-4 flex flex-col gap-5">
                        <Image src='/ourProjects/ABC.png'
                            width={40}
                            height={40}
                            alt='Quado'
                        />
                        <div className="text-heading-ll-bold">
                            ВЕБСАЙТ ДЛЯ АВС
                        </div>
                    </div>

                    <div className="col-span-3 border-2 border-white rounded-4 flex flex-row-reverse h-[400px] p-8">
                        <div className="absolute">
                            <div className="flex items-end">
                                <Image src='/ourProjects/SuperStar.png'
                                    width={105}
                                    height={105}
                                    alt='Quado'
                                />
                            </div>
                        </div>

                        <div className="w-full h-full text-heading-prepre-xl flex justify-center items-center">
                            <Image src='/ourProjects/yourProjectPart.png'
                                width={350}
                                height={200}
                                alt='Quado'
                            />
                            <div className="ml-[-100px]">
                                ТУТ МОЖЕТ БЫТЬ ВАШ ПРОЕКТ
                            </div>
                            <Image src='/ourProjects/yourProjectPart.png'
                                className="rotate-180 ml-[-150px]"
                                width={350}
                                height={200}
                                alt='Quado'
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}