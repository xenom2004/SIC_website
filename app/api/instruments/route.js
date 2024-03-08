
const instruments = [
  {
    id: 1,
    name: 'X-Ray',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tempus posuere.',
    status: 'working',
    
  },
  {
    id: 2,
    name: 'Ultrasound',
    info: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    status: 'calibrating',
  },
  {
    id: 3,
    name: 'NMR Spectrometer',
    info: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    status: 'available',
  },
  {
    id: 4,
    name: 'Electron Microscope',
    info: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
    status: 'maintenance',
  },
  {
    id: 5,
    name: 'Mass Spectrometer',
    info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    status: 'offline',
  },
  {
    id: 6,
    name: 'Atomic Force Microscope',
    info: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    status: 'working',
  },
  {
    id: 7,
    name: 'Gas Chromatograph',
    info: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    status: 'maintenance',
  },
  {
    id: 8,
    name: 'Spectrophotometer',
    info: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.',
    status: 'calibrating',
  },
  {
    id: 9,
    name: 'Scanning Electron Microscope',
    info: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
    status: 'offline',
  },
  {
    id: 10,
    name: 'Nuclear Magnetic Resonance Spectrometer',
    info: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
    status: 'working',
  },
];


export async function GET() {
    return Response.json(instruments);
}