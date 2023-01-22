import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  updateProfile,
  getAdditionalUserInfo,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import Google from './Google.png';
import Facebook from './Facebook.png';

function SignUpPage() {
  const navigate = useNavigate();

  // sign up with Google
  const googleProvider = new GoogleAuthProvider();
  const GoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const isNewuser = getAdditionalUserInfo(result).isNewUser;
      if (isNewuser) {
        await setDoc(doc(db, 'users', result.user.uid), {
          name: result.user.displayName.split(' ').slice(0, -1).join(' '),
          surname: result.user.displayName.split(' ').slice(-1).join(' '),
          biography: '',
          location: '',
          photo: result.user.photoURL,
        });
      }
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  // sign up with facebook
  const fbProvider = new FacebookAuthProvider();
  const FacebookSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider);
      const credantial = await FacebookAuthProvider.credentialFromResult(
        result
      );
      const token = credantial.accessToken;
      const photoUrl = `${result.user.photoURL}?height=500&access_token=${token}`;
      await updateProfile(auth.currentUser, { photoURL: photoUrl });
      const isNewuser = getAdditionalUserInfo(result).isNewUser;
      if (isNewuser) {
        await setDoc(doc(db, 'users', result.user.uid), {
          name: result.user.displayName.split(' ').slice(0, -1).join(' '),
          surname: result.user.displayName.split(' ').slice(-1).join(' '),
          biography: '',
          location: '',
          photo: result.user.photoURL,
        });
      }
      navigate('/');
      console.log(result.user.uid);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="flex flex-col min-h-screen">
      <div className="fixed z-[-10]  lg:top-0 left-0 bottom-0 lg:right-auto right-0 lg:w-[50%] w-full lg:h-full h-[40%] bg-[#e5faff]  rounded-t-[50%]  lg:rounded-l-[24px]  lg:rounded-r-full  " />
      <div className="z-20 lg:m-auto lg:p-9 lg:mt-48 mt-24 mx-10 p-16 flex flex-col justify-between items-center lg:gap-6 text-center bg-white shadow-[2px_4px_8px_rgba(0,0,0,0.3)] rounded-3xl ">
        <p className="text-[#4699C2] font-sans font-bold lg:text-2xl text-lg text-center">
          SIGN UP WITH
        </p>
        <div className="flex lg:flex-row flex-col justify-between items-center lg:gap-10 ">
          <button
            onClick={GoogleSignUp}
            type="button"
            className="px-16 py-2   mt-5 bg-[#eb5757] text-white font-bold lg:text-lg text-base rounded-full shadow-md hover:bg-[#df3535] hover:shadow-lg focus:bg-[#df3535] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#df3535] active:shadow-lg transition duration-150 ease-in-out"
          >
            <img src={Google} alt="Google logo" className="w-8 h-8" />
          </button>
          <p className="text-[#4699C2] font-sans font-bold text-lg text-center mt-4">
            OR
          </p>

          <button
            onClick={FacebookSignUp}
            type="button"
            className="px-16 py-2   mt-5 bg-[#2F80ED] text-white font-bold lg:text-lg text-base rounded-full shadow-md hover:bg-[#026FC2] hover:shadow-lg focus:bg-[#026FC2] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#026FC2] active:shadow-lg transition duration-150 ease-in-out"
          >
            <img src={Facebook} alt="facebook logo" className="w-8 h-8" />
          </button>
        </div>

        <div className="lg:static absolute bottom-[15%] flex lg:flex-row flex-col justify-center items-center lg:gap-0 gap-2">
          <p className="lg:text-[#a5e7fa] text-[#70CDD6] font-sans font-bold text-lg text-center">
            Already a member?
          </p>
          <NavLink to="/login">
            <button
              type="button"
              className=" lg:bg-transparent bg-[#2F80ED] lg:text-[#70CDD6] text-white lg:p-2  px-8 py-1 hover:lg:font-black  lg:rounded-none rounded-full  hover:bg-[#026FC2] hover:lg:bg-transparent  focus:bg-[#026FC2] focus:lg:bg-transparent focus:outline-none font-bold text-lg text-center"
            >
              Sign in
            </button>
          </NavLink>
        </div>
      </div>{' '}
    </section>
  );
}

export default SignUpPage;
