import type { PersonInfo } from "../../types";

const PersonShowInfo = ({ qqNumber, headUrl, nickName }: PersonInfo) => {
  return (
    <div>
      <img src={headUrl} className="" alt="head image" />
      <div>
        <div>{nickName}</div>
        <div>{qqNumber}</div>
      </div>
    </div>
  );
};

export default PersonShowInfo;
