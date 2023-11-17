import SpiralBackground from "@/public/spiralBack";
import OurServices from "../ourServices";
import PreviewBlock from "../preview";
import OurProject from "../ourProjects/OurProjects";
import OurTeam from "../ourTeam/OurTeam";
import BackForTeam from "./BackForTeam";

export default function BackgroundSection() {
    return (
        <>
            <div className="w-full">
                <OurServices />
                <div className="text-white w-full relative">
                    <div className="w-full h-screen absolute top-[30%] right-0" >
                        <BackForTeam />
                    </div>
                    <div className="w-full h-screen absolute top-[30%] right-0" >
                        <BackForTeam />
                    </div>
                    <OurProject />
                    <OurTeam />
                </div>
            </div>
        </>
    );
}
