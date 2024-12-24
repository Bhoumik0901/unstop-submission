import { useNavigate } from 'react-router-dom';
import profile from '../assets/profile.svg'
interface User {
    access_token?: string;
    username?: string;
    email?:string;
    gender?:string

}
const Profile = () => {

    const userString = localStorage.getItem('user'); // Get the user string from localStorage
    let user: User | null = null;
    let navigate=useNavigate();
    if (userString) {
      user = JSON.parse(userString) as User; // Parse the string and type-cast to User
    }
    const logout=()=>{
        localStorage.removeItem('user');
        navigate('/');
    }
    return (
        <div className="flex h-full w-full justify-center items-center flex-col gap-20 ">
            <div id="heading">
                <div className="flex justify-center items-center text-xl">Welcome to</div>
                <div className="text-purple-800 font-extrabold text-4xl">Unstop</div>
            </div>
            <div id="profileSection" className="flex flex-col px-6 py-8 items-center rounded-lg" style={{ border: '1px solid #E2E2E2' }} >
                <div className="rounded-full mb-2 w-[100px] h-[100px]" >
                    <img src={profile} alt="" className="rounded-full w-full h-full" />
                </div>
                <div className="mb-2"> {user?.username}</div>
                <div className="mb-2 flex flex-col items-center font-semibold">
                    <div>{user?.email}</div>
                    <div className=' first-letter:uppercase'>{user?.gender}</div>
                </div>

                <button className="bg-purple-600 w-full rounded-xl p-2 text-white" onClick={logout}>Logout</button>
            </div>

        </div>
    )
}

export default Profile
