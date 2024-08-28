import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slices/UserSlice";

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(deleteUsers()); 
  };

  return (
    <div className="flex justify-end items-center">
      <button
        onClick={handleDeleteAll}
        className="text-[20px] mb-5 px-4 py-2 bg-[rgb(248,118,82)] border-[2px] text-white rounded-[10px] hover:bg-red-50 hover:text-[rgb(248,118,82)] hover:border-[rgb(248,118,82)]"
      >
        Delete All Users
      </button>
    </div>
  );
};

export default DeleteAllUser;
