import { useContext } from 'react';

import { APP_THEME_LOCAL_STORAGE_KEY, AppTheme, AppThemeContext } from './themeContext';

type UseThemeResult = {
  toggleAppTheme: () => void;
  appTheme: AppTheme;
};

function useAppTheme(): UseThemeResult {
  const { appTheme, setAppTheme } = useContext(AppThemeContext);

  const toggleAppTheme = () => {
    const newTheme = appTheme === AppTheme.DARK ? AppTheme.LIGHT : AppTheme.DARK;
    setAppTheme(newTheme);
    localStorage.setItem(APP_THEME_LOCAL_STORAGE_KEY, newTheme);
  };

  return {
    appTheme,
    toggleAppTheme,
  };
}

export { useAppTheme };
