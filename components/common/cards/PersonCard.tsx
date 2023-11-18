import { tOurteam } from "@/components/pages/main/ourTeam/OurTeam";
import Image from "next/image";

export default function PersonCard({ photo, name, jobTitle }: tOurteam) {
    return (
        <div className="p-6 h-[445px] w-[339px] flex flex-col gap-6 items-center border-2 border-white rounded-4">
            <Image src={`${photo}`}
                width={287}
                height={297}
                alt={name}
            />
            <div className="flex flex-col gap-1 w-full items-start">
                <div className="text-text-m">
                    {name}
                </div>
                <p className="text-text-l-light-m">
                    {jobTitle}
                </p>
            </div>

        </div>
    );
}