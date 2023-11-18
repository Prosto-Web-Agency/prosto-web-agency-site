import Header from '@/components/common/header/Header';
import PreviewBlock from './preview';
import Footer from '@/components/common/footer/Footer';
import OurServices from './ourServices/OurServices';
import BackForTeam from './backgroundSection/BackForTeam';
import OurProject from './ourProjects/OurProjects';
import OurTeam from './ourTeam/OurTeam';

export default function MainPage() {
    return (
        <>
            <div className="w-screen overflow-x-hidden">
                <Header />
                <PreviewBlock />
                <div className="w-full">
                <OurServices />
                <div className="text-white w-full relative">
                    <div className="w-full absolute top-[30%] right-0" >
                        <BackForTeam />
                    </div>
                    <OurProject />
                    <OurTeam />
                </div>
            </div>
                <Footer />
            </div>
        </>
    );
}
