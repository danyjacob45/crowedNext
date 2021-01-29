import classNames from "classnames";
import React from "react";
import { v4 as uuidv4 } from "uuid";

interface Props {
  left?: React.ReactNode;
  right?: React.ReactNode;
  wrapperClassName?: string;
  leftClass?: string;
  rightClass?: string;
}

const InfoItem: React.FC<Props> = ({
  wrapperClassName,
  left,
  right,
  leftClass,
  rightClass,
}) => {
  return (
    <>
      <div className={classNames("info-item", wrapperClassName)}>
        <div className={leftClass}>{left}</div>
        <div className={rightClass}>{right}</div>
      </div>
    </>
  );
};

export { InfoItem };
