import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app/App';
import { AppThemeProvider } from './shared/providers/appTheme';

const domRootNode = document.getElementById('root');
if (!domRootNode) {
  throw new Error('No root element found!');
}

const reactAppRoot = createRoot(domRootNode);
reactAppRoot.render(
  <BrowserRouter>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </BrowserRouter>
);
