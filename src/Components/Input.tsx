import { forwardRef} from "react";

interface InputType {
    type: string;
    imgSrc: string;
    text: string;
    hidden: boolean;
    toggleIcon?: string
    error?: string

}
const Input = forwardRef<HTMLInputElement, InputType>(({ type, imgSrc, text,  error }, ref) => {
    return (
        <div className='flex p-2 mx-4 rounded-lg  ' style={{ backgroundColor: '#F4F4F4' }}>
            <div className='flex justify-center px-3'>
                <img src={imgSrc} alt="" />
            </div>
            <div className='flex gap-1 flex-col flex-grow'>
                <div className="flex justify-between items-center gap-1">
                    <p className='text-xs'>{text}</p>
                    {error && (

                        <p className='text-red-500 text-xs mt-1  z-10 text-center '>{error}</p> // Display error message
                    )}
                </div>
                <input type={type} className='flex-grow bg-transparent outline-none' placeholder={text} ref={ref} />
            </div>
            



        </div>
    )
});

export default Input
