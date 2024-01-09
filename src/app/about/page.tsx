import Image from "next/image"
import { inconsolata } from "../ui/fonts"

export default function About() {
    return (
      <main className={`${inconsolata.className} bg-[radial-gradient(circle_600px_at_50%_1000px,#3e3e3e,#21201D)] h-screen text-text text-base font-medium pt-16 lg:text-xl`}>

        <div className="px-8 lg:max-w-5xl lg:mx-auto">
        
          <p className="indent-4 mt-8">Hello everyone! 🤝 Eduardo is my name, I’m a FullStack Web Developer 🤓, particularly passionate about the use of techs like Javascript, Typescript, React, Nextjs, HTML and CSS for problem-solving & project development.</p>

          <p className="mt-8 mb-8 indent-4">On weekends surely, I’ll be playing soccer ⚽⚽ with friends, work partners, and family on the courts or 🎮, also, I love watching all sports on TV. The better invested time is with my wife and Kids, most times they decide what to do!</p>

          <p className="indent-4">When I wasn’t into the techs world I graduated 🎓 as an electrical engineer and worked as a Project Manager of construction works, where I saw the need to implement an automatic system to calculate payrolls and final settlements, It was (few years ago) my first contact with coding 💾 and a real application, some years later here I am.</p>
          
        </div>

        <Image
          width={1600}
          height={100}
          alt="sunset"
          src={'/images/Artboard1.png'}
          className="absolute bottom-0 lg:hidden"
        />

        <Image
          width={260}
          height={260}
          alt="sunset"
          src={'/images/logo.png'}
          className="hidden lg:block mx-auto mt-[100px]"
        />

      </main> 
    )
  }

 