/* eslint-disable sonarjs/no-duplicate-string */

import React from 'react';

import type { PropsWithChildren } from 'react';

import { ConnectKitProvider as FamilyConnectKitProvider, getDefaultConfig } from 'connectkit';
import { createConfig, WagmiConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';

import { useTheme } from './theme';

const chains = [sepolia];

export const config = createConfig(
  getDefaultConfig({
    appName: 'Your App Name',
    appDescription: 'Your App Description',
    appIcon: 'https://family.co/logo.png',
    appUrl: 'https://family.co',
    chains,
    walletConnectProjectId: (import.meta.env.VITE_WALLETCONNECT_PROJECT_ID ?? '') as string
  })
);

const modalLightTheme = {
  '--ck-font-family': 'Roboto',
  '--ck-font-weight': '400',
  '--ck-border-radius': '8px',
  '--ck-overlay-backdrop-filter': 'blur(2px)',
  '--ck-modal-heading-font-weight': '600',
  '--ck-qr-border-radius': '8px',
  '--ck-connectbutton-font-size': '15px',
  '--ck-connectbutton-color': '#373737',
  '--ck-connectbutton-background': '#F6F7F9',
  '--ck-connectbutton-background-secondary': '#FFFFFF',
  '--ck-connectbutton-border-radius': '3px',
  '--ck-connectbutton-box-shadow': '0 0 0 0 #ffffff',
  '--ck-connectbutton-hover-color': '#373737',
  '--ck-connectbutton-hover-background': '#F0F2F5',
  '--ck-connectbutton-hover-box-shadow': '0 0 0 0 #ffffff',
  '--ck-connectbutton-active-color': '#373737',
  '--ck-connectbutton-active-background': '#EAECF1',
  '--ck-connectbutton-active-box-shadow': '0 0 0 0 #ffffff',
  '--ck-connectbutton-balance-color': '#373737',
  '--ck-connectbutton-balance-background': '#fff',
  '--ck-connectbutton-balance-box-shadow': 'inset 0 0 0 1px #F6F7F9',
  '--ck-connectbutton-balance-hover-background': '#F6F7F9',
  '--ck-connectbutton-balance-hover-box-shadow': 'inset 0 0 0 1px #F0F2F5',
  '--ck-connectbutton-balance-active-background': '#F0F2F5',
  '--ck-connectbutton-balance-active-box-shadow': 'inset 0 0 0 1px #EAECF1',
  '--ck-primary-button-font-weight': '500',
  '--ck-primary-button-border-radius': '8px',
  '--ck-primary-button-color': '#f8fafc',
  '--ck-primary-button-background': '#2563eb',
  '--ck-primary-button-box-shadow': '0 0 0 0 #ffffff',
  '--ck-primary-button-hover-color': '#f8fafc',
  '--ck-primary-button-hover-background': '#2564ebec',
  '--ck-primary-button-hover-box-shadow': '0 0 0 0 #ffffff',
  '--ck-primary-button-active-color': '#373737',
  '--ck-primary-button-active-background': '#2564ebec',
  '--ck-primary-button-active-box-shadow': '0 0 0 0 #ffffff',
  '--ck-secondary-button-font-weight': '500',
  '--ck-secondary-button-border-radius': '8px',
  '--ck-secondary-button-color': '#f1f5f9',
  '--ck-secondary-button-background': '#0f172a',
  '--ck-secondary-button-box-shadow': '0 0 0 0 #ffffff',
  '--ck-secondary-button-hover-color': '#f1f5f9',
  '--ck-secondary-button-hover-background': '#0f172ae6',
  '--ck-secondary-button-hover-box-shadow': '0 0 0 0 #ffffff',
  '--ck-secondary-button-active-color': '#373737',
  '--ck-secondary-button-active-background': '#0f172ae6',
  '--ck-secondary-button-active-box-shadow': '0 0 0 0 #ffffff',
  '--ck-tertiary-button-font-weight': '500',
  '--ck-tertiary-button-border-radius': '8px',
  '--ck-tertiary-button-color': '#373737',
  '--ck-tertiary-button-background': '#F6F7F9',
  '--ck-tertiary-button-box-shadow': '0 0 0 0 #ffffff',
  '--ck-tertiary-button-hover-color': '#373737',
  '--ck-tertiary-button-hover-background': '#F6F7F9',
  '--ck-tertiary-button-hover-box-shadow': '0 0 0 0 #ffffff',
  '--ck-tertiary-button-active-color': '#373737',
  '--ck-tertiary-button-active-background': '#F6F7F9',
  '--ck-tertiary-button-active-box-shadow': '0 0 0 0 #ffffff',
  '--ck-modal-box-shadow': '0px 2px 4px 0px #00000005',
  '--ck-overlay-background': '#000000cc',
  '--ck-body-color': '#020817',
  '--ck-body-color-muted': '#0f172a',
  '--ck-body-color-muted-hover': '#0f172a',
  '--ck-body-background': '#ffffff',
  '--ck-body-background-transparent': 'rgba(255,255,255,0)',
  '--ck-body-background-secondary': '#f6f7f9',
  '--ck-body-background-secondary-hover-background': '#e0e4eb',
  '--ck-body-background-secondary-hover-outline': '#4282FF',
  '--ck-body-background-tertiary': '#F3F4F7',
  '--ck-body-action-color': '#999999',
  '--ck-body-divider': '#f7f6f8',
  '--ck-body-color-danger': '#FF4E4E',
  '--ck-body-color-valid': '#32D74B',
  '--ck-siwe-border': '#F0F0F0',
  '--ck-body-disclaimer-background': '#f6f7f9',
  '--ck-body-disclaimer-color': '#AAAAAB',
  '--ck-body-disclaimer-link-color': '#838485',
  '--ck-body-disclaimer-link-hover-color': '#000000',
  '--ck-tooltip-background': '#ffffff',
  '--ck-tooltip-background-secondary': '#ffffff',
  '--ck-tooltip-color': '#999999',
  '--ck-tooltip-shadow': '0px 2px 10px 0 #00000014',
  '--ck-dropdown-button-color': '#999999',
  '--ck-dropdown-button-box-shadow': '0 0 0 1px rgba(0,0,0,0.01), 0px 0px 7px rgba(0, 0, 0, 0.05)',
  '--ck-dropdown-button-background': '#fff',
  '--ck-dropdown-button-hover-color': '#8B8B8B',
  '--ck-dropdown-button-hover-background': '#F5F7F9',
  '--ck-qr-dot-color': '#000000',
  '--ck-qr-background': '#ffffff',
  '--ck-qr-border-color': '#f7f6f8',
  '--ck-focus-color': '#2563eb',
  '--ck-spinner-color': '#2563eb',
  '--ck-copytoclipboard-stroke': '#CCCCCC',
  '--ck-recent-badge-color': '#777',
  '--ck-recent-badge-background': '#F6F7F9',
  '--ck-recent-badge-border-radius': '8px'
};

const modalDarkTheme = {
  '--ck-font-family': 'Roboto',
  '--ck-font-weight': '400',
  '--ck-border-radius': '8px',
  '--ck-overlay-backdrop-filter': 'blur(2px)',
  '--ck-modal-heading-font-weight': '600',
  '--ck-qr-border-radius': '8px',
  '--ck-connectbutton-font-size': '15px',
  '--ck-connectbutton-color': '#373737',
  '--ck-connectbutton-background': '#F6F7F9',
  '--ck-connectbutton-background-secondary': '#FFFFFF',
  '--ck-connectbutton-border-radius': '3px',
  '--ck-connectbutton-box-shadow': '0 0 0 0 #ffffff',
  '--ck-connectbutton-hover-color': '#373737',
  '--ck-connectbutton-hover-background': '#F0F2F5',
  '--ck-connectbutton-hover-box-shadow': '0 0 0 0 #ffffff',
  '--ck-connectbutton-active-color': '#373737',
  '--ck-connectbutton-active-background': '#EAECF1',
  '--ck-connectbutton-active-box-shadow': '0 0 0 0 #ffffff',
  '--ck-connectbutton-balance-color': '#373737',
  '--ck-connectbutton-balance-background': '#fff',
  '--ck-connectbutton-balance-box-shadow': 'inset 0 0 0 1px #F6F7F9',
  '--ck-connectbutton-balance-hover-background': '#F6F7F9',
  '--ck-connectbutton-balance-hover-box-shadow': 'inset 0 0 0 1px #F0F2F5',
  '--ck-connectbutton-balance-active-background': '#F0F2F5',
  '--ck-connectbutton-balance-active-box-shadow': 'inset 0 0 0 1px #EAECF1',
  '--ck-primary-button-font-weight': '500',
  '--ck-primary-button-border-radius': '8px',
  '--ck-primary-button-color': '#0f172a',
  '--ck-primary-button-background': '#3b82f6',
  '--ck-primary-button-box-shadow': '0 0 0 0 #ffffff',
  '--ck-primary-button-hover-color': '#0f172a',
  '--ck-primary-button-hover-background': '#3b83f6e6',
  '--ck-primary-button-hover-box-shadow': '0 0 0 0 #ffffff',
  '--ck-primary-button-active-color': '#373737',
  '--ck-primary-button-active-background': '#3b83f6e6',
  '--ck-primary-button-active-box-shadow': '0 0 0 0 #ffffff',
  '--ck-secondary-button-font-weight': '500',
  '--ck-secondary-button-border-radius': '8px',
  '--ck-secondary-button-color': '#f8fafc',
  '--ck-secondary-button-background': '#1e293b',
  '--ck-secondary-button-box-shadow': '0 0 0 0 #ffffff',
  '--ck-secondary-button-hover-color': '#f8fafc',
  '--ck-secondary-button-hover-background': '#1e293be5',
  '--ck-secondary-button-hover-box-shadow': '0 0 0 0 #ffffff',
  '--ck-secondary-button-active-color': '#373737',
  '--ck-secondary-button-active-background': '#1e293be5',
  '--ck-secondary-button-active-box-shadow': '0 0 0 0 #ffffff',
  '--ck-tertiary-button-font-weight': '500',
  '--ck-tertiary-button-border-radius': '8px',
  '--ck-tertiary-button-color': '#373737',
  '--ck-tertiary-button-background': '#F6F7F9',
  '--ck-tertiary-button-box-shadow': '0 0 0 0 #ffffff',
  '--ck-tertiary-button-hover-color': '#373737',
  '--ck-tertiary-button-hover-background': '#F6F7F9',
  '--ck-tertiary-button-hover-box-shadow': '0 0 0 0 #ffffff',
  '--ck-tertiary-button-active-color': '#373737',
  '--ck-tertiary-button-active-background': '#F6F7F9',
  '--ck-tertiary-button-active-box-shadow': '0 0 0 0 #ffffff',
  '--ck-modal-box-shadow': '0px 2px 4px 0px #00000005',
  '--ck-overlay-background': '#000000cc',
  '--ck-body-color': '#f8fafc',
  '--ck-body-color-muted': '#f8fafc',
  '--ck-body-color-muted-hover': '#f8fafc',
  '--ck-body-background': '#020817',
  '--ck-body-background-transparent': 'rgba(255,255,255,0)',
  '--ck-body-background-secondary': '#030c22',
  '--ck-body-background-secondary-hover-background': '#e0e4eb',
  '--ck-body-background-secondary-hover-outline': '#4282FF',
  '--ck-body-background-tertiary': '#051232',
  '--ck-body-action-color': '#999999',
  '--ck-body-divider': '#f7f6f8',
  '--ck-body-color-danger': '#FF4E4E',
  '--ck-body-color-valid': '#32D74B',
  '--ck-siwe-border': '#F0F0F0',
  '--ck-body-disclaimer-background': '#f6f7f9',
  '--ck-body-disclaimer-color': '#AAAAAB',
  '--ck-body-disclaimer-link-color': '#838485',
  '--ck-body-disclaimer-link-hover-color': '#000000',
  '--ck-tooltip-background': '#030c22',
  '--ck-tooltip-background-secondary': '#030c22',
  '--ck-tooltip-color': '#999999',
  '--ck-tooltip-shadow': '0px 2px 10px 0 #00000014',
  '--ck-dropdown-button-color': '#999999',
  '--ck-dropdown-button-box-shadow': '0 0 0 1px rgba(0,0,0,0.01), 0px 0px 7px rgba(0, 0, 0, 0.05)',
  '--ck-dropdown-button-background': '#fff',
  '--ck-dropdown-button-hover-color': '#8B8B8B',
  '--ck-dropdown-button-hover-background': '#F5F7F9',
  '--ck-qr-dot-color': '#000000',
  '--ck-qr-background': '#ffffff',
  '--ck-qr-border-color': '#f7f6f8',
  '--ck-focus-color': '#3b83f6',
  '--ck-spinner-color': '#2563eb',
  '--ck-copytoclipboard-stroke': '#CCCCCC',
  '--ck-recent-badge-color': '#777',
  '--ck-recent-badge-background': '#F6F7F9',
  '--ck-recent-badge-border-radius': '8px'
};

interface IConnectKitProvider extends PropsWithChildren {}

export default function ConnectKitProvider({ children }: IConnectKitProvider) {
  const { theme } = useTheme();

  return (
    <WagmiConfig config={config}>
      <FamilyConnectKitProvider customTheme={theme === 'light' ? modalLightTheme : modalDarkTheme}>
        {children}
      </FamilyConnectKitProvider>
    </WagmiConfig>
  );
}
