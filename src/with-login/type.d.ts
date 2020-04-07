import React from 'react';

interface ApiData {
  resource: string;
  api_type: number;
  verb: number;
}

interface MenuData {
  key: string;
  to: string;
  name: string;
  iconType?: string;
  subs?: Array<MenuData>;
}

interface ViewResponseData {
  jwtToken: string;
  name: string;
  cname: string;
  menu: Array<MenuData>;
  api: Array<ApiData>;
}

export interface ViewResponse {
  code: number;
  data: ViewResponseData;
}

export interface RouterParams {
  [propName: string]: string;
}

interface LoginConfig {
  view: string;
  login: string;
  logout: string;
  validate: string;
}

export interface WithLoginProps {
  open?: boolean;
  domain: string;
  config: LoginConfig;
  children: React.ReactChildren;
}
