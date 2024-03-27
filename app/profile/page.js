"use client"
import React, { useState ,useEffect} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
  const { data: session, status } =useSession();
  const router = useRouter();
  const [user_details,setuser_details]=useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    phone: '123-456-7890',
    institute: 'XYZ University',
    email: 'john.doe@example.com',
    supervisorName: 'Dr. Jane Smith',
    supervisorEmail: 'jane.smith@example.com',
    studentDesignation: 'Research Assistant',
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };
  
  useEffect(() => {
    async function getData() {
      
      if(status === "unauthenticated" || status==="loading"){
        return {}
      }
      else{
        console.log(session)
     

      const timestamp = Date.now();
      const res = await fetch(`http://localhost:3000/api/Userdetail/${session.user.name}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache', 
          'sessionyuyuy':session.user.name,
        },
       
      })
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.
     
      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
      const data = await res.json();
      // console.log(data);
      setuser_details(data.details[0]);
      // console.log(data[0],"on data")
     
      return {}}
    }
    getData();
    
  },[session])


  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
   router.push("./");
  }

  return (
    <div className="flex justify-center items-center h-screen">{user_details!==null && console.log(user_details)}

    <div className="w-full max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">

      <h2 className="text-2xl mb-4">Profile</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-4">

          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>

          <input type="text" id="name" name="name" value={profileData.name} onChange={handleChange} disabled={!isEditing} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

        </div>

        <div className="mb-4">

          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone:</label>

          <input type="text" id="phone" name="phone" value={profileData.phone} onChange={handleChange} disabled={!isEditing} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

        </div>

        <div className="mb-4">

          <label htmlFor="institute" className="block text-sm font-medium text-gray-700">Institute:</label>

          <input type="text" id="institute" name="institute" value={profileData.institute} onChange={handleChange} disabled={!isEditing} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

        </div>

        <div className="mb-4">

          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>

          <input type="email" id="email" name="email" value={profileData.email} onChange={handleChange} disabled={!isEditing} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

        </div>

        <div className="mb-4">

          <label htmlFor="supervisorName" className="block text-sm font-medium text-gray-700">Supervisor Name:</label>

          <input type="text" id="supervisorName" name="supervisorName" value={profileData.supervisorName} onChange={handleChange} disabled={!isEditing} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

        </div>

        <div className="mb-4">

          <label htmlFor="supervisorEmail" className="block text-sm font-medium text-gray-700">Supervisor Email:</label>

          <input type="email" id="supervisorEmail" name="supervisorEmail" value={profileData.supervisorEmail} onChange={handleChange} disabled={!isEditing} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

        </div>

        <div className="mb-4">

          <label htmlFor="studentDesignation" className="block text-sm font-medium text-gray-700">Student Designation:</label>

          <input type="text" id="studentDesignation" name="studentDesignation" value={profileData.studentDesignation} onChange={handleChange} disabled={!isEditing} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

        </div>

        <div className="flex justify-end">

          {isEditing ? (

            <button  className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 active:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring ring-indigo-300 disabled:opacity-25 transition ease-in-out duration-150">Save</button>

          ) : (

            <button  className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 active:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring ring-indigo-300 disabled:opacity-25 transition ease-in-out duration-150">Edit Profile</button>

          )}

        </div>

      </form>

    </div>

    </div>
  );
};

export default ProfilePage;