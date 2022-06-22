import { AiOutlineTrophy } from 'react-icons/ai';
import { GrCheckmark } from 'react-icons/gr';
import { FiTruck } from 'react-icons/fi';

import shoe1 from './Images/ash-canvas.jpg';
import shoe2 from './Images/brown-merrell.jpg';
import shoe3 from './Images/pink-hells.jpg';
import shoe4 from './Images/red-heels.jpg';
import shoe5 from './Images/snickers.png';
import shoe6 from './Images/casual-leather.jpg';
import shoe7 from './Images/dress-brown.jpg';
import shoe8 from './Images/italian-leather.jpg';
import shoe9 from './Images/ash-heels.jpg';
import shoe10 from './Images/colored-heels.jpg';
import shoe11 from './Images/transparent-sandals.jpg';
import shoe12 from './Images/head-black.jpg';
import shoe13 from './Images/black-red.jpg';
import shoe14 from './Images/black-clarks.jpg';
import shoe15 from './Images/brown-cooperate.jpg';

const servicesOffer = [
  {
    id: 1,
    service: 'high quality',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tempore earum quidem pariatur voluptatem aspernatur quam blanditiis facere ipsum nesciunt.',
    icon: <AiOutlineTrophy />,
  },

  {
    id: 2,
    service: 'waranty protection',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tempore earum quidem pariatur voluptatem aspernatur quam blanditiis facere ipsum nesciunt.',
    icon: <GrCheckmark />,
  },

  {
    id: 3,
    service: 'free shipping',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tempore earum quidem pariatur voluptatem aspernatur quam blanditiis facere ipsum nesciunt.',
    icon: <FiTruck />,
  },
];

const footWears = [
  {
    id: '1',
    image: shoe1,
    name: 'Boss cv',
    rating: 5,
    price: 200.54,
    // category: ['shoe', 'brown', 'sports', 'male'],
    category: 'sneekers',
    description:
      'A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time ',
  },
  {
    id: '2',
    image: shoe2,
    name: 'Merrell shoe',
    rating: 3,
    price: 193.26,
    // category: ['shoe', 'brown', 'sports', 'male'],
    category: 'sneekers',
    description:
      'A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time ',
  },
  {
    id: 'shoe/3',
    image: shoe3,
    name: 'L-V',
    rating: 4,
    price: 549.6,
    // category: ['female', 'heels', 'pink'],
    category: 'heels',
    description:
      'A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time ',
  },
  {
    id: 'shoe/4',
    image: shoe4,
    name: 'Princess',
    rating: 2,
    price: 100.97,
    // category: ['female', 'heels', 'red'],
    category: 'heels',
    description:
      'A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time ',
  },
  {
    id: 'shoe/5',
    image: shoe5,
    name: 'Snickers',
    rating: 3,
    price: 56,
    // category: ['shoe', 'all-stars', 'sports', 'male'],
    category: 'sports',
    description:
      'A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time ',
  },
  {
    id: 'shoe/6',
    image: shoe6,
    name: 'Casual-leather',
    rating: 5,
    price: 560,
    // category: ['shoe', 'brown', 'leather'],
    category: 'coporate',
    description:
      'A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time ',
  },
  {
    id: 'shoe/7',
    image: shoe7,
    name: 'dress-brown',
    rating: 4,
    price: 280,
    // category: ['shoe', 'brown', 'leather'],
    category: 'coporate',
    description:
      'A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time ',
  },
  {
    id: 'shoe/8',
    image: shoe8,
    name: 'Italian-leather',
    rating: 3,
    price: 111,
    // category: ['shoe', 'brown', 'leather'],
    category: 'coporate',
    description:
      'A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time ',
  },
  {
    id: 'shoe/9',
    image: shoe9,
    name: 'Thick heel bag',
    rating: 3,
    price: 199,
    // category: ['heels', 'female', 'ash'],
    category: 'heels',
    description:
      'A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time ',
  },
  {
    id: 'shoe/10',
    image: shoe10,
    name: 'Colored heels',
    rating: 4,
    price: 111,
    // category: ['heels', 'female', 'ash'],
    category: 'heels',
    description:
      'A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time ',
  },
  {
    id: 'shoe/11',
    image: shoe11,
    name: 'Transaparent sexy sandal',
    rating: 5,
    price: 9000,
    // category: ['heels', 'female', 'ash'],
    category: 'heels',
    description:
      'A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time ',
  },
  {
    id: 'shoe/12',
    image: shoe12,
    name: 'Head black sports kit',
    rating: 5,
    price: 900,
    // category: ['sports', 'male'],
    category: 'sports',
    description:
      'A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time ',
  },
  {
    id: 'shoe/13',
    image: shoe13,
    name: 'Black Red snickers',
    rating: 5,
    price: 550,
    // category: ['sports', 'male', 'black'],
    category: 'sneekers',
    description:
      'A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time ',
  },
  {
    id: 'shoe/14',
    image: shoe14,
    name: "Black Carks men's wear",
    rating: 5,
    price: 1200,
    // category: ['shoe', 'brown', 'leather'],
    category: 'coporate',
    description:
      'A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time ',
  },
  {
    id: 'shoe/15',
    image: shoe15,
    name: 'Brown luxers',
    rating: 5,
    price: 600,
    // category: ['shoe', 'brown', 'leather'],
    category: 'coporate',
    description:
      'A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time ',
  },
];

export { footWears, servicesOffer };
