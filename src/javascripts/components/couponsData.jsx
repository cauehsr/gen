import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
  <li className="coupons-data">
    <div className="coupons-data-code">
      <img className="coupons-data-code-image" src="/src/images/coupon.png" alt="cupom" />
      <span className="coupons-data-code--text">{props.code}</span>
    </div>
    <div className="coupons-data-descount">
      <span className="coupons-data-descount--text">
        {props.descount}
      </span>
    </div>
    <div className="coupons-data-date">
      <span className="coupons-data-date--text">{props.date}</span>
    </div>
    <div className="coupons-data-config">
      <Link to={`/show/${props.path}`}> <img className="coupons-data-config-image" src="/src/images/config.png" alt="config" /> </Link>
    </div>
    <div className="coupons-data-delete">
      <button onClick={props.onClick}>
        <img className="coupons-data-delete-image" src="/src/images/delete.png" alt="delete" />
      </button>
    </div>
  </li>
);
