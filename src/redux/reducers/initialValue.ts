import type { ReduxState } from "../../types";

const initialState: ReduxState = {
  error: undefined,
  loading: false,
  headUrl: "",
  nickName: "",
};

export default initialState;
