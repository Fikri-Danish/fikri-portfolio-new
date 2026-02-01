// src/data/projectsData.js
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';

export const projectsData = [
  {
    id: 1,
    title: 'Student Task Manager App',
    description: 'A React Native app where students can create tasks, track assignments, and stay organized.',
    type: 'Mobile Development',
    image: project1,
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
  {
    id: 2,
    title: 'VR Escape Room',
    description: 'An immersive VR experience built with Unity, where players must solve puzzles to escape a silent space station.',
    type: 'Others',
    image: project2,
    overview: 'An immersive virtual reality escape room game set in a mysterious abandoned space station where players must solve interconnected puzzles to escape.',
    technologies: ['Unity 3D', 'C#', 'VR SDK', 'Blender', '3D Modeling'],
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
    title: 'Instagram Travel Grid',
    description: 'Designed a stylish Instagram grid in Photoshop, showcasing iconic landmarks with a travel promo.',
    type: 'Digital Design',
    image: project3,
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
];
