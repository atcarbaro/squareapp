import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Box from '@mui/material/Box';

import { SideBar } from 'components/sidebar';
import { TopBar } from 'components/topbar';

import { LoadingScreen } from 'screen/loading-screen';
import { NotFoundScreen } from 'screen/not-found-screen';
import { ListScreen } from 'screen/list-screen';
import { MainScreen } from 'screen/main-screen';

export const Navigation = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <TopBar />
      <SideBar />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="home" element={<MainScreen />}>
            <Route path=":homeId" element={<MainScreen />} />
          </Route>
          <Route path="list" element={<ListScreen />} />
          <Route path="/" element={<MainScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </Suspense>
    </Box>
  );
};
