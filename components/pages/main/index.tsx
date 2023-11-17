import Header from '@/components/common/header/Header';
import PreviewBlock from './preview';
import Footer from '@/components/common/footer/Footer';
import BackgroundSection from './backgroundSection';

export default function MainPage() {
    return (
        <>
            <div className="w-screen overflow-x-hidden">
                <Header />
                <PreviewBlock />
                <BackgroundSection />
                <Footer />
            </div>
        </>
    );
}
