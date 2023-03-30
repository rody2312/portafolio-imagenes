//  icons
import {
    FiYoutube,
    FiInstagram,
    FiGithub,
    FiDribbble,
    FiLayout,
    FiSettings,
    FiPenTool,
    FiTag,
    FiMail,
    FiMapPin,
  } from 'react-icons/fi';
  
  // companies icons
  import FreelancerBrandIcon from './assets/img/noimage.webp';
  import UpworkBrandIcon from './assets/img/noimage.webp';
  import FiverBrandIcon from './assets/img/noimage.webp';
  import BehanceBrandIcon from './assets/img/noimage.webp';
  import DribbbleBrandIcon from './assets/img/noimage.webp';
  
  // projects images
  import Project1 from './assets/img/noimage.webp';
  import Project2 from './assets/img/noimage.webp';
  import Project3 from './assets/img/noimage.webp';
  import Project4 from './assets/img/noimage.webp';
  import Project5 from './assets/img/noimage.webp';
  import Project6 from './assets/img/noimage.webp';
  
  // skills images
  import SkillImg1 from './assets/img/noimage.webp';
  import SkillImg2 from './assets/img/noimage.webp';
  import SkillImg3 from './assets/img/noimage.webp';
  import SkillImg4 from './assets/img/noimage.webp';
  import SkillImg5 from './assets/img/noimage.webp';
  import SkillImg6 from './assets/img/noimage.webp';
  import SkillImg7 from './assets/img/noimage.webp';
  import SkillImg8 from './assets/img/noimage.webp';
  
  // testimonial images
  import TestiImage1 from './assets/img/noimage.webp';
  import TestiImage2 from './assets/img/noimage.webp';
  import TestiImage3 from './assets/img/noimage.webp';
  
  // navigation
  export const navigation = [
    {
      name: 'home',
      href: 'home',
    },
    {
      name: 'about',
      href: 'about',
    },
    {
      name: 'portfolio',
      href: 'portfolio',
    },
    {
      name: 'services',
      href: 'services',
    },
    {
      name: 'testimonials',
      href: 'testimonials',
    },
    {
      name: 'contact',
      href: 'contact',
    },
  ];
  
  // social
  export const social = [
    {
      icon: <FiYoutube />,
      href: '',
    },
    {
      icon: <FiInstagram />,
      href: '',
    },
    {
      icon: <FiGithub />,
      href: '',
    },
    {
      icon: <FiDribbble />,
      href: '',
    },
  ];
  
  // companies
  export const brands = [
    {
      img: FreelancerBrandIcon,
      href: '',
    },
    {
      img: UpworkBrandIcon,
      href: '',
    },
    {
      img: FiverBrandIcon,
      href: '',
    },
    {
      img: BehanceBrandIcon,
      href: '',
    },
    {
      img: DribbbleBrandIcon,
      href: '',
    },
  ];
  
  // projects
  export const projectsData = [
    {
      id: '1',
      image: Project1,
      name: 'project name 1',
      category: 'UI/UX design',
    },
    {
      id: '2',
      image: Project2,
      name: 'project name 2',
      category: 'web development',
    },
    {
      id: '3',
      image: Project3,
      name: 'project name 3',
      category: 'UI/UX design',
    },
    {
      id: '4',
      image: Project4,
      name: 'project name 4',
      category: 'branding',
    },
    {
      id: '5',
      image: Project5,
      name: 'project name 5',
      category: 'web development',
    },
    {
      id: '6',
      image: Project6,
      name: 'project name 6',
      category: 'web development',
    },
  ];
  
  // projects
  export const projectsNav = [
    {
      name: 'all',
    },
    {
      name: 'UI/UX Design',
    },
    {
      name: 'web development',
    },
    {
      name: 'branding',
    },
  ];
  
  // skill
  export const skills = [
    {
      image: SkillImg1,
    },
    {
      image: SkillImg2,
    },
    {
      image: SkillImg3,
    },
    {
      image: SkillImg4,
    },
    {
      image: SkillImg5,
    },
    {
      image: SkillImg6,
    },
    {
      image: SkillImg7,
    },
    {
      image: SkillImg8,
    },
  ];
  
  // services
  export const services = [
    {
      icon: <FiLayout />,
      name: 'Web Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiSettings />,
      name: 'Web Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiPenTool />,
      name: 'Branding',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
    {
      icon: <FiTag />,
      name: 'SEO',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
    },
  ];
  
  // testimonials
  export const testimonials = [
    {
      authorImg: TestiImage1,
      authorText:
        'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
      authorName: 'Olivia Doe',
      authorPosition: 'Head of Design, Google',
    },
    {
      authorImg: TestiImage2,
      authorText:
        'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
      authorName: 'Olivia Doe',
      authorPosition: 'Head of Design, Google',
    },
    {
      authorImg: TestiImage3,
      authorText:
        'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
      authorName: 'Olivia Doe',
      authorPosition: 'Head of Design, Google',
    },
  ];
  
  // contact
  export const contact = [
    {
      icon: <FiMail />,
      title: 'Have a question?',
      subtitle: 'I am here to help you.',
      description: 'Email me at hello@youremail.com',
    },
    {
      icon: <FiMapPin />,
      title: 'Current Location',
      subtitle: 'Bucharest, Romania',
      description: 'Serving clients worldwide',
    },
  ];
  