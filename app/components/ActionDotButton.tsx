import React, { useState } from "react";

interface Props {
  tableName: string;
  Order_ID: number;
  HandleItemClick: (
    tableName: string,
    Order_ID: number,
    MenuName: string
  ) => void;
  DropDownlist: any[];
}

const ActionDotButton = (props: Props) => {
  const [dotDDStatus, setDotDDStatus] = useState(false);

  return (
    <div className="btn-group" role="group">
      <div
        className="actionDot"
        onClick={() => setDotDDStatus(dotDDStatus === true ? false : true)}
      >
        <p>...</p>
      </div>
      <ul className={dotDDStatus ? "actionList" : "actionList hideElement"}>
        {props.DropDownlist.map((item) => (
          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                props.HandleItemClick(
                  props.tableName,
                  props.Order_ID,
                  item.name
                );
                setDotDDStatus(false);
              }}
              href="#"
              // data-check={item.Order_ID}
            >
              {item.name}
            </a>
          </li>
        ))}

        {/* <li>
      <a className="dropdown-item" href="#">
        Assign to affiliate
      </a>
    </li> */}
      </ul>
    </div>
  );
};

export default ActionDotButton;
