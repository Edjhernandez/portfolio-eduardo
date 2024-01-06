import { inconsolata } from "../ui/fonts"

export default function Projects() {
    return (
      <main className="flex justify-center flex-col items-center pb-8 w-full">

        <h1 className={`${inconsolata.className} text-mark-text2 not-italic text-[32px] font-bold mt-[64px] mb-8`}>My Works</h1>

        <div className={`${inconsolata.className} w-full not-italic leading-4 flex items-center justify-center flex-col gap-4 lg:flex-row lg:flex-wrap max-w-[1400px]`}>
          
          <div className="w-80 h-80 flex flex-col items-center justify-center py-4 not-italic gap-10 bg-[url(/images/spaceopacity.png)] bg-cover bg-center bg-no-repeat object-cover">
            <h2 className="text-mark-text2 text-[32px] font-bol">Space Travelers</h2>
            <h3 className="text-base text-text font-medium text-center mx-6">Vite, React, TypeScript, Bootstrap, Redux, Jest, MWS</h3>
            <div className="w-11/12 h-[1px] border border-[#A35709]"></div>
            <button className="text-text text-lg font-bold bg-dark-bg rounded-xl flex justify-center items-center w-44  h-14">See more →</button>
          </div>

          <div className="w-80 h-80 flex flex-col items-center justify-center py-4 not-italic gap-10 bg-[url(/images/carsinsurance.png)] bg-cover bg-center bg-no-repeat object-cover">
            <h2 className="text-mark-text2 text-[32px] font-bold">CarInsurance</h2>
            <h3 className="text-base text-text font-medium text-center mx-6">Nextjs, React, TypeScript, tailwind, Redux</h3>
            <div className="w-11/12 h-[1px] border border-[#A35709]"></div>
            <button className="text-text text-lg font-bold bg-dark-bg rounded-xl flex justify-center items-center w-44  h-14">See more →</button>
          </div>

          <div className="w-80 h-80 flex flex-col items-center justify-center py-4 not-italic gap-10 bg-[url(/images/covidmetrics.png)] bg-cover bg-center bg-no-repeat object-cover">
            <h2 className="text-mark-text2 text-[32px] font-bold">Covid Metrics</h2>
            <h3 className="text-base text-text font-medium text-center mx-6">Vite, React, TypeScript, Bootstrap, Redux, Jest, MSW</h3>
            <div className="w-11/12 h-[1px] border border-[#A35709]"></div>
            <button className="text-text text-lg font-bold bg-dark-bg rounded-xl flex justify-center items-center w-44  h-14">See more →</button>
          </div>

        </div>

      </main>
    )
  }
//https://covid-metrics-alpha.vercel.app/
  //'https://space-travelers-rust.vercel.app/'
  //https://tech-challenge-five.vercel.app/

  /*
  <Link
              href={'https://github.com/Edjhernandez/Nextjs-project'}
              className="text-text text-xs font-extralight "
            >Github repository</Link>
            <Link

            */