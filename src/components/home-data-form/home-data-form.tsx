import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { yupResolver } from '@hookform/resolvers/yup';

import type { HomeData } from './home-data-form.types';
import { homeDataFormInitialData, Home, HomeVariable } from './home-data-form.constants';
import { getSchema } from './home-data-form-schema';
import { useAppDispatch, useAppState } from 'contexts/app-context';

export const HomeDataForm = () => {
  const appState = useAppState();
  const appDispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [editedData, setEditedData] = useState<HomeData>({ ...homeDataFormInitialData });
  const { control, handleSubmit, setValue } = useForm<HomeData>({
    mode: 'onChange',
    resolver: yupResolver(getSchema()),
    defaultValues: { ...homeDataFormInitialData }
  });

  useEffect(() => {
    if (params && params.homeId) {
      const filteredData = appState.square.filter((data) => data.id === +params.homeId)[0];
      setEditedData(filteredData);
      setValue('id', filteredData.id);
      setValue('firstName', filteredData.firstName);
      setValue('address1', filteredData.address1);
      setValue('address2', filteredData.address2);
      setValue('city', filteredData.city);
      setValue('state', filteredData.state);
      setValue('zipCode', filteredData.zipCode);
      setValue('country', filteredData.country);
      setValue('numberOfRooms', filteredData.numberOfRooms);
    }
  }, [params]);

  const onSubmit = (data: HomeData) => {
    let livingRoomSquareFootage = 0;
    if (+data.numberOfRooms < 2) {
      livingRoomSquareFootage = 100;
    } else if (+data.numberOfRooms >= 3 && +data.numberOfRooms <= 5) {
      livingRoomSquareFootage = 200;
    } else {
      livingRoomSquareFootage = 300;
    }

    const squareFootage = +data.numberOfRooms * 80 + livingRoomSquareFootage;

    let newData = {
      ...data,
      squareFootage,
      id: Math.round(new Date().getTime() / 1000)
    };

    let newHomeState = [...appState.square];

    if (!editedData.id) {
      newHomeState = [...newHomeState, newData];
    } else {
      const updatedIndex = newHomeState.findIndex((row) => row.id === editedData.id);
      newHomeState[updatedIndex].firstName = newData.firstName;
      newHomeState[updatedIndex].address1 = newData.address1;
      newHomeState[updatedIndex].address2 = newData.address2;
      newHomeState[updatedIndex].city = newData.city;
      newHomeState[updatedIndex].state = newData.state;
      newHomeState[updatedIndex].zipCode = newData.zipCode;
      newHomeState[updatedIndex].country = newData.country;
      newHomeState[updatedIndex].numberOfRooms = newData.numberOfRooms;
      newHomeState[updatedIndex].squareFootage = newData.squareFootage;
    }

    appDispatch({
      type: 'SET_SQUARE_STATE',
      payload: newHomeState
    });

    navigate(`/list`);
  };

  return (
    <Container maxWidth="md" disableGutters>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name={HomeVariable.FirstName}
              control={control}
              render={({ field: { onChange, value }, ...inputProps }) => (
                <TextField
                  {...inputProps}
                  sx={{ marginY: 1 }}
                  aria-label={HomeVariable.FirstName}
                  fullWidth
                  label={Home.FIRST_NAME}
                  onChange={(e) => onChange(e.target.value)}
                  value={value}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name={HomeVariable.Address1}
              control={control}
              render={({ field: { onChange, value }, ...inputProps }) => (
                <TextField
                  {...inputProps}
                  sx={{ marginY: 1 }}
                  aria-label={HomeVariable.Address1}
                  fullWidth
                  label={Home.ADDRESS_1}
                  onChange={(e) => onChange(e.target.value)}
                  value={value}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name={HomeVariable.Address2}
              control={control}
              render={({ field: { onChange, value }, ...inputProps }) => (
                <TextField
                  {...inputProps}
                  sx={{ marginY: 1 }}
                  aria-label={HomeVariable.Address2}
                  fullWidth
                  label={Home.ADDRESS_2}
                  onChange={(e) => onChange(e.target.value)}
                  value={value}
                />
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <Controller
              name={HomeVariable.City}
              control={control}
              render={({ field: { onChange, value }, ...inputProps }) => (
                <TextField
                  {...inputProps}
                  sx={{ marginY: 1 }}
                  aria-label={HomeVariable.City}
                  fullWidth
                  label={Home.CITY}
                  onChange={(e) => onChange(e.target.value)}
                  value={value}
                />
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <Controller
              name={HomeVariable.State}
              control={control}
              render={({ field: { onChange, value }, ...inputProps }) => (
                <TextField
                  {...inputProps}
                  sx={{ marginY: 1 }}
                  aria-label={HomeVariable.State}
                  fullWidth
                  label={Home.STATE}
                  onChange={(e) => onChange(e.target.value)}
                  value={value}
                />
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <Controller
              name={HomeVariable.ZipCode}
              control={control}
              render={({ field: { onChange, value }, ...inputProps }) => (
                <TextField
                  {...inputProps}
                  sx={{ marginY: 1 }}
                  aria-label={HomeVariable.ZipCode}
                  fullWidth
                  label={Home.ZIP_CODE}
                  onChange={(e) => onChange(e.target.value)}
                  value={value}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name={HomeVariable.Country}
              control={control}
              render={({ field: { onChange, value }, ...inputProps }) => (
                <TextField
                  {...inputProps}
                  sx={{ marginY: 1 }}
                  aria-label={HomeVariable.Country}
                  fullWidth
                  label={Home.COUNTRY}
                  onChange={(e) => onChange(e.target.value)}
                  value={value}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name={HomeVariable.NumberOfRooms}
              control={control}
              render={({ field: { onChange, value }, ...inputProps }) => (
                <TextField
                  {...inputProps}
                  sx={{ marginY: 1 }}
                  aria-label={HomeVariable.NumberOfRooms}
                  fullWidth
                  label={Home.NUMBER_ROOMS}
                  onChange={(e) => onChange(e.target.value)}
                  value={value}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: 3 }}>
          <Button onClick={handleSubmit(onSubmit)} fullWidth size="large" variant="contained">
            Submit
          </Button>
        </Grid>
      </form>
    </Container>
  );
};
