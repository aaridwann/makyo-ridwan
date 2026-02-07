/* eslint-disable @typescript-eslint/no-unsafe-return */
import hydrateNode from './hydrate.node';

import type { BlueprintPayload } from '../../Blueprint/blueprint.types';

const hydrate = (payload: BlueprintPayload): React.ReactNode => {
  const ctx = { stack: [] as string[] };

  return payload.roots.map((root) => hydrateNode(root, ctx));
};

export default hydrate;
