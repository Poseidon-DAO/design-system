import { create } from '@storybook/theming';
import logo from './assets/logo.png';

export default create({
  base: 'dark',
  brandTitle: 'Poseidon DAO storybook',
  brandUrl: 'https://poseidondao.org',
  brandImage: logo,
  brandTarget: '_self',
});
