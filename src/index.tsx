import ReactDOM from 'react-dom';

import { HelloWorldComponent } from './component';

const domRoot = document.getElementById('root');
if (!domRoot) {
  throw new Error('No root element found!');
}

ReactDOM.render(<HelloWorldComponent />, domRoot);
