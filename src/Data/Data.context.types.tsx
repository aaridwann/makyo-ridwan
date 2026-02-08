export interface DataContextType {
  get: <T = unknown>(path: string) => T;
  set: (path: string, value: unknown) => void;
}

export interface DataProviderProps {
  children: React.ReactNode;
}
