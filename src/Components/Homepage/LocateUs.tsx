import React from 'react'
// import locate_us from "../../assets/images/homepage/locate_us.svg"
import address from "../../assets/icons/homepage/address.svg"
import reserve from "../../assets/icons/homepage/reserve.svg"
import timing from "../../assets/icons/homepage/timing.svg"
const LocateUs = () => {
    return (
        <div className='bg-FloralWhite h-screen px-44 py-20 flex flex-col justify-between items-center   '>
            <div className='grid grid-cols-3 gap-x-4 justify-between items-center'>
                {
                    React.Children.toArray([{
                        icon: address,
                        title: "Locate Us   ",
                        content: "Tava Say, Brigade Metropolis, The Arcade, Whitefield Main Road, Garudcharpalya, Bangalore"
                    }, {
                        icon: timing,
                        title: "Open Hours",
                        content: "Mon. to Fri.(10.00 am to 10.00 pm)"
                    }, {
                        icon: reserve,
                        title: "Reserve Table",
                        content: "tavasay@gmail.com"
                    }].map((item) => {
                        return <div className='flex gap-x-4 border-r border-slate-800'>
                            <div className='w-[20%] flex items-center justify-center'>
                                <img className='w-full' src={item?.icon} alt="" />
                            </div>
                            <div className='w-[70%]'>
                                <h6>{item?.title}</h6>
                                <p> {item?.content}</p>
                            </div>
                        </div>
                    }))
                }

            </div>
            <div className='flex justify-between items-center gap-20'>
                <img src="https://10619-2.s.cdn12.com/rests/original/102_514679913.jpg" alt="locate_us"  className='w-1/2 rounded-xl'/>
                <div className='flex flex-col gap-y-2'>
                    <div>
                        <h5>The Story</h5>
                        <p>
                            Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content gfshere', makinlook like readable English. Many desktop publishing packages.</p>
                    </div>
                    <div className='flex'>
                        <div>
                            <h5>1996</h5>
                            <p>Lorem Ipsum is that it has a more-or-less normal Content content</p>
                        </div>
                        <div>
                            <h5>2021</h5>
                            <p>
                                Lorem Ipsum is that it has a more-or-less normal Content content</p>
                        </div>
                    </div>
                    <div>
                        <h5>Contact Us</h5>
                        <p>8378950255</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LocateUs