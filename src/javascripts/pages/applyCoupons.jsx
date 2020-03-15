import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import FormComponent from '../components/formComponent';

import ApplyCouponComponent from 'javascripts/components/applyCouponComponent';
import data from '../../JSON/mockProducts.json';

class ApplyCoupons extends Component {
  constructor(props) {
    super(props);
    this.state = {

      couponsList: [
        {
          product: 'Touca de Algodão',
          price: 'R$86,40',
          // date: '13/08/2020',
        },
      ]
    };
  }

  render() {
    const { couponsList } = this.state;
    return (
      <section id="apply" className={'apply'} ref="apply">
        <div className="apply-block">
          <div className="apply-limit limit-grid">
            <h2 className="title">
              Aplicar Cupons
          </h2>
            <p className="text">
              Aplique descontos nos pedidos da sua loja.
          </p>
            <div className="apply-content">
              <ul className="apply-coupon">
                {
                  data.Products.map((product) => {
                    return (
                      <li className="apply-coupons-items">
                        <div className="apply-coupons-items-image">
                          <img className="apply-coupons-items-image--user" src="/src/images/user-apply.png" alt="user" />
                          {product.titleProduct}
                        </div>
                        <div className="apply-coupons-items-price">
                          {product.priceProduct}
                        </div>
                        <div className="apply-coupons-items-coupon">
                          <FormComponent
                            placeholder="Cupom"
                            type='text'
                            name='coupon'
                            // value={props.coupon}
                            className="input-group"
                          />
                          <button className="input-icon">
                            <img className="input-icon-add" src="/src/images/icon-add.png" alt="add" />
                          </button>
                        </div>
                      </li>
                    );
                  })
                }
              </ul>
              <div className="apply-available">
                <h3 className="apply-available-text">Cupons Disponíveis</h3>
                <h4 className="apply-available-link"><Link to="/gerenciar-cupons"> Editar Cupons </Link></h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(ApplyCoupons);
