'use client'
import { dataWork } from "@/app/lib/definitions"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Work(props: dataWork){

    const [showModal, setShowModal] = useState<boolean>(false)
        
    return(
        <section>
            
            <div className={`w-80 h-80 flex flex-col items-center justify-center py-4 not-italic gap-10 relative`}>
                <Image
                    width={320}
                    height={320}
                    src={props.bgOpacity}
                    alt="background project image"
                    className="absolute"
                />
                <div className="flex flex-col items-center justify-center py-4 not-italic gap-10 z-10">
                <h2 className="text-mark-text2 text-[32px] font-bol">{props.title}</h2>
                <h3 className="text-base text-text font-medium text-center mx-6">{props.toolsUsed}</h3>
                <div className="w-11/12 h-[1px] border border-[#A35709]"></div>
                <button 
                    className="text-text text-lg font-bold bg-dark-bg rounded-xl flex justify-center items-center w-44 h-14"
                    onClick={() => setShowModal(!showModal)}  
                >
                    See more →
                </button>
                </div>
            </div>

            {showModal && 
            <div className="w-screen h-screen fixed top-0 left-0 z-50">
                <div className="bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,#21201D)] z-[999] w-[90%] border-2 border-text rounded-lg flex flex-col items-center px-4 gap-6 py-auto max-w-md absolute top-32 right-0 left-0 m-auto md:flex-row md:top-1 md:bottom-1 md:max-w-3xl md:max-h-[340px] lg:max-w-6xl lg:max-h-[540px]">
                    <button
                        onClick={() => setShowModal(false)}
                        className="pointer absolute right-2 top-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="fill-[#f0e3ca] w-8 h-8"><path d="M342.218-280 480-417.782 617.782-280 680-342.218 542.218-480 680-617.782 617.782-680 480-542.218 342.218-680 280-617.782 417.782-480 280-342.218 342.218-280ZM480-60.782q-87.522 0-163.906-32.96-76.385-32.96-132.888-89.464-56.504-56.503-89.464-132.888Q60.782-392.478 60.782-480t32.96-163.906q32.96-76.385 89.464-132.888 56.503-56.504 132.888-89.464 76.384-32.96 163.906-32.96t163.906 32.96q76.385 32.96 132.888 89.464 56.504 56.503 89.464 132.888 32.96 76.384 32.96 163.906t-32.96 163.906q-32.96 76.385-89.464 132.888-56.503 56.504-132.888 89.464Q567.522-60.782 480-60.782Zm0-106.001q131.739 0 222.478-90.739T793.217-480q0-131.739-90.739-222.478T480-793.217q-131.739 0-222.478 90.739T166.783-480q0 131.739 90.739 222.478T480-166.783ZM480-480Z"/></svg>
                    </button>
                    
                    <Link
                        href={props.link}
                        className="mt-24 md:my-auto"
                    >
                        <Image
                            width = {1000}
                            height = {1000}
                            alt = 'project photo'
                            src = {props.photo}                    
                        />
                    </Link>
                    <div className="flex flex-col items-center gap-5">
                        <h2 className="text-mark-text2 text-[32px] font-bol mt-5">{props.title}</h2>
                        <div className="w-full h-[1px] border border-[#A35709]"></div>
                        <p className="text-base text-text font-medium text-center">{props.description}</p>
                        <div className="w-full h-[1px] border border-[#A35709]"></div>
                        <Link
                            href={props.link}
                            className="text-[14px] text-text font-medium text-center underline mb-5"
                        >
                            Live Demo Link
                        </Link>
                    </div>
                    
                </div>
                <div 
                    className="w-full h-full bg-transparent backdrop-blur-sm"
                    onClick={() => setShowModal(false)}
                ></div>
            </div>}

        </section>
    )
}
