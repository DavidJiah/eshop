import React from "react";
import { List } from "antd-mobile";
const Item = List.Item;
import icon1 from "@/assets/images/@2x/user-icon1.png";
import icon2 from "@/assets/images/@2x/user-icon2.png";
import icon3 from "@/assets/images/@2x/user-icon3.png";
import icon4 from "@/assets/images/@2x/user-icon4.png";

import icon5 from "@/assets/images/@2x/user-icon5.png";
import icon6 from "@/assets/images/@2x/user-icon6.png";
import userNoHead from "@/assets/images/@2x/user-no-head.png";

export default (props) => {
  const { history } = props;
  const toOrder = (status) => {
    history.push({ pathname: "/order", state: status });
  };
  return (
    <div className="user">
      <div className="user__info-panel">
        <div className="user__info-panel-wrap">
          <div className="user__info-panel-avater">
            <div className="user__info-panel-avater-box">
              <img src={userNoHead} />
            </div>
            <span className="user__info-panel-avater-name">trunks</span>
          </div>
          <Item arrow="horizontal" onClick={() => {}}>
            <span className="user__item-text">全部订单</span>
          </Item>
        </div>
        <div className="user__icon-btn">
          <ul>
            <li className="user__icon-btn-item" onClick={() => toOrder(1)}>
              <img className="user__icon-btn-item-img" src={icon1} />
              <span className="user__icon-btn-item-text">待付款</span>
            </li>
            <li className="user__icon-btn-item" onClick={() => toOrder(2)}>
              <img className="user__icon-btn-item-img" src={icon2} />
              <span className="user__icon-btn-item-text">处理中</span>
            </li>
            <li className="user__icon-btn-item" onClick={() => toOrder(3)}>
              <img className="user__icon-btn-item-img" src={icon3} />
              <span className="user__icon-btn-item-text">已完成</span>
            </li>
            <li className="user__icon-btn-item" onClick={() => toOrder(4)}>
              <img className="user__icon-btn-item-img" src={icon4} />
              <span className="user__icon-btn-item-text">已取消</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="user__other-btn">
        <ul>
          <li className="user__other-btn-item">
            <img className="user__other-btn-item-img" src={icon5} />
            <span className="user__other-btn-item-text">客服咨询</span>
          </li>
          <li className="user__other-btn-item">
            <img className="user__other-btn-item-img" src={icon6} />
            <span className="user__other-btn-item-text">商务合作</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
