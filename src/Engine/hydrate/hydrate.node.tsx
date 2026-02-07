import registry from '../registry';

import type { BlueprintNode } from '../../Blueprint/blueprint.types';

interface HydrationContext {
  stack: string[];
}

const hydrateNode = (node: BlueprintNode, ctx: HydrationContext): React.ReactNode => {
  const Component = registry[node.type];

  if (!Component) {
    return null;
  }

  ctx.stack.push(node.type);

  const children = node.children?.map((child) => hydrateNode(child, ctx));

  const slots = node.slots
    ? Object.fromEntries(
        Object.entries(node.slots).map(([key, value]) => [
          key,
          value.map((child) => hydrateNode(child, ctx)),
        ]),
      )
    : {};

  ctx.stack.pop();

  return (
    <Component key={node.id} {...node.props} {...slots}>
      {children}
    </Component>
  );
};

export default hydrateNode;
