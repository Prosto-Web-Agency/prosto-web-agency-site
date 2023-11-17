import { tServices } from "@/components/pages/main/ourServices";
import GreenButton from "../coloredButton/GreenButton";

export default function EmptyCard({ name, description }: tServices) {
    return (
        <div className="border-2 md:p-10 p-4 h-[270px] md:h-[371px] flex flex-col justify-between items-start grow max-w-[450px] border-white rounded-4">
            <GreenButton name={name} />
            <p className="md:text-text-m text-text-l-m-m">
                {description}
            </p>
        </div>
    );
}