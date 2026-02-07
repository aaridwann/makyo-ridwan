export interface BlueprintNode {
  id: string;
  type: string;

  props?: Record<string, any>;
  children?: BlueprintNode[];
  slots?: Record<string, BlueprintNode[]>;

  meta?: {
    dataBinding?: string;
    visibility?: string;
  };
}

export interface BlueprintPayload {
  roots: BlueprintNode[];
}
