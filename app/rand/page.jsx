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
    <>
      <h1>Protected Page</h1>
      <p>You can view this page because you are signed in.</p>
    </>
  )
}