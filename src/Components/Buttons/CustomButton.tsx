import React from 'react'

const CustomButton = ({ Label, onClick, variant }: any) => {


    if (variant === "outlined")
        return (
            <button className="border px-8 h-12 rounded py-2 border-Fawn text-FloralWhite ">{Label}</button>
        )
    else return <button className=" bg-Fawn  h-12  px-8 rounded py-2  text-Gunmetal font-semibold ">{Label}</button>
}

export default CustomButton