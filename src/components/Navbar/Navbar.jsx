import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import {googleLogout} from "@react-oauth/google"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);


  const user = JSON.parse(localStorage.getItem("user"));
  const route = useNavigate();
  // useEffect(() => {
  //   console.log(user);
  // }, []);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => getUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const getUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        window.location.reload();

      });
  };

  return (
    <div className="sticky w-full z-50 bg-white shadow-xl">
      <nav className="flex items-center justify-between p-4 mx-auto">
        <div className="flex items-center">
          <NavLink to="/">
            <div className="flex items-center gap-1">
              <img className="h-10 rotate-[15deg]" src="/logo.png" alt="Logo" />
              <h2 className="font-bold text-2xl md:text-3xl text-gray-800">
                TripMate
              </h2>
            </div>
          </NavLink>
        </div>

        {/* Desktop "Sign Up" Button */}
        <div className="hidden md:flex">
          {user ? (
            <div className="flex gap-5">
              <Link to={'/create-trip'}><Button variant="outline">Get Started</Button></Link>
              
              <Popover>
                <PopoverTrigger><img
                className="rounded-full h-10 w-10"
                src={user.picture}
                alt=""
              /></PopoverTrigger>
                <PopoverContent>
                  <h2 className="cursor-pointer text-center" onClick={()=>{
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                  }}>Logout</h2>
                </PopoverContent>
              </Popover>
            </div>
          ) : (
            <div>
            <Button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700" onClick={()=>{setOpenDialog(true)}}>
              Sign Up
            </Button>
            <Dialog open={openDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogDescription className="flex flex-col items-center text-center p-5">
                <div className="flex gap-3">
                  <img
                    className="h-10 rotate-[16deg]"
                    src="/logo.png"
                    alt="Logo"
                  />

                  <h1 className="text-2xl font-bold mb-4">
                    Welcome to Trip Planner!
                  </h1>
                </div>
                <p className="text-gray-600 mb-6">
                  Sign in to start planning your dream trip and get personalized
                  recommendations.
                </p>
                <Button
                  onClick={login}
                  className="bg-purple-600 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded-lg shadow transition-all duration-200"
                >
                  <svg
                    viewBox="-0.5 0 48 48"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>Google-color</title>{" "}
                      <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                      <g
                        id="Icons"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        {" "}
                        <g
                          id="Color-"
                          transform="translate(-401.000000, -860.000000)"
                        >
                          {" "}
                          <g
                            id="Google"
                            transform="translate(401.000000, 860.000000)"
                          >
                            {" "}
                            <path
                              d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                              id="Fill-1"
                              fill="#FBBC05"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                              id="Fill-2"
                              fill="#EB4335"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                              id="Fill-3"
                              fill="#34A853"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                              id="Fill-4"
                              fill="#4285F4"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  Sign In With Google
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
            </div>
            
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4">
          <NavLink
            to="/"
            className="block text-lg text-gray-800 font-semibold mb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block text-lg text-gray-800 font-semibold mb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="block text-lg text-gray-800 font-semibold mb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
          <Button
            onClick={() => setIsMenuOpen(false)}
            className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700"
          >
            Sign Up
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
