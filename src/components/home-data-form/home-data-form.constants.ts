import type { HomeData } from './home-data-form.types';

export const homeDataFormInitialData: HomeData = {
  id: 0,
  firstName: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zipCode: '',
  country: '',
  numberOfRooms: '',
  squareFootage: 0
};

export enum Home {
  FIRST_NAME = 'First Name',
  ADDRESS_1 = 'Address 1',
  ADDRESS_2 = 'Address 2',
  CITY = 'City',
  STATE = 'State',
  ZIP_CODE = 'Zip Code',
  COUNTRY = 'Country',
  NUMBER_ROOMS = 'Number of Rooms',
  SQUARE_FOOTAGE = 'Square Footage'
}

export enum HomeVariable {
  FirstName = 'firstName',
  Address1 = 'address1',
  Address2 = 'address2',
  City = 'city',
  State = 'state',
  ZipCode = 'zipCode',
  Country = 'country',
  NumberOfRooms = 'numberOfRooms'
}
