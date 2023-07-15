
import Header from '../Components/Header/Header'
import HeroSection from '../Components/Homepage/HeroSection'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
const Layout = () => {
    return (
        <div>
            <Header component={<HeroSection />} />

            <Routes>
                <Route path="/" element={<Home />} />



            </Routes>


        </div>
    )
}

export default Layout