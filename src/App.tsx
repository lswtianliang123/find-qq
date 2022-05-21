import React from "react";
import { debounce } from "lodash";
import PersonShowInfo from "./components/personShowInfo";
import ErrorInfo from "./components/errorInfo";
import { connect } from "react-redux";
import { queryPersonInfo } from "./redux/actions";
import "./App.css";

import type { ReduxState } from "./types";

const App = ({ reduxState, queryPersonInfo }: AppProps) => {
  const { qqNumber, headUrl, nickName, loading, error } = reduxState;

  const onChangeHandler = debounce((e: any) => {
    queryPersonInfo(e.target.value);
  }, 500);

  return (
    <div className="App">
      <div>
        <label>
          QQ <input value={qqNumber} type="text" onChange={onChangeHandler} />
        </label>

        {loading && <div>loading...</div>}
        {error && <ErrorInfo error={error} />}

        {!loading && nickName && (
          <PersonShowInfo
            headUrl={headUrl}
            nickName={nickName}
            qqNumber={qqNumber}
          />
        )}
      </div>
    </div>
  );
};

function mapStateToProps(state: ReduxState) {
  return {
    reduxState: state,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    queryPersonInfo: (qqNumber: number) => dispatch(queryPersonInfo(qqNumber)),
  };
}

export type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
export type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;
export type AppProps = MapStateToPropsType & mapDispatchToPropsType;
export default connect(mapStateToProps, mapDispatchToProps)(App);
