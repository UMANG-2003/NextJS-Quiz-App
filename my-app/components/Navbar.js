import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function Navbar({ sidebar ,profileHandle}) {
  const { data: session } = useSession();
  
  return (
    <>
      <nav className="w-full h-16 bg-gray-800 shadow-2xl shadow-black rounded-b-xl flex items-center px-4 justify-between md:px-16">
        <div className="md:hidden">
          <img
            id="img-menu"
            width={25}
            onClick={sidebar}
            src="/hamburger.png"
            alt="Menu Icon"
          />
        </div>
        <div>Quiz App</div>
        {session ? (
          <>
          <div className="flex gap-3 max-md:mr-5 cursor-pointer"  onClick={profileHandle}><img className="rounded-full" width={40} src={session.user?.image || "/default-avatar.png"} alt="" /></div>
          </>
        ) : (
          <>
            <button
              onClick={() => signIn("github")}
              className="text-white px-4 py-2 bg-green-800 text-white rounded hover:bg-green-600"
            >
              Sign in
            </button>
          </>
        )}
      </nav>
    </>
  );
}

export default Navbar;
