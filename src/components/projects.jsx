import styled from 'styled-components';
import ProjectCard from './projectCard';
import nxtTrendz from '../assets/projects/nxtTrendz.png';
import JobbyApp from '../assets/projects/JobbApp.png';
import MatchGame from '../assets/projects/MatchGame.png';
import EmojiGame from '../assets/projects/EmojiGame.png';
import CharaterCount from '../assets/projects/CharaterCount.png';
import FoodMuch from '../assets/projects/foodmuch.png';
import todo from '../assets/projects/todo.png';

const projects = [
  {
    id: 7,
    name: 'Nxt Trendz',
    type: ['SOLO', 'Front End Dev', '2024'],
    description: 'This application is a basic e-commerce platform built with React. It allows users to log in, browse products, view product details, and manage a shopping cart. Once logged in, users can add items to their cart, update the quantity, and remove items. The cart is managed using Reacts state and Context API, ensuring the cart data is accessible across components.',
    technology: ['React', 'Redux', 'Styled-Components'],
    image: nxtTrendz,
    link: 'https://github.com/vsathyanagasai/sathyanxtTrendz.git',
    liveDemo: 'https://sathyanxttrendz.ccbp.tech/login',
  },
  {
    id: 6,
    name: 'Jobby App',
    type: ['COL', 'Front End Dev', '2024'],
    description: 'This application is a Job Search Platform designed to provide users with an efficient and personalized experience for discovering job opportunities. The platform features an authentication system, user-friendly navigation, and dynamic job listings based on employment type and salary range preferences.',
    technology: ['JavaScript', 'React', 'Styled-Components', 'React-Testing-Library', 'React/Bootstrap'],
    image: JobbyApp,
    link: 'https://github.com/vsathyanagasai/JobbyApp.git',
    liveDemo: 'https://jobbyappnaga.ccbp.tech/login',
  },
  {
    id: 5,
    name: 'Match Game',
    type: ['COL', 'Front End Dev', '2024'],
    description: 'This is a fun memory match game where players need to match images based on their category. The game includes a scoring system, a countdown timer, and random image selection. It is designed using Reacts state and component lifecycle methods.',
    technology: ['React', 'Redux', 'Styled-Components', 'React-Testing-Library', 'React/Bootstrap'],
    image: MatchGame,
    link: 'https://github.com/vsathyanagasai/SathyaMatchGame.git',
    liveDemo: 'https://github.com/vsathyanagasai/SathyaMatchGame.git',
  },
  {
    id: 4,
    name: 'Emoji Game',
    type: ['SOLO', 'Front End Dev', '2024'],
    description: 'Emoji Game is an interactive and fun web application built using React, where users can engage with a variety of emojis. The app presents a list of emojis, each with its name and an image, providing a playful experience.',
    technology: ['JavaScript', 'React', 'SCSS'],
    image: EmojiGame,
    link: 'https://github.com/vsathyanagasai/Sathya_Emoji_Game.git',
    liveDemo: 'https://emojisaigame.ccbp.tech/',
  },
  {
    id: 3,
    name: 'Charater Count',
    type: ['SOLO', 'Front End Dev', '2024'],
    description: 'Character Counter is an interactive web application that allows users to add words and counts the number of characters in each word.',
    technology: ['React', 'SCSS'],
    image: CharaterCount,
    link: 'https://charactercounts.ccbp.tech/',
    liveDemo: 'https://charactercounts.ccbp.tech/',
  },
  {
    id: 2,
    name: 'Food Much',
    type: ['SOLO', 'Front End Dev', '2024'],
    description: 'Foodmuch is an innovative food delivery platform designed to offer a user-friendly experience for customers to explore a wide variety of local restaurants and order food online with ease.',
    technology: ['HTML', 'JavaScript', 'SCSS'],
    image: FoodMuch,
    link: 'https://github.com/vsathyanagasai/Food_Much.git',
    liveDemo: 'https://sathyafoodmuch.ccbp.tech/',
  },
  {
    id: 1,
    name: 'To-Do App',
    type: ['SOLO', 'Front End Dev', '2024'],
    description: 'To-Do List is a project to showcase daily tasks arrangement with the help of webpack.',
    technology: ['HTML', 'JavaScript', 'CSS', 'Webpack'],
    image: todo,
    link: 'https://github.com/vsathyanagasai/TodoAPP',
    liveDemo: 'https://nagasaitodoapp.ccbp.tech/',
  },
];

const Projects = () => (
  <Section id="projects" className="py-28">
    <ul className="flex flex-col items-center">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  </Section>
);

export default Projects;

const Section = styled.section``;
