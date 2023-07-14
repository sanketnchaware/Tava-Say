import React from 'react'
import CustomButton from '../Buttons/CustomButton'
import hero from "../../assets/images/homepage/hero.svg"
const HeroSection = () => {
    return (
        <div className="flex justify-center  items-center mx-44">
            <div className='py-9'>
                <h1 className="text-FloralWhite">Welcome to Restaurantate</h1>
                <br />
                <p className="text-FloralWhite">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy .</p>

                <br />      <CustomButton variant="outlined" Label="View Menu" />
            </div>
            <div className='relative w-full'>
                <img className=' absolute -top-40 right-0 w-8/12 ' src={hero} alt="hero" />
            </div>
        </div>
    )
}

export default HeroSection