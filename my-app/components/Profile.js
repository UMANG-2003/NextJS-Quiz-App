import React from 'react';
import { useSession, signOut } from 'next-auth/react';

function Profile() {
  const { data: session } = useSession();

  if (!session) {
    return <div>You are not signed in.</div>;
  }

  return (
    <div className="show profile absolute z-10 right-3 bg-white text-black" id="profile">
        <ul className='flex flex-col items-center justify-center'>
            <li className='border-2 border-black w-40 p-2 text-center cursor-pointer hover:bg-yellow-900 hover:text-white'><div >{session.user?.name || "User"}</div></li>
            <li className='border-2 border-black w-40 p-2 text-center cursor-pointer hover:bg-yellow-900 hover:text-white'> <button
        onClick={() => signOut()}
        className=" px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 "
      >
        Sign out
      </button></li>
        </ul>
     
    </div>
  );
}

export default Profile;
