

// Replace `instruments` with your actual data
const instruments = [
  {
    id: 1,
    name: 'X-Ray',
    info: 'blabla',
    status: 'working',
  },
  {
    id: 2,
    name: 'Ultrasound',
    info: 'blabla',
    status: 'calibrating',
  },
];

export async function GET() {
    return Response.json(instruments);
  }