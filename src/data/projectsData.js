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

export const projectsData = [
    {
    id: 1,
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website built with React to showcase my projects, skills, and professional experience.',
    type: 'Web Development',
    image: projectImage1a, // You'll need to add this image
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
    outcome: 'Successfully created a professional portfolio website that effectively showcases my projects and skills. The site demonstrates my proficiency in React development, responsive design, and user experience principles. It serves as both a portfolio piece itself and a platform to display my other work.'
  },
  {
    id: 2,
    title: 'VR Escape Room',
    description: 'An immersive VR experience built with Unity, where players must solve puzzles to escape a silent space station.',
    type: 'Others',
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
    type: 'Mobile Development',
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
    outcome: 'Successfully developed a functional mobile app that promotes sustainable practices, with reliable API integration and milestone rewards that encourage continued engagement.'
  },
  {
    id: 4,
    title: 'AR Professional Name Card',
    description: 'A professional name card enhanced with augmented reality, revealing a 3D logo when scanned for a more engaging networking experience.',
    type: 'Others',
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
    description: 'Designed a stylish Instagram grid in Photoshop, showcasing iconic landmarks with a travel promo.',
    type: 'Digital Design',
    image: projectImage5a,
    // Single image - no gallery will be shown
    overview: 'A cohesive Instagram feed design project featuring a curated collection of travel photographs arranged in an aesthetically pleasing grid layout.',
    technologies: ['Photoshop'],
    features: [
      'Consistent color grading across all images',
      'Strategic grid layout planning',
      'Typography integration for promotional content',
      'Brand identity development',
      'Engagement-optimized posting strategy'
    ],
    challenges: 'Maintaining visual consistency while showcasing diverse locations and creating a recognizable brand aesthetic.',
    outcome: 'Developed a visually stunning Instagram grid that effectively communicates the travel brand\'s identity and increases engagement.'
  },
  {
    id: 6,
    title: 'Student Task Manager App',
    description: 'A React Native task management app for students with section-based tracking and persistent storage using AsyncStorage.',
    type: 'Mobile Development',
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
    outcome: 'Successfully developed a functional and user-friendly task manager app that helps students organize their tasks efficiently and reliably.'
  },
];
