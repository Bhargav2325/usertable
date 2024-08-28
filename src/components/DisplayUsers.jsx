import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.users);
  //   console.log(data);

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <>
      {data.map((user, id) => {
        return (
          <div key={id}>
            <div className="border-[1px] my-6 text-[#babfba]"></div>
            <div className="flex justify-between items-center my-5">
              <div className="flex justify-start items-center">
                <div className="text-[18px] px-4">{user}</div>
              </div>
              <button
                onClick={() => deleteUser()}
                className="flex justify-end items-center text-red-600 pr-4"
              >
                <MdDeleteForever size={20} />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DisplayUsers;
