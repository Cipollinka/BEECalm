import {Mood} from '@/models';
import InspiredIcon from '@/content/icons/inspired.svg';
import RelaxedIcon from '@/content/icons/relaxed.svg';
import StressedIcon from '@/content/icons/stressed.svg';

export const COLORS = {
  '#FE6A60': 'Red',
  '#5CE2FE': 'Blue',
  '#B1E86E': 'Green',
  '#FABF43': 'Orange',
  '#FFF079': 'Yellow',
  '#C07FFC': 'Pink',
  '#6D86F9': 'Purple',
};

export const COLORS_BY_DAY = [
  {
    name: 'Purple',
    color: '#C07FFC',
  },
  {
    name: 'Red',
    color: '#FE5A60',
  },
  {
    name: 'Light Blue',
    color: '#5CE2FE',
  },
  {
    name: 'Blue',
    color: '#6D86F9',
  },
  {
    name: 'Green',
    color: '#B1E86E',
  },
  {
    name: 'Orange',
    color: '#FABF43',
  },
  {
    name: 'Yellow',
    color: '#FFF079',
  },
];

export const MOODS = {
  [Mood.RELAXED]: {
    Icon: RelaxedIcon,
    color: '#F9BF2B',
    label: 'relaxed',
  },
  [Mood.INSPIRED]: {
    Icon: InspiredIcon,
    color: '#59BF00',
    label: 'inspired',
  },
  [Mood.STRESSED]: {
    Icon: StressedIcon,
    color: '#FF5757',
    label: 'stressed',
  },
};
