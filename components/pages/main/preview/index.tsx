export default function PreviewBlock() {
    return (
        <section className='w-screen overflow-hidden h-screen flex flex-col justify-end items-center' style={{ background: 'url(/backgroundMain.png) center/cover no-repeat' }}>

            <div className="w-full h-[calc(100vh-100px)] pb-10 text-white flex flex-col justify-around items-center">
                <div>
                    <h1 className="opacity-0 absolute top-1/2">Просто веб агенство</h1>
                </div>
                <div className="flex justify-center flex-col items-center">
                    <span className="md:text-heading-xxl text-heading-pre-xl">
                        ПРОСТО
                    </span>
                    <span className="md:text-heading-l text-heading-light-l">
                        ВЕБ АГЕНТСТВО
                    </span>
                </div>

                <div className="flex justify-center flex-col items-center gap-10">
                    <div className="flex justify-center flex-col items-center md:text-text-l-light text-text-l-light-m">
                        <span>
                            НАША КОМАНДА ПОМОЖЕТ
                        </span>
                        <span>
                            ВОПЛОТИТЬ В ЖИЗНЬ ВАШУ ИДЕЮ
                        </span>
                    </div>

                    <button className="px-10 py-4 bg-green text-black rounded-4 text-text-m">
                        Заказать
                    </button>
                </div>
            </div>

        </section>
    );
}