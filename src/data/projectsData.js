// src/data/projectsData.js
import projectImage1a from '../imagesProjects/1a.png';

import projectImage2a from '../imagesProjects/2a.png';
import projectImage2b from '../imagesProjects/2b.png';
import projectImage2c from '../imagesProjects/2c.png';
import projectImage2d from '../imagesProjects/2d.png';
import projectImage2e from '../imagesProjects/2e.png';
import projectImage2f from '../imagesProjects/2f.png';

import projectImage3a from '../imagesProjects/3a.gif';
import projectImage3b from '../imagesProjects/3b.gif';
import projectImage3c from '../imagesProjects/3c.gif';
import projectImage3d from '../imagesProjects/3d.gif';

import projectImage4a from '../imagesProjects/4a.png';
import projectImage4b from '../imagesProjects/4b.png';
import projectImage4c from '../imagesProjects/4c.jpg';

import projectImage5a from '../imagesProjects/5a.png';

import projectImage6a from '../imagesProjects/6a.png';
import projectImage6b from '../imagesProjects/6b.png';
import projectImage6c from '../imagesProjects/6c.png';
import projectImage6d from '../imagesProjects/6d.png';
import projectImage6e from '../imagesProjects/6e.png';

import projectImage7a from '../imagesProjects/7a.png';

import projectImage8a from '../imagesProjects/8a.gif';
import projectImage8b from '../imagesProjects/8b.gif';
import projectImage8c from '../imagesProjects/8c.png';
import projectImage8d from '../imagesProjects/8d.gif';
import projectImage8e from '../imagesProjects/8e.png';
import projectImage8f from '../imagesProjects/8f.gif';

