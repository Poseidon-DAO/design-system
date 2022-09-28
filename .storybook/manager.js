import { addons } from '@storybook/addons';
import poseidon from './poseidon';
import favicon from './assets/logo.png';

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', favicon);
document.head.appendChild(link);


addons.setConfig({
  theme: poseidon,
});