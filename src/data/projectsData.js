// src/data/projectsData.js
import projectImage1 from '../images/project1.png';

import projectImage2a from '../imagesProjects/2a.png';
import projectImage2b from '../imagesProjects/2b.png';
import projectImage2c from '../imagesProjects/2c.png';
import projectImage2d from '../imagesProjects/2d.png';
import projectImage2e from '../imagesProjects/2e.png';
import projectImage2f from '../imagesProjects/2f.png';

import projectImage3 from '../images/project3.png';

import projectImage4a from '../imagesProjects/4a.png';
import projectImage4b from '../imagesProjects/4b.png';
import projectImage4c from '../imagesProjects/4c.jpg';

import projectImage5a from '../imagesProjects/5a.png';

export const projectsData = [
    {
    id: 1,
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website built with React to showcase my projects, skills, and professional experience.',
    type: 'Web Development',
    image: projectImage5a, // You'll need to add this image
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
    id: 4,
    title: 'Instagram Travel Grid',
    description: 'Designed a stylish Instagram grid in Photoshop, showcasing iconic landmarks with a travel promo.',
    type: 'Digital Design',
    image: projectImage3,
    // Single image - no gallery will be shown
    overview: 'A cohesive Instagram feed design project featuring a curated collection of travel photographs arranged in an aesthetically pleasing grid layout.',
    technologies: ['Photoshop', 'Lightroom', 'Color Theory', 'Visual Design', 'Social Media Marketing'],
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
    id: 5,
    title: 'Student Task Manager App',
    description: 'A React Native app where students can create tasks, track assignments, and stay organized.',
    type: 'Mobile Development',
    image: projectImage1,
    // For single image projects, use 'image' field
    overview: 'A comprehensive task management application designed specifically for students to help them stay on top of their academic responsibilities.',
    technologies: ['React Native', 'JavaScript', 'Expo', 'AsyncStorage', 'React Navigation'],
    features: [
      'Create and manage tasks with deadlines',
      'Track assignment status (pending, in progress, completed)',
      'Set priority levels for tasks',
      'Receive notifications for upcoming deadlines',
      'Dark mode support'
    ],
    challenges: 'Implementing persistent data storage and creating an intuitive user interface that works across different screen sizes.',
    outcome: 'Successfully developed a fully functional app that helps students organize their academic life more efficiently.'
  },
];
