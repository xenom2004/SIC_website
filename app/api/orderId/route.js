
const order = [
    {
      "name":"siddhesh",
      "formDetails":"hi",
      "status":"active"
    },
 
    
  ];
  
  
  export async function GET() {
      return Response.json(order);
  }