import loginImage from '../assets/image.png';
import google from '../assets/google.svg';
import facebook from '../assets/facebook.svg';
import username from '../assets/username.svg';
import email from '../assets/email.svg';
import password from '../assets/eyes.svg'

import Input from './Input';
import { useRef, useState } from 'react';
import fetchData from '../helper';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null); // Create a ref for the input field
    const emailRef = useRef<HTMLInputElement>(null); // Create a ref for the input field
    const passRef = useRef<HTMLInputElement>(null);
    const [emailError, setEmailError] = useState<string>('');
    const [usernameError, setUsernameError]=useState<string>('');
    const [passwordError, setPasswordError]=useState<string>('');
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
      
        const usernameValue = inputRef.current?.value || '';
        const emailValue = emailRef.current?.value || '';
        const passValue = passRef.current?.value || '';
      
        // Validate fields
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let errors = {
          email: emailRegex.test(emailValue) ? '' : 'Please enter a valid email address.',
          password: passValue.length >= 6 ? '' : 'Password must be at least 6 characters.',
          username: usernameValue === 'emilys' ? '' : 'Invalid Username.',
        };
      
        setEmailError(errors.email);
        setPasswordError(errors.password);
        setUsernameError(errors.username);
      
        // Stop submission if errors exist
        if (Object.values(errors).some((err) => err !== '')) {
          return;
        }
      
        // Submit form if valid
        try {
          await fetchData({ email: emailValue, username: usernameValue, password: passValue });
          navigate('/profile');
        } catch (error) {
          console.error('Error during submission:', error);
        }
      };
      

    return (
        <div className="bg-slate-200 p-20 rounded-lg w-full flex justify-center h-full  items-center">
            <div className="h-[700px] w-full overflow-hidden bg-slate-100 grid grid-cols-1 lg:grid-cols-2 place-content-center">
                <div className=" hidden lg:flex justify-center items-center ">
                    <img src={loginImage} alt="" className="w-[500px] h-[500px]" />
                </div>
                <div className="h-[100%]   flex justify-center items-center" style={{width:'inherit'}}>
                    <div className="bg-white  h-[100%] w-screen lg:w-full m-10 rounded-lg">
                        <div className="p-2 font-semibold text-xl">
                            Welcome to <br />
                            <span className="font-extrabold text-3xl text-purple-600">UNSTOP</span>
                        </div>
                        <div className="flex w-full flex-col gap-4 p-4">
                            <button
                                className="flex w-full gap-2 justify-center items-center rounded-2xl p-2"
                                style={{ border: "1px solid #E2E2E2" }}
                            >
                                <div className="flex">
                                    <img src={google} alt="" />
                                </div>
                                Login with Google
                            </button>
                            <button
                                className="flex w-full gap-2 justify-center items-center p-2 rounded-2xl"
                                style={{ border: "1px solid #E2E2E2" }}
                            >
                                <div>
                                    <img src={facebook} alt="" />
                                </div>
                                Login with Facebook
                            </button>
                        </div>
                        <div className="flex justify-center items-center">
                            <hr className="w-full" />
                            <span className="px-6">OR</span>
                            <hr className="w-full" />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='flex flex-col gap-2'>
                                {/* Pass the ref to the Input component */}
                                <Input type="text" imgSrc={username} text="Username" ref={inputRef} hidden={false} error={usernameError} />
                                <Input type="email" imgSrc={email} text="Email" ref={emailRef} hidden={false} error={emailError} />
                                <Input type="password" imgSrc={password} text="Password" ref={passRef} hidden={true} error={passwordError} />

                            </div>

                            <div className='flex justify-between p-2'>
                                <div className='flex flex-grow-0 gap-2'>
                                    <input type="checkbox" id='remember' />
                                    <label htmlFor="remember" >Remember me</label>
                                </div>
                                <div className='text-purple-800'>Forgot Password?</div>
                            </div>
                            <div className='px-4'>
                                <button
                                    type="submit"
                                    className=" w-full bg-purple-500 rounded-lg text-white px-4 py-2  mt-4"
                                >
                                    Submit
                                </button>
                            </div>
                            <div className='w-full flex justify-center mt-2'>
                                <p>Don't have an Account? <span className='text-purple-500'>Register</span></p>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
