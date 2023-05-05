import { createHashRouter, createModal, createPanel, createRoot, createView, RoutesConfig } from '@vkontakte/vk-mini-app-router';

export const DEFAULT_ROOT = 'default_root';

export const DEFAULT_VIEW = 'default_view';

export const DEFAULT_VIEW_PANELS = {
  HOME: 'home',
  PERSIK: 'persik',
} as const;

export enum HOME_PANEL_MODALS {
  USER = 'user_modal',
}

export enum PERSIK_PANEL_MODALS {
  PERSIK = 'persik_modal',
}

export const EMPTY_VIEW = 'empty_view';

export enum EMPTY_VIEW_PANELS {
  EMPTY = 'empty',
}

export const ALTERNATIVE_ROOT = 'alternative_root';

export const ALTERNATIVE_VIEW = 'alternative_view';

export enum ALTERNATIVE_VIEW_PANELS {
  ALTERNATIVE = 'alternative',
}

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.HOME, '/', [
        createModal(HOME_PANEL_MODALS.USER, `/${HOME_PANEL_MODALS.USER}`),
      ]),
      createPanel(DEFAULT_VIEW_PANELS.PERSIK, `/${DEFAULT_VIEW_PANELS.PERSIK}`, [
        createModal(PERSIK_PANEL_MODALS.PERSIK, `/${DEFAULT_VIEW_PANELS.PERSIK}/${PERSIK_PANEL_MODALS.PERSIK}`),
        createModal(HOME_PANEL_MODALS.USER, `/${DEFAULT_VIEW_PANELS.PERSIK}/${HOME_PANEL_MODALS.USER}`),
      ]),
      createPanel(DEFAULT_VIEW_PANELS.PERSIK, `/${DEFAULT_VIEW_PANELS.PERSIK}/:emotion`, [
        createModal(PERSIK_PANEL_MODALS.PERSIK, `/${DEFAULT_VIEW_PANELS.PERSIK}/:emotion/${PERSIK_PANEL_MODALS.PERSIK}`, ['emotion'] as const),
        createModal(HOME_PANEL_MODALS.USER, `/${DEFAULT_VIEW_PANELS.PERSIK}/:emotion/${HOME_PANEL_MODALS.USER}`, ['emotion'] as const),
      ], ['emotion'] as const),
    ]),
    createView(EMPTY_VIEW, [
      createPanel(EMPTY_VIEW_PANELS.EMPTY, '/empty'),
    ]),
  ]),
  createRoot(ALTERNATIVE_ROOT, [
    createView(ALTERNATIVE_VIEW, [
      createPanel(ALTERNATIVE_VIEW_PANELS.ALTERNATIVE, '/alternative'),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());

// export const router = createHashRouter([
//   {
//     path: '/',
//     panel: DEFAULT_VIEW_PANELS.HOME,
//     view: DEFAULT_VIEW,
//     root: DEFAULT_ROOT,
//   },
//   {
//     path: `/${HOME_PANEL_MODALS.USER}`,
//     modal: HOME_PANEL_MODALS.USER,
//     panel: DEFAULT_VIEW_PANELS.HOME,
//     view: DEFAULT_VIEW,
//     root: DEFAULT_ROOT,
//   },
//   {
//     path: `/${DEFAULT_VIEW_PANELS.PERSIK}`,
//     panel: DEFAULT_VIEW_PANELS.PERSIK,
//     view: DEFAULT_VIEW,
//     root: DEFAULT_ROOT,
//   },
//   {
//     path: `/${DEFAULT_VIEW_PANELS.PERSIK}/${PERSIK_PANEL_MODALS.PERSIK}`,
//     modal: PERSIK_PANEL_MODALS.PERSIK,
//     panel: DEFAULT_VIEW_PANELS.PERSIK,
//     view: DEFAULT_VIEW,
//     root: DEFAULT_ROOT,
//   },
//   {
//     path: `/${DEFAULT_VIEW_PANELS.PERSIK}/${HOME_PANEL_MODALS.USER}`,
//     modal: HOME_PANEL_MODALS.USER,
//     panel: DEFAULT_VIEW_PANELS.PERSIK,
//     view: DEFAULT_VIEW,
//     root: DEFAULT_ROOT,
//   },
//   {
//     path: `/${DEFAULT_VIEW_PANELS.PERSIK}/:emotion`,
//     panel: DEFAULT_VIEW_PANELS.PERSIK,
//     view: DEFAULT_VIEW,
//     root: DEFAULT_ROOT,
//   },
//   {
//     path: `/${DEFAULT_VIEW_PANELS.PERSIK}/:emotion/${PERSIK_PANEL_MODALS.PERSIK}`,
//     modal: PERSIK_PANEL_MODALS.PERSIK,
//     panel: DEFAULT_VIEW_PANELS.PERSIK,
//     view: DEFAULT_VIEW,
//     root: DEFAULT_ROOT,
//   },
//   {
//     path: `/${DEFAULT_VIEW_PANELS.PERSIK}/:emotion/${HOME_PANEL_MODALS.USER}`,
//     modal: HOME_PANEL_MODALS.USER,
//     panel: DEFAULT_VIEW_PANELS.PERSIK,
//     view: DEFAULT_VIEW,
//     root: DEFAULT_ROOT,
//   },
//   {
//     path: '/empty',
//     panel: EMPTY_VIEW_PANELS.EMPTY,
//     view: EMPTY_VIEW,
//     root: DEFAULT_ROOT,
//   },
//   {
//     path: '/alternative',
//     panel: ALTERNATIVE_VIEW_PANELS.ALTERNATIVE,
//     view: ALTERNATIVE_VIEW,
//     root: ALTERNATIVE_ROOT,
//   },
// ]);