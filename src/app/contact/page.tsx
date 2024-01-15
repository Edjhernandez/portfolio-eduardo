import Image from "next/image";
import { inconsolata, kanit } from "../ui/fonts";
import Link from "next/link";
import { Form } from "../ui/components/Form/Form";

export default function Contact() {
  return (
    <main
      className={`${inconsolata.className} w-full flex flex-col items-center text-text font-normal not-italic text-xl bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,#21201D)] pt-32 sm:pt-40 lg:h-screen lg:pt-14`}
    >
      <div className="flex flex-col items-center justify-center lg:flex-row lg:mt-16 lg:gap-24 ">
        <section className="w-3/4 max-w-[380px] flex flex-col items-center">
          <Image
            width={140}
            height={140}
            src={"/images/logo3.png"}
            alt="logo"
          />
          <p className="text-center">
            If you liked my work and you need me, I&#8242;m ready to talk to
            you.
          </p>
        </section>

        <section className="text-mark-text2 mt-16 w-full flex flex-col items-center lg:mt-0">
          <h2 className={`${kanit.className} text-[32px] font-normal`}>
            Contacts
          </h2>

          <div className="w-[220px] sm:w-full gap-10 flex flex-col items-start justify-center mt-4 sm:mt-8 sm:flex-row">
            <div className="flex flex-col items-start justify-center gap-10 sm:gap-6">
              <Link
                href={"mailto:edjhernandez@gmail.com"}
                className="flex justify-start"
              >
                <Image
                  width={32}
                  height={32}
                  src={"/images/icon-gmail.svg"}
                  alt="gmail icon"
                />
                <p className="ml-4 text-2xl">mail</p>
              </Link>

              <Link
                href={"https://github.com/Edjhernandez"}
                className="flex justify-start"
              >
                <Image
                  width={32}
                  height={32}
                  src={"/images/icon-github.svg"}
                  alt="github icon"
                />
                <p className="ml-4 text-2xl">Edjhernandez</p>
              </Link>
            </div>

            <div className="flex flex-col items-start justify-center gap-10 sm:gap-6">
              <Link
                href={
                  "https://www.linkedin.com/in/eduardo-hern%C3%A1ndez-53b27358/"
                }
                className="flex justify-start"
              >
                <Image
                  width={32}
                  height={32}
                  src={"/images/icon-linkedin.svg"}
                  alt="linkedin icon"
                />
                <p className="ml-4 text-2xl">LinkedIn</p>
              </Link>

              <Link
                href={"https://twitter.com/EdjhernandezM"}
                className="flex justify-start"
              >
                <Image
                  width={32}
                  height={32}
                  src={"/images/icon-x.svg"}
                  alt="X icon"
                />
                <p className="ml-4 text-2xl">@EdjhernandezM</p>
              </Link>
            </div>

            {/* <Link
              href={'https://api.whatsapp.com/send/?phone=541158133344'}
              className="flex justify-start"
            >
              <Image
                width={32}
                height={32}
                src={'/images/icon-whatsapp.svg'}
                alt='whastapp icon'
              />
              <p className="ml-4 text-2xl">Whatsapp</p>
            </Link> */}
          </div>
        </section>
      </div>

      <section className="text-mark-text2 mt-16 w-full flex flex-col items-center lg:w-1/2">
        <h2 className={`${kanit.className} text-[32px] font-normal`}>
          Make Contact
        </h2>
        <Form />
      </section>
    </main>
  );
}
