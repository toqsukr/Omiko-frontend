export interface ILocation {
  city: Locations;
  phoneNumbers: string[];
  description: string;
}

export enum Locations {
  SPB = 'Санкт-Петербург',
  MSK = 'Москва',
  RND = 'Ростов-на-Дону',
  SCH = 'Сочи',
  EKB = 'Екатеринбург',
  KDR = 'Краснодар',
  TMN = 'Тюмень',
  OTHER = 'Другой'
}
