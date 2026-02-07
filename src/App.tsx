import * as React from 'react';

import './App.css';
import blueprint from './Blueprint/example.json';
import DropdownComponent from './Components/Dropdown';
import { DataProvider } from './Data/DataContext';
import hydrate from './Engine/hydrate';
export const FRUITS = [
  {
    label: 'Apple',
    value: 'apple',
  },
  {
    label: 'Banana',
    value: 'banana',
  },
  {
    label: 'Orange',
    value: 'orange',
  },
  {
    label: 'Mango',
    value: 'mango',
  },
];

const App = (): React.ReactNode => {
  return hydrate(blueprint);
};

export default function Root(): React.JSX.Element {
  return (
    <DataProvider>
      <DropdownComponent options={FRUITS} />
      {/* <App /> */}
    </DataProvider>
  );
}
