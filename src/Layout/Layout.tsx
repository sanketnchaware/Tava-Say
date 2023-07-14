
import Header from '../Components/Header/Header'
import HeroSection from '../Components/Homepage/HeroSection'

const Layout = () => {
    return (
        <div>
            <Header component={<HeroSection />} />
            <section className="bg-red-800 h-screen"></section>
        </div>
    )
}

export default Layout