'use client';
import React from "react";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook, AiFillTwitterCircle, } from "react-icons/ai"
import {BsFillCloudDownloadFill} from  "react-icons/bs"
//add use client for interactivity with client

import mydp from "../public/my-dp1.jpg"; // relative path to image doesn't work for react components.. always import from public folder


function SideBar() {

    return (
        <>
            <Image
                className="px-3 py-3 mx-auto rounded-full"
                src={mydp}
                alt="Picture of the author"
                width={240}
                height={240} />
            <h2 className="px-2 my-3 text-2xl font-bold bold font-Kaushan "> MD Mahabub Islam</h2>
            <p className="px-3 py-2 mx-3 my-3.5 bg-gray-300 rounded-full">Full Stack Developer</p>
            <a className="flex items-center justify-center px-2 py-2 mx-3 my-2 bg-gray-300 rounded-full "><BsFillCloudDownloadFill className="w-6 h6" />Download Resume</a>

            {/* social media icons */}
            <p>Connect With Me</p>
            <div className="flex justify-around w-9/12 px-2 py-2 mx-auto my-1 md:w-full ">
                <AiFillFacebook className="w-8 h-8 mx-2 my-2 text-green-400 rounded-full cursor-pointer hover:text-blue-500 " />
                <AiFillTwitterCircle className="w-8 h-8 mx-2 my-2 text-green-400 rounded-full cursor-pointer hover:text-blue-500 " />
                <AiFillLinkedin className="w-8 h-8 mx-2 my-2 text-green-400 rounded-full cursor-pointer hover:text-blue-500 " />
                <AiFillGithub className="w-8 h-8 mx-2 my-2 text-green-400 rounded-full cursor-pointer hover:text-blue-500 " />

            </div>
            <div className="col-span-12 px-2 py-2 my-2 space-x-4 text-center break-normal bg-gray-300 lg:col-span-3 ">
                <p className="py-2"> Dhaka,Bangladesh</p>
                <p className="py-2"> imahbub.1999@gmail.com </p>
                <p className="py-2"> +8801789171191</p>
            </div>

            <button  className="w-3/5 px-4 py-2 mx-2 my-2 font-bold text-white rounded-full bg-gradient-to-r from-green-400 to-teal-500 hover:bg-blue-700 "
            onClick={() => {window.open('mailto:imahbub.1999@gmail.com')}}
             >
                Email Me
            </button>
            <br></br>
            <button className="w-3/5 px-4 py-2 mx-2 my-3 font-bold text-white rounded-full bg-gradient-to-r from-green-400 to-teal-500 hover:bg-blue-700">
                Change UI
            </button>



        </>

    )
}


export default SideBar;