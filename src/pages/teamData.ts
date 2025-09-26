export type Category = 'All' | 'Board of Trustees' | 'Teachers' | 'Events Team' | 'Admin' | 'IT';

export interface Member {
  name: string;
  role: string;
  categories: Array<'Board of Trustees' | 'Teachers' | 'Events Team' | 'Admin' | 'IT'>;
  photo: string; // path served from Vite publicDir
  bio: string;
}

export const categories = [
  'All',
  'Board of Trustees',
  'Teachers',
  'Events Team',
  'Admin',
  'IT',
] as const satisfies readonly Category[];

export const members: Member[] = [
  { name: 'Panneerselvem Thangavel', role: 'President', categories: ['Board of Trustees'], photo: '/ctk/team/panneerselvem-thangavel.png', bio: 'Panneerselvam Thangavel is an engineering graduate from SRM University. Has rich experience in database administration. Panneer is from Chennai and he likes to spend time with his family and friends.' },
  { name: 'Geetha Murugesan', role: 'Secretary', categories: ['Board of Trustees'], photo: '/ctk/team/geetha-murugesan.png', bio: 'Geetha Murugesan is a MBA graduate and works in IT industry. She completed her engineering from Dr.Sivanthi Aditanar college of Engineering. Geetha is from Tirunelveli and loves to try out challenging activities. She likes to spend her time with family and listening to Tamil songs.' },
  { name: 'Kalyan Gnanaprakasam', role: 'Treasurer', categories: ['Board of Trustees', 'Events Team', 'Teachers'], photo: '/ctk/team/kalyan-gnanaprakasam.png', bio: 'Kalyan Gnanaprakasam is a diploma holder in Mechanical Engineering and Computer Applications. Has vast experience in travel, IT and consulting. Kalyan is from Chennai and has worked with social outfits like Satya Sai Organisation. He is passionate about politics and religion. His other interests are reading and listening to classical music.' },
  { name: 'Seturaman Ganapathy', role: 'Head of Events', categories: ['Board of Trustees'], photo: '/ctk/team/seturaman-ganapathy.png', bio: 'Sethuraman Ganapathy is a M.Sc - Computer Science graduate. He is currently working as a Technical Project Manager at Lowcarbon Contracts Company (Subsidiary of BEIS).' },
  { name: 'Rajesh Pannirselvam', role: 'Head of IT', categories: ['Board of Trustees', 'Events Team', 'IT'], photo: '/ctk/team/rajesh-pannirselvam.jpg', bio: 'Rajesh Pannirselvam is an Engineering Graduate from NIT, Allahabad and currently working in Banking Industry as IT consultant. Interested in cricket, music and making short movies.' },
  { name: 'Uma Lakshminarayanan', role: 'Head Teacher', categories: ['Teachers'], photo: '/ctk/team/uma-lakshminarayanan.png', bio: 'Uma Lakshminarayanan is a B.Com graduate and has Level 3 in Early Years and Level 2 in First Aid. She is currently working as a Pre-School Assistant, Bandon Hill Pre-School, Wallington. Uma is from Salem and her interests are drawing, listening to music, and reading poems. Her favourite poet is Mahakavi Barathiyar. She is fond of working with children.' },
  { name: 'Davapriya Balaraman', role: 'Teacher', categories: ['Teachers', 'Events Team'], photo: '/ctk/team/davapriya-balaraman.png', bio: 'Davapriya Balaraman is a B.Sc - Mathematics graduate and has diploma in Computer Applications. She currently works in Civil Service. Priya is from Chennai and her interests are reading and gardening.' },
  { name: 'Ponsudhakar Kamaraj', role: 'Teacher', categories: ['Teachers'], photo: '/ctk/team/ponsudhakar-kamaraj.jpg', bio: 'Ponsudhakar Kamaraj is an Engineering graduate and currently working as an IT engineer in Banking Industry. His interests are reading and playing Badminton.' },
  { name: 'Baskar Sundaram', role: 'Teacher', categories: ['Teachers'], photo: '/ctk/team/baskar-sundaram.jpg', bio: 'Baskar Sundaram is a Values driven Entrepreneur. Founder of Baachu. I am Fit and definitely a Foodie. I live by the moment. Hobbies and Interests - TAMIL, Travel, Asian HISTORY, Music, Rugby' },
  { name: 'Deepa Subramaniam', role: 'Teacher', categories: ['Teachers'], photo: '/ctk/team/deepa-subramaniam.png', bio: 'Deepa Subramaniam is a BE graduate. She is currently working as a Customer Services Assistant, Shirley library, part of Croydon Libraries. She loves her job helping people in the library. Deepa is from Tirupur and is fond of volunteering and proud to be teacher at CTK.' },
  { name: 'Sathiyanalini Sivakumar', role: 'Teacher', categories: ['Teachers'], photo: '/ctk/team/sathiyanalini-sivakumar.jpg', bio: 'Sathiyanalini Sivakumar is from Tamil nadu and working as Child minder. She is interested in books and gardening.' },
  { name: 'Vinitha Devi Mani', role: 'Teacher', categories: ['Teachers'], photo: '/ctk/team/vinitha-devi-mani.jpg', bio: 'Vinitha Devi Mani is from Tamil nadu and working as Service Executive. She is interested in books and music.' },
  { name: 'Anitha Dhanasekaran', role: 'Teacher', categories: ['Teachers'], photo: '/ctk/team/anitha-dhanasekaran.jpg', bio: 'Anitha Dhanasekaran is a Teaching volunteer. Interested in movies, music and reading.' },
  { name: 'Angai Maruthavanan', role: 'Teacher', categories: ['Teachers'], photo: '/ctk/team/angai-maruthavanan.png', bio: 'Angai Maruthavanan is a computer science engineer serving as the Head of Data at an insurance firm. She enjoys spending time with family and friends, cooking, dancing, and socialising. These personal interests keep her balanced and energised.' },
  { name: 'Adalarasan Jayavelu', role: 'Teacher', categories: ['Teachers'], photo: '/ctk/team/adalarasan-jayavelu.png', bio: 'Adal is from Tamil nadu and currently working in as IT consultant. Interested in teaching and technology.' },
  { name: 'Srilekha Ganesan', role: 'Teacher', categories: ['Teachers'], photo: '/ctk/team/srilekha-ganesan.png', bio: 'Srilekha Ganesan is from Tamil nadu and currently a Home maker. Interested in reading, music and movies.' },
  { name: 'Vathana Priya', role: 'Teacher', categories: ['Teachers'], photo: '/ctk/team/vathana-priya.png', bio: 'Vathana is from Madurai and graduated with a degree in Computer Science Engineering from Raja Engineering College. She is currently working as an Early Years Practitioner at Fledgling Preschool. Vathana is interested in arts and crafts and enjoys learning new skills.' },
  { name: 'Sundara Muthukrishnan', role: 'Teacher', categories: ['Teachers'], photo: '/ctk/team/sundara-muthukrishnan.png', bio: 'Sundara hails from Mayiladuthurai and did her masters in Commerce from the Bharathidasan University .Having studied in Tamil medium ,she is passionate about teaching and sharing her knowledge of the language with the kids .Sundara likes spending time with her family and reading books.' },
  { name: 'Sasikala Ramasamy', role: 'Teacher', categories: ['Teachers'], photo: '/ctk/team/sasikala-ramasamy.png', bio: 'Sasi is from Salem, TamilNadu and hold Masters in MBA. I am lunchtime assistant and interested in teaching, cooking and listening to music.' },
  { name: 'Rekha Rajesh', role: 'Teacher', categories: ['Teachers', 'Events Team', 'IT'], photo: '/ctk/team/rekha-rajesh.png', bio: 'Rekha Rajesh is an Engineering Graduate from Sona Engineering college and a Front end designer and developer. Interested in arts, interior design and cooking.' },
  { name: 'Ramesh Kumar Ganesan', role: 'Admin', categories: ['Admin'], photo: '/ctk/team/ramesh-kumar-ganesan.png', bio: 'Ramesh Kumar Ganesan is from Tamil nadu and currently working in as IT Manager. Interested in reading, music and movies.' },
  { name: 'Ramya Jayaraman', role: 'Events organiser', categories: ['Events Team'], photo: '/ctk/team/ramya-jayaraman.png', bio: 'Ramya Jayaraman is a MCA graduate from Bharathiar University and did her B.Com in SIET college. She is working as a Financial Systems Analyst in  LexisNexis, a Legal publishing company.' },
];
