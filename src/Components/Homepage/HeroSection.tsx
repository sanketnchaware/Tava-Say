
import CustomButton from '../Buttons/CustomButton'
import hero from "../../assets/images/homepage/hero.svg"
const HeroSection = () => {
    return (
        <div className="flex gap-10 justify-center  items-center mx-44">
            <div className='py-9'>
                <h3 className="text-FloralWhite">Welcome to <span className='text-[6rem]'>T</span>ava<span className='text-[96px]'>S</span>ay ! </h3>
                <br />
                <p  className="text-xl text-FloralWhite"><span className='text-[25px]'>"S</span>tep into a realm of North Indian culinary bliss, where centuries-old traditions blend harmoniously with modern flavors, tantalizing your taste buds with every savory morsel. "</p>

                <br />      <CustomButton variant="outlined" Label="View Menu" />
            </div>
            <div className='relative w-8/12'>
                <img className=' w-full rounded-xl brightness-75 ' src="https://lh3.googleusercontent.com/WifIjJ8ozrOOz4jT8n_J14GSFqEN1lQT6MjDgaRr6kFdGLSQtplK2ZZumhBi1S0d-m5zNsnw3Uf91k3yZ0SvP9_fNw=s750" alt="hero" />
            </div>
        </div>
    )
}

export default HeroSection