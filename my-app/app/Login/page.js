"use client";
import { useSession, signIn, signOut } from "next-auth/react"
import React from "react";
import Navbar from "@/components/Navbar";
function Login() {
   
  return <>
    <Navbar></Navbar>
    <div className="container mx-auto flex flex-col justify-center items-center my-20 gap-6 border-2 border-gray-400 w-[25%] max-md:w-[80%] p-10 rounded-xl bg-black h-fit" >
      <h1 className="font-extrabold">Welcome to the Quiz App</h1>

      
        <button
          className="w-60 bg-gray-700  flex p-3 items-center gap-3 rounded-lg hover:transition-all"
          aria-label="Sign in with Google" onClick={() => signIn()}>
          <img width={30} src="/github.png" alt="Github logo" />
          <span>Continue with Github</span>
        </button>
       
    </div>
    </>
  
}

export default Login;
