import { inconsolata } from "./ui/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className={`${inconsolata.className} not-italic leading-normal pt-32`}>
      
      <div className="w-full flex justify-center">
      <div className="pl-3">
        <h1 className="text-mark-text2 text-[40px] font-blacks sm:text-[64px]">Eduardo Hernandez</h1>
        <h5 className="text-text text-[32px] font-bold my-4 sm:text-[40px]">Software Developer</h5>
        <h6 className="text-text text-2xl font-normal  max-w-sm sm:text-[20px]"> I'm a Software Developer 🤓, particularly passionate about the use of techs for problem-solving & project development.</h6>
      </div>
      </div>
      
      <div className="relative">

        <Image
          width={300}
          height={300}
          src={'/images/Untitled-1.png'}
          alt="E symbol"
          className="absolute top-28 ml-auto mr-auto left-0 right-0 sm:hidden"
        /> 

        <Image
          width={500}
          height={500}
          src={'/images/Untitled-1.png'}
          alt="E symbol"
          className="hidden sm:block sm:absolute sm:top-28 sm:ml-auto sm:mr-auto sm:left-0 sm:right-0"
        /> 

        

      <div className="mt-16 mb-16 flex justify-center">
            <p className="font-normal text-[10px] text-[#A35709] sm:text-base ">let button_menu = document.querySelector(".header_button");<br></br>
              let float_menu = document.querySelector(".header_menu--float");<br></br>
              <br></br>
              let line_top = document.querySelector(".header_button_line--<br></br>
              top");<br></br>
              let line_under = document.querySelector(".header_button_line--<br></br>
              bottom");<br></br>
              <br></br>
              button_menu.isSelected = false;<br></br>
              <br></br>
              function addEffectWriting(element, time) &#123;<br></br>
              &nbsp;let element_array = element.innerText.split("");<br></br>
              <br></br>
              &nbsp;element.count = 0;<br></br>
              &nbsp;element.innerText = "";<br></br>
              <br></br>
              &nbsp;function writeSymbols() &#123;<br></br>
              &nbsp;&nbsp;element.innerText += element_array[element.count];<br></br>
              &nbsp;&nbsp;element.count++;<br></br>
              <br></br>
              &nbsp;&nbsp;if (element.count &lt;= element_array.length) &#123;<br></br>
              &nbsp;&nbsp;&nbsp;setTimeout(() =&#62; &#123;<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;writeSymbols();<br></br>
              &nbsp;&nbsp;&nbsp;&#123;, time);<br></br>
              &nbsp;&nbsp;&#123; else if (element.count &#62;= element_array.length) &#123;<br></br>
              &nbsp;&nbsp;&nbsp;element.count = 0;<br></br>
              &nbsp;&nbsp;&nbsp;element.innerText = "";<br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;writeSymbols();<br></br>
              &nbsp;&nbsp;&#123;<br></br>
              &nbsp;&#123;<br></br>
              &nbsp;writeSymbols();<br></br>
              &#123; ...
            </p>
          </div>

      </div>
      
      
    </main>
  )
}
