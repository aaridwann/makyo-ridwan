import type { DataContextType } from '../../Data/Data.context.types';

export interface BindingMap {
  [propName: string]: string; // propName -> path in data
}

export interface HydrationContext {
  stack: string[];
  data: DataContextType;
}

export interface BlueprintNode<Props = Record<string, unknown>> {
  id: string;
  type: string;
  props?: Props;
  children?: BlueprintNode[];
  slots?: Record<string, BlueprintNode[]>;
  bind?: BindingMap;
}
