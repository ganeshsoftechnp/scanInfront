import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/firebase";
import { getAuth, signOut } from "firebase/auth";

export default function NavLayout() {
  const [style, setStyle] = useState("event");
  const navigate = useNavigate();

  async function logOut() {
    await signOut(auth);
    navigate("/login", { replace: true });
  }

  return (
    <>
      <div className="flex flex-row   w-full md:px-80 px-5  items-center">
        <nav
          className={`p-3  max-w-[600px] mx-auto my-5 flex flex-wrap gap-4 justify-center`}
        >
          <Link
            onClick={() => {
              setStyle("event");
            }}
            to="/"
            className={`text-blue-600 rounded-xs hover:text-blue-800 transition-colors border-1 border-blue-200 px-3 py-1 hover:scale-105 active:scale-95 ${
              style == "event" ? "bg-blue-300 text-blue-950 font-semibold" : ""
            }`}
          >
            Home
          </Link>

          {/* <Link
            onClick={() => {
              setStyle("event");
            }}
            to="/users"
            className={`text-blue-600 rounded-xs hover:text-blue-800 transition-colors border-1 border-blue-200 px-3 py-1 hover:scale-105 active:scale-95 ${
              style == "event" ? "bg-blue-300 text-blue-950 font-semibold" : ""
            }`}
          >
            User
          </Link> */}
          <Link to="/checkattid">
            <button className="bg-orange-300 px-2 rounded-xs font-semibold py-1 cursor-pointer hover:bg-orange-400 active:scale-95 hover:scale-105">
              Check attendee
            </button>
          </Link>
          <button
            className="bg-orange-300 px-2 rounded-xs font-semibold py-1 cursor-pointer hover:bg-orange-400 active:scale-95 hover:scale-105"
            onClick={logOut}
          >
            Log out
          </button>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
