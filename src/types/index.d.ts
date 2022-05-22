import type { AnyAction } from "redux";

export interface BackendPersonInfo {
  code: number;
  qq: string;
  name: string;
  qlogo: string;
}

export interface PersonInfo {
  qqNumber?: number | string;
  headUrl: string;
  nickName: string;
}

export type ReduxState = {
  loading: boolean;
  error?: string;
} & PersonInfo;

export type Dispatch = <R = void>(action: AnyAction) => Promise<R>;
