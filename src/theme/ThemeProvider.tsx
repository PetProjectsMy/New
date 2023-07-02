import { useState, useMemo } from 'react';

import type { AppThemeContextProps, AppTheme } from './themeContext';
import type { FC, PropsWithChildren } from 'react';

import { APP_THEME_DEFAULT, APP_THEME_LOCAL_STORAGE_KEY, AppThemeContext } from './themeContext';

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
