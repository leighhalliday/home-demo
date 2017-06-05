import ReactOnRails from 'react-on-rails';

import HomeApp from './ClientHomeApp';

// This is how react_on_rails can see the HomeApp in the browser.
ReactOnRails.register({
  HomeApp,
});
