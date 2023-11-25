'use client';

import Image from 'next/image';
import QUTextField from '@/components/common/textFields/QUTextField';
import React, { useState } from 'react';
import QUMultiLineTextField from '@/components/common/textFields/QUMultiLineTextField';
import { storage } from '@/utils/localStorage';
import {
    COUNT_OF_SENDED_FORMS,
    MAX_COUNT_OF_SENDED_FORMS,
    SEND_FORM_URL,
} from '@/components/pages/main/ourProjects/OurProjects';
import QUPhoneNumberTextField from '@/components/common/textFields/QUPhoneNumberTextField';
import QUNumberTextField from '@/components/common/textFields/QUNumberTextField';

export default function ContactUs() {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [showBadMessage, setShowBadMessage] = useState(false);

    function delSpaces(elem: string) {
        return elem.replace(/ /g, '')
    }

    function sendForm() {
        const formData = {
            name,
            tnumber: contact,
            content: description,
        };

        if (
            Number(storage.get(COUNT_OF_SENDED_FORMS, '0')) <= MAX_COUNT_OF_SENDED_FORMS &&
            name &&
            contact
        ) {
            fetch(SEND_FORM_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then(() => {
                    console.log('good');

                    storage.set(
                        COUNT_OF_SENDED_FORMS,
                        String(Number(storage.get(COUNT_OF_SENDED_FORMS, '0')) + 1),
                    );

                    setName('');
                    setDescription('');
                    setContact('');
                })
                .catch((error) => {
                    console.error('Произошла ошибка:', error);
                });
        } else if (
            Number(storage.get(COUNT_OF_SENDED_FORMS, '0')) >
            MAX_COUNT_OF_SENDED_FORMS
        ) {
            console.log('bad');

            setShowBadMessage(true);
        } else console.log('baaaad');

    }

    return (
        <div className="w-full relative overflow-hidden flex lg:max-h-[1000px] lg:min-h-[830px] h-auto lg:p-[50px] max-w-[1400px] mx-auto p-4 flex-col box-border  bg-black rounded-[20px]">
            <div className="flex flex-col justify-center gap-4 lg:gap-8">
                <div className='flex flex-col'>
                    <div className="flex lg:gap-4 gap-2">
                        <p className="text-heading-light-l-bold lg:text-heading-80-bold text-green">
                            PROSTO
                        </p>
                        <p className="text-heading-light-l lg:text-heading-80">
                            воплотим в жизнь
                        </p>
                    </div>

                    <div className="flex gap-2 lg:gap-4">
                        <p className="text-heading-light-l lg:text-heading-80">вашу</p>
                        <p className="text-heading-light-l-bold lg:text-heading-80-bold text-green">
                            WEB
                        </p>
                        <p className="text-heading-light-l lg:text-heading-80">идею</p>
                    </div>
                </div>

                <div className="absolute 2xl:top-[50px] 2xl:right-[50px] top-13 right-5 w-20 h-20 2xl:h-[130px] 2xl:w-[130px]">
                    <Image
                        className="rounded-5 lg:rounded-3"
                        src={'/logoPWA.svg'}
                        alt={'logo'}
                        width={130}
                        height={130}
                    />
                </div>
            </div>

            <div className="w-full relative h-full flex flex-col gap-[10px] pt-[64px] lg:pt-10 justify-between">
                <div className="w-full flex flex-col gap-[10px]">
                    <div className="flex gap-2 lg:flex-col">
                        <QUTextField type="text" placeholder="Имя*" onChange={(name) => setName(name)} />
                        <QUTextField type="text" placeholder="Компания" />
                    </div>

                    <div className="flex gap-2 lg:flex-col">
                        <QUPhoneNumberTextField placeholder="Номер телефона" onChange={(ph) => setPhone(ph)} phoneNumber={phone}/>
                        <QUTextField type="text" placeholder="E-mail*" onChange={(email) => setContact(email)} />
                    </div>

                    <QUMultiLineTextField placeholder="Описание проекта" onChange={(desc) => setDescription(desc)} />
                </div>

                <div>
                    <button
                        onClick={sendForm}
                        className="w-full rounded-4 bg-green text-heading-l text-black h-[80px]"
                    >
                        отправить
                    </button>

                    {showBadMessage ? (
                        <p className="text-white text-text-l text-center">
                            К сожалению вы отправили слишком много запросов <br /> *_*
                        </p>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
