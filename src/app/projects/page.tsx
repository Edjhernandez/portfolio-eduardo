import Link from "next/link"
import { inconsolata } from "../ui/fonts"

export default function Projects() {
    return (
      <main className="flex justify-center flex-col items-center pb-8 w-full">

        <h1 className={`${inconsolata.className} text-mark-text2 not-italic text-[32px] font-bold mt-[64px] mb-8`}>My Works</h1>

        <div className={`${inconsolata.className} w-full text-white text-2xl not-italic font-medium leading-4  flex items-center justify-center flex-col gap-4 sm:text-[32px] sm:font-bold sm:flex-row sm:flex-wrap max-w-[1400px] sm:px-9 `}>
          
          <div className="w-80 h-80 flex flex-col items-center justify-center py-4  not-italic gap-8 bg-[url(/images/spaceopacity.png)] bg-cover bg-center bg-no-repeat object-cover">
            <h2 className="text-mark-text2 text-[32px] font-bold  ">Space Travelers</h2>
            <h3 className="text-base text-text font-medium text-center">Vite, React, TypeScript, Bootstrap, Redux, Jest, MWS</h3>
            <div className="w-3/4 h-[1px] border border-[#A35709] "></div>
            <button className="text-text text-lg font-bold bg-dark-bg rounded-xl flex justify-center items-center w-44  h-14">See more →</button>
          </div>

        </div>

      </main>
    )
  }

  //'https://space-travelers-rust.vercel.app/'

  /*
  <Link
              href={'https://github.com/Edjhernandez/Nextjs-project'}
              className="text-text text-xs font-extralight "
            >Github repository</Link>
            <Link

            */