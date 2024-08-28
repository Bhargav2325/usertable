import React from "react";
import DeleteAllUser from "./DeleteAllUser";
import { fakeUserData } from "../api/api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
import DisplayUsers from "./DisplayUsers";

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (name) => {
    dispatch(addUser(name));
  };

  return (
    <div className="max-w-[1500px] mx-auto">
      <div className="flex justify-between w-full mx-auto gap-96 items-center">
        <div className="flex justify-start items-center">
          <div className="text-[18px] px-4">List of User Details</div>
        </div>
        <div className="flex justify-end items-center text-red-600">
          <button
            onClick={() => addNewUser(fakeUserData())}
            className="text-[20px] px-4 py-2 bg-blue-300 border-[2px] text-white rounded-[10px] hover:bg-blue-50 hover:text-blue-300 hover:border-blue-300"
          >
            Add new users
          </button>
        </div>
      </div>
      <DisplayUsers />
      <div className="border-[2px] my-6 text-[#babfba]"></div>
      <DeleteAllUser />
    </div>
  );
};

export default UserDetails;
