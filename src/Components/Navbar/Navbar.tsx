
import fb from "../../assets/icons/homepage/fb.svg"
import insta from "../../assets/icons/homepage/insta.svg"
import twitter from "../../assets/icons/homepage/twitter.svg"
import pintrest from "../../assets/icons/homepage/pintrest.svg"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between border-y px-44 py-4 border-BlackCoral ">
            <div className='flex justify-between gap-x-16  items-center'>
                {
                    ["Homes", "About", "  Menu   ", "Reservation", "Gallery", "Blog", "Contact"].map((link) => {
                        return (
                            <p className='text-Gainsboro'> {link}</p>
                        )
                    })
                }


            </div>
            <div className='flex  justify-between gap-x-8  items-center'>
                {
                    [fb, insta, twitter, pintrest].map((icon) => {
                        return (
                            <img src={icon} alt="" />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Navbar