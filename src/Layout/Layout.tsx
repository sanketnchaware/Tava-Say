
import Header from '../Components/Header/Header'
import HeroSection from '../Components/Homepage/HeroSection'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Footer from '../Components/Footer/Footer'
const Layout = () => {
    return (
        <div>
            <Header component={<HeroSection />} />

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            <Footer />


        </div>
    )
}

export default Layout