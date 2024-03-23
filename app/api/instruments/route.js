
const instruments = [
  {
    id: 1,
    name: 'X-Ray',
    image:'https://sic.iiti.ac.in/wp-content/uploads/2022/09/IMG20220720123624__1_-removebg-preview.png',
    info: 'State the art dual core Agilent Technologies (Oxford Diffraction) Super Nova CCD System Access to micro-focus Cu and Mo sources which allows even small-size crystals data collection Oxford Cryosystems which enable temperature range from 90 to 400K High-definition microscopes for the separation and mounting of crystals',
    status: 'working',
    charge:100,
    commertial_charge:50,
    academic_charge:500
    

    
  },
  {
    id: 2,
    name: 'Ultrasound',
    image:"https://sic.iiti.ac.in/wp-content/uploads/2022/09/IMG_20220920_140212__1_-removebg-preview.png",
    info: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    status: 'calibrating',
    charge:50,
    commertial_charge:50,
    academic_charge:200
  },
  {
    id: 3,
    name: 'NMR Spectrometer',
    image:"https://sic.iiti.ac.in/wp-content/uploads/2022/12/IMG_0065-removebg-preview.png",
    info: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    status: 'available',
    charge:100,
    commertial_charge:50,
    academic_charge:100
  },
  {
    id: 4,
    name: 'Electron Microscope',
    image:"https://sic.iiti.ac.in/wp-content/uploads/2022/10/IMG_20220927_153551-removebg-preview.png",
    info: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
    status: 'maintenance',
    charge:110,
    commertial_charge:50,
    academic_charge:50
  },
  {
    id: 5,
    name: 'Mass Spectrometer',
    image:"https://sic.iiti.ac.in/wp-content/uploads/2022/09/IMG_20220927_1515341-removebg-preview.png",
    info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    status: 'offline',
    charge:105,
    commertial_charge:50,
    academic_charge:50
  },
  {
    id: 6,
    name: 'Atomic Force Microscope',
    image:"https://sic.iiti.ac.in/wp-content/uploads/2022/10/IMG_20220927_153551-removebg-preview.png",
    info: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    status: 'working',
    charge:104,
    commertial_charge:50,
    academic_charge:50
  },
  {
    id: 7,
    name: 'Gas Chromatograph',
    image:"https://sic.iiti.ac.in/wp-content/uploads/2022/10/IMG_20220927_153551-removebg-preview.png",
    info: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    status: 'maintenance',
    charge:107,
    commertial_charge:50,
    academic_charge:50
  },
  {
    id: 8,
    name: 'Spectrophotometer',
    image:'https://sic.iiti.ac.in/wp-content/uploads/2022/09/IMG20220720123624__1_-removebg-preview.png',
    info: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.',
    status: 'calibrating',
    charge:108,
    commertial_charge:50,
    academic_charge:50
  },
  {
    id: 9,
    name: 'Scanning Electron Microscope',
    image:"https://sic.iiti.ac.in/wp-content/uploads/2022/12/IMG_0065-removebg-preview.png",
    info: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
    status: 'offline',
    charge:1000,
    commertial_charge:50,
    academic_charge:50
  },
  {
    id: 10,
    name: 'Nuclear Magnetic Resonance Spectrometer',
    image:"https://sic.iiti.ac.in/wp-content/uploads/2022/12/IMG_0065-removebg-preview.png",
    info: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
    status: 'working',
    charge:105,
    commertial_charge:50,
    academic_charge:50
  },
  {
    id: 11,
    name: 'Elemental analyser',
    image:"https://sic.iiti.ac.in/wp-content/uploads/2022/12/IMG_0065-removebg-preview.png",
    info: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
    status: 'working',
    charge:1050,
    commertial_charge:50,
    academic_charge:50
  },
];


export async function GET() {
    return Response.json(instruments);
}