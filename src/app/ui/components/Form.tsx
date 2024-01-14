'use client'
import { inconsolata, kanit } from "../fonts"
import { useForm as useFormSpree } from "@formspree/react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { inputSchema } from "@/app/lib/actions";

export function Form(){

    type Inputs = {
        name: string,
        email: string,
        message: string
    }

    const { register, reset, handleSubmit, formState: { errors } } = useForm<Inputs>({
        defaultValues:{
            name: '',
            email: '',
            message: '',
        },
        resolver: zodResolver(inputSchema)
    })

    const [formSpreeState, sendToFormSpree] = useFormSpree("xknavray")

    const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
        sendToFormSpree(data)
        reset()       
    }  
    
    return(
        <form 
            className="w-3/4 flex flex-col items-center text-lg  py-5 bg-dark-bg rounded-xl mt-4 mb-4"
            onSubmit={handleSubmit(onSubmit)}
        >
           
           <div className="relative w-[90%]">
                <input
                    type="text"
                    id="name"
                    placeholder="name"
                    className="w-full bg-[#21201D] rounded-lg text-text indent-2 focus:outline-none placeholder:text-text placeholder:indent-2"
                    {...register('name')}
                />
                <div className="absolute bottom-0 left-0 right-0 mx-auto w-[calc(100%-16px)] h-[1px] border-b-[1px] border-text"></div>
            </div>
            <div className={`h-5 w-full flex justify-center items-center ${inconsolata.className} text-[10px] text-mark-text1 font-bold `}>
                {errors.name?.message && <p>{errors.name?.message}</p>}
            </div>

            <div className="relative w-[90%]">
                <input
                    type="text"
                    id="email"
                    placeholder="email"
                    className="w-full bg-[#21201D] rounded-lg text-text indent-2 focus:outline-none placeholder:text-text placeholder:indent-2"
                    {...register('email')}
                />
                <div className="absolute bottom-0 left-0 right-0 mx-auto w-[calc(100%-16px)] h-[1px] border-b-[1px] border-text"></div>
            </div>
            <div className={`h-5 w-full flex justify-center items-center ${inconsolata.className} text-[10px] text-mark-text1 font-bold `}>
                {errors.email?.message && <p>{errors.email?.message}</p>}
            </div>
            
            <div className="flex flex-col w-[90%]">
                <label className="text-text ml-2 my-0">message</label>
                <div className="relative w-full h-14">
                    <textarea 
                        id="message"
                        placeholder="max 255 chars"
                        className="w-full bg-[#21201D] rounded-lg resize-none text-text h-14 indent-2 focus:outline-none text-start placeholder:text-text placeholder:indent-2 placeholder:text-xs  placeholder:font-extralight"
                        {...register('message')}

                    />
                    <div className="absolute bottom-0 left-0 right-0 mx-auto w-[calc(100%-16px)] h-[1px] border-b-[1px] border-text"></div>
                </div>
                <div className={`h-5 w-full flex justify-center items-center ${inconsolata.className} text-[10px] text-mark-text1 font-bold `}>
                {errors.message?.message && <p>{errors.message?.message}</p>}
            </div>
            </div>
            <button
                type='submit'
                className={`${kanit.className} bg-[#21201D] mt-8 px-6 py-2 rounded-full border-[1px] border-text hover:border-mark-text1`}
                disabled={formSpreeState.submitting}
            >
                Contact
            </button>
           
            {formSpreeState.succeeded && <p className="text-text">Thanks for your message!</p>}
            {formSpreeState.errors && <p className="text-text">Some error occurred, please try again in few minutes!</p>}

        </form>
    )
}

/*
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 1000px var(--color-light-bg) inset;
  -webkit-text-fill-color: var(--color-pri-text);
  border: 1px solid var(--color-pri-text);
  caret-color: var(--color-pri-text);
}
*/