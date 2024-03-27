// // import { useState } from "react"; // Needed for conditional rendering
// // import BET from "../order/page";
// import HPLCForm from "../../pages/admin/forms/chromatography/hplc/page"

// const forms_instrument = {
 
//   20: (props) => <HPLCForm prop={props} />,
// };

// export async function getServerSideProps(context) {
//   const { req } = context;

//   try {
//     const response = await fetch("http://localhost:3000/api/User", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       // Include cookies or other authentication headers if necessary
//       headers: {
//         Cookie: req.headers.cookie, // Assuming authentication is done via cookies
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to fetch form details: ${response.status}`);
//     }

//     const data = await response.json();
//     return { props: { formDetails: data[0] } }; // Pass data as props
//   } catch (error) {
//     console.error("Error fetching form details:", error);
//     return { props: { error: "Failed to fetch form details" } }; // Handle errors
//   }
// }

// export default function MyOrders({ formDetails, error }) {
//   // No need for useEffect here, data is passed as props

//   return (
//     <div>
//       {formDetails?.order && (
//         <>
//           {/* More descriptive conditional rendering to avoid unnecessary loops */}
//           {Object.entries(formDetails.order).map(([key, orderDetails]) => (
//             <>
//               {Object.entries(orderDetails.forms).map(([key2, form]) => (
//                 <div key={`${key}-${key2}`}>
//                   {forms_instrument[key2](form)}
//                 </div>
//               ))}
//             </>
//           ))}
//         </>
//       )}
//       {!formDetails && <p>Loading form details...</p>}
//       {error && <p>Error: {error}</p>}
//     </div>
//   );
// }
