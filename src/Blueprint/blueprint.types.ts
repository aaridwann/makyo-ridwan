export interface BlueprintNode {
  id: string;
  type: string;
  props?: Record<string, unknown>;
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
