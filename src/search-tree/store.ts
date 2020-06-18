import React, { Reducer } from "react";

export interface FlattenNode {
  key: React.ReactText;
  title: React.ReactNode;
}

export interface SearchTreeState {
  expandedKeys: string[];
  searchValue: string;
  autoExpandParent: boolean;
  flattenList: FlattenNode[]
}

export interface Action {
  type: "set-expand-key" | "set-search-value" | "set-auto-expand-parent" | "set-flatten-list" | "on-node-expand" | "reset-expand" | "on-search-node";
  payload?: any;
}

export const initialState = {
  expandedKeys: [],
  searchValue: "",
  autoExpandParent: true,
  flattenList: []
};

const reducer: Reducer<SearchTreeState, Action> = (state, action) => {
  switch(action.type) {
    case "set-expand-key":
      return {
        ...state,
        expandedKeys: action.payload
      };
    case "set-search-value":
      return {
        ...state,
        searchValue: action.payload
      };
    case "set-auto-expand-parent":
      return {
        ...state,
        autoExpandParent: action.payload
      };
    case "set-flatten-list":
      return {
        ...state,
        flattenList: action.payload
      };
    case "on-node-expand":
      return {
        ...state,
        expandedKeys: action.payload,
        autoExpandParent: false
      };
    case "reset-expand":
      return {
        ...state,
        searchValue: "",
        expandedKeys: [],
        autoExpandParent: false
      };
    case "on-search-node":
      return {
        ...state,
        searchValue: action.payload.value,
        expandedKeys: action.payload.keys,
        autoExpandParent: true
      };
    default:
      return state;
  }
};

export default reducer;
