import { ILocation, Locations } from '@interfaces/location.interface.d';

export const locationSPB: ILocation = {
  city: Locations.SPB,
  phoneNumbers: ['8(800)333-64-88', '8(812)715-75-73'],
  description: 'Звонок бесплатный по России'
};

const locationMSK: ILocation = {
  city: Locations.MSK,
  phoneNumbers: ['8(925)488-61-29', '8(925)222-44-07'],
  description: 'Есть вопрос? Позвоните нам!'
};

const locationRND: ILocation = {
  city: Locations.RND,
  phoneNumbers: ['8(863)322-00-93', '8(928)119-40-05'],
  description: 'Есть вопрос? Позвоните нам!'
};

const locationSCH: ILocation = {
  city: Locations.SCH,
  phoneNumbers: ['8(918)902-16-54', '8(861)205-25-81'],
  description: 'Есть вопрос? Позвоните нам!'
};

const locationEKB: ILocation = {
  city: Locations.EKB,
  phoneNumbers: ['8(922)206-78-88'],
  description: 'Есть вопрос? Позвоните нам!'
};

const locationKDR: ILocation = {
  city: Locations.KDR,
  phoneNumbers: ['8(861)205-18-71', '8(918)632-80-54'],
  description: 'Есть вопрос? Позвоните нам!'
};

const locationTMN: ILocation = {
  city: Locations.TMN,
  phoneNumbers: ['8(980)044-62-10'],
  description: 'Есть вопрос? Позвоните нам!'
};

const locationOther: ILocation = {
  city: Locations.OTHER,
  phoneNumbers: ['8(800)333-64-88'],
  description: 'Звонок бесплатный по России'
};

export const locations: ILocation[] = [
  locationSPB,
  locationMSK,
  locationRND,
  locationSCH,
  locationEKB,
  locationKDR,
  locationTMN,
  locationOther
];
