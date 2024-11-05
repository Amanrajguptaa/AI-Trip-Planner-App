import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Input } from "@/components/ui/input";
import {
  SelectTravelsList,
  SelectBudgetOptions,
  AI_PROMPT,
} from "../../constants/options.jsx";
import { Button } from "../ui/button.jsx";
import { useToast } from "@/hooks/use-toast";
import { chatSession } from "../../services/AIModel.jsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig.jsx";
import { useNavigate } from "react-router-dom";

const CreateTrip = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  // useEffect(()=>{
  //   console.log(formData);
  // },[formData])

  const login = useGoogleLogin({
    onSuccess: (codeResp) => getUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const onGenerateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setOpenDialog(true);
    }
    setLoading(true);
    if (
      (formData?.noOfDays > 15 && !formData?.location) ||
      !formData?.budget ||
      !formData?.traveler
    ) {
      toast({
        title: "Please fill all details",
      });
      return;
    }
    const FINAL_PROMPT = AI_PROMPT.replace("{location}", formData?.location)
      .replace("{totalDays}", formData?.noOfDays)
      .replace("{traveler}", formData?.traveler)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.noOfDays);

    console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result.response.text());
    setLoading(false);
    saveAiTrip(result.response.text());
  };

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
        onGenerateTrip();
      });
  };

  const saveAiTrip = async (TripData) => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const docID = Date.now().toString();
    // Add a new document in collection "cities"
    await setDoc(doc(db, "AITrips", docID), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docID,
    });
    setLoading(false);
    router("/view-trip/" + docID);
  };

  return (
    <div className="">
      <Navbar />
      <div className="sm:px-10 md:px-56 px-5 mt-10">
        <h2 className="font-bold text-3xl">Tell us your travel preference </h2>
        <p className="mt-3 text-gray-500 text-xl">
          Just provide some basic information, and our trip planner will geneare
          a customized itinerary based on your preferences.
        </p>

        <div className="mt-10">
          <div>
            <h2 className="font-medium text-xl my-3">
              What is your choice of destination?
            </h2>
            <Input
              onChange={(e) => {
                handleInputChange("location", e.target.value);
              }}
              className="border border-black w-full"
            />
          </div>

          <div className="mt-5 flex flex-col">
            <h2 className="font-medium text-xl my-3">
              How many days are you planning your trip?
            </h2>
            <Input
              onChange={(e) => {
                handleInputChange("noOfDays", e.target.value);
              }}
              className="border border-black w-full"
              placeholder={"Ex.3"}
              type="number"
            />
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-3 gap-5 ">
            {SelectBudgetOptions.map((item, index) => (
              <div
                onClick={(e) => {
                  handleInputChange("budget", item.title);
                }}
                key={index}
                className={` p-4 border cursor-pointer rounded-lg hover:shadow-lg
                  ${
                    formData?.budget === item.title && "shadow-lg border-black"
                  } `}
              >
                <h2 className="text-3xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.description}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-4 gap-5 ">
            {SelectTravelsList.map((item, index) => (
              <div
                onClick={(e) => {
                  handleInputChange("traveler", item.numberOfPeople);
                }}
                key={index}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg
                  ${
                    formData?.traveler === item.numberOfPeople &&
                    "shadow-lg border-black"
                  } `}
              >
                <h2 className="text-3xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.numberOfPeople}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="my-10 w-full flex justify-end">
          <Button onClick={onGenerateTrip}>
            {loading ? (
              <div className=" animate-spin">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="256px"
                  height="256px"
                  viewBox="0 0 100 100"
                  enable-background="new 0 0 100 100"
                  xml:space="preserve"
                  fill="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="Download_x5F_25_x25_"> </g>{" "}
                    <g id="Download_x5F_50_x25_"> </g>{" "}
                    <g id="Download_x5F_75_x25_"> </g>{" "}
                    <g id="Download_x5F_100_x25_"> </g> <g id="Upload"> </g>{" "}
                    <g id="Next"> </g> <g id="Last"> </g> <g id="OK"> </g>{" "}
                    <g id="Fail"> </g> <g id="Add"> </g>{" "}
                    <g id="Spinner_x5F_0_x25_"> </g>{" "}
                    <g id="Spinner_x5F_25_x25_"> </g>{" "}
                    <g id="Spinner_x5F_50_x25_"> </g>{" "}
                    <g id="Spinner_x5F_75_x25_">
                      {" "}
                      <g>
                        {" "}
                        <path
                          fill="none"
                          stroke="#ffffff"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          d=" M50.915,26.824C63.385,27.208,73.375,37.437,73.375,50c0,12.806-10.381,23.188-23.188,23.188c-11.303,0-20.717-8.087-22.771-18.79 c-0.154-0.804-0.262-1.566-0.331-2.397"
                        ></path>{" "}
                        <g>
                          {" "}
                          <ellipse
                            transform="matrix(0.9962 -0.0867 0.0867 0.9962 -3.713 2.567)"
                            cx="27.71"
                            cy="44.049"
                            rx="1.959"
                            ry="1.959"
                          ></ellipse>{" "}
                          <ellipse
                            transform="matrix(0.9962 -0.0867 0.0867 0.9962 -3.079 2.8158)"
                            cx="30.892"
                            cy="36.872"
                            rx="1.959"
                            ry="1.959"
                          ></ellipse>{" "}
                          <ellipse
                            transform="matrix(0.9962 -0.0867 0.0867 0.9962 -2.567 3.266)"
                            cx="36.334"
                            cy="31.199"
                            rx="1.959"
                            ry="1.959"
                          ></ellipse>{" "}
                          <ellipse
                            transform="matrix(0.9962 -0.0867 0.0867 0.9962 -2.2318 3.8617)"
                            cx="43.363"
                            cy="27.636"
                            rx="1.959"
                            ry="1.959"
                          ></ellipse>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g id="Brightest_x5F_25_x25_"> </g>{" "}
                    <g id="Brightest_x5F_50_x25_"> </g>{" "}
                    <g id="Brightest_x5F_75_x25_"> </g>{" "}
                    <g id="Brightest_x5F_100_x25_"> </g> <g id="Reload"> </g>{" "}
                    <g id="Forbidden"> </g> <g id="Clock"> </g>{" "}
                    <g id="Compass"> </g> <g id="World"> </g>{" "}
                    <g id="Speed"> </g> <g id="Microphone"> </g>{" "}
                    <g id="Options"> </g> <g id="Chronometer"> </g>{" "}
                    <g id="Lock"> </g> <g id="User"> </g> <g id="Position"> </g>{" "}
                    <g id="No_x5F_Signal"> </g> <g id="Low_x5F_Signal"> </g>{" "}
                    <g id="Mid_x5F_Signal"> </g> <g id="High_x5F_Signal"> </g>{" "}
                    <g id="Options_1_"> </g> <g id="Flash"> </g>{" "}
                    <g id="No_x5F_Signal_x5F_02"> </g>{" "}
                    <g id="Low_x5F_Signal_x5F_02"> </g>{" "}
                    <g id="Mid_x5F_Signal_x5F_02"> </g>{" "}
                    <g id="High_x5F_Signal_x5F_02"> </g> <g id="Favorite"> </g>{" "}
                    <g id="Search"> </g> <g id="Stats_x5F_01"> </g>{" "}
                    <g id="Stats_x5F_02"> </g> <g id="Turn_x5F_On_x5F_Off"> </g>{" "}
                    <g id="Full_x5F_Height"> </g> <g id="Full_x5F_Width"> </g>{" "}
                    <g id="Full_x5F_Screen"> </g>{" "}
                    <g id="Compress_x5F_Screen"> </g> <g id="Chat"> </g>{" "}
                    <g id="Bluetooth"> </g> <g id="Share_x5F_iOS"> </g>{" "}
                    <g id="Share_x5F_Android"> </g>{" "}
                    <g id="Love__x2F__Favorite"> </g> <g id="Hamburguer"> </g>{" "}
                    <g id="Flying"> </g> <g id="Take_x5F_Off"> </g>{" "}
                    <g id="Land"> </g> <g id="City"> </g> <g id="Nature"> </g>{" "}
                    <g id="Pointer"> </g> <g id="Prize"> </g>{" "}
                    <g id="Extract"> </g> <g id="Play"> </g> <g id="Pause"> </g>{" "}
                    <g id="Stop"> </g> <g id="Forward"> </g>{" "}
                    <g id="Reverse"> </g> <g id="Next_1_"> </g>{" "}
                    <g id="Last_1_"> </g> <g id="Empty_x5F_Basket"> </g>{" "}
                    <g id="Add_x5F_Basket"> </g> <g id="Delete_x5F_Basket"> </g>{" "}
                    <g id="Error_x5F_Basket"> </g> <g id="OK_x5F_Basket"> </g>{" "}
                  </g>
                </svg>{" "}
              </div>
            ) : (
              "Generate Trip"
            )}
          </Button>
        </div>

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
    </div>
  );
};

export default CreateTrip;
