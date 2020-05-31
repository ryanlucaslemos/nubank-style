import React from 'react';
import { StatusBar } from 'react-native';
import '~/config/ReactotronConfig';

import Routes from '~/routes';

import { COLORS } from './constants';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor={COLORS.PRIMARY} />
    <Routes />
  </>
);

export default App;
