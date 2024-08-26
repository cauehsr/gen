import React from 'react';

import FormComponent from './formComponent';

// 
export default props => (
  <li className="apply-coupons-items">
    <div className="apply-coupons-items-image">
      <img className="apply-coupons-items-image--user" src="/src/images/user-apply.png" alt="user" />
      <span className="apply-coupons-items-image--product">{props.product}</span>
    </div>
    <div className="apply-coupons-items-price">
      <span className="apply-coupons-items-price--product">
        {props.price}
      </span>
    </div>
    <div className="apply-coupons-items-coupon">
      <FormComponent
        placeholder="Cupom"
        type='text'
        name='coupon'
        value={props.coupon}
        // handleChange={this.handleChangeCoupon}
        className="input-group"
      />
      <button className="input-icon">
        <img className="input-icon-add" src="/src/images/icon-add.png" alt="add" />
      </button>
    </div>
  </li>
);
