import { AgnosticRouteMatch, Location, Params, RouterState } from '@remix-run/router';
import { RouteContextObject } from '../contexts';
import { PageInternal } from '../type';
import { STATE_KEY_SHOW_MODAL, STATE_KEY_SHOW_POPOUT } from '../const';

export function getParamKeys(path: string | undefined): string[] {
  return path
    ?.match(/\/:[^\/]+/g)
    ?.map((param) => param.replace('/', '')) ?? [];
}

export function fillParamsIntoPath(path: string, params: Params): string {
  const parameters = getParamKeys(path);
  const paramInjector = (acc: string, param: string): string => {
    const paramName = param.replace(':', '');
    if (!params[paramName]) {
      throw new Error(`Missing parameter ${paramName} while building route ${path}`);
    }
    return acc.replace(param, params[paramName] as string);
  };
  return parameters.reduce(paramInjector, path);
}

export function getContextFromState(state: RouterState): RouteContextObject {
  return {
    state,
    match: state.matches.length ? state.matches[state.matches.length - 1] as AgnosticRouteMatch<string, PageInternal> : undefined,
    panelsHistory: [],
  };
}

export function isModalShown(location: Location): boolean {
  return location.state && STATE_KEY_SHOW_MODAL in location.state;
}

export function isPopoutShown(location: Location): boolean {
  return location.state && STATE_KEY_SHOW_POPOUT in location.state;
}

export function createKey() {
  return Math.random().toString(36).substring(2, 9);
}

export function getDisplayName(WrappedComponent: {displayName?: string; name?: string}) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}