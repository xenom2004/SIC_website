"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Spinner } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { AddAPhotoSharp } from "@mui/icons-material";

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [user_details, setuser_details] = useState({
    profileName: "",
    phone: "",
    institute: "",
    email: "",
    supervisorName: "",
    supervisorEmail: "",
    studentDesignation: "",
    Designation: "",
    gst_number: "",
  });
  const [loader, setLoader] = useState(0);
  const [image, setImage] = useState(null);
  const [cover_image, setcover_image] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    profileName: "",
    phone: "",
    institute: "",
    email: "",
    supervisorName: "",
    supervisorEmail: "",
    studentDesignation: "",
    Designation: "",
    gst_number: "",
  });

  const [loginType, setloginType] = useState("Academic");
  const handleImageChange = (e, setfunc) => {
    // console.log("here")
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // Update the state variable with the image data
      setfunc(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file); // Convert the image file to a data URL
    }
  };

  const handlesave = async () => {
    
    if (!areRequiredFieldsFilled()) {
      // If not all required fields are filled, do nothing
      alert("please fill all the details");
      return;
    }
    setLoader(1);
    const data = {
      ...profileData,
      "name":session.user.name,
      
      "loginType": loginType,
      "cover_image": cover_image,
      "image": image,
      "accessToken":session.accessToken,
      
    }
    console.log(data,"on my data");
    const response = await fetch('/api/updateProfile', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    alert("success");
    setLoader(0);
    return response.json();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,"y")
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };
  const handleDisable = () => {
    if (loginType === "Academic") {
      return false;
    }
    return true;
    }
    const areRequiredFieldsFilled = () => {
      // List of required fields
      const requiredFields = ["profileName", "phone", "institute", "email", "gst_number", "loginType"];
    
      // Add additional required fields based on loginType
      if (profileData["loginType"] === "Academic") {
        requiredFields.push("supervisorName", "supervisorEmail", "studentDesignation");
      } else {
        requiredFields.push("Designation");
      }
      // console.log(profileData,requiredFields ,"profileData");
    
      // Check if all required fields are filled
      return requiredFields.every(field => profileData[field] !== undefined && profileData[field] !== null && profileData[field] !== "");
    };
  
  useEffect(() => {
    async function getData() {
      if (status === "unauthenticated" || status === "loading") {
        return {};
      } else {
        // console.log(session)

        const timestamp = Date.now();
        const res = await fetch(`/api/Userdetail/${session.user.name}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",

            session: session.accessToken,
          },
        });
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.

        if (!res.ok) {
          // This will activate the closest `error.js` Error Boundary
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        // console.log(data,"kio")
        if (data.status == "success") {
          // console.log("jijii", data.details);
          setuser_details(data.details);
          setProfileData(data.details);
          setImage(data.details.image);
          setcover_image(data.details.cover_image);
        }
        // console.log(user_details,"on user details");
        // console.log(profileData,"on profile data");

        // console.log(data[0],"on data")

        return {};
      }
    }
    getData();
  }, [session]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <div role="status ">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("./");
  }

  if (loader) {
    return (
      <div className="h-screen flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-white z-50">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center h-screen mt-48 mb-48">
      {/* {user_details!==null && console.log(user_details)} */}

      <div className="w-full max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl mb-4">Profile</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>

          <input type="text" id="name" name="name" value={session.user.name}  disabled={true} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

        </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Profile Name
            </label>

          <input type="text" id="phone" name="profileName" value={profileData?.profileName} onChange={handleChange} disabled={!isEditing} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

        </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone:
            </label>

          <input type="text" id="phone" name="phone" value={profileData?.phone} onChange={handleChange} disabled={!isEditing} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

        </div>

          <div className="mb-4">
            <label
              htmlFor="institute"
              className="block text-sm font-medium text-gray-700"
            >
              Institute:
            </label>

          <input type="text" id="institute" name="institute" value={profileData?.institute} onChange={handleChange} disabled={!isEditing} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

        </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>

          <input type="email" id="email" name="email" value={profileData?.email} onChange={handleChange} disabled={!isEditing} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

        </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Gst number
            </label>

          <input type="text" id="email" name="gst_number" value={profileData?.gst_number} onChange={handleChange} disabled={!isEditing} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

        </div>

          <div className="mb-4 flex flex-row items-center ">
            <label
              htmlFor="supervisorName"
              className="block text-sm font-medium text-gray-700 grow"
            >
              Are you from :
            </label>

          <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="capitalize"
        >
         {loginType!==null ? loginType : "Academic"}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        onAction={(key) => {setloginType(key);setProfileData({
          ...profileData,
          "loginType": key,
        });}}
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        
      >
        <DropdownItem key="Academic">Academic</DropdownItem>
        <DropdownItem key="Commercial">Commercial</DropdownItem>
       
      </DropdownMenu>
    </Dropdown>

        </div>

          <div className={`mb-4 ${handleDisable() == true ? "hidden" : ""}`}>
            <label
              htmlFor="supervisorName"
              className="block text-sm font-medium text-gray-700"
            >
              Supervisor Name:
            </label>

          <input type="text" id="supervisorName" name="supervisorName" value={profileData?.supervisorName} onChange={handleChange} disabled={!isEditing} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

        </div>

          <div className={`mb-4 ${handleDisable() == true ? "hidden" : ""}`}>
            <label
              htmlFor="supervisorEmail"
              className="block text-sm font-medium text-gray-700"
            >
              Supervisor Email:
            </label>

          <input type="email" id="supervisorEmail" name="supervisorEmail" value={profileData?.supervisorEmail} onChange={handleChange} disabled={!isEditing} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

        </div>

          <div className={`mb-4 ${handleDisable() == true ? "hidden" : ""}`}>
            <label
              htmlFor="studentDesignation"
              className="block text-sm font-medium text-gray-700"
            >
              Student Designation:
            </label>

          <input type="text" id="studentDesignation" name="studentDesignation" value={profileData?.studentDesignation} onChange={handleChange} disabled={!isEditing} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

        </div>

          <div className={`mb-4 ${handleDisable() == false ? "hidden" : ""}`}>
            <label
              htmlFor="supervisorEmail"
              className="block text-sm font-medium text-gray-700"
            >
              Designation
            </label>

          <input type="text" id="supervisorEmail" name="Designation" value={profileData?.Designation} onChange={handleChange} disabled={!isEditing} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

        </div>
    



        <div className={`mb-4 `}>

          <label htmlFor="supervisorEmail" className="block text-sm font-medium text-gray-700">Upload ID Card    <AddAPhotoSharp/> </label>
          <input type="file" name="profile_image" disabled={!isEditing} onChange={(e)=>{handleImageChange(e,setImage)}}  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" ></input>
        </div>
        {image && (
        <div>
          
          <img src={image} alt="Uploaded" style={{ maxWidth: '100px' }} />
        </div>
      )}
        <div className={`mb-4 `}>

          <label htmlFor="supervisorEmail" className="block text-sm font-medium text-gray-700">Upload cover letter for verification of profile(Academic/commercial) </label>
          <input type="file" name="cover_image" disabled={!isEditing} onChange={(e)=>{handleImageChange(e,setcover_image)}} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" accept="image/*"></input>
        </div>
        {cover_image && (
        <div>
         
          <img src={cover_image} alt="Uploaded" style={{ maxWidth: '100px' }} />
        </div>
      )}

        

          <div className="flex justify-end">
            {isEditing ? (
              <button
                onClick={handlesave}
                className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 active:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring ring-indigo-300 disabled:opacity-25 transition ease-in-out duration-150"
              >
                Save
              </button>
            ) : (
              <button className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 active:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring ring-indigo-300 disabled:opacity-25 transition ease-in-out duration-150">
                Edit Profile
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
