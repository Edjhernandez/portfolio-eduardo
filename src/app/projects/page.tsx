import { inconsolata } from "../ui/fonts"
import { myWorks } from "../lib/dataForComponents"
import { Work } from "../ui/components/Work"
import { dataWork } from "../lib/definitions"

export default function Projects() {

    return (
      <main className="flex justify-center flex-col items-center pb-8 w-full">

        <h1 className={`${inconsolata.className} text-mark-text2 not-italic text-[32px] font-bold mt-[64px] mb-8`}>My Works</h1>

        <div className={`${inconsolata.className} w-full not-italic leading-4 flex items-center justify-center flex-col gap-4 lg:flex-row lg:flex-wrap max-w-[1400px]`}>

          {myWorks.map((work: dataWork) => {
            return(
              <Work 
                key={work.title}
                title={work.title}
                bgOpacity={work.bgOpacity}
                photo={work.photo}
                link={work.link}
                description={work.description}
                toolsUsed={work.toolsUsed}
              />
            )
          })}

        </div>

      </main>
    )
  }