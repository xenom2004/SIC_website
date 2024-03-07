import React from 'react'
import Icon from '@mui/material/Icon';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <div className='bg-customblue w-screen md:h-[200px] h-fit '>
        <div className='flex flex-col px-4 w-full'>
        <div className='flex flex-col gap-y-4 md:flex-row md:gap-x-4 justify-center'>
            <div className='flex flex-col grow '>
                <h1 className='text-white text-center md:text-left'>Sophisticated Instruments Center - A National Facility</h1>
                <h1 className='text-white text-center md:text-left'>Indian Institute of Technology  Indore</h1>
                <h1 className='text-white text-center md:text-left'>Khandwa Road, Simrol -453552</h1>
                <h1 className='text-white text-center md:text-left'>Phone: +91 (731) 660 3311</h1>
                <h1 className='text-white text-center md:text-left'>3311/3543/3541</h1>
                <h1 className='text-white text-center md:text-left'>Email: sic@iiti.ac.in</h1>



            </div>

            <div className='flex flex-col grow  '>
           <h1 className='text-white text-center md:text-left'> Contact us</h1>
           <h1 className='text-white text-center md:text-left'> About</h1>
           <h1 className='text-white text-center md:text-left'> Privacy Policy</h1>
           <h1 className='text-white text-center md:text-left'> Term and Conditions</h1>
           <h1 className='text-white text-center md:text-left'> Site Map</h1>





            </div>

            <div className='flex flex-row grow gap-x-2 md:visible justify-center pb-4 '>
                <h1 className='pt-4'><i class="fa-brands fa-facebook fa-2xl" style={{color:"white"}} ></i></h1>
                <h1 className='pt-4'><i class="fa-brands fa-instagram fa-2xl" style={{color:"white"}} ></i></h1>
                <h1 className='pt-4'><i class="fa-brands fa-linkedin fa-2xl" style={{color:"white"}} ></i></h1>
                <h1 className='pt-4'><i class="fa-brands fa-youtube fa-2xl" style={{color:"white"}} ></i></h1>
                <h1 className='pt-4'><i class="fa-brands fa-x-twitter fa-2xl" style={{color:"white"}} ></i></h1>


            </div>
            

        </div>

        <div className='text-white text-center '>
        © 2024 SIC - A National Facility of IIT Indore
        </div>







        </div>
        
      
    </div>
  )
}

export default Footer
