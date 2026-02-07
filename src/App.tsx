import * as React from 'react';

import './App.css';
import blueprint from './Blueprint/example.json';
import { DataProvider } from './Data/DataContext';
import hydrate from './Engine/hydrate';

const App = (): React.ReactNode => {
  return hydrate(blueprint);
};

export default function Root(): React.JSX.Element {
  return (
    <DataProvider>
      <App />
    </DataProvider>
  );
}
