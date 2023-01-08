import React from 'react';
import EditPen from '../../assets/EditPen';
import Camera from '../../assets/Camera';

export default function UserImage({ editForm, setEditForm }) {
  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="relative ">
        <img
          className="w-[160px] h-[160px] rounded-full relative"
          alt="userProfile"
          src="https://images.unsplash.com/photo-1642763907630-17bad0853f15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        />
        <button
          type="button"
          onClick={() => {
            setEditForm(true);
          }}
          className="absolute bottom-0 cursor-pointer flex justify-center items-center right-0 w-10 h-10 rounded-full bg-[#4699C2]"
        >
          {editForm ? <Camera /> : <EditPen />}
        </button>
      </div>

      <h1 className="text-xl mt-2 font-medium">Old trafford</h1>
    </div>
  );
}
