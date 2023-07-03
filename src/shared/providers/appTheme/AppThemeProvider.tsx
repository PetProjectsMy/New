import { useState, useMemo } from 'react';

import { APP_THEME_DEFAULT, APP_THEME_LOCAL_STORAGE_KEY, AppThemeContext } from './AppThemeContext';

import type { AppThemeContextProps, AppTheme } from './AppThemeContext';
import type { FC, PropsWithChildren } from 'react';

const appThemeSavedLocally =
  (localStorage.getItem(APP_THEME_LOCAL_STORAGE_KEY) as AppTheme) || APP_THEME_DEFAULT;

const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [appTheme, setAppTheme] = useState<AppTheme>(appThemeSavedLocally);

  const appThemeContextDefaultProps: AppThemeContextProps = useMemo(() => {
    return {
      appTheme,
      setAppTheme(theme) {
        setAppTheme(theme);
      },
    };
  }, [appTheme]);

  return (
    <AppThemeContext.Provider value={appThemeContextDefaultProps}>
      {children}
    </AppThemeContext.Provider>
  );
};

export { AppThemeProvider };
