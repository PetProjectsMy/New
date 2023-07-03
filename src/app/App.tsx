import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { AppRoutes } from '@/shared/constants';
import { useAppTheme } from '@/shared/providers/appTheme';
import { classnames } from '@-utils/ui';

import type { FC } from 'react';

import './styles/index.scss';

const App: FC = () => {
  const { appTheme, toggleAppTheme } = useAppTheme();

  return (
    <div className={classnames('app', appTheme)}>
      <Link to={AppRoutes.ABOUT_PAGE}>ABOUT PAGE</Link>
      <Link to={AppRoutes.MAIN_PAGE}>MAIN PAGE</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={AppRoutes.ABOUT_PAGE} element={<AboutPage />} />
          <Route path={AppRoutes.MAIN_PAGE} element={<MainPage />} />
        </Routes>
      </Suspense>
      <button onClick={toggleAppTheme}>Toggle Theme</button>
    </div>
  );
};

export { App };
