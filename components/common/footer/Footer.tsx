'use client'

import Image from "next/image";
import Link from "next/link";

type TSocial = {
    name: string
    phone: string
}

export const SOCIAL: TSocial[] = [
    {
        name: 'Лавров Лев',
        phone: '+7-996-324-04-98'
    },
    {
        name: 'Дьяченко Данил',
        phone: '+7-999-501-05-02'
    },
]


export default function Footer() {
    return (
        <footer className="min-h-[300px] max-w-[1400px] w-screen md:pl-10 pl-3 flex flex-col md:justify-around justify-between items-center text-white">
            <div className="w-full">
                <div className="md:w-[800px] w-full flex flex-col md:flex-row gap-5 md:gap-0">
                    <div className="pr-9 w-[340px]">
                        <div className="text-heading-light-l-bold">Контакты</div>
                        <div className="text-text-m-long flex justify-between">
                            <span >
                                Лавров Лев
                            </span>

                            <a href='tel:79963240498'>+7-996-324-04-98</a>
                        </div>
                        <div className="text-text-m-long flex justify-between">
                            <span>
                            Дьяченко Данил
                            </span>

                            <a href='tel:79995010502'>+7-999-501-05-02</a>
                        </div>
                    </div>

                    <div className="flex flex-col md:pl-6 md:border-l-2 border-0 border-white pr-9">
                        <span className="text-heading-light-l-bold">
                            Почта
                        </span>
                        <a href="mailto:prosto@web.agency" target="_blank" className="text-text-m-long">prosto@web.agency</a>
                    </div>
                    <div className="flex flex-col md:pl-6 md:border-l-2 border-0 border-white">
                        <span className="text-heading-light-l-bold">
                            Telegram
                        </span>
                        <a href="https://t.me/prosto-agency" target="_blank" className="text-text-m-long">@prosto-agency</a>
                    </div>
                </div>
                <div className="w-[calc(100vw-600px)]">
                </div>
            </div>

            <div className="h-[150px] w-full flex items-center">
                <span className="lg:text-heading-xxl sm:text-heading-pre-xl text-heading-l-bold text-white">
                    PROSTO
                </span>
                <span className="lg:text-heading-xxl sm:text-heading-pre-xl text-heading-l-bold text-green">
                    WEB
                </span>
                <span className="lg:text-heading-xxl sm:text-heading-pre-xl text-heading-l-bold text-white">
                    AGENCY
                </span>
            </div>
        </footer>
    )
}