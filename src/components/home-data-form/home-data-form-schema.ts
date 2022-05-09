import * as yup from 'yup';
import type { HomeData } from './home-data-form.types';

export const getSchema = (): yup.SchemaOf<HomeData> =>
  yup
    .object()
    .shape<yup.SchemaOf<HomeData>['fields']>({
      id: yup.number().notRequired(),
      firstName: yup.string().required(),
      address1: yup.string().required(),
      address2: yup.string().notRequired(),
      city: yup.string().required(),
      state: yup.string().required(),
      zipCode: yup.string().required(),
      country: yup.string().required(),
      numberOfRooms: yup.string().required(),
      squareFootage: yup.number().notRequired()
    })
    .defined();
