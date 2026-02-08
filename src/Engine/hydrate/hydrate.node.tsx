import { get as getLodash, isArray } from 'lodash';
import React from 'react';

import registry from '../registry';

import type { HydrationContext, BlueprintNode } from './hydrate.types';
import type { DataContextType } from '../../Data/Data.context.types';

/**
 * get slots
 * @param {BlueprintNode} node - Node
 * @param {HydrationContext} ctx - Context
 * @returns {Record<string, unknown>} - get slots
 */
const _getSlots = (node: BlueprintNode, ctx: HydrationContext): Record<string, unknown> => {
  if (node.slots) {
    return Object.fromEntries(
      Object.entries(node.slots).map(([key, nodes]) => [
        key,
        nodes.map((child) => hydrateNode(child, ctx)),
      ]),
    );
  }

  return {};
};

/**
 * get children node
 * @param {BlueprintNode} node - Node
 * @param {HydrationContext} ctx - Context
 * @returns {React.ReactNode[] | null} - get children node
 */
const _getChildren = (node: BlueprintNode, ctx: HydrationContext): React.ReactNode => {
  if (typeof node.children === 'string') {
    return node.children;
  }

  if (isArray(node.children)) {
    return node.children.map((child) => hydrateNode(child, ctx));
  }

  return null;
};

/**
 * get binding props
 * @param {string | Record<string, string>} bind - binding attribute
 * @param {DataContextType['get']} get - get context value
 * @param {DataContextType['set']} set - set context value
 * @returns {Record<string, unknown>} - get binding props
 */
const _getBindingProps = (
  bind: string | Record<string, string>,
  get: DataContextType['get'],
  set: DataContextType['set'],
): Record<string, unknown> => {
  const props: Record<string, unknown> = {};

  if (typeof bind === 'string') {
    props.value = get(bind);
    props.onChange = (v: unknown) => set(bind, v);
  } else if (typeof bind === 'object') {
    Object.entries(bind).forEach(([propName, path]) => {
      props[propName] = get(path);

      if (propName === 'value' || propName === 'checked') {
        props.onChange = (v: unknown) => set(path, v);
      }
    });
  }

  return props;
};

/**
 * parse hydrate node
 * @param {BlueprintNode} node - Node
 * @param {HydrationContext} ctx - Context
 * @returns {React.ReactNode} - parse hydrate node
 */
const hydrateNode = (node: BlueprintNode, ctx: HydrationContext): React.ReactNode => {
  const typeNode = getLodash(node, 'type');
  const Component = registry[typeNode];

  if (!Component) {
    return null;
  }

  ctx.stack.push(typeNode);

  const children = _getChildren(node, ctx);
  const slots = _getSlots(node, ctx);
  const bindingProps = node?.bind ? _getBindingProps(node.bind, ctx.data.get, ctx.data.set) : {};

  ctx.stack.pop();

  return (
    <Component key={node.id} {...node.props} {...slots} {...bindingProps}>
      {children}
    </Component>
  );
};

export default hydrateNode;
