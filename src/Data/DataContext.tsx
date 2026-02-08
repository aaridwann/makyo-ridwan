import { get as getData, set as setData } from 'lodash';
import React, { useContext, useState } from 'react';

import type { DataContextType, DataProviderProps } from './Data.context.types';

const Ctx = React.createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [state, setState] = useState<Record<string, unknown>>({});

  const get = <T,>(path: string): T => {
    return getData(state, path) as T;
  };

  const set = (path: string, value: unknown): void => {
    const next = structuredClone(state);

    setData(next, path, value);
    setState(next);
  };

  return <Ctx.Provider value={{ get, set }}>{children}</Ctx.Provider>;
};

export const UseData = (): DataContextType => {
  const context = useContext(Ctx);

  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }

  return context;
};
