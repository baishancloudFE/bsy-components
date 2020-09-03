import React from 'react';

export interface LoginConfig {
  view: string;
  login: string;
  logout: string;
  validate: string;
}

export interface LoginStates {
  loading: boolean;
}

export interface LoginProviderProps {
  open?: boolean;
  domain: string;
  config: LoginConfig;
  loading?: React.ReactNode;
  children?: React.ReactNode;
  clearFields?: string[];
  onError?: (msg: string, desc: string) => void;
}
