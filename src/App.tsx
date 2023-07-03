import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import type { FC } from 'react';

import { AppRoutes } from './constants';
import { AboutPageAsync } from './pages/AboutPage';
import { MainPageAsync } from './pages/MainPage';
import { useAppTheme } from './theme/useAppTheme';

import { classNames } from '@-utils/classNames';

const App: FC = () => {
  const { appTheme, toggleAppTheme } = useAppTheme();

  return (
    <div className={classNames('app', appTheme)}>
      <Link to={AppRoutes.ABOUT_PAGE}>ABOUT PAGE</Link>
      <Link to={AppRoutes.MAIN_PAGE}>MAIN PAGE</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={AppRoutes.ABOUT_PAGE} element={<AboutPageAsync />} />
          <Route path={AppRoutes.MAIN_PAGE} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
      <button onClick={toggleAppTheme}>Toggle Theme</button>
    </div>
  );
};

export { App };
