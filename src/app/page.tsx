'use client'
import { inconsolata, kanit } from "./ui/fonts";
import Image from "next/image";
import { saveAs } from "file-saver"

export default function Home() {

  const saveFile = () => {
    saveAs(
      "./Eduardo-Resume.pdf",
      "Eduardo-Resume.pdf"
    );
  };
  
  return (
    <main className={`pt-20 pb-10 bg-[radial-gradient(circle_500px_at_50%_600px,#3e3e3e,#21201D)] ${inconsolata.className} not-italic leading-normal lg:flex`}>
      
      <div className="w-full mt-24 flex flex-col items-center lg:w-1/2">
        <div className="pl-3">
          <h1 className="text-mark-text2 text-[40px] font-blacks sm:text-[64px]">Eduardo Hernandez</h1>
          <h5 className="text-text text-[32px] font-bold my-4 sm:text-[40px]">Software Developer</h5>
          <h6 className="text-text text-2xl font-normal  max-w-sm sm:text-[20px]"> I&apos;m a Software Developer 🤓, particularly passionate about the use of techs for problem-solving & project development.</h6>
        </div>
        <div className="w-full flex justify-center">
            <button
              className={`${kanit.className} bg-[#21201D] py-3 px-6 mt-14 rounded-full text-mark-text2 border-2 border-text cursor-pointer hover:border-mark-text2 text-lg leading-8`}
              onClick={() => saveFile()}
            >Get FREE Resume</button>
        </div>
      </div>
      
      <div className="relative mt-16 lg:w-1/2 lg:mt-16">

        <Image
          width={380}
          height={380}
          src={'/images/logo3.png'}
          alt="E symbol"
          className="absolute top-4 ml-auto mr-auto left-0 right-0 sm:hidden"
        /> 

        <Image
          width={660}
          height={660}
          src={'/images/logo3.png'}
          alt="E symbol"
          className="hidden sm:block sm:absolute sm:top-4 sm:mx-auto sm:left-0 sm:right-0"
        /> 

        <div className="flex justify-center">
            
          <p className="font-normal text-[10px] text-[#A35709] sm:text-base">let button_menu = document.querySelector(&quot;.header_button&quot;);<br></br>
            let float_menu = document.querySelector(&quot;.header_menu--float&quot;);<br></br>
            <br></br>
            let line_top = document.querySelector(&quot;.header_button_line--top&quot;);<br></br>             
            let line_under = document.querySelector(&quot;.header_button_line--<br></br>
            bottom&quot;);<br></br>
            <br></br>
            button_menu.isSelected = false;<br></br>
            <br></br>
            function addEffectWriting(element, time) &#123;<br></br>
            &nbsp;let element_array = element.innerText.split(&quot;&quot;);<br></br>
            <br></br>
            &nbsp;element.count = 0;<br></br>
            &nbsp;element.innerText = &quot;&quot;;<br></br>
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
            &nbsp;&nbsp;&nbsp;element.innerText = &quot;&quot;;<br></br>
            <br></br>
            &nbsp;&nbsp;&nbsp;writeSymbols();<br></br>
            &nbsp;&nbsp;&#123;<br></br>
            &#123; ...
          </p>

        </div>

      </div>
      
    </main>
  )
}


/*
import { saveAs } from "file-saver"
const saveFile = () => {
    saveAs(
      "./Resume.pdf",
      "Resume-Daniela.pdf"
    );
  };
*/