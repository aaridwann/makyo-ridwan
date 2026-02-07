import { get as lg, set as ls } from 'lodash';
import React from 'react';

const Ctx = React.createContext<object>(null);

export function DataProvider({ children }) {
  const [state, setState] = React.useState({});

  const get = (path: string) => lg(state, path);

  const set = (path: string, value: any) => {
    const next = structuredClone(state);

    ls(next, path, value);
    setState(next);
    console.log('autosave', next);
  };

  return <Ctx.Provider value={{ get, set }}>{children}</Ctx.Provider>;
}

export const useData = () => React.useContext(Ctx);
