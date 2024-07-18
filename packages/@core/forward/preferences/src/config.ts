import type { Preferences } from './types';

const defaultPreferences: Preferences = {
  app: {
    accessMode: 'frontend',
    authPageLayout: 'panel-right',
    colorGrayMode: false,
    colorWeakMode: false,
    compact: false,
    contentCompact: 'wide',
    defaultAvatar:
      'https://cdn.jsdelivr.net/npm/@vbenjs/static-source@0.1.3/source/avatar-v1.webp',
    dynamicTitle: true,
    enablePreferences: true,
    isMobile: false,
    layout: 'sidebar-nav',
    locale: 'zh-CN',
    loginExpiredMode: 'page',
    name: 'Vben Admin',
  },
  breadcrumb: {
    enable: true,
    hideOnlyOne: false,
    showHome: false,
    showIcon: true,
    styleType: 'normal',
  },
  copyright: {
    companyName: 'Vben Admin',
    companySiteLink: 'https://www.vben.pro',
    date: '2024',
    enable: true,
    icp: '',
    icpLink: '',
  },
  footer: {
    enable: true,
    fixed: false,
  },
  header: {
    enable: true,
    hidden: false,
    mode: 'fixed',
  },
  logo: {
    enable: true,
    source:
      'https://cdn.jsdelivr.net/npm/@vbenjs/static-source@0.1.3/source/logo-v1.webp',
  },
  navigation: {
    accordion: true,
    split: true,
    styleType: 'rounded',
  },
  shortcutKeys: {
    enable: true,
    globalLockScreen: true,
    globalLogout: true,
    globalPreferences: true,
    globalSearch: true,
  },
  sidebar: {
    collapsed: false,
    collapsedShowTitle: true,
    enable: true,
    expandOnHover: true,
    extraCollapse: true,
    hidden: false,
    width: 220,
  },
  tabbar: {
    dragable: true,
    enable: true,
    height: 36,
    keepAlive: true,
    persist: true,
    showIcon: true,
    styleType: 'chrome',
  },
  theme: {
    builtinType: 'default',
    colorDestructive: 'hsl(348 100% 61%)',
    colorPrimary: 'hsl(231 98% 65%)',
    colorSuccess: 'hsl(144 57% 58%)',
    colorWarning: 'hsl(42 84% 61%)',
    mode: 'dark',
    radius: '0.5',
    semiDarkMenu: true,
  },
  transition: {
    enable: true,
    loading: true,
    name: 'fade-slide',
    progress: true,
  },
  widget: {
    aiAssistant: true,
    fullscreen: true,
    globalSearch: true,
    languageToggle: true,
    lockScreen: true,
    notification: true,
    sidebarToggle: true,
    themeToggle: true,
  },
};

export { defaultPreferences };
