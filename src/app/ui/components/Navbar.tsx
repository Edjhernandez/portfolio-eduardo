'use client'
import Link from "next/link"
import { kanit, inconsolata } from "../fonts"
import { useState } from "react"

export function Navbar(){

    const [burgerBtn, setBugerBtn] = useState<boolean>(false)

    const handleBtnLink = () => {
        setBugerBtn(!burgerBtn)
    }

    return(
        <nav className="bg-dark-bg">
            
            {/* only mobile */}
            
            <div className="flex justify-between items-center px-2 py-4 lg:hidden">
                <div className={`${kanit.className} flex text-mark-text2 text-[32px] tracking-[0.04em] ml-4`}>
                    <p>&lt;/E</p>
                    <p className="text-text">duard</p>
                    <p>o&gt;</p>
                </div>
                <div 
                    className="flex flex-col justify-around items-center w-12 h-12 py-1 border border-white rounded"
                    onClick={handleBtnLink}
                    >
                    <div className="w-4/5 h-1 bg-white rounded-full"></div>
                    <div className="w-4/5 h-1 bg-white rounded-full"></div>
                    <div className="w-4/5 h-1 bg-white rounded-full"></div>
                </div>
            </div>
        
        
        
            {burgerBtn && <div className="w-full">
                <ul className={`flex flex-col justify-center items-center ${inconsolata.className} text-text text-2xl`}>
                    <li className="py-[38px]">
                        <Link 
                            href={'/'}
                            onClick={handleBtnLink}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="py-[38px]">
                        <Link 
                            href={'/about'}
                            onClick={handleBtnLink}
                        >
                            About me
                        </Link>
                    </li>
                    <li className="py-[38px]">
                        <Link 
                            href={'/skills'}
                            onClick={handleBtnLink}
                        >
                            My skills
                        </Link>
                    </li>
                    <li className="py-[38px]">
                        <Link 
                            href={'/projects'}
                            onClick={handleBtnLink}    
                        >
                            Pet-Projects
                        </Link>
                    </li>
                    <li className="py-[38px]">
                        <Link 
                            href={'/contact'}
                            onClick={handleBtnLink}
                        >
                            Contact me
                        </Link>
                    </li>
                </ul>
            </div>}
       
        </nav>
    )
}