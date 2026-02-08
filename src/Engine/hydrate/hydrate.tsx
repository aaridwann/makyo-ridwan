import { get } from 'lodash';

import { UseData } from '../../Data/DataContext';

import hydrateNode from './hydrate.node';

import type { BlueprintPayload } from '../../Blueprint/blueprint.types';
import type React from 'react';

/**
 * Root hydrate
 * @param {BlueprintPayload} - Blue print from payload JSON
 * @return {React.ReactNode} - Root hydrate
 */
const hydrate = (payload: BlueprintPayload): React.ReactNode => {
  const data = UseData();
  const roots = get(payload, 'roots', []);
  const ctx = { stack: [] as string[], data };

  return roots.map((root) => hydrateNode(root, ctx));
};

export default hydrate;
