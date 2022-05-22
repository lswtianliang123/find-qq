import "./index.css";
import type { PersonInfo } from "../../types";

const PersonShowInfo = ({ qqNumber, headUrl, nickName }: PersonInfo) => {
  return (
    <div className="personShowContainer">
      <img src={headUrl} className="headImage" alt="head image" />
      <div className="content">
        <div>{nickName}</div>
        <div>{qqNumber}</div>
      </div>
    </div>
  );
};

export default PersonShowInfo;
