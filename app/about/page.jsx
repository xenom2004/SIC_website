
"use client"
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
// // import Container from '../components/Container';
import { getSession } from 'next-auth/react';

// const Page = () => {
//   const { data: session } = useSession();
//   const router = useRouter();
//   const buttonRef = useRef(null);

 

//   return (
//     <div>
      
//       random no
//     </div>
//   );
// };
// export async function getServerSideProps(context) {
//   const session=await getSession(context)
//   if(!session){
   
//       redirect("./");
    
//   }
//   return {
//     props: {
//       session: await unstable_getServerSession(
//         context.req,
//         context.res,
//         authOptions
//       ),
//     },
//   }
// }
// export default Page;


// import { useSession, getSession } from "next-auth/react"

export default function Page() {
  const { data: session, status } = useSession();
  {console.log(session)}
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
   router.push("./");
  }

  return (
    // <>
    //   <h1>Protected Page</h1>
    //   <p>You can view this page because you are signed in.</p>
    // </>


    

<>
  <div className=" mx-28 py-10 text-xl w-15/3 pr-8">
    <p className=" font-bold text-blue-700 mb-4">
      The Sophisticated instrumentation center (SIC) was established in
      September 2011 with institute funding to expedite the research program at
      IIT Indore. SIC has now emerged as one of the first such centers in the
      country, providing extensive analytical instrument support to the users of
      the research fraternity across the country. A major advantage of SIC is
      its accessibility to the students within <br />
      the institute as well as to other institutes and industries. A very
      healthy ratio of students to the time availability on instruments and{" "}
      <br />
      the quick analysis of external samples makes it a very useful facility.
    </p>
  </div>
  <main className="container mx-32 my-8 px-4">
    <section className="mb-2">
      <h2 className="px-auto  text-lightSky  text-3xl font-bold ">Our Mission</h2>
      <div className="px-auto flex items-center">
        <div className="w-2/3 pr-8">
          <p className="mb-0">
            Providing data recording facilities and expertise in different
            state-of-the-art instruments, all under one section to facilitate
            high-quality data analysis to academia and industries..
          </p>
        </div>
        <div className=" w-1/6">
          <img
            src="https://sic.iiti.ac.in/wp-content/uploads/2022/08/png-clipart-mission-statement-vision-statement-business-marketing-mission-company-logo-innovation-thumbnail-2.png"
            alt="Team photo"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
    <section className="mb-2">
      <h2 className="px-auto text-lightSky  text-3xl font-bold ">Our vision</h2>
      <div className="px-auto flex items-center">
        <div className="w-2/3 pr-8">
          <p className="mb-0">
            To be amongst the top analytical instrument laboratories in the
            world in terms of cost, efficiency, and range of services..
          </p>
        </div>
        <div className=" w-1/6">
          <img
            src="https://sic.iiti.ac.in/wp-content/uploads/2022/08/download-3.png"
            alt="Team photo"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
    <section>
      <div className=" py-4">
        <h2 className="text-3xl text-red-700 font-bold mb-1">
          SIC is constantly working on its mission:
        </h2>
        <p className="mb-4"></p>
        <li>
          To support and foster the research enterprise in all branches of
          science and engineering at the Indian Institute of Technology Indore
          (IITI).
        </li>
        <li>
          To foster growth and competitiveness of the local industries by
          providing services in the identified gaps to make Indian industrial
          products <br /> as per global standards..
          <p />
        </li>
      </div>
    </section>
    <section>
      <div className="py-10">
        <h2 className="  text-3xl text-red-700 font-bold mb-1">
          The instruments at SIC are mainly focused on the following research
          areas:
        </h2>
        <p className="mb-4"></p>
        <li>
          Fundamental Research in Inorganic Chemistry, Organic Chemistry,
          Organometallic Chemistry .
        </li>
        <li>Various aspects of Material Science</li>
        <li>Bio-Science and Engineering, including work on biosensors</li>
        <li>Surface Science and Engineering, and</li>
        <li>
          Condensed Matter Physics.
          <p />
        </li>
      </div>
    </section>
    <section>
      <div className="py-8">
        <h2 className="  text-3xl text-red-700 font-bold mb-1">Function:</h2>
        <p className="mb-4"></p>
        <li>
          SIC has been operating with 32 instruments funded by the institute
          exclusively and recording data for all departments of the institute .
        </li>
        <li>
          SIC is continuously supporting academic programs including Ph.D.,
          Masters &amp; Bachelor of technology. students by giving hands-on{" "}
          <br /> training with the instruments by providing them the opportunity
          to analyze their own samples.
        </li>
        <li>
          SIC so far supported various projects funded by external agencies
          total valued above INR 48.0 crores.
        </li>
        <li>
          The center has been supporting various industrial organizations across
          India to develop their bestselling products using SIC sample <br />{" "}
          testing facility.
        </li>
        <li>
          Condensed Matter Physics.
          <p />
        </li>
      </div>
    </section>
    <section>
      <div className="py-10">
        <h2 className="  text-3xl text-red-700 font-bold mb-1">
          SIC Progress and evolution so far:
        </h2>
        <p className="mb-4"></p>
        <li>
          In the year 2011, the facility started functioning in our 2-satellite
          temporary campuses viz., IET &amp; PACL campus with a total of 18{" "}
          <br /> instruments.
        </li>
        <li>
          Since 2013, 8 more high-end instruments were added to facilitate the
          research at IITI.
        </li>
        <li>
          In 2014, the facility was shifted to the permanent campus at Simrol
          and became an integral part of IITI.
        </li>
        <li>
          With the gradual addition of more instruments, the facility is now
          working with a total 35 instruments and planning to expand <br /> this
          number in near future.
          <p />
        </li>
      </div>
    </section>
  </main>
</>

  )
}












