import TitleMain from "@/components/common/Title/TitleMain";
import PersonCard from "@/components/common/cards/PersonCard";

const OURTEAM = [
    {
        photo: '/ourTeam/Lev.png',
        name: 'ЛЕВ ЛАВРОВ',
        jobTitle: 'Frontend developer'
    },
    {
        photo: '/ourTeam/Oleg.png',
        name: 'ОЛЕГ НЕВОЛИН',
        jobTitle: 'Frontend developer'
    },
    {
        photo: '/ourTeam/Danil.png',
        name: 'ДАНИЛ ДЬЯЧЕНКО',
        jobTitle: 'Backend developer'
    },
    {
        photo: '/ourTeam/DesignTeam.png',
        name: 'Ux/Ui Design Team',
        jobTitle: 'Design'
    },
];

export type tOurteam = {
    photo: string,
    name: string,
    jobTitle: string
}

export default function OurTeam() {
    return (
        <section className=" w-full flex flex-col items-start md:p-10 relative text-white md:py-40 py-40">
            <div className="flex pl-5 flex-col items-start justify-start max-w-[1400px]">
                <TitleMain text={'НАША КОМАНДА'} />
            </div>

            <div className="flex w-full px-5 relative 2xl:overflow-x-hidden overflow-x-scroll">
                <div className="flex gap-6">
                    {
                        OURTEAM.map((e) => (
                            <PersonCard {...e} key={e.name} />
                        ))
                    }
                </div>

            </div>
        </section>
    );
}