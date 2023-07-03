import { createContext } from 'react';

const enum AppTheme {
  DARK = 'dark',
  LIGHT = 'light',
}
const APP_THEME_LOCAL_STORAGE_KEY = 'app_theme';
const APP_THEME_DEFAULT = AppTheme.LIGHT;

type AppThemeContextProps = {
  appTheme: AppTheme;
  setAppTheme: (theme: AppTheme) => void;
};

const fallbackProps = {
  appTheme: APP_THEME_DEFAULT,
  setAppTheme: (_theme: AppTheme) => {}, // eslint-disable-line @typescript-eslint/no-empty-function
};

const AppThemeContext = createContext<AppThemeContextProps>(fallbackProps);

export { APP_THEME_DEFAULT, APP_THEME_LOCAL_STORAGE_KEY, AppTheme, AppThemeContext };
export type { AppThemeContextProps };
