import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, updateProfile, getAdditionalUserInfo } from "firebase/auth";
import { auth } from '../../firebase';
import Google from "./Google.png";
import Facebook from "./Facebook.png"


function LogInPage() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    // sign in with Google
    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const isNewuser = getAdditionalUserInfo(result).isNewUser;
            navigate('/');
            console.log(isNewuser);
        }
        catch (error) {
            console.log(error)
        }
    }
    // sign in with facebook
    const fbProvider = new FacebookAuthProvider();
    const FacebookLogIn = async () => {
        try {
            const result = await signInWithPopup(auth, fbProvider);
            const credantial = await FacebookAuthProvider.credentialFromResult(
                result
            );
            const token = credantial.accessToken;
            const photoUrl = `${result.user.photoURL}?height=500&access_token=${token}`;
            await updateProfile(auth.currentUser, { photoURL: photoUrl });
            const details = getAdditionalUserInfo(result)
            navigate('/');
            console.log(details.isNewUser);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user])

    return (
        <section className='flex flex-col'>
            <div className="absolute  lg:top-0 left-0 bottom-0 lg:right-auto right-0 lg:w-[50%] w-full lg:h-full h-[40%] bg-[#e5faff]  rounded-t-[50%]  lg:rounded-l-[24px]  lg:rounded-r-full  " />

            <div className="z-20 lg:m-auto lg:p-9 lg:mt-48 mt-24 mx-10 p-16 flex flex-col justify-between items-center lg:gap-6 text-center bg-white shadow-[2px_4px_8px_rgba(0,0,0,0.3)] rounded-3xl ">
                <p className='text-[#4699C2] font-sans font-bold lg:text-2xl text-lg text-center'>SIGN IN WITH</p>
                <div className='flex lg:flex-row flex-col justify-between items-center lg:gap-10 '>
                    <button type="button" onClick={GoogleLogin} className="px-16 py-2   mt-5 bg-[#eb5757] text-white font-bold lg:text-lg text-base rounded-full shadow-md hover:bg-[#df3535] hover:shadow-lg focus:bg-[#df3535] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#df3535] active:shadow-lg transition duration-150 ease-in-out">
                        <img src={Google} alt="Google logo" className='w-8 h-8' />
                    </button>
                    <p className='text-[#4699C2] font-sans font-bold text-lg text-center mt-4'>OR</p>

                    <button onClick={FacebookLogIn} type="button" className="px-16 py-2   mt-5 bg-[#2F80ED] text-white font-bold lg:text-lg text-base rounded-full shadow-md hover:bg-[#026FC2] hover:shadow-lg focus:bg-[#026FC2] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#026FC2] active:shadow-lg transition duration-150 ease-in-out">
                        <img src={Facebook} alt="facebook logo" className='w-8 h-8' />
                    </button>
                </div>

                <div className="lg:static absolute bottom-[15%] flex lg:flex-row flex-col justify-center items-center lg:gap-0 gap-2">
                    <p className='lg:text-[#a5e7fa] text-[#70CDD6] font-sans font-bold text-lg text-center'>Want to be a member?</p>
                    <NavLink to="/signup"><button type="button" className=" lg:bg-transparent bg-[#2F80ED] lg:text-[#70CDD6] text-white lg:p-2  px-8 py-1 hover:lg:font-black  lg:rounded-none rounded-full  hover:bg-[#026FC2] hover:lg:bg-transparent  focus:bg-[#026FC2] focus:lg:bg-transparent focus:outline-none font-bold text-lg text-center">
                        Sign up
                    </button></NavLink>
                </div>
            </div>       </section >
        // </section>
    )
}

export default LogInPage