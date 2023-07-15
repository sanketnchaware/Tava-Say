
import CustomButton from '../Buttons/CustomButton'
import hero from "../../assets/images/homepage/hero.svg"
const HeroSection = () => {
    return (
        <div className="flex justify-center  items-center mx-44">
            <div className='py-9'>
                <h3 className="text-FloralWhite">Welcome to Tava Say ! </h3>
                <br />
                <p className="text-FloralWhite">" Step into a realm of North Indian culinary bliss, where centuries-old traditions blend harmoniously with modern flavors, tantalizing your taste buds with every savory morsel. "</p>

                <br />      <CustomButton variant="outlined" Label="View Menu" />
            </div>
            <div className='relative w-full'>
                <img className=' absolute -top-40 right-0 w-8/12 ' src={hero} alt="hero" />
            </div>
        </div>
    )
}

export default HeroSection