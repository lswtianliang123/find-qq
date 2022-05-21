import type { AnyAction } from "redux";

export interface PersonInfo {
  qqNumber?: number;
  headUrl: string;
  nickName: string;
}

export type ReduxState = {
  loading: boolean;
  error?: string;
} & PersonInfo;

export type Dispatch = <R = void>(action: AnyAction) => Promise<R>;
