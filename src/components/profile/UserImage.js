import React from 'react';
import EditPen from '../../assets/EditPen';
import Camera from '../../assets/Camera';

export default function UserImage({
  editForm,
  setEditForm,
  displayName,
  userImg,
}) {
  return (
    <div className="flex mb-10 lg:mb-0 justify-center items-center flex-col ">
      <div className="relative ">
        <img
          className="w-[160px] h-[160px] rounded-full relative"
          alt="userProfile"
          src={userImg}
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

      <h1 className="text-xl mt-2 font-medium">{displayName}</h1>
    </div>
  );
}