export const projectsData = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website built with React to showcase my projects, skills, and professional experience.',
    type: 'Web App Development',
    image: projectImage1a,
    overview: 'A comprehensive portfolio website designed to present my work as a Digital Design & Development student. The site serves as a central hub for potential employers, clients, and collaborators to explore my projects, understand my skill set, and get in touch.\n\nBuilt with modern web technologies, the portfolio emphasizes clean design, smooth navigation, and responsive layouts that work seamlessly across all devices.',
    technologies: ['React', 'React Router', 'JavaScript', 'CSS3', 'HTML5', 'EmailJS'],
    features: [
      'Fully responsive design that adapts to all screen sizes',
      'Dynamic project filtering by category (Web Dev, Mobile Dev, Design, Others)',
      'Interactive project gallery with image and video support',
      'Integrated contact form with email functionality',
      'Smooth scroll animations and transitions',
      'Clean, professional UI with consistent branding'
    ],
    challenges: 'One of the main challenges was creating a flexible project detail system that could handle different types of media, including images and YouTube videos, while maintaining a consistent layout. Additionally, ensuring the site was fully responsive required careful attention to CSS grid and flexbox layouts.\n\nAnother challenge was implementing smooth user experience features like project filtering and contact form validation while keeping the code clean and maintainable.',
    outcome: 'Successfully created a professional portfolio website that effectively showcases my projects and skills. The site demonstrates my proficiency in React development, responsive design, and user experience principles. It serves as both a portfolio piece itself and a platform to display my other work.',
    links: [
      {
        title: 'GitHub Repository',
        url: 'https://github.com/Fikri-Danish/fikri-portfolio-new'
      }
    ]
  },
  {
    id: 2,
    title: 'VR Escape Room',
    description: 'An immersive VR experience built with Unity, where players must solve puzzles to escape a silent space station.',
    type: 'Immersive Technology',
    image: projectImage2a,
    // Example with multiple media including YouTube video
    media: [
      {
        type: 'youtube',
        src: 'https://youtu.be/8l1e7q33GII'
      },
      {
        type: 'image',
        src: projectImage2a
      },
      {
        type: 'image',
        src: projectImage2b
      },
      {
        type: 'image',
        src: projectImage2c
      },
      {
        type: 'image',
        src: projectImage2d
      },
      {
        type: 'image',
        src: projectImage2e
      },
      {
        type: 'image',
        src: projectImage2f
      },
    ],
    overview: 'An immersive virtual reality escape room game set in a mysterious abandoned space station where players must solve interconnected puzzles to escape.',
    technologies: ['Unity', 'C#', 'Virtual Reality'],
    features: [
      'Fully immersive VR environment',
      'Multiple interconnected puzzle rooms',
      'Environmental storytelling',
      'Interactive objects and mechanisms',
      'Atmospheric sound design'
    ],
    challenges: 'Creating engaging VR mechanics that don\'t cause motion sickness while maintaining puzzle complexity and narrative flow.',
    outcome: 'Created an engaging VR experience that received positive feedback for its atmosphere and creative puzzle design.'
  },
  {
    id: 3,
    title: 'Green Activities Mobile App',
    description: 'Team project: A mobile app that tracks eco-friendly activities aligned with Singapore’s Green Plan 2030.',
    type: 'Mobile App Development',
    image: projectImage3a,
    media: [
      {
        type: 'youtube',
        src: 'https://youtu.be/4D9Tu-qLdOU'
      },
      {
        type: 'image',
        src: projectImage3a
      },
      {
        type: 'image',
        src: projectImage3b
      },
      {
        type: 'image',
        src: projectImage3c
      },
      {
        type: 'image',
        src: projectImage3d
      },
    ],
    overview: 'Green Activities is a mobile application designed to help users track eco-friendly activities aligned with Singapore’s Green Plan 2030. Users can record, monitor, and earn milestones for sustainable actions, encouraging long-term engagement with green practices. The app connects to a backend web service (API) to store and retrieve data, ensuring activities persist across sessions and devices.',
    technologies: ['React Native', 'JavaScript', 'REST API', 'Backend Integration', 'Mobile UI/UX'],
    features: [
      'User-friendly mobile interface',
      'Integration with a backend web service',
      'Data stored and retrieved via RESTful API calls',
      'Error handling and input validation',
      'Activity tracking aligned with Singapore’s Green Plan 2030 pillars',
      'Support for multiple pillars per activity',
      'Milestone system awarding titles every five activities',
      'Persistent data across sessions and devices'
    ],
    challenges: 'Ensuring smooth API integration and data persistence across sessions while maintaining a user-friendly UI. Handling multiple pillars per activity and implementing milestone tracking required careful data structure design and validation.',
    outcome: 'Successfully developed a functional mobile app that promotes sustainable practices, with reliable API integration and milestone rewards that encourage continued engagement.',
    links: [
      {
        title: 'Frontend Codebase (GitHub)',
        url: 'https://github.com/Fikri-Danish/GreenActivities'
      },
      {
        title: 'Backend Codebase (GitHub)',
        url: 'https://github.com/Fikri-Danish/onlineGreenActivitiesWebService'
      }
    ]
  },
  {
    id: 4,
    title: 'AR Professional Name Card',
    description: 'A professional name card enhanced with augmented reality, revealing a 3D logo when scanned for a more engaging networking experience.',
    type: 'Immersive Technology',
    image: projectImage4a,
    media: [
      {
        type: 'youtube',
        src: 'https://youtu.be/ry1gCRlYNlk'
      },
      {
        type: 'image',
        src: projectImage4a
      },
      {
        type: 'image',
        src: projectImage4b
      },
      {
        type: 'image',
        src: projectImage4c
      },
    ],
    overview: 'This project explores the use of Augmented Reality (AR) to enhance traditional professional networking. Instead of a static business card, the design comes to life when scanned using a mobile device or webcam. By combining a professionally designed name card with AR technology, the project delivers an interactive experience that creates a memorable digital-first impression.\n\nThe name card serves as an image target that triggers a 3D element when detected, demonstrating the practical use of AR in branding and personal identity.',
    technologies: ['Unity', 'Vuforia Engine', 'Blender', 'Mobile Augmented Reality', 'Canva'],
    features: [
      'Professionally designed name card used as an AR image target',
      '3D logo appears in real space when the card is scanned',
      'Smooth image tracking and stable AR rendering',
      'Optimized 3D asset for mobile-friendly performance',
      'Clean branding and readable contact information'
    ],
    challenges: 'One of the main challenges in this project was creating a suitable 3D model for the AR experience. Building a 3D object directly within Unity proved limiting due to the lack of dedicated modeling tools and reduced control over geometry and visual details.\n\nTo overcome this, a 2D version of the logo was first prepared and then converted into a 3D model using Blender. This approach allowed for better control over the shape, materials, and optimization of the model. The finalized 3D logo was then imported back into Unity and integrated with Vuforia for image tracking, resulting in a smooth and visually consistent AR experience across devices.',
    outcome: 'The project successfully delivers an AR-enabled professional name card that blends design, branding, and immersive technology. The final result demonstrates my ability to integrate multiple tools, Canva, Blender, and Unity, to create a polished AR experience suitable for modern professional networking and digital portfolios.'
  },
  {
    id: 5,
    title: 'Instagram Travel Grid',
    description: 'A curated Instagram grid design showcasing iconic travel destinations with promotional content.',
    type: 'Digital Design',
    image: projectImage5a,
    overview: 'This project focuses on designing a visually cohesive Instagram feed using a grid layout to present travel destinations, branding elements, and promotional messaging in a consistent style.',
    technologies: ['Photoshop'],
    features: [
      'Cohesive grid-based layout',
      'Consistent colour grading and visual tone',
      'Integrated typography for promotions and branding',
      'Clear brand identity and visual hierarchy',
      'Optimised layout for social media engagement'
    ],
    challenges: 'Ensuring visual consistency across diverse locations while maintaining a strong and recognisable brand identity.',
    outcome: 'Successfully created a polished Instagram grid that enhances brand presence and attracts audience engagement.'
  },
  {
    id: 6,
    title: 'Student Task Manager App',
    description: 'A React Native task management app for students with section-based tracking and persistent storage using AsyncStorage.',
    type: 'Mobile App Development',
    image: projectImage6a,
    media: [
      {
        type: 'youtube',
        src: 'https://youtu.be/tGvr8vkg95U'
      },
      {
        type: 'image',
        src: projectImage6a
      },
      {
        type: 'image',
        src: projectImage6b
      },
      {
        type: 'image',
        src: projectImage6c
      },
      {
        type: 'image',
        src: projectImage6d
      },
      {
        type: 'image',
        src: projectImage6e
      }
    ],
    overview: 'This is a simple task-tracking app built with React Native. It helps users organize their tasks by grouping them into different sections such as To Do, In Progress, and Completed. Each task includes details like title, module, due date, and description. Tasks can be added, edited, moved between sections, or deleted.',
    technologies: ['React Native', 'JavaScript', 'AsyncStorage', 'React Navigation'],
    features: [
      'Add new tasks with title, module, due date, and description',
      'Edit and update tasks',
      'Section-based task organization (To Do, In Progress, Completed)',
      'AsyncStorage integration for data persistence',
      'Clean and modern user interface'
    ],
    challenges: 'Implementing a clear section-based workflow and ensuring tasks persist across app sessions using AsyncStorage while maintaining a smooth UI experience.',
    outcome: 'Successfully developed a functional and user-friendly task manager app that helps students organize their tasks efficiently and reliably.',
    links: [
      {
        title: 'GitHub Repository',
        url: 'https://github.com/Fikri-Danish/StudentTaskManagerApp'
      }
    ]
  },
  {
    id: 7,
    title: 'Plant-Based Food Trail Awareness Poster',
    description: 'A digital poster designed to promote a Plant-Based Food Trail event, highlighting vegetarian and vegan food options while raising awareness of the plant-based movement in Singapore.',
    type: 'Digital Design',
    image: projectImage7a,
    overview: 'This awareness poster was created for a Plant-Based Food Trail event in collaboration with small businesses in Bedok. The design aims to educate participants about the plant-based movement, its benefits and challenges, and encourage engagement through visual storytelling and a QR code for more information. The overall theme aligns with the organisation’s brand colours of green and yellow, reinforced with food imagery and greenery elements.',
    technologies: ['Canva'],
    features: [
      'Use of green and yellow colour palette to align with the organisation’s branding',
      'Strong visual emphasis on the headline and plant-based food imagery',
      'Clear informational layout with bullet points for easy readability',
      'QR code integration to direct viewers to additional event details',
      'Educational “What you will learn” section to set clear expectations for participants'
    ],
    challenges: 'Balancing multiple visual elements such as text, imagery, and a QR code without overwhelming the viewer was a key challenge. This was addressed by applying asymmetrical balance, placing the main food image slightly off-centre and counterbalancing it with text content. Another challenge was guiding viewers through the information effectively; this was solved by using visual movement cues such as arrows in the “What you will learn” section and strong contrast to establish a clear visual hierarchy.',
    outcome: 'Successfully produced an engaging and informative event awareness poster that communicates key details clearly, attracts attention through strong visual hierarchy, and encourages audience participation in the Plant-Based Food Trail.'
  },
  {
    id: 8,
    title: 'Study Space Booking System',
    description: 'A full-stack web application for library and study area booking with real-time availability tracking and role-based access control. (Group Project)',
    type: 'Web App Development',
    image: projectImage8a,
    media: [
      {
        type: 'image',
        src: projectImage8a
      },
      {
        type: 'image',
        src: projectImage8b
      },
      {
        type: 'image',
        src: projectImage8c
      },
      {
        type: 'image',
        src: projectImage8d
      },
      {
        type: 'image',
        src: projectImage8e
      },
      {
        type: 'image',
        src: projectImage8f
      },
    ],
    overview: 'StudySpace is a comprehensive booking system designed to help students find and reserve study spaces across campus libraries. This group project features real-time availability tracking, zone-type filtering (Quiet/Discussion), and capacity-based search. It implements role-based authentication where admins can manage spaces while students can browse and book available spots. The system eliminates the hassle of searching for empty seats by providing live availability status and advance booking capabilities.',
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'JWT Authentication', 'React Router', 'CORS'],
    features: [
      'Real-time study space availability tracking',
      'Role-based access control (Admin and Student roles)',
      'Space filtering by location, capacity, and zone type',
      'Book, edit, and manage study spaces',
      'JWT-based authentication and protected routes',
      'Responsive design with modern UI/UX',
      'Admin dashboard for space management (add, edit, delete)',
      'Student booking system with booking history',
      'MySQL database integration for persistent data storage'
    ],
    challenges: 'Implementing secure role-based authentication while ensuring proper state management across multiple components. Managing real-time availability updates and preventing booking conflicts required careful handling of MySQL datetime conversions between frontend and backend. Additionally, establishing proper CORS policies and protecting routes based on user roles presented complexity in maintaining security without compromising user experience.',
    solution: 'Implemented JWT-based authentication with middleware functions (requireAuth, requireAdmin) on the backend to enforce role-based access. Created a custom datetime conversion utility (toMySQLDateTime) to handle timezone discrepancies between JavaScript Date objects and MySQL DATETIME format. Used React Router\'s ProtectedRoute component to conditionally render pages based on user roles stored in localStorage. Configured CORS with whitelisted origins and proper headers to enable secure cross-origin requests while maintaining API security.',
    outcome: 'Successfully deployed a production-ready study space booking system that streamlines the process of finding and reserving study areas on campus. The application effectively handles concurrent users, maintains data integrity through proper database transactions, and provides a seamless booking experience with clear role separation between admins and students.',
    links: [
      {
        title: 'GitHub Repository - Frontend',
        url: 'https://github.com/24044781-FynnNgJunMing/c219_ca2'
      },
      {
        title: 'GitHub Repository - Backend',
        url: 'https://github.com/Fikri-Danish/onlineStudySpacesWebService'
      },
      {
        title: 'Frontend Live Website (Vercel)',
        url: 'https://c219-ca2.vercel.app'
      },
      {
        title: 'Live API (Render)',
        url: 'https://onlinestudyspaceswebservice.onrender.com/allspaces'
      },
    ]
  }
];
