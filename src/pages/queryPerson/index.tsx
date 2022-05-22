import React, { useState } from "react";
import { debounce } from "lodash";
import PersonShowInfo from "../../components/personShowInfo";
import ErrorInfo from "../../components/common/errorInfo";
import { connect } from "react-redux";
import { queryPersonInfo } from "../../redux/actions";
import { validateQQ } from "../../utils";
import "./index.css";

import type { ReduxState } from "../../types";
import type { ChangeEventHandler } from "react";

const QueryPersonPage = ({
  reduxState,
  queryPersonInfo,
}: QueryPersonPageProps) => {
  const [isValidQQ, setIsValidQQ] = useState<Boolean | undefined>(undefined);
  const { qqNumber, headUrl, nickName, loading, error } = reduxState;

  // qq 号变化处理函数
  const onQQNUmberChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    // 先校验是否合法， 5-10 为数字
    if (!validateQQ(e.target.value)) {
      setIsValidQQ(false);
      return;
    }

    setIsValidQQ(true);
    // 防抖，暂定 500 毫秒
    debounce(() => queryPersonInfo(Number(e.target.value)), 500)();
  };

  // 渲染内容区域
  const renderContentArea = () => {
    if (!isValidQQ) {
      return null;
    }

    if (loading) {
      return <div>we are querying data, please wait...</div>;
    }

    if (error) {
      return <ErrorInfo error={error} />;
    }

    return (
      <PersonShowInfo
        headUrl={headUrl}
        nickName={nickName}
        qqNumber={qqNumber}
      />
    );
  };

  return (
    <div className="queryContainer">
      <div>
        <label>
          QQ
          <input
            className="qqText"
            type="text"
            onChange={onQQNUmberChangeHandler}
          />
        </label>

        {isValidQQ !== undefined && !isValidQQ && (
          <div className="inValidQQ">不合法的 QQ 号，请输入 5 到 10 位数字</div>
        )}

        {renderContentArea()}
      </div>
    </div>
  );
};

const mapStateToProps = (state: ReduxState) => {
  return {
    reduxState: state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    queryPersonInfo: (qqNumber: number) => dispatch(queryPersonInfo(qqNumber)),
  };
};

type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;
type QueryPersonPageProps = MapStateToPropsType & mapDispatchToPropsType;
export default connect(mapStateToProps, mapDispatchToProps)(QueryPersonPage);
